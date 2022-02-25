import { ChangeEvent, useState } from 'react'
import { create, toggle, remove } from 'features/task/taskSlice'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import Head from 'next/head'

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
      <Head>
        <title>Task manager (using Redux)</title>
        <meta name='description' content='Task manager (using Redux)' />
      </Head>

      <main className='mx-auto flex max-w-md flex-col gap-4'>
        <h1>Tasks</h1>
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

        <input
          value={newTask}
          onChange={handleTaskChange}
          placeholder='Task name'
          type='text'
          className='bg-gray-800'
        />
        <button
          onClick={createNewTask}
          disabled={newTask === '' ? true : false}
          className='max-w-fit'
        >
          Add task
        </button>
      </main>
    </>
  )
}

export default Home
