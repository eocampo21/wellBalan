import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader  from '../sections/partials/SectionHeader';
import TestimonialItem from '../../components/elements/TestimonialItem';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Customer testimonials',
    paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <TestimonialItem {...{
                text:"— Such good place and people to work with it",
                itemName: 'Roman Level',
                role:'- CEO',
                companyOwn: 'WIP LLC',
                revealFrom: 'reveal-from-bottom',
                urlPhoto: 'https://faces-img.xcdn.link/thumb-lorem-face-6040_thumb.jpg',
              }}
            />
            <TestimonialItem {...{
                text:"— Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                itemName: 'Juaansito',
                role:'- Principle Engineering',
                companyOwn: 'ThinkingAboutYet',
                revealFrom: 'reveal-from-right',
                urlPhoto: 'https://faces-img.xcdn.link/image-lorem-face-4374.jpg',
              }}
            />
            <TestimonialItem {...{
                text:"— Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                itemName: 'Hernesto',
                role:'- Angular Subject Matter',
                companyOwn: 'Freelancer',
                revealFrom: 'reveal-from-left',
                urlPhoto: 'https://faces-img.xcdn.link/thumb-lorem-face-6034_thumb.jpg',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;