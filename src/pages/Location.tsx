import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Track Your Service</h1>
          
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-xl font-semibold">Current Location</h2>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Map will be displayed here</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Pickup Details</h3>
              <div className="space-y-2">
                <p className="text-gray-600"><strong>Address:</strong> 123 Main St, Downtown</p>
                <p className="text-gray-600"><strong>Time:</strong> 10:30 AM</p>
                <p className="text-gray-600"><strong>Status:</strong> <span className="text-green-600">On the way</span></p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Delivery Agent</h3>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
                  alt="Delivery Agent"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium">Robert Wilson</p>
                  <p className="text-gray-600">ID: DL1234</p>
                </div>
              </div>
            </div>
          </div>

          <button className="mt-8 flex items-center justify-center w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
            <Navigation className="h-5 w-5 mr-2" />
            Track Live Location
          </button>
        </div>
      </div>
    </div>
  );
}

export default Location;