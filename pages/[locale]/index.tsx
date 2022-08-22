import { createClient } from 'contentful'
import type { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'
import { TypeHeroSectionFields } from '../../types'

const LocaleHome: NextPage<any> = (props) => {
  useEffect(()=>{
    console.log(props.obj)
  },[])
  return (
    <div className='text-2xl'>hello {props.locale}</div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx)=>{
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  })

  const res = await client.getEntries({
    content_type: 'technology',
    locale: 'en-US',
  })

  const hero = await client.getEntries<TypeHeroSectionFields>({
    content_type: 'heroSection',
    select: ['fields.name','fields.description'],
    locale: 'es-ES'
  })

  const loc = await client.getLocales()
  console.log(loc)
  console.log(hero.items[0])
  return {
    props: {
      locale: ctx?.params?.locale,
      obj: hero.items[0]
    }
  }
}

export default LocaleHome