import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const contactInfo = [
  {
    icon: MapPin,
    title: "Abuja Contact Office",
    details: [
      "Adisa Plaza, Block B, Suite 2B,",
      "No 39 David Ejoor Crescent,",
      "Gudu District, Abuja, FCT"
    ],
    description: "Visit our office for in-person consultations",
  },
  {
    icon: MapPin,
    title: "Kaduna Office",
    details: [
      "18/19, Inuwa Abdulkadiri Street,",
      "Kakuri Industrial Estate,",
      "Kaduna State"
    ],
    description: "Our regional operations center",
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+234-812 322 3339", "+234-704 468 0182"],
    description: "Call us Monday to Friday, 9am - 5pm",
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["info@nehemiahfoundation.org"],
    description: "We respond within 24-48 hours",
  },
  {
    icon: "website",
    title: "Website",
    details: ["www.nehemiahfoundation.org"],
    description: "Explore our online presence",
  },
  
  
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_messages").insert({
        full_name: formData.fullName,
        email: formData.email,
        phone_number: formData.phone || null,
        subject: formData.subject,
        message: formData.message,
      });

      if (error) throw error;

      toast.success("Message sent successfully! We will get back to you soon.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">Contact Us</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Get in Touch With Us
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Have questions about our programs or want to partner with us? We'd love
              to hear from you. Reach out and let's discuss how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border shadow-soft text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
                <p className="text-xs text-muted-foreground/70 mt-2">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="mt-1.5"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      required
                      className="mt-1.5"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    required
                    className="mt-1.5 min-h-[160px]"
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Side Content */}
            <div className="lg:pl-8">
              <div className="bg-primary p-8 md:p-10 rounded-2xl text-primary-foreground mb-8">
                <h3 className="font-display text-2xl font-bold mb-4">
                  Partner With Us
                </h3>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  We welcome partnerships with individuals, organizations, and
                  international bodies interested in supporting community development
                  and empowerment initiatives in Nigeria.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "NGO & Development Organizations",
                    "Corporate Partners & Sponsors",
                    "Individual Donors & Volunteers",
                    "Government Agencies",
                    "International Bodies & Missions",
                  ].map((partner, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-primary-foreground/90 text-sm">
                        {partner}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button variant="hero" asChild>
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>

              <div className="bg-secondary p-8 rounded-2xl">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Interested in Training?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Ready to acquire new skills? Register for our training programs in
                  agriculture, technology, business, and vocational skills.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/register">
                    Register for Training
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="text-foreground font-semibold mb-2">Abuja Contact Office</h4>
              <p className="text-muted-foreground text-sm">
                Adisa Plaza, Block B, Suite 2B,<br />
                No 39 David Ejoor Crescent,<br />
                Gudu District, Abuja, FCT
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="text-foreground font-semibold mb-2">Kaduna Office</h4>
              <p className="text-muted-foreground text-sm">
                18/19, Inuwa Abdulkadiri Street,<br />
                Kakuri Industrial Estate,<br />
                Kaduna State
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
