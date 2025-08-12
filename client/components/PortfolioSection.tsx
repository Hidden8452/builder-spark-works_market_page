import { Heart, Eye } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    mainImage: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    thumbnails: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=80&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=100&h=80&fit=crop",
      "https://images.unsplash.com/photo-1555214025-f198f5c19cf1?w=100&h=80&fit=crop"
    ],
    title: "USA, LA, Tavern Road",
    description: "Dance music",
    user: "Silver Jim",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    likes: "17.5k",
    verified: true
  },
  {
    id: 2,
    mainImage: "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=400&h=300&fit=crop",
    thumbnails: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=100&h=80&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=100&h=80&fit=crop",
      "https://images.unsplash.com/photo-1555214025-f198f5c19cf1?w=100&h=80&fit=crop"
    ],
    title: "USA, LA, Tavern Road",
    description: "Nightmarish",
    user: "Freelance Multiplier",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c1d7?w=40&h=40&fit=crop&crop=face",
    likes: "12.7k",
    verified: true
  },
  {
    id: 3,
    mainImage: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    thumbnails: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=80&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=100&h=80&fit=crop",
      "https://images.unsplash.com/photo-1555214025-f198f5c19cf1?w=100&h=80&fit=crop"
    ],
    title: "USA, LA, Jamerson street",
    description: "Magnificent Sunset",
    user: "Jerome Taskent",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    likes: "11.5k",
    verified: true
  },
  {
    id: 4,
    mainImage: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    thumbnails: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=80&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=100&h=80&fit=crop",
      "https://images.unsplash.com/photo-1555214025-f198f5c19cf1?w=100&h=80&fit=crop"
    ],
    title: "USA, LA, Jeremy road",
    description: "Generative",
    user: "Silver Jim",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    likes: "15.8k",
    verified: true
  },
  {
    id: 5,
    mainImage: "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=400&h=300&fit=crop",
    thumbnails: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=100&h=80&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=100&h=80&fit=crop",
      "https://images.unsplash.com/photo-1555214025-f198f5c19cf1?w=100&h=80&fit=crop"
    ],
    title: "USA, NY, Manhattan street",
    description: "Nightmarish",
    user: "Freelance Multiplier",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c1d7?w=40&h=40&fit=crop&crop=face",
    likes: "22.1k",
    verified: true
  },
  {
    id: 6,
    mainImage: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
    thumbnails: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=80&fit=crop",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=100&h=80&fit=crop",
      "https://images.unsplash.com/photo-1555214025-f198f5c19cf1?w=100&h=80&fit=crop"
    ],
    title: "USA, NY, Times Square",
    description: "Magnificent Sunset",
    user: "Jerome Taskent",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    likes: "18.7k",
    verified: true
  }
];

export function PortfolioSection() {
  return (
    <section className="bg-navy-900 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Portfolio</h2>
          <button className="text-cyan-500 hover:text-cyan-400 transition-colors">
            Build new thing →
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-navy-800 rounded-lg overflow-hidden hover:bg-navy-700 transition-all duration-300 hover:scale-105 cursor-pointer">
              {/* Main Image */}
              <div className="relative">
                <img
                  src={item.mainImage}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <button className="bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="p-4">
                <div className="flex space-x-2 mb-4">
                  {item.thumbnails.map((thumb, index) => (
                    <div key={index} className="relative">
                      <img
                        src={thumb}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-16 h-12 object-cover rounded"
                      />
                      {index === 2 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded">
                          <span className="text-white text-xs font-semibold">+4</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img 
                        src={item.avatar} 
                        alt={item.user}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-gray-400 text-sm">{item.user}</span>
                      {item.verified && (
                        <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-1 text-gray-400 text-sm">
                      <Eye className="w-4 h-4" />
                      <span>{item.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
