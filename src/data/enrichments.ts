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

import hostelExterior from "@/assets/hostel-exterior.jpg";
import hostelRoom from "@/assets/hostel-room.jpg";
import hostelCommon from "@/assets/hostel-common.jpg";
import messDining from "@/assets/mess-dining.jpg";
import practiceSchool from "@/assets/practice-school.jpg";
import festNight from "@/assets/fest-night.jpg";
import festStage from "@/assets/fest-stage.jpg";
import medicalCenter from "@/assets/medical-center.jpg";
import mpowerRoom from "@/assets/mpower-room.jpg";
import campusAerial from "@/assets/campus-aerial.jpg";
import clubsCultural from "@/assets/clubs-cultural.jpg";
import clubsTechnical from "@/assets/clubs-technical.jpg";
import heroLibrary from "@/assets/hero-library.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import heroArchway from "@/assets/hero-archway.jpg";
import heroMain from "@/assets/hero-main.jpg";

type Enrichment = Pick<DetailItem, "gallery" | "video" | "resources">;

/** Map of `${sectionKey}/${slug}` → optional gallery/video/resources */
export const enrichments: Record<string, Enrichment> = {
  // ───────── ACADEMICS ─────────
  "acads/programs": {
    gallery: [
      { src: heroLibrary, caption: "Central Library", alt: "BPHC central library" },
      { src: campusAerial, caption: "Aerial · BPHC campus" },
      { src: heroCampus, caption: "Academic block" },
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

  "acads/ps-placements": {
    gallery: [
      { src: practiceSchool, caption: "PS station · industry collaboration" },
      { src: clubsTechnical, caption: "Lab projects feeding into PS" },
      { src: heroLibrary, caption: "PS prep · library research" },
    ],
    video: {
      url: "https://www.youtube.com/embed/9bZkp7q19f0",
      title: "Practice School at BITS Pilani",
      caption:
        "How PS-I (2-month summer) and PS-II (semester-long, paid) embed real industry experience into your degree.",
      poster: practiceSchool,
    },
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
    gallery: [
      { src: heroLibrary, caption: "Aided learning · merit + need" },
      { src: campusAerial, caption: "A campus you can afford" },
    ],
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
        description: "Eligibility (parental income < ₹15 LPA, 2024-25), slabs and renewal.",
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
    ],
  },

  // ───────── CAMPUS LIFE ─────────
  "campus-life/clubs": {
    gallery: [
      { src: clubsCultural, caption: "Cultural · Cypher, Crimson Curtain, Music" },
      { src: clubsTechnical, caption: "Technical · cruX, SEDS, Aeolus" },
      { src: festStage, caption: "100+ student bodies" },
    ],
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

  "campus-life/hostels": {
    gallery: [
      { src: hostelExterior, caption: "8 boys' + 3 girls' hostels" },
      { src: hostelRoom, caption: "Single occupancy from 3rd year" },
      { src: hostelCommon, caption: "Common area · TT, badminton" },
      { src: messDining, caption: "Mess 1 & Mess 2 · ₹143/day" },
    ],
    video: {
      url: "https://www.youtube.com/embed/9bZkp7q19f0",
      title: "Hostel Life at BPHC",
      caption: "A walk through the residential campus — Valmiki, Gautam, Malviya, Vyas, Krishna, Ram, Shankar, Budh, Meera, Gandhi and Saraswati Bhawans.",
      poster: hostelExterior,
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
      { src: festStage, caption: "Cultural · dance & music" },
      { src: clubsCultural, caption: "Regional cultural night" },
      { src: clubsTechnical, caption: "Technical fest · APOGEE" },
    ],
    video: {
      url: "https://www.youtube.com/embed/9bZkp7q19f0",
      title: "Fests at BITS — A Glimpse",
      caption: "From APOGEE and Oasis to BITS Sports Festival — what a fest weekend looks like.",
      poster: festNight,
    },
    resources: [
      {
        label: "BITS Pilani Fests",
        url: "https://www.bits-pilani.ac.in/",
        description: "APOGEE (technical), Oasis (cultural), BSF (sports).",
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
    video: {
      url: "https://www.youtube.com/embed/9bZkp7q19f0",
      title: "BITS Hyderabad — Virtual Tour",
      caption: "A 360° walkthrough of academic blocks, hostels, sports facilities and the lake.",
      poster: campusAerial,
    },
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

  // ───────── HEALTH ─────────
  "health/medical-center": {
    gallery: [
      { src: medicalCenter, caption: "On-campus health centre" },
      { src: mpowerRoom, caption: "Consultation rooms" },
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
      { src: medicalCenter, caption: "Wellness team" },
    ],
    video: {
      url: "https://www.youtube.com/embed/inpok4MKVLM",
      title: "5-Minute Mindfulness",
      caption: "A short guided practice you can use before exams or whenever you need a reset.",
      poster: mpowerRoom,
    },
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
      { src: campusAerial, caption: "From BPHC to the world" },
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
    if (extras.resources) item.resources = extras.resources;
  }
};
