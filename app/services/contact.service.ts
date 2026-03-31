export interface ContactData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  website?: string;
}

export interface ContactResponse {
  ok: boolean;
  error?: string;
}

export const contactService = {
  async sendContact(data: ContactData): Promise<ContactResponse> {
    try {
      // Validación básica
      if (!data.name || data.name.trim() === '') {
        return { ok: false, error: 'El nombre es obligatorio.' };
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!data.email || !emailRegex.test(data.email)) {
        return { ok: false, error: 'Debes proporcionar un email válido.' };
      }

      const phoneRegex = /^[0-9+\-\s()]{7,20}$/;
      if (!data.phone || !phoneRegex.test(data.phone)) {
        return { ok: false, error: 'Debes proporcionar un telefono válido.' };
      }


      // Preparar payload
      const payload = {
        name: data.name,
        email: data.email,
        message: data.message || `Teléfono facilitado: ${data.phone}`,
        website: data.website,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        return { ok: true };
      } else {
        const result = await response.json();
        return { ok: false, error: result.error || 'Ocurrió un error al enviar el formulario.' };
      }
    } catch (error) {
      console.error('Error en contactService:', error);
      return { ok: false, error: 'Ocurrió un error de conexión. Intenta de nuevo.' };
    }
  }
};
