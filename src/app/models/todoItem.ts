export interface ITodoItem {
    id: number;
    name: string;
    deadline: Date | null;
    isDone: boolean;
    isImportant: boolean;
}