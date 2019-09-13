import Task from "@/usecases/models/task";
import TaskListItem from "@/models/task-list-item";

export default function TaskListPresenter(tasks: Task[]): TaskListItem[] {
  return tasks.map(t => ({
    key: t.id,
    title: t.title
  }));
}
