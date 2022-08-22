import type { GetServerSideProps, NextPage } from 'next'

const LocaleHome: NextPage<any> = (props) => {
  return (
    <div className='text-2xl'>hello {props.locale}</div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx)=>{
  return {
    props: {
      locale: ctx?.params?.locale
    }
  }
}

export default LocaleHome