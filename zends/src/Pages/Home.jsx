import { useRef, useEffect } from 'react';
import useDocumentTitle from '../hook/useDocumentTitle';
import { Link } from 'react-router-dom';
import Navbar from '../Componentes/Navbar/Navbar';
import Header from '../Componentes/Header/Header';
import CardAvaliacao from '../Componentes/CardAvaliacao/CardAvaliacao';

function Home() {
    useDocumentTitle('FIXY - HOME');

    const targetSectionRef = useRef(null);
    const targetSection2Ref = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                scrollToSection(targetSectionRef);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <main className="bg-neutral-900 min-h-screen text-white">
            {/* Navbar */}
            <Navbar />

            {/* Header */}
            <Header onScroll={() => scrollToSection(targetSection2Ref)} />

            {/* Seção "O que é a FIXY?" */}
            <section ref={targetSectionRef} className="py-10 px-40 text-center">
                <h2 className="text-yellow-500 text-3xl mb-8 font-semibold">O que é a FIXY?</h2>
                <p className="text-xl">
                    Focando na segurança e confiabilidade, a FIXY é uma plataforma que conecta clientes a prestadores de serviços, oferecendo desde mudanças até montagem de móveis.
                </p>
            </section>

            {/* Seção "Solicitação de Serviços" */}
            <section ref={targetSection2Ref} className="py-10 text-center bg-gradient-to-b from-neutral-900 to-neutral-950">
                <h2 className="text-yellow-500 text-3xl mb-8 font-semibold">Solicitação de serviços</h2>
                <div className="flex flex-wrap justify-center gap-6 px-4">
                    {[
                        { img: '/mudança.jpg', title: 'Mudanças', description: 'Transporte de móveis com qualidade.', link: 'cliente' },
                        { img: '/1pintor.jpg', title: 'Pintura', description: 'Pintores qualificados e próximos a você.', link: 'cliente' },
                        { img: '/pedreiro.jpg', title: 'Pedreiro', description: 'Encontre pedreiros qualificados.', link: 'Pro1' },
                        { img: '/montagem.jpg', title: 'Montagem de Móveis', description: 'Montagem fácil e econômica.', link: 'cliente' },
                        { img: '/eletrica2.jpg', title: 'Eletricista', description: 'Escolha profissionais confiáveis.', link: 'cliente' },
                        { img: '/marceneiro.jpg', title: 'Marceneiro', description: 'Personalização com qualidade.', link: 'cliente' },
                    ].map((card, index) => (
                        <div
                            key={index}
                            className="relative rounded-xl overflow-hidden w-80 mx-auto shadow-lg transition-transform duration-300 hover:scale-105"
                        >
                            <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-60" />
                            <div className="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-70 flex flex-col justify-between p-6 text-white">
                                <h3 className="text-2xl mb-4 text-yellow-500 font-semibold">{card.title}</h3>
                                <p className="text-gray-300 mb-4">{card.description}</p>
                                <Link
                                    to={card.link}
                                    className="bg-yellow-500 text-black py-2 px-4 hover:bg-transparent hover:tracking-widest hover:border-2 hover:border-yellow-500 hover:text-yellow-500 transition-all self-center"
                                >
                                    ORÇAMENTOS
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Seção de Prestadores de Serviço */}
            <section className="py-10 bg-neutral-950">
                <h2 className="text-yellow-500 text-3xl mb-8 font-semibold text-center">Prestadores de Serviço</h2>
                <div className="flex flex-wrap justify-center gap-6 px-4">
                    <CardAvaliacao nome="André" especializacao="Marceneiro" custo="R$ 100/h" servico="Corte de piso de madeira" />
                    <CardAvaliacao nome="Beatriz" especializacao="Eletricista" custo="R$ 150/h" servico="Instalação de iluminação" />
                    <CardAvaliacao nome="Carlos" especializacao="Pedreiro" custo="R$ 120/h" servico="Construção de parede" />
                </div>
            </section>

            {/* Seção "Como Funciona" */}
            <section className="py-10 text-center bg-gradient-to-b from-neutral-950 to-neutral-900">
                <h2 className="text-yellow-500 text-3xl mb-8 font-semibold">Como Funciona</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        { title: 'Prestador de Serviço', description: 'Cadastre habilidades e receba oportunidades.', link: 'afiliado' },
                        { title: 'Cliente', description: 'Descreva seu problema e encontre profissionais.', link: 'cliente' },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-neutral-800 p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-80 flex flex-col justify-between"
                        >
                            <h3 className="text-2xl mb-4 text-yellow-500 font-semibold">{item.title}</h3>
                            <p className="mb-6 text-gray-300">{item.description}</p>
                            <Link
                                to={item.link}
                                className="bg-yellow-500 text-black py-2 px-4 hover:bg-transparent hover:tracking-widest hover:border-2 hover:border-yellow-500 hover:text-yellow-500 transition-all self-center"
                            >
                                VEJA MAIS
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Home;
