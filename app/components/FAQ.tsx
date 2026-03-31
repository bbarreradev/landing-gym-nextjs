export default function FAQ() {
  const faqs = [
    {
      q: '¿Qué incluyen sus planes mensuales de gimnasio?',
      a: 'Nuestros planes básicos te dan acceso libre a todo nuestro equipamiento de alta tecnología cardiovascular y de fuerza en la sede de Buenos Aires, con vestuarios premium y seguimiento por App. Los planes superiores incluyen clases grupales y entrenamiento personalizado.'
    },
    {
      q: '¿Dónde están ubicados exactamente en Buenos Aires?',
      a: 'Nos encontramos en una zona céntrica y segura de Palermo, con facilidad de llegada en transporte público y opciones de estacionamiento cercano. Consultanos por WhatsApp para recibir la ubicación exacta y fotos de la sede.'
    },
    {
      q: 'Nunca fui al gimnasio, ¿los planes son para mí?',
      a: '¡Totalmente! Todos empezamos alguna vez. Contamos con entrenadores enfocados en principiantes que corregirán tu técnica, evitarán que te lastimes y te motivarán desde el primer día.'
    },
    {
      q: '¿Hay algún costo de inscripción oculto?',
      a: 'No. Nuestros planes son transparentes y sin ataduras ni costos sorpresa. Tienes la libertad de renovar mensualmente.'
    }
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-[#121212] text-white" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-oswald font-bold mb-12 text-center uppercase">
          Preguntas Frecuentes
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-[#1C1C1C] rounded border border-gray-800 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-bold font-oswald text-lg">
                <span>{faq.q}</span>
                <span className="transition group-open:rotate-180">
                  <svg className="w-6 h-6 text-[#FF5E14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path></svg>
                </span>
              </summary>
              <div className="p-6 pt-0 font-inter text-gray-400">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
