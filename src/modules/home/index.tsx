"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { Crown } from 'lucide-react';
import MedalTable from './table';
import DataAnalysisSection from './data';

export default function HomeClient() {
  return (
    <div style={{
      width: "100%",
      height: "100vh"
    }}>
      <div style={{
        minHeight: "100vh",
        backgroundSize: "20px 20px"
      }}>
        <section style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3rem 1rem"
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1.5rem"
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem"
            }}>
              <h1 style={{
                fontSize: "3.75rem",
                fontWeight: "700",
                color: "#9ca3af",
                opacity: "0.2"
              }}>Small Language Models</h1>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Crown style={{
                  width: "3rem",
                  height: "3rem",
                  color: "#facc15"
                }} />
              </div>
            </div>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}>
              <h2 style={{
                fontSize: "2.25rem",
                fontWeight: "700"
              }}>
                All we know about
              </h2>
              <h3 style={{
                fontSize: "1.875rem",
                fontWeight: "700"
              }}>
                Small LLMs
              </h3>
              <div style={{
                background: "linear-gradient(to right, #bfdbfe, #e9d5ff)",
                padding: "0.5rem 1.5rem",
                borderRadius: "0.5rem"
              }}>
                <span style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#1f2937"
                }}>
                  on Edge Devices
                </span>
              </div>
            </div>
            <p style={{
              fontSize: "1.125rem",
              color: "#4b5563",
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}>
              Survey, Measurements, and Insights
            </p>
            <div style={{
              display: "flex",
              gap: "1rem",
              marginTop: "2rem"
            }}>
              <Button
                variant="outline"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}
              >
                <span style={{
                  width: "1.25rem",
                  height: "1.25rem"
                }}>📊</span>
                Accuracy
              </Button>
              <Button
                variant="outline"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}
              >
                <span style={{
                  width: "1.25rem",
                  height: "1.25rem"
                }}>💰</span>
                Cost on Device
              </Button>
              <Button
                variant="outline"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}
              >
                <span style={{
                  width: "1.25rem",
                  height: "1.25rem"
                }}>📄</span>
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
