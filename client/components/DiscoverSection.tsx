import {
  ChevronDown,
  Filter,
  Globe,
  Camera,
  MapPin,
  Clock,
} from "lucide-react";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
    title: "Tokyo, Shibuya",
    duration: "2.00 PM",
    likes: "5,574",
    photographer: "Hiroshi Yamamoto",
    verified: true,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1555214025-f198f5c19cf1?w=400&h=300&fit=crop",
    title: "Hong Kong, Tsang Street",
    duration: "7.00 PM",
    likes: "4,582",
    photographer: "Wu Ming Chen",
    verified: true,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop",
    title: "Dublin Airport",
    duration: "10.00 AM",
    likes: "3,891",
    photographer: "Seamus O'Brien",
    verified: true,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=400&h=300&fit=crop",
    title: "Prague, Metro station",
    duration: "2.00 PM",
    likes: "6,129",
    photographer: "Tomás Novák",
    verified: true,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1555214025-f198f5c19cf1?w=400&h=300&fit=crop",
    title: "Hong Kong, Yemachi shop",
    duration: "2.00 PM",
    likes: "2,847",
    photographer: "Li Wei",
    verified: true,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    title: "Prague, Metro station",
    duration: "2.00 PM",
    likes: "5,392",
    photographer: "Anna Procházka",
    verified: true,
  },
];

export function DiscoverSection() {
  return (
    <section className="bg-navy-900 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            DISCOVER <span className="text-cyan-500">Ad Space Globally</span>
          </h1>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-white hover:text-cyan-500 transition-colors">
              <span>Advanced Filter</span>
              <Filter className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-navy-800 border border-navy-700 rounded px-3 py-2 text-white hover:border-cyan-500 transition-colors">
                <span>Featured</span>
              </button>

              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <span>All times</span>
              </button>

              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Camera className="w-4 h-4" />
                <span>Art</span>
              </button>

              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <span>Photography</span>
              </button>

              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Globe className="w-4 h-4" />
                <span>3D</span>
              </button>

              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <span>Motion</span>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-white font-semibold">3,150,000 results</span>
            <button className="flex items-center space-x-2 bg-navy-800 border border-navy-700 rounded px-3 py-2 text-white hover:border-cyan-500 transition-colors">
              <span>Latest</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Secondary Filters */}
        <div className="flex items-center space-x-6 mb-8 text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">Advanced Filter</span>
            <Filter className="w-4 h-4 text-gray-400" />
          </div>
          <span className="text-cyan-500">Activity Price</span>
          <span className="text-gray-400">Show more</span>
          <span className="text-gray-400">Price range</span>
          <span className="text-gray-400">£69</span>
          <span className="text-gray-400">to</span>
          <span className="text-gray-400">£180</span>
          <span className="text-gray-400">Colours</span>
          <span className="text-gray-400">£18K</span>
          <span className="text-gray-400">1 week</span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="bg-navy-800 rounded-lg overflow-hidden hover:bg-navy-700 transition-colors cursor-pointer"
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-cyan-500 text-navy-900 px-2 py-1 rounded text-xs font-semibold">
                    OPEN
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {image.title}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{image.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>❤️ {image.likes}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                    <span className="text-gray-400 text-sm">
                      {image.photographer}
                    </span>
                    {image.verified && (
                      <svg
                        className="w-4 h-4 text-cyan-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-400 text-sm">Sep 15</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-navy-800 border border-navy-700 text-white px-6 py-3 rounded-lg hover:border-cyan-500 transition-colors">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}
