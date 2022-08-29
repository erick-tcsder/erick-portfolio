import Router from 'next/router'
import React from 'react'
import { TypeDesignerExperience } from '../../types'
import { ImageWithFrame } from '../molecules/ImageWithFrame'

export interface DesignerSectionProps {
  experience: TypeDesignerExperience[],
  title: string,
}

export const DesignerSection : React.FC<DesignerSectionProps> = (props) => {
  return (
    <div className="py-[30px] md:py-[50px] lg:py-[60px] flex flex-col justify-center items-center">
      <div className="text-3xl font-bold bg-gradient-to-tl bg-clip-text text-transparent from-blue to-fuscia inline-flex my-5">
        {props.title}
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {props.experience.map(exp=>(
          <div key={exp.sys.id} className='relative self-center cursor-pointer' onClick={()=>{exp.fields.url ? Router.push(exp.fields.url) : null}}>
            <ImageWithFrame image={exp.fields.thumbnail}/>
            <span className='absolute bottom-3 left-3 z-40 py-1.5 px-4 bg-dark text-light font-bold italic font-mono'>{exp.fields.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}