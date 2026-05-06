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
          { name: 'Introduction to Programming (C)', yt: 'https://youtube.com/results?search_query=C+programming+full+course', done: false },
          { name: 'Data Structures & Algorithms', yt: 'https://youtube.com/results?search_query=data+structures+full+course', done: false },
          { name: 'Database Management Systems', yt: 'https://youtube.com/results?search_query=DBMS+full+course', done: false },
          { name: 'Operating Systems', yt: 'https://youtube.com/results?search_query=operating+systems+full+course', done: false },
          { name: 'Computer Networks', yt: 'https://youtube.com/results?search_query=computer+networks+full+course', done: false }
        ]
      },
      {
        title: 'Technical Skills',
        topics: [
          { name: 'Object Oriented Programming (C++/Java)', yt: 'https://youtube.com/results?search_query=OOP+C%2B%2B+full+course', done: false },
          { name: 'Web Development (HTML/CSS/JS)', yt: 'https://youtube.com/results?search_query=web+development+full+course', done: false },
          { name: 'Software Engineering', yt: 'https://youtube.com/results?search_query=software+engineering+full+course', done: false }
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
          { name: 'Electrical circuits & network theory', yt: 'https://youtube.com/results?search_query=Electrical+circuits+%26+network+theory', done: false },
          { name: 'Power systems (generation, transmission, distribution)', yt: 'https://youtube.com/results?search_query=Power+systems+generation+transmission+distribution', done: false },
          { name: 'Control systems', yt: 'https://youtube.com/results?search_query=Control+systems+engineering', done: false },
          { name: 'Electrical machines (motors, transformers)', yt: 'https://youtube.com/results?search_query=Electrical+machines+motors+transformers', done: false },
          { name: 'Analog & digital electronics basics', yt: 'https://youtube.com/results?search_query=Analog+%26+digital+electronics+basics', done: false }
        ]
      },
      {
        title: 'Technical Skills',
        topics: [
          { name: 'MATLAB / Simulink', yt: 'https://youtube.com/results?search_query=MATLAB+Simulink+tutorial', done: false },
          { name: 'PSCAD (power system simulation)', yt: 'https://youtube.com/results?search_query=PSCAD+power+system+simulation', done: false },
          { name: 'PLC & SCADA basics', yt: 'https://youtube.com/results?search_query=PLC+%26+SCADA+basics', done: false },
          { name: 'Embedded C (for controllers)', yt: 'https://youtube.com/results?search_query=Embedded+C+for+controllers', done: false }
        ]
      },
      {
        title: 'Practical Skills',
        topics: [
          { name: 'Circuit design & troubleshooting', yt: 'https://youtube.com/results?search_query=Circuit+design+%26+troubleshooting', done: false },
          { name: 'Wiring, protection systems', yt: 'https://youtube.com/results?search_query=Wiring+protection+systems', done: false },
          { name: 'Renewable energy systems (solar, EV basics)', yt: 'https://youtube.com/results?search_query=Renewable+energy+systems+solar+EV+basics', done: false }
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
          { name: 'Analog & digital electronics', yt: 'https://youtube.com/results?search_query=Analog+%26+digital+electronics', done: false },
          { name: 'Signals and systems', yt: 'https://youtube.com/results?search_query=Signals+and+systems', done: false },
          { name: 'Communication systems', yt: 'https://youtube.com/results?search_query=Communication+systems', done: false },
          { name: 'Microprocessors & microcontrollers', yt: 'https://youtube.com/results?search_query=Microprocessors+%26+microcontrollers', done: false }
        ]
      },
      {
        title: 'Technical Skills',
        topics: [
          { name: 'Embedded systems (Arduino, Raspberry Pi)', yt: 'https://youtube.com/results?search_query=Embedded+systems+Arduino+Raspberry+Pi', done: false },
          { name: 'VLSI basics', yt: 'https://youtube.com/results?search_query=VLSI+basics', done: false },
          { name: 'Verilog / VHDL', yt: 'https://youtube.com/results?search_query=Verilog+VHDL+tutorial', done: false },
          { name: 'MATLAB', yt: 'https://youtube.com/results?search_query=MATLAB+tutorial', done: false }
        ]
      },
      {
        title: 'Tools',
        topics: [
          { name: 'Multisim / Proteus', yt: 'https://youtube.com/results?search_query=Multisim+Proteus+tutorial', done: false },
          { name: 'Keil IDE', yt: 'https://youtube.com/results?search_query=Keil+IDE+tutorial', done: false }
        ]
      },
      {
        title: 'Trending Skills',
        topics: [
          { name: 'IoT (Internet of Things)', yt: 'https://youtube.com/results?search_query=IoT+Internet+of+Things+course', done: false },
          { name: '5G & wireless communication', yt: 'https://youtube.com/results?search_query=5G+%26+wireless+communication', done: false }
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
          { name: 'Structural engineering', yt: 'https://youtube.com/results?search_query=Structural+engineering+course', done: false },
          { name: 'Geotechnical engineering', yt: 'https://youtube.com/results?search_query=Geotechnical+engineering', done: false },
          { name: 'Fluid mechanics', yt: 'https://youtube.com/results?search_query=Fluid+mechanics+civil', done: false },
          { name: 'Surveying', yt: 'https://youtube.com/results?search_query=Surveying+civil+engineering', done: false }
        ]
      },
      {
        title: 'Software Skills',
        topics: [
          { name: 'AutoCAD', yt: 'https://youtube.com/results?search_query=AutoCAD+civil+tutorial', done: false },
          { name: 'STAAD Pro', yt: 'https://youtube.com/results?search_query=STAAD+Pro+tutorial', done: false },
          { name: 'ETABS', yt: 'https://youtube.com/results?search_query=ETABS+tutorial', done: false },
          { name: 'Revit', yt: 'https://youtube.com/results?search_query=Revit+architecture+tutorial', done: false }
        ]
      },
      {
        title: 'Practical Skills',
        topics: [
          { name: 'Site management', yt: 'https://youtube.com/results?search_query=Site+management+civil+engineering', done: false },
          { name: 'Construction planning', yt: 'https://youtube.com/results?search_query=Construction+planning', done: false },
          { name: 'Master testing', yt: 'https://youtube.com/results?search_query=Material+testing+civil+engineering', done: false }
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
          { name: 'Thermodynamics', yt: 'https://youtube.com/results?search_query=Thermodynamics+mechanical', done: false },
          { name: 'Fluid mechanics', yt: 'https://youtube.com/results?search_query=Fluid+mechanics+mechanical', done: false },
          { name: 'Strength of materials', yt: 'https://youtube.com/results?search_query=Strength+of+materials', done: false },
          { name: 'Machine design', yt: 'https://youtube.com/results?search_query=Machine+design', done: false }
        ]
      },
      {
        title: 'Software Skills',
        topics: [
          { name: 'AutoCAD / SolidWorks', yt: 'https://youtube.com/results?search_query=SolidWorks+tutorial', done: false },
          { name: 'ANSYS (simulation)', yt: 'https://youtube.com/results?search_query=ANSYS+tutorial', done: false },
          { name: 'CATIA', yt: 'https://youtube.com/results?search_query=CATIA+tutorial', done: false }
        ]
      },
      {
        title: 'Practical Skills',
        topics: [
          { name: 'Manufacturing processes', yt: 'https://youtube.com/results?search_query=Manufacturing+processes', done: false },
          { name: 'CNC basics', yt: 'https://youtube.com/results?search_query=CNC+programming+basics', done: false },
          { name: 'Robotics basics', yt: 'https://youtube.com/results?search_query=Robotics+basics+mechanical', done: false }
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
          { name: 'Networking (TCP/IP, DNS, HTTP)', yt: 'https://youtube.com/results?search_query=Networking+TCP%2FIP+DNS+HTTP', done: false },
          { name: 'Operating systems (Linux, Windows)', yt: 'https://youtube.com/results?search_query=Operating+systems+Linux+Windows+security', done: false },
          { name: 'Cryptography basics', yt: 'https://youtube.com/results?search_query=Cryptography+basics', done: false }
        ]
      },
      {
        title: 'Technical Skills',
        topics: [
          { name: 'Ethical hacking', yt: 'https://youtube.com/results?search_query=Ethical+hacking+full+course', done: false },
          { name: 'Penetration testing', yt: 'https://youtube.com/results?search_query=Penetration+testing+tutorial', done: false },
          { name: 'Vulnerability assessment', yt: 'https://youtube.com/results?search_query=Vulnerability+assessment', done: false }
        ]
      },
      {
        title: 'Tools',
        topics: [
          { name: 'Kali Linux', yt: 'https://youtube.com/results?search_query=Kali+Linux+tutorial', done: false },
          { name: 'Wireshark', yt: 'https://youtube.com/results?search_query=Wireshark+tutorial', done: false },
          { name: 'Metasploit', yt: 'https://youtube.com/results?search_query=Metasploit+tutorial', done: false },
          { name: 'Burp Suite', yt: 'https://youtube.com/results?search_query=Burp+Suite+tutorial', done: false }
        ]
      },
      {
        title: 'Programming',
        topics: [
          { name: 'Python', yt: 'https://youtube.com/results?search_query=Python+for+cybersecurity', done: false },
          { name: 'bash scripting', yt: 'https://youtube.com/results?search_query=bash+scripting+tutorial', done: false }
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
          { name: 'Statistics & probability', yt: 'https://youtube.com/results?search_query=Statistics+%26+probability+for+data+science', done: false },
          { name: 'Linear algebra', yt: 'https://youtube.com/results?search_query=Linear+algebra+for+data+science', done: false },
          { name: 'Data analysis', yt: 'https://youtube.com/results?search_query=Data+analysis+tutorial', done: false }
        ]
      },
      {
        title: 'Technical Skills',
        topics: [
          { name: 'Python / R', yt: 'https://youtube.com/results?search_query=Python+vs+R+for+data+science', done: false },
          { name: 'Pandas, NumPy', yt: 'https://youtube.com/results?search_query=Pandas+NumPy+tutorial', done: false },
          { name: 'Machine learning algorithms', yt: 'https://youtube.com/results?search_query=Machine+learning+algorithms+explained', done: false }
        ]
      },
      {
        title: 'Tools',
        topics: [
          { name: 'Jupyter Notebook', yt: 'https://youtube.com/results?search_query=Jupyter+Notebook+tutorial', done: false },
          { name: 'Power BI / Tableau', yt: 'https://youtube.com/results?search_query=Power+BI+Tableau+tutorial', done: false }
        ]
      },
      {
        title: 'Advanced Skills',
        topics: [
          { name: 'Deep learning', yt: 'https://youtube.com/results?search_query=Deep+learning+for+data+science', done: false },
          { name: 'Big data (Hadoop, Spark)', yt: 'https://youtube.com/results?search_query=Hadoop+Spark+tutorial', done: false }
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
          { name: 'Server-side logic', yt: 'https://youtube.com/results?search_query=Server-side+logic+explained', done: false },
          { name: 'APIs (REST, GraphQL)', yt: 'https://youtube.com/results?search_query=REST+GraphQL+API+tutorial', done: false },
          { name: 'Databases', yt: 'https://youtube.com/results?search_query=Database+design+tutorial', done: false }
        ]
      },
      {
        title: 'Programming',
        topics: [
          { name: 'Node.js / Python / Java / Go', yt: 'https://youtube.com/results?search_query=Backend+programming+languages', done: false }
        ]
      },
      {
        title: 'Database Skills',
        topics: [
          { name: 'MySQL / PostgreSQL', yt: 'https://youtube.com/results?search_query=MySQL+PostgreSQL+tutorial', done: false },
          { name: 'MongoDB', yt: 'https://youtube.com/results?search_query=MongoDB+tutorial', done: false }
        ]
      },
      {
        title: 'Tools',
        topics: [
          { name: 'Git & GitHub', yt: 'https://youtube.com/results?search_query=Git+GitHub+tutorial', done: false },
          { name: 'Docker', yt: 'https://youtube.com/results?search_query=Docker+tutorial+for+beginners', done: false },
          { name: 'AWS / Cloud basics', yt: 'https://youtube.com/results?search_query=AWS+Cloud+basics', done: false }
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
          { name: 'HTML, CSS, JavaScript', yt: 'https://youtube.com/results?search_query=HTML+CSS+JavaScript+course', done: false }
        ]
      },
      {
        title: 'Frameworks',
        topics: [
          { name: 'React.js (most important)', yt: 'https://youtube.com/results?search_query=React.js+full+course', done: false },
          { name: 'Angular / Vue (optional)', yt: 'https://youtube.com/results?search_query=Angular+Vue+tutorial', done: false }
        ]
      },
      {
        title: 'Skills',
        topics: [
          { name: 'Responsive design', yt: 'https://youtube.com/results?search_query=Responsive+web+design+tutorial', done: false },
          { name: 'UI/UX basics', yt: 'https://youtube.com/results?search_query=UI+UX+design+basics', done: false },
          { name: 'Browser debugging', yt: 'https://youtube.com/results?search_query=Chrome+DevTools+tutorial', done: false }
        ]
      },
      {
        title: 'Tools',
        topics: [
          { name: 'Git', yt: 'https://youtube.com/results?search_query=Git+tutorial+frontend', done: false },
          { name: 'Figma', yt: 'https://youtube.com/results?search_query=Figma+tutorial+for+developers', done: false }
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
          { name: 'Machine learning', yt: 'https://youtube.com/results?search_query=Machine+learning+full+course', done: false },
          { name: 'Deep learning', yt: 'https://youtube.com/results?search_query=Deep+learning+full+course', done: false },
          { name: 'Neural networks', yt: 'https://youtube.com/results?search_query=Neural+networks+explained', done: false }
        ]
      },
      {
        title: 'Programming',
        topics: [
          { name: 'Python', yt: 'https://youtube.com/results?search_query=Python+for+AI', done: false }
        ]
      },
      {
        title: 'Frameworks',
        topics: [
          { name: 'TensorFlow', yt: 'https://youtube.com/results?search_query=TensorFlow+tutorial', done: false },
          { name: 'PyTorch', yt: 'https://youtube.com/results?search_query=PyTorch+tutorial', done: false }
        ]
      },
      {
        title: 'Advanced Skills',
        topics: [
          { name: 'NLP (Natural Language Processing)', yt: 'https://youtube.com/results?search_query=NLP+tutorial', done: false },
          { name: 'Computer Vision', yt: 'https://youtube.com/results?search_query=Computer+Vision+tutorial', done: false }
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
          { name: 'Supervised & unsupervised learning', yt: 'https://youtube.com/results?search_query=Supervised+%26+unsupervised+learning', done: false },
          { name: 'Model training & evaluation', yt: 'https://youtube.com/results?search_query=Model+training+%26+evaluation', done: false }
        ]
      },
      {
        title: 'Technical Skills',
        topics: [
          { name: 'Scikit-learn', yt: 'https://youtube.com/results?search_query=Scikit-learn+tutorial', done: false },
          { name: 'TensorFlow / PyTorch', yt: 'https://youtube.com/results?search_query=TensorFlow+PyTorch+tutorial', done: false }
        ]
      },
      {
        title: 'Advanced Skills',
        topics: [
          { name: 'Reinforcement learning', yt: 'https://youtube.com/results?search_query=Reinforcement+learning+tutorial', done: false },
          { name: 'Model optimization', yt: 'https://youtube.com/results?search_query=Machine+learning+model+optimization', done: false }
        ]
      }
    ]
  }
];
