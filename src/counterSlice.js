import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        "morskaDiscount": { count: 1 },
        "Peperoni": { count: 1 },
        "Vegeterian": { count: 1 },
        "Margarita": { count: 1 },
        "Morska": { count: 1 },
        "Cheese": { count: 1 },
        "Formajo": { count: 1 },
        "Espreso": { count: 1 },
        "Americano": { count: 1 },
        "Cappuchino": { count: 1 },
        "Late": { count: 1 },
        "cheeseDiscount": { count: 1 },
        "formajoDiscount": { count: 1 },
        items: [],
        total: 0

    },
    reducers: {
        increment: (state, action) => {
            const { target } = action.payload;
            state[target].count += 1;
            const item = state.items.find(item => item.id === target);
            if (item) {
                item.count += 1;
                state.total += parseFloat(item.price);
            }
        },
        decrement: (state, action) => {
            const { target } = action.payload;
            if (state[target].count > 0) {
                state[target].count -= 1;
                const existingItem = state.items.find(item => item.id === target);
                if (existingItem) {
                    existingItem.quantity -= 1;
                    state.total -= parseFloat(existingItem.price);

                }

            }
        },
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {

                state[newItem.id].count += 1
                state.total += parseFloat(existingItem.price)
            }
            else {
                state.items.push(newItem);
                state.total += parseFloat(newItem.price);
            }
        },

        removeItem: (state, action) => {
            const { id, price, quantity } = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            state[id].count = 1;
            state.total -= price * quantity;
        },

        clearOrder: state => {
            state.morskaDiscount.count = 1;
            state.cheeseDiscount.count = 1;
            state.formajoDiscount.count = 1;
            state.Peperoni.count = 1;
            state.Vegeterian.count = 1;
            state.Margarita.count = 1;
            state.Morska.count = 1;
            state.Cheese.count = 1;
            state.Formajo.count = 1;
            state.Espreso.count = 1;
            state.Americano.count = 1;
            state.Cappuchino.count = 1;
            state.Late.count = 1;
            state.items = [];
            state.total = 0;
        }
    }
});

export const { increment, decrement, removeItem, addItem, clearOrder } = counterSlice.actions;
export default counterSlice.reducer;
