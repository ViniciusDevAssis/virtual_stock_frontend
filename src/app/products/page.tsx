"use client";
import { useEffect, useState } from "react";
import { CreateProduct } from "./_components/create";
import { EditProduct } from "./_components/edit";
import { formatarDinheiro } from "../actions";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  inventory: number;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  async function deleteProduct(name: string) {
    await fetch(`http://localhost:8080/products/deactivate/${name}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${document.cookie
          .split(";")
          .find((cookie) => cookie.startsWith("token="))
          ?.split("=")[1]}`,
      },
    });
    setProducts((prev) => prev.filter((product) => product.name !== name));
  }

  async function updateProduct(updatedProduct: Product) {
    try {
      const res = await fetch(`http://localhost:8080/products/update/${updatedProduct.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie
            .split(";")
            .find((cookie) => cookie.startsWith("token="))
            ?.split("=")[1]}`,
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!res.ok) {
        throw new Error(`Erro ${res.status}: ${res.statusText}`);
      }

      setProducts((prev) =>
        prev.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
      );
      setEditingProduct(null);
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      setError("Erro ao atualizar o produto. Tente novamente mais tarde.");
    }
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:8080/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${document.cookie
              .split(";")
              .find((cookie) => cookie.startsWith("token="))
              ?.split("=")[1]}`,
          },
        });

        if (!res.ok) {
          throw new Error(`Erro ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setError("Erro ao carregar os produtos. Tente novamente mais tarde.");
      }
    }

    fetchProducts();
  }, []);

  return (
    <main className="flex flex-col md:flex-row min-h-screen items-center justify-center bg-dark_blue p-4 gap-4">
      <CreateProduct addProduct={addProduct} />
      <div className="w-full max-w-5xl bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Meus Produtos</h2>

        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-dark_blue text-white">
                  <th className="px-4 py-2 text-left hidden sm:table-cell">ID</th>
                  <th className="px-4 py-2 text-left">Nome</th>
                  <th className="px-4 py-2 text-left hidden sm:table-cell">Descrição</th>
                  <th className="px-4 py-2 text-left">Preço</th>
                  <th className="px-4 py-2 text-left hidden md:table-cell">Estoque</th>
                  <th className="px-4 py-2 text-left">Ações</th>
                </tr>
              </thead>
              <tbody className="text-black">
                {products.map((product: Product) => (
                  <tr key={product.id} className="border-b">
                    <td className="px-4 py-2 hidden sm:table-cell">{product.id}</td>
                    <td className="px-4 py-2">{product.name}</td>
                    <td className="px-4 py-2 hidden sm:table-cell">{product.description}</td>
                    <td className="px-4 py-2">{formatarDinheiro(product.price)}</td>
                    <td className="px-4 py-2 hidden md:table-cell">{product.inventory}</td>
                    <td className="px-4 py-2 flex flex-wrap gap-2">
                      <button
                        className="bg-dark_green text-white px-3 py-1 rounded-lg hover:bg-green-600"
                        onClick={() => setEditingProduct(product)}
                      >
                        Editar
                      </button>
                      <button onClick={() => deleteProduct(product.name)} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {editingProduct && <EditProduct product={editingProduct} onSave={updateProduct} onClose={() => setEditingProduct(null)} />}
    </main>
  );
}
