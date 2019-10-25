import React from "react";

function Section(props) {
  return (
    <div className="Section">
      <h3>{props.title}</h3>
      <p>{props.children}</p>
    </div>
  );
}

export default Section;
