import CreateTaskRequest from "@/lib/models/create-task-request";

export default class NewTask implements CreateTaskRequest {
  title: string = "";
}
