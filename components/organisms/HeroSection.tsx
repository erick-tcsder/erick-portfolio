import React, { useEffect, useMemo, useRef } from 'react'
import { TypeHeroSection } from '../../types'
import Image from 'next/image'
import { RichTextRenderer } from '../molecules/RichTextRenderer'
import { Document } from '@contentful/rich-text-types'
import { GradientButton } from '../atoms/GradientButton'
import Router from 'next/router'
import { Button } from '../atoms/Button'
import { useHeaderContext } from '../../hooks/useHeaderContext'
import { useTopSection } from '../../hooks/useTopSection'


export interface HeroSectionProps {
  section: TypeHeroSection,
  handleDownloadResume: ()=>void
}


const HeroSection : React.FC<HeroSectionProps> = (props) => {
  const topSectionRef = useRef<HTMLDivElement>(null)
  const {handleChangeHeader,currentHeader} = useHeaderContext()
  useTopSection(topSectionRef, {
    top: [-100,100],
    onTop: ()=>{
      if(currentHeader.title === '01 Home') return
      handleChangeHeader({
        link: '#home',
        title: '01 Home'
      })
    }
  })

  const actualJob = useRef<{act:string,index:number}>({
    act: "Frontend Developer",
    index: -1
  })
  const jobRef = useRef<HTMLSpanElement>(null)
  useEffect(()=>{
    const interval = setInterval(()=>{
      actualJob.current = {
        act: props.section.fields.workTypes[(actualJob.current.index+1 + props.section.fields.workTypes.length)%props.section.fields.workTypes.length],
        index: (actualJob.current.index+1 + props.section.fields.workTypes.length)%props.section.fields.workTypes.length
      }
      if(jobRef.current) jobRef.current.innerHTML = actualJob.current.act
    },1500)
    return ()=>{
      clearInterval(interval)
    }
  },[props.section.fields.workTypes])

  return (
    <div id='home' ref={topSectionRef} className='min-h-[100vh] flex flex-col'>
      <div className='my-auto grid grid-cols-1 lg:grid-cols-5'>
        <div className='col-span-3 order-2 -mt-10 md:mt-0'>
          <span className='text-base md:text-xl lg:text-2xl font-mono block'>{props.section.fields.intro}</span>
          <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-tl bg-clip-text text-transparent from-blue to-fuscia inline-block my-2 md:my-5'>{props.section.fields.name}</h1>
          <span className='block text-base md:text-xl lg:text-3xl font-mono'>
            {props.section.fields.iworkPrefix ?? 'I work as'}
            <span ref={jobRef} className='ml-2 md:ml-4 font-bold'/>
          </span>
          <div className='leading-relaxed md:leading-loose mt-2 md:mt-5 text-sm md:text-base'>
            <RichTextRenderer content={props.section.fields.description as Document}/>
          </div>
          <div className='flex flex-col md:flex-row gap-5 mt-5 md:mt-16'>
            <Button
              className='bg-gradient-to-tl from-blue to-fuscia hover:from-sky-500 hover:to-blue transition-all
              p-1 px-4 text-white font-semibold rounded-md text-md lg:text-lg py-2 self-center'
              onClick={props.handleDownloadResume}
            >
              Download Resume/CV
            </Button>
            <GradientButton
              title='Send me an Email'
              iconName='paper-plane'
              iconFamily='solid'
              className='text-md lg:text-xl self-center'
              onClick={()=>{Router.push(`mailto:${props.section.fields.myMail}?subject=Say%20Hello`)}}
            />
          </div>
        </div>
        <div className='col-span-2 order-1 lg:order-3 flex flex-row justify-center'>
          <div className='self-center p-16'>
            <Image
              src={'https:'+props.section.fields.avatar.fields.file.url}
              alt="avatar"
              width={props.section.fields.avatar.fields.file.details.image?.width ?? 350}
              objectFit={'fill'}
              height={props.section.fields.avatar.fields.file.details.image?.height ?? 350}
              className='z-10 self-center'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection