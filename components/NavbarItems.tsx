interface NavBarItemProps{
    label : string
}

const NavbarItems : React.FC<NavBarItemProps> = ({
    label
}) => {
  return (
    <div className=" text-white cursor-pointer hover:text-gray-300 trans">
        {label}
    </div>
  )
}

export default NavbarItems