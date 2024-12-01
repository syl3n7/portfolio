// components/Hero.js

export default function Hero() {
    return (
      <section id="hero" className="text-center py-20">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-10 shadow-xl">
          <h2 className="text-4xl font-bold mb-4 text-blue-900">
            Hi, my name is Cl&apos;udio
          </h2>
          <p className="text-xl text-blue-800">
            I&apos;m a generalist game programmer with a passion for tech
          </p>
          <p className="text-lg text-blue-700 mt-2">
            Currently studying game development at IPMAIA
          </p>
        </div>
      </section>
    );
  }