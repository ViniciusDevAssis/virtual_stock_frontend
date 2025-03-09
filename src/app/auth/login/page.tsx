"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Obtém a instância do router

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      console.log("Enviando requisição para login...");
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error(`Erro ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      console.log("Resposta do servidor:", data);

      // Salva o token nos cookies
      document.cookie = `token=${data.token}; path=/; max-age=86400;`;

      router.push("/products");
    } catch (error) {
      console.error("Erro na requisição:", error);
      setError(error instanceof Error ? error.message : "Erro desconhecido ao fazer login");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-dark_blue">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          TechStore Login
        </h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark_green"
              value={email}
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Senha</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark_green"
              value={password}
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-dark_blue rounded-lg hover:bg-dark_green"
          >
            Entrar
          </button>
        </form>
        <div className="mt-4 text-center p-4">
          <p className="text-sm text-gray-700">
            <a
              href="/forgot-password"
              className="text-dark_blue hover:text-dark_green"
            >
              Esqueceu sua senha?
            </a>
          </p>
          <p className="text-sm text-gray-700">
            Ainda não tem uma conta?
            <a
              href="/register"
              className="text-dark_blue hover:text-dark_green"
            >
              Cadastre-se
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
