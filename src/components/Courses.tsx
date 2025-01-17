import React from 'react';
import { Star, Clock, Users, ArrowRight } from 'lucide-react';

const courses = [
  {
    title: "Data Structures & Algorithms",
    description: "Master DSA concepts and crack top tech interviews",
    rating: 4.8,
    students: "15K+",
    duration: "6-8 months",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80",
    tags: ["C++", "Java", "Python"]
  },
  {
    title: "Full Stack Development",
    description: "Become a MERN stack developer from scratch",
    rating: 4.9,
    students: "10K+",
    duration: "7-9 months",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80",
    tags: ["MERN", "JavaScript", "React"]
  },
  {
    title: "Data Science & ML",
    description: "Complete Data Science & ML bootcamp",
    rating: 4.7,
    students: "8K+",
    duration: "8-10 months",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80",
    tags: ["Python", "ML", "AI"]
  }
];

export default function Courses() {
  return (
    <div className="py-20 bg-[#fef9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Most Popular Courses</h2>
          <p className="mt-4 text-lg text-gray-600">Choose from our industry-ready courses</p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {course.tags.map((tag, i) => (
                    <span key={i} className="bg-white/90 px-2 py-1 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                <p className="mt-2 text-gray-600">{course.description}</p>
                
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                </div>

                <button className="mt-6 w-full bg-[#f78c40] text-white py-3 rounded-md hover:bg-[#e67e3a] flex items-center justify-center">
                  Explore Course <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}