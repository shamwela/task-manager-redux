import React, { ChangeEvent, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { create } from 'features/task/taskSlice'
import type { Task } from 'types/task'

const Home = () => {
  const tasks: Task[] = useSelector((state) => state.tasks)
  const [newTask, setNewTask] = useState('')
  const dispatch = useDispatch()

  const handleTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const createNewTask = () => {
    dispatch(create(newTask))

    // Clear the input field after creating a new task
    setNewTask('')
  }

  return (
    <>
      <h1>Tasks</h1>
      {tasks.map(({ id, name }) => {
        return <p key={id}>{name}</p>
      })}

      <div className='flex flex-col'>
        <input
          value={newTask}
          onChange={handleTaskChange}
          placeholder='Task name'
          type='text'
        />
        <button onClick={createNewTask}>Add task</button>
      </div>
    </>
  )
}

export default Home
