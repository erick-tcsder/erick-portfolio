import { createClient } from 'contentful'
import type { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'
import { TypeHeroSectionFields } from '../../types'

const LocaleHome: NextPage<any> = (props) => {
  useEffect(()=>{
    console.log(props.obj)
  },[])
  return (
    <MainLayout/>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx)=>{
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  })
  return {
    props: {
      locale: ctx?.params?.locale,
    }
  }
}

export default LocaleHome