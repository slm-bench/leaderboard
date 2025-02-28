"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { Crown } from 'lucide-react';
import MedalTable from './table';
import DataAnalysisSection from './data';
import './styles/index.css';

export default function HomeClient() {
  return (
    <div className="container">
      <div className="background">
        <section className="content-section">
          <div className="header-container">
            <div className="title-container">
              <h1 className="main-title">Small Language Models</h1>
              <div className="crown-container">
                <Crown className="crown-icon" />
              </div>
            </div>
            <div className="subtitle-container">
              <h2 className="subtitle-heading">All we know about</h2>
              <h3 className="subtitle-subheading">Small LLMs</h3>
              <div className="gradient-container">
                <span className="gradient-text">on Edge Devices</span>
              </div>
            </div>
            <p className="description">
              Survey, Measurements, and Insights
            </p>
            <div className="button-container">
              <Button variant="outline" className="action-button">
                <span className="button-icon">📊</span>
                Accuracy
              </Button>
              <Button variant="outline" className="action-button">
                <span className="button-icon">💰</span>
                Cost on Device
              </Button>
              <Button variant="outline" className="action-button">
                <span className="button-icon">📄</span>
                Paper
              </Button>
            </div>
          </div>
        </section>
        <MedalTable />
        <DataAnalysisSection />
      </div>
    </div>
  )
}