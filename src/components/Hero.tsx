import React from 'react';
import { ArrowRight, Users, Trophy, Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-16 bg-gradient-to-br from-[#fef9f5] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-sm mb-6">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-2 text-sm font-medium">4.9/5 Rating on Google</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Be a coding ninja with
              <span className="text-[#f78c40]"> India's best coding courses</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Learn from expert mentors, gain hands-on experience, and join a community of 50,000+ 
              students to kickstart your coding career.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-[#f78c40] text-white px-8 py-3 rounded-md hover:bg-[#e67e3a] flex items-center">
                Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-[#f78c40] text-[#f78c40] px-8 py-3 rounded-md hover:bg-[#fff8f3]">
                Try Free Demo
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <p className="font-bold text-2xl text-[#f78c40]">50K+</p>
                <p className="text-gray-600">Students Enrolled</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-2xl text-[#f78c40]">1000+</p>
                <p className="text-gray-600">Placement Partners</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-2xl text-[#f78c40]">₹12 LPA</p>
                <p className="text-gray-600">Average CTC</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Coding professional"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  {[1,2,3].map((i) => (
                    <img
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src={`https://i.pravatar.cc/150?img=${i}`}
                      alt={`Student ${i}`}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium">Next batch starting soon!</p>
                  <p className="text-xs text-gray-500">Join 500+ students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}