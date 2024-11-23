import React, { PropsWithChildren } from 'react'
import { CourseGoalType } from '../types/CourseGoals'

type CourseGoalProps = PropsWithChildren<CourseGoalType>

function CourseGoals({title, description, children}: CourseGoalProps) {
  return (
    <article>
        <div>
            <h2>{title}</h2>
            {children}
            <p>{description}</p>
        </div>

        <button>Delete</button>
    </article>
  )
}

export default CourseGoals