export default function Solucion() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-[#121212] text-white" id="solucion">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-oswald font-bold mb-6 text-white uppercase">
          Equipamiento Moderno y Atención Personalizada
        </h2>
        <p className="font-inter text-lg text-gray-300 max-w-2xl mx-auto">
          En NextIron Gym nos diferenciamos de los gimnasios tradicionales en CABA brindándote el acompañamiento constante que necesitas para alcanzar tus metas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Pilar 1 */}
        <div className="flex flex-col items-center text-center p-6 bg-[#1C1C1C] rounded-lg border border-gray-800 transition-transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-[#FF5E14]/10 rounded-full flex items-center justify-center mb-4 text-[#FF5E14]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
          </div>
          <h3 className="text-xl font-oswald font-bold mb-3 uppercase">Planes a Medida</h3>
          <p className="text-gray-400 font-inter">Rutinas diseñadas específicamente considerando tu nivel, historial y objetivos.</p>
        </div>

        {/* Pilar 2 */}
        <div className="flex flex-col items-center text-center p-6 bg-[#1C1C1C] rounded-lg border border-gray-800 transition-transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-[#FF5E14]/10 rounded-full flex items-center justify-center mb-4 text-[#FF5E14]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 className="text-xl font-oswald font-bold mb-3 uppercase">Entrenadores Expertos</h3>
          <p className="text-gray-400 font-inter">Entrenadores personales en Buenos Aires dedicados a corregir tu técnica y motivarte.</p>
        </div>

        {/* Pilar 3 */}
        <div className="flex flex-col items-center text-center p-6 bg-[#1C1C1C] rounded-lg border border-gray-800 transition-transform hover:-translate-y-2">
          <div className="w-16 h-16 bg-[#FF5E14]/10 rounded-full flex items-center justify-center mb-4 text-[#FF5E14]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          </div>
          <h3 className="text-xl font-oswald font-bold mb-3 uppercase">Infraestructura Premium</h3>
          <p className="text-gray-400 font-inter">Máquinas biomecánicas avanzadas y espacios amplios en nuestra sede central en CABA.</p>
        </div>
      </div>
    </section>
  );
}
