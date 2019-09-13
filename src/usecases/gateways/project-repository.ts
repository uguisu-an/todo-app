import Project from "@/entities/project";

export default interface ProjectRepository {
  create(project: Project): Promise<Project>;
}
