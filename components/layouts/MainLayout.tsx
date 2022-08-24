import { TypeSocial } from "../../types/TypeSocial";
import { Icon } from "../atoms/Icon";
import Link from "../atoms/Link";

export interface MainLayoutProps {
  mail: string;
  socials: TypeSocial[];
  children: React.ReactNode;
  menuItems: {
    name: string;
    link: string;
  }[];
  onDownloadResumeCLick: ()=>void;
}

export const MainLayout : React.FC<MainLayoutProps> = (props)=>{
  return (
    <>
      <nav className="fixed top-0 inset-x-0 p-5">

      </nav>
      <div>
        <main>

        </main>
        <footer>

        </footer>
      </div>
      <div className="fixed left-0 bottom-0 hidden ml-10 md:flex mix-blend-difference text-white text-xl font-mono md:flex-col gap-y-4 justify-center items-start">
        <div className="min-h-[50px] w-[2px] bg-white mt-2 mx-auto"/>
        {props.socials.map((social)=>(
          <Link href={social.fields.url} key={social.sys.id} target='_blank'>
            <>
            {console.log(social.fields.icon)}
            <Icon name={social.fields.icon ?? ''} family='brands' className='transition-all scale-100 hover:scale-125'/>
            </>
          </Link>
        ))}
        <div className="min-h-[50px] w-[2px] bg-white mt-2 mx-auto"/>
      </div>
      <div className="fixed mr-10 right-0 bottom-0 hidden md:flex mix-blend-difference text-white font-mono text-xl rotated-bottom-right md:flex-row md:items-center">
        <div className="min-w-[50px] min-h-[2px] mr-3 bg-white mt-2" />
        <Link href={`mailto:${props.mail}?subject=Say%20Hello`} className='transition-all scale-100 hover:scale-105'>
          {props.mail}
        </Link>
        <div className="min-w-[100px] min-h-[2px] ml-3 bg-white mt-2"/>
      </div>
    </>
  )
}