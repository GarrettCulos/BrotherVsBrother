import { UIState } from './ui.reducers';

export const getErrorByIds = (state: UIState) => Object.keys(state.error);
export const getLoadingByIds = (state: UIState) => Object.keys(state.loading);
