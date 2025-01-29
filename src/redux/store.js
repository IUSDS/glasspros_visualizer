import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux'; // Import from 'redux'
import storage from 'redux-persist/lib/storage';
import showerReducer from './slices/showerSlice';
import windowReducer from './slices/windowSlice'; // Import windowSlice

// Persist Configs
const showerPersistConfig = {
  key: 'shower',
  storage,
};

const windowPersistConfig = {
  key: 'window',
  storage,
};

// Persisted Reducers
const persistedShowerReducer = persistReducer(showerPersistConfig, showerReducer);
const persistedWindowReducer = persistReducer(windowPersistConfig, windowReducer);

// Combine Reducers
const rootReducer = combineReducers({
  shower: persistedShowerReducer,
  window: persistedWindowReducer,
});

// Configure Store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/REGISTER',
          'persist/FLUSH',
          'persist/PAUSE',
          'persist/PURGE',
        ],
      },
    }),
});

// Persistor
export const persistor = persistStore(store);
