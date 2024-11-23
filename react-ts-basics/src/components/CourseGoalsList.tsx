import React from "react";
import { CourseGoalType } from "../types/CourseGoals";
import CourseGoal from "./CourseGoals";

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (goalId: number) => void;
};

function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  return (
    <div>
      <ul>
        {!!goals &&
          goals.map((goal) => (
            <li key={goal.id}>
              <CourseGoal
                title={goal.title}
                description={goal.description}
                id={goal.id}
                onDeleteGoal={onDeleteGoal}
              ></CourseGoal>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CourseGoalList;
