import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  companyOwn: PropTypes.string,
  revealFrom: PropTypes.string,
  role: PropTypes.string,
  urlPhoto: PropTypes.string,
}

const defaultProps = {
  text: '',
  name: '',
  companyOwn: '',
  revealFrom: 'reveal-from-right',
  role:'',
  urlPhoto: '',
}

const TestimonialItem = ({
  text,
  itemName,
  companyOwn,
  revealFrom,
  role,
  urlPhoto,
  ...props
}) => {
  const withFlipCard = !!urlPhoto;

  const testimonialClass = {
    'testimonialItem': `tiles-item ${revealFrom} ${withFlipCard ? `flip-card` : ``}`,
    'tilesItemInner': `tiles-item-inner ${withFlipCard ? `flip-card-inner` : ``}`,
  }

  return (
    <div  {...props} className={testimonialClass.testimonialItem} data-reveal-delay="200">
      <div className={testimonialClass.tilesItemInner}>
        <div class="title title-front flip-card-front">
          <div className="testimonial-item-content">
            <img src={urlPhoto}></img>
          </div>
          <div className="testimonial-item-footer text-xs has-top-divider">
            {itemName && <span className="testimonial-item-name text-color-high">{itemName}</span>}
            {companyOwn && itemName && <span className="text-color-high"> {role} @ </span>}
            {companyOwn && <span className="testimonial-item-link">
              <a href="#0">{companyOwn}</a>
            </span>}
          </div>
        </div>
        <div class="title title-back flip-card-back">
          <div className="testimonial-item-content"> 
            {
              text && <p className="text-sm">
                {text}
              </p>
            } 
          </div>
        </div>
      </div>
    </div>
  );
}

TestimonialItem.propTypes = propTypes;
TestimonialItem.defaultProps = defaultProps;

export default TestimonialItem;
