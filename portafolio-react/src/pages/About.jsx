export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Sobre mí
      </h1>

      {/* PERFIL */}
      <div className="space-y-6 text-gray-700 leading-relaxed mb-14">
        <p>
          Soy <strong>Diego Alejandro Cifuentes</strong>, 
          <strong> Web Developer Junior</strong> con enfoque en
          desarrollo frontend y bases sólidas en backend.
          Me interesa crear aplicaciones web claras, mantenibles
          y orientadas a una buena experiencia de usuario.
        </p>

        <p>
          Trabajo principalmente con tecnologías modernas del
          ecosistema web, aplicando buenas prácticas de
          programación, diseño responsive y estructuración
          de proyectos reales.
        </p>

        <p>
          Busco seguir creciendo profesionalmente como desarrollador
          web e integrarme en equipos tecnológicos dentro del
          mercado laboral de <strong>España</strong>.
        </p>
      </div>

     {/* TECNOLOGÍAS Y CONOCIMIENTOS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tecnologías & Conocimientos
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* FRONTEND */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              Frontend
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>HTML5 & CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React (Vite, Router, componentes)</li>
              <li>Responsive Design</li>
              <li>Tailwind CSS / Bootstrap 5</li>
            </ul>
          </div>

          {/* BACKEND */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-green-600">
              Backend
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>PHP</li>
              <li>CRUD y formularios</li>
              <li>Sesiones y autenticación básica</li>
              <li>Conceptos REST / APIs</li>
            </ul>
          </div>

          {/* BASES DE DATOS */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">
              Bases de Datos
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>MySQL / MariaDB</li>
              <li>Consultas SQL básicas</li>
              <li>Relaciones entre tablas</li>
            </ul>
          </div>

          {/* LENGUAJES */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">
              Lenguajes de Programación
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Python (básico)</li>
              <li>C# / .NET (conocimientos básicos)</li>
            </ul>
          </div>

          {/* PLATAFORMAS */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-orange-600">
              Plataformas & Herramientas
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Git & GitHub</li>
              <li>Visual Studio Code</li>
              <li>Visual Studio</li>
              <li>IntelliJ IDEA</li>
            </ul>
          </div>

          {/* FUNDAMENTOS */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-red-600">
              Fundamentos Técnicos
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Modelo cliente-servidor</li>
              <li>Conceptos básicos de redes</li>
              <li>Buenas prácticas de seguridad</li>
              <li>Principios básicos de ciberseguridad</li>
            </ul>
          </div>

          {/* COMPLEMENTARIAS */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition md:col-span-2 lg:col-span-3">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 text-center">
              Skills Complementarias
            </h3>
            <ul className="flex flex-wrap justify-center gap-4 text-gray-700">
              <li>Excel (básico)</li>
              <li>Análisis de datos simple</li>
              <li>Trabajo en equipo</li>
              <li>Aprendizaje continuo</li>
            </ul>
          </div>

        </div>
      </section>



      {/* INGLÉS */}
      <div className="border-t pt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Short summary in English
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Junior Web Developer with experience in React, JavaScript,
          HTML, CSS and basic backend development using PHP and MySQL.
          Familiar with Git, responsive design and REST APIs.
          Motivated to grow professionally and contribute to real-world projects.
        </p>
      </div>
    </section>
  );
}

