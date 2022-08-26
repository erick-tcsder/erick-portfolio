import { Asset, createClient } from 'contentful'
import type { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'
import Swal from 'sweetalert2'
import Router from 'next/router'
import { usePageContent } from '../../hooks/usePageContent'
import { LoadingLayout } from '../../components/layouts/LoadingLayout'
import {saveAs} from 'file-saver'
import HeroSection from '../../components/organisms/HeroSection'
import { TypeHeroSection } from '../../types'
import { RichTextRenderer } from '../../components/molecules/RichTextRenderer'
import { Document } from '@contentful/rich-text-types'

interface LocaleHomeProps {
  locale?: string,
  loaderImage?: Asset
}

const saveFile = (url:string,locale:string)=>{
  saveAs(url, `Resume_${locale}.pdf`)
}

const LocaleHome: NextPage<LocaleHomeProps> = (props) => {
  const {
    content,
    loading,
    mutate
  } = usePageContent({locale:props.locale ?? 'en-US'})

  useEffect(()=>{
    console.log(props)
    if(!props.locale) {
      Swal.fire({
        title: "Error",
        text: "The language you are looking for isn't supported. You are being redirected to default language (en-US).",
        icon: 'error'
      })
      Router.push('/en-US')
    }
  },[props])

  return loading ? (
    <LoadingLayout
      loaderImage={props.loaderImage as Asset}
      loadingText={'Loading ...'}
    />
  ) : (
    <MainLayout
      mail={content?.heroSection.fields.myMail ?? ''}
      menuItems={content?.menuItems ?? []}
      onDownloadResumeCLick={()=>{
        saveFile('http:'+content?.heroSection.fields.resume.fields.file.url,props.locale ?? 'en-US')
      }}
      socials={content?.socials ?? []}
    >
      <HeroSection section={content?.heroSection as TypeHeroSection}/>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps<LocaleHomeProps> = async (ctx)=>{
  try{
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID as string,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
    })
  
    const locales = await client.getLocales()
    const currentLocale = locales.items.find((locale)=>locale.code === ctx?.params?.locale)
    if(currentLocale){
      const animationLink = (await client.getAsset('4YKQQ2eKs7LprySGMJJvKw'))
      return {
        props: {
          locale: currentLocale?.code,
          loaderImage: animationLink
        }
      }
    }else{
      throw new Error('Locale not found')
    }
  }catch(e){
    console.error('error')
    return {
      props: {}
    }
  }
}

export default LocaleHome