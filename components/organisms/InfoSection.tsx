import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import { useRef } from "react";
import { useHeaderContext } from "../../hooks/useHeaderContext";
import { useTopSection } from "../../hooks/useTopSection";
import { TypeInfoSection } from "../../types";
import { Frame, ImageWithFrame } from "../molecules/ImageWithFrame";
import { RichTextRenderer } from "../molecules/RichTextRenderer";


export interface InfoSectionProps {
  section: TypeInfoSection,
  locale?: string
}

export const InfoSection : React.FC<InfoSectionProps> = (props) => {
  const topSectionRef = useRef<HTMLDivElement>(null)
  const {handleChangeHeader,currentHeader} = useHeaderContext()
  useTopSection(topSectionRef, {
    top: [-100,100],
    onTop: ()=>{
      if(currentHeader.title === '02 Who am I?') return
      handleChangeHeader({
        link: '#personal-info',
        title: '02 Who am I?'
      })
    }
  })
  return (
    <div id='personal-info' ref={topSectionRef} className="py-[60px] md:py-[80px] lg:py-[100px] grid grid-cols-1 lg:grid-cols-5">
      <div className="col-span-1 lg:col-span-3 order-2">
        <h2 className='text-xl md:text-3xl font-bold bg-gradient-to-tl bg-clip-text text-transparent from-blue to-fuscia inline-block my-2 mt-8 md:my-5'>{props.locale === 'es-ES' ? 'Información Personal' : 'Personal Information'}</h2>
        <span className="block font-mono text-base md:text-xl">
          {props.locale === 'es-ES' ? 'Nombre:' : 'Name:'}
          <span className="font-bold ml-3">{props.section.fields.name}</span>
        </span>
        <span className="block mt-3 font-mono text-base md:text-xl">{props.locale === 'es-ES' ? 'Historia:' : 'History:'}</span>
        <div className='leading-relaxed md:leading-loose mt-3 text-sm md:text-base'>
          <RichTextRenderer content={props.section.fields.history as Document}/>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2 order-1 lg:order-3 min-h-[250px] md:min-h-[400px] flex justify-center ml-5 relative">
        <ImageWithFrame classname="self-center" image={props.section.fields.profilePicture}/>
      </div>
    </div>
  )
}
