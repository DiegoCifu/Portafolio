import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="bg-blue-600 text-white py-16 mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          ¿Buscas un desarrollador web junior?
        </h2>

        <p className="text-blue-100 max-w-2xl mx-auto mb-8">
          Estoy en búsqueda de una oportunidad para seguir creciendo como
          desarrollador, aportar valor al equipo y consolidar mi carrera
          profesional en el sector tecnológico.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/contacto"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Contactar
          </Link>

          <a
            href="https://www.linkedin.com/in/diego-cifuentesp"
            target="_blank"
            rel="noreferrer"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Ver LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
