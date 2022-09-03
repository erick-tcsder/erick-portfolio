import classNames from "classnames"
import { TypeSocial } from "../../types"
import { TypeMenuItem } from "../../types/TypeMenuItem"
import { Button } from "../atoms/Button"
import { Icon } from "../atoms/Icon"
import Link from "../atoms/Link"

export interface MobileNavProps {
  menuItems: TypeMenuItem[],
  socials: TypeSocial[],
  isOpen: boolean,
  handleHideMobile: ()=>void
}

export const MobileNav : React.FC<MobileNavProps> = (props)=>{
  return (
    <nav className={classNames("fixed lg:hidden inset-0 flex flex-col transition-all text-light bg-dark z-40",{
      'translate-x-full': !props.isOpen,
      'translate-x-0': props.isOpen,
    })}>
      <div/>
      <div className="my-auto w-100 flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col gap-y-5 font-mono self-center">
          {props.menuItems.map(item=>(
            <Link 
              key={item.sys.id} 
              className='hover:underline no-underline underline-offset-4 decoration-1 md:decoration-2 text-lg'
              href={item.fields.link}
              onClick={()=>{props.handleHideMobile();console.log('asda')}}
            >
              {item.fields.index + '. ' + item.fields.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-row text-xl justify-center gap-5 p-5">
        {props.socials.map((social)=>(
          <Link href={social.fields.url} key={social.sys.id} className='border-light p-2 px-3 rounded-md border-2' target='_blank'>
            <Icon name={social.fields.icon ?? ''} family='brands' className='transition-all scale-100 hover:scale-125'/>
          </Link>
        ))}
      </div>
    </nav>
  )
}
