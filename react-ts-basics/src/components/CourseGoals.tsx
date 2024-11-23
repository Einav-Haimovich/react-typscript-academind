import React, { PropsWithChildren } from 'react'
import { CourseGoalType } from '../types/CourseGoals'

type CourseGoalProps = PropsWithChildren<CourseGoalType>

function CourseGoal({title, description, children, onDeleteGoal, id}: CourseGoalProps) {
  return (
    <article>
        <div>
            <h2>{title}</h2>
            {children}
            <p>{description}</p>
        </div>

        <button onClick={() => onDeleteGoal(id)}>Delete</button>
    </article>
  )
}

export default CourseGoal