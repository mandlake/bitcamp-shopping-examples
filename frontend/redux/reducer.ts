import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import userReducer from "@/app/components/user/service/user.slice";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["userState"],
};

const persistedArticleReducer = persistReducer(userPersistConfig, userReducer);
// const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
// const persistedBoardReducer = persistReducer(boardPersistConfig, boardReducer);

export const rootReducer = combineReducers({
  article: persistedArticleReducer,
  //   user: persistedUserReducer,
  //   board: persistedBoardReducer
});
