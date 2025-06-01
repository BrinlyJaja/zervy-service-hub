
import { Shield, MapPin, Search, Star, Clock, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Certified Artisans",
      description: "All service providers are verified and certified for quality assurance",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Location-Based Search",
      description: "Find services near you with our smart location-based matching",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Star,
      title: "Real Reviews",
      description: "Authentic customer reviews to help you make informed decisions",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Search,
      title: "Stress-Free Discovery",
      description: "Effortlessly find the right service provider for your needs",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Get connected with available artisans in real-time",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: Users,
      title: "Trusted Community",
      description: "Join thousands of satisfied customers across Nigeria",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Why Choose Zervy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing how people connect with service providers across Africa, 
            starting with Nigeria and expanding continent-wide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
