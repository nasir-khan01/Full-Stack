import React from "react";
const Total = ({ course }) => {
  const total = course.parts.reduce((Total, part) => {
    return Total + part.exercises;
  }, 0);
  return (
    <div>
      <b>total of {total} excercise</b>
    </div>
  );
};
export default Total;
