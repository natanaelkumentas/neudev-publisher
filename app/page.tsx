import Link from 'next/link';
import {
  FaBookOpen,
  FaGraduationCap,
  FaAward,
  FaUsers,
} from 'react-icons/fa';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ImageWithFallback } from '@/components/ImageWithFallback';

export default function HomePage() {
  const stats = [
    { icon: FaBookOpen, value: '500+', label: 'Published Books' },
    { icon: FaGraduationCap, value: '100+', label: 'Authors' },
    { icon: FaAward, value: '25+', label: 'Awards Won' },
    { icon: FaUsers, value: '50K+', label: 'Happy Readers' },
  ];

  const categories = [
    { name: 'Fiction', count: 120, color: 'bg-blue-500' },
    { name: 'Business', count: 85, color: 'bg-green-500' },
    { name: 'Cooking', count: 65, color: 'bg-orange-500' },
    { name: 'Photography', count: 45, color: 'bg-purple-500' },
    { name: 'Self-Help', count: 70, color: 'bg-pink-500' },
    { name: 'Travel', count: 55, color: 'bg-red-500' },
  ];

  const features = [
    {
      title: 'Curated Selection',
      description:
        'Every book is carefully selected for quality and relevance.',
    },
    {
      title: 'Local & International',
      description:
        'Featuring Indonesian authors and translated international works.',
    },
    {
      title: 'Fast Delivery',
      description: 'Quick shipping across Indonesia.',
    },
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative h-125 bg-glinear-to-r from-blue-900 to-blue-700 text-white">
          <div className="absolute inset-0 opacity-20">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1666198259234-f7033c78b94e"
              alt="Books Library"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Discover Stories That Inspire
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Jakarta-based publisher curating quality books across diverse
                genres — from captivating fiction to practical guides.
              </p>
              <Link
                href="/catalog"
                className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Browse Our Catalog
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon className="text-5xl text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-semibold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Our Categories
              </h2>
              <p className="text-gray-600">
                Quality books across all genres and interests
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat, i) => (
                <Link
                  key={i}
                  href="/catalog"
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`w-12 h-12 ${cat.color} rounded-lg mb-4`}
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-gray-600">
                    {cat.count} books available
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-gray-600">
                Discover the benefits of our book collection
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold mb-4">
              Ready to Explore Our Collection?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Discover hundreds of books across fiction, non-fiction,
              and specialty genres.
            </p>
            <Link
              href="/catalog"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Full Catalog
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
