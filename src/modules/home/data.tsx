import React from 'react';
import { TrendingUp } from 'lucide-react';

const DataAnalysisSection = () => {
    return (
        <section className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="w-6 h-6 text-red-500" />
                <h2 className="text-xl font-bold">Data Analysis</h2>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8">
                    {/* Overview Section */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold mb-4">Overview of SLMs</h3>
                        <p className="text-gray-600 mb-6">
                            SLMs have gained increasing attention from both the research and industrial communities.
                        </p>
                        <div className="relative">
                            {/* Timeline Component */}
                            <div className="w-full h-[200px] bg-gray-50 rounded-lg flex items-center justify-center">
                                <img
                                    src="/api/placeholder/800/200"
                                    alt="Timeline of SLM Development"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Capabilities Section */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold mb-4">Capabilities of SLM</h3>
                        <p className="text-gray-600 mb-6">
                            The charts show substantial performance improvements across all tasks between 2022 and 2024. Specifically, model performance improved by 10.4%, 13.5%, and 13.5% for the three tasks, respectively.
                        </p>
                        <div className="space-y-4">
                            {/* Legend Grid */}
                            <div className="grid grid-cols-3 gap-2 text-xs">
                                {[
                                    'EleutherAI', 'Microsoft', 'TinyLlama', 'H2O', 'HuggingFace',
                                    'China Telecom', 'StabilityAI', 'Google', 'Apple', 'Toyota'
                                ].map((company, index) => (
                                    <div key={index} className="flex items-center gap-1">
                                        <div className={`w-3 h-3 rounded-full bg-blue-${(index + 3) * 100}`}></div>
                                        <span>{company}</span>
                                    </div>
                                ))}
                            </div>
                            {/* Performance Charts */}
                            <div className="space-y-4">
                                <img
                                    src="/api/placeholder/800/200"
                                    alt="Performance Charts"
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold mb-4">Runtime Cost of SLM</h3>
                    <p className="text-gray-600 mb-6">
                        The inference latency and memory usage within each size group (0.1-1B, 1-2B, and 2-3B) is relatively similar and aligns with the latency increase as the model size grows. For models of similar size from different architectures, the first token time during the prefill stage vary significantly. However, the model latency during the decode stage more closely follows a linear relationship with model size.
                    </p>
                    <div className="space-y-6">
                        {/* Runtime Analysis Charts */}
                        <div className="grid grid-cols-1 gap-4">
                            <div className="aspect-video bg-gray-50 rounded-lg flex items-center justify-center">
                                <img
                                    src="/api/placeholder/800/300"
                                    alt="First Token Time vs Parameters"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div className="aspect-video bg-gray-50 rounded-lg flex items-center justify-center">
                                <img
                                    src="/api/placeholder/800/300"
                                    alt="Decode Latency vs Parameters"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div className="aspect-video bg-gray-50 rounded-lg flex items-center justify-center">
                                <img
                                    src="/api/placeholder/800/300"
                                    alt="Memory Usage vs Parameters"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataAnalysisSection;