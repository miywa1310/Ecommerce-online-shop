import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    products: [],
    favourite: [],
    image:"",
    selectedProducts: [],
    selectedType: false,
    isProductsLoad: false,
    isProductsError: null
}

export const fetchProductData = createAsyncThunk(
    "products/fetchProductData",
    async (url) => {
        const res = await axios.get(url)
        return res.data
    }

)

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setFavouriteItem: (state, action) => {
            if (state.favourite.find(item=>item.id==action.payload.id)) {
                state.favourite=state.favourite.filter(item => item.id !== action.payload.id)
            }else{
                state.favourite.push(action.payload)
            }
        },
        setSeletedProduct: (state, action) => {
            state.selectedType = true,
            state.selectedProducts = action.payload
        },
        setImage: (state, action) => {
            state.image = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductData.pending, (state) => {
            state.isProductsLoad = true
        }).addCase(fetchProductData.fulfilled, (state, action) => {
            state.isProductsLoad = false,
                state.products = action.payload
        }).addCase(fetchProductData.rejected, (state, action) => {
            state.isProductsLoad = false,
                state.isProductsError = action.error.message
        })
    }
})
export const { setFavouriteItem, setSeletedProduct, setImage } = productsSlice.actions

export default productsSlice.reducer