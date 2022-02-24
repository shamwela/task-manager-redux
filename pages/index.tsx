import { ChangeEvent, useState } from 'react'
import { create, toggle, remove } from 'features/task/taskSlice'
import { useAppSelector, useAppDispatch } from 'app/hooks'

const Home = () => {
  const tasks = useAppSelector((state) => state.tasks)
  const [newTask, setNewTask] = useState('')
  const dispatch = useAppDispatch()

  const handleTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const createNewTask = () => {
    dispatch(create(newTask))

    // Clear the input field after creating a new task
    setNewTask('')
  }

  const toggleTask = (id: string) => {
    dispatch(toggle(id))
  }

  const deleteTask = (id: string) => {
    dispatch(remove(id))
  }

  return (
    <>
      <h1 className='mb-4'>Tasks</h1>
      <div className='flex flex-col gap-4'>
        {tasks.map(({ id, name, completed }) => (
          <div key={id} className='flex gap-4'>
            <span
              onClick={() => toggleTask(id)}
              className={
                completed ? 'cursor-pointer line-through' : 'cursor-pointer'
              }
            >
              {name}
            </span>

            <button onClick={() => deleteTask(id)} className='text-red-500'>
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-4'>
        <input
          value={newTask}
          onChange={handleTaskChange}
          placeholder='Task name'
          type='text'
        />
        <button onClick={createNewTask} className='text-left'>
          Add task
        </button>
      </div>
    </>
  )
}

export default Home
