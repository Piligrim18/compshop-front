export interface Category {
    id: number;
    name: string;
}

export interface categoriesState {
    categories: Category[];
    loading: boolean;
    error: null | string;
}