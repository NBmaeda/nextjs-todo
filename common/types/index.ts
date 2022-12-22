export type Todo = {
  title: string;
  id: string;
  completed: boolean;
  created_at: Date;
};
export type TodoItem = {
  title: string;
  id: string;
  completed: boolean;
  created_at?: Date;
};
