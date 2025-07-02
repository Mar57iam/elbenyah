import FetchingDataProvider from "@/Context/dataContext";
import AOSProvider from "./_components/AosProvider/AosProvider";
import TranslationProvider from "./_components/TranslationProvider";
import FetchingServicesProvider from "@/Context/servicesContext";
import '@fortawesome/fontawesome-free/css/all.min.css';

import "./globals.css";
import HeroSlider from "./_components/HeroSlider/HeroSlider";
import Footer from "./_components/Footer/Footer";
import Navbar from "./_components/Navbar/Navbar";

export const metadata = {
  title: 'Al-Benyah ',
  description: 'Frontend implementation with Next.js',
  icons: {
    icon: '/logo.ico', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className="antialiased">
        <Navbar/> 
        <HeroSlider/>
        <FetchingServicesProvider>
          <FetchingDataProvider>
            <AOSProvider>
              <TranslationProvider>
                {children}
              </TranslationProvider>
            </AOSProvider>
          </FetchingDataProvider>
        </FetchingServicesProvider>
        <Footer/>
      </body>
    </html>
  );
}
