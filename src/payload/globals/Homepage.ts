import type { GlobalConfig } from 'payload'
import { publicAccess, isAuthenticated } from '../access'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  access: {
    read: publicAccess,
    update: isAuthenticated,
  },
  fields: [
    // ───────────────────────────────────────────────
    // HERO SECTION
    // ───────────────────────────────────────────────
    {
      type: 'group',
      name: 'hero',
      label: 'Hero Section',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'headlineLine1', type: 'text', label: 'Headline Line 1', defaultValue: 'REWRITE THE' },
            { name: 'headlineAccent1', type: 'text', label: 'Headline Accent 1 (gold)', defaultValue: 'NARRATIVE.' },
          ],
        },
        {
          type: 'row',
          fields: [
            { name: 'headlineLine2', type: 'text', label: 'Headline Line 2', defaultValue: 'MASTER THE' },
            { name: 'headlineAccent2', type: 'text', label: 'Headline Accent 2 (gold)', defaultValue: 'TRANSITION.' },
          ],
        },
        {
          name: 'subheadline',
          type: 'textarea',
          label: 'Subheadline',
          defaultValue: 'Bounce Forward through the power of lived experience, workforce development, and financial empowerment.',
        },
        {
          type: 'row',
          fields: [
            { name: 'cta1Label', type: 'text', label: 'CTA 1 Label', defaultValue: 'BOOK A SCREENING' },
            { name: 'cta1Link', type: 'text', label: 'CTA 1 Link', defaultValue: '/contact' },
          ],
        },
        {
          type: 'row',
          fields: [
            { name: 'cta2Label', type: 'text', label: 'CTA 2 Label', defaultValue: 'WATCH THE TRAILER' },
            { name: 'cta2Link', type: 'text', label: 'CTA 2 Link', defaultValue: '#the-film' },
          ],
        },
        { name: 'tagline', type: 'text', label: 'Tagline', defaultValue: 'Empowering Men and Women to Escape the Odds.' },
        { name: 'motto', type: 'text', label: 'Motto', defaultValue: 'CHANGE YOUR MINDSET. CHANGE YOUR LIFE.' },
        {
          name: 'carouselImages',
          type: 'array',
          label: 'Carousel Images',
          minRows: 1,
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────
    // THE FILM SECTION
    // ───────────────────────────────────────────────
    {
      type: 'group',
      name: 'theFilm',
      label: 'The Film Section',
      fields: [
        { name: 'sectionLabel', type: 'text', label: 'Section Label', defaultValue: 'THE FILM' },
        {
          type: 'row',
          fields: [
            { name: 'headingLine1', type: 'text', label: 'Heading Line 1', defaultValue: 'ESCAPING THE ODDS' },
            { name: 'headingAccent', type: 'text', label: 'Heading Accent (gold)', defaultValue: 'OF RECIDIVISM.' },
          ],
        },
        {
          name: 'quote',
          type: 'textarea',
          label: 'Quote',
          defaultValue: 'The judge never said that this debt came with interest you would pay for the rest of your life.',
        },
        {
          name: 'body',
          type: 'textarea',
          label: 'Body Text',
          defaultValue: 'Our mission spotlights vocational training, second-chance hiring, entrepreneurship, and workforce development. Through the power of lived experience and structured planning, we illuminate the path to bounce forward.',
        },
        {
          type: 'row',
          fields: [
            { name: 'cta1Label', type: 'text', label: 'CTA 1 Label', defaultValue: 'LEARN ABOUT THE MISSION' },
            { name: 'cta1Link', type: 'text', label: 'CTA 1 Link', defaultValue: '/about' },
          ],
        },
        {
          type: 'row',
          fields: [
            { name: 'cta2Label', type: 'text', label: 'CTA 2 Label', defaultValue: 'EXPLORE THE FILM' },
            { name: 'cta2Link', type: 'text', label: 'CTA 2 Link', defaultValue: '/film' },
          ],
        },
        {
          name: 'posterImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Poster / Thumbnail Image',
        },
        {
          name: 'videoUrl',
          type: 'text',
          label: 'Video File Path (e.g. /assets/trailer.mp4)',
          defaultValue: '/assets/ETO Doc Trailer_FINAL_Cta End Card.mp4',
        },
      ],
    },

    // ───────────────────────────────────────────────
    // THE EXPERIENCE SECTION
    // ───────────────────────────────────────────────
    {
      type: 'group',
      name: 'theExperience',
      label: 'The Experience Section',
      fields: [
        { name: 'sectionLabel', type: 'text', label: 'Section Label', defaultValue: 'THE EXPERIENCE' },
        { name: 'heading', type: 'text', label: 'Heading', defaultValue: 'THE EXPERIENCE' },
        {
          name: 'body',
          type: 'textarea',
          label: 'Body Text',
          defaultValue: 'A structured, facilitated transformation experience designed to present the film, facilitate guided discussion, and activate reflection and accountability.',
        },
        {
          name: 'pillars',
          type: 'array',
          label: 'Pillars',
          maxRows: 3,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'subtitle', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            {
              name: 'icon',
              type: 'select',
              options: [
                { label: 'Film', value: 'Film' },
                { label: 'MessageSquare', value: 'MessageSquare' },
                { label: 'GraduationCap', value: 'GraduationCap' },
              ],
              defaultValue: 'Film',
            },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────
    // ECOSYSTEM SECTION
    // ───────────────────────────────────────────────
    {
      type: 'group',
      name: 'ecosystem',
      label: 'Ecosystem Section',
      fields: [
        { name: 'sectionLabel', type: 'text', label: 'Section Label', defaultValue: 'THE ETO ECOSYSTEM' },
        {
          type: 'row',
          fields: [
            { name: 'headingLine1', type: 'text', label: 'Heading Line 1', defaultValue: 'A STRUCTURED' },
            { name: 'headingAccent', type: 'text', label: 'Heading Accent (gold)', defaultValue: 'TRANSFORMATION.' },
          ],
        },
        {
          name: 'cards',
          type: 'array',
          label: 'Cards',
          maxRows: 4,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'subtitle', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'link', type: 'text', defaultValue: '/programs' },
            {
              name: 'icon',
              type: 'select',
              options: [
                { label: 'Film', value: 'Film' },
                { label: 'BookOpen', value: 'BookOpen' },
                { label: 'Truck', value: 'Truck' },
                { label: 'Landmark', value: 'Landmark' },
              ],
              defaultValue: 'Film',
            },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────
    // CURRICULUM SECTION
    // ───────────────────────────────────────────────
    {
      type: 'group',
      name: 'curriculum',
      label: 'Curriculum Section',
      fields: [
        { name: 'sectionLabel', type: 'text', label: 'Section Label', defaultValue: 'THE CURRICULUM' },
        {
          type: 'row',
          fields: [
            { name: 'headingLine1', type: 'text', label: 'Heading Line 1', defaultValue: 'BOUNCE FORWARD PLAN —' },
            { name: 'headingAccent', type: 'text', label: 'Heading Accent (gold)', defaultValue: 'MASTERING YOUR REENTRY' },
          ],
        },
        {
          name: 'body',
          type: 'textarea',
          label: 'Body Text',
          defaultValue: "Mastering your reentry isn't about getting back to where you were—it's about building a foundation to go further than you've ever been.",
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Product Image',
        },
        {
          type: 'row',
          fields: [
            { name: 'badge1', type: 'text', label: 'Image Badge 1', defaultValue: 'REENTRY MASTERY' },
            { name: 'badge2', type: 'text', label: 'Image Badge 2', defaultValue: '15 SESSIONS' },
          ],
        },
        {
          name: 'coursePoints',
          type: 'array',
          label: 'Course Points',
          fields: [
            { name: 'point', type: 'text', required: true },
          ],
        },
        {
          type: 'row',
          fields: [
            { name: 'cta1Label', type: 'text', label: 'CTA 1 Label', defaultValue: 'INQUIRE ABOUT THE CURRICULUM' },
            { name: 'cta1Link', type: 'text', label: 'CTA 1 Link', defaultValue: '/contact' },
          ],
        },
        {
          type: 'row',
          fields: [
            { name: 'cta2Label', type: 'text', label: 'CTA 2 Label', defaultValue: 'GET THE WORKBOOK' },
            { name: 'cta2Link', type: 'text', label: 'CTA 2 Link', defaultValue: 'https://www.amazon.com/dp/B0GMP7Z9P9' },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────
    // TESTIMONIALS SECTION
    // ───────────────────────────────────────────────
    {
      type: 'group',
      name: 'testimonials',
      label: 'Testimonials Section',
      fields: [
        { name: 'sectionLabel', type: 'text', label: 'Section Label', defaultValue: 'IMPACT STORIES' },
        {
          type: 'row',
          fields: [
            { name: 'headingLine1', type: 'text', label: 'Heading', defaultValue: 'VOICES OF' },
            { name: 'headingAccent', type: 'text', label: 'Heading Accent (gold)', defaultValue: 'TRANSFORMATION' },
          ],
        },
        { name: 'body', type: 'text', label: 'Body Text', defaultValue: 'Real stories from those who chose to bounce forward.' },
        {
          name: 'items',
          type: 'array',
          label: 'Testimonials',
          fields: [
            { name: 'quote', type: 'textarea', required: true },
            { name: 'name', type: 'text', required: true },
            { name: 'role', type: 'text', required: true },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────
    // PROGRAM DELIVERY SECTION
    // ───────────────────────────────────────────────
    {
      type: 'group',
      name: 'programDelivery',
      label: 'Program Delivery Section',
      fields: [
        { name: 'sectionLabel', type: 'text', label: 'Section Label', defaultValue: 'DELIVERY FORMATS' },
        {
          type: 'row',
          fields: [
            { name: 'headingLine1', type: 'text', label: 'Heading', defaultValue: 'Institutional' },
            { name: 'headingAccent', type: 'text', label: 'Heading Accent (gold)', defaultValue: 'Ready.' },
          ],
        },
        {
          name: 'body',
          type: 'textarea',
          label: 'Body Text',
          defaultValue: 'Designed for scalability and institutional integration, we offer structured pathways for organizations to implement transformation at the cohort or individual level.',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Feature Bullets',
          fields: [
            { name: 'label', type: 'text', required: true },
            {
              name: 'icon',
              type: 'select',
              options: [
                { label: 'ShieldCheck', value: 'ShieldCheck' },
                { label: 'Zap', value: 'Zap' },
              ],
              defaultValue: 'ShieldCheck',
            },
          ],
        },
        {
          name: 'cards',
          type: 'array',
          label: 'Delivery Cards',
          maxRows: 2,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'subtitle', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'ctaLabel', type: 'text', required: true },
            { name: 'ctaLink', type: 'text', defaultValue: '/contact' },
            {
              name: 'icon',
              type: 'select',
              options: [
                { label: 'Users', value: 'Users' },
                { label: 'Monitor', value: 'Monitor' },
              ],
              defaultValue: 'Users',
            },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────
    // TARGET AUDIENCE SECTION
    // ───────────────────────────────────────────────
    {
      type: 'group',
      name: 'targetAudience',
      label: 'Target Audience Section',
      fields: [
        { name: 'sectionLabel', type: 'text', label: 'Section Label', defaultValue: 'WHO WE WORK WITH' },
        { name: 'heading', type: 'text', label: 'Heading', defaultValue: 'TARGET AUDIENCES' },
        {
          name: 'body',
          type: 'text',
          label: 'Body Text',
          defaultValue: 'Scaling impact through deep partnerships across the correctional and corporate landscape.',
        },
        {
          name: 'categories',
          type: 'array',
          label: 'Audience Categories',
          maxRows: 3,
          fields: [
            { name: 'title', type: 'text', required: true },
            {
              name: 'icon',
              type: 'select',
              options: [
                { label: 'Building2', value: 'Building2' },
                { label: 'Briefcase', value: 'Briefcase' },
                { label: 'Heart', value: 'Heart' },
              ],
              defaultValue: 'Building2',
            },
            {
              name: 'items',
              type: 'array',
              label: 'List Items',
              fields: [
                { name: 'item', type: 'text', required: true },
              ],
            },
          ],
        },
      ],
    },

    // ───────────────────────────────────────────────
    // CONTACT SECTION
    // ───────────────────────────────────────────────
    {
      type: 'group',
      name: 'contactSection',
      label: 'Contact Section',
      fields: [
        { name: 'sectionLabel', type: 'text', label: 'Section Label', defaultValue: 'NEXT STEPS' },
        {
          type: 'row',
          fields: [
            { name: 'headingLine1', type: 'text', label: 'Heading', defaultValue: 'READY TO' },
            { name: 'headingAccent', type: 'text', label: 'Heading Accent (gold)', defaultValue: 'TAKE ACTION?' },
          ],
        },
        {
          name: 'body',
          type: 'textarea',
          label: 'Body Text',
          defaultValue: "Whether you're looking for partnership, program information, or have a question, we're here to help you bounce forward.",
        },
        {
          type: 'row',
          fields: [
            { name: 'ctaLabel', type: 'text', label: 'CTA Label', defaultValue: 'GET IN TOUCH' },
            { name: 'ctaLink', type: 'text', label: 'CTA Link', defaultValue: '/contact' },
          ],
        },
        { name: 'email', type: 'text', label: 'Email Address', defaultValue: 'admin@escapetheodds.com' },
      ],
    },

    // ───────────────────────────────────────────────
    // MEDIA / PRESS SECTION
    // ───────────────────────────────────────────────
    {
      type: 'group',
      name: 'mediaPress',
      label: 'Media & Press Section',
      fields: [
        { name: 'sectionLabel', type: 'text', label: 'Section Label', defaultValue: 'IN THE MEDIA' },
        {
          type: 'row',
          fields: [
            { name: 'headingLine1', type: 'text', label: 'Heading', defaultValue: 'PRESS &' },
            { name: 'headingAccent', type: 'text', label: 'Heading Accent (gold)', defaultValue: 'COVERAGE' },
          ],
        },
        {
          name: 'body',
          type: 'text',
          label: 'Body Text',
          defaultValue: 'National and local coverage highlighting the impact of the Escape The Odds mission.',
        },
        {
          name: 'featuredImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Featured Image',
        },
        { name: 'featuredCaption', type: 'text', label: 'Featured Image Caption', defaultValue: 'Chicago Sun-Times front page — April 18, 2022' },
        {
          name: 'mentions',
          type: 'array',
          label: 'Media Mentions',
          fields: [
            { name: 'publication', type: 'text', required: true },
            { name: 'headline', type: 'text', required: true },
            { name: 'url', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
}
