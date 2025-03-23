"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Star, StarHalf, User, ThumbsUp, Building } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReviewsPage() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [reviewSubmitted, setReviewSubmitted] = useState(false)

  const handleSubmitReview = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    setReviewSubmitted(true)
    // Reset form
    setRating(0)
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
        <h1 className="text-4xl font-bold text-primary">Client Reviews</h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          See what our clients say about AL MASAA AL BAYDHA's services
        </p>
      </div>

      <div className="mb-12 grid gap-8 md:grid-cols-2">
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-primary">Client Satisfaction</CardTitle>
            <CardDescription>Overall rating based on client feedback</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-4 flex items-center justify-center space-x-1">
              <Star className="h-12 w-12 fill-yellow-400 text-yellow-400" />
              <Star className="h-12 w-12 fill-yellow-400 text-yellow-400" />
              <Star className="h-12 w-12 fill-yellow-400 text-yellow-400" />
              <Star className="h-12 w-12 fill-yellow-400 text-yellow-400" />
              <StarHalf className="h-12 w-12 fill-yellow-400 text-yellow-400" />
            </div>
            <p className="text-3xl font-bold text-primary">4.7 / 5</p>
            <p className="mt-2 text-gray-600">Based on 128 reviews</p>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">98%</p>
                <p className="text-sm text-gray-500">Satisfied Clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-gray-500">Timely Service</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">96%</p>
                <p className="text-sm text-gray-500">Would Recommend</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-primary">Share Your Experience</CardTitle>
            <CardDescription>We value your feedback</CardDescription>
          </CardHeader>
          <CardContent>
            {reviewSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="mb-4 rounded-full bg-green-100 p-3">
                  <ThumbsUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Thank You for Your Feedback!</h3>
                <p className="mt-2 text-gray-600">
                  Your review has been submitted successfully and will help other clients.
                </p>
                <Button className="mt-6 bg-primary hover:bg-primary/90" onClick={() => setReviewSubmitted(false)}>
                  Write Another Review
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="space-y-2">
                  <Label>Your Rating</Label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`h-8 w-8 ${
                            (hoverRating || rating) >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Used</Label>
                  <Input id="service" placeholder="Which service did you use?" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="review">Your Review</Label>
                  <Textarea
                    id="review"
                    placeholder="Share your experience with our services"
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Submit Review
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <Tabs defaultValue="all">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-primary">Client Testimonials</h2>
            <TabsList>
              <TabsTrigger value="all">All Reviews</TabsTrigger>
              <TabsTrigger value="business">Business Services</TabsTrigger>
              <TabsTrigger value="visa">Visa Services</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Mohammed Al Hashimi"
                service="Business Setup"
                rating={5}
                date="March 15, 2025"
                review="AL MASAA AL BAYDHA made setting up my business in Sharjah incredibly easy. Their team handled all the paperwork and government procedures efficiently. Highly recommended!"
              />
              <TestimonialCard
                name="Sarah Johnson"
                service="Visa Processing"
                rating={5}
                date="March 10, 2025"
                review="I was impressed with how quickly they processed my family's residence visas. The team was professional and kept me updated throughout the process. Great service!"
              />
              <TestimonialCard
                name="Rajesh Patel"
                service="Trade License Renewal"
                rating={4}
                date="February 28, 2025"
                review="Very efficient service for my trade license renewal. The process was smooth and they handled everything professionally. Will use their services again."
              />
              <TestimonialCard
                name="Fatima Al Zaabi"
                service="Emirates ID Services"
                rating={5}
                date="February 20, 2025"
                review="The team at AL MASAA AL BAYDHA was extremely helpful with my Emirates ID application. They guided me through the entire process and made it stress-free."
              />
              <TestimonialCard
                name="John Williams"
                service="PRO Services"
                rating={4}
                date="February 15, 2025"
                review="Their PRO services saved me so much time dealing with government departments. Professional staff and excellent communication throughout."
              />
              <TestimonialCard
                name="Aisha Rahman"
                service="Document Attestation"
                rating={5}
                date="February 5, 2025"
                review="I needed urgent document attestation and they delivered within the promised timeframe. Very reliable service with excellent customer support."
              />
            </div>
          </TabsContent>

          <TabsContent value="business" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Mohammed Al Hashimi"
                service="Business Setup"
                rating={5}
                date="March 15, 2025"
                review="AL MASAA AL BAYDHA made setting up my business in Sharjah incredibly easy. Their team handled all the paperwork and government procedures efficiently. Highly recommended!"
              />
              <TestimonialCard
                name="Rajesh Patel"
                service="Trade License Renewal"
                rating={4}
                date="February 28, 2025"
                review="Very efficient service for my trade license renewal. The process was smooth and they handled everything professionally. Will use their services again."
              />
              <TestimonialCard
                name="John Williams"
                service="PRO Services"
                rating={4}
                date="February 15, 2025"
                review="Their PRO services saved me so much time dealing with government departments. Professional staff and excellent communication throughout."
              />
            </div>
          </TabsContent>

          <TabsContent value="visa" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                name="Sarah Johnson"
                service="Visa Processing"
                rating={5}
                date="March 10, 2025"
                review="I was impressed with how quickly they processed my family's residence visas. The team was professional and kept me updated throughout the process. Great service!"
              />
              <TestimonialCard
                name="Fatima Al Zaabi"
                service="Emirates ID Services"
                rating={5}
                date="February 20, 2025"
                review="The team at AL MASAA AL BAYDHA was extremely helpful with my Emirates ID application. They guided me through the entire process and made it stress-free."
              />
              <TestimonialCard
                name="Ahmed Khalid"
                service="Family Visa"
                rating={5}
                date="January 25, 2025"
                review="The process of getting visas for my family was made simple by AL MASAA AL BAYDHA. Their attention to detail ensured there were no delays or issues."
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>

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

function TestimonialCard({ name, service, rating, date, review }) {
  return (
    <Card className="border-gray-200">
      <CardContent className="pt-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <User className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-sm text-gray-500">{service}</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">{date}</p>
        </div>

        <div className="mb-4 flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
          ))}
        </div>

        <p className="text-gray-600">{review}</p>
      </CardContent>
    </Card>
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

