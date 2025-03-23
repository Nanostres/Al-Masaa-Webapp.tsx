"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Clock, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StatusPage() {
  const [searchId, setSearchId] = useState("")
  const [searchResult, setSearchResult] = useState(null)
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchId) return

    setIsSearching(true)

    // Simulate API call
    setTimeout(() => {
      if (searchId.startsWith("AMB-")) {
        setSearchResult({
          id: searchId,
          type: "Trade License Renewal",
          status: "In Progress",
          submittedDate: "2025-03-15",
          estimatedCompletion: "2025-03-29",
          steps: [
            { name: "Application Received", status: "completed", date: "March 15, 2025" },
            { name: "Document Verification", status: "in-progress", date: "March 22, 2025" },
            { name: "Government Submission", status: "pending", date: "" },
            { name: "License Issuance", status: "pending", date: "" },
          ],
        })
      } else {
        setSearchResult(null)
      }
      setIsSearching(false)
    }, 1000)
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
        <h1 className="mb-2 text-3xl font-bold text-primary">Check Application Status</h1>
        <p className="mb-8 text-gray-600">Track the status of your service application</p>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Application Status Tracker</CardTitle>
            <CardDescription>Enter your application reference number to check the current status</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="id">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="id">By Reference Number</TabsTrigger>
                <TabsTrigger value="details">By Personal Details</TabsTrigger>
              </TabsList>
              <TabsContent value="id" className="mt-6">
                <form onSubmit={handleSearch} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reference-id">Reference Number</Label>
                    <div className="flex gap-2">
                      <Input
                        id="reference-id"
                        placeholder="e.g. AMB-123456"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                      />
                      <Button type="submit" disabled={isSearching} className="bg-primary hover:bg-primary/90">
                        {isSearching ? "Searching..." : "Search"}
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">
                      Your reference number was provided at the time of application submission
                    </p>
                  </div>
                </form>
              </TabsContent>
              <TabsContent value="details" className="mt-6">
                <form className="space-y-4">
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
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  <Button type="submit" className="bg-primary hover:bg-primary/90">
                    Search
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            {searchResult && (
              <div className="mt-8 space-y-6">
                <div className="rounded-lg border bg-card p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-primary">{searchResult.type}</h3>
                      <p className="text-sm text-gray-500">Reference Number: {searchResult.id}</p>
                    </div>
                    <StatusBadge status={searchResult.status} />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-sm text-gray-500">Submitted Date</p>
                      <p className="font-medium">{searchResult.submittedDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Estimated Completion</p>
                      <p className="font-medium">{searchResult.estimatedCompletion}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-semibold text-primary">Application Progress</h3>
                  <div className="space-y-4">
                    {searchResult.steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div
                          className={`mt-0.5 rounded-full p-1 ${
                            step.status === "completed"
                              ? "bg-green-100 text-green-600"
                              : step.status === "in-progress"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {step.status === "completed" ? (
                            <CheckCircle2 className="h-5 w-5" />
                          ) : step.status === "in-progress" ? (
                            <Clock className="h-5 w-5" />
                          ) : (
                            <FileText className="h-5 w-5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{step.name}</p>
                            {step.date && <p className="text-sm text-gray-500">{step.date}</p>}
                          </div>
                          {step.status === "in-progress" && (
                            <p className="mt-1 text-sm text-gray-500">
                              Your documents are currently being verified by our team.
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {searchId && !searchResult && !isSearching && (
              <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-center">
                <p className="text-red-600">No application found with reference number: {searchId}</p>
                <p className="mt-2 text-sm text-gray-500">
                  Please check the reference number and try again or contact support for assistance.
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2">
            <p className="text-sm text-gray-500">
              Need help? Contact our support team at almasaatyping@gmail.com or call +971 55 630 5330.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function StatusBadge({ status }) {
  let bgColor = "bg-gray-100"
  let textColor = "text-gray-600"
  let icon = null

  if (status === "Completed") {
    bgColor = "bg-green-100"
    textColor = "text-green-700"
    icon = <CheckCircle2 className="mr-1 h-4 w-4" />
  } else if (status === "In Progress") {
    bgColor = "bg-blue-100"
    textColor = "text-blue-700"
    icon = <Clock className="mr-1 h-4 w-4" />
  } else if (status === "Rejected") {
    bgColor = "bg-red-100"
    textColor = "text-red-700"
  }

  return (
    <div className={`flex items-center rounded-full px-3 py-1 text-sm font-medium ${bgColor} ${textColor}`}>
      {icon}
      {status}
    </div>
  )
}

