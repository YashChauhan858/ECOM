// types.d.ts

declare namespace Express {
  export interface Request {
    user: string | JwtPayload | undefined;
    cachedData: any;
  }
}
