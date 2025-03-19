export type User = {
  id: string;
  name: string;
  avatar: string;
};

export type Task = {
  id: string;
  title: string;
  summary: string;
  userId: string;
  dueDate: string;
};
