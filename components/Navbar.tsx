import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/10 bg-black/70 backdrop-blur-xl">
      <nav className="container-main flex h-20 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          shehzad<span className="text-accent">.</span>
        </Link>

        <div className="items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 px-5 py-2 text-sm transition-colors hover:bg-white hover:text-black"
        >
          Resume ↗
        </a>
      </nav>
    </header>
  )
}