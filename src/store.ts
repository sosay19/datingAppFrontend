// store/store.ts

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './store/reducers/userReducer'; // Import your userReducer and other reducers if needed

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
    user: userReducer,
    // Add other reducers here if applicable
});

// Define the root state type based on the root reducer
export type RootState = ReturnType<typeof rootReducer>;

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
