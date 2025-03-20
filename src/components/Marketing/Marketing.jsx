import streamLined from "../../assets/streamlined.png";
import safeGuarding from "../../assets/safeguarding.png";
import membership from "../../assets/membership.png";

const Marketing = () => {
  return (
    <div className="w-full items-center mt-[50px] h-[580px]">
      <div classname="leading-tight">
        <h1 className=" text-center text-[36px] font-bold text-[#4D4D4D]">
          Caring is the new marketing
        </h1>

        <h2 className="text-4 text-[#717171] text-center flex w-[600px] ml-[550px]">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot'
          more.​
        </h2>
      </div>

      <div className="grid grid-cols-3 justify-center ml-[200px] mr-[200px] mt-[50px] ">
        <div className="text-center relative ">
          <div>
            <img src={streamLined} alt="Icono personas" className="mx-auto" />
          </div>
          <div className=" flex w-[317px] h-[176px] bg-[#F5F7FA] absolute flex-col top-[50%] left-[14%] justify-center rounded">
            <p className="text-[20px] text-[#717171] ml-2 mr-2">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <a className="flex items-center cursor-pointer hover:text-black text-[#4CAF50] text-[20px] ml-[100px] pt-[10px]">
              Read More →
            </a>
          </div>
        </div>

        <div className="text-center relative">
          <div>
            <img src={safeGuarding} alt="Icono Edificio" className="mx-auto" />
          </div>
          <div className=" flex w-[317px] h-[176px] bg-[#F5F7FA] absolute flex-col top-[50%] left-[14%] justify-center rounded">
            <p className="text-[20px] text-[#717171]  ml-4 mr-4">
              What are your safeguarding responsibilities and how can you manage
              them?
            </p>
            <a className="flex items-center cursor-pointer hover:text-black text-[#4CAF50] text-[20px] ml-[100px] pt-[10px]">
              Read More →
            </a>
          </div>
        </div>

        <div className="text-center relative">
          <div>
            <img src={membership} alt="Icono Manos" className="mx-auto" />
          </div>
          <div className=" flex w-[317px] h-[176px] bg-[#F5F7FA] absolute flex-col top-[50%] left-[14%] justify-center rounded">
            <p className="text-[20px] text-[#717171] ml-8 mr-8">
              Revamping the Membership Model with Triathlon Australia
            </p>
            <a className="flex items-center cursor-pointer hover:text-black text-[#4CAF50] text-[20px] ml-[100px] pt-[10px]">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
