export interface ITodoItem {
  id: number;
  title: string;
  deadline?: Date;
  completed: boolean;
  important?: boolean;
}

export const TODOITEMS: ITodoItem[] = [
  {
    id: 1,
    title: "Hit the gym",
    deadline: new Date(2023, 3, 1),
    completed: false,
    important: false
  },
  {
    id: 2,
    title: "Pay bills",
    completed: true,
    important: true
  },
  {
    id: 3,
    title: "Meet John",
    completed: false,
    important: false
  },
  {
    id: 4,
    title: "Buy eggs",
    deadline: new Date(2023, 2, 29),
    completed: false,
    important: true
  },
  {
    id: 5,
    title: "Read a book",
    completed: true,
    important: false
  },
  {
    id: 6,
    title: "Organize office",
    completed: false,
    important: false
  },
  {
    id: 7,
    title: "Eat dinner",
    completed: false,
    important: false
  },
  {
    id: 8,
    title: "Buy apples",
    deadline: new Date(2023, 2, 5),
    completed: false,
    important: true
  },
  {
    id: 9,
    title: "Meet George",
    completed: false,
    important: true
  },
  {
    id: 10,
    title: "Feed the cat",
    completed: false,
    important: false
  },
  {
    id: 11,
    title: "Write a letter",
    completed: true,
    important: false
  },
  {
    id: 12,
    title: "Run 1 km",
    deadline: new Date(2022, 0, 15),
    completed: false,
    important: false
  }
];