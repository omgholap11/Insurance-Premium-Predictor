import React from 'react';
import { ShieldCheck, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-secondary/30 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="p-1.5 bg-primary rounded-lg">
                                <ShieldCheck className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-display font-bold text-lg text-white">
                                Insure<span className="text-primary-light">Predict</span>
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                            Advanced AI-powered insurance premium prediction using Machine Learning algorithms to give you accurate estimates instantly.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">How it works</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} InsurePredict. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
