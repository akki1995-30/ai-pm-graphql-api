import api from "../services/api.service";

export const taskResolver = {

  Query: {

    tasks: async (_: any, { projectId }: any, { token }: any) => {

      const res = await api.get(`/tasks/${projectId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return res.data;

    }

  },

  Mutation: {

    createTask: async (_: any, { input }: any, { token }: any) => {

      const res = await api.post("/tasks", input, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return res.data;

    },

    updateTask: async (_: any, { taskId, input }: any, { token }: any) => {

      const res = await api.patch(`/tasks/${taskId}`, input, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return res.data;

    },

    deleteTask: async (_: any, { taskId }: any, { token }: any) => {

      await api.delete(`/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return true;

    }

  }

};