import { useState } from 'react';
import linkedin1 from './assets/linkedin1.png';
import github from './assets/github.png';
import './App.css';
import { Typewriter } from 'react-simple-typewriter';
import stellarship from './assets/stellarship.png';
import cinemaker from './assets/cinemaker.png';
import laundrytracker from './assets/laundrytracker.png';
import jason1 from './assets/jason1.png';
import family1 from './assets/family1.png';
import tesla from './assets/tesla.png';
import outliers from './assets/outliers.png';
import blink from './assets/blink.png';
import nvidia from './assets/nvidia.png';
import friends from './assets/friends.png';
import roommates from './assets/roommates.png';
import gaspredictor from './assets/gaspredictor.png';
import portfolio from './assets/portfolio.png';
// Social Links Component
function SocialLinks() {
  return (
    <div className="absolute top-4 left-4 flex gap-4 z-20">
      <a
        href="https://www.linkedin.com/in/jasonnguyen1331/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin1} className="logo" alt="LinkedIn logo 1" />
      </a>
      <a
        href="https://github.com/JasonNguyen067"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} className="logo react" alt="GitHub icon" />
      </a>
    </div>
  );
}

// Header Component
function Header() {
  return (
    <div className="mb-8">
      <h1 className="text-gray-300 text-4xl">
        <Typewriter
          words={['Jason Nguyen']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
        />
      </h1>
      <h2 className="text-m mt-2 font-normal">
        <Typewriter
          words={['Software Engineer', 'First Year Computer Science and Engineering Student at UC Irvine']}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
        />
      </h2>
    </div>
  );
}

// Button Group Component
interface ButtonGroupProps {
  title: string;
  modalContent: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ButtonGroup({ title, modalContent, isOpen, setIsOpen }: ButtonGroupProps) {
  return (
    <div className="flex flex-col w-[400px]">
      {/* Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full px-6 py-2 rounded-xl text-black bg-zinc-900 hover:bg-yellow-500 transition duration-200 ease-in-out shadow-lg shadow-yellow-500/50 font-bold border-none"
      >
        <span>{title}</span>
      </button>

      {/* Modal */}
      <div className="text-white w-full">
        {isOpen ? (
          <div className="bg-gray-300 text-white rounded-b-xl shadow-lg transform transition-all ease-in-out">
            {modalContent}
          </div>
        ) : null}
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);
  const [isFourthModalOpen, setIsFourthModalOpen] = useState(false);
  const [isFifthModalOpen, setIsFifthModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full relative">
      <div className="bg-radial from-neutral-950 to-gray-200 min-h-screen flex flex-col items-center text-3xl text-stone-50 justify-start w-full relative z-0 py-20">
        {/* Social Links */}
        <SocialLinks />

        {/* Main Content */}
        <div className="relative z-10 text-center w-full">
          {/* Header */}
          <Header />

          {/* Projects Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-gray-300 text-xl">Here are some of my recent works</p>
          </div>

          {/* Buttons and Hover Content */}
          <div className="relative mt-20 grid grid-cols-2 gap-8 w-[800px] mx-auto mb-20">
            {/* First Button Group */}
            <ButtonGroup
              title="Stellarship!👍"
              modalContent={
                <div className="p-4 flex flex-col items-center h-[400px]">
                  <div className="bg-gray-500 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                    FullyHacks 2025
                  </div>
                  <a
                    href="https://github.com/DerrickThrower/Fullyhacks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mb-4"
                  >
                    <img src={stellarship} className="logo" alt="Stellarship project logo" />
                  </a>
                  <p className="text-sm text-gray-500 mb-2">Webscraper with chatbot that constantly finds and updates the website with scholarships for underprivileged students such as Low Income, First Generation Students</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">Tailwind</span>
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">Typescript</span>
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">BeautifulSoup</span>
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">OpenAI API</span>
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">Flask</span>
                  </div>
                </div>
              }
              isOpen={isFirstModalOpen}
              setIsOpen={setIsFirstModalOpen}
            />

            {/* Second Button Group */}
            <ButtonGroup
              title="Cinemaker!🎬"
              modalContent={
                <div className="p-4 flex flex-col items-center h-[400px]">
                  <div className="bg-gray-500 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                    CitrusHacks 2025
                  </div>
                  <a
                    href="https://github.com/harrisonharrisonharrison/Cinemaker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mb-4"
                  >
                    <img src={cinemaker} className="logo" alt="Cinemaker project logo" />
                  </a>
                  <p className="text-sm text-gray-500 mb-2">Pulls trailers with TMDB API, and uses flask to communicate with Gemini API to create tailored one to two sentence movie pitches</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">Tailwind</span>
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">Flask</span>
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">Gemini API</span>
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">TMDB API</span>
                  </div>
                </div>
              }
              isOpen={isSecondModalOpen}
              setIsOpen={setIsSecondModalOpen}
            />

            {/* Third Button Group */}
            <ButtonGroup
              title="Laundry Tracker!🧺"
              modalContent={
                <div className="p-4 flex flex-col items-center h-[400px]">
                  <div className="bg-gray-500 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                    Personal Project
                  </div>
                  <a
                    href="https://github.com/JasonNguyen067/LaundryTracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mb-4"
                  >
                    <img src={laundrytracker} className="logo h-64 mx-auto object-contain" alt="Laundrytracker project logo" />
                  </a>
                  <p className="text-sm text-gray-500 mb-2">Track your laundry cycles and machine availability.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">Javascript</span>
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">HTML</span>
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">CSS</span>
                  </div>
                </div>
              }
              isOpen={isThirdModalOpen}
              setIsOpen={setIsThirdModalOpen}
            />

            {/* Fourth Button Group */}
            <ButtonGroup
              title="Gas Price Predictor!⛽"
              modalContent={
                <div className="p-4 flex flex-col items-center h-[400px]">
                  <div className="bg-gray-500 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                    Personal Project
                  </div>
                  <a
                    href="https://github.com/JasonNguyen067/GasPricePredictor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mb-4"
                  >
                    <img src={gaspredictor} className="logo h-64 mx-auto object-contain" alt="Gas Price Predictor project logo" />
                  </a>
                  <p className="text-sm text-gray-500 mb-2">Predict Gas Prices!</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">Flask</span>
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">Scikit-learn</span>
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">Pandas</span>
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">Matplotlib</span>
                  </div>
                </div>
              }
              isOpen={isFourthModalOpen}
              setIsOpen={setIsFourthModalOpen}
            />
          </div>

          {/* Fifth Button Group */}
          <div className="col-span-2 flex justify-center">
            <ButtonGroup
              title="Portfolio Website!🌐"
              modalContent={
                <div className="p-4 flex flex-col items-center h-[400px]">
                  <div className="bg-gray-500 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">Personal Project</div>
                  <a
                    href="https://github.com/JasonNguyen067/Jasons-Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mb-4"
                  >
                    <img src={portfolio} className="logo h-64 mx-auto object-contain" alt="Portfolio website logo" />
                  </a>
                  <p className="text-sm text-gray-300 mb-2">My personal portfolio website showcasing my projects and skills.</p>
                  <div className="flex flex-wrap gap-2">
                    <p className="text-sm text-gray-500 mb-2">First ever personal website! Built with React, Tailwind and Typescript</p>
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">TypeScript</span>
                    <span className="px-2 py-1 bg-gray-500 rounded text-xs">Tailwind</span>
                  </div>
                </div>
              }
              isOpen={isFifthModalOpen}
              setIsOpen={setIsFifthModalOpen}
            />
          </div>
        </div>

        {/* About Me Section */}
        <div className="text-center w-full max-w-[600px] mx-auto mb-40 mt-400">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-gray-300 text-xl">
            My favorite hobbies are playing basketball, lifting weights, and reading books!
            Currently interested in furthering my knowledge in the field of AI and Web Development.
          </p>
          <div className="grid grid-cols-2 mt-8">
          <img src={family1} className="w-full h-auto object-cover rounded-lg" alt="Family photo" />
          <img src={jason1} className="w-full h-auto object-cover rounded-lg" alt="Jason photo" />
          <img src={roommates} className="w-full h-auto object-cover rounded-lg" alt="kevin photo" />
          <img src={friends} className="w-full h-auto object-cover rounded-lg" alt="BEST FRIENDS photo" />
          </div>
        </div>

        {/* Experiences */}
        <div className="text-center w-full max-w-[600px] mx-auto mt-400">
          <h2 className="text-3xl font-bold mb-8">My favorite books!</h2>
          <div className="grid grid-cols-2">
          <img src={nvidia} className="w-full h-auto object-cover rounded-lg" alt="nvidia book" />
          <img src={tesla} className="w-full h-auto object-cover rounded-lg" alt="tesla book" />
          <img src={outliers} className="w-full h-auto object-cover rounded-lg" alt="outliers book" />
          <img src={blink} className="w-full h-auto object-cover rounded-lg" alt="blink book" />
          </div>
        </div>

        {/* Contact Me Section */}
        <div className="text-center w-full max-w-[600px] mx-auto mb-40 mt-400">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <h3 className="text-xl font-bold mb-8">Schedule me for a coffee chat!</h3>
          <div className="bg-gray-800 rounded-xl p-8">
            <input 
              type="text" 
              placeholder="Name"
              className="w-full p-6 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 h-14"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full p-6 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 h-14"
            />
            <input
              type="text"
              placeholder="Message"
              className="w-full p-6 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 mb-4"
            />
            <button 
              type="submit"
              className="w-full p-6 rounded-lg bg-blue-500 text-black font-bold hover:bg-blue-600 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;