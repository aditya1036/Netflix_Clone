import fetcher from '@/lib/fetcher';
import useSwr from 'swr';

const useFavorites = () => {

    const {data , isLoading , error , mutate} = useSwr('/api/favorites' , fetcher , {
        revalidateOnFocus: false,
        revalidateIfStale: false,
        revalidateOnReconnect: false
    })
    
    return {
        data , isLoading , error , mutate
    }
}

export default useFavorites;