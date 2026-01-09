import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, XCircle, ArrowRight, RefreshCw } from 'lucide-react';

const PredictionResult = () => {
    const location = useLocation();
    const { category, formData } = location.state || { category: 'medium' };

    const getResultDetails = (cat) => {
        switch (cat.toLowerCase()) {
            case 'low':
                return {
                    color: 'text-emerald-400',
                    bgColor: 'bg-emerald-500/10',
                    borderColor: 'border-emerald-500/20',
                    icon: <CheckCircle className="w-16 h-16 text-emerald-400" />,
                    title: "Low Premium",
                    description: "Great news! Based on your profile, you are eligible for the lowest premium rates.",
                    priceRange: "₹5,000 - ₹8,000 / year"
                };
            case 'medium':
                return {
                    color: 'text-yellow-400',
                    bgColor: 'bg-yellow-500/10',
                    borderColor: 'border-yellow-500/20',
                    icon: <AlertTriangle className="w-16 h-16 text-yellow-400" />,
                    title: "Medium Premium",
                    description: "Your detailed profile suggests a standard premium rate.",
                    priceRange: "₹10,000 - ₹15,000 / year"
                };
            case 'high':
            default:
                return {
                    color: 'text-red-400',
                    bgColor: 'bg-red-500/10',
                    borderColor: 'border-red-500/20',
                    icon: <Activity className="w-16 h-16 text-red-400" />, // Changed Icon
                    title: "High Premium",
                    description: "Due to certain risk factors in your profile, the predicted premium is higher.",
                    priceRange: "₹20,000+ / year"
                };
        }
    };

    const details = getResultDetails(category);

    return (
        <div className="min-h-[80vh] flex items-center justify-center pt-10 pb-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg"
            >
                <div className={`glass-card p-1 rounded-3xl ${details.borderColor} shadow-2xl`}>
                    <div className="bg-secondary/80 rounded-[1.4rem] p-8 md:p-12 text-center overflow-hidden relative">

                        {/* Background Glow */}
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 ${details.bgColor} blur-[80px] pointer-events-none`} />

                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className={`w-24 h-24 mx-auto ${details.bgColor} rounded-full flex items-center justify-center mb-6`}
                        >
                            {details.icon}
                        </motion.div>

                        <h2 className="text-slate-400 text-lg font-medium mb-2">Predicted Category</h2>
                        <h1 className={`text-4xl md:text-5xl font-bold ${details.color} mb-6 tracking-tight`}>
                            {details.title}
                        </h1>

                        <div className="py-6 border-y border-white/5 mb-6">
                            <p className="text-3xl font-bold text-white mb-1">{details.priceRange}</p>
                            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Estimated Cost</p>
                        </div>

                        <p className="text-slate-300 mb-8 leading-relaxed">
                            {details.description}
                        </p>

                        <div className="flex flex-col gap-3">
                            <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all">
                                View Detailed Breakdown
                            </button>
                            <Link
                                to="/predict"
                                className="w-full py-4 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                            >
                                <RefreshCw className="w-4 h-4" /> Check Another Profile
                            </Link>
                        </div>

                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// Import Activity here since I used it above
import { Activity } from 'lucide-react';

export default PredictionResult;
