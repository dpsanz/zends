const SS = () => {
    return (
      <div className="min-h-screen flex flex-col bg-neutral-900 text-white">
  
        {/* Hero Section */}
        <div
          className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-center relative"
          style={{ backgroundImage: "url('/bannerzends.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 text-center max-w-4xl">
            <img 
              src="/ss1.png" 
              alt="Zends Logo" 
              className="mx-auto mb-10 h-16 md:h-36 drop-shadow-2xl"
            />
            <p className="text-lg md:text-xl text-neutral-300 mb-8">
              ZENDS SECURITY SUITE
            </p>
            <div className="flex justify-center"> {/* Contêiner flex para centralizar */}
              <a 
                href="#serviços" 
                className="w-56 h-12 px-6 py-3 opacity-90 text-cyan-500 border rounded-sm border-cyan-500 font-semibold hover:bg-gradient-to-br hover:tracking-wide hover:from-cyan-500 hover:to-blue-900 hover:text-white flex items-center justify-center gap-2 transition-all drop-shadow-2xl"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#produtos').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                SOBRE
              </a>
            </div>
          </div>
        </div>
  
        {/* Cards Section */}
        <div id="produtos" className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold text-center mb-8">Sobre o Security Suite</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-20">
      <div className="bg-neutral-900 p-6 h-[500px] text-center border-0 rounded-sm bg-gradient-to-br from-cyan-500 to-blue-900 transform transition-all hover:scale-105">
        <h3 className="text-xl font-semibold mb-2">Desenvolvimento de Software em Segurança da Informação</h3>
        <ul className="list-disc pl-5 text-left">
          <li>Identificação de falhas, necessidades ou vulnerabilidades em sistemas (novos ou existentes).</li>
          <li>Procuramos a melhor solução utilizando conhecimento especializado na criação de APIs de criptografia sob medida.</li>
          <li>Uso de algoritmos de criptografia baseados em padrões de mercado, como 3DES/AES ou certificados digitais.</li>
          <li>Adição de uma camada de proteção para informações sigilosas, tanto para sistemas internos quanto externos.</li>
          <li>Integração segura entre departamentos e empresas, garantindo a proteção dos dados.</li>
        </ul>
      </div>
  
      <div className="bg-neutral-900 p-6 h-[500px] text-center border-0 rounded-sm bg-gradient-to-br from-cyan-500 to-blue-900 flex flex-col justify-between transform transition-all hover:scale-105">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Zends Security Suite</h3>
          <p className="text-lg">Software de segurança para controle e monitoração de dispositivos USB ou seriais, arquivos, pastas, processos e comunicação.
  Solução baseada em Drivers de Kernel da plataforma Windows, permite bloquear qualquer acesso não autorizado ao sistema.
  Zends Security Suite estende sua tecnologia através de interfaces de programação (APIs) para utilização pelos sistemas e aplicativos de nossos clientes, blindando-os contra ataques inadivertidos ou intencionais.</p>
        </div>
        {/* Centraliza o botão "Veja Mais" no final do card */}
        <a 
  href="/securitysuite" 
  className="w-56 h-12 px-6 py-3 text-white border rounded-sm border-white font-semibold hover:border-cyan-500 hover:bg-gradient-to-br hover:tracking-wide hover:from-cyan-500 hover:to-blue-900 hover:text-white flex items-center justify-center gap-2 transition-all drop-shadow-2xl self-center mt-auto"
  onClick={(e) => {
    e.preventDefault();
    // Navegar para a página de Security Suite
    window.location.href = '/securitysuite'; // Redireciona diretamente para a página de Security Suite
  }}
>
  Veja Mais
</a>

      </div>
  
      <div className="bg-neutral-900 p-6 h-[500px] text-center border-0 rounded-sm bg-gradient-to-br from-cyan-500 to-blue-900 transform transition-all hover:scale-105">
        <h3 className="text-xl font-semibold mb-2">Desenvolvimento de Software em TI</h3>
        <ul className="list-disc pl-5 text-left">
    <li>Desenvolvimento de Drivers de Kernel.</li>
    <li>Desenvolvimento de Serviços do Windows.</li>
    <li>Criação de Servidores/Clientes de comunicação.</li>
    <li>Integração com sistemas novos ou legados através de WebServices, TCP ou RCP, independente da linguagem em que foram desenvolvidos.</li>
    <li>Integração de sistemas internos e externos, utilizando as principais tecnologias para garantir maior agilidade e flexibilidade no desenvolvimento.</li>
    <li>Foco em garantir a segurança e robustez da solução, incentivando boas práticas.</li>
  </ul>
  
      </div>
    </div>
  </div>
  
  
  
  
        {/* Additional Section */}
        <div className="bg-neutral-800 py-16">
    <div className="container mx-auto px-4 text-center">
      {/* Substituindo o "T" pela imagem */}
      <img 
        src="/zendsnome.png" 
        alt="Zends Logo" 
        className="mx-auto mb-4 h-16 md:h-36 drop-shadow-2xl"
      />
  
      <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-4">
        Serviços de segurança e desenvolvimento de sistemas.
      </p>
      
      <a 
        href="/contato" 
        className="w-56 h-12 px-6 py-3 opacity-90 text-cyan-500 border rounded-sm border-cyan-500 font-semibold hover:bg-gradient-to-br hover:tracking-wide hover:from-cyan-500 hover:to-blue-900 hover:text-white flex items-center justify-center gap-2 transition-all drop-shadow-2xl mx-auto"
        onClick={(e) => {
          // Remover esse evento se não for necessário, já que o href faz o redirecionamento
          e.preventDefault();
          window.location.href = '/contato';  // Usando o caminho para a página de contato
        }}
      >
        Contato
      </a>
    </div>
  </div>
  
  
      </div>
    );
  };
  
  export default SS;
  