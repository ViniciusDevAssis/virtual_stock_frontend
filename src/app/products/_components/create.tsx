"use client";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

type CreateProductProps = {
  addProduct: (product: Product) => void;
};

export function CreateProduct({ addProduct }: CreateProductProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      console.log("Enviando requisição para cadastro de produto...");
      const res = await fetch("http://localhost:8080/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie
            .split(";")
            .find((cookie) => cookie.startsWith("token="))
            ?.split("=")[1]}`,
        },
        body: JSON.stringify({ name, description, price }),
      });

      if (!res.ok) {
        throw new Error(`Erro ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      console.log("Resposta do servidor:", data);

      // Adiciona o novo produto à lista
      addProduct(data);

      cancel();
    } catch (error) {
      console.error("Erro na requisição:", error);
      setError(
        error instanceof Error ? error.message : "Erro desconhecido ao cadastrar produto"
      );
    }
  };

  function cancel() {
    setName("");
    setDescription("");
    setPrice("");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-dark_blue p-4 w-80">
      <div className="w-full max-w-lg bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Adicionar Produto
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Nome do Produto</label>
            <input
              type="text"
              className="w-full text-black px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark_green"
              placeholder="Digite o nome do produto"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700">Descrição</label>
            <textarea
              className="w-full text-black px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark_green"
              placeholder="Digite a descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="flex">
            <div className="flex flex-col mr-4">
              <label className="block text-gray-700">Preço</label>
              <input
                type="number"
                className="w-full text-black px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark_green"
                placeholder="R$ 0,00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          {error ? <p className="text-red-500">{error}</p> : ""}
          <button
            type="submit"
            className="w-full bg-dark_blue text-white px-4 py-2 font-bold rounded-lg hover:bg-dark_green"
          >
            Salvar Produto
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={cancel}
            className="w-full bg-dark_blue text-white px-4 py-2 font-bold rounded-lg hover:bg-dark_green"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
