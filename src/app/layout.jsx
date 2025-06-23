
import AOSProvider from "./_components/AosProvider/AosProvider";
import "./globals.css";

import '@/i18n'



export const metadata = {
  title: 'Al-Benyah Website',
  description: 'Frontend implementation with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
     
        <AOSProvider>
        {children}
        </AOSProvider>
      
      </body>
    </html>
  );
}
