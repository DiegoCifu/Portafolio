function Contact() {
  return (
    <main className="min-h-screen px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Contacto
      </h1>

      <p className="text-gray-600 mb-6">
        Puedes contactarme directamente por correo electrónico:
      </p>

      <a
        href="mailto:diegocifuentesposada@gmail.com"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Enviar correo
      </a>
    </main>
  );
}

export default Contact;
