import Dot from "../../assets/Dot.png";
import Illustration from "../../assets/Illustration.png";

const Lessons = () => {
  return (
    <div className="w-full flex pl-46 bg-[#F5F7FA] h-160">
      <div className="grid grid-cols-2 bg-cover items-center ">
        <div>
          <h1 className="text-[#4D4D4D] text-[64px] font-bold text-left w-full leading-tight">
            Lessons and insights
            <br /> <span className="text-[#4CAF4F]">from 8 years</span>{" "}
          </h1>
          <div className="grid grid-cols-2">
            <div className="w-[500px] mb-2">
              <h2 className="text-[#717171] text-4 ">
                Where to grow your business as a photographer: site or social
                media?
              </h2>
            </div>
            <div>
              <img
                src={Dot}
                alt="puntos suspensivos"
                className=" mt-2 ml-[200px]"
              />
            </div>
          </div>
          <a
            className="flex bg-[#4CAF50] w-[128px] h-[52px] rounded-lg text-white hover:bg-[#3b613c] 
                transition-all duration-300 cursor-pointer mr-10 items-center justify-center mt-4"
          >
            Register
          </a>
        </div>

        <div>
          <img
            src={Illustration}
            alt="Ilustración pc"
            className="flex pl-[120px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Lessons;
