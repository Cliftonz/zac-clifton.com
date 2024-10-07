import Link from "next/link";

export default function HomePage() {
  return (
    <div className={"min-h-screen"}>
      <section id="about" className="py-8">
        <h2 className="mb-4 text-3xl font-bold">About Me</h2>
        <p className="text-lg">
          Hey 👋 - I am an Infrastructure Engineer turned founder
          {/*currently*/}
          {/*building an{" "}*/}
          {/*<a*/}
          {/*  href="https://autoscaler.dev"*/}
          {/*  target="_blank"*/}
          {/*  className="text-blue-500 hover:underline"*/}
          {/*>*/}
          {/*  Intelligent ECS Autoscaler*/}
          {/*</a>{" "}*/}
          {/*that scales your deployments accurately to save you money.*/}
        </p>
        <p>Born, raised, and based in Louisville Kentucky.</p>
      </section>

      <section id="projects" className="py-8">
        <h2 className="mb-4 text-3xl font-bold">Projects</h2>
        <ul className="space-y-6">
        </ul>
        <p className="mt-6 text-lg">
          Here&apos;s a list of all my past{" "}
          <Link
            href="/past-projects"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            projects
          </Link>
        </p>
      </section>

      <section id="contact" className="py-8">
        <h2 className="mb-4 text-3xl font-bold">Get in Touch</h2>
        <p className="text-lg">
          I&apos;m always open to talk / hear new opportunities.
        </p>
        <ul className="mt-4 flex space-x-4">
          <li>
            <a
              href="mailto:zac@bearbinarydevelopment.com"
              aria-label="Email"
              className="text-gray-600 hover:text-gray-900"
            >
              <i className="fas fa-envelope"></i> Email
            </a>
          </li>
          <li>
            <a
              href="https://x.com/jaumeros6"
              target="_blank"
              aria-label="Twitter"
              className="text-gray-600 hover:text-gray-900"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/cliftonz/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-gray-900"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          {/*<li>*/}
          {/*  <a*/}
          {/*    href="https://youtube.com/@jaumeros"*/}
          {/*    target="_blank"*/}
          {/*    aria-label="YouTube"*/}
          {/*    className="text-gray-600 hover:text-gray-900"*/}
          {/*  >*/}
          {/*    <i className="fab fa-youtube"></i> YouTube*/}
          {/*  </a>*/}
          {/*</li>*/}
        </ul>
      </section>
    </div>
  );
}