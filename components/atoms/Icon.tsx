import classNames from 'classnames';

export type IconFamily = 'solid' | 'regular' | "brands";

export interface IconProps {
  name: string;
  className?: string;
  family?: IconFamily;

}

export const Icon: React.FC<IconProps> = ({
  family = 'regular',
  ...props
}) => {
  return (
    <i
      className={classNames(props.className, {
        [`${family === 'regular' ? 'fa-regular' : family ==='solid' ? 'fa-solid' : 'fa-brands'} fa-${props.name}`]: props.name,
      })}
    ></i>
  );
};
