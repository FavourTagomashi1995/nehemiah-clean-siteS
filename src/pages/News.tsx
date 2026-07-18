import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, ArrowRight, User } from "lucide-react";
import cooperativeSummit from "@/assets/cooperative-summit.jpg";
import teamConference from "@/assets/team-conference.jpg";
import youthDelegates from "@/assets/youth-delegates.jpg";
import groupPhoto from "@/assets/group-photo.jpg";

interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image_url: string | null;
  category: string;
  author_name: string | null;
  published_at: string | null;
  created_at: string;
}

// Fallback news data when database is empty
const fallbackNews: Omit<NewsArticle, 'id'>[] = [
  {
    title: "9th National Cooperative Summit & Exhibition",
    slug: "9th-national-cooperative-summit",
    excerpt: "Nehemiah Foundation participated in the 9th National Cooperative Summit themed 'Cooperatives Working Together for a Better Nation' held in Jos, Plateau State.",
    content: "The foundation joined cooperative leaders from across Nigeria to discuss strategies for strengthening cooperative societies and promoting economic development.",
    featured_image_url: null,
    category: "events",
    author_name: "NFI Communications",
    published_at: "2025-10-15T10:00:00Z",
    created_at: "2025-10-15T10:00:00Z",
  },
  {
    title: "National PCVE Summit 2025 Participation",
    slug: "national-pcve-summit-2025",
    excerpt: "Our team attended the National PCVE Summit 2025, engaging with stakeholders on preventing violent extremism through community empowerment.",
    content: "The summit provided an opportunity to share our approach to community development and youth empowerment as tools for building resilient communities.",
    featured_image_url: null,
    category: "events",
    author_name: "NFI Communications",
    published_at: "2025-09-20T10:00:00Z",
    created_at: "2025-09-20T10:00:00Z",
  },
  {
    title: "Youth Empowerment Workshop Success",
    slug: "youth-empowerment-workshop",
    excerpt: "Over 50 young people completed our intensive tech skills training program, gaining valuable digital skills for the modern economy.",
    content: "The workshop covered web development, digital marketing, and data analysis, equipping participants with marketable skills.",
    featured_image_url: null,
    category: "success-stories",
    author_name: "NFI Training Team",
    published_at: "2025-08-10T10:00:00Z",
    created_at: "2025-08-10T10:00:00Z",
  },
  {
    title: "Partnership Meeting with Government Officials",
    slug: "government-partnership-meeting",
    excerpt: "Foundation leadership met with key government officials to discuss expanding agricultural training programs across northern Nigeria.",
    content: "The meeting resulted in commitments to support 10 new cooperative societies with training and resources.",
    featured_image_url: null,
    category: "news",
    author_name: "NFI Communications",
    published_at: "2025-07-05T10:00:00Z",
    created_at: "2025-07-05T10:00:00Z",
  },
];

const categoryImages: Record<number, string> = {
  0: cooperativeSummit,
  1: youthDelegates,
  2: groupPhoto,
  3: teamConference,
};

const News = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data, error } = await supabase
          .from("news_articles")
          .select("*")
          .eq("is_published", true)
          .order("published_at", { ascending: false });

        if (error) throw error;
        
        if (data && data.length > 0) {
          setArticles(data);
        } else {
          // Use fallback data if no articles in database
          setArticles(fallbackNews.map((article, index) => ({
            ...article,
            id: `fallback-${index}`,
          })));
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
        // Use fallback data on error
        setArticles(fallbackNews.map((article, index) => ({
          ...article,
          id: `fallback-${index}`,
        })));
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-NG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      news: "News",
      events: "Events",
      "success-stories": "Success Stories",
      announcements: "Announcements",
    };
    return labels[category] || category;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">News & Stories</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Latest News & Success Stories
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Stay updated with our latest activities, events, and inspiring
              stories from the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-muted h-48 rounded-t-2xl" />
                  <div className="bg-card p-6 rounded-b-2xl border border-border">
                    <div className="h-4 bg-muted rounded w-1/4 mb-3" />
                    <div className="h-6 bg-muted rounded w-3/4 mb-3" />
                    <div className="h-4 bg-muted rounded w-full mb-2" />
                    <div className="h-4 bg-muted rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <article
                  key={article.id}
                  className="group bg-card rounded-2xl overflow-hidden border border-border shadow-soft card-hover"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.featured_image_url || categoryImages[index % 4]}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                        {getCategoryLabel(article.category)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.published_at || article.created_at)}
                      </span>
                      {article.author_name && (
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.author_name}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {article.excerpt || article.content.substring(0, 150)}
                    </p>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {!loading && articles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No news articles available at the moment. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Want to Be Part of Our Story?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Join our training programs and become the next success story. Or
              partner with us to create lasting impact in communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" asChild>
                <Link to="/register">
                  Register for Training
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
