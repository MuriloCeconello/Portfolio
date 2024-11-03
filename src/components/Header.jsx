function Header() {
    return (
        <header className="bg-lightmode-background-default dark:bg-darkmode-background-default flex justify-between items-center p-10 fixed w-screen max-md:justify-center">
            <div className="flex font-Salsa items-center fixed text-center">
                <h1 className="text-lightmode-font-color dark:text-black font-bold text-3xl"><a href="#">MURILO</a></h1>
                <h1 className="text-white font-bold text-3xl dark:text-darkmode-font-color"><a href="#">CECONELLO</a></h1>
            </div>
            <nav className="font-Poppins fixed right-20 items-center max-md:hidden">
                <ul className="flex text-lightmode-font-color dark:text-darkmode-font-color font-normal">
                    <li className=" transition duration-300 hover:scale-110"><a href="#sobre" className="ml-10 text-base">Sobre</a></li>
                    <li className=" transition duration-300 hover:scale-110"><a href="#projetos" className="ml-10 text-base">Projetos</a></li>
                    <li className=" transition duration-300 hover:scale-110"><a href="#certificados" className="ml-10 text-base">Certificados</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;