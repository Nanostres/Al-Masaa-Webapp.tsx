import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Briefcase, FileText, Globe, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/logo.png" alt="AL MASAA AL BAYDHA Logo" width={50} height={50} className="h-12 w-auto" />
                <div className="hidden md:block">
                  <h1 className="text-xl font-bold">AL MASAA AL BAYDHA</h1>
                  <p className="text-xs text-accent">DOCUMENTS TYPING & COPYING</p>
                </div>
              </Link>
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:underline">
                    Apply Now
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="hover:underline">
                    Check Status
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="hover:underline">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <Button variant="secondary" className="hidden md:flex">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tight text-primary">
                  Your Trusted PRO Services Partner in UAE
                </h2>
                <p className="text-xl text-gray-700">
                  Complete business setup, visa services, and government transactions handled by professionals.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                    <Link href="/register">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-primary" asChild>
                    <Link href="/services">Our Services</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[400px] overflow-hidden rounded-lg bg-white p-4 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/5"></div>
                  <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-4 text-center">
                    <Image src="/logo.png" alt="AL MASAA AL BAYDHA Logo" width={120} height={120} />
                    <h3 className="text-2xl font-semibold text-primary">AL MASAA AL BAYDHA</h3>
                    <p className="text-accent font-medium">DOCUMENTS TYPING & COPYING</p>
                    <p className="text-gray-600">Your gateway to efficient government and business services in UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-primary">Our Services</h2>
              <p className="mt-4 text-gray-600">Comprehensive PRO services for businesses and individuals in UAE</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={<Briefcase className="h-10 w-10" />}
                title="Business Setup & PRO Services"
                description="Complete business setup and PRO services for new and existing businesses in UAE."
              />
              <ServiceCard
                icon={<FileText className="h-10 w-10" />}
                title="Trade License Services"
                description="New trade license issuance and renewal services for all business types."
              />
              <ServiceCard
                icon={<Globe className="h-10 w-10" />}
                title="Visa & Immigration Services"
                description="Complete visa processing, residence permits, and immigration services."
              />
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" className="border-primary text-primary" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-primary">How It Works</h2>
              <p className="mt-4 text-gray-600">Simple steps to complete your application</p>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              <ProcessStep
                number="1"
                title="Submit Application"
                description="Choose your service and submit your application online or in-person"
              />
              <ProcessStep
                number="2"
                title="Document Verification"
                description="We verify your documents and requirements"
              />
              <ProcessStep
                number="3"
                title="Government Processing"
                description="We handle all government transactions on your behalf"
              />
              <ProcessStep
                number="4"
                title="Service Completion"
                description="Receive your documents and completion certificate"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-primary">Client Testimonials</h2>
              <p className="mt-4 text-gray-600">What our clients say about our services</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <TestimonialCard
                name="Mohammed Al Hashimi"
                service="Business Setup"
                review="AL MASAA AL BAYDHA made setting up my business in Sharjah incredibly easy. Their team handled all the paperwork efficiently."
              />
              <TestimonialCard
                name="Sarah Johnson"
                service="Visa Processing"
                review="I was impressed with how quickly they processed my family's residence visas. The team was professional throughout the process."
              />
              <TestimonialCard
                name="Rajesh Patel"
                service="Trade License Renewal"
                review="Very efficient service for my trade license renewal. The process was smooth and they handled everything professionally."
              />
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-primary text-primary" asChild>
                <Link href="/reviews">View All Reviews</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-primary">Frequently Asked Questions</h2>
              <p className="mt-4 text-gray-600">Find answers to common questions about our services</p>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="space-y-4">
                <FaqItem
                  question="What services does AL MASAA AL BAYDHA provide?"
                  answer="We provide a comprehensive range of PRO services including trade license services, business setup, visa and immigration services, document attestation, Emirates ID services, and more."
                />
                <FaqItem
                  question="How long does it take to process a residence visa?"
                  answer="The residence visa process typically takes 2-3 weeks from start to finish, including entry permit approval, medical testing, Emirates ID registration, and visa stamping."
                />
                <FaqItem
                  question="Can foreigners own 100% of a business in the UAE?"
                  answer="Yes, foreigners can now own 100% of businesses in the UAE mainland in most business activities, following recent changes to the Commercial Companies Law."
                />
                <FaqItem
                  question="What documents are required for trade license renewal?"
                  answer="For trade license renewal, you typically need the original trade license, tenancy contract, passport copies of all partners/owners, Emirates ID copies, and other documents specific to your business type."
                />
              </div>
              <div className="mt-8 text-center">
                <Button variant="outline" className="border-primary text-primary" asChild>
                  <Link href="/faq">View All FAQs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Government Partners Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-primary">Our Government Partners</h2>
              <p className="mt-4 text-gray-600">We work with all major government entities in the UAE</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <GovernmentPartnerLogo name="Sharjah Municipality" />
              <GovernmentPartnerLogo name="Tasjeel" />
              <GovernmentPartnerLogo name="Tasheel" />
              <GovernmentPartnerLogo name="Dubai Economy" />
              <GovernmentPartnerLogo name="Sharjah Government" />
              <GovernmentPartnerLogo name="EVG" />
              <GovernmentPartnerLogo name="Ministry of Health" />
              <GovernmentPartnerLogo name="MOHRE" subtitle="Ministry of Human Resources" />
              <GovernmentPartnerLogo name="Amer" />
              <GovernmentPartnerLogo name="Tadbeer" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="AL MASAA AL BAYDHA Logo" width={50} height={50} className="h-12 w-auto" />
                <div>
                  <h3 className="text-lg font-bold">AL MASAA AL BAYDHA</h3>
                  <p className="text-xs text-accent">DOCUMENTS TYPING & COPYING</p>
                </div>
              </div>
              <p className="mt-4 text-gray-300">
                Your trusted partner for all PRO services in the United Arab Emirates.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="text-gray-300 hover:text-white">
                    Apply Now
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="text-gray-300 hover:text-white">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact</h3>
              <address className="not-italic text-gray-300">
                <p>Industrial Area 10, Sharjah UAE</p>
                <p>P.O. Box 29884</p>
                <p className="mt-2">Email: almasaatyping@gmail.com</p>
                <p>Mobile: +971 55 630 5330</p>
                <p>Tel: 06 534 1118</p>
              </address>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Office Hours</h3>
              <ul className="text-gray-300 space-y-2">
                <li>
                  Monday - Thursday:
                  <div className="ml-4">
                    <div>9:30 AM - 2:00 PM</div>
                    <div>5:30 PM - 10:00 PM</div>
                  </div>
                </li>
                <li>
                  Friday:
                  <div className="ml-4">
                    <div>9:00 AM - 12:00 PM</div>
                    <div>5:30 PM - 10:00 PM</div>
                  </div>
                </li>
                <li>
                  Saturday:
                  <div className="ml-4">
                    <div>9:30 AM - 2:00 PM</div>
                    <div>5:30 PM - 10:00 PM</div>
                  </div>
                </li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} AL MASAA AL BAYDHA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="mb-4 text-accent">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4">
        <Link href="/services" className="text-sm font-medium text-accent hover:underline">
          Learn more <ArrowRight className="ml-1 inline h-3 w-3" />
        </Link>
      </div>
    </div>
  )
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
        {number}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  )
}

function TestimonialCard({ name, service, review }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex">
        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      </div>
      <p className="text-gray-600">"{review}"</p>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{service}</p>
      </div>
    </div>
  )
}

function FaqItem({ question, answer }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <h3 className="text-lg font-medium text-primary">{question}</h3>
      <p className="mt-2 text-gray-600">{answer}</p>
    </div>
  )
}

function GovernmentPartnerLogo({ name, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 bg-white shadow-sm h-32">
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
        <Image src="/logo.png" alt="AL MASAA AL BAYDHA Logo" width={24} height={24} className="h-6 w-auto opacity-30" />
      </div>
      <p className="font-medium text-center text-primary">{name}</p>
      {subtitle && <p className="text-xs text-center text-gray-500">{subtitle}</p>}
    </div>
  )
}

function Clock({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  )
}

function Shield({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  )
}

