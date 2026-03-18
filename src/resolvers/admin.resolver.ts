import api from "../services/api.service";

export const adminResolver = {

  Query: {

    /**
     * GET /admin/users  — list all users (ADMIN only)
     */
    users: async (_: any, __: any, { token }: any) => {
      const res = await api.get("/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },

  },

  Mutation: {

    /**
     * PATCH /admin/users/:userId/role  — assign global role (ADMIN only)
     */
    assignRole: async (_: any, { userId, role }: any, { token }: any) => {
      const res = await api.patch(
        `/admin/users/${userId}/role`,
        { role },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.user;
    },

    /**
     * PATCH /admin/users/:userId/status  — activate / deactivate (ADMIN only)
     */
    setUserStatus: async (_: any, { userId, status }: any, { token }: any) => {
      const res = await api.patch(
        `/admin/users/${userId}/status`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data.user;
    },

  },

};
