import IconMembers from '../../assets/Icon-4.png';
import IconHand from '../../assets/Icon-5.png';
import IconEvent from '../../assets/Icon-6.png';
import IconPayments from '../../assets/Icon-7.png';


const DataReport = () => {
    return (
        <div className="grid grid-cols-2 bg-[#F5F7FA] text-left mt-[50px] w-full h-70">
            <div className='pt-14 font-bold text-[36px] ml-[220px]'>
                <h1 className='text-[#4D4D4D] leading-tight'>
                    Helping a local <br/><span className='text-[#4CAF4F]'> business reinvent itself </span>
                </h1>
                <h2 className="text-[#18191F] text-[16px]">
                    We reached here with our hard work and dedication
                </h2>
            </div>

            <div className="grid grid-cols-4 mt-[50px] mr-[200px] gap-5 ">

                <div className='ml-[100px] w-[48px] h-[48px]'>
                        <img src={IconMembers} alt="" className='mt-2' />
                        <img src={IconEvent} alt="" className='mt-[60px] ' />
                </div>
            
                <div className=''>
                    <h1 className='text-[#4D4D4D] text-[28px] font-bold'>2,245,341</h1>
                    <h2 className='text-[#717171] text-[16px]'>Members</h2>  
                    <h1 className='text-[#4D4D4D] text-[28px] font-bold mt-[40px]'>828,867</h1>
                    <h2 className='text-[#717171] text-[16px]'>Event Bookings</h2>    
                </div>


                <div className='ml-[100px] w-[48px] h-[48px] '>
                    <img src={IconHand} alt="" className='ml-[10px] mt-[20px]'/>
                    <img src={IconPayments} alt="" className="mt-[66px]"/>
                </div>

                <div className=''>
                        
                    <h1 className='text-[#4D4D4D] text-[28px] font-bold'>46,328</h1>
                    <h2 className='text-[#717171] text-[16px]'>Event Bookings</h2>
                    <h1 className='text-[#4D4D4D] text-[28px] font-bold mt-[40px]'>1,926,436</h1>
                    <h2 className='text-[#717171] text-[16px]'>Event Bookings</h2>
                </div>

            </div>

        </div>
    )
}

export default DataReport;