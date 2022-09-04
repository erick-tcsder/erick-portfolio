import dayjs from 'dayjs';
import React, { useRef } from 'react'
import { useHeaderContext } from '../../hooks/useHeaderContext';
import { useTopSection } from '../../hooks/useTopSection';
import { TypeDeveloperExperience } from '../../types'
import { Icon } from '../atoms/Icon';
import { ImageWithFrame } from '../molecules/ImageWithFrame';
import { RatingStars } from '../molecules/RatingStars';
import { RichTextRenderer } from '../molecules/RichTextRenderer';


export interface DevExpSectionProps {
  exps: TypeDeveloperExperience[];
  title: string;
}

export const DevExpSection : React.FC<DevExpSectionProps> = (props) => {
  const topSectionRef = useRef<HTMLDivElement>(null)
  const {handleChangeHeader,currentHeader} = useHeaderContext()
  useTopSection(topSectionRef, {
    top: [-100,100],
    onTop: ()=>{
      if(currentHeader.title === '03 Experience') return
      handleChangeHeader({
        link: '#experience',
        title: '03 Experience'
      })
    }
  })
  return (
    <div id='experience' ref={topSectionRef} className="py-[60px] md:py-[80px] lg:py-[100px]">
      <div className='flex flex-row justify-center'>
        <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-tl bg-clip-text text-transparent from-blue to-fuscia inline-flex my-5">
          {props.title}
        </h2>
      </div>
      <div className='w-full flex flex-col gap-y-24 mt-3 md:mt-10'>
      {props.exps.map((exp)=>(
        <div key={exp.sys.id} className='grid grid-cols-1 lg:grid-cols-5'>
          <div className="col-span-1 lg:col-span-3 order-2 self-center mt-10 lg:mt-0">
            <div className='flex flex-row justify-start gap-x-4'>
              <span className='text-base md:text-2xl font-mono font-bold'>{exp.fields.title}</span>
              <RatingStars
                rating={exp.fields.rating ?? 0}
                className='text-sm md:text-lg self-center'
              />
            </div>
            <div className='flex flex-row flex-wrap justify-start mt-3 gap-1 md:gap-3 text-xs md:text-sm'>
              <span className='text-light bg-dark font-mono py-1 px-3 rounded-md self-center'>
                <span className='mr-1 md:mr-3'>
                  {dayjs(exp.fields.startDate).format('MM-YYYY')}
                </span>
                <span>
                  {exp.fields.endDate ? dayjs(exp.fields.endDate).format("MM-YYYY") : 'present'}
                </span>
              </span>
              {exp.fields.labels?.map((label)=>(
                <span key={label.sys.id} className='text-dark font-mono py-1 px-3 rounded-md border-2 border-dark self-center'>
                  <Icon family='solid' name={label.fields.icon ?? ''} className='mr-2'/>
                  <span>
                    {label.fields.title}
                  </span>
                </span>
              ))}
            </div>
            <div className='md:leading-relaxed leading-normal pr-0 md:pr-16 text-sm md:text-base'>
              <RichTextRenderer content={exp.fields.description}/>
            </div>
            <div className='mt-3 md:mt-8 grid grid-cols-2 md:grid-cols-3'>
              {exp.fields.skills?.map(skill=>(
                <span className='inline-flex flex-row items-center justify-start text-sm md:text-base' key={skill}>
                  <Icon family='solid' name='caret-up' className='mr-2'/>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 order-1 lg:order-3 min-h-[250px] md:min-h-[400px] flex justify-center ml-5 relative">
            <ImageWithFrame classname="place-self-center" image={exp.fields.thumbnail}/>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}