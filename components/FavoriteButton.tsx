import React , {useCallback , useMemo} from 'react'
import useCurrentUser from '@/hooks/useCurrentUser'
import useFavorites from '@/hooks/useFavorites'
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai'
import axios from 'axios'

interface FavouriteButtonProps{
    movieID: string
}


const FavoriteButton: React.FC<FavouriteButtonProps> = ({movieID}) => {
  const {mutate : mutateFavorites} = useFavorites();
  const {data: currentUser , mutate: mutateUser} = useCurrentUser();


  const isFavorite = useMemo(() => {
    const list = currentUser?.favourites || []
    return list.includes(movieID)
  },[currentUser,movieID])


  const toggleFavorites = useCallback(async() => {

    let response;

    if(isFavorite)
      response = await axios.delete('/api/favorite' , {data: {movieID}})
    else
      response = await axios.post('/api/favorite' , {movieID})
      
      
    const updatedfavoriteIds = response?.data?.favorites;
    
    mutateUser({
      ...currentUser,
      favorites: updatedfavoriteIds
    })

    mutateFavorites()

  },[isFavorite , currentUser , movieID, mutateUser , mutateFavorites])

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus

  return (
    <div onClick={toggleFavorites} className='cursor-pointer w-6 h-6 group/item lg:w-10 lg:h-10 border-2 border-white rounded-full flex 
    justify-center items-center transition duration
    hover:border-neutral-300'>
      <Icon color='white' size={30} />
    </div>
  )
}

export default FavoriteButton