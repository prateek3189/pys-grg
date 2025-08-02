import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Action
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [], // Changed from null to an empty array
    loading: false,
  },
  reducers: {
    // BEGIN: Added reducers
    setLoading(state, action) {
      state.loading = false;
    },
    setTodos(state, action) {
      state.data = [];
    },
  }, // END: Added reducers
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default todoSlice.reducer;
