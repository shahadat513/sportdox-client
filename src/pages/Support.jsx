

const Support = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Support</h1>
        <p className="text-lg text-gray-700 leading-8 text-center mb-8">
          At <strong>Smart Medigap Plans</strong>, we’re here to help! Whether you need assistance with your 
          Medicare plans, have questions, or require guidance, our support team is ready to assist.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* FAQ Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>How do I get started with Medicare plans?</li>
              <li>What is the difference between Medigap and Medicare Advantage?</li>
              <li>Can I switch my Medicare plan anytime?</li>
              <li>How do I contact customer service?</li>
              <li>What documents do I need to apply?</li>
            </ul>
          </div>

          {/* Contact Options */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              Need more help? Reach out to us via any of the methods below:
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Email:</strong> support@sport-dox.com
              </li>
              <li>
                <strong>Phone:</strong> (+880) 1956624479
              </li>
              <li>
                <strong>Address:</strong> Mirpur-10, Dhaka
              </li>
            </ul>
          </div>
        </div>

        {/* Support Form */}
        <div className="mt-10 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Submit a Support Request</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="issue" className="block text-gray-700 font-medium mb-2">
                Issue/Query
              </label>
              <textarea
                id="issue"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your issue or query"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;

