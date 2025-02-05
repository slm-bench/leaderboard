import React from 'react';
import { TrendingUp } from 'lucide-react';

const DataAnalysisSection = () => {
    return (
        <section style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem 1rem"
        }}>
            {/* Header */}
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "2rem"
            }}>
                <TrendingUp style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    color: "#ef4444"
                }} />
                <h2 style={{
                    fontSize: "1.25rem",
                    fontWeight: "700"
                }}>Data Analysis</h2>
            </div>

            {/* Grid Layout */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2rem",
            }}>
                {/* Left Column */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem"
                }}>
                    {/* Overview Section */}
                    <div style={{
                        backgroundColor: "white",
                        borderRadius: "0.5rem",
                        padding: "1.5rem",
                        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                        border: "1px solid #f3f4f6"
                    }}>
                        <h3 style={{
                            fontSize: "1.125rem",
                            fontWeight: "700",
                            marginBottom: "1rem"
                        }}>Overview of SLMs</h3>
                        <p style={{
                            color: "#4b5563",
                            marginBottom: "1.5rem"
                        }}>
                            SLMs have gained increasing attention from both the research and industrial communities.
                        </p>
                        <div style={{ position: "relative" }}>
                            {/* Timeline Component */}
                            <div style={{
                                width: "100%",
                                height: "200px",
                                backgroundColor: "#f9fafb",
                                borderRadius: "0.5rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <img
                                    src="/api/placeholder/800/200"
                                    alt="Timeline of SLM Development"
                                    style={{
                                        objectFit: "contain",
                                        width: "100%",
                                        height: "100%"
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Capabilities Section */}
                    <div style={{
                        backgroundColor: "white",
                        borderRadius: "0.5rem",
                        padding: "1.5rem",
                        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                        border: "1px solid #f3f4f6"
                    }}>
                        <h3 style={{
                            fontSize: "1.125rem",
                            fontWeight: "700",
                            marginBottom: "1rem"
                        }}>Capabilities of SLM</h3>
                        <p style={{
                            color: "#4b5563",
                            marginBottom: "1.5rem"
                        }}>
                            The charts show substantial performance improvements across all tasks between 2022 and 2024. Specifically, model performance improved by 10.4%, 13.5%, and 13.5% for the three tasks, respectively.
                        </p>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem"
                        }}>
                            {/* Legend Grid */}
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "0.5rem",
                                fontSize: "0.75rem"
                            }}>
                                {[
                                    'EleutherAI', 'Microsoft', 'TinyLlama', 'H2O', 'HuggingFace',
                                    'China Telecom', 'StabilityAI', 'Google', 'Apple', 'Toyota'
                                ].map((company, index) => (
                                    <div key={index} style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.25rem"
                                    }}>
                                        <div style={{
                                            width: "0.75rem",
                                            height: "0.75rem",
                                            borderRadius: "9999px",
                                            backgroundColor: `#${(index + 3) * 111}ff`
                                        }}></div>
                                        <span>{company}</span>
                                    </div>
                                ))}
                            </div>
                            {/* Performance Charts */}
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem"
                            }}>
                                <img
                                    src="/api/placeholder/800/200"
                                    alt="Performance Charts"
                                    style={{
                                        width: "100%",
                                        borderRadius: "0.5rem"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div style={{
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    padding: "1.5rem",
                    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                    border: "1px solid #f3f4f6"
                }}>
                    <h3 style={{
                        fontSize: "1.125rem",
                        fontWeight: "700",
                        marginBottom: "1rem"
                    }}>Runtime Cost of SLM</h3>
                    <p style={{
                        color: "#4b5563",
                        marginBottom: "1.5rem"
                    }}>
                        The inference latency and memory usage within each size group (0.1-1B, 1-2B, and 2-3B) is relatively similar and aligns with the latency increase as the model size grows. For models of similar size from different architectures, the first token time during the prefill stage vary significantly. However, the model latency during the decode stage more closely follows a linear relationship with model size.
                    </p>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem"
                    }}>
                        {/* Runtime Analysis Charts */}
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            gap: "1rem"
                        }}>
                            {['First Token Time vs Parameters', 'Decode Latency vs Parameters', 'Memory Usage vs Parameters'].map((title, index) => (
                                <div key={index} style={{
                                    aspectRatio: "16/9",
                                    backgroundColor: "#f9fafb",
                                    borderRadius: "0.5rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <img
                                        src="/api/placeholder/800/300"
                                        alt={title}
                                        style={{
                                            objectFit: "contain",
                                            width: "100%",
                                            height: "100%"
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataAnalysisSection;