export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-dark_blue">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">TechStore Login</h2>
        <form className="mt-4">
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
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-dark_blue rounded-lg hover:bg-dark_green"
          >
            Entrar
          </button>
        </form>
        <div className="mt-4 text-center p-4">
          <p className="text-sm text-gray-700">
            <a href="/forgot-password" className="text-dark_blue hover:text-dark_green">
              Esqueceu sua senha?
            </a>
          </p>
          <p className="text-sm text-gray-700">
            Ainda não tem uma conta?
            <a href="/register" className="text-dark_blue hover:text-dark_green">
              Cadastre-se
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}