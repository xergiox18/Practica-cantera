import LogoWhite from "../../assets/LogoWhite.png";
import instagram from "../../assets/instagram.png";
import balon from "../../assets/balon.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";

const Company = [
  {
    id: 1,
    title: "About us",
    Link: "#",
  },
  {
    id: 2,
    title: "Blog",
    Link: "#",
  },
  {
    id: 3,
    title: "Contact us",
    Link: "#",
  },
  {
    id: 4,
    title: "Pricing",
    link: "#",
  },
  {
    id: 5,
    title: "Testimonials",
    link: "#",
  },
];

const Support = [
  {
    id: 1,
    title: "Help center",
    Link: "#",
  },
  {
    id: 2,
    title: "Terms of service",
    Link: "#",
  },
  {
    id: 3,
    title: "Legal",
    Link: "#",
  },
  {
    id: 4,
    title: "Privacy policy",
    link: "#",
  },
  {
    id: 5,
    title: "Status",
    link: "#",
  },
];

const Footer = () => {
  return (
    <div className="grid grid-cols-4 bg-[#263238] pt-20 pl-[200px] text-[#F5F7FA] h-[380px]">
      <div>
        <img
          src={LogoWhite}
          alt="Logo del sitio"
          className="w-[191px] h-[30px]"
        />
        <h3 className="flex mt-8">Copyright © 2020 Nexcent ltd.</h3>
        <h3 className="flex mt-2">All rights reserved</h3>
        <div className="inline-flex gap-4 mt-10">
          <img src={instagram} alt="" />
          <img src={balon} alt="" />
          <img src={twitter} alt="" />
          <img src={youtube} alt="" />
        </div>
      </div>

      <div>
        <nav className="flex flex-col sm:space-x-10 space-x-4 items-start h-24 ml-20 pl-[120px]">
          <h1 className="text-[20px] font-bold">Company</h1>
          <div className="flex sm:space-x-10 space-x-4 pt-6">
            <ul className=" flex flex-col sm:space-y-4 space-y-2 text-[14px]">
              {Company.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.link}
                    className=" hover:text-sky-200 transition-transform
                        hover:scale-110 transform duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div>
        <nav className="flex flex-col sm:space-x-10 space-x-4 items-start h-24 ml-20">
          <h1 className="text-[20px] font-bold">Support</h1>
          <div className="flex sm:space-x-10 space-x-4 pt-6 ">
            <ul className="flex flex-col sm:space-y-4 space-y-2 text-[14px]">
              {Support.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.link}
                    className=" hover:text-sky-200 transition-transform
                        hover:scale-110 transform duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div>
        <h1 className="text-[20px] font-bold">Stay up to date</h1>
        <form className="flex flex-col items-center space-y-4 mr-38 pt-4 relative">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            className="w-[255x] h-[40px] p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#D9DBE1] bg-[#39454a]"
            required
          />
          {/* Botón con ícono dentro del formulario */}
          <button
            type="submit"
            className="bi bi-send mt-2 absolute ml-40"
          ></button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
