import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TNewNote, TNote } from "../../types/globalTypes";

export const fetchGetAllNotes = createAsyncThunk(
  "notes/fetchGetNotes",
  async (): Promise<TNote[]> => {
    const { data } = await axios.get<TNote[]>(`/notes`);
    return data;
  }
);

export const fetchGetNoteByID = createAsyncThunk(
  "notes/fetchGetNoteByID",
  async (noteID: number): Promise<TNote> => {
    const { data } = await axios.get<TNote>(`/notes/${noteID}`);
    return data;
  }
);

export const fetchDeleteNote = createAsyncThunk(
  "note/fetchDeleteNote",
  async (id: number): Promise<number> => {
    await axios.delete(`/notes/${id}`);
    return id;
  }
);

export const fetchAddNote = createAsyncThunk(
  "note/fetchAddNote",
  async (newNote: TNewNote): Promise<TNote[]> => {
    const { data } = await axios.post<TNote[]>(`/notes`, newNote);
    return data;
  }
);

export const fetchChangeNote = createAsyncThunk(
  "note/fetchChangeNote",
  async (updatedNote: TNote): Promise<TNote> => {
    console.log("id: ", updatedNote.id);
    console.log("updatedTask: ", updatedNote);
    await axios.put(`/notes/${updatedNote.id}`, updatedNote);
    return updatedNote;
  }
);

type TNoteState = {
  allNotes: {
    items: TNote[];
    isLoading: boolean;
  };
  activeNote: {
    item: TNote | undefined;
    isLoading: boolean;
  };
};

const initialState: TNoteState = {
  allNotes: {
    items: [],
    isLoading: true,
  },
  activeNote: {
    item: undefined,
    isLoading: true,
  },
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetAllNotes.pending, (state) => {
        state.allNotes.isLoading = true;
      })
      .addCase(
        fetchGetAllNotes.fulfilled,
        (state, action: PayloadAction<TNote[]>) => {
          state.allNotes.isLoading = false;
          state.allNotes.items = action.payload;
        }
      )
      .addCase(fetchGetNoteByID.pending, (state) => {
        state.activeNote.isLoading = true;
      })
      .addCase(
        fetchGetNoteByID.fulfilled,
        (state, action: PayloadAction<TNote>) => {
          state.activeNote.isLoading = false;
          state.activeNote.item = action.payload;
        }
      )
      .addCase(fetchDeleteNote.pending, (state) => {
        state.activeNote.isLoading = true;
      })
      .addCase(
        fetchDeleteNote.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.allNotes.isLoading = false;
          state.allNotes.items = state.allNotes.items.filter(
            (task) => task.id !== action.payload
          );
          console.log(state.allNotes.items);
        }
      )
      .addCase(fetchAddNote.pending, (state) => {
        state.allNotes.isLoading = true;
      })
      .addCase(fetchAddNote.fulfilled, (state, action) => {
        state.allNotes.isLoading = true;
        state.allNotes.items = action.payload;
      })
      .addCase(fetchChangeNote.pending, (state) => {
        state.allNotes.isLoading = true;
      })
      .addCase(fetchChangeNote.fulfilled, (state, action) => {
        state.allNotes.isLoading = false;
        let updatedNoteIndex = 0;
        let updatedNoteID = action.payload.id;
        state.allNotes.items = state.allNotes.items.filter((note, index) => {
          if (note.id === updatedNoteID) {
            updatedNoteIndex = index;
            return false;
          }
          return true;
        });
        state.allNotes.items.splice(updatedNoteIndex, 0, action.payload);
      });
  },
});

// export const { addUpdatedTaskToStore } = tasksSlice.actions;

export const noteReducer = notesSlice.reducer;
