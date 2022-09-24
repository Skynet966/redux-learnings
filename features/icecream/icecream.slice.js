const createSlice = require('@reduxjs/toolkit').createSlice;

const initState = {
	noOfIcecreams: 10,
};

const icecreamSlice = createSlice({
	name: 'icecream',
	initialState: initState,
	reducers: {
		ordered: state => {
			state.noOfIcecreams--;
		},
		restocked: (state, action) => {
			state.noOfIcecreams += action.payload;
		},
	},
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
