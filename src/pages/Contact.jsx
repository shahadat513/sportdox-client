
const Contact = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 leading-8 text-center mb-8">
          We`d love to hear from you! If you have any questions, concerns, or feedback, feel free to reach out to us using the form below or the contact information provided.
        </p>
        <div className="bg-white shadow-md rounded-lg p-6">
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
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-700">
            <strong>Email:</strong> support@sport-dox.com
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> (+880) 1956624479
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> Mirpur-10, Dhaka
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

