"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { Crown } from 'lucide-react';
import AccuracyTable from './table';
import DataAnalysisSection from './data';

export default function HomeClient() {
  return (
    <div className="w-full h-screen">
      <div className="min-h-screen bg-dot-pattern">
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative flex justify-center items-center gap-4">
              <h1 className="text-6xl font-bold text-gray-400 opacity-20">Small Language Models</h1>
              <div className="flex items-center justify-center">
                <Crown className="w-12 h-12 text-yellow-400" />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">
                All we know about
              </h2>
              <h3 className="text-3xl font-bold">
                Small LLMs
              </h3>
              <div className="bg-gradient-to-r from-blue-200 to-purple-200 px-6 py-2 rounded-lg">
                <span className="text-2xl font-bold text-gray-800">
                  on Edge Devices
                </span>
              </div>
            </div>
            <p className="text-lg text-gray-600 uppercase tracking-wider">
              Survey, Measurements, and Insights
            </p>
            <div className="flex gap-4 mt-8">
              <Button variant="outline" className="flex items-center gap-2">
                <span className="w-5 h-5">📊</span>
                Accuracy
              </Button>
              <Button variant="default" className="flex items-center gap-2">
                <span className="w-5 h-5">💰</span>
                Cost on Device
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <span className="w-5 h-5">📄</span>
                Paper
              </Button>
            </div>
          </div>
        </section>
        <AccuracyTable />
        <DataAnalysisSection />
      </div>
    </div>
  )
}
