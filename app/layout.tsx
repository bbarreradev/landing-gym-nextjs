import type { Metadata } from 'next';
import { Oswald, Inter } from 'next/font/google';
import './globals.css';

const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Gimnasio en Buenos Aires | Entrenamiento Personalizado y Clases Grupales',
  description: 'Únete a nuestro gimnasio en Buenos Aires. Ofrecemos atención personalizada, clases grupales y planes mensuales con el equipamiento más moderno. ¡Empieza a entrenar hoy!',
  keywords: 'Gimnasio en Buenos Aires, Gimnasio en CABA, Entrenamiento personalizado Buenos Aires, Clases grupales fitness',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "Gimnasio en Buenos Aires",
  "image": "https://midominio.com/gym-image.jpg",
  "telephone": "+541100000000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Falsa 123",
    "addressLocality": "Buenos Aires",
    "addressRegion": "CABA",
    "addressCountry": "AR"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    "opens": "06:00",
    "closes": "22:00"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${oswald.variable} font-sans bg-[#121212] text-[#F4F4F4]`}>
        {children}
      </body>
    </html>
  );
}
