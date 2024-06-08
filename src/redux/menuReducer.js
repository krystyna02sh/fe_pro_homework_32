import { createSlice } from "@reduxjs/toolkit"

const categories = [{
    id: "pizza",
    title: "Піца"
},
{
    id: "coffee",
    title: "Кава"

},
{
    id: "discount",
    title: "Акції"

}]

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        selectedCategoryId: categories[0].id,
        categories
    },
    reducers: {
        changeCategory: (state, action) => {
            state.selectedCategoryId = action.payload
        }
    }
})
export const { changeCategory } = menuSlice.actions
export default menuSlice.reducer