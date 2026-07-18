import { Layout } from "@/components/layout/Layout";

type GalleryGroup = {
  caption: string;
  description: string;
  images: { src: string; alt: string }[];
};

const galleryGroups: GalleryGroup[] = [
  {
    caption: "National Agribusiness BDSP Curriculum Development",
    description:
      "The Executive Director of NFI is an Agribusiness Development Service Provider (BDSP) and a key contributor to the development of the National Agribusiness Curriculum for Nigeria's agricultural sector.",
    images: [
      { src: "/gallery/bdsp-1.jpg", alt: "National Agric BDSP curriculum development session" },
      { src: "/gallery/bdsp-2.jpg", alt: "BDSP curriculum stakeholders meeting" },
      { src: "/gallery/bdsp-3.jpg", alt: "BDSP working group" },
    ],
  },
  {
    caption: "PCVE-KIRH Engagements with GCERF Funding Support",
    description:
      "NFI actively participates in training programs and engagements organized by PCVE-KIRH, with funding support from GCERF, aimed at combating violent extremism and banditry through knowledge sharing and sustainable livelihood development at the grassroots level.",
    images: [
      { src: "/gallery/pcve-1.jpg", alt: "PCVE-KIRH National Summit" },
      { src: "/gallery/pcve-2.jpg", alt: "PCVE-KIRH engagement session" },
      { src: "/gallery/pcve-3.jpg", alt: "PCVE-KIRH participants" },
      { src: "/gallery/gcerf-1.jpg", alt: "GCERF supported activity" },
      { src: "/gallery/gcerf-2.jpg", alt: "GCERF community engagement" },
      { src: "/gallery/gcerf-3.jpg", alt: "GCERF programme" },
    ],
  },
  {
    caption: "Principal Consultant to the Nigeria Youth Congress (NYC)",
    description:
      "NFI serves as the Principal Consultant to the Nigeria Youth Congress (NYC). This strategic collaboration is focused on creating millions of job opportunities for young people across the country.",
    images: [
      { src: "/gallery/nyc-1.jpg", alt: "Signing of agreement with Nigerian Youth Congress" },
      { src: "/gallery/nyc-2.jpg", alt: "NFI and NYC partnership" },
      { src: "/gallery/nyc-3.jpg", alt: "NYC training collaboration" },
    ],
  },
  {
    caption: "Cooperative Mapping & Capacity Building in the North-West",
    description:
      "NFI conducted a comprehensive mapping and analysis of cooperative societies in Nigeria's North-West region, focusing on livelihood and social entrepreneurship development. The study examined the roles, responsibilities, challenges, and limitations of cooperative departments, while identifying opportunities to strengthen capacity. Plans are underway to scale this initiative nationwide.",
    images: [
      { src: "/gallery/coopmap-1.jpg", alt: "Enlightenment program with cooperative leaders, Kaduna" },
      { src: "/gallery/coopmap-2.jpg", alt: "Engagement with KD cooperative department" },
      { src: "/gallery/coopcap-1.jpg", alt: "Capacity building workshop for cooperative leaders" },
      { src: "/gallery/coopcap-2.jpg", alt: "Cooperative leaders workshop" },
      { src: "/gallery/coopsummit-1.jpg", alt: "National Summit – Cooperative Federation of Nigeria" },
      { src: "/gallery/coopsummit-2.jpg", alt: "National Cooperative Summit participants" },
    ],
  },
  {
    caption: "Empowering Youth & Women in Agribusiness, ICT and Entrepreneurship",
    description:
      "NFI is committed to training and empowering youth and women in agribusiness, ICT, and entrepreneurship. Through grassroots-focused programs, the organization promotes cooperative economics and management principles, social entrepreneurship, and BDSP to drive sustainable development.",
    images: [
      { src: "/gallery/farmers-1.jpg", alt: "Engagement with farmers on supply of inputs in Soba LGA" },
      { src: "/gallery/farmers-2.jpg", alt: "Farmer engagement Soba LGA, Kaduna State" },
      { src: "/gallery/barley-1.jpg", alt: "Pilot scheme dry season barley farming" },
      { src: "/gallery/barley-2.jpg", alt: "Dry season barley farming pilot" },
      { src: "/gallery/stafftrain-1.jpg", alt: "NFI staff training facilitated by Tochukwu Emmanuel and Annah Koko" },
      { src: "/gallery/stafftrain-2.jpg", alt: "NFI staff training program" },
      { src: "/gallery/action-1.jpg", alt: "NFI grassroots action" },
      { src: "/gallery/action-2.jpg", alt: "NFI community activity" },
      { src: "/gallery/tandem-1.jpg", alt: "Visit of Tandem partners from UK and China to Niger State" },
      { src: "/gallery/tandem-2.jpg", alt: "Tandem partners visit, Niger State" },
    ],
  },
];

const Gallery = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4">Gallery</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Some of the Activities of NFI
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              A glimpse into our trainings, engagements, partnerships and grassroots
              initiatives across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {galleryGroups.map((group, idx) => (
        <section
          key={group.caption}
          className={`section-padding ${idx % 2 === 1 ? "bg-secondary" : ""}`}
        >
          <div className="container mx-auto">
            <div className="max-w-3xl mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                {group.caption}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {group.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.images.map((img) => (
                <figure
                  key={img.src}
                  className="bg-card rounded-xl overflow-hidden border border-border shadow-soft card-hover"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-64 object-cover"
                  />
                  <figcaption className="p-4 text-sm text-muted-foreground">
                    {img.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default Gallery;