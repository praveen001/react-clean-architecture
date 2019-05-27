export interface ITodoItem {
  id: number;
  description: string;
}

export enum ApiStatus {
  LOADING = 'loading',
  LOADED = 'loaded',
  FAILED = 'failed'
}