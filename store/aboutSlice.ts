import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface About {
  paragraphs: string[];
  links: {
    linkedin: string;
    email: string;
  };
}

export interface AboutState {
  aboutme: {
    paragraphs: [];
    links: {
      linkedin: "";
      email: "";
    },
  };
  skills: any[];
  slideshow: any[];
  loading: boolean;
  error: string | null;
}

const initialState: AboutState = {
  aboutme: {
    paragraphs: [],
    links: {
      linkedin: "",
      email: "",
    },
  },
  skills: [],
  slideshow: [],
  loading: false,
  error: null,
};

// Async thunk
export const fetchAboutData = createAsyncThunk(
  "about/fetchAbout",
  async (_, { rejectWithValue }) => {
    try {
      const [aboutRes, skillsRes, slideshowRes] = await Promise.all([
        fetch("/data/aboutData.json"),
        fetch("/data/skillsData.json"),
        fetch("/data/slideshowData.json"),
      ]);

      const [aboutme, skills, slideshow] = await Promise.all([
        aboutRes.json(),
        skillsRes.json(),
        slideshowRes.json(),
      ]);

      return { aboutme, skills, slideshow };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAboutData.fulfilled, (state, action) => {
        state.aboutme = action.payload.aboutme;
        state.skills = action.payload.skills;
        state.slideshow = action.payload.slideshow;
      })
      .addCase(fetchAboutData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default aboutSlice.reducer;
