import CreateTaskRequest from "@/usecases/models/create-task-request";

export default class NewTask implements CreateTaskRequest {
  title: string = "";
}
