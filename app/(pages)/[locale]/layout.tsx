import '@/app/styles/globals.css'
import Footer from '@/app/components/footer';
import { Layout} from '@/app/types/index.t';
import { locales } from '@/app/constants/locale';
import { notFound } from 'next/navigation';
import { GlobalContextProvider } from '@/app/context/store';

import { Libre_Caslon_Text } from 'next/font/google'
import localFont from 'next/font/local'
import Header from '@/app/components/header';
import ThemeProvider from '@/app/components/theme-provider';
const libreCaslonText = Libre_Caslon_Text({
  weight: ['400','700'],
  subsets: ['latin'],
  variable: '--libre-caslon-text',
  display: 'swap'
})

const happyTypeFaces = localFont({
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
    <html lang={locale} className={`text-[1.1rem] ${happyTypeFaces.variable } ${libreCaslonText.variable} ${libreCaslonText.className}`}>
      <body className="flex-col">
        <GlobalContextProvider>
          <ThemeProvider>
            <Header/>
            {children}
            <div className="h-[10vh] w-[100%]  grow"><Footer/></div>
          </ThemeProvider>

        </GlobalContextProvider>
      </body>
      
    </html>
  );
}

