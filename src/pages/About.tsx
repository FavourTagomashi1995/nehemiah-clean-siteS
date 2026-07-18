import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Target,
  Lightbulb,
  Award,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  Handshake,
} from "lucide-react";
import trainingImage from "@/assets/image1.jpg";
import cooperativeImage from "@/assets/image2.jpg";
import founderImage from "@/assets/image3.jpg";
import { strategicPillars, visionStatement } from "@/data/strategicPillars";

const coreValues = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We serve with genuine love and care for the communities we work with.",
  },
  {
    icon: Target,
    title: "Sustainability",
    description: "We focus on lasting solutions that empower people for the long term.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace modern techniques and technologies to maximize impact.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain high standards in all our programs and services.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of cooperative effort and collective growth.",
  },
  {
    icon: Globe,
    title: "Integrity",
    description: "We operate with transparency, accountability, and ethical practices.",
  },
];

const objectives = [
  "Support sustainable institutions across Nigeria through cooperative and entrepreneurial development",
  "Build partnerships with government, NGOs, corporate bodies, etc.",
  "Promote and empower women/youth through cooperative societies and social entrepreneurship",
  "Provide agribusiness and value chain in BDS, CE, SE",
  "Develop technology and specialized professional digital skills among women and youth",
  "Facilitate financial inclusion through training, access to financial resources",
  "Promote good governance through value-oriented peace building strategies",
  "Provide business development through capacity building, governance and knowledge sharing",
];

const partners = [
  "Government Agencies",
  "Action Aid (GCERF, PCVE-KIRH)",
  "AGRA – serve as panelist",
  "NYC – principal consultant",
  "Financial Institutions – micro funding",
  "Off-takers/Processors",
  "Donors & Sponsors",
  "Community Cooperatives",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">About Us</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Over 2 Decades Building Sustainable Futures
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Over 2 decades working with individuals and cooperative societies 
              to build sustainable futures across Nigeria and Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-accent font-medium mb-4">CAC/IT/NO 18367</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Across Nigeria within cooperative societies and social entrepreneurial 
                  initiatives to drive economic, peace, and development at the grassroots.
                </p>
                <p>
                  From a humble beginning working in rural communities in southern Kaduna 
                  training individuals in agribusiness and other business skills, forming 
                  trainers into cooperative societies.
                </p>
                <p>
                  Leveraging corporate economy, social entrepreneurship development, ICT, 
                  job creation, good governance and sustainable peace.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={trainingImage}
                alt="Training session"
                className="rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Journey
            </h2>
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-card">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  From a humble beginning working in rural communities in southern Kaduna, 
                  training individuals in agribusiness and other business skills, forming 
                  trainers into cooperative societies—Nehemiah Foundation International has 
                  grown into a nationally recognized force for cooperative development.
                </p>
                <p>
                  Through partnerships with government, NGOs, corporate bodies, and international 
                  organizations, we have expanded our capacity building programs, providing 
                  agribusiness and value chain support in BDS, CE, and SE to communities 
                  across Nigeria.
                </p>
                <p>
                  Today, we continue to develop technology and specialized professional digital 
                  skills among women and youth, facilitate financial inclusion through training 
                  and access to financial resources, and promote good governance through 
                  value-oriented peace building strategies for national development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary p-8 md:p-10 rounded-2xl text-primary-foreground">
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-primary-foreground/90 leading-relaxed mb-4">
                To establish a robust National Cooperative Network that empowers youth and women, 
                harnessing their skills, talents, and potentials to drive peace, development, 
                and economic growth across Africa.
              </p>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                A continent where cooperative values and principles foster inclusive prosperity, 
                social cohesion, and sustainable progress.
              </p>
            </div>
            <div className="bg-accent/10 p-8 md:p-10 rounded-2xl border border-accent/20">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Empower women and youth to become active agents of change, driving economic 
                development, promoting good governance and fostering sustainable peace.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Value driving solutions, building resilience, agribusiness, ICT, knowledge 
                sharing and good governance across Nigeria and Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide our work and define who we are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border shadow-soft card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Objectives
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We work towards achieving lasting impact through focused objectives that
                address the real needs of our communities.
              </p>
              <div className="space-y-4">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{objective}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={cooperativeImage}
                alt="Cooperative success"
                className="rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Seven Pillars of NFI
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              {visionStatement}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-card p-6 rounded-xl border border-border shadow-soft card-hover"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    pillar.color === "primary"
                      ? "bg-primary/10"
                      : "bg-accent/10"
                  }`}
                >
                  <pillar.icon
                    className={`w-6 h-6 ${
                      pillar.color === "primary" ? "text-primary" : "text-accent"
                    }`}
                  />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  {pillar.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <ul className="space-y-2">
                  {pillar.objectives.slice(0, 3).map((objective, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-xs">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships & Collaborations */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                <Handshake size={18} />
                <span className="text-sm font-medium">Partnerships & Collaborations</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Partners
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We collaborate with a diverse network of partners to amplify our impact 
                and deliver sustainable development across Nigeria and Africa.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-secondary p-4 rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-sm">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary p-8 md:p-10 rounded-2xl text-primary-foreground">
              <h3 className="font-display text-2xl font-bold mb-6">Get Involved</h3>
              <p className="text-primary-foreground/90 leading-relaxed mb-4">
                Join us in our mission to drive positive change in Nigeria and Africa. 
                Partner with us, volunteer, or donate to support our initiatives.
              </p>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
                Learn more about our work and how you can get involved. Reach out to us today!
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership - Founder Profile */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Founder
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The visionary leader behind Nehemiah Foundation International.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <img
                src={founderImage}
                alt="Emmanuel Nehemiah - Founder & Executive Director"
                className="w-80 h-96 rounded-2xl object-cover object-top shadow-elevated border-4 border-primary/20"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Emmanuel Nehemiah
                </h3>
                <p className="text-accent font-semibold text-lg">Founder & Executive Director</p>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Emmanuel Nehemiah is a visionary leader and grassroots development expert who founded 
                  Nehemiah Foundation International with a deep commitment to transforming communities 
                  through sustainable economic empowerment.
                </p>
                <p>
                  From humble beginnings working in rural communities in southern Kaduna, training 
                  individuals in agribusiness and other business skills, forming trainers into 
                  cooperative societies—his vision has grown to impact thousands of lives across 
                  multiple communities.
                </p>
                <p>
                  Under his leadership, the foundation has expanded into digital literacy, vocational 
                  training, and the comprehensive "Seven Pillars of NFI" framework. Emmanuel's vision 
                  continues to guide NFI's mission of creating self-reliant, economically sustainable 
                  communities across Nigeria and beyond.
                </p>
              </div>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground italic">
                  "To see communities transformed through sustainable empowerment and economic self-reliance."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="bg-primary rounded-2xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Partner With Us
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join us in transforming communities across Nigeria. Whether you're an
              individual, cooperative society, or organization, there's a place for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/register">Register for Training</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
