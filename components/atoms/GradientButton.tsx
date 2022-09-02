import classNames from 'classnames';
import React from 'react'
import { Button, ButtonProps } from './Button'
import { Icon } from './Icon';

export interface GradientButtonProps extends ButtonProps {
  title: string;
  iconName?: string;
  iconFamily?: 'solid' | 'regular' | 'brands';
}

export const GradientButton : React.FC<GradientButtonProps> = (props)=>{
  const {title,iconName,iconFamily,className,...buttonProps} = props
  return (
    <Button {...buttonProps}
      className={classNames('bg-gradient-to-tl from-blue to-fuscia hover:from-sky-500 hover:to-blue transition-all overflow-hidden p-1 rounded-md group',className)}
    >
      <div className='py-1.5 rounded-md overflow-hidden'>
        <span className='bg-light px-3 py-1.5'>
          <span className='bg-gradient-to-tl bg-clip-text text-transparent from-blue to-fuscia group-hover:from-sky-500 group-hover:to-blue inline-block font-semibold'>
            {title}
          </span>
        </span>
        {iconName && (
          <Icon
            name={iconName}
            family={iconFamily}
            className="text-white ml-3 mr-2"
          />
        )}
      </div>
    </Button>
  )
}