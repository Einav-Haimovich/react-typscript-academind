import React, { ReactNode } from "react";
import { CourseGoalType } from "../types/CourseGoals";
import CourseGoal from "./CourseGoals";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (goalId: number) => void;
};

function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet, Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length > 3) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You have a lot of goals. Consider deleting some of them.
      </InfoBox>
    );
  }
  return (
    <>
    {warningBox}
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
    </>
  );
}

export default CourseGoalList;
