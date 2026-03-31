import { contactService } from '../app/services/contact.service';

describe('Contact Service', () => {
  let fetchMock: jest.Mock;

  beforeEach(() => {
    fetchMock = jest.fn();
    global.fetch = fetchMock;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('debe fallar si no hay nombre', async () => {
    const result = await contactService.sendContact({ name: '   ', email: 'test@test.com' });
    expect(result.ok).toBe(false);
    expect(result.error).toBe('El nombre es obligatorio.');
  });

  it('debe fallar si el email es inválido', async () => {
    const result = await contactService.sendContact({ name: 'Juan', email: 'correo-invalido' });
    expect(result.ok).toBe(false);
    expect(result.error).toBe('Debes proporcionar un email válido.');
  });

  it('debe realizar el envio exitosamente cuando los datos son validos', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true })
    });

    const result = await contactService.sendContact({ 
      name: 'Juan Perez', 
      email: 'juan@test.com', 
      message: 'Consulta de prueba' 
    });
    
    expect(result.ok).toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('/api/contact', expect.objectContaining({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }));
  });
});
