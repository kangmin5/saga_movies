import { configureStore } from "@reduxjs/toolkit"
import movieReducer from "./features/movieSlice"
import createSagaMiddleware from "redux-saga"
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore ({
    reducer: {
        movie:movieReducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)
export default store