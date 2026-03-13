import api from "../services/api.service";

export const teamResolver = {

  Query: {

    teams: async (_: any, __: any, { token }: any) => {

      const res = await api.get("/teams", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return res.data;

    }

  },

  Mutation: {

    createTeam: async (_: any, { input }: any, { token }: any) => {

      const res = await api.post("/teams", input, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return res.data;

    }

  }

};