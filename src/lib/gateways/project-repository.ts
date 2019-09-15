import Project from "@/lib/entities/project";

export default interface ProjectRepository {
  getById(id: number): Promise<Project>;
  create(project: Project): Promise<Project>;
}
