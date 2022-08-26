import { TypeMenuItem } from "../../types/TypeMenuItem";
import { TypeSocial } from "../../types/TypeSocial";
import { Icon } from "../atoms/Icon";
import Link from "../atoms/Link";
import { Navbar } from "../organisms/Navbar";

export interface MainLayoutProps {
  mail: string;
  socials: TypeSocial[];
  children: React.ReactNode;
  menuItems: TypeMenuItem[];
  onDownloadResumeCLick: ()=>void;
}

export const MainLayout : React.FC<MainLayoutProps> = (props)=>{
  return (
    <>
      <nav className="fixed top-0 inset-x-0 p-5 bg-light">
        <Navbar
          currentSection="01 Home"
          menuItems={props.menuItems}
          onDownloadResumeCLick={props.onDownloadResumeCLick}
        />
      </nav>
      <div>
        <main className="px-12 md:px-24 max-w-7xl mx-auto">
          {props.children}
        </main>
        <footer className="bg-dark h-[300px]">

        </footer>
      </div>
      <div className="fixed left-0 bottom-0 hidden ml-10 md:flex mix-blend-difference text-white text-xl font-mono md:flex-col gap-y-4 justify-center items-start">
        <div className="min-h-[50px] w-[2px] bg-white mt-2 mx-auto"/>
        {props.socials.map((social)=>(
          <Link href={social.fields.url} key={social.sys.id} target='_blank'>
            <Icon name={social.fields.icon ?? ''} family='brands' className='transition-all scale-100 hover:scale-125'/>
          </Link>
        ))}
        <div className="min-h-[50px] w-[2px] bg-white mt-2 mx-auto"/>
      </div>
      <div className="fixed mr-10 right-0 bottom-0 hidden md:flex mix-blend-difference text-white font-mono text-md rotated-bottom-right md:flex-row md:items-center">
        <div className="min-w-[50px] min-h-[2px] mr-3 bg-white mt-2" />
        <Link href={`mailto:${props.mail}?subject=Say%20Hello`} className='transition-all scale-100 hover:scale-105'>
          {props.mail}
        </Link>
      </div>
    </>
  )
}