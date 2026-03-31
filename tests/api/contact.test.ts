import { POST } from '../../app/api/contact/route';

describe('API Route - /api/contact', () => {
  const createRequest = (body: any) => {
    return new Request('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': '127.0.0.1'
      },
      body: JSON.stringify(body)
    });
  };

  it('debe ignorar silenciosamente y responder éxito si se llena el honeypot (website)', async () => {
    const req = createRequest({
      name: 'Bot',
      email: 'bot@spam.com',
      message: 'Buy followers',
      website: 'http://spam.com'
    });
    
    const response = await POST(req);
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
  });

  it('debe retornar 400 si falta el nombre', async () => {
    const req = createRequest({
      email: 'test@test.com',
      message: 'Mensaje de prueba'
    });
    
    const response = await POST(req);
    const data = await response.json();
    
    expect(response.status).toBe(400);
    expect(data.error).toBe('El campo "name" es obligatorio.');
  });

  it('debe retornar 400 si el email es inválido', async () => {
    const req = createRequest({
      name: 'Juan',
      email: 'test',
      message: 'Mensaje de prueba'
    });
    
    const response = await POST(req);
    expect(response.status).toBe(400);
  });

  it('debe retornar 200 en un request válido exitoso', async () => {
    const req = createRequest({
      name: 'Maria',
      email: 'maria@test.com',
      message: 'Quiero inscribirme'
    });
    
    const response = await POST(req);
    const data = await response.json();
    
    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
  });
});
