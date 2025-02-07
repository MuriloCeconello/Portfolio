function Footer() {
    return (
        <footer className="bg-lightmode-background-color-2 dark:bg-darkmode-background-color-2 p-6 max-sm:flex-col max-sm:gap-y-3">
            <div className="flex justify-between">
                <div className="text-lg font-Chakra font-bold text-lightmode-font-color dark:text-darkmode-font-color">&copy;Desenvolvido por Murilo Ceconello
                </div>
                <div className="flex gap-5">
                    <a href="https://github.com/MuriloCeconello" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub link" /></a>
                    <a href="https://www.instagram.com/ceconellomurilo/" target="_blank"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram link" /></a>
                    <a href="https://www.linkedin.com/in/muriloceconello/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin link" /></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;