import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { strategicPillars, visionStatement } from "@/data/strategicPillars";

const StrategicPillars = () => {
  return (
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
              className="group bg-card p-6 rounded-xl border border-border shadow-soft card-hover"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  pillar.color === "primary"
                    ? "bg-primary/10 group-hover:bg-primary/20"
                    : "bg-accent/10 group-hover:bg-accent/20"
                }`}
              >.
                <pillar.icon
                  className={`w-7 h-7 ${
                    pillar.color === "primary" ? "text-primary" : "text-accent"
                  }`}
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {pillar.shortTitle}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {pillar.description}
              </p>
              <div className="space-y-1.5">
                {pillar.objectives.slice(0, 2).map((objective, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                        pillar.color === "primary" ? "bg-primary" : "bg-accent"
                      }`}
                    />
                    <p className="text-muted-foreground text-xs">{objective}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link to="/about">
              Learn More About Our Vision
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StrategicPillars;
