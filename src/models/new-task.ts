import { CreateTaskRequest } from "@/lib/usecases/create-task";

export default class NewTask implements CreateTaskRequest {
  title: string = "";
}
