import React from 'react';

interface CardProps {
  width?: string;
  height?: string; // ? - не обязательно
  children?: React.ReactChild | React.ReactNode;
}

const Card = ({ width, height, children }: CardProps) => {
  return (
    <div style={{ width, height, border: '1px solid gray' }}>
      {children}
    </div>
  );
};

export default Card;
