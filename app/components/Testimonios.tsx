export default function Testimonios() {
  const reviews = [
    {
      nombre: 'Marcos R.',
      foto: '/images/avatar-1.jpg',
      comentario: 'Buscaba un gimnasio en Buenos Aires y los entrenadores aquí son excelentes. Logré en 3 meses lo que no pude en 2 años en otra cadena comercial.',
    },
    {
      nombre: 'Julia M.',
      foto: '/images/avatar-2.jpg',
      comentario: 'Las clases grupales fitness de este gym de CABA tienen una vibra increíble. El equipamiento es súper moderno y siempre está impecable.',
    },
    {
      nombre: 'Diego L.',
      foto: '/images/avatar-3.jpg',
      comentario: 'El entrenamiento personalizado hizo la diferencia total para salir de mi estancamiento. ¡Recomendado!',
    }
  ];

  return (
    <section className="w-full py-24 px-4 md:px-8 bg-[#F4F4F4] text-[#121212]" id="testimonios">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-oswald font-bold mb-12 text-center uppercase text-[#FF5E14]">
          La opinión de nuestra comunidad
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gray-300 mb-6 overflow-hidden relative">
                {/* Fallback avatar */}
                <div className="absolute inset-0 bg-gray-400 flex items-center justify-center text-white font-oswald text-2xl">
                  {review.nombre.charAt(0)}
                </div>
              </div>
              <div className="flex text-[#FF5E14] mb-4">
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
              <p className="font-inter text-gray-700 italic mb-6">"{review.comentario}"</p>
              <span className="font-oswald font-bold uppercase text-lg">{review.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
