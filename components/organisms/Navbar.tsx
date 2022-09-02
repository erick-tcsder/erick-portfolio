import { useMemo } from "react";
import { TypeMenuItem } from "../../types/TypeMenuItem";
import { Button } from "../atoms/Button";
import Link from "../atoms/Link"

export interface NavbarProps {
  menuItems: TypeMenuItem[];
  currentSection: string;
  onDownloadResumeCLick: ()=>void;
  locale: string;
}

export const Navbar : React.FC<NavbarProps> = (props)=>{
  const itemsSorted = useMemo(()=>{
    const sorted = props.menuItems.sort((a,b)=>{
      return a.fields.index - b.fields.index
    })
    return sorted
  },[props.menuItems])
  return (
    <div className="w-full flex flex-row justify-between items-start">
      <div className="font-bold font-mono text-3xl md:text-4xl lg:text-5xl flex gap-4 text-dark">
        <span className="min-w-[5px] min-h-full bg-dark"/>
        <span>{props.currentSection}</span>
      </div>
      <div className="flex flex-row gap-7 items-center">
        <div className="hidden lg:flex gap-5 font-mono text-lg">
          {itemsSorted.map((item)=>(
            <Link key={item.sys.id} href={item.fields.link} className='font-normal hover:font-bold no-underline hover:underline hover:underline-offset-4 hover:decoration-pink hover:decoration-2'>
              <span className="text-pink font-bold">{item.fields.index + "."}</span>
              {item.fields.name}
            </Link>
          ))}
        </div>
        <Button
          onClick={props.onDownloadResumeCLick}
          icon='fa-regular fa-file-lines'
          className='p-1 px-3 rounded-md border-dark border-2 font-mono transition-all translate-y-0 hover:-translate-y-1 hover:font-bold'
          iconPosition='right'
        >{props.locale === 'es-ES' ? 'Curriculum' : 'Resume'}</Button>
      </div>
    </div>
  )
}