import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { ReactQueryConstants } from "../enum/ReactQueryConstants";
import { ICompanyData } from "../models/companyLayoffModel";
import { getLayoffData } from "../utils/apiUtils";

export type GetLayoffDataQueryKey = [ReactQueryConstants.GetLayoffData];

export function useGetLayoffData(
  options?: UseQueryOptions<
    ICompanyData[],
    Error,
    ICompanyData[],
    GetLayoffDataQueryKey
  >
): UseQueryResult<ICompanyData[], Error> {
  return useQuery(
    [ReactQueryConstants.GetLayoffData],
    () => getLayoffData(),
    options
  );
}
