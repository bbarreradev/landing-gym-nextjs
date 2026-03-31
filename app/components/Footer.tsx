export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-12 px-4 md:px-8 border-t border-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        <div className="md:col-span-2">
          <h3 className="text-2xl font-oswald font-bold text-white mb-4 uppercase">GYM BUENOS AIRES</h3>
          <p className="font-inter text-sm max-w-sm mb-4">
            Cambiando vidas a través del entrenamiento físico y la motivación constante. Tu mejor versión te espera.
          </p>
        </div>

        <div>
          <h4 className="text-white font-oswald font-bold mb-4 uppercase">Navegación</h4>
          <ul className="space-y-2 font-inter text-sm">
            <li><a href="#problema" className="hover:text-white transition-colors">Nuestro Enfoque</a></li>
            <li><a href="#beneficios" className="hover:text-white transition-colors">Planes Mensuales</a></li>
            <li><a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-oswald font-bold mb-4 uppercase">Contacto</h4>
          <ul className="space-y-2 font-inter text-sm">
            <li>Palermo, Buenos Aires (CABA)</li>
            <li>hola@midominio.com</li>
            <li>+54 9 11 1234-5678</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-8 border-t border-gray-900 text-sm font-inter flex flex-col md:flex-row justify-between items-center text-gray-600">
        <p>© {new Date().getFullYear()} Gimnasio en Buenos Aires. Todos los derechos reservados.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Términos</a>
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
