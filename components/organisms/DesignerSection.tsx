import Router from 'next/router'
import React from 'react'
import { TypeDesignerExperience } from '../../types'
import { GradientButton } from '../atoms/GradientButton'
import { ImageWithFrame } from '../molecules/ImageWithFrame'

export interface DesignerSectionProps {
  experience: TypeDesignerExperience[],
  title: string,
  behanceButtonText: string,
  behanceButtonLink: string,
}

export const DesignerSection : React.FC<DesignerSectionProps> = (props) => {
  return (
    <div className="py-[30px] md:py-[50px] lg:py-[60px] flex flex-col justify-center items-center">
      <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-tl bg-clip-text text-transparent from-blue to-fuscia inline-flex my-5">
        {props.title}
      </h2>
      <div className="mt-3 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {props.experience.map(exp=>(
          <div key={exp.sys.id} className='relative self-center m-auto cursor-pointer flex justify-center' style={{
            minHeight: exp.fields.thumbnail.fields.file.details.image?.height,
            height: exp.fields.thumbnail.fields.file.details.image?.height,
            minWidth: exp.fields.thumbnail.fields.file.details.image?.width,
            width: exp.fields.thumbnail.fields.file.details.image?.width,
          }} onClick={()=>{exp.fields.url ? Router.push(exp.fields.url) : null}}>
            <ImageWithFrame image={exp.fields.thumbnail} classname='lg:saturate-50 saturate-100 hover:saturate-100'>
              <span className='absolute bottom-0 left-0 z-40 py-1.5 px-4 bg-dark text-light font-bold italic font-mono'>{exp.fields.title}</span>
            </ImageWithFrame>
          </div>
        ))}
      </div>
      <GradientButton
        title={props.behanceButtonText}
        iconFamily='brands'
        iconName='behance'
        className='mt-10 md:mt-24 text-base md:text-2xl font-mono'
        onClick={()=>{window.open(props.behanceButtonLink,'_blank')}}
      />
    </div>
  )
}