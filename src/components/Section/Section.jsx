import React from 'react';

const Section = ({ title, children }) => {
  return (
    <>
      <p>{title}</p>
      <>{children}</>
    </>
  );
};

export default Section;
