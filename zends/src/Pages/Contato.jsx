const Contato = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-white">

      {/* Hero Section */}
      <div
        className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/code.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-lg"></div>
        <div className="relative z-10 text-center max-w-4xl">
          <img 
            src="/zendsnome.png" 
            alt="Zends Logo" 
            className="mx-auto mb-10 h-16 md:h-36 drop-shadow-2xl"
          />
          <p className="text-lg md:text-xl text-neutral-300 mb-8">
            Av. Lins de Vasconcelos, 1042 - Aclimação - São Paulo - SP
          </p>

          {/* Contact information */}
          <div className="flex justify-center gap-6">
            {/* Phone number box */}
            <div className="w-56 h-12 px-6 py-3 bg-gradient-to-br from-cyan-500 to-blue-900 text-white font-semibold text-center rounded-sm drop-shadow-2xl flex items-center justify-center">
              <a href="tel:+1234567890" className="text-white">+55 11 3277-0098 </a>
            </div>

            {/* Email box */}
            <div className="w-56 h-12 px-6 py-3 bg-gradient-to-br from-cyan-500 to-blue-900 text-white font-semibold text-center rounded-sm drop-shadow-2xl flex items-center justify-center">
              <a href="mailto:contato@zends.com" className="text-white">contato@zends.com</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contato;
