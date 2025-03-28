import { useState } from "react";

type EditProductProps = {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    inventory: number;
  };
  onSave: (updatedProduct: {
    id: number;
    name: string;
    description: string;
    price: number;
    inventory: number;
  }) => void;
  onClose: () => void;
};

export function EditProduct({ product, onSave, onClose }: EditProductProps) {
  const [updatedProduct, setUpdatedProduct] = useState({
    ...product,
    price: product.price.toFixed(2).replace(".", ","), // Formatação do preço
    quantity: product.inventory, // Quantidade do produto
  });

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9,]/g, ""); 
    const commaCount = value.split(",").length - 1;

    if (commaCount > 1) return; 
    setUpdatedProduct({ ...updatedProduct, price: value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Editar Produto</h2>

        <label className="block text-gray-700">Nome</label>
        <input
          type="text"
          className="w-full text-gray-700 border px-4 py-2 mb-2"
          value={updatedProduct.name}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
        />

        <label className="block text-gray-700">Descrição</label>
        <textarea
          className="w-full text-gray-700 border px-4 py-2 mb-2"
          value={updatedProduct.description}
          onChange={(e) => setUpdatedProduct({ ...updatedProduct, description: e.target.value })}
        />

        <label className="block text-gray-700">Preço</label>
        <input
          type="text"
          className="w-full text-gray-700 border px-4 py-2 mb-2"
          value={updatedProduct.price}
          onChange={handlePriceChange}
        />

        <label className="block text-gray-700">Quantidade</label>
        <input
          type="number"
          className="w-full text-gray-700 border px-4 py-2 mb-4"
          value={updatedProduct.quantity} // Valor da quantidade
          onChange={(e) => {
            const value = e.target.value === "" ? 0 : parseInt(e.target.value);
            setUpdatedProduct({ ...updatedProduct, quantity: value }); // Atualizando a quantidade
          }}
        />

        <div className="flex justify-between">
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Cancelar
          </button>
          <button
            onClick={() =>
              onSave({
                ...updatedProduct, // Mantém os outros campos
                price: parseFloat(updatedProduct.price.replace(",", ".")), // Corrige o preço
                inventory: updatedProduct.quantity, // Envia a quantidade correta
              })
            }
            className="bg-dark_green text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
