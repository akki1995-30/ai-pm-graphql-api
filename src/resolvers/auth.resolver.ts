import api from "../services/api.service";

export const authResolver = {

  Query: {

    me: async (_: any, __: any, { token }: any) => {

      const res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return res.data;

    }

  },

  Mutation: {

    register: async (_: any, { input }: any) => {
          console.log("input", input);
      const res = await api.post("/auth/register", input);

      return res.data;

    },

    login: async (_: any, { input }: any) => {

      const res = await api.post("/auth/login", input);

      return res.data;

    }

  }

};