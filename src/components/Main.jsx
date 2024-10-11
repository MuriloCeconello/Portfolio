function Main() {
    return (
        <main>
            <section className="flex justify-around items-center bg-lightmode-background-color-2 dark:bg-darkmode-background-color-2 w-full h-screen p-10">
                <div className="text-justify w-4/12">
                    <h1 className="text-center font-Chakra font-bold text-5xl text-lightmode-font-color dark:text-darkmode-font-color">Olá! Me chamo Murilo </h1>
                    <h2 className="font-Poppins text-lightmode-font-color dark:text-darkmode-font-color text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam porro laudantium maxime eius. Ipsum nostrum voluptatum libero, quo accusantium eaque illum amet, illo quos enim aliquid quam. Vero, in tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem mollitia fuga excepturi numquam earum. Mollitia laudantium maxime cupiditate temporibus voluptatum architecto, vero veniam quam magni eius tenetur provident iure?</h2>
                </div>
                <img className="w-4/12" src="images/dev.png" alt="Developer" />
            </section>
            <section id="sobre" className="bg-lightmode-background-default dark:bg-darkmode-background-default w-full p-10">
                <h1 className="text-center text-4xl font-Chakra font-bold text-lightmode-font-color dark:text-darkmode-font-color pt-10">Sobre</h1>
                <div className="flex justify-around my-14">
                    <div className="text-justify w-3/12">
                        <h1 className="text-center text-2xl font-Chakra font-semibold text-lightmode-font-color dark:text-darkmode-font-color">Sobre:</h1>
                        <h2 className="text-base font-Poppins text-lightmode-font-color dark:text-darkmode-font-color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsum provident, unde esse reiciendis repellat tempora minus laudantium quod eos libero, molestias ad, facere quisquam enim quibusdam beatae magni id? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta culpa molestiae blanditiis, suscipit sapiente dolorum numquam ipsa officia, nostrum fugiat alias, maxime molestias debitis praesentium. Laboriosam adipisci aliquam consequatur doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo asperiores vitae, consectetur nesciunt libero laudantium dolore saepe distinctio ab numquam molestias eligendi placeat amet, quos alias consequatur voluptate nostrum.</h2>
                    </div>
                    <div>
                        <h1 className="text-2xl text-center font-Chakra font-semibold text-lightmode-font-color dark:text-darkmode-font-color mb-5">Hard Skills:</h1>
                        <div className="flex justify-around gap-10">
                            <div className="bg-lightmode-card-color dark:bg-darkmode-card-color hover:bg-default-white dark:hover:bg-default-grey hover:scale-105 hover:shadow-xl p-2 rounded-md transition duration-300">
                                <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="HTML5 logo" />
                            </div>
                            <div className="bg-lightmode-card-color dark:bg-darkmode-card-color hover:bg-default-white dark:hover:bg-default-grey hover:scale-105 hover:shadow-xl p-2 rounded-md transition duration-300">
                                <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt="CSS3 logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projetos" className="w-full p-10 bg-default-white">
                <h1 className="font-Chakra text-center font-bold text-4xl text-lightmode-font-color dark:text-default-black pt-10">Projetos</h1>
                <div>
                    <div className="flex flex-wrap justify-around mt-10">
                        <div className="bg-lightmode-card-color  dark:bg-darkmode-card-color w-72 h-56 rounded-xl"></div>
                        <div className="bg-lightmode-card-color  dark:bg-darkmode-card-color w-72 h-56 rounded-xl"></div>
                        <div className="bg-lightmode-card-color  dark:bg-darkmode-card-color w-72 h-56 rounded-xl"></div>
                    </div>
                    <div className="flex flex-wrap justify-around mt-10">
                        <div className="bg-lightmode-card-color  dark:bg-darkmode-card-color w-72 h-56 rounded-xl"></div>
                        <div className="bg-lightmode-card-color  dark:bg-darkmode-card-color w-72 h-56 rounded-xl"></div>
                        <div className="bg-lightmode-card-color  dark:bg-darkmode-card-color w-72 h-56 rounded-xl"></div>
                    </div>
                </div>
            </section>
            <section id="certificados" className="bg-lightmode-background-default dark:bg-darkmode-background-default w-full p-20">
                <h1 className="text-center text-lightmode-font-color dark:text-darkmode-font-color font-Chakra text-4xl font-bold">Certificados</h1>
                <div className="flex flex-warp justify-around mt-10">
                    <div className="bg-lightmode-card-color  dark:bg-darkmode-card-color w-72 h-48 rounded-xl"></div>
                    <div className="bg-lightmode-card-color  dark:bg-darkmode-card-color w-72 h-48 rounded-xl"></div>
                    <div className="bg-lightmode-card-color  dark:bg-darkmode-card-color w-72 h-48 rounded-xl"></div>
                    <div className="bg-lightmode-card-color  dark:bg-darkmode-card-color w-72 h-48 rounded-xl"></div>
                    <div className="bg-lightmode-card-color  dark:bg-darkmode-card-color w-72 h-48 rounded-xl"></div>
                </div>
            </section>
        </main>
    )
}
export default Main;