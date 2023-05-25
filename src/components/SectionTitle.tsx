import React from 'react';

interface ISectionTitle {
  title: string;
  className?: string;
}
function SectionTitle({ title, className }: ISectionTitle) {
  return <h1 className={`section-title ${className || ''}`}>{title}</h1>;
}

export default SectionTitle;
