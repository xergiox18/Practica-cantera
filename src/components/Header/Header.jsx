import clientLogos from "../../assets/Clients-Logos.png"

const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-opacity-300 backdrop-blur-md z-50 mt-20 pt-2 bg-white">
            <h1 className="flex justify-center text-3xl font-bold text-[#4D4D4D]" >OUR CLIENTS</h1>
            <h2 className="flex justify-center text-base text-[#717171] leading-6 mt-1" >We have been working with some Fortune 500+ clients</h2>
            <img src={clientLogos} alt="Nuestros clientes" className="mx-auto mt-5"/>
        </div>

    );
};

export default Header;