import Project from "@/lib/entities/project";

export default interface ProjectRepository {
  create(project: Project): Promise<Project>;
}
