"use client"

import Image from "next/image"
import { Users, Heart, Target, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimationWrapper } from "@/app/components/animation-wrapper"

export default function AboutPage() {
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
            Our Story & Vision
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 leading-relaxed drop-shadow-md fade-in-up">
            Dedicated to strengthening communities by fostering connection, resilience, and shared growth
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Oasis & Mirage is dedicated to strengthening communities by fostering connection, resilience, and shared growth. We create spaces of refuge and renewal where individuals come together to support one another, access resources, and transform challenges into opportunities.
                </p>
                <p>
                  Founded in 2020, we started as a grassroots initiative to build stronger, more connected communities. What began as small community gatherings has grown into a movement that spans 25 communities and has touched the lives of countless individuals seeking connection and support.
                </p>
                <p>
                  Our name reflects our mission: like an oasis, we provide nourishment and belonging; like a mirage, we challenge illusions and inspire vision, guiding communities toward unity, clarity, and lasting well-being.
                </p>
              </div>
            </div>
            <div className="relative fade-in-right">
              <Image
                src="/images/wisdom-circle.png"
                alt="Wisdom circle in action"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6 fade-in-up">Our Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-in-up">
              We envision communities where individuals come together to support one another, access resources, and transform challenges into opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-container">
            <Card className="border-gray-200 text-center stagger-item card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900">Community Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Creating spaces of refuge and renewal where individuals come together to support one another.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center stagger-item card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-gray-900">Resilience Building</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Strengthening communities through collective wisdom and mutual support.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center stagger-item card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-gray-900">Shared Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Helping individuals access resources and transform challenges into opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center stagger-item card-hover">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-gray-900">Vision & Clarity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Challenging illusions and inspiring vision, guiding communities toward unity and lasting well-being.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6 fade-in-up">Our Leadership</h2>
            <p className="text-xl text-gray-600 fade-in-up">Guided by diverse voices and united by a common vision</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-container">
            <Card className="border-gray-200 text-center stagger-item card-hover">
              <CardHeader>
                <div className="w-24 h-24 bg-[#1A4E8A] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">SC</span>
                </div>
                <CardTitle className="text-gray-900">Sarah Chen</CardTitle>
                <CardDescription className="text-blue-600 font-medium">Founder & Executive Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Former social worker with 15 years of experience in community organizing and intergenerational
                  programming.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center stagger-item card-hover">
              <CardHeader>
                <div className="w-24 h-24 bg-[#4DA6A6] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">MR</span>
                </div>
                <CardTitle className="text-gray-900">Marcus Rodriguez</CardTitle>
                <CardDescription className="text-emerald-600 font-medium">Program Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Community advocate and educator specializing in culturally responsive programming and volunteer
                  coordination.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 text-center stagger-item card-hover">
              <CardHeader>
                <div className="w-24 h-24 bg-[#1A4E8A] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">EJ</span>
                </div>
                <CardTitle className="text-gray-900">Eleanor Johnson</CardTitle>
                <CardDescription className="text-amber-600 font-medium">Senior Advisor</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Retired teacher and community leader with 40 years of experience in education and senior advocacy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </div>
    </AnimationWrapper>
  )
}
