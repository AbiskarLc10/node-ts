export type CustomErrorContent = {
  message: string;
  details?: string;
  code: number;
};

export class ExpressError extends Error {
  code: number;
  details?: string;

  constructor(message: string, code: number, details?: string) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.details = details;
  }
}
