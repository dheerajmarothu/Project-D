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
        title: 'Semester 1 — Foundations',
        topics: [
          { name: 'Introduction to Programming (C)', yt: 'https://youtube.com/results?search_query=C+programming+full+course', done: false },
          { name: 'Mathematics I (Calculus & Linear Algebra)', yt: 'https://youtube.com/results?search_query=engineering+mathematics+1', done: false },
          { name: 'Physics (Mechanics & Waves)', yt: 'https://youtube.com/results?search_query=engineering+physics+full+course', done: false },
          { name: 'Basic Electronics', yt: 'https://youtube.com/results?search_query=basic+electronics+engineering', done: false },
          { name: 'Communication Skills', yt: 'https://youtube.com/results?search_query=communication+skills+engineering', done: false }
        ]
      },
      {
        title: 'Semester 2 — Core Basics',
        topics: [
          { name: 'Object Oriented Programming (C++/Java)', yt: 'https://youtube.com/results?search_query=OOP+C%2B%2B+full+course', done: false },
          { name: 'Data Structures', yt: 'https://youtube.com/results?search_query=data+structures+full+course', done: false },
          { name: 'Discrete Mathematics', yt: 'https://youtube.com/results?search_query=discrete+mathematics+full+course', done: false },
          { name: 'Digital Logic Design', yt: 'https://youtube.com/results?search_query=digital+logic+design+full+course', done: false },
          { name: 'Mathematics II (Probability & Statistics)', yt: 'https://youtube.com/results?search_query=probability+statistics+engineering', done: false }
        ]
      },
      {
        title: 'Semester 3 — Intermediate',
        topics: [
          { name: 'Algorithms & Complexity', yt: 'https://youtube.com/results?search_query=algorithms+full+course', done: false },
          { name: 'Database Management Systems', yt: 'https://youtube.com/results?search_query=DBMS+full+course', done: false },
          { name: 'Computer Organization & Architecture', yt: 'https://youtube.com/results?search_query=computer+organization+architecture', done: false },
          { name: 'Operating Systems', yt: 'https://youtube.com/results?search_query=operating+systems+full+course', done: false },
          { name: 'Theory of Computation', yt: 'https://youtube.com/results?search_query=theory+of+computation+full+course', done: false }
        ]
      },
      {
        title: 'Semester 4 — Advanced Core',
        topics: [
          { name: 'Computer Networks', yt: 'https://youtube.com/results?search_query=computer+networks+full+course', done: false },
          { name: 'Software Engineering', yt: 'https://youtube.com/results?search_query=software+engineering+full+course', done: false },
          { name: 'Web Development (HTML/CSS/JS)', yt: 'https://youtube.com/results?search_query=web+development+full+course', done: false },
          { name: 'Compiler Design', yt: 'https://youtube.com/results?search_query=compiler+design+full+course', done: false },
          { name: 'Machine Learning Basics', yt: 'https://youtube.com/results?search_query=machine+learning+full+course+beginners', done: false }
        ]
      }
    ]
  },
  {
    id: 'aiml',
    name: 'Artificial Intelligence & ML',
    shortName: 'AI/ML',
    icon: '🤖',
    color: '#8b5cf6',
    gradient: 'from-violet-500 to-purple-500',
    description: 'Dive into neural networks, deep learning, NLP, computer vision, and intelligent systems.',
    semesters: [
      {
        title: 'Semester 1 — Math & Programming',
        topics: [
          { name: 'Python Programming', yt: 'https://youtube.com/results?search_query=python+full+course+beginners', done: false },
          { name: 'Linear Algebra for ML', yt: 'https://youtube.com/results?search_query=linear+algebra+machine+learning', done: false },
          { name: 'Probability & Statistics', yt: 'https://youtube.com/results?search_query=probability+statistics+for+data+science', done: false },
          { name: 'Calculus (Multivariate)', yt: 'https://youtube.com/results?search_query=multivariate+calculus+machine+learning', done: false },
          { name: 'Intro to AI Concepts', yt: 'https://youtube.com/results?search_query=introduction+to+artificial+intelligence', done: false }
        ]
      },
      {
        title: 'Semester 2 — Core ML',
        topics: [
          { name: 'Machine Learning (Supervised/Unsupervised)', yt: 'https://youtube.com/results?search_query=machine+learning+full+course', done: false },
          { name: 'Data Structures & Algorithms', yt: 'https://youtube.com/results?search_query=DSA+python+full+course', done: false },
          { name: 'Data Preprocessing & Visualization', yt: 'https://youtube.com/results?search_query=data+preprocessing+python', done: false },
          { name: 'Optimization Techniques', yt: 'https://youtube.com/results?search_query=optimization+machine+learning', done: false },
          { name: 'Feature Engineering', yt: 'https://youtube.com/results?search_query=feature+engineering+tutorial', done: false }
        ]
      },
      {
        title: 'Semester 3 — Deep Learning',
        topics: [
          { name: 'Neural Networks & Deep Learning', yt: 'https://youtube.com/results?search_query=deep+learning+full+course', done: false },
          { name: 'Natural Language Processing', yt: 'https://youtube.com/results?search_query=NLP+full+course', done: false },
          { name: 'Computer Vision', yt: 'https://youtube.com/results?search_query=computer+vision+full+course', done: false },
          { name: 'Reinforcement Learning', yt: 'https://youtube.com/results?search_query=reinforcement+learning+full+course', done: false },
          { name: 'MLOps & Deployment', yt: 'https://youtube.com/results?search_query=MLOps+full+course', done: false }
        ]
      },
      {
        title: 'Semester 4 — Advanced AI',
        topics: [
          { name: 'Generative AI & LLMs', yt: 'https://youtube.com/results?search_query=generative+AI+LLM+course', done: false },
          { name: 'GANs & Diffusion Models', yt: 'https://youtube.com/results?search_query=GANs+tutorial+full+course', done: false },
          { name: 'AI Ethics & Responsible AI', yt: 'https://youtube.com/results?search_query=AI+ethics+course', done: false },
          { name: 'Edge AI & TinyML', yt: 'https://youtube.com/results?search_query=TinyML+edge+AI+course', done: false },
          { name: 'Research Paper Reading', yt: 'https://youtube.com/results?search_query=how+to+read+AI+research+papers', done: false }
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
        title: 'Semester 1 — Foundations',
        topics: [
          { name: 'Python for Data Science', yt: 'https://youtube.com/results?search_query=python+data+science+course', done: false },
          { name: 'Statistics & Probability', yt: 'https://youtube.com/results?search_query=statistics+data+science', done: false },
          { name: 'SQL & Databases', yt: 'https://youtube.com/results?search_query=SQL+full+course+data+science', done: false },
          { name: 'NumPy & Pandas', yt: 'https://youtube.com/results?search_query=numpy+pandas+tutorial', done: false },
          { name: 'Data Visualization (Matplotlib/Seaborn)', yt: 'https://youtube.com/results?search_query=matplotlib+seaborn+tutorial', done: false }
        ]
      },
      {
        title: 'Semester 2 — Analysis & ML',
        topics: [
          { name: 'Exploratory Data Analysis', yt: 'https://youtube.com/results?search_query=exploratory+data+analysis+python', done: false },
          { name: 'Machine Learning for Data Science', yt: 'https://youtube.com/results?search_query=machine+learning+data+science', done: false },
          { name: 'Hypothesis Testing & A/B Testing', yt: 'https://youtube.com/results?search_query=hypothesis+testing+AB+testing', done: false },
          { name: 'Web Scraping & APIs', yt: 'https://youtube.com/results?search_query=web+scraping+python+course', done: false },
          { name: 'Tableau / Power BI', yt: 'https://youtube.com/results?search_query=Tableau+Power+BI+full+course', done: false }
        ]
      },
      {
        title: 'Semester 3 — Big Data',
        topics: [
          { name: 'Big Data Technologies (Hadoop/Spark)', yt: 'https://youtube.com/results?search_query=hadoop+spark+full+course', done: false },
          { name: 'Deep Learning for Data Science', yt: 'https://youtube.com/results?search_query=deep+learning+data+science', done: false },
          { name: 'Time Series Analysis', yt: 'https://youtube.com/results?search_query=time+series+analysis+python', done: false },
          { name: 'Cloud Computing (AWS/GCP)', yt: 'https://youtube.com/results?search_query=AWS+data+science+course', done: false },
          { name: 'Data Ethics & Privacy', yt: 'https://youtube.com/results?search_query=data+ethics+privacy+course', done: false }
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
        title: 'Semester 1 — Basics',
        topics: [
          { name: 'Basic Electrical Engineering', yt: 'https://youtube.com/results?search_query=basic+electrical+engineering+course', done: false },
          { name: 'Electronic Devices & Circuits', yt: 'https://youtube.com/results?search_query=electronic+devices+circuits+course', done: false },
          { name: 'Engineering Mathematics', yt: 'https://youtube.com/results?search_query=engineering+mathematics+full+course', done: false },
          { name: 'C Programming', yt: 'https://youtube.com/results?search_query=C+programming+full+course', done: false },
          { name: 'Physics (Electromagnetics)', yt: 'https://youtube.com/results?search_query=electromagnetics+engineering+physics', done: false }
        ]
      },
      {
        title: 'Semester 2 — Core Electronics',
        topics: [
          { name: 'Digital Electronics', yt: 'https://youtube.com/results?search_query=digital+electronics+full+course', done: false },
          { name: 'Signals & Systems', yt: 'https://youtube.com/results?search_query=signals+and+systems+full+course', done: false },
          { name: 'Analog Circuits', yt: 'https://youtube.com/results?search_query=analog+circuits+full+course', done: false },
          { name: 'Network Analysis', yt: 'https://youtube.com/results?search_query=network+analysis+circuits+course', done: false },
          { name: 'Microprocessors', yt: 'https://youtube.com/results?search_query=microprocessor+8085+full+course', done: false }
        ]
      },
      {
        title: 'Semester 3 — Communication',
        topics: [
          { name: 'Communication Systems', yt: 'https://youtube.com/results?search_query=communication+systems+full+course', done: false },
          { name: 'Embedded Systems', yt: 'https://youtube.com/results?search_query=embedded+systems+full+course', done: false },
          { name: 'VLSI Design', yt: 'https://youtube.com/results?search_query=VLSI+design+full+course', done: false },
          { name: 'Control Systems', yt: 'https://youtube.com/results?search_query=control+systems+full+course', done: false },
          { name: 'DSP (Digital Signal Processing)', yt: 'https://youtube.com/results?search_query=digital+signal+processing+full+course', done: false }
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
        title: 'Semester 1 — Foundations',
        topics: [
          { name: 'Circuit Theory', yt: 'https://youtube.com/results?search_query=circuit+theory+full+course', done: false },
          { name: 'Electrical Machines I', yt: 'https://youtube.com/results?search_query=electrical+machines+full+course', done: false },
          { name: 'Engineering Mathematics', yt: 'https://youtube.com/results?search_query=engineering+mathematics+full+course', done: false },
          { name: 'Electromagnetic Fields', yt: 'https://youtube.com/results?search_query=electromagnetic+fields+course', done: false },
          { name: 'Basic Electronics', yt: 'https://youtube.com/results?search_query=basic+electronics+course', done: false }
        ]
      },
      {
        title: 'Semester 2 — Power Systems',
        topics: [
          { name: 'Power Systems', yt: 'https://youtube.com/results?search_query=power+systems+full+course', done: false },
          { name: 'Control Systems', yt: 'https://youtube.com/results?search_query=control+systems+full+course', done: false },
          { name: 'Power Electronics', yt: 'https://youtube.com/results?search_query=power+electronics+full+course', done: false },
          { name: 'Electrical Machines II', yt: 'https://youtube.com/results?search_query=electrical+machines+2+course', done: false },
          { name: 'Renewable Energy Systems', yt: 'https://youtube.com/results?search_query=renewable+energy+systems+course', done: false }
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
        title: 'Semester 1 — Foundations',
        topics: [
          { name: 'Engineering Mechanics', yt: 'https://youtube.com/results?search_query=engineering+mechanics+full+course', done: false },
          { name: 'Thermodynamics', yt: 'https://youtube.com/results?search_query=thermodynamics+full+course+engineering', done: false },
          { name: 'Engineering Drawing & CAD', yt: 'https://youtube.com/results?search_query=engineering+drawing+CAD+course', done: false },
          { name: 'Material Science', yt: 'https://youtube.com/results?search_query=material+science+engineering+course', done: false },
          { name: 'Workshop Technology', yt: 'https://youtube.com/results?search_query=workshop+technology+course', done: false }
        ]
      },
      {
        title: 'Semester 2 — Core Mech',
        topics: [
          { name: 'Fluid Mechanics', yt: 'https://youtube.com/results?search_query=fluid+mechanics+full+course', done: false },
          { name: 'Strength of Materials', yt: 'https://youtube.com/results?search_query=strength+of+materials+full+course', done: false },
          { name: 'Manufacturing Processes', yt: 'https://youtube.com/results?search_query=manufacturing+processes+full+course', done: false },
          { name: 'Machine Design', yt: 'https://youtube.com/results?search_query=machine+design+full+course', done: false },
          { name: 'Heat Transfer', yt: 'https://youtube.com/results?search_query=heat+transfer+full+course', done: false }
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
        title: 'Semester 1 — Foundations',
        topics: [
          { name: 'Engineering Mechanics', yt: 'https://youtube.com/results?search_query=engineering+mechanics+civil', done: false },
          { name: 'Surveying', yt: 'https://youtube.com/results?search_query=surveying+civil+engineering+course', done: false },
          { name: 'Building Materials', yt: 'https://youtube.com/results?search_query=building+materials+construction+course', done: false },
          { name: 'Engineering Drawing', yt: 'https://youtube.com/results?search_query=engineering+drawing+civil+course', done: false },
          { name: 'Geology', yt: 'https://youtube.com/results?search_query=engineering+geology+course', done: false }
        ]
      },
      {
        title: 'Semester 2 — Structural',
        topics: [
          { name: 'Structural Analysis', yt: 'https://youtube.com/results?search_query=structural+analysis+full+course', done: false },
          { name: 'Geotechnical Engineering', yt: 'https://youtube.com/results?search_query=geotechnical+engineering+course', done: false },
          { name: 'Fluid Mechanics & Hydraulics', yt: 'https://youtube.com/results?search_query=fluid+mechanics+hydraulics+civil', done: false },
          { name: 'Concrete Technology', yt: 'https://youtube.com/results?search_query=concrete+technology+course', done: false },
          { name: 'Environmental Engineering', yt: 'https://youtube.com/results?search_query=environmental+engineering+course', done: false }
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
        title: 'Semester 1 — Fundamentals',
        topics: [
          { name: 'Networking Fundamentals', yt: 'https://youtube.com/results?search_query=networking+fundamentals+full+course', done: false },
          { name: 'Linux Administration', yt: 'https://youtube.com/results?search_query=linux+administration+course', done: false },
          { name: 'Python for Security', yt: 'https://youtube.com/results?search_query=python+cyber+security+course', done: false },
          { name: 'Intro to Cyber Security', yt: 'https://youtube.com/results?search_query=cyber+security+full+course+beginners', done: false },
          { name: 'Cryptography Basics', yt: 'https://youtube.com/results?search_query=cryptography+full+course', done: false }
        ]
      },
      {
        title: 'Semester 2 — Offensive & Defensive',
        topics: [
          { name: 'Ethical Hacking & Pen Testing', yt: 'https://youtube.com/results?search_query=ethical+hacking+full+course', done: false },
          { name: 'Web Application Security', yt: 'https://youtube.com/results?search_query=web+application+security+course', done: false },
          { name: 'Digital Forensics', yt: 'https://youtube.com/results?search_query=digital+forensics+course', done: false },
          { name: 'SOC & Incident Response', yt: 'https://youtube.com/results?search_query=SOC+analyst+course', done: false },
          { name: 'Cloud Security', yt: 'https://youtube.com/results?search_query=cloud+security+course', done: false }
        ]
      }
    ]
  }
];
