import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sprout,
  Users,
  Tractor,
  TrendingUp,
  Handshake,
  Leaf,
  CheckCircle,
} from "lucide-react";

const consultancyAreas = [
  {
    icon: Sprout,
    title: "Agricultural Consultancy",
    description:
      "We provide practical agricultural support to individuals, farmers, groups, and organizations to improve productivity, income generation, and sustainable farming practices.",
  },
  {
    icon: Users,
    title: "Cooperative Consultancy",
    description:
      "We support the formation, strengthening, and development of cooperatives through capacity building, cooperative economics, social entrepreneurship, and sustainable livelihood strategies.",
  },
  {
    icon: Tractor,
    title: "Tractorization & Mechanization",
    description:
      "We support farmers and agricultural groups with tractorization and farm mechanization services to improve access to modern farming methods and increase agricultural productivity.",
  },
];

const consultancyServices = [
  "Agricultural project planning and development",
  "Farmer and cooperative capacity building",
  "Cooperative development and strengthening",
  "Agribusiness and income-generation support",
  "Social entrepreneurship development",
  "Farm mechanization and tractorization support",
  "Sustainable agriculture and livelihood development",
  "Technical guidance for agricultural initiatives",
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
              <span className="text-sm font-medium">
                Agriculture & Cooperative Consultancy
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Strengthening Agriculture, Cooperatives & Rural Livelihoods
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              We provide practical consultancy and development support in
              agriculture, cooperative development, social entrepreneurship,
              and tractorization to help individuals, farmers, cooperatives,
              and communities achieve sustainable economic growth.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request Consultancy
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

      {/* Introduction */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium mb-3">
              Our Consultancy
            </p>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Practical Solutions for Sustainable Development
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Our consultancy focuses on strengthening individuals,
              cooperatives, farmers, organizations, and communities with the
              knowledge, skills, and support needed to improve agricultural
              productivity, develop sustainable enterprises, and create
              lasting economic opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Consultancy Areas */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium mb-3">
              What We Do
            </p>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Consultancy Areas
            </h2>

            <p className="text-muted-foreground text-lg">
              Our services focus on three key areas that support agricultural
              and economic development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {consultancyAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <div
                  key={index}
                  className="bg-card p-7 rounded-2xl border border-border shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">
                    {area.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Agriculture */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Sprout className="w-7 h-7 text-primary" />
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Agricultural Consultancy
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We provide guidance and development support for farmers,
                agricultural groups, cooperatives, and organizations seeking
                to improve farming practices, productivity, market
                opportunities, and sustainable livelihoods.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Our approach connects agricultural production with
                entrepreneurship, cooperative participation, and income
                generation.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Agricultural Support
              </h3>

              <div className="space-y-4">
                {[
                  "Agricultural project development",
                  "Farmer capacity development",
                  "Agribusiness support",
                  "Sustainable farming practices",
                  "Market and livelihood development",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cooperative */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-primary rounded-2xl p-8 md:p-10 text-primary-foreground">
              <Users className="w-12 h-12 text-accent mb-6" />

              <h3 className="font-display text-2xl md:text-3xl font-bold mb-5">
                Cooperative Development
              </h3>

              <p className="text-primary-foreground/80 leading-relaxed">
                We help individuals and groups understand cooperative
                economics, strengthen their organizations, develop income
                generating activities, and build sustainable enterprises
                through collective action.
              </p>
            </div>

            <div>
              <p className="text-primary font-medium mb-3">
                Cooperative Consultancy
              </p>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building Stronger Cooperatives
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our cooperative consultancy supports groups and organizations
                with the knowledge and skills needed to manage resources,
                strengthen participation, generate income, and create
                sustainable economic opportunities.
              </p>

              <div className="space-y-3">
                {[
                  "Cooperative development",
                  "Social entrepreneurship",
                  "Financial management awareness",
                  "Income-generation strategies",
                  "Capacity building and sustainability",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tractorization */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Tractor className="w-8 h-8 text-primary" />
            </div>

            <p className="text-primary font-medium mb-3">
              Agricultural Mechanization
            </p>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Tractorization & Farm Mechanization
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We support farmers, cooperatives, and agricultural organizations
              in accessing tractorization and mechanization opportunities to
              improve farm operations, expand cultivated areas, reduce manual
              labour, and improve agricultural productivity.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Tractor,
                  title: "Farm Mechanization",
                },
                {
                  icon: TrendingUp,
                  title: "Improved Productivity",
                },
                {
                  icon: Leaf,
                  title: "Sustainable Agriculture",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="bg-card p-5 rounded-xl border border-border"
                  >
                    <Icon className="w-7 h-7 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-primary font-medium mb-3">
                Our Services
              </p>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                How We Can Support You
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {consultancyServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-secondary p-4 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="bg-primary rounded-2xl p-8 md:p-12 lg:p-16 text-center">
            <Handshake className="w-12 h-12 text-accent mx-auto mb-5" />

            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need Agricultural or Cooperative Support?
            </h2>

            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Talk to us about your agricultural project, cooperative,
              agribusiness, or tractorization needs.
            </p>

            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Request Consultancy
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Consultancy;