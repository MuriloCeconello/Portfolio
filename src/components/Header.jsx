function Header() {
    return (
        <header className="bg-color1 flex justify-between items-center p-5">
            <div className="flex font-Salsa">
                <h1 className="text-black font-bold text-3xl"><a href="#">MURILO</a></h1>
                <h1 className="text-white font-bold text-3xl"><a href="#">CECONELLO</a></h1>
            </div>
            <nav className="font-Poppins flex absolute right-20">
                <ul className="flex text-white font-normal">
                    <li><a href="#" className="ml-16 text-lg hover:text-neutral-300 transition duration-500">Sobre</a></li>
                    <li><a href="#" className="ml-16 text-lg hover:text-neutral-300 transition duration-500">Projetos</a></li>
                    <li><a href="#" className="ml-16 text-lg hover:text-neutral-300 transition duration-500">Certificados</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;