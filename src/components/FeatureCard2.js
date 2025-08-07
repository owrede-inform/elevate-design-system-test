import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'gatsby';
import ResourceCard2 from './ResourceCard2';

const FeatureCard2 = ({
  children,
  href,
  subTitle,
  title,
  color = 'dark',
  disabled = false,
  actionIcon = 'arrowRight',
  className,
  ...resourceCardProps
}) => {
  // Determine if this is an internal link
  const isInternalLink = href && href.charAt(0) === '/';

  const featureCardClasses = cx('esds-feature-card', className);

  // Card content with clean structure
  const cardContent = (
    <div className="esds-feature-card__container">
      {/* Image container */}
      <div className="esds-feature-card__image">
        {children}
      </div>
      
      {/* Overlay container for ResourceCard2 */}
      <div className="esds-feature-card__overlay">
        <ResourceCard2
          title={title}
          subTitle={subTitle}
          aspectRatio="2:1"
          actionIcon={actionIcon}
          color={color}
          disabled={disabled}
          {...resourceCardProps}
        />
      </div>
    </div>
  );

  // Render with appropriate wrapper based on link type
  if (disabled) {
    return <div className={featureCardClasses}>{cardContent}</div>;
  }

  if (isInternalLink) {
    return (
      <Link to={href} className={featureCardClasses}>
        {cardContent}
      </Link>
    );
  }

  return (
    <a href={href} className={featureCardClasses} {...resourceCardProps}>
      {cardContent}
    </a>
  );
};

FeatureCard2.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  actionIcon: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default FeatureCard2;