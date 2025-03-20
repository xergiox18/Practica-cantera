import Frame from "../../assets/Frame.png";

const FooterDemo = () => {
  return (
    <div className="bg-[#F5F7FA] pr-[400px] pl-[400px] h-[300px]">
      <h1 className="flex text-center text-[64px] text-[#4D4D4D] font-bold ">
        Pellentesque suscipit fringilla libero eu.{" "}
      </h1>
      <a
        className="flex bg-[#4CAF50] w-[178px] h-[52px] rounded-lg text-white hover:bg-[#3b613c] 
                transition-all duration-300 cursor-pointer ml-[350px] items-center justify-center mt-6"
      >
        Get a Demo →
      </a>
    </div>
  );
};

export default FooterDemo;
