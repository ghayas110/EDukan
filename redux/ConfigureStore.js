import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistStore, persistCombineReducers } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import { ads } from './ads'
import { categories } from './categories'
import { users } from './users'
import { favorites } from './favorites'

export const configureStore = () => {
    const config = {
        key: 'root',
        storage: AsyncStorage,
        debug: true
    }

    const store = createStore(
        persistCombineReducers(config, {
            ads,
            categories,
            users,
            favorites,
        }),
        compose(
            applyMiddleware(thunk)
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()            
        )
    )
    const persistor = persistStore(store)
    return { persistor, store }
}