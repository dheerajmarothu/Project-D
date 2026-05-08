/* ========== Engineering Roadmaps Hub — Data Layer ========== */

const BRANCHES = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    icon: '💻',
    color: '#6366f1',
    gradient: 'from-indigo-500 to-blue-500',
    description: 'Master programming, algorithms, web dev, databases, OS, and software engineering.',
    semesters: [
      {
        title: 'Core Skills',
        topics: [
          { name: 'Introduction to Programming (C)', yt: 'https://www.youtube.com/@freecodecamp', done: false },
          { name: 'Data Structures & Algorithms', yt: 'https://www.youtube.com/@JennyslecturesCSIT', done: false },
          { name: 'Database Management Systems', yt: 'https://www.youtube.com/@GateSmashers', done: false },
          { name: 'Operating Systems', yt: 'https://www.youtube.com/@nesoacademy', done: false },
          { name: 'Computer Networks', yt: 'https://www.youtube.com/@nesoacademy', done: false }
        ]
      },
      {
        title: 'Technical Skills',
        topics: [
          { name: 'Object Oriented Programming (C++/Java)', yt: 'https://www.youtube.com/@BroCodez', done: false },
          { name: 'Web Development (HTML/CSS/JS)', yt: 'https://www.youtube.com/@TraversyMedia', done: false },
          { name: 'Software Engineering', yt: 'https://www.youtube.com/@GateSmashers', done: false }
        ]
      }
    ]
  },
  {
    id: 'eee',
    name: 'Electrical & Electronics',
    shortName: 'EEE',
    icon: '⚡',
    color: '#eab308',
    gradient: 'from-yellow-500 to-amber-500',
    description: 'Power systems, electrical machines, control systems, and renewable energy technologies.',
    semesters: [
      {
        title: 'Core Skills',
        topics: [
          { name: 'Electrical circuits & network theory', yt: 'https://www.youtube.com/@nesoacademy', done: false },
          { name: 'Power systems (generation, transmission, distribution)', yt: 'https://www.youtube.com/@EngineeringAcademy', done: false },
          { name: 'Control systems', yt: 'https://www.youtube.com/@TutorialsPoint_', done: false },
          { name: 'Electrical machines (motors, transformers)', yt: 'https://www.youtube.com/@EngineeringAcademy', done: false },
          { name: 'Analog & digital electronics basics', yt: 'https://www.youtube.com/@nesoacademy', done: false }
        ]
      },
      {
        title: 'Technical Skills',
        topics: [
          { name: 'MATLAB / Simulink', yt: 'https://www.youtube.com/@MATLAB', done: false },
          { name: 'PSCAD (power system simulation)', yt: 'https://www.youtube.com/@pscad_mtc', done: false },
          { name: 'PLC & SCADA basics', yt: 'https://www.youtube.com/@RealPars', done: false },
          { name: 'Embedded C (for controllers)', yt: 'https://www.youtube.com/@freecodecamp', done: false }
        ]
      },
      {
        title: 'Practical Skills',
        topics: [
          { name: 'Circuit design & troubleshooting', yt: 'https://www.youtube.com/@AllAboutElectronics', done: false },
          { name: 'Wiring, protection systems', yt: 'https://www.youtube.com/@EngineeringMindset', done: false },
          { name: 'Renewable energy systems (solar, EV basics)', yt: 'https://www.youtube.com/@EngineeringMindset', done: false }
        ]
      }
    ]
  },
  {
    id: 'ece',
    name: 'Electronics & Communication',
    shortName: 'ECE',
    icon: '📡',
    color: '#f59e0b',
    gradient: 'from-amber-500 to-orange-500',
    description: 'Explore circuits, signals, embedded systems, VLSI, and communication technologies.',
    semesters: [
      {
        title: 'Core Skills',
        topics: [
          { name: 'Analog & digital electronics', yt: 'https://www.youtube.com/@nesoacademy', done: false },
          { name: 'Signals and systems', yt: 'https://www.youtube.com/@nesoacademy', done: false },
          { name: 'Communication systems', yt: 'https://www.youtube.com/@TutorialsPoint_', done: false },
          { name: 'Microprocessors & microcontrollers', yt: 'https://www.youtube.com/@nesoacademy', done: false }
        ]
      },
      {
        title: 'Technical Skills',
        topics: [
          { name: 'Embedded systems (Arduino, Raspberry Pi)', yt: 'https://www.youtube.com/@PaulMcWhorter', done: false },
          { name: 'VLSI basics', yt: 'https://www.youtube.com/@TutorialsPoint_', done: false },
          { name: 'Verilog / VHDL', yt: 'https://www.youtube.com/@nptelhrd', done: false },
          { name: 'MATLAB', yt: 'https://www.youtube.com/@MATLAB', done: false }
        ]
      },
      {
        title: 'Tools',
        topics: [
          { name: 'Multisim / Proteus', yt: 'https://www.youtube.com/@AllAboutElectronics', done: false },
          { name: 'Keil IDE', yt: 'https://www.youtube.com/@TutorialsPoint_', done: false }
        ]
      },
      {
        title: 'Trending Skills',
        topics: [
          { name: 'IoT (Internet of Things)', yt: 'https://www.youtube.com/@edurekaIN', done: false },
          { name: '5G & wireless communication', yt: 'https://www.youtube.com/@Techquickie', done: false }
        ]
      }
    ]
  },
  {
    id: 'civil',
    name: 'Civil Engineering',
    shortName: 'Civil',
    icon: '🏗️',
    color: '#10b981',
    gradient: 'from-emerald-500 to-green-500',
    description: 'Structural analysis, geotechnical engineering, surveying, and construction management.',
    semesters: [
      {
        title: 'Core Skills',
        topics: [
          { name: 'Structural engineering', yt: 'https://www.youtube.com/@TikleAcademy', done: false },
          { name: 'Geotechnical engineering', yt: 'https://www.youtube.com/@EngineeringAcademy', done: false },
          { name: 'Fluid mechanics', yt: 'https://www.youtube.com/@TikleAcademy', done: false },
          { name: 'Surveying', yt: 'https://www.youtube.com/@CivilMentors', done: false }
        ]
      },
      {
        title: 'Software Skills',
        topics: [
          { name: 'AutoCAD', yt: 'https://www.youtube.com/@CADCAMTutorials', done: false },
          { name: 'STAAD Pro', yt: 'https://www.youtube.com/@BentleySystems', done: false },
          { name: 'ETABS', yt: 'https://www.youtube.com/@CSIAmerica', done: false },
          { name: 'Revit', yt: 'https://www.youtube.com/@BalkanArchitect', done: false }
        ]
      },
      {
        title: 'Practical Skills',
        topics: [
          { name: 'Site management', yt: 'https://www.youtube.com/@CivilMentors', done: false },
          { name: 'Construction planning', yt: 'https://www.youtube.com/@ConstructionManagement', done: false },
          { name: 'Master testing', yt: 'https://www.youtube.com/@CivilEngineeringTube', done: false }
        ]
      }
    ]
  },
  {
    id: 'mech',
    name: 'Mechanical Engineering',
    shortName: 'Mechanical',
    icon: '⚙️',
    color: '#ef4444',
    gradient: 'from-red-500 to-rose-500',
    description: 'Thermodynamics, fluid mechanics, manufacturing, CAD/CAM, and robotics.',
    semesters: [
      {
        title: 'Core Skills',
        topics: [
          { name: 'Thermodynamics', yt: 'https://www.youtube.com/@TikleAcademy', done: false },
          { name: 'Fluid mechanics', yt: 'https://www.youtube.com/@TikleAcademy', done: false },
          { name: 'Strength of materials', yt: 'https://www.youtube.com/@EngineeringAcademy', done: false },
          { name: 'Machine design', yt: 'https://www.youtube.com/@EngineeringAcademy', done: false }
        ]
      },
      {
        title: 'Software Skills',
        topics: [
          { name: 'AutoCAD / SolidWorks', yt: 'https://www.youtube.com/@CADCAMTutorials', done: false },
          { name: 'ANSYS (simulation)', yt: 'https://www.youtube.com/@ANSYSInc', done: false },
          { name: 'CATIA', yt: 'https://www.youtube.com/@CADCAMTutorials', done: false }
        ]
      },
      {
        title: 'Practical Skills',
        topics: [
          { name: 'Manufacturing processes', yt: 'https://www.youtube.com/@EngineeringAcademy', done: false },
          { name: 'CNC basics', yt: 'https://www.youtube.com/@HaasAutomationInc', done: false },
          { name: 'Robotics basics', yt: 'https://www.youtube.com/@edurekaIN', done: false }
        ]
      }
    ]
  },
  {
    id: 'cyber',
    name: 'Cyber Security',
    shortName: 'Cyber Sec',
    icon: '🛡️',
    color: '#14b8a6',
    gradient: 'from-teal-500 to-emerald-500',
    description: 'Network security, ethical hacking, cryptography, digital forensics, and penetration testing.',
    semesters: [
      {
        title: 'Core Skills',
        topics: [
          { name: 'Networking (TCP/IP, DNS, HTTP)', yt: 'https://www.youtube.com/@NetworkChuck', done: false },
          { name: 'Operating systems (Linux, Windows)', yt: 'https://www.youtube.com/@DavidBombal', done: false },
          { name: 'Cryptography basics', yt: 'https://www.youtube.com/@Computerphile', done: false }
        ]
      },
      {
        title: 'Technical Skills',
        topics: [
          { name: 'Ethical hacking', yt: 'https://www.youtube.com/@HackerSploit', done: false },
          { name: 'Penetration testing', yt: 'https://www.youtube.com/@TheCyberMentor', done: false },
          { name: 'Vulnerability assessment', yt: 'https://www.youtube.com/@JohnHammond', done: false }
        ]
      },
      {
        title: 'Tools',
        topics: [
          { name: 'Kali Linux', yt: 'https://www.youtube.com/@NetworkChuck', done: false },
          { name: 'Wireshark', yt: 'https://www.youtube.com/@DavidBombal', done: false },
          { name: 'Metasploit', yt: 'https://www.youtube.com/@HackerSploit', done: false },
          { name: 'Burp Suite', yt: 'https://www.youtube.com/@TheCyberMentor', done: false }
        ]
      },
      {
        title: 'Programming',
        topics: [
          { name: 'Python', yt: 'https://www.youtube.com/@freecodecamp', done: false },
          { name: 'bash scripting', yt: 'https://www.youtube.com/@NetworkChuck', done: false }
        ]
      }
    ]
  },
  {
    id: 'ds',
    name: 'Data Science & Analytics',
    shortName: 'Data Science',
    icon: '📊',
    color: '#06b6d4',
    gradient: 'from-cyan-500 to-teal-500',
    description: 'Learn data wrangling, visualization, statistical modeling, and big data technologies.',
    semesters: [
      {
        title: 'Core Skills',
        topics: [
          { name: 'Statistics & probability', yt: 'https://www.youtube.com/@statquest', done: false },
          { name: 'Linear algebra', yt: 'https://www.youtube.com/@3blue1brown', done: false },
          { name: 'Data analysis', yt: 'https://www.youtube.com/@AlexTheAnalyst', done: false }
        ]
      },
      {
        title: 'Technical Skills',
        topics: [
          { name: 'Python / R', yt: 'https://www.youtube.com/@freecodecamp', done: false },
          { name: 'Pandas, NumPy', yt: 'https://www.youtube.com/@Coreyms', done: false },
          { name: 'Machine learning algorithms', yt: 'https://www.youtube.com/@statquest', done: false }
        ]
      },
      {
        title: 'Tools',
        topics: [
          { name: 'Jupyter Notebook', yt: 'https://www.youtube.com/@Coreyms', done: false },
          { name: 'Power BI / Tableau', yt: 'https://www.youtube.com/@KevinStratvert', done: false }
        ]
      },
      {
        title: 'Advanced Skills',
        topics: [
          { name: 'Deep learning', yt: 'https://www.youtube.com/@Deeplearningai', done: false },
          { name: 'Big data (Hadoop, Spark)', yt: 'https://www.youtube.com/@edurekaIN', done: false }
        ]
      }
    ]
  },
  {
    id: 'backend',
    name: 'Backend Engineering',
    shortName: 'Backend',
    icon: '⚙️',
    color: '#8b5cf6',
    gradient: 'from-violet-500 to-purple-500',
    description: 'Server-side logic, databases, APIs, and scalable architecture.',
    semesters: [
      {
        title: 'Core Skills',
        topics: [
          { name: 'Server-side logic', yt: 'https://www.youtube.com/@HusseinNasser-software-engineering', done: false },
          { name: 'APIs (REST, GraphQL)', yt: 'https://www.youtube.com/@freecodecamp', done: false },
          { name: 'Databases', yt: 'https://www.youtube.com/@HusseinNasser-software-engineering', done: false }
        ]
      },
      {
        title: 'Programming',
        topics: [
          { name: 'Node.js / Python / Java / Go', yt: 'https://www.youtube.com/@TraversyMedia', done: false }
        ]
      },
      {
        title: 'Database Skills',
        topics: [
          { name: 'MySQL / PostgreSQL', yt: 'https://www.youtube.com/@BroCodez', done: false },
          { name: 'MongoDB', yt: 'https://www.youtube.com/@WebDevSimplified', done: false }
        ]
      },
      {
        title: 'Tools',
        topics: [
          { name: 'Git & GitHub', yt: 'https://www.youtube.com/@Fireship', done: false },
          { name: 'Docker', yt: 'https://www.youtube.com/@NetworkChuck', done: false },
          { name: 'AWS / Cloud basics', yt: 'https://www.youtube.com/@TechWithTim', done: false }
        ]
      }
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend Engineering',
    shortName: 'Frontend',
    icon: '🎨',
    color: '#ec4899',
    gradient: 'from-pink-500 to-rose-500',
    description: 'Build beautiful, responsive, and interactive user interfaces.',
    semesters: [
      {
        title: 'Core Skills',
        topics: [
          { name: 'HTML, CSS, JavaScript', yt: 'https://www.youtube.com/@BroCodez', done: false }
        ]
      },
      {
        title: 'Frameworks',
        topics: [
          { name: 'React.js (most important)', yt: 'https://www.youtube.com/@freecodecamp', done: false },
          { name: 'Angular / Vue (optional)', yt: 'https://www.youtube.com/@TraversyMedia', done: false }
        ]
      },
      {
        title: 'Skills',
        topics: [
          { name: 'Responsive design', yt: 'https://www.youtube.com/@KevinPowell', done: false },
          { name: 'UI/UX basics', yt: 'https://www.youtube.com/@DesignCourse', done: false },
          { name: 'Browser debugging', yt: 'https://www.youtube.com/@Fireship', done: false }
        ]
      },
      {
        title: 'Tools',
        topics: [
          { name: 'Git', yt: 'https://www.youtube.com/@programmingwithmosh', done: false },
          { name: 'Figma', yt: 'https://www.youtube.com/@DesignCourse', done: false }
        ]
      }
    ]
  },
  {
    id: 'ai',
    name: 'AI Engineering',
    shortName: 'AI',
    icon: '🧠',
    color: '#3b82f6',
    gradient: 'from-blue-500 to-indigo-500',
    description: 'Machine learning models, neural networks, and intelligent system development.',
    semesters: [
      {
        title: 'Core Skills',
        topics: [
          { name: 'Machine learning', yt: 'https://www.youtube.com/@krishnaik06', done: false },
          { name: 'Deep learning', yt: 'https://www.youtube.com/@Deeplearningai', done: false },
          { name: 'Neural networks', yt: 'https://www.youtube.com/@3blue1brown', done: false }
        ]
      },
      {
        title: 'Programming',
        topics: [
          { name: 'Python', yt: 'https://www.youtube.com/@BroCodez', done: false }
        ]
      },
      {
        title: 'Frameworks',
        topics: [
          { name: 'TensorFlow', yt: 'https://www.youtube.com/@freecodecamp', done: false },
          { name: 'PyTorch', yt: 'https://www.youtube.com/@freecodecamp', done: false }
        ]
      },
      {
        title: 'Advanced Skills',
        topics: [
          { name: 'NLP (Natural Language Processing)', yt: 'https://www.youtube.com/@krishnaik06', done: false },
          { name: 'Computer Vision', yt: 'https://www.youtube.com/@MurtazasWorkshopRoboticsandAI', done: false }
        ]
      }
    ]
  },
  {
    id: 'aiml',
    name: 'AI + ML Specialization',
    shortName: 'AI/ML',
    icon: '🤖',
    color: '#6366f1',
    gradient: 'from-indigo-500 to-purple-500',
    description: 'Deep dive into model training, evaluation, and optimization.',
    semesters: [
      {
        title: 'Core Skills',
        topics: [
          { name: 'Supervised & unsupervised learning', yt: 'https://www.youtube.com/@statquest', done: false },
          { name: 'Model training & evaluation', yt: 'https://www.youtube.com/@krishnaik06', done: false }
        ]
      },
      {
        title: 'Technical Skills',
        topics: [
          { name: 'Scikit-learn', yt: 'https://www.youtube.com/@freecodecamp', done: false },
          { name: 'TensorFlow / PyTorch', yt: 'https://www.youtube.com/@Deeplearningai', done: false }
        ]
      },
      {
        title: 'Advanced Skills',
        topics: [
          { name: 'Reinforcement learning', yt: 'https://www.youtube.com/@Deeplearningai', done: false },
          { name: 'Model optimization', yt: 'https://www.youtube.com/@krishnaik06', done: false }
        ]
      }
    ]
  }
];
