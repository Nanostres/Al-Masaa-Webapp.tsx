"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, Briefcase, Globe, FileText, CreditCard, Building } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    // In a real application, you would filter the FAQs based on the search query
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-primary">Frequently Asked Questions</h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">Find answers to common questions about our services</p>
      </div>

      <div className="mb-12 mx-auto max-w-2xl">
        <form onSubmit={handleSearch} className="relative">
          <Input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90"
            size="sm"
          >
            Search
          </Button>
        </form>
      </div>

      <Tabs defaultValue="general">
        <div className="mb-8">
          <TabsList className="w-full justify-start overflow-auto">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="business">Business Services</TabsTrigger>
            <TabsTrigger value="visa">Visa & Immigration</TabsTrigger>
            <TabsTrigger value="documents">Documents & ID</TabsTrigger>
            <TabsTrigger value="fees">Fees & Payments</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">General Questions</CardTitle>
              <CardDescription>Common questions about our services</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What services does AL MASAA AL BAYDHA provide?</AccordionTrigger>
                  <AccordionContent>
                    <p>AL MASAA AL BAYDHA provides a comprehensive range of PRO services in the UAE, including:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>Trade license services (new and renewal)</li>
                      <li>Business setup and PRO services</li>
                      <li>Immigration and Tasheel services</li>
                      <li>Visa and residence services</li>
                      <li>Certificate attestation</li>
                      <li>Medical and Emirates ID services</li>
                      <li>Tenancy contract services</li>
                      <li>Family visa services</li>
                      <li>Vehicle/MOI online services</li>
                      <li>Driving license services</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Where is AL MASAA AL BAYDHA located?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      We are located in Industrial Area 10, Sharjah, United Arab Emirates. Our office is easily
                      accessible and we welcome walk-in clients during our business hours.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What are your business hours?</AccordionTrigger>
                  <AccordionContent>
                    <p>Our business hours are:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>
                        Monday - Thursday:
                        <ul className="ml-4 mt-1 list-none">
                          <li>9:30 AM - 2:00 PM</li>
                          <li>5:30 PM - 10:00 PM</li>
                        </ul>
                      </li>
                      <li>
                        Friday:
                        <ul className="ml-4 mt-1 list-none">
                          <li>9:00 AM - 12:00 PM</li>
                          <li>5:30 PM - 10:00 PM</li>
                        </ul>
                      </li>
                      <li>
                        Saturday:
                        <ul className="ml-4 mt-1 list-none">
                          <li>9:30 AM - 2:00 PM</li>
                          <li>5:30 PM - 10:00 PM</li>
                        </ul>
                      </li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How can I contact AL MASAA AL BAYDHA?</AccordionTrigger>
                  <AccordionContent>
                    <p>You can contact us through the following channels:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>Mobile: +971 55 630 5330</li>
                      <li>Telephone: 06 534 1118</li>
                      <li>Email: almasaatyping@gmail.com</li>
                      <li>Visit our office in Industrial Area 10, Sharjah</li>
                      <li>Use the contact form on our website</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I track the status of my application?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      You can track the status of your application using the reference number provided to you at the
                      time of submission. Simply visit the "Check Status" page on our website and enter your reference
                      number. Alternatively, you can contact our office directly with your reference number.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="business">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Briefcase className="h-5 w-5" />
                Business Services
              </CardTitle>
              <CardDescription>Questions about business setup and trade licenses</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What types of business licenses can you help with?</AccordionTrigger>
                  <AccordionContent>
                    <p>We can assist with all types of business licenses in the UAE, including:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>Commercial licenses</li>
                      <li>Professional licenses</li>
                      <li>Industrial licenses</li>
                      <li>Tourism licenses</li>
                      <li>Free zone licenses</li>
                      <li>Mainland licenses</li>
                    </ul>
                    <p className="mt-2">
                      Our services cover new license issuance, renewals, amendments, and cancellations.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How long does it take to set up a business in the UAE?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      The timeline for business setup varies depending on the type of business, location (free zone or
                      mainland), and specific requirements. Generally, it can take anywhere from 1-4 weeks to complete
                      the process. Free zone companies typically have faster setup times compared to mainland companies.
                      Our team works efficiently to minimize processing times while ensuring all legal requirements are
                      met.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What documents are required for trade license renewal?</AccordionTrigger>
                  <AccordionContent>
                    <p>For trade license renewal, you typically need:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>Original trade license</li>
                      <li>Tenancy contract (Ejari)</li>
                      <li>Passport copies of all partners/owners</li>
                      <li>Emirates ID copies of all partners/owners</li>
                      <li>MOA (Memorandum of Association) if applicable</li>
                      <li>Previous year's audit report (if required)</li>
                      <li>Other documents specific to your business type</li>
                    </ul>
                    <p className="mt-2">Our team will guide you through the specific requirements for your business.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Can foreigners own 100% of a business in the UAE?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Yes, foreigners can now own 100% of businesses in the UAE mainland in most business activities,
                      following recent changes to the Commercial Companies Law. Previously, 100% foreign ownership was
                      only possible in free zones. However, some strategic sectors still have ownership restrictions.
                      Our team can advise you on the specific regulations for your business activity and help you
                      navigate the ownership structure requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>What is the difference between mainland and free zone companies?</AccordionTrigger>
                  <AccordionContent>
                    <p>The main differences between mainland and free zone companies are:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>
                        <strong>Market access:</strong> Mainland companies can trade directly within the UAE market
                        without restrictions, while free zone companies may need a local distributor to trade outside
                        their free zone.
                      </li>
                      <li>
                        <strong>Ownership:</strong> Free zones have historically offered 100% foreign ownership, while
                        mainland companies had ownership restrictions (though these have been relaxed recently).
                      </li>
                      <li>
                        <strong>Tax benefits:</strong> Free zones typically offer tax exemptions and customs duty
                        benefits.
                      </li>
                      <li>
                        <strong>Location:</strong> Free zone companies must be physically located within their
                        designated free zone, while mainland companies have more flexibility in location.
                      </li>
                      <li>
                        <strong>Visa quotas:</strong> The number of visas available may differ between free zone and
                        mainland setups.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visa">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Globe className="h-5 w-5" />
                Visa & Immigration
              </CardTitle>
              <CardDescription>Questions about visa and immigration services</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What types of visas can you process?</AccordionTrigger>
                  <AccordionContent>
                    <p>We can process various types of visas, including:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>Employment visas</li>
                      <li>Family/dependent visas (spouse, children, parents)</li>
                      <li>Visit visas</li>
                      <li>Tourist visas</li>
                      <li>Transit visas</li>
                      <li>Student visas</li>
                      <li>Investor visas</li>
                      <li>Golden visas</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How long does it take to process a residence visa?</AccordionTrigger>
                  <AccordionContent>
                    <p>The residence visa process typically takes 2-3 weeks from start to finish. This includes:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>Entry permit approval: 3-5 working days</li>
                      <li>Status change (if inside UAE): 3-5 working days</li>
                      <li>Medical fitness test: 1-2 working days</li>
                      <li>Emirates ID registration: 1-2 working days</li>
                      <li>Visa stamping: 3-5 working days</li>
                    </ul>
                    <p className="mt-2">
                      Processing times may vary based on government processing speeds and individual circumstances.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What documents are required for family visa application?</AccordionTrigger>
                  <AccordionContent>
                    <p>For family visa applications, you typically need:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>Sponsor's passport and visa copy</li>
                      <li>Sponsor's Emirates ID copy</li>
                      <li>Sponsor's labor contract or salary certificate</li>
                      <li>Tenancy contract (Ejari)</li>
                      <li>Marriage certificate (for spouse visa) - attested</li>
                      <li>Birth certificates (for children) - attested</li>
                      <li>Passport copies of dependents</li>
                      <li>Photos of dependents (with white background)</li>
                      <li>Proof of relationship for parents (if sponsoring parents)</li>
                    </ul>
                    <p className="mt-2">All foreign documents must be legally translated to Arabic and attested.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>What is the minimum salary requirement to sponsor family?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      To sponsor your family in the UAE, you generally need to meet the following salary requirements:
                    </p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>
                        For sponsoring spouse and children: Minimum monthly salary of AED 4,000 with accommodation or
                        AED 10,000 without accommodation
                      </li>
                      <li>
                        For sponsoring parents: Higher salary requirements apply (typically AED 20,000+) and additional
                        conditions must be met
                      </li>
                    </ul>
                    <p className="mt-2">
                      Requirements may vary based on your nationality, visa type, and current immigration policies. Our
                      team can provide you with the most up-to-date requirements based on your specific situation.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>How often do residence visas need to be renewed?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Residence visas in the UAE typically need to be renewed every 2-3 years, depending on the visa
                      type:
                    </p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>Employment visas: Usually valid for 2 years</li>
                      <li>Family/dependent visas: Usually valid for the same period as the sponsor's visa</li>
                      <li>Investor visas: Usually valid for 2-3 years</li>
                      <li>Golden visas: Valid for 5-10 years</li>
                    </ul>
                    <p className="mt-2">
                      It's important to start the renewal process at least 30 days before the visa expiry date to avoid
                      fines and penalties. Our team can assist with timely renewals and ensure all requirements are met.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <FileText className="h-5 w-5" />
                Documents & ID
              </CardTitle>
              <CardDescription>Questions about document attestation and Emirates ID</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is document attestation and why is it needed?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Document attestation is the process of verifying the authenticity of documents issued in one
                      country so they can be legally used in another country. In the UAE, attestation is required for
                      foreign documents such as educational certificates, marriage certificates, birth certificates, and
                      other important documents.
                    </p>
                    <p className="mt-2">Attestation is needed for various purposes including:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>Employment visa applications</li>
                      <li>Business setup</li>
                      <li>Family visa sponsorship</li>
                      <li>Educational enrollment</li>
                      <li>Legal proceedings</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How long does the Emirates ID process take?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      The Emirates ID process typically takes 1-2 weeks from application to card delivery. The process
                      includes:
                    </p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>Application submission: 1 day</li>
                      <li>Biometric data collection (fingerprints, photo): 1 day</li>
                      <li>Card processing: 3-7 working days</li>
                      <li>Card delivery: 1-3 working days</li>
                    </ul>
                    <p className="mt-2">
                      Express services are available for an additional fee, which can reduce the processing time to
                      24-48 hours.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What documents are required for Emirates ID application?</AccordionTrigger>
                  <AccordionContent>
                    <p>For Emirates ID application, you typically need:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>Original passport</li>
                      <li>Copy of residence visa page</li>
                      <li>Passport-sized photographs with white background</li>
                      <li>Completed application form</li>
                      <li>Application fees</li>
                    </ul>
                    <p className="mt-2">
                      For renewals, you'll also need your existing Emirates ID card or a copy of it.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I get my documents attested in the UAE?</AccordionTrigger>
                  <AccordionContent>
                    <p>The document attestation process in the UAE typically involves several steps:</p>
                    <ol className="ml-6 mt-2 list-decimal space-y-1 text-gray-600">
                      <li>Notarization in the country of origin</li>
                      <li>Authentication by the Ministry of Foreign Affairs in the country of origin</li>
                      <li>Attestation by the UAE Embassy in the country of origin</li>
                      <li>Final attestation by the Ministry of Foreign Affairs in the UAE</li>
                    </ol>
                    <p className="mt-2">
                      AL MASAA AL BAYDHA can handle the entire attestation process for you, saving you time and ensuring
                      all requirements are met correctly. We have established channels with relevant authorities to
                      expedite the process.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>What is the medical test for visa processing?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      The medical test for visa processing in the UAE is a mandatory health screening required for
                      residence visa issuance or renewal. The test includes:
                    </p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>Blood tests (for infectious diseases like HIV, Hepatitis B, and Tuberculosis)</li>
                      <li>Chest X-ray</li>
                      <li>General physical examination</li>
                    </ul>
                    <p className="mt-2">
                      The test must be conducted at government-approved health centers. Our team can schedule
                      appointments and guide you through the process. Results are typically available within 2-3 working
                      days, and a medical fitness certificate is issued if all tests are clear.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fees">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <CreditCard className="h-5 w-5" />
                Fees & Payments
              </CardTitle>
              <CardDescription>Questions about service fees and payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How much do your services cost?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Our service fees vary depending on the specific service required, complexity, and urgency. We
                      offer competitive and transparent pricing for all our services. For detailed pricing information,
                      please contact our office directly or submit an inquiry through our website. We'll provide you
                      with a comprehensive quote based on your specific requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    <p>We accept various payment methods, including:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>Cash payments</li>
                      <li>Bank transfers</li>
                      <li>Credit/debit cards</li>
                      <li>Cheques (for certain services)</li>
                    </ul>
                    <p className="mt-2">Payment terms and methods can be discussed during your consultation.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Are there any additional government fees?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Yes, most services require government fees in addition to our service charges. These fees are set
                      by various government departments and are subject to change. Government fees may include:
                    </p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>Visa application and issuance fees</li>
                      <li>Trade license fees</li>
                      <li>Emirates ID fees</li>
                      <li>Medical test fees</li>
                      <li>Document attestation fees</li>
                      <li>Typing fees</li>
                    </ul>
                    <p className="mt-2">
                      We will provide you with a breakdown of all applicable government fees during our consultation.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you offer any discounts or packages?</AccordionTrigger>
                  <AccordionContent>
                    <p>Yes, we offer special packages and discounts for:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>Corporate clients with multiple services</li>
                      <li>Bulk visa processing</li>
                      <li>Complete business setup packages</li>
                      <li>Returning clients</li>
                      <li>Seasonal promotions</li>
                    </ul>
                    <p className="mt-2">
                      Please inquire about our current offers and packages that might suit your needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Is there a refund policy if services cannot be completed?</AccordionTrigger>
                  <AccordionContent>
                    <p>Our refund policy depends on the nature of the service and the stage of processing:</p>
                    <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                      <li>
                        If we are unable to complete a service due to reasons within our control, we offer a full refund
                        of our service charges.
                      </li>
                      <li>
                        If a service is rejected by government authorities due to reasons beyond our control (such as
                        security clearance issues or incomplete/inaccurate information provided by the client), we may
                        deduct processing fees already incurred.
                      </li>
                      <li>
                        Government fees that have already been paid to authorities are generally non-refundable as per
                        UAE regulations.
                      </li>
                    </ul>
                    <p className="mt-2">
                      Each case is handled individually, and we strive to find fair solutions for our clients. Our
                      detailed refund policy will be provided in our service agreement.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12">
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
    </div>
  )
}

function GovernmentPartnerLogo({ name, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 bg-white shadow-sm h-32">
      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-2">
        <Building className="h-8 w-8 text-primary" />
      </div>
      <p className="font-medium text-center text-primary">{name}</p>
      {subtitle && <p className="text-xs text-center text-gray-500">{subtitle}</p>}
    </div>
  )
}

