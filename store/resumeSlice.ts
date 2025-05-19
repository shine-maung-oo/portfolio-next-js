// store/resumeSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface ResumeState {
  education: any[];
  experience: any[];
  skills: any[];
  language: any[];
  slideshow: any[];
  cardSkills: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ResumeState = {
  education: [],
  experience: [],
  skills: [],
  language: [],
  slideshow: [],
  cardSkills: [],
  loading: false,
  error: null,
};

export const fetchResumeData = createAsyncThunk(
  'resume/fetchResumeData',
  async (_, { rejectWithValue }) => {
    try {
      const [
        educationRes,
        experienceRes,
        skillsRes,
        languageRes,
        slideshowRes,
        cardSkillsRes,
      ] = await Promise.all([
        fetch('/data/educationData.json'),
        fetch('/data/experienceData.json'),
        fetch('/data/skillsData.json'),
        fetch('/data/languageData.json'),
        fetch('/data/slideshowData.json'),
        fetch('/data/cardSkillsData.json'),
      ]);

      const [education, experience, skills, language, slideshow, cardSkills] =
        await Promise.all([
          educationRes.json(),
          experienceRes.json(),
          skillsRes.json(),
          languageRes.json(),
          slideshowRes.json(),
          cardSkillsRes.json(),
        ]);

      return { education, experience, skills, language, slideshow, cardSkills };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResumeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchResumeData.fulfilled, (state, action) => {
        state.education = action.payload.education;
        state.experience = action.payload.experience;
        state.skills = action.payload.skills;
        state.language = action.payload.language;
        state.slideshow = action.payload.slideshow;
        state.cardSkills = action.payload.cardSkills;
        state.loading = false;
      })
      .addCase(fetchResumeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default resumeSlice.reducer;
