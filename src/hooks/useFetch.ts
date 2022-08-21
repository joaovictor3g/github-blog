import { api } from "@/services/api";
import useSWR from "swr";

export function useFetch<T>(url: string) {
  const { data, error } = useSWR<T, Error>(url, async (url) => {
    const response = await api.get(url);

    return response.data;
  });

  return {
    data,
    error,
    loading: !data && !error,
  };
}
