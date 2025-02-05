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
        <section className="container">
            {/* Header */}
            <div className="header">
                <div className="header-left">
                    <CarIcon className="icon" />
                    <h2 className="title">Accuracy Table</h2>
                </div>
                <button className="view-all-button">
                    View All
                </button>
            </div>

            {/* Description */}
            <p className="description">
                The evaluation results of small LM (whose parameters size 6B).
            </p>

            {/* Notes Section */}
            <div className="notes-section">
                <h3 className="notes-header">
                    <span className="notes-icon">ℹ️</span>
                    Notes
                </h3>
                <div className="notes-content">
                    <p>Experiment Details:</p>
                    <ul className="notes-list">
                        <li className="notes-list-item">
                            <span>🎯</span>
                            <span>
                                <strong>Commonsense reasoning Accuracy</strong> is the average of hellaswag,truthfulqa_mc2,winogrande,commonsense_qa,piqa,openbookqa,boolq.
                            </span>
                        </li>
                        <li className="notes-list-item">
                            <span>🧩</span>
                            <span>
                                <strong>Problem solving</strong> is the average of arc_easy,arc_challenge,mmlu.
                            </span>
                        </li>
                        <li className="notes-list-item">
                            <span>🔢</span>
                            <span>
                                <strong>Math</strong> is the average of gsm8k,minerva_math.
                            </span>
                        </li>
                        <li className="notes-list-item">
                            <span>🔄</span>
                            <span>
                                Performance Metrics are tested with <code className="code-inline">lm-evaluation-harness</code> library.Math part is tested with <code className="code-inline">math-evaluation-harness</code>.
                            </span>
                        </li>
                        <li className="notes-list-item">
                            <span>📝</span>
                            <span>
                                Icons: 👑 for base model, 💎 for Instruct finetuned model.
                            </span>
                        </li>
                        <li className="notes-list-item">
                            <span>⚠️</span>
                            <span>
                                Some of the items are not available due to the lack of source of information or to be filled.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Table */}
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Parameters</th>
                            <th>Release Date</th>
                            <th>Affiliation</th>
                            <th>Context Window</th>
                            <th>Training Tok</th>
                            <th>Commonsense reasoning</th>
                            <th>Problem solving</th>
                            <th>Math</th>
                        </tr>
                    </thead>
                    <tbody>
                        {modelData.map((model, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="model-name-cell">
                                        <span className="model-icon">👑</span>
                                        <span className="model-link">{model.name}</span>
                                    </div>
                                </td>
                                <td>{model.parameters}</td>
                                <td>{model.releaseDate}</td>
                                <td>{model.affiliation}</td>
                                <td>{model.contextWindow}</td>
                                <td>{model.trainingTok}</td>
                                <td>{model.commonsenseReasoning.toFixed(4)}</td>
                                <td>{model.problemSolving.toFixed(4)}</td>
                                <td>{model.math.toFixed(4)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AccuracyTableSection;