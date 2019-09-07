import { CreateTaskResponse, CreateTaskRequest } from "./create-task";
import Task from "../entities/task";

export default function createTask(req: CreateTaskRequest): CreateTaskResponse {
  const task = new Task({
    id: 1,
    title: req.title
  });
  return {
    task
  };
}
