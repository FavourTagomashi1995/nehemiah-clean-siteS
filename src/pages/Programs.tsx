import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Award, Users, BookOpen } from "lucide-react";
// import { courseCategories } from "@/data/courses";
import trainingImage from "@/assets/image1.jpg";
import techImage from "@/assets/image2.jpg";
import businessImage from "@/assets/image3.jpg";
import vocationalImage from "@/assets/image4.jpg"; // optional (or reuse image1)

const categoryImages: Record<string, string> = {
  agriculture: trainingImage,
  tech: techImage,
  business: businessImage,
  vocational: vocationalImage || trainingImage, // fallback
};

const trainingFeatures = [
  {
    icon: Clock,
    title: "Flexible Duration",
    description: "Short courses (2-4 weeks) and professional courses (2-3 months)",
  },
  {
    icon: BookOpen,
    title: "Practical Learning",
    description: "Hands-on training with real-world applications",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Receive certificates upon successful completion",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from experienced professionals in each field",
  },
];

const Programs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">Programs & Projects — NATCON</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              National Cooperative Network Programs
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Comprehensive skill acquisition programs in agriculture, technology,
              business, and cooperative development designed to empower you for economic
              sustainability. Register for personalized coaching experience tailored through 
              guidance on cooperative economics and social entrepreneurship.
            </p>
          </div>
        </div>
      </section>

      {/* Training Features */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trainingFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-xs">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Categories */}
      {/* <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Course Categories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from our wide range of training programs designed to meet your needs
              and career goals.
            </p>
          </div>

          <div className="space-y-16">
            {courseCategories.map((category, categoryIndex) => (
              <div key={category.id} className="scroll-mt-24" id={category.id}>
                <div
                  className={`grid lg:grid-cols-2 gap-8 items-start ${
                    categoryIndex % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={categoryIndex % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-card">
                      <img
                        src={categoryImages[category.id] || trainingImage}
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {category.courses.length} Courses Available
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={categoryIndex % 2 === 1 ? "lg:order-1" : ""}>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Comprehensive training programs designed to equip you with practical
                      skills for sustainable livelihoods and career advancement.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {category.courses.slice(0, 8).map((course) => (
                        <div
                          key={course.id}
                          className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary p-3 rounded-lg"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="line-clamp-1">{course.name}</span>
                        </div>
                      ))}
                    </div>

                    {category.courses.length > 8 && (
                      <p className="text-sm text-muted-foreground mb-4">
                        + {category.courses.length - 8} more courses available
                      </p>
                    )}

                    <Button asChild>
                      <Link to="/register">
                        Register for {category.name}
                        <ArrowRight size={18} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Training Levels */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Training Levels
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our programs are structured to accommodate learners at different skill levels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                level: "Beginner",
                duration: "2-4 weeks",
                description:
                  "Perfect for those new to the field. Learn foundational concepts and basic skills.",
              },
              {
                level: "Intermediate",
                duration: "4-8 weeks",
                description:
                  "Build on existing knowledge with advanced techniques and practical applications.",
              },
              {
                level: "Advanced",
                duration: "2-3 months",
                description:
                  "Master-level training for professionals seeking specialized expertise.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border shadow-soft text-center"
              >
                <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
                  {item.level}
                </span>
                <p className="text-accent font-semibold mb-2">{item.duration}</p>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="bg-primary rounded-2xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Register today and take the first step towards acquiring new skills for a
              sustainable livelihood.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/register">
                Register Now
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
