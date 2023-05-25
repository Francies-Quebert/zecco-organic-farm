import React from 'react';

interface IButton {
  name: string;
  onClick?: () => any;
  containerClassname?: string;
  btnClassname?: string;
}

function Button({ name, containerClassname, btnClassname }: IButton) {
  return (
    <div className={`min-w-[150px] ${containerClassname}`}>
      <button className={`primary-btn ${btnClassname}`}>{name}</button>
    </div>
  );
}

export default Button;
