export default function Beneficios() {
  const planes = [
    {
      titulo: 'Plan Mensual Básico',
      precio: '$XX.XXX',
      descripcion: 'Acceso a todas las máquinas de fuerza y cardio.',
      features: ['Horarios liberados', 'Vestuarios premium', 'App de seguimiento'],
    },
    {
      titulo: 'Entrenamiento Personalizado',
      precio: '$XX.XXX',
      popular: true,
      descripcion: 'Entrenador enfocado 100% en tus objetivos y técnica.',
      features: ['1 a 1 con entrenador', 'Evaluación física', 'Plan nutricional básico', 'Acceso a sede CABA'],
    },
    {
      titulo: 'Clases Grupales Fitness',
      precio: '$XX.XXX',
      descripcion: 'Energía y motivación grupal para sudar al máximo.',
      features: ['Funcional, HIIT, Yoga', 'Instructores dinámicos', 'Reserva por App'],
    }
  ];

  return (
    <section className="w-full py-24 px-4 md:px-8 bg-[#1C1C1C] text-white" id="beneficios">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-oswald font-bold mb-4 text-center uppercase">
          Planes Mensuales de Gimnasio a tu Medida
        </h2>
        <p className="text-center text-gray-400 font-inter mb-16 max-w-2xl mx-auto">
          Invertí en tu salud con la mejor relación calidad-precio en Buenos Aires. Sin contratos abusivos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planes.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-lg border ${plan.popular ? 'border-[#FF5E14] shadow-2xl scale-105 bg-[#121212]' : 'border-gray-800 bg-[#121212]'} transition-all`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF5E14] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                  Más Elegido
                </span>
              )}

              <h3 className="text-2xl font-oswald font-bold mb-2 uppercase">{plan.titulo}</h3>
              <p className="text-gray-400 font-inter text-sm mb-6">{plan.descripcion}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold font-oswald">{plan.precio}</span>
                <span className="text-gray-500 font-inter">/mes</span>
              </div>
              
              <ul className="flex-1 space-y-4 mb-8 font-inter text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-[#39FF14] mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path></svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contacto" className={`w-full text-center py-3 rounded font-bold font-inter transition-colors ${plan.popular ? 'bg-[#FF5E14] text-white hover:bg-[#e05212]' : 'bg-[#1C1C1C] text-white hover:bg-gray-700 border border-gray-700'}`}>
                Seleccionar Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
