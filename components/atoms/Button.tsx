import classNames from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { Icon } from './Icon';

const iconPositions = {
  left: 'order-1 mr-3',
  right: 'order-3 ml-3',
};


export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: string;
  iconPosition?: keyof typeof iconPositions;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    icon,
    iconPosition,
    className,
    ...buttonProps
  } = props;

  return (
    <button
      disabled={props.loading}
      {...buttonProps}
      className={classNames(
        props.className,
        'flex justify-center items-center',
        {
          'p-2': !props.children,
        }
      )}
    >
      {props.children && (
        <span
          className={classNames('w-full',{
            'order-2': icon,
          })}
        >
          {props.children}
        </span>
      )}
      {props.icon && (
        <i className={classNames({
          'hidden': !icon,
          'order-1 mr-2': !iconPosition && props.children,
          [`${iconPositions[iconPosition ?? 'left']}`]: iconPosition,
        },icon)}/>
      )}
    </button>
  );
};
