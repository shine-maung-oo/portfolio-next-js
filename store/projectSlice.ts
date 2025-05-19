import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface Project {
  title: string;
  image: string;
  languages: string;
  url: string;
  category?: number;
}

interface ProjectState {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const initialState: ProjectState = {
  projects: [],
  loading: false,
  error: null,
};

// Async thunk
export const fetchProjects = createAsyncThunk<Project[]>(
  'projects/fetchProjects',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('/data/projects.json');
      if (!res.ok) throw new Error('Failed to fetch projects');
      return await res.json();
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action: PayloadAction<Project[]>) => {
        state.projects = action.payload;
        state.loading = false;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default projectSlice.reducer;
