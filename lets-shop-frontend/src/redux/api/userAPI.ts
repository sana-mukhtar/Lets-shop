import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { server } from "../store";
import { MessageResponse, UserResponse } from "../../types/api-types";
import { User } from "../../types/types";
import axios from "axios";

export const userAPI = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api/v1/user/`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<MessageResponse, User>({
      query: (user) => ({
        url: "new",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const getUser = async (id: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const { data }: { data: UserResponse } = await axios.get(
      `http://localhost:3000/api/v1/user/${id}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const { useLoginMutation } = userAPI;
