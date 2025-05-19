import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface Contact {
  title: string;
  value: string;
  link: string;
}

export interface ContactData {
  contacts: Contact[];
  loading: boolean;
  error: string | null;
}

const initialState: ContactData = {
  contacts: [],
  loading: false,
  error: null,
};

// Async thunk
export const fetchContacts = createAsyncThunk<Contact[]>(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("/data/contactData.json");
      if (!res.ok) throw new Error("Failed to fetch projects");
      return await res.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchContacts.fulfilled,
        (state, action: PayloadAction<Contact[]>) => {
          state.contacts = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default contactSlice.reducer;
