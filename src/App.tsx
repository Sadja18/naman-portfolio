import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: 'PDF Generation System for Physical Mail',
      description:
        'Built a serverless document automation pipeline processing 1M+ records in under 50 minutes using Python and Google Cloud. Integrated Data Matrix codes for automated tracking and physical mail sorting. Developed RESTful APIs using Flask and Docker for scalable deployment.',
      tech: ['Python', 'Google Cloud', 'Flask', 'Docker'],
      links: [],
    },
    {
      title: 'Academic ERP Software Suite',
      description:
        'Developed a multi-user ERP with centralized data management, analytics dashboards, and offline-capable mobile apps. Developed XML RPC to RESTful APIs using PHP to support mobile app data sync.',
      tech: ['PHP', 'REST API', 'Mobile Development'],
      links: [],
    },
    {
      title: 'Improved — VS Code Theme Extension',
      description:
        'Custom Visual Studio Code theme with improved syntax highlighting and readability. Published to the marketplace and publicly available for use.',
      tech: ['VS Code', 'Themes', 'UI Design'],
      links: [
        {
          name: 'Marketplace',
          url: 'https://marketplace.visualstudio.com/items?itemName=Sadja.Improved&utm_source=westack.live',
        },
      ],
    },
    {
      title: 'Sadja Progress Stepper',
      description:
        'Flutter package for building customizable multi-step progress indicators. Published on pub.dev.',
      tech: ['Flutter', 'Dart', 'UI Components'],
      links: [
        {
          name: 'pub.dev',
          url: ' https://pub.dev/packages/sadja_progress_stepper ',
        },
      ],
    },
    {
      title: 'Blockchain Wallet App',
      description:
        'Ethereum wallet with Node.js backend (Express + Ethers.js) and Flutter frontend.',
      tech: ['Flutter', 'Node.js', 'Ethers.js', 'Express'],
      links: [
        { name: 'Backend', url: 'https://github.com/Sadja18/block_chain_wallet_backend ' },
        { name: 'Mobile', url: 'https://github.com/Sadja18/block_chain_wallet_mobile ' },
      ],
    },
    {
      title: 'Face Analyzer',
      description:
        'Detects age, gender, race, and skin tone from face images using deep learning.',
      tech: ['Python', 'OpenCV', 'Deep Learning'],
      links: [
        { name: 'GitHub', url: 'https://github.com/Sadja18/face_analyzer ' },
      ],
    },
    {
      title: 'IOC Intel Tools',
      description:
        'Set of Linux-based tools for port scanning, domain trust discovery, and IOC reporting.',
      tech: ['Linux', 'Cybersecurity', 'Bash'],
      links: [
        { name: 'GitHub', url: 'https://github.com/Sadja18/ioc-intel-tools ' },
      ],
    },
  ];

  const skills = {
    Languages: ['Python', 'JavaScript', 'Dart', 'PHP'],
    Frontend: ['Angular', 'jQuery', 'Ionic', 'Flutter'],
    Backend: ['FastAPI', 'Django', 'Flask', 'Express.js'],
    APIs: ['RESTful API', 'XMLRPC', 'OpenAPI/Swagger'],
    RDBMS: ['PostgreSQL', 'MySQL', 'SQLite', 'MSSQL'],
    NoSQL: ['MongoDB'],
    'Cloud & DevOps': ['Google Cloud Platform', 'Docker', 'Cloud Run', 'Cloud Functions'],
    'Mobile Development': ['Flutter', 'Ionic', 'Capacitor'],
    'Data & Analytics': ['Pandas', 'GeoPandas', 'BeautifulSoup', 'Selenium'],
    'Code Quality & Security': ['MobSF', 'SonarQube', 'OWASP Mobile Top 10'],
    Tools: ['Git', 'Agile', 'SDLC', 'Unit Testing'],
  };

  const experience = [
    {
      title: 'Project Engineer',
      company: 'CDAC, Pune',
      date: '26 Dec 2024 – Present',
      points: [
        'Developed hybrid mobile applications using Ionic Framework for PMGSY-related modules such as field surveys, inspections, and citizen feedback.',
        'Focused on frontend UI/UX and offline-first design with device-native integrations using Ionic Capacitor.',
        'Performed mobile application security analysis using MobSF.',
        'Used SonarQube for static code analysis and to maintain code quality.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'iTechnolabs Pvt. Ltd., Mohali',
      date: '04 Dec 2023 – 02 Dec 2024',
      points: [
        'Built serverless document automation pipelines processing over 1 million personalized PDFs using Python and GCP services.',
        'Implemented document tracking systems with Data Matrix codes.',
        'Deployed microservices and APIs on Google Cloud Run and Cloud Functions.',
        'Managed cloud storage workflows and data pipelines involving BigQuery and Cloud Storage.',
      ],
    },
    {
      title: 'Project Engineer',
      company: 'C-DAC Mohali',
      date: '10 Feb 2023 – 01 Dec 2023',
      points: [
        'Full stack development of SIEM platforms using MEAN stack and Python backend services.',
        'Enhanced real-time threat intelligence dashboards and data ingestion pipelines.',
      ],
    },
    {
      title: 'Project Associate / Project Engineer',
      company: 'CDAC, Chennai',
      date: '08 Sept 2021 – 30 Jan 2023',
      points: [
        'Developed cross-platform mobile apps using Flutter with offline-first architecture.',
        'Automated desktop UI workflows and backend data processing in Python.',
      ],
    },
    {
      title: 'Junior Software Engineer',
      company: 'GRL Technologies',
      date: '1st May 2020 – 31st Jul 2021',
      points: [
        'Automated web data extraction and analytics scripts using Python (BeautifulSoup, Pandas).',
        'Built reusable scraping and automation tools in Python and Java.',
      ],
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow-md p-6 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Naman Mishra</h1>
          <nav className="space-x-6">
            <button onClick={() => setActiveTab('projects')} className={activeTab === 'projects' ? 'text-blue-600 font-semibold' : ''}>
              Projects
            </button>
            <button onClick={() => setActiveTab('skills')} className={activeTab === 'skills' ? 'text-blue-600 font-semibold' : ''}>
              Skills
            </button>
            <button onClick={() => setActiveTab('experience')} className={activeTab === 'experience' ? 'text-blue-600 font-semibold' : ''}>
              Experience
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Full Stack Developer | Cloud & Mobile Enthusiast</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          I’m Naman Mishra, a Full Stack Developer with 4+ years of experience building scalable web and mobile applications.
          I specialize in cloud-native development, mobile security, and data automation.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="mailto:namanmishraec1045@gmail.com" className="text-blue-600 hover:underline">Email</a>
          <a href="https://www.linkedin.com/in/naman-m-8575a6144/ " target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
        </div>
      </section>

      {/* Dynamic Section */}
      <main className="container mx-auto px-6 pb-12">
        {activeTab === 'projects' && (
          <section>
            <h3 className="text-2xl font-bold mb-6 border-b border-gray-300 pb-2">Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'skills' && (
          <section>
            <h3 className="text-2xl font-bold mb-6 border-b border-gray-300 pb-2">Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items], idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                  <h4 className="text-lg font-semibold mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, i) => (
                      <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'experience' && (
          <section>
            <h3 className="text-2xl font-bold mb-6 border-b border-gray-300 pb-2">Experience</h3>
            <div className="space-y-6">
              {experience.map((job, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                  <h4 className="text-xl font-semibold">{job.title} <span className="text-gray-500">@ {job.company}</span></h4>
                  <p className="text-gray-500 text-sm mb-3">{job.date}</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white text-center py-6 text-sm text-gray-500 border-t border-gray-200">
        <p>© 2025 Naman Mishra. Built with React & Tailwind CSS.</p>
        <a href="/resume.pdf" download className="text-blue-600 hover:underline mt-2 inline-block">
          Download Resume (PDF)
        </a>
      </footer>
    </div>
  );
}

export default App
