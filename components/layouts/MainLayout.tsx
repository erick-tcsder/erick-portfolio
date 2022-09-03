import { Asset } from "contentful";
import { TypeMenuItem } from "../../types/TypeMenuItem";
import { TypeSocial } from "../../types/TypeSocial";
import { Icon } from "../atoms/Icon";
import Link from "../atoms/Link";
import { Navbar } from "../organisms/Navbar";
import Image from "next/image";
import { useHeaderContext } from "../../hooks/useHeaderContext";

export interface MainLayoutProps {
  mail: string;
  socials: TypeSocial[];
  children: React.ReactNode;
  menuItems: TypeMenuItem[];
  onDownloadResumeCLick: ()=>void;
  locale: string;
  avatar: Asset;
}

export const MainLayout : React.FC<MainLayoutProps> = (props)=>{
  const {currentHeader} = useHeaderContext()
  return (
    <>
      <nav className="fixed top-0 inset-x-0 p-5 bg-light z-50">
        <Navbar
          currentSection={currentHeader.title}
          menuItems={props.menuItems}
          onDownloadResumeCLick={props.onDownloadResumeCLick}
          locale={props.locale}
        />
      </nav>
      <div>
        <main className="px-12 md:px-24 max-w-[1366px] mx-auto">
          {props.children}
        </main>
        <footer className="bg-dark flex flex-row justify-center text-white">
          <div className="px-12 md:px-24 max-w-[1366px] mx-auto py-9 w-full flex flex-col md:flex-row justify-around">
            <div className="w-[100px] md:w-[200px] h-[150px] md:h-[250px] self-center">
              <Image
                src={'https:'+props.avatar.fields.file.url}
                alt="avatar"
                width={props.avatar.fields.file.details.image?.width ?? 200}
                objectFit={'fill'}
                height={props.avatar.fields.file.details.image?.height ?? 250}
                className='z-10 self-center invert'
              />
            </div>
            <div className="flex flex-col gap-y-5 font-mono text-lg self-center">
              {props.menuItems.map(item=>(
                <Link 
                  key={item.sys.id} 
                  className='hover:underline no-underline underline-offset-4 decoration-1 md:decoration-2 text-sm md:text-base'
                  href={item.fields.link}
                >
                  {item.fields.index + '. ' + item.fields.name}
                </Link>
              ))}
            </div>
          </div>
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