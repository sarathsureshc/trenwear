import React from 'react';

const Section = ({ 
  children, 
  className = '', 
  id,
  background = 'bg-black',
  ...props 
}) => {
  return (
    <section 
      id={id}
      className={`py-16 md:py-24 ${background} ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
