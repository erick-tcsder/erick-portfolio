import { createClient } from 'contentful'
import type { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'
import { TypeHeroSection, TypeHeroSectionFields, TypeSocial, TypeSocialFields } from '../../types'
import Swal from 'sweetalert2'
import Router from 'next/router'


interface LocaleHomeProps {
  locale?: string,
  socials?: TypeSocial[]
  hero?: TypeHeroSection
}

const LocaleHome: NextPage<LocaleHomeProps> = (props) => {
  useEffect(()=>{
    if(!props.locale) {
      Swal.fire({
        title: "Error",
        text: "The language you are looking for isn't supported. You are being redirected to default language (en-US).",
        icon: 'error'
      })
      Router.push('/en-US')
    }
    console.log(props.socials)
    console.log(props.hero?.fields.resume)
  },[])

  return (
    <MainLayout 
      socials={props.socials ?? []}
      mail={props.hero?.fields.myMail ?? ''}
      menuItems={[]}
      onDownloadResumeCLick={()=>{}}
    >
      testing
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
      const socials = (await client.getEntries<TypeSocialFields>({
        "content_type": "social",
        locale: currentLocale.code
      })).items
      const hero = (await client.getEntry<TypeHeroSectionFields>('3cXXYKLMuRHGgr8DFygSIK'))
      return {
        props: {
          locale: currentLocale?.code,
          socials: socials,
          hero,
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