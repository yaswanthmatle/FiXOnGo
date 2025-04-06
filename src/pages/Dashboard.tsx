import React from 'react';
import { CreditCard, Wallet, Smartphone, Clock } from 'lucide-react';

const Dashboard = () => {
  const paymentMethods = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      name: "Credit/Debit Card",
      description: "Visa, Mastercard, RuPay"
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      name: "UPI",
      description: "Google Pay, PhonePe, Paytm"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      name: "Mobile Wallets",
      description: "Paytm, Amazon Pay"
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      date: "2024-03-15",
      service: "Refrigerator Repair",
      amount: "₹1,200"
    },
    {
      id: 2,
      date: "2024-03-10",
      service: "TV Service",
      amount: "₹800"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>
          <div className="space-y-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center p-4 border rounded-lg hover:border-indigo-500 cursor-pointer transition-colors">
                <div className="text-indigo-600 mr-4">{method.icon}</div>
                <div>
                  <h3 className="font-semibold">{method.name}</h3>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
            Add New Payment Method
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Recent Transactions</h2>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-gray-400 mr-3" />
                  <div>
                    <p className="font-medium">{transaction.service}</p>
                    <p className="text-sm text-gray-600">{transaction.date}</p>
                  </div>
                </div>
                <p className="font-semibold">{transaction.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;