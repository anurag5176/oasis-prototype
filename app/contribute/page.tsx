"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, CreditCard, Smartphone, Globe, Users, Target, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimationWrapper } from "@/app/components/animation-wrapper"

export default function ContributePage() {
  return (
    <AnimationWrapper>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden -mt-16 pt-16">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="object-cover w-full h-full"
            poster="/images/video-poster.jpg"
          >
            <source src="/desert.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg fade-in-up">
            Fuel a Circle Today
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed drop-shadow-md fade-in-up">
            Your support helps us create meaningful connections and build stronger communities through spaces of refuge and renewal
          </p>
          <Button asChild size="lg" className="bg-[#1A4E8A] hover:bg-[#1A4E8A]/90 text-white shadow-xl text-lg px-6 py-4">
            <Link href="#donate">
              Donate Now <Heart className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Your Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your contribution directly supports community connection and building stronger communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-gray-200 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900">$25</CardTitle>
                <CardDescription className="text-gray-600">
                  Supports one individual's participation in monthly community circles
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-[#1A4E8A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-[#1A4E8A]" />
                </div>
                <CardTitle className="text-gray-900">$75</CardTitle>
                <CardDescription className="text-gray-600">
                  Funds a complete community workshop for 20 participants
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-[#4DA6A6]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#4DA6A6]" />
                </div>
                <CardTitle className="text-gray-900">$150</CardTitle>
                <CardDescription className="text-gray-600">
                  Launches a new community circle with training and resources for lasting impact
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section id="donate" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Choose Your Way to Give</h2>
            <p className="text-xl text-gray-600">Multiple convenient options to support our mission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* PayPal */}
            <Card className="border-gray-200 hover:shadow-lg transition-shadow text-center">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1A4E8A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-[#1A4E8A]" />
                </div>
                <CardTitle className="text-gray-900">PayPal</CardTitle>
                <CardDescription className="text-gray-600">
                  Secure online donations with credit card or PayPal account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <div className="flex gap-2 justify-center">
                  <Button variant="outline" className="border-[#1A4E8A] text-[#1A4E8A] hover:bg-[#1A4E8A]/10 bg-transparent">
                    $25
                  </Button>
                  <Button variant="outline" className="border-[#1A4E8A] text-[#1A4E8A] hover:bg-[#1A4E8A]/10 bg-transparent">
                    $50
                  </Button>
                  <Button variant="outline" className="border-[#1A4E8A] text-[#1A4E8A] hover:bg-[#1A4E8A]/10 bg-transparent">
                    $75
                  </Button>
                  <Button variant="outline" className="border-[#1A4E8A] text-[#1A4E8A] hover:bg-[#1A4E8A]/10 bg-transparent">
                    $100
                  </Button>
                </div>
                <Button className="w-full bg-[#1A4E8A] hover:bg-[#1A4E8A]/90 text-white">Donate with PayPal</Button>
                <p className="text-xs text-gray-500 text-center">Secure payment processing • Tax-deductible</p>
              </CardContent>
            </Card>

            {/* M-Pesa */}
            <Card className="border-gray-200 hover:shadow-lg transition-shadow text-center">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#1A4E8A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-[#1A4E8A]" />
                </div>
                <CardTitle className="text-gray-900">M-Pesa</CardTitle>
                <CardDescription className="text-gray-600">
                  Mobile money transfer for supporters in Kenya and East Africa
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <div className="bg-[#1A4E8A]/10 p-4 rounded-lg text-center">
                  <p className="text-sm text-[#1A4E8A] font-medium mb-2">Send to:</p>
                  <p className="text-lg font-bold text-[#1A4E8A]">Paybill: 247247</p>
                  <p className="text-sm text-[#1A4E8A]">Account: OASIS2024</p>
                </div>
                <Button className="w-full bg-[#1A4E8A] hover:bg-[#1A4E8A]/90 text-white">Send via M-Pesa</Button>
                <p className="text-xs text-gray-500 text-center">
                  Available in Kenya, Tanzania, Uganda • Instant transfer
                </p>
              </CardContent>
            </Card>

            {/* GoFundMe */}
            <Card className="border-gray-200 hover:shadow-lg transition-shadow text-center">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#4DA6A6]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-[#4DA6A6]" />
                </div>
                <CardTitle className="text-gray-900">GoFundMe</CardTitle>
                <CardDescription className="text-gray-600">
                  Join our community fundraising campaign and share with friends
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <div className="bg-[#4DA6A6]/10 p-4 rounded-lg text-center">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#4DA6A6]">Goal Progress</span>
                    <span className="text-sm font-medium text-[#4DA6A6]">68%</span>
                  </div>
                  <div className="w-full bg-[#4DA6A6]/20 rounded-full h-2">
                    <div className="bg-[#4DA6A6] h-2 rounded-full" style={{ width: "68%" }}></div>
                  </div>
                  <p className="text-xs text-[#4DA6A6] mt-2">$34,000 raised of $50,000 goal</p>
                </div>
                <Button className="w-full bg-[#4DA6A6] hover:bg-[#4DA6A6]/90 text-white">Donate on GoFundMe</Button>
                <p className="text-xs text-gray-500 text-center">Social sharing • Community updates • Global reach</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Other Ways to Help</h2>
            <p className="text-xl text-gray-600">
              Your time and skills are just as valuable as financial contributions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-gray-200 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-[#1A4E8A]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-[#1A4E8A]" />
                </div>
                <CardTitle className="text-gray-900">Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Help facilitate community circles, assist with events, or provide transportation for community members.
                </CardDescription>
                <Button variant="outline" className="border-[#1A4E8A] text-[#1A4E8A] hover:bg-[#1A4E8A]/10 bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-[#1A4E8A]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-[#1A4E8A]" />
                </div>
                <CardTitle className="text-gray-900">Spread the Word</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Share our mission on social media, tell friends and family, or write about us in your community.
                </CardDescription>
                <Button
                  variant="outline"
                  className="border-[#1A4E8A] text-[#1A4E8A] hover:bg-[#1A4E8A]/10 bg-transparent"
                >
                  Share Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-[#4DA6A6]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-[#4DA6A6]" />
                </div>
                <CardTitle className="text-gray-900">Corporate Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Partner with us for employee volunteer programs or sponsor community events.
                </CardDescription>
                <Button variant="outline" className="border-[#4DA6A6] text-[#4DA6A6] hover:bg-[#4DA6A6]/10 bg-transparent">
                  Contact Us
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-[#1A4E8A]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-[#1A4E8A]" />
                </div>
                <CardTitle className="text-gray-900">Professional Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Donate your expertise in marketing, design, legal, or other professional services.
                </CardDescription>
                <Button
                  variant="outline"
                  className="border-[#1A4E8A] text-[#1A4E8A] hover:bg-[#1A4E8A]/10 bg-transparent"
                >
                  Offer Skills
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Financial Transparency</h2>
            <p className="text-xl text-gray-600">
              We believe in complete transparency about how your donations are used
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-gray-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">How We Use Your Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Expenses (75%)</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Community facilitator training</li>
                      <li>• Event materials and venues</li>
                      <li>• Transportation assistance for seniors</li>
                      <li>• Technology and communication tools</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Operations (25%)</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Staff salaries and benefits</li>
                      <li>• Office rent and utilities</li>
                      <li>• Insurance and legal compliance</li>
                      <li>• Fundraising and marketing</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600">
                    <strong>Tax ID:</strong> 12-3456789 •<strong> Charity Navigator Rating:</strong> 4 Stars •
                    <strong> Annual Reports:</strong> Available upon request
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#1A4E8A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Every Contribution Matters</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether it's $5 or $500, your support helps us create meaningful connections that last a lifetime.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-[#1A4E8A] hover:bg-white/90 shadow-xl text-lg px-6 py-4 font-semibold"
          >
            <Link href="#donate">Make Your Donation Today</Link>
          </Button>
        </div>
      </section>
      </div>
    </AnimationWrapper>
  )
}
