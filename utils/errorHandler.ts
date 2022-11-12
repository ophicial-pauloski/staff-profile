interface Error {
  status?: number;
  message?: string;
}
export const createError = (status: number, message: string) => {
  const error = new Error() as Error;
  error.status = status;
  error.message = message;
  return error;
};
