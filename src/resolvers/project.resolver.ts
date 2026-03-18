import api from "../services/api.service";

export const projectResolver = {

  Query: {

    projects: async (_: any, { teamId }: any, { token }: any) => {
      const res = await api.get(`/projects/${teamId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return res.data;
    },

    project: async (_: any, { projectId }: any, { token }: any) => {
      const res = await api.get(`/projects/one/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return res.data;
    },

    teamMembers: async (_: any, { teamId }: any, { token }: any) => {
      const res = await api.get(`/teams/${teamId}/members`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return res.data;
    }

  },

  Mutation: {

    createProject: async (_: any, { input }: any, { token }: any) => {
      const res = await api.post("/projects", input, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return res.data;
    }

  }

};