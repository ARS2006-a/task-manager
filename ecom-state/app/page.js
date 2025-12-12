'use client';

export default function Garage(){
  const toggleFaq = (faqNumber) => {
    const faqElement = document.getElementById(`faq-${faqNumber}`);
    if (faqElement.classList.contains('hidden')) {
      faqElement.classList.remove('hidden');
    } else {
      faqElement.classList.add('hidden');
    }
  };

  return (
    <div className="bg-white min-h-screen w-full relative">
      {/* Black Rounded Container */}
      <div className="bg-black h-[700px] mx-[50px] rounded-[80px] flex flex-col items-center pt-[20px]">
        
        {/* Header Section */}
        <div className="bg-blue-1000 h-[80px] w-full md:w-[1400px] flex flex-row justify-center items-center py-2 px-4">
          {/* Logo */}
          <img src="https://themehealer.com/php-template/crank-php/assets/images/resources/logo-1.png" alt="Logo"/>
          
          {/* Navigation Links */}
          <div className="hidden md:block font-bold text-white ml-[40px] text-sm">Home</div>
          <div className="hidden md:block font-bold text-white ml-[40px] text-sm">About Us</div>
          <div className="hidden md:block font-bold text-white ml-[40px] text-sm">Pages</div>
          <div className="hidden md:block font-bold text-white ml-[40px] text-sm">Services</div>
          <div className="hidden md:block font-bold text-white ml-[40px] text-sm">Shop</div>
          <div className="hidden md:block font-bold text-white ml-[40px] text-sm">Blog</div>
          <div className="hidden md:block font-bold text-white ml-[40px] text-sm">Contact</div>
          
          {/* Social Icons */}
          <div className=" w-10 h-10 bg-gray-600 text-white ml-[20px] mr-[10px] rounded-full flex items-center justify-center text-sm font-semibold cursor-pointer hover:bg-gray-700 transition-colors"></div>
          <div className=" w-10 h-10 bg-gray-600 text-white ml-[10px] mr-[10px] rounded-full flex items-center justify-center text-sm font-semibold cursor-pointer hover:bg-gray-700 transition-colors"></div>
          <div className=" w-10 h-10 bg-gray-600 text-white ml-[10px] mr-[10px] rounded-full flex items-center justify-center text-sm font-semibold cursor-pointer hover:bg-gray-700 transition-colors"></div>
          <div className=" w-10 h-10 bg-gray-600 text-white ml-[10px] mr-[30px] rounded-full flex items-center justify-center text-sm font-semibold cursor-pointer hover:bg-gray-700 transition-colors"></div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-row h-[60%] w-full justify-between items-center px-[20px] md:px-[50px] mt-[20px]">
          {/* Left Content */}
          <div className="flex flex-col w-full md:w-[50%]">
            {/* Main Heading */}
            <div className="text-white font-bold text-4xl md:text-6xl">
              Where Quality Is a <br/> Service Meets The <br/><span className="text-red-500">Open Road</span>
            </div>

            {/* Description */}
            <div className="text-white text-sm md:text-lg mt-[20px] md:mt-[30px] font-bold">
              Car service is essential for maintaining the performance and <br className="hidden md:block"/>
              longevity for your vehilcle.From oil changes car service.
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-[20px] md:mt-[30px]">
              <button className="border-2 border-red-500 text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-lg font-semibold rounded-full">
                Get Started
              </button>
              <div className="w-8 md:w-10 h-8 md:h-10 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-semibold cursor-pointer"></div>
            </div>
          </div>
          
          {/* Right Image - Hidden on mobile */}
          <div className="hidden md:block w-[45%]">
            <img src="https://themehealer.com/php-template/crank-php/assets/images/resources/main-slider-img-1.jpg" className="w-full h-[400px] object-cover rounded-lg" alt="Car Service"/>
          </div>
        </div>
      </div>
      
      {/* Statistics Section */}
      <div className="bg-white w-[90%] md:w-[1000px] h-auto md:h-[100px] rounded-md shadow-lg border border-gray-200 flex flex-col md:flex-row justify-evenly gap-4 md:gap-0 mx-auto absolute -mt-[50px] left-0 right-0 z-10 p-4 md:p-0">
        <div className="font-extrabold text-2xl md:text-4xl flex flex-col items-center justify-center">
          <div className="text-gray-700">600+</div>
          <div className="text-gray-700 text-sm md:text-lg">Team Members</div>
        </div>
        <div className="font-extrabold text-2xl md:text-4xl flex flex-col items-center justify-center">
          <div className="text-gray-700">2K+</div>
          <div className="text-gray-700 text-sm md:text-lg">Service Complete</div>
        </div>
        <div className="font-extrabold text-2xl md:text-4xl flex flex-col items-center justify-center">
          <div className="text-gray-700">53+</div>
          <div className="text-gray-700 text-sm md:text-lg">Winning award</div>
        </div>
        <div className="font-extrabold text-2xl md:text-4xl flex flex-col items-center justify-center">
          <div className="text-gray-700">3K+</div>
          <div className="text-gray-700 text-sm md:text-lg">Client Review</div>
        </div>
      </div>
      
      {/* Grey Spacer Section */}
      <div className="bg-gray-200 py-[80px]"></div>
      
      {/* Latest Services Section */}
      <div className="bg-white py-[100px] px-[100px]">
        <div className="text-center mb-[60px]">
          <h2 className="text-red-500 font-bold text-xl mb-2">LATEST SERVICE</h2>
          <h3 className="text-black font-bold text-4xl">Our Most Recent Service Offerings</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="group bg-white border-2 border-black hover:border-transparent hover:bg-gradient-to-br hover:from-gray-900 hover:via-gray-800 hover:to-blue-600 rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer p-8 text-center transform hover:scale-105 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-600 group-hover:bg-white group-hover:bg-none rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
              <span className="text-white group-hover:text-purple-500 text-2xl font-bold transition-colors duration-300"></span>
            </div>
            <h4 className="text-xl font-bold text-black group-hover:text-white mb-3 transition-colors duration-300">Transformation Advising</h4>
            <p className="text-gray-600 group-hover:text-white transition-colors duration-300">Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes Car service</p>
          </div>
          
          <div className="group bg-white border-2 border-black hover:border-transparent hover:bg-gradient-to-br hover:from-gray-900 hover:via-gray-800 hover:to-blue-600 rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer p-8 text-center transform hover:scale-105 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-600 group-hover:bg-white group-hover:bg-none rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
              <span className="text-white group-hover:text-purple-500 text-2xl font-bold transition-colors duration-300"></span>
            </div>
            <h4 className="text-xl font-bold text-black group-hover:text-white mb-3 transition-colors duration-300">Easy Drive Maintenance</h4>
            <p className="text-gray-600 group-hover:text-white transition-colors duration-300">Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes Car service</p>
          </div>
          
          <div className="group bg-white border-2 border-black hover:border-transparent hover:bg-gradient-to-br hover:from-gray-900 hover:via-gray-800 hover:to-blue-600 rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer p-8 text-center transform hover:scale-105 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-600 group-hover:bg-white group-hover:bg-none rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
              <span className="text-white group-hover:text-purple-500 text-2xl font-bold transition-colors duration-300"></span>
            </div>
            <h4 className="text-xl font-bold text-black group-hover:text-white mb-3 transition-colors duration-300">Elite Auto Services</h4>
            <p className="text-gray-600 group-hover:text-white transition-colors duration-300">Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes Car service</p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-200 py-[100px] px-[100px]">
        <div className="flex flex-col md:flex-row items-center gap-[40px] md:gap-[80px]">
          <div className="w-full md:w-[50%]">
            <h2 className="text-red-500 font-bold text-xl mb-4">About Us</h2>
            <h3 className="text-black font-bold text-4xl mb-6">Fast and Reliable Car<br/>
Care Your Car Our Priority</h3>
            <p className="text-gray-600 text-lg mb-6">Car service is essential for maintaining the performance and
longevity of your vehicle. From oil changes</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm"></span>
                </div>
                <span className="text-gray-700 text-lg">Fast and Reliable Car Care Your Car Our Priority</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm"></span>
                </div>
                <span className="text-gray-700 text-lg">Free with Our Services Care for Your Car</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm"></span>
                </div>
                <span className="text-gray-700 text-lg">Top-notch Care for Your Vehicle Your Vehicle</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm"></span>
                </div>
                <span className="text-gray-700 text-lg">Expert Service for Your Vehicle Drive Stress</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-sm"></span>
                </div>
                <span className="text-gray-700 text-lg">Your Trusted Car Service Provider Keeping</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <img src="https://themehealer.com/php-template/crank-php/assets/images/resources/about-one-img-1.jpg" className="w-full h-[400px] object-cover rounded-[20px]" alt="About Us"/>
          </div>
        </div>
        
        {/* Platform Options Box */}
        <div className="bg-black w-[90%] md:w-[800px] h-[80px] rounded-md shadow-lg border border-gray-200 flex flex-row mx-auto mt-[60px] overflow-x-auto">
          <div className="font-extrabold flex flex-col items-center justify-center min-w-full md:min-w-0 md:flex-1">
            <div className="text-white text-sm">Spotify</div>
          </div>
          <div className="font-extrabold flex flex-col items-center justify-center min-w-full md:min-w-0 md:flex-1 hidden md:flex">
            <div className="text-white text-sm">Apple Music</div>
          </div>
          <div className="font-extrabold flex flex-col items-center justify-center min-w-full md:min-w-0 md:flex-1 hidden md:flex">
            <div className="text-white text-sm">YouTube</div>
          </div>
          <div className="font-extrabold flex flex-col items-center justify-center min-w-full md:min-w-0 md:flex-1 hidden md:flex">
            <div className="text-white text-sm">SoundCloud</div>
          </div>
        </div>
      </div>

      {/* Latest Gallery Section */}
      <div className="bg-white py-[100px] px-[100px]">
        <div className="text-left mb-[60px]">
          <h2 className="text-red-500 font-bold text-xl mb-2">LATEST GALLERY</h2>
          <h3 className="text-black font-bold text-4xl mb-4">Quality Service, Every Time <br/>Drive Safe Stay Secure</h3>
          <p className="text-gray-600 text-lg">Car service is essential for maintaining the performance and <br/>longevity of your vehicle. From oil changes</p>
        </div>
        
        <div className="flex flex-col items-center space-y-6">
          <div className="group overflow-hidden rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 w-[400px] h-[400px]">
            <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Mechanic Working"/>
          </div>
          
          <div className="group overflow-hidden rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 w-[400px] h-[400px]">
            <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=400&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Car Engine Repair"/>
          </div>
          
          <div className="group overflow-hidden rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 w-[400px] h-[400px]">
            <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=400&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Auto Service"/>
          </div>
          
          <div className="group overflow-hidden rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 w-[400px] h-[400px]">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Car Maintenance"/>
          </div>
          
          <div className="group overflow-hidden rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 w-[400px] h-[400px]">
            <img src="https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=400&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Brake Service"/>
          </div>
          
          <div className="group overflow-hidden rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 w-[400px] h-[400px]">
            <img src="https://www.shutterstock.com/image-photo/portrait-shot-handsome-mechanic-working-600nw-1711144648.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Handsome Mechanic Working"/>
          </div>
        </div>
      </div>

      {/* Ask Question Section */}
      <div className="bg-gray-200 py-[100px] px-[100px]">
        <div className="text-center mb-[60px]">
          <h2 className="text-red-500 font-bold text-xl mb-2">ASK QUESTION</h2>
          <h3 className="text-black font-bold text-4xl mb-4">Got Questions? We&apos;ve Got <br/>Answers</h3>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white rounded-[20px] shadow-lg p-6">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(1)}>
              <h4 className="text-lg font-semibold text-black">01. What types of businesses do you support?</h4>
              <div className="text-xl text-gray-500">▼</div>
            </div>
            <div className="mt-4 text-gray-600 hidden" id="faq-1">
              <p>Car service is essential for maintaining the performance and Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes longevity of your vehicle. From oil changes</p>
            </div>
          </div>
          
          <div className="bg-white rounded-[20px] shadow-lg p-6">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(2)}>
              <h4 className="text-lg font-semibold text-black">02. What are the signs of brake wear?</h4>
              <div className="text-xl text-gray-500">▼</div>
            </div>
            <div className="mt-4 text-gray-600 hidden" id="faq-2">
              <p>Car service is essential for maintaining the performance and Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes longevity of your vehicle. From oil changes</p>
            </div>
          </div>
          
          <div className="bg-white rounded-[20px] shadow-lg p-6">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(3)}>
              <h4 className="text-lg font-semibold text-black">03. Are scheduled service intervals important for my car?</h4>
              <div className="text-xl text-gray-500">▼</div>
            </div>
            <div className="mt-4 text-gray-600 hidden" id="faq-3">
              <p>Car service is essential for maintaining the performance and Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes longevity of your vehicle. From oil changes</p>
            </div>
          </div>
          
          <div className="bg-white rounded-[20px] shadow-lg p-6">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(4)}>
              <h4 className="text-lg font-semibold text-black">04. Can regular maintenance prevent major repairs?</h4>
              <div className="text-xl text-gray-500">▼</div>
            </div>
            <div className="mt-4 text-gray-600 hidden" id="faq-4">
              <p>Car service is essential for maintaining the performance and Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes longevity of your vehicle. From oil changes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-white py-[100px] px-[100px]">
        <div className="text-center mb-[60px]">
          <h2 className="text-red-500 font-bold text-xl mb-2">OUR TEAM</h2>
          <h3 className="text-black font-bold text-4xl mb-4">They Our Best Team <br/>Member Ever</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 w-[400px] h-[400px] mx-auto p-4 flex flex-col">
            <div className="w-full h-[80%] rounded-[15px] overflow-hidden mb-4">
              <img src="https://www.autotrainingcentre.com/wp-content/uploads/2015/09/Top-5-Most-Common-Repairs-Youll-Encounter-in-an-Auto-Repair-Career.jpg" className="w-full h-full object-cover" alt="Mechanic"/>
            </div>
            <div className="text-right h-[20%] flex flex-col justify-center">
              <h4 className="text-lg font-semibold text-black mb-1">Mike Johnson</h4>
              <p className="text-sm text-gray-600">Auto Mechanic</p>
            </div>
          </div>
          
          <div className="bg-white rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 w-[400px] h-[400px] mx-auto p-4 flex flex-col">
            <div className="w-full h-[80%] rounded-[15px] overflow-hidden mb-4">
              <img src="https://www.autotrainingcentre.com/wp-content/uploads/2021/07/July-21-automotive-school.jpg" className="w-full h-full object-cover" alt="Mechanic"/>
            </div>
            <div className="text-right h-[20%] flex flex-col justify-center">
              <h4 className="text-lg font-semibold text-black mb-1">David Smith</h4>
              <p className="text-sm text-gray-600">Senior Technician</p>
            </div>
          </div>
          
          <div className="bg-white rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 w-[400px] h-[400px] mx-auto p-4 flex flex-col">
            <div className="w-full h-[80%] rounded-[15px] overflow-hidden mb-4">
              <img src="https://t4.ftcdn.net/jpg/09/46/69/49/360_F_946694968_9e99cggYVzk4b4wOKs35K9eD3bkVD6Dd.jpg" className="w-full h-full object-cover" alt="Mechanic"/>
            </div>
            <div className="text-right h-[20%] flex flex-col justify-center">
              <h4 className="text-lg font-semibold text-black mb-1">Sarah Martinez</h4>
              <p className="text-sm text-gray-600">Engine Specialist</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}