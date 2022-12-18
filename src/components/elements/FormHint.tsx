import React from 'react';

export type FormHintTextStatusProps = {
  status: 'high'|'mid'|'low'|'primary'|'secondary'|'error'|'warning'|'success';
};

export type FormHintProps = React.PropsWithChildren<{
  as?: 'div';
  status: FormHintTextStatusProps;
}>;

const FormHint: React.FC<FormHintProps>= ({
  as: Component = "div",
  children,
  status,
  ...props
}) => {

  const className = ()=> {
    const statusValidation =  status && `text-color-${status}`;
    return `form-hint ${statusValidation}`
  }
  
  return (
    <Component
      {...props}
      className={className()}
    >
      {children}
    </Component>
  );
}


export default FormHint;