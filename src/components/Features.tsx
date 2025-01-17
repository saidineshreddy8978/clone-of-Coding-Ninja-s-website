import React from 'react';
import { BookOpen, Users, Award, Code, Video, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description: "Well-designed courses with practical projects"
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Learn from industry professionals"
  },
  {
    icon: Award,
    title: "Certification",
    description: "Get certified upon course completion"
  },
  {
    icon: Code,
    title: "Hands-on Coding",
    description: "Practice with real-world projects"
  },
  {
    icon: Video,
    title: "Live Classes",
    description: "Interactive sessions with instructors"
  },
  {
    icon: MessageSquare,
    title: "Doubt Resolution",
    description: "24/7 doubt support from teaching assistants"
  }
];

export default function Features() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Coding Ninjas?</h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide the best learning experience with our unique features
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="relative p-8 bg-white rounded-xl border hover:shadow-lg transition-shadow">
                <div className="inline-block p-3 bg-orange-100 rounded-lg">
                  <Icon className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}