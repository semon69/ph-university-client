import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  meta?: TMeta;
  error?: TError;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi

export type TSemesterQueryParams = {
  name: string;
  value: string;
};