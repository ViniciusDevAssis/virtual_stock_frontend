"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      console.log("Enviando requisição para cadastro de usuario...");
      const res = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        throw new Error(`Erro ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      console.log("Resposta do servidor:", data);

      router.push("/auth/login");
    } catch (error) {
      console.error("Erro na requisição:", error);
      setError(error instanceof Error ? error.message : "Erro desconhecido ao cadastrar usuario");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-dark_blue">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Cadastro</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Nome</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark_green"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark_green"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Senha</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark_green"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirmar Senha</label>
            <input
              type="password"
              className={`${password !== confirmPassword ? "border-red-500" : "border-gray-300"} w-full px-4 py-2 mt-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark_green`}
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {password !== confirmPassword && <p className="text-red-500">As senhas devem ser iguais</p>}
          </div>
          {error && <p className="text-red-500">{error}</p>}
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
            <a href="/auth/login" className="text-dark_blue hover:text-dark_green">
              Faça login
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
