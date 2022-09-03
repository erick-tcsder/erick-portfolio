import { RefObject, useEffect } from "react"


export interface UseTopSectionParams {
  top: number | [number,number],
  onTop: () => void,
}

export const useTopSection = ( ref: RefObject<HTMLDivElement | HTMLSpanElement>,params: UseTopSectionParams)=>{
  useEffect(()=>{
    if(!ref.current) return ()=>{}
    const el = ref.current
    const listener = ()=>{
      const box = el.getBoundingClientRect()
      if(typeof params.top === 'number' ? params.top === box.top : (box.top>=params.top[0] && box.top <= params.top[1])) params.onTop()
    }
    window.addEventListener('scroll', listener)
    return ()=>{
      window.removeEventListener('scroll',listener)
    }
  },[params])
}