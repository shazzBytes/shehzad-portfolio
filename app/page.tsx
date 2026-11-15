import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import PortfolioAnimations from "@/components/PortfolioAnimations";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <PortfolioAnimations />

      <Navbar />

      <Hero />

      <section id="about" className="container-main section-reveal py-32">
        <p className="section-label mb-5">A little about me</p>

        <h2 className="max-w-4xl text-3xl leading-relaxed tracking-tight md:text-5xl">
          I enjoy understanding how software works, from the user interface
          down to the systems underneath.
        </h2>

        <p className="mt-8 max-w-2xl leading-relaxed text-neutral-400">
          I'm a Computer Engineering diploma graduate interested in
          full-stack development, C++, systems programming and software
          engineering.
        </p>
      </section>

      <section id="skills" className="container-main section-reveal py-20">
        <p className="section-label mb-5">My toolkit</p>
        <h2 className="mb-10 text-4xl font-semibold">Technologies I use.</h2>

        <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
          {[
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Python",
            "FastAPI",
            "C++",
            "SDL2",
            "PostgreSQL",
            "MongoDB",
            "Git",
            "CMake",
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 p-5 text-neutral-300 transition-colors hover:border-[#b5ff6d]/50"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <Projects />

      <section
        id="contact"
        className="container-main section-reveal border-t border-white/10 py-32"
      >
        <p className="section-label mb-5">Have a project in mind?</p>

        <h2 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
          Let's build something
          <span className="text-accent"> meaningful.</span>
        </h2>

        <a
          href="mailto:shehzadshaikh0204@gmail.com"
          className="mt-10 inline-block rounded-full bg-[#b5ff6d] px-7 py-3 font-medium text-black"
        >
          Contact me ↗
        </a>
      </section>

      <footer className="container-main border-t border-white/10 py-8 text-sm text-neutral-500">
        © 2026 Shehzad Shaikh. Built with Next.js and GSAP.
      </footer>
    </main>
  );
}
