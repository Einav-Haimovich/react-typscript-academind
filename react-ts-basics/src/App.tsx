import Header from "./components/Header";
import goalImg from "./assets/goal.jpg";
import CourseGoalsList from "./components/CourseGoalsList";
import { useState } from "react";
import { CourseGoalType } from "./types/CourseGoals";


function App() {
  const [courseGoals, setCourseGoals] = useState<CourseGoalType[]>([]);

  function hanldeAddGoal() {
    setCourseGoals((prevState) => {
      const newGoal = {
        id: Math.random(),
        title: "My new goal",
        description: "Description of my new goal",
      };
      return [...prevState, newGoal];
    });
  }

  function handleDeleteGoal(goalId: number) {
    setCourseGoals((prevState) => {
      const updatedGoals = prevState.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  }

  return (
    <main>
      <Header image={{ src: goalImg, alt: "A list of goals" }}>
        <h1>Lets get started</h1>
      </Header>

      <button onClick={hanldeAddGoal}>Add Goal</button>
      <CourseGoalsList goals={courseGoals} />

    </main>
  );
}

export default App;
