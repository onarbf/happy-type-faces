import '@/app/styles/globals.css'
import Footer from '@/app/components/footer';
import { Layout} from '@/app/types/index.t';

import { locales } from '@/app/constants/locale';
import { notFound } from 'next/navigation';
import { GlobalContextProvider } from '@/app/context/store';

import { EB_Garamond} from 'next/font/google'
import localFont from 'next/font/local'
import Header from '@/app/components/header';

const Garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--garamond',
  display: 'swap'
})

const HappyTypeFaces = localFont({
  src: '../../../public/happy-font-face.ttf',
  display: 'swap',
  variable: '--happy-type-faces',
})


//generating metadata 
export { generateMetadata } from '@/app/utils/metadata';

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function Layout({children, params: {locale}}: Layout) {
  if (!locales.includes(locale as any)) notFound();
  return (
    <html lang={locale} className={`text-[1.1rem] text-pinky ${HappyTypeFaces.variable } ${Garamond.variable} ${Garamond.className}`}>
      <body>
        <GlobalContextProvider>
          <Header/>
          {children}
          <Footer/>
        </GlobalContextProvider>
      </body>
      
    </html>
  );
}

