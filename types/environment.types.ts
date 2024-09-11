export interface IEnvironment {
  port: number | string;
  env: string;
  jwtSecret?: string;
}
