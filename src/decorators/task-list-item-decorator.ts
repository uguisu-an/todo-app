import TaskListItem from "@/models/task-list-item";

export default function TaskListItemDecorator(task: Task): TaskListItem {
  return {
    key: task.id,
    title: task.title
  };
}

interface Task {
  id: number;
  title: string;
}
