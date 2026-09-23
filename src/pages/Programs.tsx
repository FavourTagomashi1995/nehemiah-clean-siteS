import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  HandCoins,
  TrendingUp,
  ShieldCheck,
  Handshake,
  Sprout,
} from "lucide-react";

const Programs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">
              Cooperative Development
            </p>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Building Stronger Communities Through Cooperatives
            </h1>

            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              We support individuals and communities to come together through
              cooperatives, promoting collective economic participation,
              income generation, social entrepreneurship, and sustainable
              livelihoods.
            </p>
          </div>
        </div>
      </section>

      {/* What Is a Cooperative? */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium mb-3">
                Understanding Cooperatives
              </p>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                What Is a Cooperative?
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                A cooperative is a group of people who voluntarily come
                together to achieve shared economic and social goals through
                collective effort.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Members contribute, participate in decision-making, share
                opportunities, and work together to improve their livelihoods
                and strengthen their communities.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 md:p-10">
              <Users className="w-12 h-12 text-primary mb-5" />

              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Strength in Collective Action
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Cooperatives create opportunities for members to combine
                resources, knowledge, skills, and ideas to achieve goals that
                may be difficult to achieve individually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Importance of Cooperatives */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-medium mb-3">
              Why Cooperatives Matter
            </p>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Benefits of Cooperative Membership
            </h2>

            <p className="text-muted-foreground text-lg">
              Cooperatives help individuals and communities create sustainable
              economic opportunities through collective participation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: HandCoins,
                title: "Access to Resources",
                description:
                  "Members can combine resources and improve access to financial and economic opportunities.",
              },
              {
                icon: TrendingUp,
                title: "Income Generation",
                description:
                  "Cooperatives support members in developing sustainable income-generating activities.",
              },
              {
                icon: Handshake,
                title: "Collective Strength",
                description:
                  "Working together creates stronger opportunities for members and their communities.",
              },
              {
                icon: ShieldCheck,
                title: "Shared Responsibility",
                description:
                  "Members participate in decisions and share responsibility for the success of the cooperative.",
              },
              {
                icon: Sprout,
                title: "Sustainable Livelihoods",
                description:
                  "Cooperative activities can help members build more sustainable livelihoods.",
              },
              {
                icon: Users,
                title: "Community Development",
                description:
                  "Strong cooperatives contribute to economic participation and community development.",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border shadow-soft"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Support */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-3">
              Cooperative Support
            </p>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Supporting Members to Grow Together
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We support cooperative members with knowledge, capacity
              development, social entrepreneurship, financial awareness, and
              income-generation opportunities that promote sustainable
              livelihoods.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "Cooperative membership and participation",
                "Income-generating activities",
                "Social entrepreneurship",
                "Financial management awareness",
                "Cooperative capacity development",
                "Sustainable livelihood opportunities",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-secondary p-4 rounded-lg"
                >
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-3">
              Join the Cooperative
            </p>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
              Who Can Join?
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Individuals and groups interested in collective economic
              participation, entrepreneurship, agriculture, income generation,
              and community development can express their interest in joining
              the cooperative.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Farmers",
                "Youth",
                "Women",
                "Entrepreneurs",
                "Small Business Owners",
                "Community Groups",
              ].map((group) => (
                <span
                  key={group}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground"
                >
                  {group}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="bg-primary rounded-2xl p-8 md:p-12 lg:p-16 text-center">
            <Users className="w-12 h-12 text-accent mx-auto mb-5" />

            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Interested in Joining Our Cooperative?
            </h2>

            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Become part of a community working together to create economic
              opportunities, strengthen livelihoods, and promote sustainable
              development.
            </p>

            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Join the Cooperative
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;