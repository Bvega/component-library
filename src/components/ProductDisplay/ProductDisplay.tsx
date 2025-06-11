// src/components/ProductDisplay/ProductDisplay.tsx
import React from 'react';
import type { ProductDisplayProps } from '../../types';

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children
}) => {
  return (
    <div className="border p-4 rounded shadow bg-white flex flex-col gap-2">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-40 object-cover rounded"
        />
      )}
      <div>
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-blue-600 font-medium">${product.price.toFixed(2)}</p>
        {showDescription && (
          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        )}
        {showStockStatus && (
          <p className={`text-sm mt-1 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </p>
        )}
        {children && <div className="mt-2">{children}</div>}
      </div>
      {onAddToCart && (
        <button
          onClick={() => onAddToCart(product.id)}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
