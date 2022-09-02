import Router from 'next/router';
import React, { useRef } from 'react'
import { useHeaderContext } from '../../hooks/useHeaderContext';
import { useTopSection } from '../../hooks/useTopSection';
import { TypeContactSection } from '../../types'
import { GradientButton } from '../atoms/GradientButton';
import { RichTextRenderer } from '../molecules/RichTextRenderer';

export interface ContactSectionProps {
  section: TypeContactSection;
  title: string;
}

export const ContactSection : React.FC<ContactSectionProps> = (props) => {
  const topSectionRef = useRef<HTMLDivElement>(null)
  const {handleChangeHeader} = useHeaderContext()
  useTopSection(topSectionRef, {
    top: [-100,100],
    onTop: ()=>{
      handleChangeHeader({
        link: '#contact',
        title: '04 Contact'
      })
    }
  })
  return (
    <div id='contact' ref={topSectionRef} className="py-[60px] md:py-[80px] lg:py-[100px] flex flex-col justify-center items-center">
      <div className="text-3xl font-bold bg-gradient-to-tl bg-clip-text text-transparent from-blue to-fuscia inline-flex my-5">
        {props.title}
      </div>
      <div className='text-2xl text-center'>
        <RichTextRenderer
          content={props.section.fields.currentStatus}
        />
      </div>
      <GradientButton
        title='Send me an Email'
        iconName='paper-plane'
        iconFamily='solid'
        className='text-2xl my-16'
        onClick={()=>{Router.push(`mailto:${props.section.fields.myEmail}?subject=Say%20Hello`)}}
      />
    </div>
  )
}