import Logo from "../../assets/Logo.png"

const navbarlinks = [
  {
    id: 1,
    title: "Home",
    Link: "/",
  },
  {
    id: 2,
    title: "Service",
    Link: "#",
  },
  {
    id: 3,
    title: "Feature",
    Link: "#",
  },
  {
    id: 4,
    title: "Product",
    link: "#",
  },
  {
    id: 5,
    title: "Testimonial",
    link: "#",
  },
  {
    id: 6,
    title: "FAQ",
    link: "#",
  },
];

const Navbar = () => {


  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-300 backdrop-blur-md z-50  bg-[#F5F7FA]">
      <div className="flex justify-between items-center h-24 ml-20 " >
        <div>
          <img src={Logo} alt="Logo del sitio" className="w-[154px] h-[24px]"/>
        </div>


        <div>
          <ul className="flex sm:space-x-10 space-x-4">
            {navbarlinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="sm:text-lg text-sm hover:text-sky-200 transition-transform
                        hover:scale-110 transform inline-block duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-4 px-4 py-2 justify-center">
          <a className="flex items-center cursor-pointer hover:text-black text-[#4CAF50]" >
            Login
          </a>
          <a className="flex bg-[#4CAF50] w-[91px] h-[40px] rounded-lg text-white hover:bg-[#3b613c] 
            transition-all duration-300 cursor-pointer mr-10 items-center justify-center" >
            Sign up
          </a>
        </div>
      </div>

        {/* Menú desplegable */}

      {/* <div
        className={`md:hidden absolute w-full bg-purple-950 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <ul className="flex flex-col px-4 py-2">
          {navbarlinks.map((link) => (
            <li key={link.id} className="py-2 text-center">
              <a
                className="text-white hover:text-sky-200"
                href={link.link}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

      </div> */}
    </nav>
  );
};

export default Navbar;
