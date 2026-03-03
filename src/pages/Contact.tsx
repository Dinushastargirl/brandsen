import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Layout } from "@/src/components/layout/Layout";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        alert("Message sent successfully!");
        reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Layout>
      <section className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                  Let's <span className="text-blue-gradient">Connect</span>.
                </h1>
                <p className="text-xl text-white/50 mb-12 max-w-md">
                  Have a project in mind? We'd love to hear from you. Our team of experts is ready to help you scale.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-brand-blue">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email Us</h4>
                      <p className="text-white/50">hello@brandsen.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-brand-blue">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Call Us</h4>
                      <p className="text-white/50">+94 11 234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-brand-blue">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Visit Us</h4>
                      <p className="text-white/50">Level 24, World Trade Center, Colombo 01, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass p-8 md:p-12 rounded-[40px] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[80px] -z-10" />
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                    <input
                      {...register("name")}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-blue transition-colors"
                    />
                    {errors.name && <p className="text-red-500 text-xs ml-4">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-4">Email Address</label>
                    <input
                      {...register("email")}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-blue transition-colors"
                    />
                    {errors.email && <p className="text-red-500 text-xs ml-4">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-4">Phone Number</label>
                  <input
                    {...register("phone")}
                    placeholder="+94 77 123 4567"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-blue transition-colors"
                  />
                  {errors.phone && <p className="text-red-500 text-xs ml-4">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-4">Your Message</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-blue transition-colors resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-xs ml-4">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black py-5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-blue hover:text-white transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
