import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  companyOwn: PropTypes.string,
  revealFrom: PropTypes.string,
  role: PropTypes.string,
}

const defaultProps = {
  text: '',
  name: '',
  companyOwn: '',
  revealFrom: 'reveal-from-right',
  role:'',
}

const TestimonialItem = ({
  text,
  itemName,
  companyOwn,
  revealFrom,
  role,
  ...props
}) => {
  const testimonialItemClass = `tiles-item ${revealFrom}`;

  return (
    <div  {...props} className={testimonialItemClass} data-reveal-delay="200">
      <div className="tiles-item-inner">
        <div className="testimonial-item-content"> 
          {
            text && <p className="text-sm mb-0">
              {text}
            </p>
          } 
        </div>
        <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
          {itemName && <span className="testimonial-item-name text-color-high">{itemName}</span>}
          {companyOwn && itemName && <span className="text-color-low"> {role} @ </span>}
          {companyOwn && <span className="testimonial-item-link">
            <a href="#0">{companyOwn}</a>
          </span>}
        </div>
      </div>
    </div>
  );
}

TestimonialItem.propTypes = propTypes;
TestimonialItem.defaultProps = defaultProps;

export default TestimonialItem;
