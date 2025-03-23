import Link from "next/link"
import Image from "next/image"
import {
  Briefcase,
  FileText,
  Globe,
  CreditCard,
  Users,
  Car,
  FileCheck,
  Stamp,
  Building,
  BadgeIcon as IdCard,
  FileSpreadsheet,
  Home,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-primary">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          AL MASAA AL BAYDHA provides comprehensive PRO services for businesses and individuals in the United Arab
          Emirates
        </p>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-primary">Business Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<Briefcase className="text-accent" />}
            title="Trade License Services"
            description="New and renewal trade license services for all business types"
            features={[
              "New trade license issuance",
              "Trade license renewal",
              "License amendments",
              "License cancellation",
            ]}
          />
          <ServiceCard
            icon={<Building className="text-accent" />}
            title="Business Setup"
            description="Complete business setup services in UAE mainland and free zones"
            features={["Company formation", "Free zone setup", "Mainland company setup", "Business consultation"]}
          />
          <ServiceCard
            icon={<FileText className="text-accent" />}
            title="PRO Services"
            description="Professional PRO services for businesses"
            features={[
              "Government transactions",
              "Document processing",
              "Legal representation",
              "Corporate PRO services",
            ]}
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-primary">Visa & Immigration Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<Globe className="text-accent" />}
            title="Visa Services"
            description="Complete visa processing services"
            features={[
              "New visa applications",
              "Visa renewal",
              "Visa cancellation",
              "Visit visa to residence conversion",
            ]}
          />
          <ServiceCard
            icon={<Users className="text-accent" />}
            title="Family Visa Services"
            description="UAE family visa services for residents"
            features={["Spouse visa", "Children visa", "Parents visa", "Family visa renewal"]}
          />
          <ServiceCard
            icon={<FileSpreadsheet className="text-accent" />}
            title="Immigration Services"
            description="Immigration and Tasheel services"
            features={[
              "Immigration applications",
              "Tasheel services",
              "Visa stamping",
              "Immigration status amendments",
            ]}
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-primary">Document & ID Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<Stamp className="text-accent" />}
            title="Certificate Attestation"
            description="Document and certificate attestation services"
            features={[
              "Educational certificate attestation",
              "Commercial document attestation",
              "Personal document attestation",
              "Ministry attestation",
            ]}
          />
          <ServiceCard
            icon={<IdCard className="text-accent" />}
            title="Emirates ID Services"
            description="Emirates ID application and renewal"
            features={[
              "New Emirates ID application",
              "Emirates ID renewal",
              "Emirates ID replacement",
              "Information updates",
            ]}
          />
          <ServiceCard
            icon={<FileCheck className="text-accent" />}
            title="Medical Services"
            description="Medical test and certificate services"
            features={[
              "Visa medical test",
              "Medical certificate issuance",
              "Medical test appointment booking",
              "Medical fitness certificate",
            ]}
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-primary">Vehicle & Property Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<Car className="text-accent" />}
            title="Vehicle Services"
            description="MOI vehicle services and renewals"
            features={[
              "Vehicle registration renewal",
              "Traffic fine payments",
              "Vehicle ownership transfer",
              "Vehicle inspection services",
            ]}
          />
          <ServiceCard
            icon={<CreditCard className="text-accent" />}
            title="Driving License Services"
            description="Driving license application and renewal"
            features={[
              "New driving license application",
              "License renewal",
              "International driving permit",
              "License replacement",
            ]}
          />
          <ServiceCard
            icon={<Home className="text-accent" />}
            title="Tenancy Contract Services"
            description="Tenancy contract registration and typing"
            features={[
              "Tenancy contract typing",
              "Ejari registration",
              "Contract renewal",
              "Tenancy dispute assistance",
            ]}
          />
        </div>
      </div>

      <div className="mt-16">
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

function ServiceCard({ icon, title, description, features }) {
  return (
    <Card className="h-full border-gray-200">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-primary">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-accent"></div>
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white" asChild>
          <Link href="/register">Apply Now</Link>
        </Button>
      </CardFooter>
    </Card>
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

