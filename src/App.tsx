import iconWww from "./assets/icon-www.png";
import iconGlobe from "./assets/icon-globe.png";
import iconBe from "./assets/icon-be.png";
import Ferniro from "./assets/Ferniro.png";

export default function App() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-background text-white px-6 md:px-12 gap-10">
      {/* Left Content */}
      <section className="flex flex-col justify-center w-full md:w-2/5 space-y-6 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-[48px] md:text-[72px] font-extrabold leading-tight text-gold font-poppins">
          FURNITURE
        </h1>

        <p className="text-[28px] md:text-[36px] font-semibold text-gold font-poppins">
          Crafted for Modern Living
        </p>

        <p className="text-black text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
          Discover thoughtfully designed furniture that blends comfort,
          functionality, and timeless aesthetics. Built for modern homes,
          our collections focus on quality materials, clean lines, and
          everyday usability.
        </p>

        <div className="flex flex-col gap-3 items-center md:items-start">
          <a
            href="https://uiuxexperts.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <img src={iconWww} alt="Website Icon" className="w-6 h-6 md:w-7 md:h-7" />
            <span className="text-black text-sm md:text-base font-medium">
              uiuxexperts.github.io/portfolio
            </span>
          </a>

          <a
            href="https://dribbble.com/aashifasheikh12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <img src={iconGlobe} alt="Dribbble Icon" className="w-6 h-6 md:w-7 md:h-7" />
            <span className="text-black text-sm md:text-base font-medium">
              dribbble.com/aashifasheikh12
            </span>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <img src={iconBe} alt="Behance Icon" className="w-6 h-6 md:w-7 md:h-7" />
            <span className="text-black text-sm md:text-base font-medium">
              behance.net/aashifasheikh12
            </span>
          </a>
        </div>
      </section>

      {/* Right Image Section */}
      <div
        className="
          relative
          w-full
          md:w-3/5
          h-[clamp(45vh,55vw,65vh)]
          md:h-screen
          overflow-hidden
          rounded-lg
          shadow-md
        "
      >
        <img
          src={Ferniro}
          alt="Modern furniture collection in a contemporary interior"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </main>
  );
}
