import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { trackBookCall, trackWhatsApp, trackPhoneCall, trackCTA } from "@/lib/analytics";

type FormStatus = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzzolqp";

const HomeContact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ((e.target as HTMLFormElement)["_gotcha"]?.value) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      trackCTA("form", "contact_section");
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact-section" data-section="Contact" className="pt-40 pb-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start justify-items-center">
          {/* Left - Heading and Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Section Header */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-thicccboi font-bold text-gray-900 mb-6 leading-tight">
                Get your <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent">free</span> website demo.
              </h1>
              <p className="text-lg text-gray-700 mb-4 font-figtree leading-relaxed">
                No pressure, no sales pitch. Send us a few details about your business and I'll show you what a website for your business would look like, talk through what you actually need (not what I want to sell you), and answer any questions.
              </p>
              <p className="text-base text-gray-600 mb-4 font-figtree leading-relaxed">
                I usually ask a few things upfront - what's working with your current site (if you have one), what isn't, and what you want to achieve. Then I'll mock up a quick preview based on that. You can see exactly what you'd get before committing to anything.
              </p>
              <p className="text-base text-gray-600 font-figtree leading-relaxed">
                Most people reach out because they're either starting from scratch or their current site isn't bringing in leads. Either way works - we figure it out together.
              </p>
            </div>

            {/* Contact Preferences */}
            <div className="mt-6">
              <h4 className="text-lg font-figtree font-semibold text-gray-900 mb-4">Prefer to text or call?</h4>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://wa.me/447792145328"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsApp('contact_section')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-black text-black rounded-full font-semibold hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors"
                >
                  <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
                  WhatsApp Us
                </a>
                <a 
                  href="tel:+447792145328"
                  onClick={() => trackPhoneCall('contact_section')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-black text-black rounded-full font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us +44 7792 145328
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-thicccboi font-bold text-gray-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-gray-600 font-figtree">
                Tell us about your business and we'll get back to you fast
              </p>
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center text-center py-8">
                <CheckCircle className="w-14 h-14 text-green-600 mb-4" />
                <h4 className="text-xl font-thicccboi font-bold text-gray-900 mb-2">
                  Message sent!
                </h4>
                <p className="text-gray-600 font-figtree">
                  Thanks for reaching out - we'll be in touch soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                <div>
                  <Label htmlFor="name" className="text-gray-900 font-figtree">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 bg-white text-gray-900"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-900 font-figtree">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 bg-white text-gray-900"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-900 font-figtree">Phone (optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 bg-white text-gray-900"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-900 font-figtree">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 bg-white text-gray-900"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600 font-figtree">
                    Something went wrong sending your message. Please try again, or WhatsApp/call us instead.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-figtree font-semibold py-3 rounded-xl transition-all duration-200 disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact; 