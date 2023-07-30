export function messageError(message: string) {
  return {
    response: {
      data: {
        message: message,
      },
    },
  };
}
