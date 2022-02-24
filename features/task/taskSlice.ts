import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Task } from 'types/task'
import { v4 as uuid } from 'uuid'

const initialState: Task[] = []

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    create: (tasks, action: PayloadAction<string>) => {
      const id = uuid()
      const name = action.payload
      const completed = false
      const newTask = { id, name, completed }
      tasks.push(newTask)
    },
    toggle: (tasks, action: PayloadAction<string>) => {
      const id = action.payload
      tasks.forEach((task, index) => {
        if (task.id === id) {
          tasks[index].completed = !tasks[index].completed
        }
      })
    },
    remove: (tasks, action: PayloadAction<string>) => {
      const id = action.payload
      const filteredTasks = tasks.filter((task) => task.id !== id)
      console.log(filteredTasks)

      tasks = filteredTasks
    },
  },
})

// Action creators are generated for each case reducer function
export const { create, toggle, remove } = taskSlice.actions

export default taskSlice.reducer
