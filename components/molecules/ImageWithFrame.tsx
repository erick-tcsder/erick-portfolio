import classNames from "classnames";
import { Asset } from "contentful";
import { CSSProperties } from "react";
import Image from 'next/image'

export interface FrameProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties
}

export const Frame : React.FC<FrameProps> = (props)=>{
  return (
    <div className={classNames("relative",props.className)} style={props.style}>
      <span className="absolute bg-transparent border-4 left-0 top-0 right-3 bottom-3 border-dark z-30"/>
      <span className="absolute bg-transparent border-4 left-3 top-3 right-0 bottom-0 border-dark z-30"/>
      <div className="inset-4 absolute z-20">{props.children}</div>
    </div>
  )
}

export interface ImageWithFrameProps {
  image: Asset
  classname?: string
}

export const ImageWithFrame : React.FC<ImageWithFrameProps> = (props)=>{
  return (
    <Frame className={props.classname} style={{
      minWidth: (props.image.fields.file.details.image?.width??0) + 12,
      minHeight: (props.image.fields.file.details.image?.height??0) + 12
    }}>
      <Image
        src={'https:'+props.image.fields.file.url}
        alt={props.image.fields.file.fileName}
        width={props.image.fields.file.details.image?.width}
        height={props.image.fields.file.details.image?.height}
      />
    </Frame>
  )
}