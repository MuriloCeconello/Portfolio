function Main() {
    return (
        <main>
            <section className="flex justify-around items-center bg-color2 w-full h-full p-20">
                <div className="text-justify w-3/12">
                    <h1 className="text-center font-Chakra font-bold text-4xl text-font-color-dark">Olá! Me chamo Murilo </h1>
                    <h2 className="text-base font-Poppins text-font-color-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam porro laudantium maxime eius. Ipsum nostrum voluptatum libero, quo accusantium eaque illum amet, illo quos enim aliquid quam. Vero, in tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorem mollitia fuga excepturi numquam earum. Mollitia laudantium maxime cupiditate temporibus voluptatum architecto, vero veniam quam magni eius tenetur provident iure?</h2>
                </div>
                <img src="images/dev.webp" alt="Developer" />
            </section>
            <section className="bg-color1 w-full h-1/2 p-11">
                <h1 className="text-center text-4xl font-Chakra font-bold text-font-color-dark">Sobre</h1>
                <div className="flex justify-around my-14">
                    <div className="text-justify w-3/12">
                        <h1 id="sobre" className="text-center text-2xl font-Chakra font-semibold text-font-color-dark">Sobre:</h1>
                        <h2 className="text-base font-Poppins text-font-color-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsum provident, unde esse reiciendis repellat tempora minus laudantium quod eos libero, molestias ad, facere quisquam enim quibusdam beatae magni id? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta culpa molestiae blanditiis, suscipit sapiente dolorum numquam ipsa officia, nostrum fugiat alias, maxime molestias debitis praesentium. Laboriosam adipisci aliquam consequatur doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo asperiores vitae, consectetur nesciunt libero laudantium dolore saepe distinctio ab numquam molestias eligendi placeat amet, quos alias consequatur voluptate nostrum.</h2>
                    </div>
                    <div>
                        <h1 className="text-2xl text-center font-Chakra font-semibold text-font-color-dark mb-5">Hard Skills:</h1>
                        <div className="flex justify-around gap-10">
                            <div className="bg-grey hover:scale-105 hover:shadow-xl p-2 rounded-md transition duration-200">
                                <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="HTML5 logo" />
                            </div>
                            <div className="bg-grey hover:scale-105 hover:shadow-xl p-2 rounded-md transition duration-200">
                                <img className="w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt="CSS3 logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Main;