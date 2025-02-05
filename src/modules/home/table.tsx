import React from 'react';
import { CarIcon } from 'lucide-react';

interface ModelData {
    name: string;
    parameters: string;
    releaseDate: string;
    affiliation: string;
    contextWindow: number;
    trainingTok: string;
    commonsenseReasoning: number;
    problemSolving: number;
    math: number;
}

const modelData: ModelData[] = [
    {
        name: "facebook/opt-125m",
        parameters: "125M",
        releaseDate: "2022.05",
        affiliation: "Facebook",
        contextWindow: 2048,
        trainingTok: "180B Token Dataset",
        commonsenseReasoning: 0.4033,
        problemSolving: 0.2940,
        math: 1.9000
    },
    {
        name: "facebook/opt-125m",
        parameters: "125M",
        releaseDate: "2022.05",
        affiliation: "Facebook",
        contextWindow: 2048,
        trainingTok: "180B Token Dataset",
        commonsenseReasoning: 0.4033,
        problemSolving: 0.2940,
        math: 1.9000
    },
    {
        name: "facebook/opt-125m",
        parameters: "125M",
        releaseDate: "2022.05",
        affiliation: "Facebook",
        contextWindow: 2048,
        trainingTok: "180B Token Dataset",
        commonsenseReasoning: 0.4033,
        problemSolving: 0.2940,
        math: 1.9000
    },
    {
        name: "facebook/opt-125m",
        parameters: "125M",
        releaseDate: "2022.05",
        affiliation: "Facebook",
        contextWindow: 2048,
        trainingTok: "180B Token Dataset",
        commonsenseReasoning: 0.4033,
        problemSolving: 0.2940,
        math: 1.9000
    },
    {
        name: "facebook/opt-125m",
        parameters: "125M",
        releaseDate: "2022.05",
        affiliation: "Facebook",
        contextWindow: 2048,
        trainingTok: "180B Token Dataset",
        commonsenseReasoning: 0.4033,
        problemSolving: 0.2940,
        math: 1.9000
    },
    {
        name: "facebook/opt-125m",
        parameters: "125M",
        releaseDate: "2022.05",
        affiliation: "Facebook",
        contextWindow: 2048,
        trainingTok: "180B Token Dataset",
        commonsenseReasoning: 0.4033,
        problemSolving: 0.2940,
        math: 1.9000
    },
    {
        name: "facebook/opt-125m",
        parameters: "125M",
        releaseDate: "2022.05",
        affiliation: "Facebook",
        contextWindow: 2048,
        trainingTok: "180B Token Dataset",
        commonsenseReasoning: 0.4033,
        problemSolving: 0.2940,
        math: 1.9000
    },
    {
        name: "facebook/opt-125m",
        parameters: "125M",
        releaseDate: "2022.05",
        affiliation: "Facebook",
        contextWindow: 2048,
        trainingTok: "180B Token Dataset",
        commonsenseReasoning: 0.4033,
        problemSolving: 0.2940,
        math: 1.9000
    },
    {
        name: "facebook/opt-125m",
        parameters: "125M",
        releaseDate: "2022.05",
        affiliation: "Facebook",
        contextWindow: 2048,
        trainingTok: "180B Token Dataset",
        commonsenseReasoning: 0.4033,
        problemSolving: 0.2940,
        math: 1.9000
    },
    {
        name: "facebook/opt-125m",
        parameters: "125M",
        releaseDate: "2022.05",
        affiliation: "Facebook",
        contextWindow: 2048,
        trainingTok: "180B Token Dataset",
        commonsenseReasoning: 0.4033,
        problemSolving: 0.2940,
        math: 1.9000
    },
    // Add more data as needed
];

const AccuracyTableSection = () => {
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
                justifyContent: "space-between",
                marginBottom: "1.5rem"
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                }}>
                    <CarIcon style={{
                        width: "1.5rem",
                        height: "1.5rem"
                    }} />
                    <h2 style={{
                        fontSize: "1.25rem",
                        fontWeight: "700"
                    }}>Accuracy Table</h2>
                </div>
                <button style={{
                    color: "#2563eb",
                    fontWeight: "500"
                }}>
                    View All
                </button>
            </div>

            {/* Description */}
            <p style={{
                color: "#4b5563",
                marginBottom: "1.5rem"
            }}>
                The evaluation results of small LM (whose parameters size 6B).
            </p>

            {/* Notes Section */}
            <div style={{
                backgroundColor: "#f9fafb",
                borderRadius: "0.5rem",
                padding: "1rem",
                marginBottom: "1.5rem"
            }}>
                <h3 style={{
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                }}>
                    <span style={{
                        width: "1.25rem",
                        height: "1.25rem",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>ℹ️</span>
                    Notes
                </h3>
                <div style={{
                    fontSize: "0.875rem",
                    color: "#4b5563"
                }}>
                    <p style={{ marginLeft: "1.75rem" }}>Experiment Details:</p>
                    <ul style={{
                        marginLeft: "1.75rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem"
                    }}>
                        <li style={{
                            display: "flex",
                            gap: "0.5rem"
                        }}>
                            <span>🎯</span>
                            <span>
                                <strong>Commonsense reasoning Accuracy</strong> is the average of hellaswag,truthfulqa_mc2,winogrande,commonsense_qa,piqa,openbookqa,boolq.
                            </span>
                        </li>
                        <li style={{
                            display: "flex",
                            gap: "0.5rem"
                        }}>
                            <span>🧩</span>
                            <span>
                                <strong>Problem solving</strong> is the average of arc_easy,arc_challenge,mmlu.
                            </span>
                        </li>
                        <li style={{
                            display: "flex",
                            gap: "0.5rem"
                        }}>
                            <span>🔢</span>
                            <span>
                                <strong>Math</strong> is the average of gsm8k,minerva_math.
                            </span>
                        </li>
                        <li style={{
                            display: "flex",
                            gap: "0.5rem"
                        }}>
                            <span>🔄</span>
                            <span>
                                Performance Metrics are tested with <code style={{
                                    backgroundColor: "#f3f4f6",
                                    padding: "0 0.25rem"
                                }}>lm-evaluation-harness</code> library.Math part is tested with <code style={{
                                    backgroundColor: "#f3f4f6",
                                    padding: "0 0.25rem"
                                }}>math-evaluation-harness</code>.
                            </span>
                        </li>
                        <li style={{
                            display: "flex",
                            gap: "0.5rem"
                        }}>
                            <span>📝</span>
                            <span>
                                Icons: 👑 for base model, 💎 for Instruct finetuned model.
                            </span>
                        </li>
                        <li style={{
                            display: "flex",
                            gap: "0.5rem"
                        }}>
                            <span>⚠️</span>
                            <span>
                                Some of the items are not available due to the lack of source of information or to be filled.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Table */}
            <div style={{ overflowX: "auto" }}>
                <table style={{
                    width: "100%",
                    minWidth: "1000px",
                    borderCollapse: "collapse"
                }}>
                    <thead>
                        <tr style={{ backgroundColor: "#f9fafb" }}>
                            <th style={{
                                padding: "0.75rem 1rem",
                                textAlign: "left",
                                fontWeight: "500",
                                color: "#4b5563"
                            }}>Name</th>
                            <th style={{
                                padding: "0.75rem 1rem",
                                textAlign: "left",
                                fontWeight: "500",
                                color: "#4b5563"
                            }}>Parameters</th>
                            <th style={{
                                padding: "0.75rem 1rem",
                                textAlign: "left",
                                fontWeight: "500",
                                color: "#4b5563"
                            }}>Release Date</th>
                            <th style={{
                                padding: "0.75rem 1rem",
                                textAlign: "left",
                                fontWeight: "500",
                                color: "#4b5563"
                            }}>Affiliation</th>
                            <th style={{
                                padding: "0.75rem 1rem",
                                textAlign: "left",
                                fontWeight: "500",
                                color: "#4b5563"
                            }}>Context Window</th>
                            <th style={{
                                padding: "0.75rem 1rem",
                                textAlign: "left",
                                fontWeight: "500",
                                color: "#4b5563"
                            }}>Training Tok</th>
                            <th style={{
                                padding: "0.75rem 1rem",
                                textAlign: "left",
                                fontWeight: "500",
                                color: "#4b5563"
                            }}>Commonsense reasoning</th>
                            <th style={{
                                padding: "0.75rem 1rem",
                                textAlign: "left",
                                fontWeight: "500",
                                color: "#4b5563"
                            }}>Problem solving</th>
                            <th style={{
                                padding: "0.75rem 1rem",
                                textAlign: "left",
                                fontWeight: "500",
                                color: "#4b5563"
                            }}>Math</th>
                        </tr>
                    </thead>
                    <tbody style={{ borderTop: "1px solid #e5e7eb" }}>
                        {modelData.map((model, index) => (
                            <tr key={index} style={{
                                borderBottom: "1px solid #e5e7eb",
                            }}>
                                <td style={{ padding: "0.75rem 1rem" }}>
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem"
                                    }}>
                                        <span style={{
                                            width: "1.25rem",
                                            height: "1.25rem"
                                        }}>👑</span>
                                        <span style={{
                                            color: "#2563eb",
                                            textDecoration: "none",
                                        }}>{model.name}</span>
                                    </div>
                                </td>
                                <td style={{ padding: "0.75rem 1rem" }}>{model.parameters}</td>
                                <td style={{ padding: "0.75rem 1rem" }}>{model.releaseDate}</td>
                                <td style={{ padding: "0.75rem 1rem" }}>{model.affiliation}</td>
                                <td style={{ padding: "0.75rem 1rem" }}>{model.contextWindow}</td>
                                <td style={{ padding: "0.75rem 1rem" }}>{model.trainingTok}</td>
                                <td style={{ padding: "0.75rem 1rem" }}>{model.commonsenseReasoning.toFixed(4)}</td>
                                <td style={{ padding: "0.75rem 1rem" }}>{model.problemSolving.toFixed(4)}</td>
                                <td style={{ padding: "0.75rem 1rem" }}>{model.math.toFixed(4)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AccuracyTableSection;