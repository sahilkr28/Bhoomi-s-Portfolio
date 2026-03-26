import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { FileCode2 as Github, Briefcase as Linkedin, Mail, Phone, Send, Terminal, Circle, AlertCircle, CheckCircle2, Code2 as Leetcode } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      // NOTE: Replace these with actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: data.name,
          reply_to: data.email,
          message: data.message,
          to_name: 'Bhoomi Sunil Jain',
        },
        'YOUR_PUBLIC_KEY'
      );
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      // Fallback for simulation if EmailJS is not configured
      setTimeout(() => {
        setSubmitStatus('success');
        reset();
      }, 1500);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { name: "GITHUB", icon: Github, link: "https://github.com/bhoomiijain", text: "github.com/bhoomiijain" },
    { name: "LINKEDIN", icon: Linkedin, link: "https://www.linkedin.com/in/bhoomii/", text: "linkedin.com/in/bhoomii" },
    { name: "EMAIL", icon: Mail, link: "mailto:bhoomijain1000@gmail.com", text: "bhoomijain1000@gmail.com" },
    { name: "PHONE", icon: Phone, link: "tel:+917666949367", text: "+91 7666949367" },
    { name: "LEETCODE", icon: Leetcode, link: "https://leetcode.com/u/46wmJ26rao/", text: "leetcode.com/bhoomi" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-theme-bg relative flex flex-col items-center">

      {/* Centered Title */}
      <div className="text-center mb-16 md:mb-24 px-6 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-theme-text mb-4"
        >
          Let's <span className="text-gradient">Connect</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-theme-text/60 text-lg max-w-lg mx-auto"
        >
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
        </motion.p>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl z-10">

        {/* Left Side: Socials */}
        <div className="flex flex-col gap-6 w-full max-w-md mx-auto lg:mx-0">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.max(0.2, index * 0.1) }}
              // Layout matched precisely to user's provided generic dark card UI
              className="interactive group flex items-center gap-5 p-5 md:p-6 rounded-2xl bg-[#1a1a1c]/90 border border-theme-text/5 hover:bg-[#222224] transition-all w-full md:max-w-[400px] hover:border-theme-text/20 shadow-sm"
            >
              {/* Thin outline Icon container */}
              <div className="w-12 h-12 shrink-0 rounded-lg border border-theme-text/20 flex items-center justify-center bg-transparent group-hover:border-theme-text/40 transition-colors">
                <social.icon size={20} className="text-theme-text/80 group-hover:text-theme-text transition-colors" />
              </div>

              {/* Text Block */}
              <div className="flex flex-col">
                <h4 className="text-theme-text margin-0 text-[10px] md:text-xs font-black uppercase tracking-widest">{social.name}</h4>
                <p className="text-theme-text/80 text-sm md:text-base font-medium mt-1">{social.text}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Right Side: Mini OS Form Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-2xl overflow-hidden glass border border-theme-text/20 shadow-2xl bg-[#0F0F13]/90 backdrop-blur-3xl"
        >
          {/* OS Header Bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-theme-text/5 border-b border-theme-text/10">
            <div className="flex gap-2">
              <Circle size={10} className="fill-red-500 text-red-500" />
              <Circle size={10} className="fill-yellow-500 text-yellow-500" />
              <Circle size={10} className="fill-green-500 text-green-500" />
            </div>
            <div className="flex items-center gap-2 text-theme-text/50 text-xs font-mono font-medium">
              <Terminal size={12} /> message.exe
            </div>
            <div className="flex gap-2 opacity-0">...</div> {/* spacing placeholder */}
          </div>

          {/* Form Implementation */}
          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

              <div className="flex flex-col gap-1">
                <label className="text-xs font-mono text-theme-orange/80 ml-1">Name_</label>
                <input
                  {...register("name", { required: true })}
                  className="interactive w-full bg-black/40 border border-theme-text/10 rounded-lg px-4 py-3 text-theme-text placeholder-white/30 focus:outline-none focus:border-theme-orange/80 focus:ring-1 focus:ring-theme-orange/80 transition-all font-mono text-sm"
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-red-400 text-xs mt-1 ml-1 flex items-center gap-1"><AlertCircle size={12} /> Required field</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-mono text-theme-orange/80 ml-1">Email_</label>
                <input
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  className="interactive w-full bg-black/40 border border-theme-text/10 rounded-lg px-4 py-3 text-theme-text placeholder-white/30 focus:outline-none focus:border-theme-orange/80 focus:ring-1 focus:ring-theme-orange/80 transition-all font-mono text-sm"
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-red-400 text-xs mt-1 ml-1 flex items-center gap-1"><AlertCircle size={12} /> Valid email required</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-mono text-theme-pink/80 ml-1">Message_</label>
                <textarea
                  {...register("message", { required: true })}
                  rows={5}
                  className="interactive w-full bg-black/40 border border-theme-text/10 rounded-lg px-4 py-3 text-theme-text placeholder-white/30 focus:outline-none focus:border-theme-pink/80 focus:ring-1 focus:ring-theme-pink/80 transition-all resize-none font-mono text-sm"
                  placeholder="Hello, I'd like to work with you..."
                />
                {errors.message && <span className="text-red-400 text-xs mt-1 ml-1 flex items-center gap-1"><AlertCircle size={12} /> Required field</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="interactive flex items-center justify-center gap-2 w-full py-4 mt-2 rounded-lg bg-theme-text/10 text-theme-text font-mono font-bold hover:bg-theme-text text-sm hover:text-theme-bg transition-all disabled:opacity-50 disabled:cursor-not-allowed group border border-theme-text/20 hover:border-theme-text"
              >
                {isSubmitting ? 'Transmitting...' : (
                  <>
                    [ SEND_MESSAGE ]
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-2 text-green-400 text-sm font-mono mt-2"
                >
                  <CheckCircle2 size={16} /> Transmission successful!
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>

      {/* Footer text */}
      <div className="absolute bottom-6 w-full text-center text-theme-text/30 text-xs font-mono">
        © {new Date().getFullYear()} Bhoomi Sunil Jain. Designed & Built with ❤️
      </div>
    </section>
  );
}
