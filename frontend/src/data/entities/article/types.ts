import { SetCurrentArticleAction } from './actions';

export interface Article {
    title?: string;
    subtitle?: string;
    pretext?: string;
    text?: string; // TODO: write correct type
}

export interface ArticleStoreData {
    currentArticle?: Article;
}

export interface ComponentWithSetCurrentArticleProps {
    setCurrentArticle: (data: SetCurrentArticleAction['payload']) => void;
}

export type ComponentWithSetCurrentArticleDispatchProps = Pick<
    ComponentWithSetCurrentArticleProps,
    'setCurrentArticle'
>;
