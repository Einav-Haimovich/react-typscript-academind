import React from "react";
import { CourseGoalType } from '../types/CourseGoals';
import CourseGoals from "./CourseGoals";


type CourseGoalListProps = {
  goals: CourseGoalType[];
};

function CourseGoalsList({ goals }: CourseGoalListProps) {

  return (
    <div>
      <ul>
        {!!goals &&
          goals.map((goal) => (
            <li key={goal.id}>
              <CourseGoals
                title={goal.title}
                description={goal.description}
              ></CourseGoals>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CourseGoalsList;
