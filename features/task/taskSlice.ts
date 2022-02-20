import { createSlice } from '@reduxjs/toolkit'
import type { Task } from 'types/task'
import { v4 as uuid } from 'uuid'

const initialTasks: Task[] = []

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialTasks,
  reducers: {
    create: (state, action) => {
      // const id = new Date().valueOf()
      const id = uuid()
      const name: string = action.payload
      const newTask: Task = { id, name }
      state.push(newTask)
    },
  },
})

// Action creators are generated for each case reducer function
export const { create } = taskSlice.actions

export default taskSlice.reducer
