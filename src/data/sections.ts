import { GraduationCap, FileCheck, Users, UserCheck, Microscope, Heart, Award, HelpCircle, LucideIcon } from "lucide-react";

export interface GalleryImage {
  src: string;
  caption?: string;
  alt?: string;
}

export interface VideoEmbed {
  /** YouTube embed URL or any iframe-embeddable video URL */
  url: string;
  title: string;
  caption?: string;
  /** Optional poster/cover image shown before embed loads */
  poster?: string;
}

export interface ResourceLink {
  label: string;
  url: string;
  description?: string;
  /** lucide icon name kept as string to keep data layer JSON-friendly */
  icon?: "link" | "download" | "external" | "phone" | "mail" | "book" | "shield";
}

export interface SubItem {
  title: string;
  tagline?: string;
  description: string;
  videoUrl?: string;
  link?: string;
}

export interface DetailItem {
  slug: string;
  title: string;
  description: string;
  detail: string;
  features?: string[];
  contacts?: { label: string; value: string }[];
  /** Optional — mini moving image carousel rendered inside detail page */
  gallery?: GalleryImage[];
  /** Optional — single embedded video block */
  video?: VideoEmbed;
  /** Optional — multiple embedded video cards for richer detail pages */
  videos?: VideoEmbed[];
  /** Optional — official resource / link blocks */
  resources?: ResourceLink[];
  /** Optional — nested accordion of related items (e.g. individual fests) */
  subItems?: SubItem[];
}

export interface SectionConfig {
  key: string;
  basePath: string;
  title: string;
  subtitle: string;
  accentText?: string;
  gradient: string;
  icon: LucideIcon;
  items: DetailItem[];
}

export const sections: Record<string, SectionConfig> = {
  acads: {
    key: "acads",
    basePath: "/acads",
    title: "Academics",
    subtitle: `A robust academic framework combining rigor with flexibility.
Designed to nurture critical thinking and practical application.
Supports diverse academic and career pathways.`,
    gradient: "from-[hsl(var(--amber))] to-[hsl(var(--amber-light))]",
    icon: GraduationCap,
    items: [
      {
        slug: "programs",
        title: "Programs (UG, PG, PhD)",
        description: "B.E., B.Pharm and Integrated M.Sc. programs across nine engineering branches and six sciences.",
        detail: "BITS Pilani, Hyderabad Campus offers undergraduate and integrated postgraduate programs identified by unique campus codes.\n\nB.E. branches (A1–AJ): Chemical, Civil, Electrical & Electronics, Mechanical, Computer Science, Electronics & Instrumentation, Electronics & Communication, Mathematics & Computing, and Environmental & Sustainability.\n\nB.Pharm (A5) and Integrated M.Sc. (B1–B7) covering Biological Sciences, Chemistry, Economics, Mathematics, Physics, and Semiconductors & Nanoscience.\n\nHigher Degree (M.E., M.Pharm) and PhD programs available across all departments.",
        features: ["B.E. across 9 branches", "B.Pharm (A5)", "Integrated M.Sc. (B1–B7)", "Higher Degree M.E./M.Pharm", "PhD across departments", "BPHC Digital Library access"],
        contacts: [{ label: "Digital Library", value: "libraryopac.bits-hyderabad.ac.in" }],
      },
      {
        slug: "academic-calendar",
        title: "Academic Calendar",
        description: "Semester dates, exam schedules, holidays, and key deadlines.",
        detail: "The academic year runs from August to May with two semesters. Mid-semester exams, comprehensive exams, and project submission dates are published at the start of each semester. Registration windows, add/drop periods, and holiday schedules available online.",
        features: ["Semester I: Aug – Dec", "Semester II: Jan – May", "Mid-sem & comprehensive exams", "Add/Drop windows", "Holiday & exam schedule"],
      },
      {
        slug: "branches-programs",
        title: "Branches & Programs",
        description: "Engineering, sciences and interdisciplinary career pathways with a premium campus curriculum.",
        detail: `BITS Pilani Hyderabad blends classical branches with emerging interdisciplinary programs.

Engineering branches include Computer Science, Electronics & Communication, Mechanical, Civil, Electrical & Electronics, Chemical, Electronics & Instrumentation, Mathematics & Computing, and Environmental & Sustainability.

Science programs span Biological Sciences, Chemistry, Economics, Mathematics, Physics, and Semiconductors & Nanoscience.

Career pathways include software, data science, consulting, core engineering, healthcare, research, and entrepreneurship. Students can pursue double majors, minor programs, and industry-sponsored projects.`,
        features: ["9 engineering branches", "6 integrated science programs", "Double-major & minor tracks", "Industry-sponsored labs", "Career pathways in core & tech"],
      },
      {
        slug: "academic-buildings",
        title: "Academic Buildings",
        description: "New Acads, Old Acads, Library, Auditorium, and Campus Kitchen.",
        detail: "Academic spaces at BITS Hyderabad include classrooms, lecture halls, laboratories, library facilities, department spaces and the campus auditorium used for major events. These facilities support regular classes, exams, workshops, seminars and student activities.",
        features: ["Classrooms and lecture halls", "Laboratories", "Central Library", "Auditorium", "Department spaces"],
      },
      {
        slug: "ps-placements",
        title: "Practice School & Placements",
        description: "BITS' signature Practice School integrates real industry experience into the degree.",
        detail: "The Practice School (PS) system is a unique BITS model that integrates professional work experience into the academic curriculum.\n\nPS-I: A two-month summer internship at the end of the second year (2-2).\n\nPS-II: A semester-long, paid industry stint during the final year, often converted into pre-placement offers.\n\nThe Placement Cell coordinates campus recruitment with hundreds of recruiters across software, core engineering, consulting, finance and research.",
        features: ["PS-I — 2-month summer (2-2)", "PS-II — semester-long, paid", "Hundreds of PS stations", "Pre-placement offers", "Dedicated Placement Cell"],
        contacts: [{ label: "More info", value: "bits-pilani.ac.in/practice-school" }],
      },
    ],
  },

  admissions: {
    key: "admissions",
    basePath: "/admissions",
    title: "Admissions",
    subtitle: "Your journey begins here — transparent, merit-based, and supportive.",
    accentText: "& Aid",
    gradient: "from-[hsl(var(--emerald))] to-[hsl(var(--teal-light))]",
    icon: FileCheck,
    items: [
      {
        slug: "admission-process",
        title: "Admission Process",
        description: "BITSAT for UG, GATE-based for HD, and 2+2 international dual-degree pathways.",
        detail: "UG admissions to B.E., B.Pharm and Integrated M.Sc. are through BITSAT — the computer-based online test held annually.\n\nHigher Degree (M.E., M.Pharm) admissions are based on GATE score plus interview. PhD admissions through a written test and interview.\n\n2+2 International Dual-Degree Pathways: spend two years at BITS and two years at a global partner — RMIT University (Australia), University at Buffalo (USA), Iowa State University (USA), CentraleSupélec Paris (France), or Rensselaer Polytechnic Institute (USA).",
        features: ["UG via BITSAT", "HD via GATE + interview", "PhD written test + interview", "2+2 with RMIT, UB, ISU, CSP, RPI", "Online application portal"],
      },
      {
        slug: "scholarships",
        title: "Scholarships & Financial Aid",
        description: "Merit, Merit-Cum-Need and Student Aid Fund support — managed by the SWD.",
        detail: "BITS Pilani supports eligible students through merit-based and need-aware aid programs.\n\nMerit Scholarship - awarded based on academic performance and applicable institute criteria.\n\nMerit-Cum-Need (MCN) - financial support based on family income documentation and academic requirements published for the current cycle.\n\nStudent Aid Fund (SAF) - additional support for students requiring specific financial assistance.\n\nStudents should verify current eligibility, deadlines and documents through the SWD scholarship portal.",
        features: ["Merit Scholarship", "Merit-Cum-Need (MCN)", "Student Aid Fund (SAF)", "SWD scholarship portal"],
      },
      {
        slug: "loans",
        title: "Loans & Financial Aid",
        description: "Education loans, fee waivers, and financial assistance programs.",
        detail: "Families planning education loans should confirm current bank options, required documents and sanction timelines directly with banks and official campus/SWD notices. Students seeking financial support should track scholarship, MCN and aid announcements through the SWD portal.",
        features: ["Bank education loans", "SWD aid notices", "Document planning", "Scholarship timelines"],
      },
      {
        slug: "policies",
        title: "Policies",
        description: "Anti-Ragging, POSH, DISCO, Code of Conduct, Emergency Helplines.",
        detail: "Anti-Ragging: Zero tolerance policy with strict enforcement and anonymous reporting.\n POSH: Prevention of Sexual Harassment committee with trained counselors.\n DISCO: Disciplinary committee for conduct violations.\n Code of Conduct: Comprehensive guidelines for academic integrity.\n Emergency Helplines: Fire, snake rescue, medical, and security — available 24/7.",
        features: ["Anti-Ragging policy", "POSH committee", "DISCO disciplinary code", "Code of Conduct", "24/7 Emergency Helplines"],
      },
      {
        slug: "welcome-guide",
        title: "Welcome Guide for Students",
        description: "Everything new students need to know before arriving on campus.",
        detail: "Comprehensive guide covering hostel allotment, mess registration, course registration process, campus navigation, important contacts, banking setup, SIM card information, local transport, and essential items to bring. Orientation week schedule and student buddy program details included.",
        features: ["Hostel & mess allotment", "Course registration", "Banking & SIM setup", "Orientation week", "Student buddy program"],
      },
    ],
  },

  "campus-life": {
    key: "campus-life",
    basePath: "/campus-life",
    title: "Campus",
    subtitle: "A vibrant community where you'll find your people and your passions.",
    accentText: "Life",
    gradient: "from-[hsl(var(--teal))] to-[hsl(var(--emerald))]",
    icon: Users,
    items: [
      {
        slug: "clubs",
        title: "Clubs, Associations & Departments",
        description: "100+ student bodies — cultural, technical, regional, NGOs and fest departments.",
        detail: "Extracurricular life at BPHC is run entirely by students across cultural clubs, technical clubs, departmental associations, fest departments, regional associations and NGOs.\n\nCultural: Cypher (Dance), Crimson Curtain (Dramatics), Music Club, Swaranjali, Shades (Arts), Photog, Quiz Club, ELAS, MHSG and more.\n\nTechnical: cruX (Programming), SEDS, IEEE, ACM, Aeolus (Aerial Robotics), BlockSoc, SAE, Wall Street Club, Apollyon (Drone Racing), Vidrohi Systems and others.\n\nDepartmental Associations: CSA, MATRIX, PHoEnix, MEA, ACE, CEA, AXIOM, SPECTRUM, ALCHEMY, SYNAPSIS, PANACEA.\n\nRegional: Baithak, Sangam, Brindavanam, Kasturi, Umang, Maithri, MaMa, Geetanjali, Thaaraham Tamil Sangam, Utkal Samaj.\n\nNGOs: Enactus, Nirmaan, NSS.",
        features: ["20+ cultural clubs", "15+ technical clubs", "Departmental associations", "10+ regional associations", "Enactus · Nirmaan · NSS", "Fest departments (DoPy, DoSM, LSD…)"],
      },
      {
        slug: "hostels",
        title: "Hostels & Mess",
        description: "8 boys' and 3 girls' hostels with single-room privacy from third year onwards.",
        detail: "BITS Pilani offers a well-structured residential campus with 8 boys' hostels and 3 girls' hostels.\n\nFirst-year students stay in Valmiki Bhawan, Gautam Bhawan and Malviya Bhawan on a double-occupancy basis with random roommate allocation.\n\nFrom the second year, students choose between single and double occupancy (subject to availability). From the third year, single occupancy is allotted to all students.\n\nMess: Two main dining halls (Mess 1 and Mess 2) serve four meals daily — current charge approximately ₹143/day with a pay-and-eat option also available. Both halls feature additional food outlets and juice shops.",
        features: ["8 boys' + 3 girls' hostels", "Cold/normal/hot drinking water", "Common rooms — TT, air hockey", "Outdoor gym, badminton, volleyball", "Two dining halls + outlets", "₹143/day mess (approx.)"],
      },
      {
        slug: "campus-places",
        title: "Campus Places",
        description: "Shops, bank, eateries, and essential services on campus.",
        detail: "SBI branch and ATMs on campus.\n Stationery and general stores.\n Multiple eateries including CCD, juice shops, and night canteens.\n Photocopying and printing services.\n Medical store.\n Laundry services.\n Post office.\n All within walking distance of hostels.",
        features: ["Bank & ATMs", "Stationery & general stores", "Eateries & night canteens", "Medical store", "Post office"],
      },
      {
        slug: "student-union",
        title: "Student Union",
        description: "Student government, representation, and campus governance.",
        detail: "Elected Student Union represents student interests in university decisions. Organizes campus-wide events, addresses grievances, and manages club funding. Regular town halls and open forums. Departments have their own student associations for academic matters.",
        features: ["Elected representation", "Campus event funding", "Town halls", "Department associations"],
      },
      {
        slug: "fests",
        title: "Fests",
        description: "Annual cultural, technical, sports and innovation festivals that define student energy.",
        detail: "BITS Hyderabad hosts a tiered fest ecosystem with five flagship experiences. PEARL showcases music, arts and student culture. ATMOS blends technology, design and creative expression. ARENA brings campus sports to a competitive stage. Launchpad celebrates startups, product launches and entrepreneurial energy. Verba Maximus spotlights debates, literature and public speaking.",
        features: ["PEARL · cultural flagship", "ATMOS · tech & design", "ARENA · sports showcase", "Launchpad · startup sprint", "Verba Maximus · literary forum"],
        subItems: [
          {
            title: "PEARL",
            tagline: "Cultural festival",
            description: "PEARL is the cultural flagship for BITS Hyderabad, bringing music, dance, drama, fine arts and live showcases together on the campus stage.",
            videoUrl: "https://www.youtube.com/embed/yT-3eMlnzpU",
          },
          {
            title: "ATMOS",
            tagline: "Technical festival",
            description: "ATMOS blends technology, design and creative experimentation through workshops, exhibitions, hackathons, speaker sessions and student-built experiences.",
            videoUrl: "https://www.youtube.com/embed/PZwfHQ4p6hQ",
          },
          {
            title: "ARENA",
            tagline: "Sports festival",
            description: "ARENA brings varsity leagues, open tournaments and campus sports culture into a competitive multi-sport showcase.",
            videoUrl: "https://www.youtube.com/embed/JIWNk4zqAfI",
          },
          {
            title: "Launchpad",
            tagline: "Startup & innovation",
            description: "Launchpad gives student founders a focused platform for startup pitches, prototype showcases, mentor feedback and incubation conversations.",
          },
          {
            title: "Verba Maximus",
            tagline: "Literary festival",
            description: "Verba Maximus spotlights debates, quizzes, writing, storytelling and public speaking for students who build with words and ideas.",
          },
        ],
      },
      {
        slug: "virtual-tour",
        title: "Virtual Tour of Campus",
        description: "Explore the campus from anywhere with our interactive virtual tour.",
        detail: "360° panoramic views of academic buildings, hostels, sports facilities, and natural landscapes.\n Interactive map with building labels and navigation.\n Drone footage of the full campus. Available on desktop and mobile devices. Perfect for prospective students and parents.",
        features: ["360° panoramas", "Interactive map", "Drone footage", "Mobile-friendly"],
      },
    ],
  },

  parents: {
    key: "parents",
    basePath: "/parents",
    title: "Parents",
    subtitle: "Stay connected and confident in your student's university experience.",
    accentText: "& Family",
    gradient: "from-[hsl(var(--violet))] to-[hsl(var(--sky))]",
    icon: UserCheck,
    items: [
      {
        slug: "stay",
        title: "Stay",
        description: "Nearby hotels and accommodation options for visiting families.",
        detail: "Families visiting BITS Hyderabad usually stay in nearby hotels or serviced apartments around Shamirpet, Medchal and Kompally. Advance booking is recommended during admissions, fest weekends and convocation periods. Visitors should confirm campus entry requirements with the student or relevant campus office before travel.",
        features: ["Nearby hotels", "Serviced apartments", "Plan ahead for busy weekends"],
      },
      {
        slug: "safety",
        title: "Safety",
        description: "Campus security measures, emergency contacts, and protocols.",
        detail: "The residential campus is supported by campus security, controlled entry points, hostel wardens, emergency response contacts and medical support. Students should keep important campus helpline numbers saved and route urgent concerns through security, SWD, wardens or the medical centre as appropriate.",
        features: ["Campus security", "Controlled entry points", "Hostel wardens", "Emergency contacts"],
      },
      {
        slug: "parcels",
        title: "Parcels",
        description: "How to send and receive parcels and packages on campus.",
        detail: "Courier and parcel handling may vary by courier partner and campus process. Families should use the student's full name, ID number, hostel and phone number on parcels, and students should track shipments directly with the courier service or campus receiving point when applicable.",
        features: ["Use student ID details", "Add hostel and phone number", "Track with courier partner"],
      },
      {
        slug: "transport",
        title: "Transport",
        description: "Getting to campus, local transport, and travel information.",
        detail: "BITS Hyderabad is in Jawahar Nagar, near Shamirpet. Families commonly travel from Hyderabad airport, Secunderabad railway station or city bus points by app cab, taxi or private vehicle. Travel time depends heavily on city traffic, so admission-day and event-day journeys should be planned with buffer time.",
        features: ["Airport & rail connectivity", "App cabs and taxis", "Traffic buffer recommended"],
      },
      {
        slug: "communication",
        title: "Communication",
        description: "Stay connected with your student and the university administration.",
        detail: "Families should rely on official BITS communication channels, student-shared ERP updates, fee notices and SWD or campus office contacts for verified information. For urgent personal, health or welfare concerns, students and parents should contact the relevant campus office directly.",
        features: ["Official notices", "ERP updates via student", "SWD and campus offices"],
      },
      {
        slug: "anti-ragging",
        title: "Anti-Ragging",
        description: "Zero tolerance policy and reporting mechanisms.",
        detail: "Strict anti-ragging measures as per UGC guidelines. Anti-ragging squad and committee with faculty and student members. 24/7 helpline for anonymous reporting. Swift disciplinary action against offenders including expulsion. Orientation sessions for freshers and seniors on ragging prevention.",
        features: ["UGC-compliant policy", "24/7 anonymous helpline", "Anti-ragging squad", "Orientation programs"],
      },
    ],
  },

  research: {
    key: "research",
    basePath: "/research",
    title: "Research",
    subtitle: "Pushing boundaries of knowledge through innovation and discovery.",
    accentText: "& Innovations",
    gradient: "from-[hsl(var(--rose))] to-[hsl(var(--violet))]",
    icon: Microscope,
    items: [
      {
        slug: "labs",
        title: "Labs",
        description: "State-of-the-art research laboratories across all departments.",
        detail: "Research and teaching laboratories support departmental work across engineering, sciences, computing and interdisciplinary projects. Students encounter lab facilities through coursework, projects, thesis work, workshops and faculty-led research groups.",
        features: ["Department labs", "Computing facilities", "Workshops and project spaces", "Faculty-led research"],
      },
      {
        slug: "journals",
        title: "Journals",
        description: "University publications, research journals, and academic papers.",
        detail: "Students and researchers use the library, subscribed databases and department guidance for literature review, paper reading and academic writing. Faculty and scholars publish through external peer-reviewed journals and conferences in their respective disciplines.",
        features: ["Library resources", "Research databases", "Peer-reviewed publications", "Academic writing support"],
      },
      {
        slug: "innovations",
        title: "Recent Innovations",
        description: "Breakthrough research and innovations from our campus.",
        detail: "Innovation activity at BITS Hyderabad grows through labs, student technical teams, entrepreneurship initiatives, hackathons, workshops and faculty-guided projects. Students use these spaces to prototype, test and present practical ideas.",
        features: ["Student prototypes", "Technical teams", "Entrepreneurship activity", "Hackathons & workshops"],
      },
      {
        slug: "achievements",
        title: "Achievements",
        description: "Awards, recognitions, and milestones in research excellence.",
        detail: "Multiple faculty members recognized with national and international awards.\nStudents winning at ACM ICPC, Smart India Hackathon, and global robotics competitions.\n University ranked among top research institutions nationally.\n Funded projects from DST, DRDO, ISRO, and international bodies.\n Industry-ready solutions commercialized through our TBI.",
        features: ["National & global faculty awards", "ACM ICPC & SIH wins", "DST, DRDO, ISRO grants", "TBI commercialization"],
      },
    ],
  },

  health: {
    key: "health",
    basePath: "/health",
    title: "Health",
    subtitle: "Comprehensive care for your body, mind, and wellbeing.",
    accentText: "& Wellbeing",
    gradient: "from-[hsl(var(--sky))] to-[hsl(var(--teal))]",
    icon: Heart,
    items: [
      {
        slug: "medical-center",
        title: "Medical Center",
        description: "On-campus healthcare with doctors, pharmacy, and diagnostics.",
        detail: "Fully equipped health center open 7 days a week.\n General physicians, dentist, and visiting specialists.\n Basic diagnostic facilities including blood tests and X-ray.\n Pharmacy stocked with essential medicines.\n Free consultations for enrolled students.\n Referral system for specialist treatment at city hospitals.",
        features: ["7-day medical center", "Physicians & dentist", "Pharmacy & diagnostics", "Free student consults"],
        contacts: [{ label: "Medical Center", value: "+91-40-6630-3999" }, { label: "SWD", value: "+91-40-6630-3535" }],
      },
      {
        slug: "mpower",
        title: "MPower (Mental Health)",
        description: "Counseling, therapy, and mental wellness programs.",
        detail: "MPower provides free and confidential counseling services.\n Professional therapists for individual and group sessions.\n Peer support programs and mental health awareness campaigns.\n Stress management workshops during exam seasons.\n 24/7 crisis helpline for immediate support.\n Self-help resources and meditation sessions.",
        features: ["Free, confidential therapy", "Group & peer support", "Stress workshops", "24/7 crisis line"],
        contacts: [{ label: "MPower Helpline", value: "1800-120-820050" }],
      },
      {
        slug: "ambulance",
        title: "Ambulance",
        description: "24/7 emergency ambulance service for medical emergencies.",
        detail: "Dedicated ambulance stationed on campus round the clock.\n Trained paramedics for first response.\n Direct coordination with nearest hospitals.\n Average response time under 5 minutes.\n Emergency medical kits available at all hostels and academic buildings.\n SOS number displayed prominently across campus.",
        features: ["24/7 on-campus ambulance", "Trained paramedics", "<5 min response", "First-aid kits in every block"],
      },
      {
        slug: "helplines",
        title: "Helplines",
        description: "Emergency and non-emergency helplines for student support.",
        detail: "Medical emergency: Quick dial from any campus phone.\n Mental health crisis: 24/7 counselor on call.\n Women's safety helpline: Direct connect to security.\n Anti-ragging helpline: Anonymous reporting.\n Fire emergency: Campus fire station direct line.\n Snake/animal rescue: Trained team on standby.\n All numbers listed on student ID cards and hostel notice boards.",
        features: ["Medical emergency line", "Mental health crisis line", "Women's safety", "Fire & rescue"],
      },
    ],
  },

  alumni: {
    key: "alumni",
    basePath: "/alumni",
    title: "Alumni",
    subtitle: "A global network of achievers shaping the future.",
    accentText: "Network",
    gradient: "from-[hsl(var(--amber))] to-[hsl(var(--amber-light))]",
    icon: Award,
    items: [
      {
        slug: "bitsaa",
        title: "BITSAA",
        description: "BITS Alumni Association — connecting graduates worldwide.",
        detail: "BITSAA is the global alumni network spanning 50+ countries. Annual meets, networking events, and mentorship programs. Career assistance and job referrals through alumni connections. BITSAA chapters in major cities organize regular meetups. Alumni portal for staying connected with batchmates and the institute.",
        features: ["50+ country chapters", "Networking & mentorship", "Career & job referrals", "Annual meets"],
      },
      {
        slug: "sarc",
        title: "SARC",
        description: "Student Alumni Relations Cell — bridging current students and alumni.",
        detail: "SARC organizes alumni talks, workshops, and career guidance sessions. Facilitates alumni visits to campus. Manages alumni database and communication. Coordinates alumni funding for student projects and scholarships. Annual Alumni Day celebrations with awards and reunions.",
        features: ["Alumni talks & workshops", "Career guidance", "Project funding", "Annual Alumni Day"],
      },
      {
        slug: "achievements",
        title: "Achievements",
        description: "Notable alumni making impact across industries worldwide.",
        detail: "Alumni leading Fortune 500 companies, top startups, and research institutions. Representation in government, judiciary, armed forces, and civil services. Entrepreneurs who have built billion-dollar companies. Researchers contributing to space, defense, and healthcare. Regular features in Forbes, Fortune, and global rankings.",
        features: ["Fortune 500 leaders", "Unicorn founders", "Civil services & judiciary", "Global researchers"],
      },
      {
        slug: "bgm",
        title: "BGM",
        description: "BITS Global Meet — the flagship alumni gathering.",
        detail: "BGM is an annual global reunion bringing together alumni from all campuses. Multi-day event with keynote speakers, panel discussions, and networking sessions. Cultural performances and batch reunions. Held in different cities each year. Platform for alumni to give back through mentorship and philanthropic pledges.",
        features: ["Annual global reunion", "Keynotes & panels", "Batch reunions", "Philanthropic pledges"],
      },
    ],
  },

  help: {
    key: "help",
    basePath: "/help",
    title: "Get",
    subtitle: "No matter what you're facing, support is always within reach.",
    accentText: "Help",
    gradient: "from-[hsl(var(--teal-light))] to-[hsl(var(--sky))]",
    icon: HelpCircle,
    items: [
      {
        slug: "augsd",
        title: "AUGSD",
        description: "Associate Dean, Undergraduate Studies Division.",
        detail: "AUGSD handles all matters related to undergraduate academics — course registration, grade disputes, academic probation, semester drop, and branch change.\n Office hours: Mon-Fri 9:30 AM - 5:30 PM.\n Student representatives available for guidance.\n Online portal for submitting academic applications and petitions.",
        features: ["Course registration", "Grade disputes", "Semester drop / branch change", "Online petition portal"],
        contacts: [{ label: "Office hours", value: "Mon–Fri 9:30 AM – 5:30 PM" }],
      },
      {
        slug: "swd",
        title: "SWD",
        description: "Student Welfare Division — scholarships, loans, and student aid.",
        detail: "SWD manages Merit-cum-Need scholarships, fee waivers, and emergency financial aid.\n Assists with education loan processing and documentation.\n Handles student welfare programs including free mess facilities for eligible students.\n Counseling referrals and personal emergency support.",
        features: ["MCN scholarships", "Fee waivers", "Emergency aid", "Counseling referrals"],
      },
      {
        slug: "agsrd",
        title: "AGSRD",
        description: "Associate Dean, Graduate Studies & Research Division.",
        detail: "AGSRD oversees postgraduate and doctoral programs.\n Handles thesis submissions, comprehensive exams, and research scholar matters. Coordinates with departments for RA/TA positions. Manages PhD admissions and higher degree research applications.",
        features: ["Thesis submission", "Comprehensive exams", "RA/TA positions", "PhD admissions"],
      },
      {
        slug: "admin-office",
        title: "Admin Office",
        description: "Central administration for institutional services.",
        detail: "The Admin Office handles official documentation — bonafide certificates, transcripts, NOCs, and migration certificates. Manages hostel allotment, campus infrastructure requests, and general administration. Visitor passes and campus access for external guests.\n Office hours: Mon-Sat 9:00 AM - 5:00 PM.",
        features: ["Bonafide & transcripts", "NOC & migration", "Hostel allotment", "Visitor passes"],
      },
      {
        slug: "swmc",
        title: "SWMC",
        description: "Student Welfare & Mentoring Committee.",
        detail: "SWMC provides a mentoring framework pairing students with faculty mentors. Addresses academic stress, personal challenges, and career guidance. Regular mentor-mentee meetings scheduled each semester. Workshops on time management, study skills, and emotional resilience. Confidential and supportive environment.",
        features: ["Faculty mentorship", "Stress & career guidance", "Semester check-ins", "Skills workshops"],
      },
      {
        slug: "posh",
        title: "POSH",
        description: "Prevention of Sexual Harassment — support and reporting.",
        detail: "Internal Complaints Committee (ICC) handles all POSH-related matters. Confidential reporting through online portal or in-person. Trained counselors available for survivors. Awareness sessions conducted regularly across campus. Strict action as per UGC and legal guidelines. Support resources and external helpline numbers available.",
        features: ["Internal Complaints Committee", "Confidential reporting", "Trained counselors", "Awareness sessions"],
      },
    ],
  },
};

// Apply optional gallery/video/resources enrichments (additive only) onto the
// items above. Keeping enrichments in a separate file lets us layer in PDF /
// web content without touching the base structure.
import { applyEnrichments } from "./enrichments";
applyEnrichments(sections);

export const getSection = (key: string): SectionConfig | undefined => sections[key];

export const getItem = (key: string, slug: string): DetailItem | undefined =>
  sections[key]?.items.find((i) => i.slug === slug);
