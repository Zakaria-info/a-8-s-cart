import React from 'react';
import products from '@/data/product.json';
import Image from 'next/image';

const ProductDetailsPage = async ({ params }) => {
  const resolvedParams = await params;
  const rawId = resolvedParams?.id;
  const productId = Array.isArray(rawId) ? rawId[0] : rawId;
  const normalizedId = productId ? String(productId).trim() : "";
  const product = products.find((p) => String(p.id) === normalizedId);

  if (!product) {
    return (
      <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-orange-200">
        <div className="p-8 rounded-xl bg-white max-w-2xl w-full text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <p className="text-base-content/70">No product exists for ID: <strong>{normalizedId || "unknown"}</strong>.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-orange-200">
      <div className="p-8 rounded-xl bg-white max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <Image src={product.image} alt={product.name} width={500} height={300} className="w-full h-64 object-cover mb-4" />
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-orange-500">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;