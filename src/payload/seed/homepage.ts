import type { Payload } from 'payload'

export async function seedHomepage(payload: Payload): Promise<void> {
  // Check if homepage global already has content
  const existing = await payload.findGlobal({
    slug: 'homepage',
    depth: 0,
  })

  // If hero headline is already set, skip seeding
  if (existing?.hero?.headlineLine1) {
    console.log('[seed:homepage] Skipped — homepage content already exists.')
    return
  }

  console.log('[seed:homepage] Seeding homepage content...')

  await payload.updateGlobal({
    slug: 'homepage',
    data: {
      hero: {
        headlineLine1: 'REWRITE THE',
        headlineAccent1: 'NARRATIVE.',
        headlineLine2: 'MASTER THE',
        headlineAccent2: 'TRANSITION.',
        subheadline: 'Bounce Forward through the power of lived experience, workforce development, and financial empowerment.',
        cta1Label: 'BOOK A SCREENING',
        cta1Link: '/contact',
        cta2Label: 'WATCH THE TRAILER',
        cta2Link: '#the-film',
        tagline: 'Empowering Men and Women to Escape the Odds.',
        motto: 'CHANGE YOUR MINDSET. CHANGE YOUR LIFE.',
        carouselImages: [],
      },
      theFilm: {
        sectionLabel: 'THE FILM',
        headingLine1: 'ESCAPING THE ODDS',
        headingAccent: 'OF RECIDIVISM.',
        quote: 'The judge never said that this debt came with interest you would pay for the rest of your life.',
        body: 'Our mission spotlights vocational training, second-chance hiring, entrepreneurship, and workforce development. Through the power of lived experience and structured planning, we illuminate the path to bounce forward.',
        cta1Label: 'LEARN ABOUT THE MISSION',
        cta1Link: '/about',
        cta2Label: 'EXPLORE THE FILM',
        cta2Link: '/film',
        videoUrl: '/assets/ETO Doc Trailer_FINAL_Cta End Card.mp4',
      },
      theExperience: {
        sectionLabel: 'THE EXPERIENCE',
        heading: 'THE EXPERIENCE',
        body: 'A structured, facilitated transformation experience designed to present the film, facilitate guided discussion, and activate reflection and accountability.',
        pillars: [
          { title: 'THE FILM', subtitle: 'The Mirror', description: 'A raw, cinematic immersion that reveals the hidden architecture of recidivism and the mindset required to break the cycle.', icon: 'Film' },
          { title: 'DISCUSSION', subtitle: 'The Inquiry', description: "A guided session dismantling the 'Get Back' mentality—simply returning—to initiate a true 'Bounce Forward' transformation.", icon: 'MessageSquare' },
          { title: 'IMPLEMENTATION', subtitle: 'The Map', description: "Activating the 'Bounce Forward Plan'—a structured curriculum for practical accountability and institutional-ready reentry.", icon: 'GraduationCap' },
        ],
      },
      ecosystem: {
        sectionLabel: 'THE ETO ECOSYSTEM',
        headingLine1: 'A STRUCTURED',
        headingAccent: 'TRANSFORMATION.',
        cards: [
          { title: 'NARRATIVE', subtitle: 'THE FILM', description: 'A cinematic blueprint for shifting mindsets and exposing the architecture of recidivism.', link: '/film', icon: 'Film' },
          { title: 'DEVELOPMENT', subtitle: 'THE CURRICULUM', description: "The 'Bounce Forward Plan'—a 15-session evidence-based framework for reentry excellence.", link: '/programs', icon: 'BookOpen' },
          { title: 'WORKFORCE', subtitle: 'TRUCKING PROGRAM', description: 'Accelerated pathways into the industry through our Non-CDL Box Truck mastery program.', link: '/programs', icon: 'Truck' },
          { title: 'EMPOWERMENT', subtitle: 'FINANCIAL EMPOWERMENT', description: 'Building generational stability through structured financial education, wealth-building strategies, and legacy planning.', link: '/programs', icon: 'Landmark' },
        ],
      },
      curriculum: {
        sectionLabel: 'THE CURRICULUM',
        headingLine1: 'BOUNCE FORWARD PLAN —',
        headingAccent: 'MASTERING YOUR REENTRY',
        body: "Mastering your reentry isn't about getting back to where you were—it's about building a foundation to go further than you've ever been.",
        badge1: 'REENTRY MASTERY',
        badge2: '15 SESSIONS',
        coursePoints: [
          { point: '15-Session Evidence-Based Framework' },
          { point: "The 'Bounce Forward Plan' Workbook" },
          { point: 'Mastering Personal Reentry Plans' },
          { point: 'Structured Facilitation Guides' },
          { point: 'Vocational & Entrepreneurial Development' },
          { point: 'Financial Empowerment & Legacy Planning' },
          { point: 'Mindset Architecture & Habit Loops' },
        ],
        cta1Label: 'INQUIRE ABOUT THE CURRICULUM',
        cta1Link: '/contact',
        cta2Label: 'GET THE WORKBOOK',
        cta2Link: 'https://www.amazon.com/dp/B0GMP7Z9P9',
      },
      testimonials: {
        sectionLabel: 'IMPACT STORIES',
        headingLine1: 'VOICES OF',
        headingAccent: 'TRANSFORMATION',
        body: 'Real stories from those who chose to bounce forward.',
        items: [
          { quote: 'Information on how to get started was inspirational for me to proceed into business.', name: 'CROSSROADS CORRECTIONAL', role: 'Participant' },
          { quote: 'Very satisfied, I hope this class happens again.', name: 'CROSSROADS CORRECTIONAL', role: 'Participant' },
          { quote: 'Testimonial placeholder — awaiting client content.', name: 'Name', role: 'Program Graduate' },
        ],
      },
      programDelivery: {
        sectionLabel: 'DELIVERY FORMATS',
        headingLine1: 'Institutional',
        headingAccent: 'Ready.',
        body: 'Designed for scalability and institutional integration, we offer structured pathways for organizations to implement transformation at the cohort or individual level.',
        features: [
          { label: 'Evidence-Based Framework', icon: 'ShieldCheck' },
          { label: 'Rapid Implementation', icon: 'Zap' },
        ],
        cards: [
          { title: 'Live Cohort Program', subtitle: '5-Week Intensive', description: 'A structured virtual environment (Zoom) featuring facilitated discussions designed for maximum accountability and peer-to-peer transformation.', ctaLabel: 'Inquire for Access', ctaLink: '/contact', icon: 'Users' },
          { title: 'Self-Paced Digital License', subtitle: 'Scalable Solution', description: 'Independent learning modules ideal for institutional purchase. Designed for individual enrollment or large-scale organizational rollouts.', ctaLabel: 'View Licensing', ctaLink: '/contact', icon: 'Monitor' },
        ],
      },
      targetAudience: {
        sectionLabel: 'WHO WE WORK WITH',
        heading: 'TARGET AUDIENCES',
        body: 'Scaling impact through deep partnerships across the correctional and corporate landscape.',
        categories: [
          {
            title: 'INSTITUTIONS', icon: 'Building2',
            items: [
              { item: 'Department of Corrections' }, { item: 'Government Reentry Departments' },
              { item: 'Correctional Facilities' }, { item: 'County Jails' },
              { item: 'Juvenile Centers' }, { item: 'Educational Institutions' },
              { item: 'Community Colleges' },
            ],
          },
          {
            title: 'CORPORATE', icon: 'Briefcase',
            items: [
              { item: 'Second-Chance Employers' }, { item: 'Workforce Development Boards' },
              { item: 'Workforce Development Programs' }, { item: 'HR & Talent Acquisition' },
              { item: 'Corporate Responsibility' }, { item: 'Diversity & Inclusion' },
              { item: 'Innovation Teams' },
            ],
          },
          {
            title: 'COMMUNITY', icon: 'Heart',
            items: [
              { item: 'Reentry Organizations' }, { item: 'Non-Profit Foundations' },
              { item: 'Faith-Based Initiatives' }, { item: 'Family Support Groups' },
              { item: 'Legislative Advocates' }, { item: 'Lived Experience Leaders' },
            ],
          },
        ],
      },
      contactSection: {
        sectionLabel: 'NEXT STEPS',
        headingLine1: 'READY TO',
        headingAccent: 'TAKE ACTION?',
        body: "Whether you're looking for partnership, program information, or have a question, we're here to help you bounce forward.",
        ctaLabel: 'GET IN TOUCH',
        ctaLink: '/contact',
        email: 'admin@escapetheodds.com',
      },
      mediaPress: {
        sectionLabel: 'IN THE MEDIA',
        headingLine1: 'PRESS &',
        headingAccent: 'COVERAGE',
        body: 'National and local coverage highlighting the impact of the Escape The Odds mission.',
        featuredCaption: 'Chicago Sun-Times front page — April 18, 2022',
        mentions: [
          { publication: 'Good Morning America', headline: 'Ex-con spends his days empowering the incarcerated', url: 'https://www.goodmorningamerica.com/GMA3/video/con-spends-days-empowering-incarcerated-88100579' },
          { publication: 'Chicago Sun-Times', headline: "Making the most of his — and others' second chance", url: 'https://chicago.suntimes.com/2022/4/17/23027343/aaron-smith-south-side-second-chances-escaping-the-odds-podcast' },
          { publication: 'ABC 7 Chicago', headline: 'Escaping the Odds podcast tells triumphant stories of entrepreneurs after life in prison', url: 'https://abc7chicago.com/escaping-the-odds-podcast-aaron-smith-life-in-prison-triumphant-stories/11493238/' },
          { publication: 'Fox 32 Chicago', headline: 'Meet the man helping former inmates become entrepreneurs', url: 'https://www.wciu.com/videos/wciu-other/meet-the-man-helping-former-inmates-become-entrepreneurs' },
          { publication: "Crain's Chicago Business", headline: 'Ex-offenders in Chicago owning their own companies', url: 'https://www.chicagobusiness.com/private-intelligence/ex-offenders-chicago-owning-their-own-companies' },
          { publication: 'AfroTech', headline: 'Aaron Smith escaped the odds through podcasting and trucking', url: 'https://afrotech.com/aaron-smith-escaped-the-odds-podcasting-trucking' },
        ],
      },
    },
  })

  console.log('[seed:homepage] Homepage content seeded successfully.')
}
