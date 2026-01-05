import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white border-b shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Nombre */}
        <NavLink
          to="/"
          className="text-xl font-bold text-blue-600"
        >
          Diego Alejandro Cifuentes Posada
        </NavLink>

        {/* Links */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/proyectos"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Proyectos
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/sobre-mi"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Sobre mí
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "hover:text-blue-600"
              }
            >
              Contacto
            </NavLink>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Navbar;
