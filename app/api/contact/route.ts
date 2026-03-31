import { NextResponse } from 'next/server';

const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

// Limpiar el mapa periódicamente para no ocupar memoria indefinida
const cleanupInterval = setInterval(() => {
  const now = Date.now();
  rateLimit.forEach((value, key) => {
    if (now > value.resetTime) {
      rateLimit.delete(key);
    }
  });
}, RATE_LIMIT_WINDOW_MS);

// Permitir que el proceso termine exitosamente en tests
if (cleanupInterval.unref) {
  cleanupInterval.unref();
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();

    // Implementación de Rate Limiting
    if (ip !== 'unknown') {
      const record = rateLimit.get(ip);
      if (record) {
        if (now > record.resetTime) {
          rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
        } else if (record.count >= RATE_LIMIT_MAX) {
          return NextResponse.json(
            { error: 'Demasiadas solicitudes. Intente nuevamente más tarde.' },
            { status: 429 }
          );
        } else {
          record.count += 1;
        }
      } else {
        rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
      }
    }

    const body = await request.json();
    
    // Logs en desarrollo con IP
    if (process.env.NODE_ENV !== 'production') {
      console.log(`--- [DEV] API /contact: Request desde IP: ${ip} ---`, body);
    }

    const { name, email, message, website } = body;

    // Validación Honeypot (Anti-bots)
    if (website && typeof website === 'string' && website.trim() !== '') {
      if (process.env.NODE_ENV !== 'production') {
        console.log(`--- [DEV] API /contact: Bot detectado en honeypot. Ignorando silenciosamente. ---`);
      }
      return NextResponse.json(
        { success: true, message: 'Su mensaje ha sido enviado correctamente.' },
        { status: 200 }
      );
    }

    // Validación básica de datos
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json(
        { error: 'El campo "name" es obligatorio.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || email.trim() === '') {
      return NextResponse.json(
        { error: 'El campo "email" es obligatorio.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'El formato del "email" es inválido.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim() === '') {
      return NextResponse.json(
        { error: 'El campo "message" es obligatorio.' },
        { status: 400 }
      );
    }

    // Simulación del envío de email
    console.log('--- Simulación: Nuevo mensaje de contacto recibido ---');
    console.log(`Nombre: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Mensaje: ${message}`);
    console.log('------------------------------------------------------');

    // Responder con JSON claro de éxito
    return NextResponse.json(
      { success: true, message: 'Su mensaje ha sido enviado correctamente.' },
      { status: 200 }
    );
  } catch (error) {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    // Logs en desarrollo y producción
    if (process.env.NODE_ENV !== 'production') {
      console.error(`--- [DEV] API /contact: Error capturado desde IP ${ip} ---`, error);
    } else {
      console.error(`Error en el endpoint de contacto desde IP ${ip}:`, error);
    }
    
    // Manejo de errores
    return NextResponse.json(
      { error: 'Ocurrió un error interno al procesar su mensaje.' },
      { status: 500 }
    );
  }
}
