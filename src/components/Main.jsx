import HardSkills from "./HardSkills";
import MyProjects from "./MyProjects";
import MyCertificates from "./MyCertificates";

function Main() {
    return (
        <main>
            <section className="flex justify-around items-center bg-lightmode-background-color-2 dark:bg-darkmode-background-color-2 w-full h-screen p-10">
                <div className="text-justify w-4/12 max-lg:w-screen max-xl:w-7/12">
                    <h1 className="text-center font-Chakra font-bold text-5xl text-lightmode-font-color dark:text-darkmode-font-color max-sm:text-4xl">Olá! Me chamo Murilo </h1>
                    <h2 className="font-Poppins text-lightmode-font-color dark:text-darkmode-font-color text-xl max-xl:text-lg">Tenho 18 anos e iniciei minha trajetória no desenvolvimento aos 16. Atualmente, atuo como desenvolvedor front-end, mas pretendo me tornar um desenvolvedor full-stack. Meus hobbies incluem programar, ouvir música, jogar videogame e, ocasionalmente, cozinhar. Além disso, tenho o desejo de conhecer diversos países e aprender vários idiomas.</h2>
                </div>
                <img className="w-4/12 max-xl:hidden" src="images/dev.png" alt="Developer" />
            </section>
            <section id="sobre" className="bg-lightmode-background-default dark:bg-darkmode-background-default w-full p-10">
                <h1 className="text-center text-4xl font-Chakra font-bold text-lightmode-font-color dark:text-darkmode-font-color pt-10 max-lg:pt-1">Sobre</h1>
                <div className="flex justify-around mt-14 max-lg:flex-col gap-16">
                    <div className="text-justify w-3/12 max-lg:w-full lg:w-6/12">
                        <h1 className="text-center text-2xl font-Chakra font-semibold text-lightmode-font-color dark:text-darkmode-font-color">Sobre:</h1>
                        <h2 className="text-base font-Poppins text-lightmode-font-color dark:text-darkmode-font-color text-justify">
                            <p className="indent-5">Meu primeiro contato com o desenvolvimento web ocorreu em um curso de Análise e Desenvolvimento de Sistemas, realizado na escola SENAI “Álvares Romi”, no ano de 2022, com término em julho de 2023. Inicialmente, não sabia se continuaria na área de tecnologia e, por isso, passei um ano sem ter contato com códigos ou programação. Ao final desse período, decidi seguir essa profissão.</p>
                            <p className="indent-5">Realizei o curso de HTML5 e CSS3 do <a href="https://www.cursoemvideo.com/" className="text-lightmode-font-color dark:text-darkmode-background-color-2 font-extrabold hover:underline" target="_blank">CursoemVideo</a>, seguido pelo curso de JavaScript. Devido à falta de conhecimento neste último, optei por realizar um curso na escola SENAI, onde estou atualmente matriculado.</p>
                            <p className="indent-5">Para o futuro, pretendo me tornar desenvolvedor full-stack com foco em front-end. Tenho a intenção de aprimorar meus conhecimentos em React.js e Tailwind CSS, além de aprender e me especializar em Angular, Vue, Python, PHP, entre outras tecnologias. Acredito que conhecimento nunca é demais.</p></h2>
                    </div>
                    <div>
                        <h1 className="text-2xl text-center font-Chakra font-semibold text-lightmode-font-color dark:text-darkmode-font-color mb-5">Hard Skills:</h1>
                        <div className="flex flex-col justify-around gap-10 max-lg:items-center max-lg:flex-wrap">
                            <div className="flex gap-x-10">
                                <HardSkills img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"} name="HTML5" />
                                <HardSkills img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"} name="CSS3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projetos" className="w-full p-10 bg-default-white">
                <h1 className="font-Chakra text-center font-bold text-4xl text-lightmode-font-color dark:text-default-black pt-10
                mb-10">Projetos</h1>
                <div className="flex justify-center">
                    <div className="flex flex-wrap justify-around gap-y-10 xl:w-10/12 2xl:w-8/12 min-[1230px]:w-10/12 max-[1400px]:w-10/12 min-[1463px]:w-8/12 min-[1809px]:w-7/12">
                        <div className="bg-lightmode-card-color  dark:bg-darkmode-card-color w-72 h-56 rounded-xl hover:bg-opacity-70 transition ease duration-500 max-lg:hidden">
                            <div className="flex flex-col items-center justify-center group/card visible group-hover/card:visible h-full font-Poppins gap-y-7">
                                <div className="flex flex-col items-center text-lightmode-font-color dark:text-darkmode-background-color-2">
                                    <h3 className="invisible group-hover/card:visible text-lg">Nome do Projeto</h3>
                                    <p className="text-justify invisible group-hover/card:visible">Descrição</p>
                                </div>
                                <a className="invisible group-hover/card:visible bg-lightmode-background-default dark:bg-darkmode-background-color-2 text-lightmode-font-color dark:text-darkmode-font-color p-3 rounded-2xl" href="#" target="_blank">Acessar</a>
                            </div>
                        </div>
                        <MyProjects />
                        <MyProjects />
                        <MyProjects />
                        <MyProjects />
                        <MyProjects />
                    </div>
                </div>
            </section>
            <section id="certificados" className="bg-lightmode-background-default dark:bg-darkmode-background-default w-full p-20">
                <h1 className="text-center text-lightmode-font-color dark:text-darkmode-font-color font-Chakra text-4xl font-bold">Certificados</h1>
                <div className="flex justify-around mt-10 max-lg:flex-col max-lg:gap-y-10 max-lg:items-center lg:gap-x-5">
                    <div className="bg-lightmode-card-color  dark:bg-darkmode-card-color w-72 h-48 rounded-xl"></div>
                    <MyCertificates />
                    <MyCertificates />
                    <MyCertificates />
                    <MyCertificates />
                </div>
            </section>
        </main>
    )
}
export default Main;