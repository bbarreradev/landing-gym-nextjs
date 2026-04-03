import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-gym.jpg" // Necesitará una imagen real
          alt="Gimnasio en Buenos Aires con equipamiento moderno"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#121212]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center pt-20">
        <Image
          src="/images/nuevo-logo.png"
          alt="NextIron Gym Logo"
          width={1200}
          height={380}
          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 75vw, 70vw"
          className="w-[85%] md:w-[75%] lg:w-[70%] h-auto mb-8 mix-blend-screen"
          priority
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-oswald font-bold text-white mb-6 uppercase tracking-tight">
          Entrenamiento Personalizado y Clases Grupales en Buenos Aires
        </h1>
        <p className="text-lg md:text-xl text-[#F4F4F4] mb-8 max-w-2xl font-inter">
          Únete a NextIron Gym y transforma tu vida. Ofrecemos atención personalizada, clases grupales y los mejores planes mensuales con equipamiento de primer nivel.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#contacto"
            className="bg-[#FF5E14] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[#e05212] transition-colors text-center shadow-lg"
          >
            Quiero empezar ahora
          </a>
          <a
            href="https://wa.me/541100000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-[#F4F4F4] text-[#F4F4F4] px-8 py-4 rounded font-bold text-lg hover:bg-[#F4F4F4] hover:text-[#121212] transition-colors text-center"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
