import Pana from '../../assets/pana.png'

const Design =() => {
    return (
        <div className="grid grid-cols-2 mt-20 items-center">
            <div className='mx-auto'>
                <img src={Pana} alt="Imagen celular" className='w-[442px] h-[433px]'/>
            </div>

            <div className=''>   
                <h1 className='text-[36px] text-[#4D4D4D] font-bold mr-[240px]'>How to design your site footer like we did</h1>
                <p className="text-[16px] text-[#717171] mr-[200px] mt-3">
                    Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc 
                    varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse 
                    platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies,
                     non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, 
                     finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <a className="flex bg-[#4CAF50] w-[151px] h-[52px] rounded-lg text-white hover:bg-[#3b613c] 
                transition-all duration-300 cursor-pointer mr-10 items-center justify-center mt-6">
                Learn More
                </a>
            </div>
        </div>

    )
}

export default Design;