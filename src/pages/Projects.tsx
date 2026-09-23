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
  Tractor,
  Image as ImageIcon,
} from "lucide-react";

import { projects } from "@/data/projects";

const Projects = () => {
  const natcon = projects.find((p) => p.id === "natcon")!;

  return (
    <Layout>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">
              Our Projects
            </p>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Transformative Initiatives for Sustainable Development
            </h1>

            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Discover our flagship projects designed to empower communities,
              strengthen cooperative networks, and drive economic growth across
              Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          NATCON PROJECT
      ===================================================== */}
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

          {/* =====================================================
              VISION & MISSION
          ===================================================== */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">

            {/* Vision */}
            <div className="bg-primary p-8 md:p-10 rounded-2xl text-primary-foreground">
              <h3 className="font-display text-2xl font-bold mb-4">
                Vision
              </h3>

              <p className="text-primary-foreground/90 leading-relaxed">
                {natcon.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-accent/10 p-8 md:p-10 rounded-2xl border border-accent/20">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Mission
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {natcon.mission}
              </p>
            </div>
          </div>

          {/* =====================================================
              NATCON ACTIVITIES
          ===================================================== */}
          {natcon.activities.length > 0 && (
            <div className="mb-20">

              {/* Section Heading */}
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  <Tractor className="w-4 h-4" />
                  Current Programme Activities
                </span>

                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Agricultural Mechanization
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  NATCON is implementing agricultural mechanization activities
                  as part of its efforts to improve agricultural productivity
                  and strengthen access to modern farming services.
                </p>
              </div>

              {/* Activities */}
              <div className="space-y-10">

                {natcon.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-2xl overflow-hidden shadow-soft"
                  >

                    {/* Activity Header */}
                    <div className="p-6 md:p-8">

                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                        <div>
                          <div className="flex items-center gap-3 mb-3">

                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                              <Tractor className="w-6 h-6 text-primary" />
                            </div>

                            <div>
                              <h4 className="font-display text-2xl font-bold text-foreground">
                                {activity.title}
                              </h4>

                              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                <MapPin className="w-4 h-4" />
                                {activity.location}
                              </div>
                            </div>

                          </div>
                        </div>

                        {/* Status */}
                        <span
                          className={`inline-flex w-fit px-4 py-2 rounded-full text-sm font-semibold ${
                            activity.type === "pilot"
                              ? "bg-accent/15 text-accent"
                              : activity.type === "ongoing"
                              ? "bg-primary/10 text-primary"
                              : activity.type === "completed"
                              ? "bg-muted text-muted-foreground"
                              : "bg-secondary text-foreground"
                          }`}
                        >
                          {activity.type === "pilot"
                            ? "Pilot Activity"
                            : activity.type.charAt(0).toUpperCase() +
                              activity.type.slice(1)}
                        </span>

                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mt-6">
                        {activity.description}
                      </p>
                    </div>

                    {/* =================================================
                        TRACTOR IMAGE GALLERY
                    ================================================= */}
                    {activity.images &&
                      activity.images.length > 0 && (
                        <div className="px-6 md:px-8 pb-8">

                          <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                              <ImageIcon className="w-5 h-5 text-accent" />
                            </div>

                            <h5 className="font-display text-xl font-bold text-foreground">
                              Agricultural Mechanization in Action
                            </h5>
                          </div>

                          {/* Image Grid */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                            {activity.images.map(
                              (image, imageIndex) => (
                                <div
                                  key={imageIndex}
                                  className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-muted"
                                >

                                  <img
                                    src={image}
                                    alt={`${activity.title} ${
                                      imageIndex + 1
                                    }`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                  />

                                  {/* Image Overlay */}
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                </div>
                              )
                            )}

                          </div>
                        </div>
                      )}

                    {/* =================================================
                        ACTIVITY OBJECTIVES
                    ================================================= */}
                    <div className="bg-secondary/50 px-6 md:px-8 py-8">

                      <h5 className="font-display text-xl font-bold text-foreground mb-5">
                        Activity Objectives
                      </h5>

                      <div className="grid md:grid-cols-2 gap-4">

                        {activity.objectives.map(
                          (objective, objectiveIndex) => (
                            <div
                              key={objectiveIndex}
                              className="flex gap-3"
                            >
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />

                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {objective}
                              </p>
                            </div>
                          )
                        )}

                      </div>
                    </div>

                  </div>
                ))}

              </div>
            </div>
          )}

          {/* =====================================================
              CORE VALUES
          ===================================================== */}
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

          {/* =====================================================
              IMPACT STATS
          ===================================================== */}
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

          {/* =====================================================
              STRATEGIC OBJECTIVES
          ===================================================== */}
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
                <div
                  key={index}
                  className="flex gap-3 p-4 bg-secondary rounded-lg"
                >

                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />

                  <p className="text-muted-foreground">
                    {objective}
                  </p>

                </div>
              ))}

            </div>
          </div>

          {/* =====================================================
              PROJECT PHASES
       

          {/* =====================================================
              PROJECT COMPONENTS
          ===================================================== */}
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

          {/* =====================================================
              REGIONAL OFFICES
          ===================================================== */}
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

                  <p className="text-muted-foreground text-sm">
                    {office.location}
                  </p>

                  {office.coordinator && (
                    <p className="text-accent text-xs mt-1">
                      {office.coordinator}
                    </p>
                  )}

                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="section-padding bg-secondary">

        <div className="container mx-auto">

          <div className="bg-primary rounded-2xl p-8 md:p-12 lg:p-16 text-center">

            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Partner With NATCON
            </h2>

            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join us in building a nationwide cooperative network that
              empowers women, youth, and farmers across Nigeria.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight size={20} />
                </Link>
              </Button>

              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/register">
                  Join a Cooperative
                </Link>
              </Button>

            </div>

          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Projects;