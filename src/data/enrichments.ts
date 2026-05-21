/**
 * Content enrichment for SWD-relevant detail pages.
 *
 * This file ONLY adds optional `gallery`, `video`, and `resources` fields onto
 * existing items in `sections.ts`. The base entries (title, detail, features,
 * contacts) are NOT modified — this is purely additive enrichment.
 *
 * Source material:
 *  - BITS Pilani Hyderabad SWD (Student Welfare Division) public site
 *  - BITS Pilani Practice School Division
 *  - BITS Pilani Hyderabad official website
 */
import type { DetailItem } from "@/data/sections";
import { officialMedia } from "@/data/media";

const officialAcademicBlock = officialMedia.uploadedInfrastructure;
const officialCampus = officialMedia.uploadedRockGarden;
const officialCampusAlt = officialMedia.uploadedCampusNight;
const officialClassroom = officialMedia.uploadedClassroom;
const officialClubs = officialMedia.uploadedAuditorium;
const officialClubsAlt = officialMedia.studentFacilitiesAlt;
const officialHostel = officialMedia.uploadedBoysHostel;
const officialHostelAlt = officialMedia.hostelAlt;
const officialHostelRoom = officialMedia.hostelRoom;
const officialLab = officialMedia.uploadedLab;
const officialLibrary = officialMedia.uploadedLibrary;
const officialArena = officialMedia.uploadedBasketballCourt;
const officialAtmos = officialMedia.atmos;
const officialMedical = officialMedia.medical;
const officialMedicalRoom = officialMedia.medicalAlt;
const officialConvocation = officialMedia.convocation;

const campusAerial = officialCampus;
const heroArchway = officialCampusAlt;
const heroCampus = officialAcademicBlock;
const heroLibrary = officialLibrary;
const heroMain = officialCampus;
const hostelExterior = officialHostel;
const hostelRoom = officialHostelRoom;
const hostelCommon = officialHostelAlt;
const messDining = officialMedia.studentFacilities;
const practiceSchool = officialMedia.uploadedWorkshop;
const clubsCultural = officialMedia.uploadedAuditorium;
const clubsTechnical = officialMedia.uploadedCcLab;
const festNight = officialMedia.pearlFrame;
const festStage = officialMedia.pearlFrame;
const medicalCenter = officialMedicalRoom;
const mpowerRoom = officialMedicalRoom;

type Enrichment = Pick<DetailItem, "gallery" | "video" | "videos" | "resources">;

/** Map of `${sectionKey}/${slug}` → optional gallery/video/resources */
export const enrichments: Record<string, Enrichment> = {
  // ───────── ACADEMICS ─────────
  "acads/programs": {
    gallery: [
      { src: officialLibrary, caption: "Central Library", alt: "BPHC central library" },
      { src: officialClassroom, caption: "Classrooms" },
      { src: officialAcademicBlock, caption: "Academic block" },
    ],
    resources: [
      {
        label: "BITS Pilani — Hyderabad Campus",
        url: "https://www.bits-pilani.ac.in/hyderabad/",
        description: "Official campus homepage with departments and programs.",
        icon: "external",
      },
      {
        label: "Academic Regulations",
        url: "https://www.bits-pilani.ac.in/academics/",
        description: "Course structure, credits, grading and academic policies.",
        icon: "book",
      },
      {
        label: "BPHC Digital Library (OPAC)",
        url: "https://libraryopac.bits-hyderabad.ac.in/",
        description: "Search the catalogue, e-journals and reserved collections.",
        icon: "book",
      },
    ],
  },

  "acads/academic-buildings": {
    gallery: [
      { src: officialClassroom, caption: "Lecture hall" },
      { src: officialAcademicBlock, caption: "Academic infrastructure" },
      { src: officialMedia.uploadedAuditorium, caption: "Auditorium" },
      { src: officialLibrary, caption: "Central Library" },
    ],
  },

  "acads/ps-placements": {
    gallery: [
      { src: practiceSchool, caption: "PS station · industry collaboration" },
      { src: officialLab, caption: "Lab projects feeding into PS" },
      { src: heroLibrary, caption: "PS prep · library research" },
    ],
    resources: [
      {
        label: "Practice School Division",
        url: "https://www.bits-pilani.ac.in/practice-school/",
        description: "Official PS site — stations, schedules, and FAQs.",
        icon: "external",
      },
      {
        label: "Placement Cell — BPHC",
        url: "https://www.bits-pilani.ac.in/hyderabad/placements/",
        description: "Recruiter list, sector-wise stats, and placement reports.",
        icon: "book",
      },
    ],
  },


  // ───────── ADMISSIONS ─────────
  "admissions/admission-process": {
    gallery: [
      { src: campusAerial, caption: "Welcome to BPHC" },
      { src: heroArchway, caption: "Campus archway" },
      { src: heroLibrary, caption: "Where it all begins" },
    ],
    resources: [
      {
        label: "BITSAT — Official Portal",
        url: "https://www.bitsadmission.com/",
        description: "Apply for B.E., B.Pharm and Integrated M.Sc. admissions.",
        icon: "external",
      },
      {
        label: "Higher Degree Admissions",
        url: "https://www.bits-pilani.ac.in/higher-degree/",
        description: "M.E., M.Pharm and PhD application details.",
        icon: "book",
      },
      {
        label: "International / 2+2 Pathways",
        url: "https://www.bits-pilani.ac.in/international/",
        description: "Dual-degree partnerships with RMIT, UB, ISU, CSP and RPI.",
        icon: "external",
      },
    ],
  },

  "admissions/scholarships": {
    resources: [
      {
        label: "SWD — Scholarship Portal",
        url: "https://swd.bits-hyderabad.ac.in/",
        description: "Apply for Merit, MCN and Student Aid Fund through SWD.",
        icon: "external",
      },
      {
        label: "Merit-Cum-Need (MCN) Guidelines",
        url: "https://www.bits-pilani.ac.in/scholarships/",
        description: "Current eligibility, income documentation, slabs and renewal guidance.",
        icon: "book",
      },
    ],
  },

  "admissions/loans": {
    resources: [
      {
        label: "SBI Education Loan",
        url: "https://sbi.co.in/web/personal-banking/loans/education-loans",
        description: "Tie-up bank · competitive rates for BITS students.",
        icon: "external",
      },
      {
        label: "Vidya Lakshmi Portal (Govt. of India)",
        url: "https://www.vidyalakshmi.co.in/",
        description: "Apply to multiple banks for an education loan in one place.",
        icon: "external",
      },
      {
        label: "SWD Financial Aid Office",
        url: "https://swd.bits-hyderabad.ac.in/",
        description: "Loan documentation, fee deferrals and counselling.",
        icon: "shield",
      },
    ],
  },

  "admissions/policies": {
    resources: [
      {
        label: "Anti-Ragging Helpline (UGC)",
        url: "https://www.antiragging.in/",
        description: "24/7 national helpline · 1800-180-5522 · helpline@antiragging.in",
        icon: "shield",
      },
      {
        label: "POSH — Internal Complaints",
        url: "https://swd.bits-hyderabad.ac.in/",
        description: "File a confidential complaint with the ICC.",
        icon: "shield",
      },
      {
        label: "Code of Conduct",
        url: "https://www.bits-pilani.ac.in/",
        description: "Full institute-wide policies and disciplinary process.",
        icon: "book",
      },
    ],
  },

  "admissions/welcome-guide": {
    gallery: [
      { src: hostelExterior, caption: "Your hostel awaits" },
      { src: hostelRoom, caption: "First-year room" },
      { src: messDining, caption: "Dining hall" },
      { src: heroArchway, caption: "Welcome to BPHC" },
    ],
    resources: [
      {
        label: "First-Year Orientation Guide",
        url: "https://swd.bits-hyderabad.ac.in/",
        description: "Hostel allotment, mess registration and orientation week.",
        icon: "download",
      },
      {
        label: "Course Registration · ERP",
        url: "https://erp.bits-pilani.ac.in/",
        description: "Register for courses, view timetable and grades.",
        icon: "external",
      },
      {
        label: "Campus101 Hyderabad",
        url: "https://campus101.vercel.app/hyderabad/home",
        description: "Student-made campus guide for quick fresher references.",
        icon: "external",
      },
    ],
  },

  // ───────── CAMPUS LIFE ─────────
  "campus-life/clubs": {
    resources: [
      {
        label: "Student Union — BPHC",
        url: "https://www.bits-pilani.ac.in/hyderabad/",
        description: "Elected representation, club funding and events.",
        icon: "external",
      },
      {
        label: "Nirmaan Organization",
        url: "https://www.nirmaan.org/",
        description: "Flagship student-run NGO — education, livelihood, environment.",
        icon: "external",
      },
    ],
  },

  "campus-life/campus-places": {
    gallery: [
      { src: officialMedia.uploadedCp, caption: "Connaught Place" },
      { src: officialMedia.uploadedRockGarden, caption: "Green campus spaces" },
      { src: officialMedia.uploadedCampusNight, caption: "Campus infrastructure" },
    ],
    resources: [
      {
        label: "Campus101 Hyderabad",
        url: "https://campus101.vercel.app/hyderabad/home",
        description: "Student utility platform for campus places, fresher references and quick campus info.",
        icon: "external",
      },
    ],
  },

  "campus-life/student-union": {
    gallery: [
      { src: officialMedia.uploadedAuditorium, caption: "Campus events" },
      { src: officialMedia.uploadedRockGarden, caption: "Student gathering spaces" },
    ],
  },

  "campus-life/hostels": {
    gallery: [
      { src: hostelExterior, caption: "8 boys' + 3 girls' hostels" },
      { src: hostelRoom, caption: "Single occupancy from 3rd year" },
      { src: hostelCommon, caption: "Common area · TT, badminton" },
      { src: messDining, caption: "Mess 1 & Mess 2 · ₹143/day" },
    ],
    video: {
      url: "https://www.youtube.com/embed/joa6TC83xgE",
      title: "Hostels & Campus Life",
      caption: "Student life and hostel experience at BITS Hyderabad.",
      poster: "https://img.youtube.com/vi/joa6TC83xgE/maxresdefault.jpg",
    },
    resources: [
      {
        label: "Chief Warden's Office",
        url: "https://swd.bits-hyderabad.ac.in/",
        description: "Hostel allotment, room change requests and grievances.",
        icon: "external",
      },
      {
        label: "Mess Committee",
        url: "https://swd.bits-hyderabad.ac.in/",
        description: "Menu, monthly bills, feedback and pay-and-eat option.",
        icon: "external",
      },
    ],
  },

  "campus-life/fests": {
    gallery: [
      { src: festNight, caption: "Pro-night · main stage" },
      { src: officialMedia.uploadedAuditorium, caption: "Cultural events" },
      { src: officialAtmos, caption: "ATMOS · tech fest" },
      { src: officialArena, caption: "ARENA · sports" },
    ],
    video: {
      url: "https://www.youtube.com/embed/yT-3eMlnzpU",
      title: "PEARL · BPHC Cultural Fest — Aftermovie",
      caption: "A glimpse of PEARL, ATMOS, ARENA, Launchpad and Verba Maximus — the five flagship student-run fests of BPHC.",
      poster: festNight,
    },
    resources: [
      {
        label: "BITS Hyderabad Fests",
        url: "https://www.bits-pilani.ac.in/",
        description: "PEARL (cultural), ATMOS (technical), ARENA (sports), Launchpad and Verba Maximus.",
        icon: "external",
      },
    ],
  },
  "campus-life/virtual-tour": {
    gallery: [
      { src: campusAerial, caption: "Aerial — full campus" },
      { src: heroArchway, caption: "Main archway" },
      { src: heroLibrary, caption: "Central library" },
      { src: heroCampus, caption: "Academic block" },
      { src: hostelExterior, caption: "Hostels" },
    ],
    resources: [
      {
        label: "Open the Interactive Tour",
        url: "/campus-life/virtual-tour",
        description: "Step inside BPHC from anywhere — desktop and mobile friendly.",
        icon: "link",
      },
    ],
  },

  // ───────── PARENTS ─────────
  "parents/safety": {
    gallery: [
      { src: campusAerial, caption: "A secured 200-acre campus" },
      { src: heroArchway, caption: "Main gate · 24/7 security" },
    ],
    resources: [
      {
        label: "Campus Security · Helpline",
        url: "tel:+914066303999",
        description: "24/7 control room — direct dial.",
        icon: "phone",
      },
      {
        label: "Women's Safety Cell",
        url: "https://swd.bits-hyderabad.ac.in/",
        description: "Confidential support and night escort coordination.",
        icon: "shield",
      },
    ],
  },

  "parents/anti-ragging": {
    resources: [
      {
        label: "UGC Anti-Ragging Portal",
        url: "https://www.antiragging.in/",
        description: "Register a confidential complaint — UGC-monitored.",
        icon: "shield",
      },
      {
        label: "National Anti-Ragging Helpline",
        url: "tel:18001805522",
        description: "1800-180-5522 · 24×7 · helpline@antiragging.in",
        icon: "phone",
      },
      {
        label: "BPHC Anti-Ragging Squad",
        url: "https://swd.bits-hyderabad.ac.in/",
        description: "Campus committee with student and faculty members.",
        icon: "external",
      },
    ],
  },

  // ───────── RESEARCH ─────────
  "research/labs": {
    gallery: [
      { src: officialMedia.uploadedLab, caption: "Research laboratory" },
      { src: officialMedia.uploadedWorkshop, caption: "Engineering workshop" },
      { src: officialMedia.uploadedCcLab, caption: "Computing lab" },
    ],
  },

  "research/innovations": {
    gallery: [
      { src: officialMedia.uploadedWorkshop, caption: "Workshop and prototyping" },
      { src: officialMedia.uploadedLab, caption: "Lab-based innovation" },
    ],
  },

  "research/journals": {
    gallery: [
      { src: officialLibrary, caption: "Library and research resources" },
      { src: officialMedia.uploadedLab, caption: "Research facilities" },
    ],
  },

  // ───────── HEALTH ─────────
  "health/medical-center": {
    gallery: [
      { src: officialMedical, caption: "On-campus health centre" },
      { src: medicalCenter, caption: "Medical support space" },
    ],
    resources: [
      {
        label: "Medical Centre — Info",
        url: "https://swd.bits-hyderabad.ac.in/",
        description: "Hours, doctors on rotation, pharmacy and diagnostics.",
        icon: "external",
      },
      {
        label: "Empanelled Hospitals (City)",
        url: "https://swd.bits-hyderabad.ac.in/",
        description: "Specialist referrals and emergency tie-ups.",
        icon: "book",
      },
    ],
  },

  "health/mpower": {
    gallery: [
      { src: mpowerRoom, caption: "Confidential counselling space" },
      { src: officialMedicalRoom, caption: "Wellness support space" },
    ],
    resources: [
      {
        label: "MPower 1on1 Helpline",
        url: "tel:1800120820050",
        description: "1800-120-820050 · 24×7 confidential support.",
        icon: "phone",
      },
      {
        label: "iCall — TISS",
        url: "https://icallhelpline.org/",
        description: "Free email and tele-counselling by trained professionals.",
        icon: "external",
      },
      {
        label: "Vandrevala Foundation",
        url: "https://www.vandrevalafoundation.com/",
        description: "24/7 mental health crisis line — 1860-2662-345.",
        icon: "shield",
      },
    ],
  },

  "health/helplines": {
    resources: [
      {
        label: "Campus Security",
        url: "tel:+914066303999",
        description: "24/7 control room.",
        icon: "phone",
      },
      {
        label: "MPower Helpline",
        url: "tel:1800120820050",
        description: "Mental health · 24×7 · confidential.",
        icon: "phone",
      },
      {
        label: "Anti-Ragging Helpline",
        url: "tel:18001805522",
        description: "UGC national helpline · anonymous.",
        icon: "shield",
      },
      {
        label: "Women Helpline (India)",
        url: "tel:1091",
        description: "1091 · national women's safety line.",
        icon: "shield",
      },
    ],
  },

  // ───────── HELP / SWD ─────────
  "help/swd": {
    gallery: [
      { src: heroMain, caption: "Student Welfare Division · BPHC" },
      { src: campusAerial, caption: "Care across the campus" },
    ],
    resources: [
      {
        label: "SWD — Official Portal",
        url: "https://swd.bits-hyderabad.ac.in/",
        description: "Scholarships, fee waivers, emergency aid and welfare programs.",
        icon: "external",
      },
      {
        label: "MCN Application",
        url: "https://swd.bits-hyderabad.ac.in/",
        description: "Merit-cum-Need scholarship — apply or renew.",
        icon: "download",
      },
      {
        label: "Email SWD",
        url: "mailto:swd@hyderabad.bits-pilani.ac.in",
        description: "Direct line for welfare queries.",
        icon: "mail",
      },
    ],
  },

  "help/posh": {
    resources: [
      {
        label: "File a POSH Complaint (ICC)",
        url: "https://swd.bits-hyderabad.ac.in/",
        description: "Confidential, time-bound process per UGC and POSH Act.",
        icon: "shield",
      },
      {
        label: "POSH at Workplace — Guide",
        url: "https://wcd.nic.in/sites/default/files/Handbook%20on%20Sexual%20Harassment%20of%20Women%20at%20Workplace.pdf",
        description: "Government of India handbook (PDF).",
        icon: "download",
      },
    ],
  },

  // ───────── ALUMNI ─────────
  "alumni/bitsaa": {
    gallery: [
      { src: officialConvocation, caption: "Convocation · BPHC" },
      { src: heroArchway, caption: "Where the journey begins" },
    ],
    resources: [
      {
        label: "BITSAA International",
        url: "https://www.bitsaa.org/",
        description: "Global alumni network — chapters in 50+ countries.",
        icon: "external",
      },
    ],
  },
};

/** Apply enrichments in-place onto the loaded `sections` map. */
export const applyEnrichments = (
  sections: Record<string, { items: DetailItem[] }>,
) => {
  for (const [key, extras] of Object.entries(enrichments)) {
    const [sectionKey, slug] = key.split("/");
    const section = sections[sectionKey];
    if (!section) continue;
    const item = section.items.find((i) => i.slug === slug);
    if (!item) continue;
    if (extras.gallery) item.gallery = extras.gallery;
    if (extras.video) item.video = extras.video;
    if (extras.videos) item.videos = extras.videos;
    if (extras.resources) item.resources = extras.resources;
  }
};
