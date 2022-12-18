import React from 'react';

type ButtonGroupProps = React.PropsWithChildren<{
  as: "div" | "section"  ;
}>;

const ButtonGroup: React.FC<ButtonGroupProps> = ({as: Component = "div", children}) => {
  return <Component className='button-group'>
      {children}
    </Component>
}

export default ButtonGroup