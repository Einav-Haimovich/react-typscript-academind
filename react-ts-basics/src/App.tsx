import Header from "./components/Header";
import goalImg from "./assets/goal.jpg";
import CourseGoalList from "./components/CourseGoalsList";
import { useState } from "react";
import { CourseGoalType } from "./types/CourseGoals";
import NewGoal from "./components/NewGoal";


function App() {
  const [courseGoals, setCourseGoals] = useState<CourseGoalType[]>([]);

  function hanldeAddGoal(goal: string, summary: string) {
    setCourseGoals((prevState) => {
      const newGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
        onDeleteGoal: handleDeleteGoal,
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

      {/* <button onClick={hanldeAddGoal}>Add Goal</button> */}
      <NewGoal onAddGoal={hanldeAddGoal}/>
      <CourseGoalList goals={courseGoals} onDeleteGoal={handleDeleteGoal}/>

    </main>
  );
}

export default App;
