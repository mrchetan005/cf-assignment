import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    isFetchedLocalData: false,
    testTypes: [
        { id: 1, type: 'PHP' },
        { id: 2, type: 'Node Js' },
        { id: 3, type: 'React Js' },
    ],
    data: [],
}

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        getLocalData(state) {
            if (state.isFetchedLocalData) return;
            const testData = JSON.parse(localStorage.getItem('test_data'));
            if (testData) {
                return testData;
            }
        },
        addTestTypes(state, { payload }) {
            payload = { id: (state.testTypes.at(-1)?.id) + 1, type: payload };
            state.testTypes.push(payload);
            localStorage.setItem('test_data', JSON.stringify(state));
        },
        addData(state, { payload }) {
            payload.id = (state.data.at(-1)?.id || 0) + 1;
            state.data.push({
                ...payload,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            localStorage.setItem('test_data', JSON.stringify(state));
        },
        updateData(state, { payload }) {
            const index = state.data.findIndex(({ id }) => payload.id === id);
            if (index === -1) {
                return;
            }
            state.data[index] = {
                ...payload,
                updatedAt: new Date()
            }
            localStorage.setItem('test_data', JSON.stringify(state));
        },
        deleteData(state, { payload }) {
            const index = state.data.findIndex(item => item.id === payload);
            if (index !== -1) {
                state.data.splice(index, 1);
            }
            localStorage.setItem('test_data', JSON.stringify(state));
        }
    }
});

export const { addData, updateData, deleteData, addTestTypes, getLocalData } = testSlice.actions;

export default testSlice.reducer;