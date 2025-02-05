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
        <section className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <CarIcon className="w-6 h-6" />
                    <h2 className="text-xl font-bold">Accuracy Table</h2>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                    View All
                </button>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">
                The evaluation results of small LM (whose parameters size 6B).
            </p>

            {/* Notes Section */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="w-5 h-5 inline-flex items-center justify-center">ℹ️</span>
                    Notes
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                    <p className="ml-7">Experiment Details:</p>
                    <ul className="space-y-2 ml-7">
                        <li className="flex gap-2">
                            <span>🎯</span>
                            <span>
                                <strong>Commonsense reasoning Accuracy</strong> is the average of hellaswag,truthfulqa_mc2,winogrande,commonsense_qa,piqa,openbookqa,boolq.
                            </span>
                        </li>
                        <li className="flex gap-2">
                            <span>🧩</span>
                            <span>
                                <strong>Problem solving</strong> is the average of arc_easy,arc_challenge,mmlu.
                            </span>
                        </li>
                        <li className="flex gap-2">
                            <span>🔢</span>
                            <span>
                                <strong>Math</strong> is the average of gsm8k,minerva_math.
                            </span>
                        </li>
                        <li className="flex gap-2">
                            <span>🔄</span>
                            <span>
                                Performance Metrics are tested with <code className="bg-gray-100 px-1">lm-evaluation-harness</code> library.Math part is tested with <code className="bg-gray-100 px-1">math-evaluation-harness</code>.
                            </span>
                        </li>
                        <li className="flex gap-2">
                            <span>📝</span>
                            <span>
                                Icons: 👑 for base model, 💎 for Instruct finetuned model.
                            </span>
                        </li>
                        <li className="flex gap-2">
                            <span>⚠️</span>
                            <span>
                                Some of the items are not available due to the lack of source of information or to be filled.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full min-w-[1000px] border-collapse">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="py-3 px-4 text-left font-medium text-gray-600">Name</th>
                            <th className="py-3 px-4 text-left font-medium text-gray-600">Parameters</th>
                            <th className="py-3 px-4 text-left font-medium text-gray-600">Release Date</th>
                            <th className="py-3 px-4 text-left font-medium text-gray-600">Affiliation</th>
                            <th className="py-3 px-4 text-left font-medium text-gray-600">Context Window</th>
                            <th className="py-3 px-4 text-left font-medium text-gray-600">Training Tok</th>
                            <th className="py-3 px-4 text-left font-medium text-gray-600">Commonsense reasoning</th>
                            <th className="py-3 px-4 text-left font-medium text-gray-600">Problem solving</th>
                            <th className="py-3 px-4 text-left font-medium text-gray-600">Math</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {modelData.map((model, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-2">
                                        <span className="w-5 h-5">👑</span>
                                        <span className="text-blue-600 hover:underline">{model.name}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4">{model.parameters}</td>
                                <td className="py-3 px-4">{model.releaseDate}</td>
                                <td className="py-3 px-4">{model.affiliation}</td>
                                <td className="py-3 px-4">{model.contextWindow}</td>
                                <td className="py-3 px-4">{model.trainingTok}</td>
                                <td className="py-3 px-4">{model.commonsenseReasoning.toFixed(4)}</td>
                                <td className="py-3 px-4">{model.problemSolving.toFixed(4)}</td>
                                <td className="py-3 px-4">{model.math.toFixed(4)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AccuracyTableSection;