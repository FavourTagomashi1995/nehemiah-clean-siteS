import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MapPin,
  Target,
  Users,
  Layers,
  CheckCircle,
  Building,
} from "lucide-react";
import { projects } from "@/data/projects";

const Projects = () => {
  const natcon = projects.find((p) => p.id === "natcon")!;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">Our Projects</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Transformative Initiatives for Sustainable Development
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Discover our flagship projects designed to empower communities,
              strengthen cooperative networks, and drive economic growth across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* NATCON Project */}
      <section className="section-padding">
        <div className="container mx-auto">
          {/* Project Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Flagship Project
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {natcon.shortName}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {natcon.title}
            </p>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              {natcon.description}
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-primary p-8 md:p-10 rounded-2xl text-primary-foreground">
              <h3 className="font-display text-2xl font-bold mb-4">Vision</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                {natcon.vision}
              </p>
            </div>
            <div className="bg-accent/10 p-8 md:p-10 rounded-2xl border border-accent/20">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {natcon.mission}
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              Core Values
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {natcon.coreValues.map((value, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary text-foreground rounded-full font-medium"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Impact Stats */}
          <div className="bg-primary rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-8 text-center">
              Project Targets
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {natcon.impact.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-primary-foreground/80 text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Objectives */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Strategic Objectives
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {natcon.objectives.map((objective, index) => (
                <div key={index} className="flex gap-3 p-4 bg-secondary rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{objective}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Phases */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Layers className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Implementation Phases
              </h3>
            </div>
            <div className="space-y-4">
              {natcon.phases.map((phase, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border shadow-soft"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                        {phase.title}
                      </h4>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Components */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Project Components
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {natcon.components.map((component, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border shadow-soft card-hover"
                >
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    {component.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {component.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Offices */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Building className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Regional Offices
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {natcon.regionalOffices.map((office, index) => (
                <div
                  key={index}
                  className="bg-card p-4 rounded-xl border border-border text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {office.region}
                  </h4>
                  <p className="text-muted-foreground text-sm">{office.location}</p>
                  {office.coordinator && (
                    <p className="text-accent text-xs mt-1">{office.coordinator}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="bg-primary rounded-2xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Partner With NATCON
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join us in building a nationwide cooperative network that empowers
              women, youth, and farmers across Nigeria.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/register">Join a Cooperative</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
