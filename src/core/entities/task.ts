export default class Task {
  id?: number;
  title: string = "";

  public constructor(params: Partial<Task>) {
    if (params.id) this.id = params.id;
    if (params.title) this.title = params.title;
  }
}
