

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: 'url(/src/assets/work.png)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="relative z-10">
          <h1 
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl font-pp-neue" 
          >
            Unleash Your Creativity
          </h1>
          <p 
            className="my-4 text-xl text-white font-pp-neue" 
          >
            Build modern web applications with cutting-edge tools and technologies.
          </p>
          <p 
            className="mt-6 text-lg text-white max-w-3xl mx-auto font-pp-neue" 
          >
            Join a community of innovative developers and bring your ideas to life. Whether you’re building a personal project or the next big thing, our platform provides the resources you need to succeed.
          </p>
          <button 
            className="mt-6 bg-white text-indigo-700 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
