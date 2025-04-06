import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool as Tool, Clock, Truck, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Expert Electrical Repairs at Your Doorstep</h1>
        <p className="text-xl text-gray-600 mb-8">Fast, reliable, and professional repair service for all your electrical items</p>
        <Link
          to="/registration"
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Book a Repair
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          {
            icon: <Tool className="h-8 w-8" />,
            title: "Expert Technicians",
            description: "Skilled professionals with years of experience"
          },
          {
            icon: <Clock className="h-8 w-8" />,
            title: "Quick Service",
            description: "Same-day pickup and fast repairs"
          },
          {
            icon: <Truck className="h-8 w-8" />,
            title: "Door-to-Door",
            description: "Convenient pickup and delivery service"
          },
          {
            icon: <Shield className="h-8 w-8" />,
            title: "Guaranteed Work",
            description: "90-day warranty on all repairs"
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="text-indigo-600 mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2000&q=80"
          alt="Electrical repair"
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose FixOnGo?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Professional Service</h3>
              <p className="text-gray-600">Our team of certified technicians ensures quality repairs for all your electrical items.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">Get upfront cost estimates with no hidden charges.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;