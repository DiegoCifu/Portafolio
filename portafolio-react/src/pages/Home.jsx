import profileImage from "../assets/fotoCV.jpg";

function Home() {
  return (
    <main className="bg-gray-50 min-h-screen flex items-center">
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        {/* Texto */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Diego Alejandro Cifuentes Posada
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl text-blue-600 font-semibold">
            Web Developer Junior
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Desarrollador web junior enfocado en crear aplicaciones modernas,
            accesibles y bien estructuradas con tecnologías actuales.
          </p>

          <p className="mt-4 text-gray-600 italic">
            Junior Web Developer focused on building clean, accessible and
            user-friendly web applications.
          </p>

          {/* Botones */}
          <div className="mt-8 flex gap-4">
            <a
              href="/proyectos"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Ver proyectos
            </a>

            <a
              href="/contacto"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              Contacto
            </a>
          </div>
        </div>

          {/* Imagen */}
          <div className="flex justify-center items-center">
            <img
              src={profileImage}
              alt="Foto de Diego Cifuentes"
              className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>


      </section>
    </main>
  );
}

export default Home;
