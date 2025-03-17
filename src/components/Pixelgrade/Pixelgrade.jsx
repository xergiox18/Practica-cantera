import Frame from '../../assets/Frame.png'

const Pixelgrade =() => {
    return (
        <div className="grid grid-cols-2 mt-20 items-center">
            <div className='mx-auto'>
                <img src={Frame} alt="Imagen celular" className='w-[442px] h-[433px]'/>
            </div>

            <div className=''>   
                <h1 className='text-[36px] text-[#4D4D4D] font-bold mr-[240px]'>The unseen of spending three years at Pixelgrade</h1>
                <p className="text-[16px] text-[#717171] mr-[210px] mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
                    Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem 
                    sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium 
                    auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum 
                    pulvinar odio.</p>
                <a className="flex bg-[#4CAF50] w-[151px] h-[52px] rounded-lg text-white hover:bg-[#3b613c] 
                transition-all duration-300 cursor-pointer mr-10 items-center justify-center mt-6">
                Learn More
                </a>
            </div>
        </div>

    )
}

export default Pixelgrade;