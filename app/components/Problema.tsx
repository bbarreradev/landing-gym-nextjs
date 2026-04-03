import Image from 'next/image';

export default function Problema() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-[#F4F4F4] text-[#121212]" id="problema">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          {/* H2 SEO optimizado */}
          <h2 className="text-3xl md:text-5xl font-oswald font-bold mb-6 text-[#121212] uppercase">
            ¿Buscas resultados reales en tu entrenamiento físico?
          </h2>
          <div className="space-y-4 font-inter text-lg md:text-xl text-gray-700">
            <p>
              Sabemos lo frustrante que es pagar un gimnasio en Buenos Aires y sentirte perdido, sin una guía clara y sin notar cambios después de meses de esfuerzo.
            </p>
            <p>
              La falta de atención, las rutinas genéricas y el equipamiento obsoleto son los principales obstáculos que te impiden ponerte en forma.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="w-full h-80 md:h-96 relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/problem-image.jpg"
              alt="Persona frustrada con su entrenamiento"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
