import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'gatsby';
import { ArrowRight, Launch, Download, Error } from '@carbon/react/icons';

const ResourceCard2 = ({
  href,
  title,
  subTitle,
  actionIcon = 'arrowRight',
  color = 'light',
  disabled = false,
  aspectRatio = '2:1',
  className,
  ...props
}) => {
  // Determine if this is an internal link
  const isInternalLink = href && href.charAt(0) === '/';

  // Icon mapping
  const getActionIcon = (iconName) => {
    const icons = {
      arrowRight: ArrowRight,
      launch: Launch,
      download: Download,
      error: Error,
    };
    
    const IconComponent = icons[iconName] || ArrowRight;
    return <IconComponent size={16} className="esds-resource-card__icon" />;
  };

  const resourceCardClasses = cx(
    'esds-resource-card',
    `esds-resource-card--${color}`,
    `esds-resource-card--${aspectRatio.replace(':', 'x')}`,
    {
      'esds-resource-card--disabled': disabled,
    },
    className
  );

  const cardContent = (
    <div className="esds-resource-card__content">
      <div className="esds-resource-card__text">
        <h3 className="esds-resource-card__title">{title}</h3>
        {subTitle && (
          <p className="esds-resource-card__subtitle">{subTitle}</p>
        )}
      </div>
      <div className="esds-resource-card__action">
        {getActionIcon(actionIcon)}
      </div>
    </div>
  );

  if (disabled) {
    return <div className={resourceCardClasses}>{cardContent}</div>;
  }

  if (isInternalLink) {
    return (
      <Link to={href} className={resourceCardClasses} {...props}>
        {cardContent}
      </Link>
    );
  }

  return (
    <a href={href} className={resourceCardClasses} {...props}>
      {cardContent}
    </a>
  );
};

ResourceCard2.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  actionIcon: PropTypes.oneOf(['arrowRight', 'launch', 'download', 'error']),
  color: PropTypes.oneOf(['light', 'dark']),
  disabled: PropTypes.bool,
  aspectRatio: PropTypes.oneOf(['2:1', '1:1', '4:3', '16:9']),
  className: PropTypes.string,
};

export default ResourceCard2;