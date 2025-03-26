import iconWww from "./assets/icon-www.png";
import iconGlobe from "./assets/icon-globe.png";
import iconBe from "./assets/icon-be.png";
import Ferniro from "./assets/Ferniro.png";

export default function App() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-background text-white px-8 md:px-12 gap-y-8">
      {/* Left Content Section */}
      <div className="flex flex-col justify-center w-full md:w-2/5 pl-4 md:pl-8 space-y-6">
        {/* Title */}
        <h1 className="font-extrabold text-[80px] leading-tight tracking-normal text-gold font-poppins">
          FURNITURE
        </h1>
        {/* Subtitle */}
        <p className="font-medium text-[38px] leading-tight tracking-normal text-gold font-poppins">
          Landing Page
        </p>
        {/* Description */}
        <p className="text-black text-lg md:text-xl leading-relaxed max-w-lg">
          The e-Commerce Website design template is easy to customize,
          making it even easier for you to design your next website or 
          project, and speed up your design workflow.
        </p>

        {/* Links Section (Smaller Text & Icons) */}
        <div className="flex flex-col gap-2">
          <a
            href="https://uiuxexperts.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <img src={iconWww} alt="Website Icon" className="w-7 h-7 md:w-9 md:h-9" />
            <span className="text-black text-xs md:text-sm font-medium">
              https://uiuxexperts.github.io/portfolio/
            </span>
          </a>

          <a
            href="https://dribbble.com/aashifasheikh12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <img src={iconGlobe} alt="Website Icon" className="w-7 h-7 md:w-9 md:h-9" />
            <span className="text-black text-xs md:text-sm font-medium">
              aashifasheikh12
            </span>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <img src={iconBe} alt="Website Icon" className="w-7 h-7 md:w-9 md:h-9" />
            <span className="text-black text-xs md:text-sm font-medium">
              /aashifasheikh12
            </span>
          </a>
        </div>
      </div>

      {/* Right Image Section (Full-Screen Fix) */}
      <div className="relative w-full md:w-3/5 h-[60vh] md:h-screen overflow-hidden">
        <img 
          src={Ferniro} 
          alt="Furniture Image" 
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </main>
  );
}
