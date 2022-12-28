import React from 'react';
import { SectionProps } from '../../utils/SectionProps';

const DefaultProps = {
  ...SectionProps.defaults,
}

export type FormHintProps = React.PropsWithChildren<{
  as?: 'div';
}> & typeof DefaultProps;

const TouchableCarousel: React.FC<FormHintProps> = ({
  as: Component = "div",
  ...props
}) => {
  return (
    <section
      {...props}
      className="touchable-carousel section"
    >
      <Component className="container center-content">
        <div className="section-inner has-top-divider">
          <h2 className='mt-0 mb-16'>
            Our Techs
          </h2>
        </div>  
      </Component>
    </section>
  );
}

export default TouchableCarousel;