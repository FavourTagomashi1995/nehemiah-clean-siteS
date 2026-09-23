import tractor1 from "../assets/image/tractor1.jpg";
import tractor2 from "../assets/image/tractor2.jpg";
import tractor3 from "../assets/image/tractor3.jpg";
import tractor4 from "../assets/image/tractor4.jpg";

export interface Project {
  id: string;
  title: string;
  shortName: string;
  description: string;
  vision: string;
  mission: string;

  coreValues: string[];

  objectives: string[];

  activities: {
    title: string;
    type: "pilot" | "ongoing" | "completed" | "upcoming";
    location: string;
    description: string;
    objectives: string[];
    images?: string[];
  }[];

  components: {
    title: string;
    description: string;
  }[];

  regionalOffices: {
    region: string;
    location: string;
    coordinator?: string;
  }[];

  impact: {
    label: string;
    value: string;
  }[];

  status: "active" | "upcoming" | "completed";
}

export const projects: Project[] = [
  {
    id: "natcon",

    title: "National Agricultural and Trade Cooperative Network",

    shortName: "NATCON",

    description:
      "NATCON is a vision that networks agricultural and trade activities, particularly for women and youth at the grassroots level, through cooperative economic and management principles initiatives. NATCON's core focus is to advance and foster the vision of rural economic growth and sustainable development through cooperative societies.",

    vision:
      "To promote the contribution of women and youth to national economic stability and development.",

    mission:
      "To empower women and youth in agriculture and trade through cooperative economics and management, financial inclusion, and knowledge sharing in agribusinesses, trade linkages, and networking.",

    coreValues: [
      "Cooperative Principles",
      "Integrity",
      "Productivity",
      "Transformational Impact",
      "Teamwork",
      "Gender Equity",
    ],

    objectives: [
      "Promote cooperation, networking, collaboration, and knowledge sharing among women and youth in agriculture and trade through cooperative societies nationwide",

      "Integrate women and youth into national, regional, and global frameworks, ensuring financial inclusion and access to various benefits",

      "Enhance and promote women and youth participation in agricultural and trade activities across the country through training and retraining",

      "Provide additional services and support to SMEs to help them fulfill their visions and dreams under a national cooperative umbrella",
    ],

    activities: [
      {
        title: "Agricultural Mechanization & Tractorization Pilot Scheme",

        type: "pilot",

        location: "Samaru Kataf, Southern Kaduna",

        description:
          "A pilot agricultural mechanization and tractorization initiative under NATCON aimed at improving farmers' access to tractor services and modern farm machinery in Southern Kaduna. The initiative supports timely land preparation, improves farming efficiency, reduces dependence on manual labour, and strengthens agricultural productivity through cooperative-based access to mechanization services.",

        images: [
          tractor1,
          tractor2,
          tractor3,
          tractor4,
        ],

        objectives: [
          "Improve access to tractor services for farmers and cooperative members",

          "Support timely land preparation and cultivation",

          "Reduce the burden of manual farm labour",

          "Increase agricultural productivity and efficiency",

          "Promote cooperative-based access to agricultural machinery",

          "Support women and youth participating in agricultural production",

          "Generate practical lessons for expanding agricultural mechanization to other regions",
        ],
      },
    ],

    components: [
      {
        title: "Membership Registration & Cooperative Formation",

        description:
          "Meticulous registration of members and formation of cooperative societies to foster community and shared purpose.",
      },

      {
        title: "Training on Cooperative Economics",

        description:
          "Comprehensive training programs on cooperative economics, business management, and financial inclusion.",
      },

      {
        title: "Input Supply & Extension Services",

        description:
          "Access to quality inputs, modern farm implements, and agricultural extension services.",
      },

      {
        title: "Grains Board Initiative",

        description:
          "Aggregation, storage, and resale of grains including maize, rice, soybeans, and other staple crops.",
      },

      {
        title: "Sales & Marketing",

        description:
          "Facilitate sale of farm produce locally and internationally, processing and marketing of foodstuffs.",
      },

      {
        title: "Trade Network",

        description:
          "Interstate, regional, and continental trade links for seamless movement of agricultural products.",
      },

      {
        title: "Financial & Social Welfare",

        description:
          "Tailored financial products, savings, credit, insurance, and social welfare scheme for members.",
      },
    ],

    regionalOffices: [
      {
        region: "Head Office",
        location: "Abuja",
      },

      {
        region: "North East",
        location: "Gombe",
      },

      {
        region: "South East",
        location: "Owerri",
      },

      {
        region: "North West",
        location: "Kaduna",
      },

      {
        region: "South West",
        location: "Ibadan",
      },

      {
        region: "South South",
        location: "Uyo",
      },

      {
        region: "North Central",
        location: "Benue",
      },
    ],

    impact: [
      {
        label: "Target Cooperatives",
        value: "1,110+",
      },

      {
        label: "Cooperative Unions",
        value: "666",
      },

      {
        label: "Apex Cooperatives",
        value: "37",
      },

      {
        label: "Target Members",
        value: "16,650",
      },
    ],

    status: "active",
  },
];