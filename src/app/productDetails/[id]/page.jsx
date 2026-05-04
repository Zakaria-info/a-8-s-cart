import React from 'react';
import products from '@/data/product.json';

const ProductDetailsPage = ({ params }) => {
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-orange-200">
      <div className="p-8 rounded-xl bg-white max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-orange-500">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;