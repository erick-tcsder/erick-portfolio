import type { NextPage } from 'next'
import Router from 'next/router'
import { useEffect } from 'react'

const Home: NextPage = () => {
  
  useEffect(()=>{
    Router.replace('/en/')
  },[])
  return null
}

export default Home
