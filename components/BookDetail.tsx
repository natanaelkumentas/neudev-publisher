'use client';

import {
  FaTimes,
  FaShoppingCart,
  FaUser,
  FaBarcode,
} from 'react-icons/fa';
import { ImageWithFallback } from '@/components/ImageWithFallback';

interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  grade: string;
  price: number;
  cover: string;
  description: string;
  isbn: string;
}

interface BookDetailProps {
  book: Book;
  onClose: () => void;
}

export function BookDetail({ book, onClose }: BookDetailProps) {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);

  const handleAddToCart = () => {
    alert(`Added "${book.title}" to cart!`);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to checkout for "${book.title}"`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-4xl w-full my-8 relative">

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:text-gray-700 transition"
        >
          <FaTimes className="text-xl" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">

          {/* Book Cover */}
          <div>
            <div className="relative h-96 rounded-lg overflow-hidden bg-gray-100 mb-4">
              <ImageWithFallback
                src={book.cover}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex gap-3">
              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {book.category}
              </span>
              <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {book.grade}
              </span>
            </div>
          </div>

          {/* Book Details */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {book.title}
            </h2>

            <div className="flex items-center gap-2 mb-4">
              <FaUser className="text-gray-400" />
              <p className="text-gray-600">by {book.author}</p>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <FaBarcode className="text-gray-400" />
              <p className="text-sm text-gray-500">
                ISBN: {book.isbn}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Description
              </h3>
              <p className="text-gray-600">
                {book.description}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Book Details
              </h3>

              <div className="text-sm space-y-2">
                <div className="flex justify-between border-b py-2">
                  <span className="text-gray-600">Category</span>
                  <span className="text-gray-900">{book.category}</span>
                </div>
                <div className="flex justify-between border-b py-2">
                  <span className="text-gray-600">Target Audience</span>
                  <span className="text-gray-900">{book.grade}</span>
                </div>
                <div className="flex justify-between border-b py-2">
                  <span className="text-gray-600">Format</span>
                  <span className="text-gray-900">Paperback</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Language</span>
                  <span className="text-gray-900">Indonesian</span>
                </div>
              </div>
            </div>

            {/* Price & Actions */}
            <div className="mt-auto">
              <div className="mb-4">
                <span className="text-3xl font-semibold text-blue-600">
                  {formatPrice(book.price)}
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center justify-center gap-2"
                >
                  <FaShoppingCart />
                  Add to Cart
                </button>

                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
