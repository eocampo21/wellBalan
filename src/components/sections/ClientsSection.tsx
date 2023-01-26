import React from 'react';
import { SectionProps } from '../../utils/SectionProps';
import 'swiper/swiper.min.css'
import SectionHeader from './partials/SectionHeader';
import TouchableCarousel from '../elements/TouchableCarousel';

const DefaultProps = {
  ...SectionProps.defaults,
}

export type FormHintProps = React.PropsWithChildren<{
  as?: 'div';
}> & typeof DefaultProps;

const images = [
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/BASF.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/bmw-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/coca-cola-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/samsung-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/american-express-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/walt-disney-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/netflix-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/toyota-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/home-depot-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/nike-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/starbucks-logo.png",
  "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/ge-logo.png",
];

const sectionHeader = {
  title: 'Our Clients',
  paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — '
};

const ClientsSection: React.FC<FormHintProps> = ({
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
          <SectionHeader data={sectionHeader} className="center-content" children={undefined} tag={undefined} />
          {images && <TouchableCarousel images={images} />}
        </div>  
      </Component>
    </section>
  );
}

export default ClientsSection;