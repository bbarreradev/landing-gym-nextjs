'use client';

import { useState } from 'react';
import { contactService } from '../services/contact.service';

export default function CTA() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorStatus(null);
    
    // Obtenemos todos los inputs mediante FormData
    const formData = new FormData(e.currentTarget);
    
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      website: formData.get('website') as string,
    };

    const response = await contactService.sendContact(data);

    if (response.ok) {
      setSuccess(true);
    } else {
      setErrorStatus(response.error || 'No pudimos enviar la solicitud.');
    }
    
    setLoading(false);
  };

  return (
    <section className="w-full py-24 px-4 md:px-8 bg-[#FF5E14] text-white" id="contacto">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center bg-[#121212]/10 p-8 md:p-12 rounded-2xl shadow-xl border border-white/20">

        <div className="w-full md:w-1/2 text-center md:text-left">
          <span className="bg-white text-[#FF5E14] px-3 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-6 inline-block shadow-sm">
            Promoción Vigente
          </span>
          <h2 className="text-4xl md:text-5xl font-oswald font-bold mb-4 uppercase leading-tight">
            Empezá hoy tu cambio
          </h2>
          <p className="text-xl font-inter mb-4 text-white/90">
            Tu mejor versión empieza ahora. Cupos limitados.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-8 text-white/80 font-inter text-sm">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Sin compromiso. Respuesta inmediata.</span>
          </div>

          <a
            href="https://wa.me/541100000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded font-bold font-inter hover:bg-white hover:text-[#FF5E14] transition-colors"
          >
            Hablar por WhatsApp
          </a>
        </div>

        <div className="w-full md:w-1/2 bg-white rounded-xl p-8 shadow-2xl text-[#121212]">
          {success ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-2xl font-oswald font-bold mb-2">¡Solicitud Enviada!</h3>
              <p className="text-gray-600 font-inter">Te contactaremos a la brevedad para confirmar tu lugar.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {errorStatus && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded text-sm font-inter text-center">
                  {errorStatus}
                </div>
              )}
              <div style={{ display: 'none' }} aria-hidden="true">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Nombre Completo</label>
                <input required type="text" id="name" name="name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-[#FF5E14] focus:ring-1 focus:ring-[#FF5E14] outline-none transition-all font-inter" placeholder="Ej: Juan Pérez" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Correo Electrónico</label>
                <input required type="email" id="email" name="email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-[#FF5E14] focus:ring-1 focus:ring-[#FF5E14] outline-none transition-all font-inter" placeholder="Ej: juan@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Teléfono o Celular</label>
                <input required type="tel" id="phone" name="phone" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-[#FF5E14] focus:ring-1 focus:ring-[#FF5E14] outline-none transition-all font-inter" placeholder="Ej: +54 9 11 1234-5678" />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-[#121212] text-white py-4 rounded font-bold font-oswald text-xl uppercase tracking-wider hover:bg-[#1C1C1C] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Procesando...' : 'Quiero empezar ahora'}
              </button>

              <a
                href="https://wa.me/541100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden w-full mt-2 text-center text-sm font-bold text-[#FF5E14] border border-[#FF5E14] py-3 rounded"
              >
                O hablar por WhatsApp
              </a>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
