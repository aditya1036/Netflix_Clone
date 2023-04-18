import useSwr from 'swr';
import fetcher from '@/lib/fetcher';

const useMoviesList = () => {
    const {data , isLoading , error} = useSwr('/api/movies' , fetcher ,
    {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    return {data , error ,isLoading};
}

export default useMoviesList;  