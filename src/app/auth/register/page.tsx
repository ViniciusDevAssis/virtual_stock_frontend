export default function Register() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-dark_blue">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Cadastro</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Nome</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark_green"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark_green"
              placeholder="Digite seu email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Senha</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark_green"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirmar Senha</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark_green"
              placeholder="Confirme sua senha"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-dark_blue rounded-lg hover:bg-dark_green"
          >
            Cadastrar
          </button>
        </form>

        <div className="mt-4 text-center p-4">
          <p className="text-sm text-gray-700">
            Já tem uma conta?{" "}
            <a href="/login" className="text-dark_blue hover:text-dark_green">
              Faça login
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
