import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Activity, MapPin, Briefcase, DollarSign, Cigarette, CheckCircle } from 'lucide-react';

const cities = [
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", // Tier 1
    "Jaipur", "Chandigarh", "Indore", "Lucknow", "Patna", "Ranchi", "Visakhapatnam", "Coimbatore", // Tier 2 Start
    "Bhopal", "Nagpur", "Vadodara", "Surat", "Rajkot", "Jodhpur", "Raipur", "Amritsar", "Varanasi",
    "Agra", "Dehradun", "Mysore", "Jabalpur", "Guwahati", "Thiruvananthapuram", "Ludhiana", "Nashik",
    "Allahabad", "Udaipur", "Aurangabad", "Hubli", "Belgaum", "Salem", "Vijayawada", "Tiruchirappalli",
    "Bhavnagar", "Gwalior", "Dhanbad", "Bareilly", "Aligarh", "Gaya", "Kozhikode", "Warangal",
    "Kolhapur", "Bilaspur", "Jalandhar", "Noida", "Guntur", "Asansol", "Siliguri" // Tier 2 End
].sort();

const occupations = [
    "retired", "freelancer", "student", "government_job",
    "business_owner", "unemployed", "private_job"
];

const PredictionForm = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        age: '',
        weight: '',
        height: '',
        income_lpa: '',
        smoker: false,
        city: '',
        occupation: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Logic to send data to backend would go here
        console.log("Submitting:", formData);

        // Simulating response logic roughly based on profile
        // Note: In real app, this comes from backend
        let category = "low";
        const bmi = formData.weight / (formData.height * formData.height); // Height in meters assumed for BMI formula usually, but schema just says 'height'. 
        // Assuming height is in meters for BMI, if user enters cm we need conversion, but let's assume standard units or just pass to backend. 
        // Let's just mock a random result or simple logic for demo.
        if (formData.smoker || formData.age > 50) category = "high";
        else if (formData.age > 30) category = "medium";

        navigate('/result', { state: { category, formData } });
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center py-10">
            <div className="w-full max-w-2xl">
                <div className="glass-card rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    {/* Progress Bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-secondary">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: "0%" }}
                            animate={{ width: step === 1 ? "50%" : "100%" }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">
                            {step === 1 ? "Personal Details" : "Lifestyle & Profile"}
                        </h2>
                        <p className="text-slate-400">
                            {step === 1 ? "Let's start with the basics." : "Tell us a bit more about your situation."}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 ml-1">Age</label>
                                            <input
                                                type="number"
                                                name="age"
                                                required
                                                min="1"
                                                max="120"
                                                value={formData.age}
                                                onChange={handleChange}
                                                className="w-full bg-secondary/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                                                placeholder="Years"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 ml-1">Weight (kg)</label>
                                            <input
                                                type="number"
                                                name="weight"
                                                required
                                                min="1"
                                                step="0.1"
                                                value={formData.weight}
                                                onChange={handleChange}
                                                className="w-full bg-secondary/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                                                placeholder="Eg. 70"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 ml-1">Height (m)</label>
                                            <input
                                                type="number"
                                                name="height"
                                                required
                                                min="0.1"
                                                step="0.01"
                                                value={formData.height}
                                                onChange={handleChange}
                                                className="w-full bg-secondary/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                                                placeholder="Eg. 1.75"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-6 flex justify-end">
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
                                        >
                                            Next Step <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300 ml-1">Annual Income (LPA)</label>
                                        <div className="relative">
                                            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                            <input
                                                type="number"
                                                name="income_lpa"
                                                required
                                                min="0"
                                                step="0.1"
                                                value={formData.income_lpa}
                                                onChange={handleChange}
                                                className="w-full bg-secondary/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                                                placeholder="Eg. 12.5"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 ml-1">City</label>
                                            <div className="relative">
                                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                                <select
                                                    name="city"
                                                    required
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    className="w-full bg-secondary/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none appearance-none transition-all"
                                                >
                                                    <option value="" disabled>Select City</option>
                                                    {cities.map(city => (
                                                        <option key={city} value={city} className="bg-secondary text-white">{city}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-300 ml-1">Occupation</label>
                                            <div className="relative">
                                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                                <select
                                                    name="occupation"
                                                    required
                                                    value={formData.occupation}
                                                    onChange={handleChange}
                                                    className="w-full bg-secondary/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none appearance-none transition-all"
                                                >
                                                    <option value="" disabled>Select Occupation</option>
                                                    {occupations.map(occ => (
                                                        <option key={occ} value={occ} className="bg-secondary text-white">{occ.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-colors" onClick={() => setFormData(prev => ({ ...prev, smoker: !prev.smoker }))}>
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-lg ${formData.smoker ? 'bg-red-500/20 text-red-400' : 'bg-slate-700/50 text-slate-400'}`}>
                                                <Cigarette className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white">Smoker?</h4>
                                                <p className="text-xs text-slate-400">Do you smoke currently?</p>
                                            </div>
                                        </div>
                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${formData.smoker ? 'bg-primary border-primary' : 'border-slate-500'}`}>
                                            {formData.smoker && <CheckCircle className="w-4 h-4 text-white" />}
                                        </div>
                                    </div>

                                    <div className="pt-6 flex justify-between">
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="text-slate-400 hover:text-white font-medium flex items-center gap-2 px-4"
                                        >
                                            <ChevronLeft className="w-5 h-5" /> Back
                                        </button>
                                        <button
                                            type="submit"
                                            className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-accent/20 transition-all flex items-center gap-2"
                                        >
                                            Predict Premium <Activity className="w-5 h-5" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PredictionForm;
