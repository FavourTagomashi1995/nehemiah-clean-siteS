import { Layout } from "@/components/layout/Layout";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryGroup = {
  caption: string;
  description: string;
  images: GalleryImage[];
};

const galleryImage = (name: string, alt: string): GalleryImage => ({
  src: `/gallery/${name}`,
  alt,
});

const galleryGroups: GalleryGroup[] = [
  {
    caption: "National Agribusiness BDSP Curriculum Development",
    description:
      "The Executive Director of NFI is an Agribusiness Development Service Provider (BDSP) and a key contributor to the development of the National Agribusiness Curriculum for Nigeria's agricultural sector.",
    images: [
      galleryImage(
        "bdsp-1.jpg",
        "National Agric BDSP curriculum development session"
      ),
      galleryImage(
        "bdsp-2.jpg",
        "BDSP curriculum stakeholders meeting"
      ),
      galleryImage("bdsp-3.jpg", "BDSP working group"),
    ],
  },

  {
    caption: "PCVE-KIRH Engagements with GCERF Funding Support",
    description:
      "NFI actively participates in training programs and engagements organized by PCVE-KIRH, with funding support from GCERF, aimed at combating violent extremism and banditry through knowledge sharing and sustainable livelihood development at the grassroots level.",
    images: [
      galleryImage("pcve-1.jpg", "PCVE-KIRH National Summit"),
      galleryImage("pcve-2.jpg", "PCVE-KIRH engagement session"),
      galleryImage("pcve-3.jpg", "PCVE-KIRH participants"),
      galleryImage("gcerf-1.jpg", "GCERF supported activity"),
      galleryImage("gcerf-2.jpg", "GCERF community engagement"),
      galleryImage("gcerf-3.jpg", "GCERF programme"),
    ],
  },

  {
    caption: "Principal Consultant to the Nigeria Youth Congress (NYC)",
    description:
      "NFI serves as the Principal Consultant to the Nigeria Youth Congress (NYC). This strategic collaboration is focused on creating millions of job opportunities for young people across the country.",
    images: [
      galleryImage(
        "nyc-1.jpg",
        "Signing of agreement with Nigerian Youth Congress"
      ),
      galleryImage("nyc-2.jpg", "NFI and NYC partnership"),
      galleryImage("nyc-3.jpg", "NYC training collaboration"),
    ],
  },

  {
    caption: "Cooperative Mapping & Capacity Building in the North-West",
    description:
      "NFI conducted a comprehensive mapping and analysis of cooperative societies in Nigeria's North-West region, focusing on livelihood and social entrepreneurship development. The study examined the roles, responsibilities, challenges, and limitations of cooperative departments, while identifying opportunities to strengthen capacity. Plans are underway to scale this initiative nationwide.",
    images: [
      galleryImage(
        "coopmap-1.jpg",
        "Enlightenment program with cooperative leaders, Kaduna"
      ),
      galleryImage(
        "coopmap-2.jpg",
        "Engagement with KD cooperative department"
      ),
      galleryImage(
        "coopcap-1.jpg",
        "Capacity building workshop for cooperative leaders"
      ),
      galleryImage(
        "coopcap-2.jpg",
        "Cooperative leaders workshop"
      ),
      galleryImage(
        "coopsummit-1.jpg",
        "National Summit – Cooperative Federation of Nigeria"
      ),
      galleryImage(
        "coopsummit-2.jpg",
        "National Cooperative Summit participants"
      ),
    ],
  },

  {
    caption: "Empowering Youth & Women in Agribusiness, ICT and Entrepreneurship",
    description:
      "NFI is committed to training and empowering youth and women in agribusiness, ICT, and entrepreneurship. Through grassroots-focused programs, the organization promotes cooperative economics and management principles, social entrepreneurship, and BDSP to drive sustainable development.",
    images: [
      galleryImage(
        "farmers-1.jpg",
        "Engagement with farmers on supply of inputs in Soba LGA"
      ),
      galleryImage(
        "farmers-2.jpg",
        "Farmer engagement Soba LGA, Kaduna State"
      ),
      galleryImage(
        "barley-1.jpg",
        "Pilot scheme dry season barley farming"
      ),
      galleryImage(
        "barley-2.jpg",
        "Dry season barley farming pilot"
      ),
      galleryImage(
        "stafftrain-1.jpg",
        "NFI staff training facilitated by Tochukwu Emmanuel and Annah Koko"
      ),
      galleryImage(
        "stafftrain-2.jpg",
        "NFI staff training program"
      ),
      galleryImage("action-1.jpg", "NFI grassroots action"),
      galleryImage("action-2.jpg", "NFI community activity"),
      galleryImage(
        "tandem-1.jpg",
        "Visit of Tandem partners from UK and China to Niger State"
      ),
      galleryImage(
        "tandem-2.jpg",
        "Tandem partners visit, Niger State"
      ),
    ],
  },
];

const Gallery = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-24 md:py-32">
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-accent" />

            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
              Our Gallery
            </p>

            <h1 className="mb-6 font-display text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Some of the Activities of NFI
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
              A glimpse into our trainings, engagements, partnerships and
              grassroots initiatives across Nigeria.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </section>

      {/* Gallery Sections */}
      <main>
        {galleryGroups.map((group, idx) => (
          <section
            key={group.caption}
            className={`section-padding ${
              idx % 2 === 1 ? "bg-secondary" : "bg-background"
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="mx-auto mb-10 max-w-4xl text-center">
                <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-accent" />

                <h2 className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">
                  {group.caption}
                </h2>

                <p className="leading-relaxed text-muted-foreground">
                  {group.description}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.images.map((img) => (
                  <figure
                    key={img.src}
                    className="group overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    <figcaption className="p-4">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {img.alt}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
    </Layout>
  );
};

export default Gallery;