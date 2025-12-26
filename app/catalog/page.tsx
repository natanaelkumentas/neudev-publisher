'use client';

import { useState, useMemo } from 'react';
import { FaSearch, FaFilter, FaBook } from 'react-icons/fa';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import booksData from '@/data/books.json';
import { BookDetail } from '@/components/BookDetail';

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

export default function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGrade, setSelectedGrade] = useState('All');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const books = booksData as Book[];

  const categories = ['All', ...Array.from(new Set(books.map(b => b.category)))];
  const grades = ['All', ...Array.from(new Set(books.map(b => b.grade)))];

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || book.category === selectedCategory;

      const matchesGrade =
        selectedGrade === 'All' || book.grade === selectedGrade;

      return matchesSearch && matchesCategory && matchesGrade;
    });
  }, [books, searchTerm, selectedCategory, selectedGrade]);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Catalog
            </h1>
            <p className="text-xl text-blue-100">
              Explore our diverse collection across all genres
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search & Filter */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            {/* Search */}
            <div className="mb-6 relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-gray-700 mb-2">
                  <FaFilter className="text-gray-400" />
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-gray-700 mb-2 block">
                  Grade Level
                </label>
                <select
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  {grades.map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 text-gray-600">
              Showing {filteredBooks.length} of {books.length} books
            </div>
          </div>

          {/* Books */}
          {filteredBooks.length === 0 ? (
            <div className="text-center py-16">
              <FaBook className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-xl">
                No books found matching your criteria
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map(book => (
                <div
                  key={book.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <div className="h-64 bg-linear-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <FaBook className="text-6xl text-blue-600" />
                  </div>

                  <div className="p-5">
                    <div className="flex justify-between mb-2">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {book.category}
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {book.grade}
                      </span>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      by {book.author}
                    </p>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                      {book.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-blue-600">
                        {formatPrice(book.price)}
                      </span>
                      <button
                        onClick={() => setSelectedBook(book)}
                        className="text-sm bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal */}
        {selectedBook && (
          <BookDetail
            book={selectedBook}
            onClose={() => setSelectedBook(null)}
          />
        )}
      </main>

      <Footer />
    </>
  );
}
