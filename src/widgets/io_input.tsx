import React, { useRef, useEffect } from "react";

export interface IOInputProps {
  inputValue?: string;
  btnText: string;
  hander: (inputValue: string) => string | number;
}

export function IOInput(props: IOInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    outputRef.current!.value = props
      .hander(inputRef.current?.value ?? "")
      .toString();
  };

  useEffect(() => {
    inputRef.current!.value = props.inputValue || "";
    return () => {
      // dispose
    };
  });

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onClick}>{props.btnText}</button>
      <input type="text" ref={outputRef} />
    </div>
  );
}
