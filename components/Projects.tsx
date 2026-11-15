const projects = [
  {
    number: "01",
    name: "StudyLink",
    description:
      "A student collaboration platform for sharing notes, resources and study groups.",
    stack: ["Next.js", "FastAPI", "PostgreSQL"],
    type: "Full-stack application",
  },
  {
    number: "02",
    name: "CHIP-8 Emulator",
    description:
      "A CHIP-8 interpreter and emulator written in C++ with SDL2 rendering.",
    stack: ["C++", "SDL2", "CMake"],
    type: "Systems programming",
  },
  {
    number: "03",
    name: "Eye Disease Classification",
    description:
      "A machine learning project for classifying eye diseases using medical images.",
    stack: ["Python", "Machine Learning", "Hugging Face"],
    type: "Machine learning",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container-main py-32">
      <p className="section-label mb-5">Selected work / 01—03</p>

      <h2 className="mb-16 text-4xl font-semibold tracking-tight md:text-6xl">
        Things I've built.
      </h2>

      <div className="border-t border-white/15">
        {projects.map((project) => (
          <article
            key={project.number}
            className="project-item group grid gap-6 border-b border-white/15 py-10 transition-colors hover:bg-white/[0.025] md:grid-cols-[80px_1fr_1fr]"
          >
            <span className="text-sm text-neutral-500">
              {project.number}
            </span>

            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-accent">
                {project.type}
              </p>

              <h3 className="text-3xl font-medium transition-transform group-hover:translate-x-2">
                {project.name}
              </h3>
            </div>

            <div>
              <p className="max-w-md text-sm leading-relaxed text-neutral-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}