import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Shield,
  Code,
  Brain,
  Search,
  Award,
  Handshake,
  ArrowRight,
  CheckCircle,
  GraduationCap,
} from "lucide-react";
import raymondImage from "@/assets/raymond-cosmas.jpg";

const certifications = [
  {
    icon: Shield,
    title: "Certified Cyber Security Specialist",
    issuer: "Oracle & IBM",
  },
  {
    icon: Search,
    title: "Certified OSINT Investigator",
    issuer: "Open Source Intelligence",
  },
  {
    icon: Code,
    title: "Advanced Diploma in Full-Stack Development",
    issuer: "Software Engineering",
  },
  {
    icon: Brain,
    title: "AI & Automation Expert",
    issuer: "Artificial Intelligence",
  },
];

const partnershipBenefits = [
  "Access to industry-certified instructors with real-world experience",
  "Curriculum designed to meet current market demands",
  "Hands-on practical training with modern tools and technologies",
  "Career guidance and job placement support",
  "Internationally recognized certification preparation",
  "Flexible learning schedules for working professionals",
];

const techCourses = [
  "Cyber Security Fundamentals & Advanced",
  "Full-Stack Web Development",
  "Data Analysis & Visualization",
  "AI & Automation Tools",
  "Digital Marketing & SEO",
  "OSINT & Digital Investigation",
];

const Consultancy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
              <Handshake size={18} />
              <span className="text-sm font-medium">Strategic Partnership</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Tech Skills Training Consultancy
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Nehemiah Foundation International partners with CosmicData International
              to deliver world-class technology training programs, empowering individuals
              with cutting-edge skills for the digital economy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/register">
                  Enroll Now
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Partnership for Digital Empowerment
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Nehemiah Foundation International has forged a strategic partnership with
                <strong className="text-foreground"> CosmicData International</strong>, a leading
                technology consultancy firm, to provide comprehensive tech skills training
                to our beneficiaries and the broader community.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                This collaboration brings together Nehemiah Foundation's deep community
                reach and development expertise with CosmicData International's technical
                prowess and industry connections, creating a powerful platform for
                technology education and career development.
              </p>
              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Industry-Certified Training</p>
                  <p className="text-sm text-muted-foreground">
                    Programs aligned with Oracle, IBM, and global tech standards
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    CosmicData International
                  </h3>
                  <p className="text-muted-foreground text-sm">Technology Partner</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                CosmicData International is a technology consultancy specializing in
                cybersecurity, software development, AI automation, and digital
                transformation solutions for businesses and individuals.
              </p>
              <div className="space-y-3">
                {techCourses.map((course, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Developer Profile */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Lead Instructor
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Learn from a highly certified professional with extensive experience in
              cybersecurity, software development, and AI automation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-12 rounded-2xl border border-border">
              <div className="text-center mb-8">
                <img
                  src={raymondImage}
                  alt="Mr Raymond Cosmas - Lead Developer"
                  className="w-32 h-32 rounded-full object-cover object-top mx-auto mb-4 border-4 border-primary/20"
                />
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Mr Raymond Cosmas
                </h3>
                <p className="text-accent font-medium">Lead Developer, CosmicData International</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-card p-5 rounded-xl border border-border flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <cert.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Train With Us?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our partnership offers unique advantages that set our training programs apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partnershipBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="bg-primary rounded-2xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Start Your Tech Career Today
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join our technology training programs and gain the skills needed to thrive
              in the digital economy. Spaces are limited—register now!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/register">
                  Register for Training
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Consultancy;
