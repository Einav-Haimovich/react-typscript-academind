export type CourseGoalType = {
    title: string;
    description: string;
    id: number;
};

export type CourseGoalListType = {
    goals: CourseGoalType[];
}