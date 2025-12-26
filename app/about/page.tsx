import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import {
  FaCheckCircle,
  FaLightbulb,
  FaHeart,
  FaGlobe,
} from 'react-icons/fa';

export default function AboutPage() {
  const values = [
    {
      icon: FaCheckCircle,
      title: 'Quality',
      description:
        'We maintain the highest standards in content curation and publishing excellence.',
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description:
        'Embracing new voices, formats, and storytelling methods.',
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description:
        'Dedicated to connecting readers with stories that matter.',
    },
    {
      icon: FaGlobe,
      title: 'Diversity',
      description:
        'Publishing diverse voices and perspectives from Indonesia and beyond.',
    },
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="py-16 bg-linear-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About NeudevPublisher
              </h1>
              <p className="text-xl text-blue-100">
                Indonesia&apos;s independent publisher bringing diverse stories
                and knowledge to Indonesian readers.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4">
                  NeudevPublisher was born from a simple belief: that great
                  stories deserve to be told, and quality books should be
                  accessible to all. Based in the heart of Jakarta, we&apos;re
                  an independent publisher committed to bringing diverse voices
                  and perspectives to Indonesian readers.
                </p>
                <p className="text-gray-600 mb-4">
                  From gripping fiction to practical how-to guides, from
                  stunning coffee table books to insightful business
                  literature, we curate and publish books that inform,
                  inspire, and entertain.
                </p>
                <p className="text-gray-600">
                  We work with both established and emerging authors,
                  providing a platform for Indonesian writers and bringing
                  international works to local audiences.
                </p>
              </div>

              <div className="relative h-100 rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1654366698665-e6d611a9aaa9"
                  alt="Students learning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md p-6 text-center"
                >
                  <value.icon className="text-5xl text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600">
                  To publish high-quality books across diverse genres that
                  inspire, educate, and entertain readers throughout
                  Indonesia, while supporting both local and international
                  authors.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-600">
                  To be Indonesia&apos;s most trusted independent publisher,
                  recognized for our commitment to literary excellence,
                  diverse voices, and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
