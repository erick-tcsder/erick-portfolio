import classNames from 'classnames';
import Router from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import { localeIcons } from '../../pages/[locale]';
import { Button } from '../atoms/Button';


export interface LocaleSelectProps {
  allLocales: string[],
  locale: string
  className: string
}

const LocaleSelect : React.FC<LocaleSelectProps> = (props) => {
  const currentLocaleRef = useRef<HTMLDivElement>(null)
  const [expanded,setExpanded] = useState<boolean>(false)

  useEffect(()=>{
    const handleClickOutside = (event: MouseEvent)=>{
      console.log(currentLocaleRef.current,currentLocaleRef.current?.contains(event.target as Node)??'')
      if (currentLocaleRef.current && !currentLocaleRef.current?.contains(event.target as Node)) {
        setExpanded(false)
      }
    }
    const hideOnScroll = ()=>{
      setExpanded(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll',hideOnScroll)
    return ()=>{
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll',hideOnScroll)
    }
  },[])

  return (
    <div className={classNames("relative min-h-0 md:min-h-full text-xl",props.className)}>
      <div ref={currentLocaleRef}>
        <Button
          className="ring-2 md:ring-0 ring-light p-1 px-3 rounded-md border-dark bg-light border-2 font-mono transition-all translate-y-0 hover:-translate-y-1 hover:font-bold"
          onClick={()=>{setExpanded((prev)=>!prev)}}
        >
          {localeIcons[props.locale]}
        </Button>
      </div>
      <div className={classNames("absolute top-0 md:top-full overflow-hidden flex flex-col left-full md:left-0 right-auto md:right-0 md:gap-1 gap-2 mt-0 md:mt-1 transition-all max-h-full ml-2 md:ml-0",{
        'md:max-h-0': !expanded,
        'md:max-h-[200px]': expanded
      })}>
        {props.allLocales.filter(l=>l!==props.locale).map((locale)=>(
          <Button
            className="p-1 px-3 rounded-md border-dark bg-light border-2 transition-all"
            key={locale}
            onClick={()=>{setExpanded(false);Router.push({
              pathname: Router.pathname,
              query: {
                locale: locale
              }
            })}}
          >{localeIcons[locale]}</Button>
        ))}
      </div>
    </div>
  )
}

export default LocaleSelect