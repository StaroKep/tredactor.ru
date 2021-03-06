import { createReducer } from 'deox';

import { setCurrentArticle, setUserArticlesList, addUserArticlesList } from './actions';
import { ArticleStoreData } from './types';

export const initialState: ArticleStoreData = {};

export const articleReducer = createReducer(initialState, handleAction => [
    handleAction(setCurrentArticle, (state, { payload }) => {
        const { currentArticle } = state;

        return { ...state, currentArticle: { ...currentArticle, ...payload } };
    }),
    handleAction(setUserArticlesList, (state, { payload: userArticles }) => {
        return { ...state, userArticles };
    }),
    handleAction(addUserArticlesList, (state, { payload }) => {
        const { userArticles } = state;

        const newUserArticles = {
            ...userArticles,
            ...payload,
        };

        return { ...state, userArticles: newUserArticles };
    }),
]);
