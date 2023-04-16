
interface MobileMenuProps {
    visible: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ( { visible}) => {
  

    if(!visible)
        return null

    return (
   <div className="bg-black w-56 absolute top-8 left-0  py-5 flex-col border-2 flex border-gray-800">
    <div className=" flex flex-col gap-4">
         
         <div className="px-3 hover:underline text-white text-center">
            Home
         </div>
         <div className="px-3 hover:underline text-white text-center">
            Series
         </div>
         <div className="px-3 hover:underline text-white text-center">
            Films
         </div>
         <div className="px-3 hover:underline text-white text-center">
            New & Popular
         </div>
         <div className="px-3 hover:underline text-white text-center">
            My List
         </div>
         <div className="px-3 hover:underline text-white text-center">
            Browsr by languages         
            </div>
    </div>
   </div>
  )
}

export default MobileMenu