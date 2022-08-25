import { Asset } from "contentful"
import Image from "next/image"


export interface LoadingLayoutProps{
  loaderImage: Asset
  loadingText: string
}

export const LoadingLayout : React.FC<LoadingLayoutProps> = (props)=>{
  return (
    <div className="fixed inset-0 flex flex-row">
      <div className="flex flex-col my-auto mx-auto">
        <div className="w-[150px] md:w-[200px] lg:w-[250px] h-[150px] md:h-[200px] lg:h-[250px]">
          <Image
            src={'https:'+props.loaderImage.fields.file.url}
            alt="Loading"
            width={250}
            height={250}
            className="w-full h-full"
          />
        </div>
        <span className="text-center font-mono text-xl md:text-2xl font-bold text-dark">{props.loadingText}</span>
      </div>
    </div>
  )
}