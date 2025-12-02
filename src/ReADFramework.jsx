import React, { useState } from 'react';
import { ExternalLink, Heart, Share2, Sparkles } from 'lucide-react';

const ReADFramework = () => {
  const [likedAds, setLikedAds] = useState(new Set());
  const [selectedLayout, setSelectedLayout] = useState('horizontal');

  const sampleAds = [
    {
      id: 1,
      title: "Smart Watch Pro",
      description: "Track your health, control your life",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
      link: "#",
      gradient: "from-cyan-400 via-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Premium Coffee Beans",
      description: "Mountain grown, rich flavor",
      category: "Food & Beverage",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800",
      link: "#",
      gradient: "from-amber-400 via-orange-500 to-red-500"
    },
    {
      id: 3,
      title: "Nordic Home Design",
      description: "Minimalist lifestyle aesthetic",
      category: "Home & Living",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
      link: "#",
      gradient: "from-emerald-400 via-teal-500 to-cyan-600"
    },
    {
      id: 4,
      title: "Fitness Membership",
      description: "Shape your better self",
      category: "Health & Sports",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
      link: "#",
      gradient: "from-pink-400 via-rose-500 to-red-600"
    },
    {
      id: 5,
      title: "Wireless Earbuds",
      description: "Crystal clear sound quality",
      category: "Audio",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800",
      link: "#",
      gradient: "from-violet-400 via-purple-500 to-fuchsia-600"
    },
    {
      id: 6,
      title: "Travel Adventure",
      description: "Explore the world with us",
      category: "Travel",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
      link: "#",
      gradient: "from-sky-400 via-blue-500 to-indigo-600"
    }
  ];

  const toggleLike = (id) => {
    const newLiked = new Set(likedAds);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedAds(newLiked);
  };

  const HorizontalCard = ({ ad }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'translateY(-12px)' : 'translateY(0)',
          transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-56">
          <div className="absolute inset-0 flex">
            <div className="w-2/5 relative overflow-hidden">
              <img 
                src={ad.image} 
                alt={ad.title}
                className="w-full h-full object-cover transition-transform duration-700"
                style={{
                  transform: isHovered ? 'scale(1.15)' : 'scale(1)'
                }}
              />
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${ad.gradient} opacity-60 mix-blend-multiply transition-opacity duration-500`}
                style={{
                  opacity: isHovered ? 0.4 : 0.6
                }}
              ></div>
            </div>

            <div className="flex-1 p-6 flex flex-col justify-between relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${ad.gradient} opacity-0 transition-opacity duration-500`}
                style={{
                  opacity: isHovered ? 0.05 : 0
                }}
              ></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full text-xs font-semibold text-gray-700">
                    {ad.category}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleLike(ad.id); }}
                      className={`p-2 rounded-full transition-all duration-300 ${
                        likedAds.has(ad.id) 
                          ? 'bg-red-50 text-red-500' 
                          : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                      }`}
                    >
                      <Heart size={14} fill={likedAds.has(ad.id) ? 'currentColor' : 'none'} />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-full text-gray-400 hover:bg-gray-200 transition-all duration-300">
                      <Share2 size={14} />
                    </button>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {ad.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {ad.description}
                </p>
              </div>

              <div className="flex items-center justify-between relative z-10">
                <button className={`px-5 py-2 bg-gradient-to-r ${ad.gradient} text-white rounded-xl font-medium text-sm flex items-center gap-2 hover:shadow-lg transition-all duration-300`}
                  style={{
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                  }}
                >
                  Learn More <ExternalLink size={14} />
                </button>
                <span className="text-xs text-gray-400 font-medium">Sponsored</span>
              </div>
            </div>
          </div>

          <div 
            className={`absolute inset-0 border-2 rounded-2xl pointer-events-none transition-all duration-500`}
            style={{
              borderColor: isHovered ? 'rgba(147, 51, 234, 0.3)' : 'transparent'
            }}
          ></div>
        </div>

        {isHovered && (
          <div 
            className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10"
            style={{
              animation: 'pulse 2s ease-in-out infinite'
            }}
          ></div>
        )}
      </div>
    );
  };

  const VerticalCard = ({ ad }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'translateY(-16px) rotateX(2deg)' : 'translateY(0) rotateX(0deg)',
          transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
          style={{
            height: '420px'
          }}
        >
          <div className="relative h-3/5 overflow-hidden">
            <img 
              src={ad.image} 
              alt={ad.title}
              className="w-full h-full object-cover transition-all duration-700"
              style={{
                transform: isHovered ? 'scale(1.2)' : 'scale(1)'
              }}
            />
            <div 
              className={`absolute inset-0 bg-gradient-to-t ${ad.gradient} opacity-70 mix-blend-multiply transition-opacity duration-500`}
              style={{
                opacity: isHovered ? 0.5 : 0.7
              }}
            ></div>
            
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-gray-800 shadow-lg">
                {ad.category}
              </span>
            </div>

            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={(e) => { e.stopPropagation(); toggleLike(ad.id); }}
                className={`p-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
                  likedAds.has(ad.id) 
                    ? 'bg-white/95 text-red-500' 
                    : 'bg-white/40 text-white hover:bg-white/60'
                }`}
              >
                <Heart size={16} fill={likedAds.has(ad.id) ? 'currentColor' : 'none'} />
              </button>
              <button className="p-2.5 bg-white/40 backdrop-blur-md rounded-full text-white hover:bg-white/60 transition-all duration-300">
                <Share2 size={16} />
              </button>
            </div>

            <div 
              className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500`}
              style={{
                opacity: isHovered ? 1 : 0
              }}
            ></div>
          </div>

          <div className="h-2/5 p-5 flex flex-col justify-between relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${ad.gradient} opacity-0 transition-opacity duration-500`}
              style={{
                opacity: isHovered ? 0.06 : 0
              }}
            ></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {ad.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {ad.description}
              </p>
            </div>

            <div className="flex items-center justify-between relative z-10">
              <button className={`flex-1 mr-3 py-2.5 bg-gradient-to-r ${ad.gradient} text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300`}
                style={{
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                View Details <ExternalLink size={14} />
              </button>
              <span className="text-xs text-gray-400 font-semibold">Ad</span>
            </div>
          </div>

          <div 
            className={`absolute inset-0 border-2 rounded-3xl pointer-events-none transition-all duration-500`}
            style={{
              borderColor: isHovered ? 'rgba(147, 51, 234, 0.4)' : 'transparent'
            }}
          ></div>
        </div>

        {isHovered && (
          <div 
            className="absolute -inset-3 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[2rem] blur-2xl -z-10"
            style={{
              animation: 'glow 2s ease-in-out infinite'
            }}
          ></div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-lg mb-4">
            <Sparkles className="text-purple-600" size={20} />
            <span className="text-sm font-semibold text-gray-700">Advertisement Framework</span>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
            ReAD Framework
          </h1>
          <p className="text-xl text-gray-600 mb-2 font-medium">Redesign Advertisement Experience</p>
          <p className="text-sm text-gray-500">Beautiful Design • Better CTR • Enhanced UX</p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedLayout('horizontal')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              selectedLayout === 'horizontal'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Horizontal Cards
          </button>
          <button
            onClick={() => setSelectedLayout('vertical')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              selectedLayout === 'vertical'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Vertical Cards
          </button>
        </div>

        {selectedLayout === 'horizontal' ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6"></h2>
            {sampleAds.map(ad => (
              <HorizontalCard key={ad.id} ad={ad} />
            ))}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6"></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleAds.map(ad => (
                <VerticalCard key={ad.id} ad={ad} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Framework Features</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                ✨
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Beautiful Design</h4>
              <p className="text-sm text-gray-600">Modern gradients and smooth animations</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                📐
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Flexible Layouts</h4>
              <p className="text-sm text-gray-600">Horizontal and vertical card options</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                🎯
              </div>
              <h4 className="font-bold text-gray-800 mb-2">High Engagement</h4>
              <p className="text-sm text-gray-600">Interactive hover effects and CTAs</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                🚀
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Easy Integration</h4>
              <p className="text-sm text-gray-600">Plug and play on any platform</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes glow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(0.95);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default ReADFramework;