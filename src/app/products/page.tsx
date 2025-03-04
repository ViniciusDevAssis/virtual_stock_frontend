import { CreateProduct } from "./_components/create";

export default function Products() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen items-center justify-center bg-dark_blue p-4 gap-4">
      <CreateProduct />
      <div className="w-full max-w-5xl bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Meus Produtos
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-dark_blue text-white">
                <th className="px-4 py-2 text-left hidden sm:table-cell">ID</th>
                <th className="px-4 py-2 text-left">Nome</th>
                <th className="px-4 py-2 text-left hidden sm:table-cell">
                  Descrição
                </th>
                <th className="px-4 py-2 text-left">Preço</th>
                <th className="px-4 py-2 text-left hidden md:table-cell">
                  Estoque
                </th>
                <th className="px-4 py-2 text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 hidden sm:table-cell">1</td>
                <td className="px-4 py-2">Produto 1</td>
                <td className="px-4 py-2 hidden sm:table-cell">
                  Descrição do produto 1
                </td>
                <td className="px-4 py-2">R$ 99,99</td>
                <td className="px-4 py-2 hidden md:table-cell">10</td>
                <td className="px-4 py-2 flex flex-wrap gap-2">
                  <button className="bg-dark_green text-white px-3 py-1 rounded-lg hover:bg-green-600">
                    Editar
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
                    Excluir
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 hidden sm:table-cell">2</td>
                <td className="px-4 py-2">Produto 2</td>
                <td className="px-4 py-2 hidden sm:table-cell">
                  Descrição do produto 2
                </td>
                <td className="px-4 py-2">R$ 49,99</td>
                <td className="px-4 py-2 hidden md:table-cell">5</td>
                <td className="px-4 py-2 flex flex-wrap gap-2">
                  <button className="bg-dark_green text-white px-3 py-1 rounded-lg hover:bg-green-600">
                    Editar
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
                    Excluir
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <a
            href="/add-product"
            className="text-white bg-dark_blue px-6 py-3 rounded-lg hover:bg-dark_green"
          >
            Adicionar Novo Produto
          </a>
        </div>
      </div>
    </main>
  );
}
