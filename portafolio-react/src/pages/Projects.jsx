export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">
        Proyectos
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Una selección de proyectos personales desarrollados para aplicar y
        consolidar conocimientos en desarrollo web frontend y backend.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {/* PROYECTO 1 */}
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <div className="h-40 bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
            Proyecto Full Stack
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Portafolio Full Stack
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Aplicación web con panel de administración para gestión de
              proyectos, autenticación y base de datos.
            </p>

            <ul className="text-sm text-gray-700 mb-4 space-y-1">
              <li>• PHP + MySQL (CRUD completo)</li>
              <li>• Bootstrap 5</li>
              <li>• Login y sesiones</li>
              <li>• Buenas prácticas de seguridad</li>
            </ul>

            <div className="flex gap-3">
              <a
                href="#"
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                Ver demo
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-gray-600 hover:underline"
              >
                Código
              </a>
            </div>
          </div>
        </div>

        {/* PROYECTO 2 */}
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <div className="h-40 bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
            Proyecto React
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Portafolio con React
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Portafolio personal desarrollado con React, enfocado en
              componentes reutilizables y navegación SPA.
            </p>

            <ul className="text-sm text-gray-700 mb-4 space-y-1">
              <li>• React + Vite</li>
              <li>• React Router</li>
              <li>• Tailwind CSS</li>
              <li>• Diseño responsive</li>
            </ul>

            <div className="flex gap-3">
              <a
                href="#"
                className="text-sm font-semibold text-indigo-600 hover:underline"
              >
                Ver demo
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-gray-600 hover:underline"
              >
                Código
              </a>
            </div>
          </div>
        </div>

        {/* PROYECTO 3 */}
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <div className="h-40 bg-green-100 flex items-center justify-center text-green-600 font-bold">
            Proyecto CRUD
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              CRUD Académico
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Proyecto enfocado en la lógica backend y manejo de bases de datos
              relacionales.
            </p>

            <ul className="text-sm text-gray-700 mb-4 space-y-1">
              <li>• PHP</li>
              <li>• MySQL</li>
              <li>• Formularios y validaciones</li>
              <li>• Operaciones CRUD</li>
            </ul>

            <div className="flex gap-3">
              <span className="text-sm text-gray-400">
                Demo local
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
