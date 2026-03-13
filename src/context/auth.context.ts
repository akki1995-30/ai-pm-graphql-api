export const context = async ({ req }: any) => {

  const authHeader = req.headers.authorization || "";

  let token: string | null = null;

  if (authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }

  return {
    token
  };

};