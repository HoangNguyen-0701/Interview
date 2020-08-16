import React from 'react';

const Card = ({ title = '', children, className }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-body">
        {title && <h4 className="card-title">{title}</h4>}
        {children}
      </div>
    </div>
  );
};

export default Card;
