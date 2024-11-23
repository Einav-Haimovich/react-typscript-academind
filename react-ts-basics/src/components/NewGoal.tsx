import React, {type FormEvent } from 'react'

function NewGoal() {

function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
}

  return (
    <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your goal</label>
            <input type="text" id="goal" />
        </p>

        <p>
            <label htmlFor="summary">Short summary</label>
            <input type="text" id="summary" />
        </p>

        <button>Add Goal</button>
    </form>
  )
}

export default NewGoal