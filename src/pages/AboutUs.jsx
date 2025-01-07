
const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-8 text-center mb-8">
          Welcome to <strong>Sport Dox</strong>! We specialize in helping you navigate the complexities 
          of Medicare insurance. With personalized one-on-one services, our goal is to provide you with the 
          best options tailored to your needs. 
        </p>
        <div className="flex flex-col md:flex-row items-center md:justify-around">
          <div className="text-center mb-6 md:mb-0">
            <img
              src="https://ibb.co.com/rfpcmny"
              alt="Our Mission"
              className="w-36 h-36 mx-auto rounded-full mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            <p className="text-gray-600 mt-2">
              To empower individuals with the knowledge and support needed to make confident Medicare decisions.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://ibb.co.com/QmJB6bb"
              alt="Our Values"
              className="w-36 h-36 mx-auto rounded-full mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800">Our Values</h3>
            <p className="text-gray-600 mt-2">
              Integrity, transparency, and customer-centric service are the core of everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
