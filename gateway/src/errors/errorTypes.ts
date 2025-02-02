export type CustomErrorContent = {
    message: string;
    details?: string;
    statusCode: number;
  };
  
  export class ExpressError extends Error {
    statusCode: number;
    details?: string;
  
    constructor(
      message: string, 
      statusCode: number, 
      details?: string
    ) {
      super(message);
      this.name = this.constructor.name; 
      this.statusCode = statusCode;
      this.details = details;
  
    }
  }
  