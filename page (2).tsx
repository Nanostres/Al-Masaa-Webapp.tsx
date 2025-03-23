"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [serviceType, setServiceType] = useState("trade-license")

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep(4) // Success state
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold text-primary">Service Application</h1>
        <p className="mb-8 text-gray-600">Complete the form below to apply for our services</p>

        {step < 4 ? (
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <StepIndicator step={1} currentStep={step} label="Service Selection" />
              <StepDivider active={step >= 2} />
              <StepIndicator step={2} currentStep={step} label="Personal Details" />
              <StepDivider active={step >= 3} />
              <StepIndicator step={3} currentStep={step} label="Document Upload" />
            </div>
          </div>
        ) : null}

        <Card className="w-full">
          {step === 1 && (
            <>
              <CardHeader>
                <CardTitle className="text-primary">Select Service Type</CardTitle>
                <CardDescription>Choose the type of service you need</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="business" onValueChange={(value) => console.log(value)}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="business">Business Services</TabsTrigger>
                    <TabsTrigger value="personal">Personal Services</TabsTrigger>
                  </TabsList>
                  <TabsContent value="business" className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <RadioGroup defaultValue="trade-license" onValueChange={setServiceType}>
                        <div className="flex items-start space-x-3 rounded-md border p-4">
                          <RadioGroupItem value="trade-license" id="trade-license" />
                          <div className="flex-1">
                            <Label htmlFor="trade-license" className="text-base font-medium">
                              Trade License Services
                            </Label>
                            <p className="text-sm text-gray-500">New license issuance or renewal of existing license</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 rounded-md border p-4">
                          <RadioGroupItem value="business-setup" id="business-setup" />
                          <div className="flex-1">
                            <Label htmlFor="business-setup" className="text-base font-medium">
                              Business Setup
                            </Label>
                            <p className="text-sm text-gray-500">Complete business setup services in UAE</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 rounded-md border p-4">
                          <RadioGroupItem value="pro-services" id="pro-services" />
                          <div className="flex-1">
                            <Label htmlFor="pro-services" className="text-base font-medium">
                              PRO Services
                            </Label>
                            <p className="text-sm text-gray-500">Government transactions and document processing</p>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                  </TabsContent>
                  <TabsContent value="personal" className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <RadioGroup defaultValue="visa-services" onValueChange={setServiceType}>
                        <div className="flex items-start space-x-3 rounded-md border p-4">
                          <RadioGroupItem value="visa-services" id="visa-services" />
                          <div className="flex-1">
                            <Label htmlFor="visa-services" className="text-base font-medium">
                              Visa & Residence Services
                            </Label>
                            <p className="text-sm text-gray-500">New visa, renewal, or visa cancellation</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 rounded-md border p-4">
                          <RadioGroupItem value="family-visa" id="family-visa" />
                          <div className="flex-1">
                            <Label htmlFor="family-visa" className="text-base font-medium">
                              Family Visa Services
                            </Label>
                            <p className="text-sm text-gray-500">Visa services for family members</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 rounded-md border p-4">
                          <RadioGroupItem value="emirates-id" id="emirates-id" />
                          <div className="flex-1">
                            <Label htmlFor="emirates-id" className="text-base font-medium">
                              Emirates ID & Medical Services
                            </Label>
                            <p className="text-sm text-gray-500">
                              Emirates ID application, renewal, and medical services
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 rounded-md border p-4">
                          <RadioGroupItem value="driving-license" id="driving-license" />
                          <div className="flex-1">
                            <Label htmlFor="driving-license" className="text-base font-medium">
                              Driving License Services
                            </Label>
                            <p className="text-sm text-gray-500">New driving license application or renewal</p>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                  </TabsContent>
                </Tabs>

                {serviceType === "trade-license" && (
                  <div className="mt-6 space-y-4">
                    <h3 className="text-lg font-medium text-primary">Trade License Details</h3>
                    <div className="space-y-2">
                      <Label htmlFor="license-type">License Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select license type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New License</SelectItem>
                          <SelectItem value="renewal">License Renewal</SelectItem>
                          <SelectItem value="amendment">License Amendment</SelectItem>
                          <SelectItem value="cancellation">License Cancellation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business-activity">Business Activity</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select business activity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="industrial">Industrial</SelectItem>
                          <SelectItem value="tourism">Tourism</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {serviceType === "visa-services" && (
                  <div className="mt-6 space-y-4">
                    <h3 className="text-lg font-medium text-primary">Visa Details</h3>
                    <div className="space-y-2">
                      <Label htmlFor="visa-type">Visa Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select visa type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="employment">Employment Visa</SelectItem>
                          <SelectItem value="visit">Visit Visa</SelectItem>
                          <SelectItem value="tourist">Tourist Visa</SelectItem>
                          <SelectItem value="residence">Residence Visa</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="visa-duration">Visa Duration</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select visa duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 Days</SelectItem>
                          <SelectItem value="60">60 Days</SelectItem>
                          <SelectItem value="90">90 Days</SelectItem>
                          <SelectItem value="180">6 Months</SelectItem>
                          <SelectItem value="365">1 Year</SelectItem>
                          <SelectItem value="730">2 Years</SelectItem>
                          <SelectItem value="1095">3 Years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleNextStep} className="bg-primary hover:bg-primary/90">
                  Continue
                </Button>
              </CardFooter>
            </>
          )}

          {step === 2 && (
            <>
              <CardHeader>
                <CardTitle className="text-primary">Personal Details</CardTitle>
                <CardDescription>Enter your personal or business information</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nationality">Nationality</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uae">United Arab Emirates</SelectItem>
                        <SelectItem value="india">India</SelectItem>
                        <SelectItem value="pakistan">Pakistan</SelectItem>
                        <SelectItem value="philippines">Philippines</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        {/* Add more countries as needed */}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>

                  {(serviceType === "trade-license" || serviceType === "business-setup") && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="company-name">Company Name</Label>
                        <Input id="company-name" placeholder="Enter company name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-address">Company Address</Label>
                        <Textarea id="company-address" placeholder="Enter company address" />
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="additional-info">Additional Information</Label>
                    <Textarea
                      id="additional-info"
                      placeholder="Please provide any additional information relevant to your application"
                      className="min-h-[100px]"
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePrevStep} className="border-primary text-primary">
                  Back
                </Button>
                <Button onClick={handleNextStep} className="bg-primary hover:bg-primary/90">
                  Continue
                </Button>
              </CardFooter>
            </>
          )}

          {step === 3 && (
            <>
              <CardHeader>
                <CardTitle className="text-primary">Document Upload</CardTitle>
                <CardDescription>Upload the required documents for your application</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="id-proof">ID Proof (Passport/Emirates ID)</Label>
                    <div className="rounded-md border border-dashed p-8 text-center">
                      <div className="mx-auto w-full max-w-sm">
                        <p className="text-sm text-gray-500">
                          Drag and drop your ID proof here or click to browse files
                        </p>
                        <Input id="id-proof" type="file" className="mt-4" />
                      </div>
                    </div>
                  </div>

                  {(serviceType === "trade-license" || serviceType === "business-setup") && (
                    <div className="space-y-2">
                      <Label htmlFor="trade-license-doc">Existing Trade License (if applicable)</Label>
                      <div className="rounded-md border border-dashed p-8 text-center">
                        <div className="mx-auto w-full max-w-sm">
                          <p className="text-sm text-gray-500">
                            Drag and drop your trade license here or click to browse files
                          </p>
                          <Input id="trade-license-doc" type="file" className="mt-4" />
                        </div>
                      </div>
                    </div>
                  )}

                  {(serviceType === "visa-services" || serviceType === "family-visa") && (
                    <div className="space-y-2">
                      <Label htmlFor="passport-copy">Passport Copy</Label>
                      <div className="rounded-md border border-dashed p-8 text-center">
                        <div className="mx-auto w-full max-w-sm">
                          <p className="text-sm text-gray-500">
                            Drag and drop your passport copy here or click to browse files
                          </p>
                          <Input id="passport-copy" type="file" className="mt-4" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="additional-docs">Additional Documents (if required)</Label>
                    <div className="rounded-md border border-dashed p-8 text-center">
                      <div className="mx-auto w-full max-w-sm">
                        <p className="text-sm text-gray-500">
                          Drag and drop any additional documents here or click to browse files
                        </p>
                        <Input id="additional-docs" type="file" multiple className="mt-4" />
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePrevStep} className="border-primary text-primary">
                  Back
                </Button>
                <Button onClick={handleSubmit} className="bg-primary hover:bg-primary/90">
                  Submit Application
                </Button>
              </CardFooter>
            </>
          )}

          {step === 4 && (
            <>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-primary">Application Submitted!</CardTitle>
                <CardDescription>Your application has been submitted successfully</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6 rounded-lg bg-secondary p-6">
                  <p className="mb-2 text-sm text-gray-500">Application Reference Number</p>
                  <p className="text-xl font-semibold text-primary">
                    AMB-{Math.floor(100000 + Math.random() * 900000)}
                  </p>
                </div>
                <p className="text-gray-600">
                  We have sent a confirmation email with your application details. You can check your application status
                  anytime using your reference number.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Button variant="outline" className="border-primary text-primary" asChild>
                  <Link href="/status">Check Status</Link>
                </Button>
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/">Return to Home</Link>
                </Button>
              </CardFooter>
            </>
          )}
        </Card>
      </div>
    </div>
  )
}

function StepIndicator({ step, currentStep, label }) {
  const isActive = currentStep >= step

  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
          isActive ? "border-primary bg-primary text-primary-foreground" : "border-gray-300 text-gray-400"
        }`}
      >
        {step}
      </div>
      <span className={`mt-2 text-sm ${isActive ? "font-medium text-primary" : "text-gray-500"}`}>{label}</span>
    </div>
  )
}

function StepDivider({ active }) {
  return (
    <div className="flex-1">
      <div className={`h-1 w-full rounded ${active ? "bg-primary" : "bg-gray-200"}`}></div>
    </div>
  )
}

