/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { TrendingUp } from 'lucide-react';

const DataAnalysisSection = () => {
    return (
        <section style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem 1rem"
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem"
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
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2rem",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem"
                }}>
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
                            <div style={{
                                width: "100%",
                                height: "200px",
                                backgroundColor: "#FBEFCCFF",
                                borderRadius: "0.5rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                paddingTop: "1rem",
                                paddingBottom: "1rem"
                            }}>
                                <img
                                    src="https://res.cloudinary.com/farmcode/image/upload/v1740134507/other/k9iikxhqqy1nhbgjm83c.png"
                                    alt="alt"
                                    style={{
                                        objectFit: "contain",
                                        width: "100%",
                                        height: "100%"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
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
                        <div style={{ position: "relative" }}>
                            <div style={{
                                borderRadius: "0.5rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                paddingTop: "1rem",
                                paddingBottom: "1rem"
                            }}>
                                <img
                                    src="https://res.cloudinary.com/farmcode/image/upload/v1740134336/other/cmk3q68krhg1ppywi19g.png"
                                    alt="alt"
                                    style={{
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
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
                    <div style={{ position: "relative" }}>
                        <div style={{
                            borderRadius: "0.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: "1rem",
                            paddingBottom: "1rem"
                        }}>
                            <img
                                src="https://res.cloudinary.com/farmcode/image/upload/v1740134334/other/qapfo9byglfizip4bsrk.png"
                                alt="alt"
                                style={{
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataAnalysisSection;