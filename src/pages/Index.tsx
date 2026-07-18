import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import {
  Wheat,
  Monitor,
  Briefcase,
  Users,
  ArrowRight,
  Heart,
  Target,
  Lightbulb,
  Award,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import cooperativeSummit from "@/assets/cooperative-summit.jpg";
import trainingSession from "@/assets/training-session.jpg";
import teamConference from "@/assets/team-conference.jpg";
import youthDelegates from "@/assets/youth-delegates.jpg";
import groupPhoto from "@/assets/group-photo.jpg";
import StrategicPillars from "@/components/home/StrategicPillars";

const focusAreas = [
  {
    icon: Users,
    title: "Cooperative Development",
    description:
      "Strengthening cooperative societies through training, governance support, and sustainable development practices.",
  },
  {
    icon: Wheat,
    title: "Agricultural Empowerment",
    description:
      "Modern farming techniques, agribusiness training, and support for crop and livestock production.",
  },
  {
    icon: Briefcase,
    title: "Business & Production",
    description:
      "Entrepreneurship training, financial literacy, and support for small-scale business development.",
  },
  {
    icon: Monitor,
    title: "Technology & Digital Skills",
    description:
      "Web development, data analysis, digital marketing, and computer literacy programs.",
  },
];

const impactStats = [
  { number: "5,000+", label: "Beneficiaries Trained" },
  { number: "50+", label: "Cooperatives Supported" },
  { number: "15+", label: "Communities Reached" },
  { number: "100+", label: "Programs Delivered" },
];

const programCategories = [
  {
    title: "Agricultural Training",
    image: trainingSession,
    courses: ["Crop Farming", "Poultry & Livestock", "Agro-processing", "Farm Management"],
  },
  {
    title: "Tech Skills",
    image: youthDelegates,
    courses: ["Web Development", "Data Analysis", "Digital Marketing", "Graphic Design"],
  },
  {
    title: "Business Skills",
    image: cooperativeSummit,
    courses: ["Entrepreneurship", "Cooperative Management", "Financial Literacy", "E-Commerce"],
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={groupPhoto}
            alt="Nehemiah Foundation empowerment program"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4 animate-fade-up opacity-0 delay-100">
              Empowering Communities Since 2005
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up opacity-0 delay-200 hero-text-shadow leading-tight">
              Empower Women and Youth as Agents of Change
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-up opacity-0 delay-300 leading-relaxed">
              Empower women and youth to become active agents of change, driving 
              economic development, promoting good governance and fostering sustainable peace.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 delay-400">
              <Button variant="hero" size="xl" asChild>
                <Link to="/register">
                  Register for Training
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-accent font-medium mb-2">CAC/IT/NO 18367</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Leveraging corporate economy, social entrepreneurship development, ICT, 
              job creation, good governance and sustainable peace across Nigeria and Africa.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Value driving solutions, building resilience, agribusiness, ICT, knowledge 
              sharing and good governance—empowering youth and women to become active agents 
              of change in their communities.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Focus Areas — BDSP
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Business Development Service Provider — empowering individuals and 
              communities through comprehensive programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-card p-6 rounded-xl border border-border shadow-soft card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seven Pillars of NFI */}
      <StrategicPillars />

      {/* Programs Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Training Programs
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive courses designed to equip you with practical skills for
              sustainable livelihoods.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programCategories.map((program, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-card card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-display text-xl font-semibold text-primary-foreground">
                    {program.title}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {program.courses.map((course, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {course}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                    <Link to="/programs">View All Courses</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link to="/register">
                Register for a Program
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Years of dedication to community empowerment and sustainable development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                What Drives Us
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                At Nehemiah Foundation, we believe that everyone has God-given value and
                potential. Our approach is to empower individuals, families, and communities
                to become self-sustainable through improved methods of farming, learning
                marketable trades, and building strong cooperative networks.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Heart,
                    title: "Compassion",
                    desc: "We serve with genuine care for those we help.",
                  },
                  {
                    icon: Target,
                    title: "Sustainability",
                    desc: "We build lasting solutions, not temporary fixes.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Innovation",
                    desc: "We embrace modern techniques and technologies.",
                  },
                  {
                    icon: Award,
                    title: "Excellence",
                    desc: "We deliver quality in all our programs.",
                  },
                ].map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{value.title}</h4>
                      <p className="text-muted-foreground text-sm">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={teamConference}
                alt="Community empowerment"
                className="rounded-2xl shadow-elevated"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-card max-w-xs">
                <p className="font-display font-semibold text-lg">
                  "Empowering individuals for economic sustainability"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="bg-primary rounded-2xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Future?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of beneficiaries who have acquired skills and resources for
              sustainable livelihoods through our programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/register">
                  Register Today
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

      {/* Contact Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display font-semibold text-lg mb-2">Visit Us</h4>
              <p className="text-muted-foreground text-sm">
                Adisa Plaza, Block B, Suite 2B,<br />
                Gudu District, Abuja, FCT
              </p>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display font-semibold text-lg mb-2">Call Us</h4>
              <p className="text-muted-foreground text-sm">
                +234-812 322 3339<br />
                +234-704 468 0182
              </p>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display font-semibold text-lg mb-2">Email Us</h4>
              <p className="text-muted-foreground">info@nehemiahfoundation.org</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
