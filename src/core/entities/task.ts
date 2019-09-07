export default class Task {
  id: number = 0;
  title: string = "";

  public constructor(params: Partial<Task>) {
    if (params.id) this.id = params.id;
    if (params.title) this.title = params.title;
  }
}
