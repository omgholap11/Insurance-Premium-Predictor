import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, TrendingUp, CheckCircle, BarChart3, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingPage = () => {
    const features = [
        {
            icon: <Zap className="w-6 h-6 text-yellow-400" />,
            title: "Instant Predictions",
            description: "Get your insurance premium estimate in seconds with our AI-powered engine."
        },
        {
            icon: <Shield className="w-6 h-6 text-primary" />,
            title: "Secure & Private",
            description: "Your health and financial data is encrypted and never shared with third parties."
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
            title: "High Accuracy",
            description: "Trained on millions of data points to provide the most precise market rates."
        }
    ];

    return (
        <div className="flex flex-col gap-20 pb-20">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center pt-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
                </div>

                <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary-light text-sm font-medium mb-6">
                            AI-Powered Insurance Analysis
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                            Predict Your Premium <br />
                            <span className="text-gradient">With Confidence</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Stop guessing. Use our advanced machine learning model to calculate your optimal insurance premium based on your unique profile.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            to="/signup"
                            className="group relative px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-lg shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get Started Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        </Link>
                        <Link
                            to="/login"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl font-semibold text-lg transition-all"
                        >
                            Existing User? Login
                        </Link>
                    </motion.div>

                    {/* Stats / Trust indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="pt-12 flex justify-center gap-8 md:gap-16 text-slate-500"
                    >
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-white">99%</span>
                            <span className="text-sm">Accuracy</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-white">50k+</span>
                            <span className="text-sm">Predictions</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-white">24/7</span>
                            <span className="text-sm">Availability</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                {feature.icon}
                            </div>
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Social Proof / Dashboard Preview */}
            <section className="max-w-7xl mx-auto px-4 pt-10">
                <div className="glass p-1 rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
                    <div className="bg-secondary/80 rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 -m-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
                        <BarChart3 className="w-16 h-16 text-primary mx-auto mb-6 opacity-80" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to optimize your premium?</h2>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            Join thousands of others who have successfully predicted their insurance costs with our state-of-the-art model.
                        </p>
                        <Link to="/signup" className="inline-flex items-center gap-2 text-primary-light hover:text-white font-semibold transition-colors">
                            Start your prediction now <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
