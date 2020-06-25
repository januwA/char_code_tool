import React, { useRef, useEffect } from "react";
import { util } from "../libs";

export interface IOInputProps {
  inputValue?: string;
  btnText: string;
  hander: (inputValue: string) => string | number;
  handleArray?: boolean;
}

export function IOInput(props: IOInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    const iv = inputRef.current?.value ?? "";
    outputRef.current!.value =
      props.handleArray ?? true
        ? util.handleArrayInput(iv, (el) => props.hander(el).toString())
        : props.hander(iv).toString();
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
IOInput.defaultProps = {
  handleArray: true,
};
