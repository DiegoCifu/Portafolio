export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Contacto
      </h1>

      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Estoy abierto a oportunidades como desarrollador web junior,
        tanto presenciales como remotas en España.
        Si te interesa mi perfil, no dudes en contactarme.
      </p>

      <div className="bg-white shadow rounded-xl p-8 max-w-xl mx-auto">

        <div className="space-y-6 text-left">

          {/* EMAIL */}
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <a
              href="mailto:diegocifuentesposada@gmail.com"
              className="text-lg font-semibold text-blue-600 hover:underline"
            >
              diegocifuentesposada@gmail.com
            </a>
          </div>

         {/* LINKEDIN */}
          <div>
            <p className="text-sm text-gray-500">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/diego-cifuentesp"
              target="_blank"
              rel="noreferrer"
              className="text-lg font-semibold text-blue-600 hover:underline"
            >
              linkedin.com/in/diego-cifuentesp
            </a>
          </div>

          {/* UBICACIÓN */}
          <div>
            <p className="text-sm text-gray-500">Ubicación</p>
            <p className="text-lg font-semibold text-gray-800">
              Madrid · Disponibilidad presencial/remota
            </p>
             <p className="text-lg font-semibold text-gray-800">
              España · Disponibilidad remota
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
