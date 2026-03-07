import type { IconType } from "react-icons";
import {
  FaHome,
  FaChartLine,
  // FaBalanceScale,
  FaKey,
  // FaMapMarkerAlt,
  // FaMoneyBillWave,
  // FaFileContract,
  // FaRedo,
  // FaBuilding,
  // FaLayerGroup,
  // FaSearch,
  FaHandshake,
} from "react-icons/fa";

export type CoreValue = {
  id: number;
  title: string;
  desc: string;
  icon: IconType;
};

export const servicesCards: CoreValue[] = [
  {
    id: 1,
    title: "Luxury Property Sales",
    desc:
      "Market analysis and pricing strategy. Professional photography and staging. Qualified buyer networking. Negotiation and closing support.",
    icon: FaHome,
  },
  {
    id: 2,
    title: "Investment Consulting",
    desc:
      "ROI analysis and projections. Market trend evaluation. Portfolio diversification strategy. Tax optimization guidance.",
    icon: FaChartLine,
  },
  // {
  //   id: 3,
  //   title: "Property Valuation",
  //   desc:
  //     "Comprehensive market analysis. Detailed valuation reports. Investment grade assessments. Insurance and tax valuations.",
  //   icon: FaBalanceScale,
  // },
  {
    id: 4,
    title: "Property Management",
    desc:
      "Tenant screening and placement. Rent collection and accounting. Maintenance coordination. Regular property inspections.",
    icon: FaKey,
  },
  // {
  //   id: 5,
  //   title: "Market Analysis",
  //   desc:
  //     "Neighborhood trend analysis. Demographic studies. Price trend forecasting. Development impact assessment.",
  //   icon: FaMapMarkerAlt,
  // },
  // {
  //   id: 6,
  //   title: "Buyer Representation",
  //   desc:
  //     "Exclusive property sourcing. Negotiation representation. Due diligence support. Closing coordination.",
  //   icon: FaMoneyBillWave,
  // },
  // {
  //   id: 7,
  //   title: "Mortgage & Financing",
  //   desc:
  //     "Loan pre-qualification. Lender network access. Rate comparison analysis. Application support.",
  //   icon: FaFileContract,
  // },
  // {
  //   id: 8,
  //   title: "Legal & Documentation",
  //   desc:
  //     "Contract review and drafting. Title and escrow coordination. Compliance verification. Risk assessment.",
  //   icon: FaRedo,
  // },


  // {
  //   id: 9,
  //   title: "Commercial Real Estate",
  //   desc:
  //     "Office and retail leasing solutions. Commercial site selection. Investment feasibility studies. Contract negotiation support.",
  //   icon: FaBuilding,
  // },
  // {
  //   id: 10,
  //   title: "Project Development Advisory",
  //   desc:
  //     "Project feasibility studies. Concept development planning. Cost estimation and budgeting. Development lifecycle management.",
  //   icon: FaLayerGroup,
  // },
  // {
  //   id: 11,
  //   title: "Market Research",
  //   desc:
  //     "Local and regional market research. Demand and supply forecasting. Competitor benchmarking. Strategic insights.",
  //   icon: FaSearch,
  // },
  {
    id: 12,
    title: "resale Services",
    desc:
      "Residential and commercial leasing. Tenant negotiations. Lease documentation. Renewal and retention strategies.",
    icon: FaHandshake,
  },
];
