import { ResolvingMetadata } from 'next';
import { Metadata } from "../types/index.t";
import { getTranslations } from 'next-intl/server';
import { getLocaleMessages } from '@/app/utils/messages';

import { headers } from 'next/headers';
import { paths } from '../constants/paths';

export async function generateMetadata(
    { params }: Metadata,
    parent: ResolvingMetadata
  ) {
  
    const {locale} = params;
    const messages = await getLocaleMessages(locale);
    const headersList = headers();
    // read the custom x-url header
    const pathname = headersList.get('x-url') || "";
    const path = getPathByPathName(pathname);
    const t = await getTranslations(`Index.Metadata`);
    const title = t('title')
    return {
      title: {
        default: title,
      },
      description:t('description'),
/*       robots: { index: true, follow: true },
      manifest: `/favicon/site.webmanifest`, */
      // authors: [
      //   {
      //     name: 'Onar Berrade',
      //     url: 'https://onar.dev',
      //   },
      // ],
    };
  }

  function getPathByPathName(pathName:string){
    const match = pathName.match(/\/\w+\//);
    let path = '/';

    if (match) {
      // Si se encuentra una coincidencia, la eliminamos y retornamos el resultado
      path = pathName.replace(match[0], '/');
    }

    return paths[path] || paths['/'];
  }