export interface Project {
  id: string;
  title: string;
  shortName: string;
  description: string;
  vision: string;
  mission: string;
  coreValues: string[];
  objectives: string[];
  phases: {
    title: string;
    description: string;
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
    description: "NATCON is a vision that networks agricultural and trade activities, particularly for women and youth at the grassroots level, through cooperative economic and management principles initiatives. NATCON's core focus is to advance and foster the vision of rural economic growth and sustainable development through cooperative societies.",
    vision: "To promote the contribution of women and youth to national economic stability and development.",
    mission: "To empower women and youth in agriculture and trade through cooperative economics and management, financial inclusion, and knowledge sharing in agribusinesses, trade linkages, and networking.",
    coreValues: [
      "Cooperative Principles",
      "Integrity",
      "Productivity",
      "Transformational Impact",
      "Teamwork",
      "Gender Equity"
    ],
    objectives: [
      "Promote cooperation, networking, collaboration, and knowledge sharing among women and youth in agriculture and trade through cooperative societies nationwide",
      "Integrate women and youth into national, regional, and global frameworks, ensuring financial inclusion and access to various benefits",
      "Enhance and promote women and youth participation in agricultural and trade activities across the country through training and retraining",
      "Provide additional services and support to SMEs to help them fulfill their visions and dreams under a national cooperative umbrella"
    ],
    phases: [
      {
        title: "Phase I: Formation of Primary Cooperatives",
        description: "Register or incorporate 10 existing Farmers Primary Cooperative Societies, each with 15 members, to form one Cooperative Union."
      },
      {
        title: "Phase II: Establishment of Cooperative Unions",
        description: "Establish one Cooperative Union in each of the three senatorial zones in each of the six states under the six regional state offices."
      },
      {
        title: "Phase III: State-Level Apex Cooperatives",
        description: "Consolidate the 30 Cooperative Unions in a state to form one state-level Cooperative Apex in each of the six geopolitical zones."
      },
      {
        title: "Phase IV: National Cooperative Federation",
        description: "Replicate the model in all 36 states and Abuja, forming a national Cooperative Federation consisting of the 37 state-level Apex cooperatives."
      },
      {
        title: "Phase V: Membership Expansion",
        description: "Scale to 16,650 members nationwide by the fifth year: 450 members x 37 states."
      }
    ],
    components: [
      {
        title: "Membership Registration & Cooperative Formation",
        description: "Meticulous registration of members and formation of cooperative societies to foster community and shared purpose."
      },
      {
        title: "Training on Cooperative Economics",
        description: "Comprehensive training programs on cooperative economics, business management, and financial inclusion."
      },
      {
        title: "Input Supply & Extension Services",
        description: "Access to quality inputs, modern farm implements, and agricultural extension services."
      },
      {
        title: "Grains Board Initiative",
        description: "Aggregation, storage, and resale of grains including maize, rice, soybeans, and other staple crops."
      },
      {
        title: "Sales & Marketing",
        description: "Facilitate sale of farm produce locally and internationally, processing and marketing of foodstuffs."
      },
      {
        title: "Trade Network",
        description: "Interstate, regional, and continental trade links for seamless movement of agricultural products."
      },
      {
        title: "Financial & Social Welfare",
        description: "Tailored financial products, savings, credit, insurance, and social welfare scheme for members."
      }
    ],
    regionalOffices: [
      { region: "Head Office", location: "Abuja" },
      { region: "North East", location: "Gombe", coordinator: "Tali Juji" },
      { region: "South East", location: "Owerri", coordinator: "Hippolite Uzoka" },
      { region: "North West", location: "Kaduna", coordinator: "Moses Bonat" },
      { region: "South West", location: "Ibadan", coordinator: "Jumoke Idowu" },
      { region: "South South", location: "Uyo", coordinator: "Asuquo Robert Jonah" },
      { region: "North Central", location: "Benue", coordinator: "Chia Sylvanus" }
    ],
    impact: [
      { label: "Target Cooperatives", value: "1,110+" },
      { label: "Cooperative Unions", value: "666" },
      { label: "Apex Cooperatives", value: "37" },
      { label: "Target Members", value: "16,650" }
    ],
    status: "active"
  }
];
