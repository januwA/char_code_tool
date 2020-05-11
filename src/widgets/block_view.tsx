import React from "react";
export interface BlockViewProps {
  title: string;
  children: any;
}

export function BlockView(props: BlockViewProps) {
  return (
    <section>
      <h1>{props.title}</h1>
      {props.children}
    </section>
  );
}
