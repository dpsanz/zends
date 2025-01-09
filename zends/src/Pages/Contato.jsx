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
          Entre em Contato
        </h2>
        <p className="text-neutral-400">
        EMAIL: contato@zends.com.br <h1/><h1/>
        TELEFONE: +55 11 3277-0098
        </p>
      </div>
    </div>
  );
};

export default Home;
