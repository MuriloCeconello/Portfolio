function Header() {
    return (
        <header className="bg-color1 flex justify-between items-center p-10 fixed w-screen">
            <div className="flex font-Salsa items-center fixed">
                <h1 className="text-black font-bold text-3xl"><a href="#">MURILO</a></h1>
                <h1 className="text-font-color-dark font-bold text-3xl"><a href="#">CECONELLO</a></h1>
            </div>
            <nav className="font-Poppins flex fixed right-20 items-center">
                <ul className="flex text-font-color-dark font-normal">
                    <li><a href="#sobre" className="ml-16 text-lg hover:text-neutral-300 transition duration-500">Sobre</a></li>
                    <li><a href="#projetos" className="ml-16 text-lg hover:text-neutral-300 transition duration-500">Projetos</a></li>
                    <li><a href="#certificados" className="ml-16 text-lg hover:text-neutral-300 transition duration-500">Certificados</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;