
declare namespace Express {
  export interface Request {
    loggedUser: {
      id: number;
      email: string;
    }
  }
}