import ImageT from "../../assets/image-t.png";
import customers from "../../assets/customers.png";

const Customers = () => {
  return (
    <div className="grid grid-cols-3 mt-20 items-center bg-[#F5F7FA] pt-16 pl-[180px] gap-[50px]">
      <div className="mx-auto">
        <img
          src={ImageT}
          alt="Imagen celular flex mr-[100px]"
          className="w-[326px] h-[326px]"
        />
      </div>

      <div className="grid col-span-2">
        <p className="text-[18px] text-[#717171] mr-[200px] mt-3 ">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>

        <h2 className="text-[#4CAF4F] text-[20px] pt-3">Tim Smith</h2>
        <h3 className="text-[#89939E] text-[18px] pt-3">
          British Dragon Boat Racing Association
        </h3>
        <div className="grid grid-cols-2 pt-4">
          <div>
            <img src={customers} alt="" className="w-[493px] h-[48px]" />
          </div>
          <div className="pb-[50px]">
            <a className="flex items-center cursor-pointer hover:text-black text-[#4CAF50] text-[20px] ml-[30px] pt-[10px]">
              Meet all customers →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
