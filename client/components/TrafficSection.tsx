import { ChevronDown, User } from "lucide-react";

const trafficData = [
  {
    id: 1,
    event: "6 Purchase",
    user: "Collector Singapore",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    price: "⊕ 0.28 ETH",
    item: "SS PICASSO",
    usd: "$ USDDC",
    time: "2 seconds",
  },
  {
    id: 2,
    event: "☁ Offer",
    user: "Happy Bidding Artist",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b332c1d7?w=40&h=40&fit=crop&crop=face",
    price: "⊕ 0.25 ETH",
    item: "SS PICASSO",
    usd: "$ USDDC",
    time: "2 seconds",
  },
  {
    id: 3,
    event: "6 Purchase",
    user: "Corp Luxe Amy",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    price: "⊕ 3.22 ETH",
    item: "SS PICASSO",
    usd: "$ USDDC",
    time: "2 seconds",
  },
  {
    id: 4,
    event: "☁ Offer",
    user: "Yamashi Supernatural",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    price: "⊕ 9.22 ETH",
    item: "SS PICASSO",
    usd: "$ USDDC",
    time: "2 seconds",
  },
  {
    id: 5,
    event: "6 Purchase",
    user: "Jorg Roberto Smith",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    price: "⊕ 8.22 ETH",
    item: "SS PICASSO",
    usd: "$ USDDC",
    time: "2 seconds",
  },
  {
    id: 6,
    event: "6 Purchase",
    user: "Humnah Felix",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face",
    price: "⊕ 1.22 ETH",
    item: "SS PICASSO",
    usd: "$ USDDC",
    time: "2 seconds",
  },
  {
    id: 7,
    event: "☁ Offer",
    user: "Team PIXEL",
    avatar:
      "https://images.unsplash.com/photo-1507149833265-60c372daea22?w=40&h=40&fit=crop&crop=face",
    price: "⊕ 1.22 ETH",
    item: "SS PICASSO",
    usd: "$ USDDC",
    time: "2 seconds",
  },
  {
    id: 8,
    event: "6 Purchase",
    user: "Georgial Desmond",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face",
    price: "⊕ 2.22 ETH",
    item: "SS PICASSO",
    usd: "$ USDDC",
    time: "2 seconds",
  },
  {
    id: 9,
    event: "6 Purchase",
    user: "Pokemon Generation",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=40&h=40&fit=crop&crop=face",
    price: "⊕ 1.22 ETH",
    item: "SS PICASSO",
    usd: "$ USDDC",
    time: "2 seconds",
  },
  {
    id: 10,
    event: "6 Purchase",
    user: "Corp Luxe Amy",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    price: "⊕ 2.22 ETH",
    item: "SS PICASSO",
    usd: "$ USDDC",
    time: "2 seconds",
  },
];

export function TrafficSection() {
  return (
    <section className="bg-navy-900 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">
            <span className="text-cyan-500">REAL-TIME</span>{" "}
            <span className="text-white">TRAFFIC INSIDE</span>
          </h2>
        </div>

        {/* Table Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <span className="text-white font-semibold">Trading Activity</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Filter by</span>
              <button className="flex items-center space-x-2 bg-navy-800 border border-navy-700 rounded px-3 py-2 text-white hover:border-cyan-500 transition-colors">
                <span>None</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Sort by</span>
              <button className="flex items-center space-x-2 bg-navy-800 border border-navy-700 rounded px-3 py-2 text-white hover:border-cyan-500 transition-colors">
                <span>Latest</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-navy-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-navy-700">
                <tr>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">
                    Event
                  </th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">
                    User
                  </th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">
                    Price
                  </th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">
                    Item
                  </th>
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {trafficData.map((row, index) => (
                  <tr
                    key={row.id}
                    className={`border-b border-navy-700 hover:bg-navy-700 transition-colors ${
                      index % 2 === 0 ? "bg-navy-800" : "bg-navy-750"
                    }`}
                  >
                    <td className="py-4 px-6">
                      <span
                        className={`px-2 py-1 rounded text-sm ${
                          row.event.includes("Purchase")
                            ? "bg-cyan-500/20 text-cyan-400"
                            : "bg-pink-500/20 text-pink-400"
                        }`}
                      >
                        {row.event}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <img
                          src={row.avatar}
                          alt={row.user}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-white">{row.user}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-white">
                        <div className="font-semibold">{row.price}</div>
                        <div className="text-sm text-gray-400">{row.usd}</div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-white">
                        <div className="font-semibold">{row.item}</div>
                        <div className="text-sm text-gray-400">{row.usd}</div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-gray-400">{row.time}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
