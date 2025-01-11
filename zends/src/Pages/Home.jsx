const Home = () => {
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
            src="/zendsnome.png" 
            alt="Zends Logo" 
            className="mx-auto mb-4 h-16 md:h-36 drop-shadow-2xl"
          />
          <div className="flex justify-center"> {/* Contêiner flex para centralizar */}
            <a 
              href="#produtos" 
              className="w-56 h-12 px-6 py-3 opacity-90 text-cyan-500 border-2 border-cyan-500 font-semibold hover:bg-gradient-to-br hover:tracking-wide hover:from-cyan-500 hover:to-blue-900 hover:text-white flex items-center justify-center gap-2 transition-all drop-shadow-2xl"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#produtos').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Nossos Produtos
            </a>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div id="produtos" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Produtos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-neutral-800 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Total Supply</h3>
            <p className="text-2xl font-bold">255,080,266</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Market Cap</h3>
            <p className="text-2xl font-bold">$332,372,544</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">TVL</h3>
            <p className="text-2xl font-bold">$4.20B</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Price</h3>
            <p className="text-2xl font-bold">$2.52M</p>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="bg-neutral-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Earn passive income with crypto</h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-8">
            Our tools make it easy to grow your portfolio. Join the revolution.
          </p>
          <button className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition">
            Explore
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home;
