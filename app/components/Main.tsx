import Card from "./Card";
import Image from "next/image";

function Main() {
    return (
        <>
            <div className="bg-black min-h-screen flex flex-col">
                
                <header className="pt-10 mb-16">
                    <nav className='bg-white/15 border-2 border-white max-w-[800px] mx-auto backdrop-blur-sm rounded-full px-6 py-3 flex items-center justify-between shadow-lg'>
                        <a href="#">
                            <Image src="/img/img2.jpeg" width={12} height={12} className='rounded-full object-cover' alt="Inicio"/>
                        </a>
                        
                        <div className="grow flex justify-center space-x-6 font-bold text-white">
                            <a href="#proyectos" className=" hover:text-blue-600">Proyectos</a>
                            <a href="#estudios" className=" hover:text-blue-600">Estudios</a>
                            <a href="#experiencia" className=" hover:text-blue-600">Experiencia</a>
                            <a href="#sobremi" className=" hover:text-blue-600">Sobre mi</a>
                        </div>
                    </nav> 
                </header>
                

                
                <main id="proyectos" className="p-4 grow">
                    <section className="relative w-full h-[500px] mb-20"> 
                        
                        <div className="absolute inset-0 bg-[url('/img/back.jpg')] bg-cover bg-center"></div>
                        
                        <div className="absolute top-0 left-0 w-full h-1/4 bg-linear-to-b from-black to-transparent"></div>
                        
                        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-linear-to-t from-black to-transparent"></div>
                        
                        <div className="relative z-10 flex flex-col items-center justify-start h-full p-4 pt-20">
                            <h1 className="text-5xl font-extrabold text-white text-center">
                                ¡Bienvenido a mi porfolio! 👋
                            </h1>
                        </div>
                    </section>
                    <section>
                    
                    <div className="flex flex-col space-y-8 max-w-xl mx-auto items-center">
                        <h2 className="text-3xl font-extrabold text-white text-center mb-8">Mis Proyectos Destacados</h2>
                        <Card
                            titulo="Gestor-DB"
                            img="/img/pera.png"
                            descripcion="Un gestor de base de datos hecho para un cliente en las prácticas"
                        />

                        <Card
                            titulo="Portfolio"
                            img="/img/cacahuete.png"
                            descripcion="Mi portfolio hecho con Next.js"
                        />
                    </div>
                    </section>
                </main>
                
                <footer className="mt-auto py-4 bg-black/50">
                    <section className="max-w-[250px] max-h[20px] gap-4 mx-auto p-1 border border-white rounded-full bg-white/15 flex justify-center items-center space-x-6">
                        <a href="https://www.github.com/nacherdev">
                            <Image width={35} height={35} className="transition ease-in-out duration-300 transform scale-100 hover:scale-105" src="/img/github.png" alt="Github" />
                        </a>
                        
                        <a href="https://www.instagram.com/nacher.dev">
                            <Image width={35} height={35} className="transition ease-in-out duration-300 transform scale-100 hover:scale-105" src="/img/instagram.png" alt="Instagram" />
                        </a>
                        
                        <a href="#">
                            <Image width={35} height={35} className="transition ease-in-out duration-300 transform scale-100 hover:scale-105" src="/img/linkedin.png" alt="LinkedIn" />
                        </a>
                    </section>
                </footer>
            </div>
        </>
    )
}

export default Main;