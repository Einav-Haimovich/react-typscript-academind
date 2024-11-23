export type CourseGoalType = {
    title: string;
    description: string;
    id: number;
    onDeleteGoal: (goalId: number) => void;
};