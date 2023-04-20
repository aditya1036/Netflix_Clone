import fetcher from '@/lib/fetcher';
import useSwr from 'swr';

const useMovie = (id ?: string) => {

    const {data , isLoading , error , mutate} = useSwr( id ? `/api/movies/${id}` : null , fetcher , {
        revalidateOnFocus: false,
        revalidateIfStale:false,
        revalidateOnReconnect:false
    })


    return{
        data , 
        isLoading,
        error,
        mutate
    }
}

export default useMovie;
