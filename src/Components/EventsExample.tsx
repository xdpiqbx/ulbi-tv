import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export interface EventsExampleProps {}

const EventsExample: React.FC<EventsExampleProps> = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
    console.log(inputRef.current?.value);
  };

  const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('Drag');
  };

  const dragWidthPreventHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(true);
  };

  const leaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(false);
  };

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(false);
    console.log('DROPPED!');
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="uncontrolled" />
      <input
        value={value}
        onChange={changeHandler}
        type="text"
        placeholder="controlled"
      />
      <button onClick={clickHandler}>Click</button>
      <div
        draggable
        onDrag={dragHandler}
        style={{ width: 200, height: 200, background: 'red' }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWidthPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? 'blue' : 'red',
          marginTop: 15,
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
