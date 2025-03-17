import iconPeople from '../../assets/Icon.png'
import iconBuilding from '../../assets/Icon-2.png'
import iconHands from '../../assets/Icon-3.png'

const Community = () => {
    return (
        <div className='w-fullitems-center mt-[50px] ' >
            <div classname="leading-tight" >
                <h1 className=' text-center text-[36px] font-bold text-[#4D4D4D]'>Manage your entire community <br/> in a single system</h1>
                
                <h2 className='text-4 text-[#717171] text-center '>who is Nextcent suitable for</h2>
            </div>

            <div className="grid grid-cols-3 justify-center ml-[150px] mr-[150px] gap-[250px] mt-[50px] ">
                <div className="text-center">
                    <img src={iconPeople} alt="Icono personas" className="mx-auto"/>
                    <h1 className="text-center text-[28px] font-bold text-[#4D4D4D] pt-2">Membership Organizations</h1>
                    <p className="text-[16px] text-[#717171] pt-1">Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div className="text-center">
                <img src={iconBuilding} alt="Icono Edificio" className="mx-auto"/>
                <h1 className="text-center text-[28px] font-bold text-[#4D4D4D] pt-2">National Associations</h1>
                <p className="text-[16px] text-[#717171] pt-1">Our membership management software provides full automation of membership renewals and payments</p>
                </div>

                <div className="text-center">
                    <img src={iconHands} alt="Icono Manos" className="mx-auto"/>
                    <h1 className="text-center text-[28px] font-bold text-[#4D4D4D] pt-2">Clubs and <br/> groups</h1>
                    <p className="text-[16px] text-[#717171] pt-1">Our membership management software provides full automation of membership renewals and payments</p>
                </div>

            </div>
        </div>
    )

}

export default Community;