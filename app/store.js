const configureStore = require('@reduxjs/toolkit').configureStore;
const reduxLogger = require('redux-logger');
const cakeReducer = require('../features/cake/cake.slice');
const icecreamReducer = require('../features/icecream/icecream.slice');

// create redux-logger
const logger = reduxLogger.createLogger();

// configure store
const store = configureStore({
	reducer: {
		cake: cakeReducer,
		icecream: icecreamReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

module.exports = store;
