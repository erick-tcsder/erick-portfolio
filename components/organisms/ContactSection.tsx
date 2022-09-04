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
  locale: string;
}

export const ContactSection : React.FC<ContactSectionProps> = (props) => {
  const topSectionRef = useRef<HTMLDivElement>(null)
  const {handleChangeHeader,currentHeader} = useHeaderContext()
  useTopSection(topSectionRef, {
    top: [-100,100],
    onTop: ()=>{
      if(currentHeader.title === ('04 '+(props.locale === 'es-ES' ? 'Contacto' : 'Contact'))) return
      handleChangeHeader({
        link: '#contact',
        title: '04 '+(props.locale === 'es-ES' ? 'Contacto' : 'Contact')
      })
    }
  })
  return (
    <div id='contact' ref={topSectionRef} className="py-[60px] md:py-[80px] lg:py-[100px] flex flex-col justify-center items-center">
      <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-tl bg-clip-text text-transparent from-blue to-fuscia inline-flex my-5">
        {props.title}
      </h2>
      <div className='text-base md:text-2xl text-center'>
        <RichTextRenderer
          content={props.section.fields.currentStatus}
        />
      </div>
      <GradientButton
        title='Send me an Email'
        iconName='paper-plane'
        iconFamily='solid'
        className='text-base md:text-2xl my-3 md:my-16'
        onClick={()=>{Router.push(`mailto:${props.section.fields.myEmail}?subject=Say%20Hello`)}}
      />
    </div>
  )
}