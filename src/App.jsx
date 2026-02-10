import { motion } from 'framer-motion';

const skills = {
  languages: ['js', 'python', 'html', 'css'],
  frameworks: ['react', 'flask', 'laravel'],
  tools: ['git', 'github', 'vscode', 'postman']
};

const projects = [
  {
    title: "EPL Hub — Live Football News & Updates",
    emoji: "⚽",
    description: "A clean football platform for EPL fans, built for speed and simplicity.",
    link: "https://epl-hub-sigma.vercel.app/",
    image: "https://via.placeholder.com/520x260.png?text=EPL+Hub"
  },
  {
    title: "Maasai Mara Game — Wildlife Adventure",
    emoji: "🦁",
    description: "A fun browser-based game inspired by the thrill and beauty of Maasai Mara.",
    link: "https://maasai-mara-game.vercel.app/",
    image: "https://via.placeholder.com/520x260.png?text=Maasai+Mara+Game"
  }
];

const App = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-gray-900 text-gray-200 font-sans">
      <div className="container mx-auto p-4 md:p-8 max-w-4xl">
        
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Hi 👋, I'm Brian Kiprono Ngetich</h1>
          <p className="text-lg md:text-xl text-cyan-400 mb-4">🚀 Software Developer | Python • JavaScript • APIs • React</p>
          <p className="max-w-2xl mx-auto text-gray-400 mb-6">
            I build clean, functional web apps and APIs — with a strong focus on performance, simplicity, and real-world impact.
          </p>
          <div className="flex justify-center space-x-4">
            <SocialLink href="https://www.linkedin.com/in/brian-kiprono/" text="LinkedIn" />
            <SocialLink href="https://github.com/BrianRony" text="GitHub" />
            <SocialLink href="mailto:kipronobrian97@gmail.com" text="Email" />
          </div>
        </motion.header>

        <motion.main variants={containerVariants} initial="hidden" animate="visible">
          <Section title="🌌 About Me">
            <p>I'm <strong>Brian Ngetich</strong>, a passionate developer who loves turning ideas into working products. I enjoy building APIs, designing clean UIs, and creating tools that solve real problems.</p>
            <ul className="mt-4 space-y-2">
              <ListItem>🔥 I like writing code that is <strong>simple, readable, and scalable</strong></ListItem>
              <ListItem>🧠 I’m always learning and improving my engineering skills</ListItem>
              <ListItem>⚙️ I enjoy backend logic just as much as frontend polish</ListItem>
              <ListItem>🎮 Gamer at heart — I love games and tech that feels alive</ListItem>
            </ul>
          </Section>

          <Section title="🧰 Tech Stack">
            <div className="flex flex-col items-center space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">💻 Languages</h3>
                <img src={`https://skillicons.dev/icons?i=${skills.languages.join(',')}`} alt="Languages" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">🧩 Frameworks & Libraries</h3>
                <img src={`https://skillicons.dev/icons?i=${skills.frameworks.join(',')}`} alt="Frameworks" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">🛠 Tools</h3>
                <img src={`https://skillicons.dev/icons?i=${skills.tools.join(',')}`} alt="Tools" />
              </div>
            </div>
          </Section>

          <Section title="🚀 Featured Projects">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map(project => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </Section>

          <Section title="🧠 My Development Philosophy">
            <blockquote className="border-l-4 border-cyan-400 pl-4 italic text-gray-400">
              “Build things that work. Make them clean. Make them fast. Make them meaningful.”
            </blockquote>
          </Section>
          
          <Section title="📈 Current Focus">
             <ul className="mt-4 space-y-2">
                <ListItem>Improving backend architecture (Flask + DB design)</ListItem>
                <ListItem>Building more full-stack applications</ListItem>
                <ListItem>Writing cleaner React code (components, hooks, state)</ListItem>
                <ListItem>Shipping more real projects consistently 🚀</ListItem>
            </ul>
          </Section>

        </motion.main>
        
        <motion.footer 
          className="text-center mt-16 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">🤝 Let’s Connect</h2>
          <div className="flex justify-center space-x-4 mb-6">
             <SocialLink href="https://www.linkedin.com/in/brian-kiprono/" text="LinkedIn" />
            <SocialLink href="https://github.com/BrianRony" text="GitHub" />
            <SocialLink href="mailto:kipronobrian97@gmail.com" text="Email" />
          </div>
          <p className="text-gray-500">⭐ If you like what I build, feel free to follow my GitHub ⭐</p>
          <p className="text-gray-400 mt-2 font-semibold">Let’s build something great.</p>
        </motion.footer>

      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <motion.section 
    className="mb-12"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }}
  >
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b-2 border-cyan-500 pb-2 inline-block">{title}</h2>
    <div>{children}</div>
  </motion.section>
);

const ListItem = ({ children }) => (
  <motion.li 
    className="bg-gray-800 p-3 rounded-lg flex items-center"
    variants={{
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 }
    }}
  >
    <span className="mr-3 text-cyan-400">✅</span>
    {children}
  </motion.li>
);

const ProjectCard = ({ title, emoji, description, link, image }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-800 rounded-lg overflow-hidden block group"
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 300 }}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }}
  >
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold text-white mb-2">{emoji} {title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <span className="font-semibold text-cyan-400 group-hover:underline">View Project &rarr;</span>
    </div>
  </motion.a>
);

const SocialLink = ({ href, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-800 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
  >
    {text}
  </a>
);

export default App;
