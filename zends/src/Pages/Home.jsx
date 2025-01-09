import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-900">

      {/* Banner */}
      <div className="bg-zendscyan w-full mt-16 py-8 flex justify-center items-center">
        <img
          src="/zendsnome.png" // Certifique-se de que o caminho da imagem está correto
          alt="Zends - Soluções tecnológicas"
          className="h-16 sm:h-24" // Ajuste o tamanho da imagem conforme necessário
        />
      </div>

      {/* Texto genérico abaixo do banner */}
      <div className="container mx-auto px-8 md:px-16 py-8 text-left">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Sobre Nós
        </h2>
        <p className="text-neutral-400">
          A Zends tem a missão de fornecer soluções inovadoras e seguras para proteger dados e sistemas críticos. 
          Estamos comprometidos em oferecer ferramentas eficientes que atendam às necessidades de segurança 
          de empresas e usuários em um mundo digital em constante evolução. <br /><br />
          Com anos de experiência e tecnologia de ponta, nossa equipe busca oferecer produtos que garantam a 
          integridade, confidencialidade e disponibilidade dos seus dados. Explore nossas soluções e descubra 
          como podemos ajudar a sua empresa a se proteger contra os desafios da era digital.
        </p>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-grow container mx-auto px-4 py-8">
        {/* Título */}
        <h1 className="text-3xl font-bold text-center mb-2 text-white">
          Soluções
        </h1>

        {/* Texto padrão */}
        <p className="text-neutral-400 text-center mb-8">
          Produtos exclusivos de segurança
        </p>

        {/* Cards */}
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {/* Card Principal - Centralizado e com imagem */}
            <div className="bg-neutral-900 border-white border-2 shadow-md p-6 text-center col-span-3 relative w-full lg:w-1/2 mx-auto flex flex-col">
              <div className="relative z-10 flex-grow">
                <h2 className="text-xl font-semibold text-white mb-4">Zends Security Suite</h2>
                <p className="text-neutral-400 mb-4 text-sm text-left">
                  - Software de segurança para controle e monitoração de:
                  <ul className="list-disc ml-6">
                    <li>Dispositivos USB ou seriais</li>
                    <li>Arquivos e pastas</li>
                    <li>Processos</li>
                    <li>Comunicação</li>
                  </ul>
                  <br />
                  - Baseado em Drivers de Kernel da plataforma Windows, permitindo:
                  <ul className="list-disc ml-6">
                    <li>Bloquear qualquer acesso não autorizado ao sistema</li>
                  </ul>
                  <br />
                  - **Zends Security Suite** oferece:
                  <ul className="list-disc ml-6">
                    <li>Tecnologia estendida através de interfaces de programação (APIs)</li>
                    <li>Integração com sistemas e aplicativos dos clientes</li>
                    <li>Proteção contra ataques acidentais ou intencionais</li>
                  </ul>
                </p>
              </div>
              <Link
                to="/Contato"
                className="inline-block text-zendscyan font-semibold mt-auto hover:tracking-wider transition-all"
              >
                Contato
              </Link>
            </div>

            {/* Cards 2 até 7 */}
            {[
              {
                title: "Zends Serial",
                description:
                  "Controla acesso às portas seriais, apenas processos autorizados podem acessá-las.",
              },
              {
                title: "Zends USB",
                description:
                  "Controle de dispositivos USB, registra qualquer inserção ou remoção. Opção de bloqueio de dispositivos não autorizados.",
              },
              {
                title: "Zends Registry",
                description:
                  "Controla acesso ao Registro do Windows, garantindo apenas modificações autorizadas.",
              },
              {
                title: "Zends Disk",
                description:
                  "Soluções de segurança para a proteção de dados armazenados na nuvem.",
              },
              {
                title: "Zends Processes",
                description:
                  "Proteção avançada contra intrusões e ataques cibernéticos.",
              },
              {
                title: "Zends Network",
                description:
                  "Controla acesso à rede ou internet, servidores e portas de comunicação.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-neutral-900 border-white border-2 shadow-md p-6 text-center w-full h-full flex flex-col"
              >
                <h2 className="text-xl font-semibold text-white mb-4">
                  {card.title}
                </h2>
                <p className="text-neutral-400 mb-4">{card.description}</p>
                <Link
                  to="/Contato"
                  className="inline-block text-zendscyan font-semibold mt-auto hover:tracking-wider transition-all"
                >
                  Contato
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
