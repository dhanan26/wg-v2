import { useQuery, useMutation, useQueryClient } from 'react-query';

export function useRequestProcessor() {
    const queryClient = useQueryClient();

    function customUseQuery(key, queryFunction, options = {}) {
        return useQuery({
            queryKey: key,
            queryFn: queryFunction,
            ...options,
        });
    }

    function customUseMutate(key, mutationFunction, options = {}) {
        return useMutation({
            mutationKey: key,
            mutationFn: mutationFunction,
            onSettled: () => queryClient.invalidateQueries(key),
            ...options,
        });
    }

    return { customUseQuery, customUseMutate };
}