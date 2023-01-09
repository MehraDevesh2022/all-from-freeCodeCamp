import React from 'react'

export default function CallOut(props) {
  return (
    <div className="callout">
      {/* this is how use reusable code here we have same class and difreent work  */}
      {/* using props.children for ussing component */}
      {props.children}
    </div>
  );
}
