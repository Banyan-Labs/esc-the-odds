"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const courses = [
  {
    title: "Financial Independence 101",
    description:
      "Master the basics of personal finance, investing, and wealth building strategies to secure your future.",
    link: "https://gohighlevel.com/course1", // Placeholder
    featured: true,
    tag: "Most Popular",
  },
  {
    title: "Entrepreneurship Blueprint",
    description:
      "From idea to execution: a step-by-step guide to starting your own business.",
    link: "https://gohighlevel.com/course2", // Placeholder
    featured: false,
    tag: "Business",
  },
  {
    title: "Digital Skills Mastery",
    description:
      "Learn the high-income skills needed to thrive in the modern digital economy.",
    link: "https://gohighlevel.com/course3", // Placeholder
    featured: false,
    tag: "Skills",
  },
];

export function CoursesSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 tracking-tight">
              Master the Skills of{" "}
              <span className="text-primary">Tomorrow</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our curated curriculum is designed to give you the practical edge
              you need to succeed in the real world.
            </p>
          </div>
          <Link
            href="https://link.gohighlevel.com/widget/form/YOUR_COURSE_WIDGET_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 font-bold flex items-center gap-2 text-lg group"
          >
            View All Courses
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.a
              key={index}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={cn(
                "relative p-8 rounded-3xl transition-all group overflow-hidden flex flex-col justify-between h-full",
                course.featured
                  ? "md:col-span-2 md:row-span-2 bg-secondary text-white shadow-xl hover:shadow-2xl ring-4 ring-secondary/5"
                  : "bg-gray-50 border border-gray-100 hover:border-primary/50 hover:shadow-lg hover:bg-white"
              )}
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={cn(
                      "px-3 py-1 text-xs font-bold tracking-wide uppercase rounded-full",
                      course.featured
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-600"
                    )}
                  >
                    {course.tag}
                  </div>
                  <BookOpen
                    className={cn(
                      "w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity",
                      course.featured ? "text-white" : "text-primary"
                    )}
                  />
                </div>

                <h3
                  className={cn(
                    "font-bold mb-3 tracking-tight",
                    course.featured
                      ? "text-3xl md:text-4xl text-white"
                      : "text-xl text-secondary"
                  )}
                >
                  {course.title}
                </h3>
                <p
                  className={cn(
                    "leading-relaxed",
                    course.featured
                      ? "text-gray-300 text-lg max-w-lg"
                      : "text-gray-600"
                  )}
                >
                  {course.description}
                </p>
              </div>

              <div
                className={cn(
                  "mt-8 flex items-center font-bold transition-colors",
                  course.featured
                    ? "text-primary group-hover:text-primary/80"
                    : "text-secondary group-hover:text-primary"
                )}
              >
                Start Learning <ArrowUpRight className="w-4 h-4 ml-2" />
              </div>

              {/* Decorative Blur for Featured Card */}
              {course.featured && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary blur-[100px] opacity-20 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
