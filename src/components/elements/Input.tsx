import React from 'react';
import FormLabel from './FormLabel';
import FormHint, { FormHintTextStatusProps } from './FormHint';

type InputProps = React.PropsWithChildren<{
  as: React.ElementType;
  id: string;
  className: string;
  label: string;
  labelHidden: boolean;
  hasIcon:  'left' | 'right'; // left || right
  placeholder: string;
  disabled?: boolean;
  name?: string;
  status: FormHintTextStatusProps;
  size?: string; // sm
  formGroup?: string; // desktop
  value?: string;
  rows?: number;
  hint?: string,
}>;


const Input: React.FC<InputProps> = ({
  className,
  children,
  label,
  labelHidden,
  as,
  name,
  status,
  disabled,
  value,
  formGroup,
  hasIcon,
  size,
  placeholder,
  rows,
  hint,
  ...props
}) => {

  const wrapperClasses = () => {
    const formGroupValidation = !!formGroup && (formGroup === 'desktop' ? 'form-group-desktop' : 'form-group');
    const hasIconValidation = !!hasIcon && `has-icon-${hasIcon}`;
    return `${formGroupValidation} ${hasIconValidation}`;
  }

  const classes = ()=> {
    const sizeValidation = !!size && `form-input-${size}`;
    const statusValidation = !!status && `form-${status}`;
    return `form-input ${sizeValidation} ${statusValidation}`;
  };

  const Component: React.ElementType = as === 'textarea' ? 'textarea' : 'input';

  return (
    <>
      {label && <FormLabel labelHidden={labelHidden} id={props.id} >{label}</FormLabel>}
      <div
        className={wrapperClasses()}
      >
        <Component
          {...props}
          type={as !== 'textarea' ?  'input' : undefined}
          className={classes()}
          name={name}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          rows={as === 'textarea' ? rows : undefined}
        />
        {children}
      </div>
      {hint && <FormHint status={status}>
        {hint}
      </FormHint>}
    </>
  );
}

export default Input;
