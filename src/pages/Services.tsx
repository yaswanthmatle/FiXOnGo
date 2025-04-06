import React from 'react';
import { Star, MapPin, Phone } from 'lucide-react';

const Services = () => {
  const technicians = [
    {
      name: "John Smith",
      specialization: "Home Appliances",
      experience: "8 years",
      rating: 4.8,
      location: "Downtown Area",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sarah Johnson",
      specialization: "Electronics",
      experience: "6 years",
      rating: 4.9,
      location: "Westside",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Mike Davis",
      specialization: "Industrial Equipment",
      experience: "10 years",
      rating: 4.7,
      location: "Eastside",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Expert Technicians</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technicians.map((tech, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={tech.image}
              alt={tech.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{tech.name}</h2>
              <p className="text-indigo-600 font-medium mb-4">{tech.specialization}</p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>{tech.rating} / 5.0 • {tech.experience}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{tech.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>Available for service</span>
                </div>
              </div>
              <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;