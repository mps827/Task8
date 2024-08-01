import authRepository from "./repositories/authRepository";
import advertisementRepository from "./repositories/advertisementRepository";
interface repositoriesTypeMap {
  auth: any;
  advertisement: any;
}
export type repositoriesType = repositoriesTypeMap[keyof repositoriesTypeMap];
const repositories: repositoriesType = {
  auth: authRepository,
  advertisement: advertisementRepository,
};

export const RepoFactory: repositoriesType = {
  get: (name: string) => repositories[name],
};
