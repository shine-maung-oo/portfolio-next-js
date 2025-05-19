import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './projectSlice';
import resumeReducer from './resumeSlice';
import aboutReducer from './aboutSlice';
import contactReducer from './contactSlice';

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    resume: resumeReducer,
    about: aboutReducer,
    contacts: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
