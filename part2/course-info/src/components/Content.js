import React from "react";
import Part from "./Part";
import Total from "./Total";
const Content = ({ course }) => {
  const parts = course.parts;

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total course={course} />
    </div>
  );
};
export default Content;
