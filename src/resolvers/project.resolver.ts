import api from "../services/api.service";

export const projectResolver = {

  Query: {

    projects: async (_: any, { teamId }: any, { token }: any) => {

      const res = await api.get(`/projects/${teamId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return res.data;

    }

  },

  Mutation: {

    createProject: async (_: any, { input }: any, { token }: any) => {

      const res = await api.post("/projects", input, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return res.data;

    }

  }

};