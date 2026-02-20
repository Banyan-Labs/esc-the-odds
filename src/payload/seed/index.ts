import path from 'path'
import { fileURLToPath } from 'url'
import type { Payload } from 'payload'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ADMIN_EMAIL = 'admin@esctheodds.com'
const ADMIN_PASSWORD = 'password'

const lexicalContent = (text: string) => ({
  root: {
    type: 'root',
    children: text.split('\n\n').map((paragraph) => ({
      type: 'paragraph',
      children: [{ type: 'text', text: paragraph, version: 1 }],
      direction: 'ltr' as const,
      format: '' as const,
      indent: 0,
      version: 1,
    })),
    direction: 'ltr' as const,
    format: '' as const,
    indent: 0,
    version: 1,
  },
})

const DEMO_POSTS = [
  {
    title: 'The Power of Mindset in Reentry',
    slug: 'power-of-mindset-in-reentry',
    excerpt:
      'How shifting your mindset can be the most powerful tool in overcoming the challenges of reentry and building a life beyond incarceration.',
    category: 'mindset' as const,
    content: lexicalContent(
      `Reentry is more than just walking out of a facility. It's a mental shift — a decision to see yourself differently than the system has labeled you.\n\nAt Escape The Odds, we believe that mindset is the foundation of everything. Before you can build a career, repair relationships, or pursue education, you have to believe that change is possible. That's where the Bounce Forward Plan begins.\n\nEvery person who has successfully navigated reentry will tell you the same thing: it started with a decision. A decision to stop seeing yourself as a product of your past and start seeing yourself as the architect of your future.`,
    ),
    image: {
      file: 'placeholder-1.jpg',
      alt: 'Person looking forward toward a bright horizon, symbolizing a fresh start',
    },
  },
  {
    title: 'Building a Business After Incarceration',
    slug: 'building-business-after-incarceration',
    excerpt:
      'Entrepreneurship as a pathway to independence — real stories and practical steps for formerly incarcerated individuals starting their own businesses.',
    category: 'business' as const,
    content: lexicalContent(
      `One of the biggest barriers to reentry is employment. Background checks, gaps in resumes, and stigma can make traditional employment feel impossible. But there's another path: entrepreneurship.\n\nAcross the country, formerly incarcerated individuals are building successful businesses. From food trucks to tech startups, the skills developed through adversity — resilience, resourcefulness, hustle — translate directly into entrepreneurship.\n\nEscape The Odds is committed to providing the framework, mentorship, and resources to help turn business dreams into reality. Our courses cover everything from business planning to financial literacy, giving participants the tools they need to build something of their own.`,
    ),
    image: {
      file: 'placeholder-2.jpg',
      alt: 'Entrepreneur working at a desk, planning their next business move',
    },
  },
]

export async function seed(payload: Payload): Promise<void> {
  // Check if posts already exist
  const { totalDocs: existingPosts } = await payload.count({
    collection: 'posts',
    overrideAccess: true,
  })

  if (existingPosts > 0) {
    console.log(`[seed] Skipped — ${existingPosts} post(s) already exist.`)
    return
  }

  // Create admin user if none exists
  const { totalDocs: existingUsers } = await payload.count({
    collection: 'users',
    overrideAccess: true,
  })

  let adminUser
  if (existingUsers === 0) {
    console.log('[seed] Creating admin user...')
    adminUser = await payload.create({
      collection: 'users',
      overrideAccess: true,
      data: {
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
        roles: ['admin'],
      },
    })
    console.log(`[seed] Admin user created: ${adminUser.email}`)
  } else {
    const { docs } = await payload.find({
      collection: 'users',
      overrideAccess: true,
      limit: 1,
    })
    adminUser = docs[0]
    console.log(`[seed] Using existing user: ${adminUser.email}`)
  }

  // Upload media and create posts
  for (const post of DEMO_POSTS) {
    console.log(`[seed] Uploading image: ${post.image.alt}...`)
    const imagePath = path.resolve(__dirname, post.image.file)

    const media = await payload.create({
      collection: 'media',
      overrideAccess: true,
      data: { alt: post.image.alt },
      filePath: imagePath,
    })

    console.log(`[seed] Creating post: ${post.title}...`)
    await payload.create({
      collection: 'posts',
      overrideAccess: true,
      data: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        category: post.category,
        content: post.content,
        featuredImage: media.id,
        author: adminUser.id,
      },
    })
  }

  console.log('[seed] Complete — 2 demo posts created.')
}
