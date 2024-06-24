import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Dish {
  id: number;
  name: string;
  price: number;
  image: string;
  groupId: number;
}

export interface CreateDishDto {
  name: string;
  price: number;
  image: string;
  groupId: number;
}

export const dishApi = createApi({
  reducerPath: 'dishApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getDishes: builder.query<Dish[], void>({
      query: () => '/dishes',
    }),
    createDish: builder.mutation<Dish, CreateDishDto>({
      query: (newDish) => ({
        url: '/dishes',
        method: 'POST',
        body: newDish,
      }),
    }),
  }),
});

export const { useGetDishesQuery, useCreateDishMutation } = dishApi;
