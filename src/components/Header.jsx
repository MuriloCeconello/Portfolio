function Header() {
    return (
        <header className="bg-lightmode-background-default dark:bg-darkmode-background-default flex justify-between items-center p-10 fixed w-screen max-md:justify-center">
            <div className="flex font-Salsa items-center fixed text-center">
                <h1 className="text-lightmode-font-color dark:text-default-black font-bold text-3xl"><a href="#">MURILO</a></h1>
                <h1 className="text-default-white font-bold text-3xl dark:text-darkmode-font-color"><a href="#">CECONELLO</a></h1>
            </div>
            <nav className="font-Poppins fixed right-20 items-center max-md:hidden">
                <ul className="flex text-lightmode-font-color dark:text-darkmode-font-color font-normal">
                    <li><a href="#sobre" className="ml-10 text-lg transition duration-500">Sobre</a></li>
                    <li><a href="#projetos" className="ml-10 text-lg transition duration-500">Projetos</a></li>
                    <li><a href="#certificados" className="ml-10 text-lg transition duration-500">Certificados</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;