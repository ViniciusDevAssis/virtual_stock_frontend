export function CreateProduct() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-dark_blue p-4">
      <div className="w-full max-w-lg bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Adicionar Produto
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Nome do Produto</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark_green"
              placeholder="Digite o nome do produto"
            />
          </div>

          <div>
            <label className="block text-gray-700">Descrição</label>
            <textarea
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark_green"
              placeholder="Digite a descrição"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Preço</label>
              <input
                type="number"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark_green"
                placeholder="R$ 0,00"
              />
            </div>
            <div>
              <label className="block text-gray-700">Estoque</label>
              <input
                type="number"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-dark_green"
                placeholder="Quantidade"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-dark_blue text-white px-4 py-2 font-bold rounded-lg hover:bg-dark_green"
          >
            Salvar Produto
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="/products" className="text-dark_blue hover:text-dark_green">
            Cancelar
          </a>
        </div>
      </div>
    </div>
  );
}
