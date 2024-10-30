export interface ITodoItem {
  id: number;
  name: string;
  deadline?: Date;
  isDone: boolean;
  isImportant: boolean;
}

export const TODOITEMS: ITodoItem[] = [
  {
    id: 1,
    name: "Hit the gym",
    deadline: new Date(2023, 3, 1),
    isDone: false,
    isImportant: false
  },
  {
    id: 2,
    name: "Pay bills",
    isDone: true,
    isImportant: true
  },
  {
    id: 3,
    name: "Meet John",
    isDone: false,
    isImportant: false
  },
  {
    id: 4,
    name: "Buy eggs",
    deadline: new Date(2023, 2, 29),
    isDone: false,
    isImportant: true
  },
  {
    id: 5,
    name: "Read a book",
    isDone: true,
    isImportant: false
  },
  {
    id: 6,
    name: "Organize office",
    isDone: false,
    isImportant: false
  },
  {
    id: 7,
    name: "Eat dinner",
    isDone: false,
    isImportant: false
  },
  {
    id: 8,
    name: "Buy apples",
    deadline: new Date(2023, 2, 5),
    isDone: false,
    isImportant: true
  },
  {
    id: 9,
    name: "Meet George",
    isDone: false,
    isImportant: true
  },
  {
    id: 10,
    name: "Feed the cat",
    isDone: false,
    isImportant: false
  },
  {
    id: 11,
    name: "Write a letter",
    isDone: true,
    isImportant: false
  },
  {
    id: 12,
    name: "Run 1 km",
    deadline: new Date(2022, 0, 15),
    isDone: false,
    isImportant: false
  }
];