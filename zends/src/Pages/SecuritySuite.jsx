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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-20">
      <div className="bg-neutral-900 p-6 h-full text-center border-0 rounded-sm bg-gradient-to-br from-cyan-500 to-blue-900 transform transition-all hover:scale-105">
        <h3 className="text-xl font-semibold mb-2">USB - Universal Serial Bus</h3>
        <ul className="list-disc pl-5 text-left">
          <li>Identificação de falhas, necessidades ou vulnerabilidades em sistemas (novos ou existentes).</li>
          <li>Procuramos a melhor solução utilizando conhecimento especializado na criação de APIs de criptografia sob medida.</li>
          <li>Uso de algoritmos de criptografia baseados em padrões de mercado, como 3DES/AES ou certificados digitais.</li>
          <li>Adição de uma camada de proteção para informações sigilosas, tanto para sistemas internos quanto externos.</li>
          <li>Registro detalhado de operações (log)</li>
        </ul>
      </div>
  
      
  
      <div className="bg-neutral-900 p-6 h-full text-center border-0 rounded-sm bg-gradient-to-br from-cyan-500 to-blue-900 transform transition-all hover:scale-105">
        <h3 className="text-xl font-semibold mb-2">Processos</h3>
        <ul className="list-disc pl-5 text-left">
    <p className="font-semibold">Whitelist:</p>
    <li>Apenas programas cadastrados podem ser executados</li>
    <li>Formato PE (exe, dll, sys, ocx)</li>
    <p className="font-semibold">Blacklist:</p>
    <li>Exclusão automática de programa cadatrado como nocivo ou indesejado</li>
    <li>Detecção de criação de executável (PE)</li>
    <li>Registro detalhado de operações (log)</li>
   </ul>

      </div>

      <div className="bg-neutral-900 p-6 h-full text-center border-0 rounded-sm bg-gradient-to-br from-cyan-500 to-blue-900 transform transition-all hover:scale-105">
        <h3 className="text-xl font-semibold mb-2">SAFEBOX</h3>
        <ul className="list-disc pl-5 text-left">
    <li>Arquivos importantes podem ser copiados (dlls, drivers, logs, .configs e chaves do registro do Windows).</li>
    <p className="font-semibold">Proteção de Recursos</p>
    <li>Arquivos pastas e chaves do Windows podem ser protegidos contra exclusão, cópia, gravação e execução não autorizada.</li>
    <li>Recursos protegidos são visíveis a todos, mas somente podem ser acessados por "Processos Autorizados", nem mesmo a operação de cópia é permitida</li>
   <p className="font-semibold">Processos Autorizados</p>
   <li>Programas registrados com permissão de acesso aos recursos protegidos</li>
   </ul>

      </div>

      <div className="bg-neutral-900 p-6 h-full text-center border-0 rounded-sm bg-gradient-to-br from-cyan-500 to-blue-900 transform transition-all hover:scale-105">
        <h3 className="text-xl font-semibold mb-2">Comandos de Segurança e Instalação de Softwares</h3>
        <ul className="list-disc pl-5 text-left">
    <li>Shudown Forçado</li>
    <li>Lockdown (tela azul simulada)</li>
    <li>Desabilitar / Reabilitar proteções</li>
    <li>Alerta de instalação de software com possibilidade de bloqueio mediante configuração.</li>
    <li>Registro detalhado de operações (log)</li>
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
  