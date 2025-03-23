"use client"

import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Clock, Building } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Get in touch with AL MASAA AL BAYDHA for all your PRO service needs in the UAE
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border-gray-200">
          <CardHeader>
            <div className="mb-2 text-primary">
              <MapPin className="h-8 w-8" />
            </div>
            <CardTitle className="text-primary">Our Location</CardTitle>
            <CardDescription>Visit our office</CardDescription>
          </CardHeader>
          <CardContent>
            <address className="not-italic text-gray-600">
              <p className="font-medium">AL MASAA AL BAYDHA</p>
              <p>Industrial Area 10</p>
              <p>Sharjah, United Arab Emirates</p>
              <p>P.O. Box 29884</p>
            </address>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full border-primary text-primary"
              onClick={() => window.open("https://maps.app.goo.gl/search?q=Industrial+Area+10+Sharjah+UAE", "_blank")}
            >
              View on Map
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-gray-200">
          <CardHeader>
            <div className="mb-2 text-primary">
              <Phone className="h-8 w-8" />
            </div>
            <CardTitle className="text-primary">Contact Numbers</CardTitle>
            <CardDescription>Call or WhatsApp us</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Mobile</p>
              <p className="font-medium">+971 55 630 5330</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Telephone</p>
              <p className="font-medium">06 534 1118</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full border-primary text-primary"
              onClick={() => window.open("tel:+971556305330")}
            >
              Call Now
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-gray-200">
          <CardHeader>
            <div className="mb-2 text-primary">
              <Mail className="h-8 w-8" />
            </div>
            <CardTitle className="text-primary">Email</CardTitle>
            <CardDescription>Send us an email</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-medium">almasaatyping@gmail.com</p>
            <p className="mt-2 text-sm text-gray-500">We'll respond to your inquiry as soon as possible</p>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full border-primary text-primary"
              onClick={() => window.open("mailto:almasaatyping@gmail.com")}
            >
              Email Us
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12">
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-primary">Send Us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Enter message subject" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message here" className="min-h-[150px]" />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 mb-12">
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

      <div className="mt-12">
        <Card className="border-gray-200">
          <CardHeader>
            <div className="mb-2 text-primary">
              <Clock className="h-8 w-8" />
            </div>
            <CardTitle className="text-primary">Business Hours</CardTitle>
            <CardDescription>When you can visit our office</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Monday - Thursday</p>
                  <p className="text-gray-500">9:30 AM - 2:00 PM</p>
                  <p className="text-gray-500">5:30 PM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Friday</p>
                  <p className="text-gray-500">9:00 AM - 12:00 PM</p>
                  <p className="text-gray-500">5:30 PM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Saturday</p>
                  <p className="text-gray-500">9:30 AM - 2:00 PM</p>
                  <p className="text-gray-500">5:30 PM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Sunday</p>
                  <p className="text-gray-500">Closed</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
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

