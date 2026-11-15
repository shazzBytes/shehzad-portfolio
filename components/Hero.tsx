import { ArrowDown } from "lucide-react";
import { siGithub } from "simple-icons/icons";

function BrandIcon({
  icon,
}: {
  icon: typeof siGithub
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="container-main flex min-h-screen flex-col justify-center pt-20">
      <div className="hero-content max-w-5xl">
        <p className="hero-item section-label mb-8">
          Software Developer / Computer Engineer
        </p>

        <h1 className="hero-item text-6xl font-semibold leading-[1.05] tracking-tight md:text-8xl">
          Building things
          <br />
          for the <span className="text-accent">web</span>
          <br />
          and beyond.
        </h1>

        <p className="hero-item mt-8 max-w-xl text-lg leading-relaxed text-neutral-400">
          I'm Shehzad Shaikh. I enjoy engineering practical software,
          exploring systems programming, and turning ideas into working
          products.
        </p>

        <div className="hero-item mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[#b5ff6d] px-7 py-3 font-medium text-black transition-transform hover:scale-105"
          >
            Explore my work ↗
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-7 py-3 transition-colors hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>

        <div className="hero-item mt-12 flex items-center gap-6">
          <a
            href="https://github.com/shazzBytes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <BrandIcon icon={siGithub} />
          </a>
        </div>
      </div>

      <div className="hero-item mt-20 flex items-center gap-3 text-xs uppercase tracking-widest text-neutral-500">
        <ArrowDown size={16} />
        Scroll to explore
      </div>
    </section>
  );
}