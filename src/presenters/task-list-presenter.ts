import Task from "@/lib/models/task";
import TaskListItem from "@/models/task-list-item";

export default function TaskListPresenter(tasks: Task[]): TaskListItem[] {
  return tasks.map(t => ({
    // id: t.id,
    key: t.id,
    title: t.title
  }));
}
