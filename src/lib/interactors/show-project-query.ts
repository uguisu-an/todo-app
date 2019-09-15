import ShowProjectInteractor, {
  ShowProjectRequest,
  ShowProjectResponse
} from "../usecases/show-project";
import ProjectRepository from "../gateways/project-repository";
import TaskRepository from "../gateways/task-repository";

export default class ShowProjectQuery implements ShowProjectInteractor {
  public constructor(
    private projects: ProjectRepository,
    private tasks: TaskRepository
  ) {}

  public async handle(req: ShowProjectRequest): Promise<ShowProjectResponse> {
    const p = await this.projects.getById(req.id);
    if (!p) {
      throw new Error("Project is not found");
    }
    const tasks = await this.tasks.getByProjectId(req.id);
    return {
      id: p.id!,
      name: p.name,
      tasks: tasks.map(t => ({
        id: t.id!,
        title: t.title
      }))
    };
  }
}
