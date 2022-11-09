import React from "react";
import { Animals4 } from "./Animals4";

export default function Animals2(props) {
  return (
    <div>
      <Animals4 name1={props.name1} />
      <div>{props.name}</div> <div>{props.name2}</div>
      <p>The white and black coloured {props.name3}</p>
    </div>
  );
}
