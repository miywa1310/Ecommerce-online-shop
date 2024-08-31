import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    categories: [],
    isCategoriesLoad: false,
    isCategoriesError: null
}

export const fetchCategoryData = createAsyncThunk(
    "categories/fetchCategoryData",
    async (url) => {
        const res = await axios.get(url)
        return res.data
    }

)

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryData.pending, (state) => {
            state.isCategoriesLoad = true
        }).addCase(fetchCategoryData.fulfilled, (state, action) => {
            state.isCategoriesLoad = false,
            state.categories = action.payload
        }).addCase(fetchCategoryData.rejected, (state, action) => {
            state.isCategoriesLoad = false,
            state.isCategoriesError = action.error.message
        })
    }
})

export default categoriesSlice.reducer