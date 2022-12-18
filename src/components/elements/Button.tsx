// Polymorphic Components - https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/
import React from "react";

export const ADefaultAsType = 'a' as const;
export type ButtonProps = React.PropsWithChildren<{
  as: React.ElementType;
  className: string;
}>;

const Button: React.FC<ButtonProps> = ({ 
  as = 'a',
  className,
  children,
  ...props 
}: ButtonProps) => {
  const Component: React.ElementType =  as || ADefaultAsType ;
  return (
    <Component {...props} className={className}>
      {children}
    </Component>
  );
}
  
export default Button;