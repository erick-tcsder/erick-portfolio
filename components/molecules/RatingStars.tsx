import classNames from 'classnames';
import React from 'react'
import { Icon } from '../atoms/Icon';

export interface RatingStarsProps {
  rating: number;
  className?: string;
}

export const RatingStars : React.FC<RatingStarsProps> = (props) => {
  return (
    <span className={classNames('relative inline-flex flex-row gap-x-2',props.className)}>
      {Array.from({length: 5}, (_, i) => i+1).map((i)=>(
        <Icon
          family='solid'
          name='star'
          key={i}
          className='text-gray-400'
        />
      ))}
      <div className='absolute inset-0 flex flex-row gap-x-2'>
      {Array.from({length: 5}, (_, i) => i+1).map((i)=>i<=props.rating ? (
        <Icon
          family='solid'
          name='star'
          key={i}
          className='text-dark'
        />
      ) : null)}
      {(props.rating*10)%10>0 && props.rating < 5 && (
        <Icon
          family='solid'
          name='star-half'
          className='text-dark'
        />
      )}
      </div>
    </span>
  )
}