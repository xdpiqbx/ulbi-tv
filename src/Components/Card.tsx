import React from 'react';
import { useState } from 'react';

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface CardProps {
  width?: string;
  height?: string; // ? - не обязательно
  variant: CardVariant;
  onClick: (num: number) => void;
}

const Card: React.FC<CardProps> = ({
  width,
  height,
  variant,
  children,
  onClick,
}) => {
  const [state, setState] = useState(0);
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'lightgray' : 'none',
      }}
      onClick={() => {
        setState(state + 1);
        onClick(state);
      }}
    >
      {children}
    </div>
  );
};

export default Card;
