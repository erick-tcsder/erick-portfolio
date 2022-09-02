import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import { TypeInfoSection } from "../../types";
import { Frame, ImageWithFrame } from "../molecules/ImageWithFrame";
import { RichTextRenderer } from "../molecules/RichTextRenderer";


export interface InfoSectionProps {
  section: TypeInfoSection,
  locale?: string
}

export const InfoSection : React.FC<InfoSectionProps> = (props) => {
  return (
    <div id='personal-info' className="py-[60px] md:py-[80px] lg:py-[100px] grid grid-cols-1 lg:grid-cols-5">
      <div className="col-span-1 lg:col-span-3 order-2">
        <div className='text-3xl font-bold bg-gradient-to-tl bg-clip-text text-transparent from-blue to-fuscia inline-block my-5'>{props.locale === 'es-ES' ? 'Información Personal' : 'Personal Information'}</div>
        <span className="block font-mono text-xl">
          {props.locale === 'es-ES' ? 'Nombre:' : 'Name:'}
          <span className="font-bold ml-3">{props.section.fields.name}</span>
        </span>
        <span className="block mt-3 font-mono text-xl">{props.locale === 'es-ES' ? 'Historia:' : 'History:'}</span>
        <div className='leading-loose mt-3'>
          <RichTextRenderer content={props.section.fields.history as Document}/>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2 order-1 lg:order-3 flex justify-center">
        <ImageWithFrame classname="place-self-center" image={props.section.fields.profilePicture}/>
      </div>
    </div>
  )
}
