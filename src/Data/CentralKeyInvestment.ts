import type { IconType } from "react-icons";
import {
  FaCrown,
  FaMapMarkerAlt,
  FaChartLine,
  FaHome,
  FaIdCard,
  FaBuilding,
} from "react-icons/fa";

export type CoreValue = {
  title: string;
  desc: string;
  icon: IconType;
};

export const coreValuesData: CoreValue[] = [
  {
    title: "Elite Status",
    desc: "Oman's only Tier 1 Office Building with international standards.",
    icon: FaCrown,
  },
  {
    title: "Strategic Location",
    desc: "Positioned in the heart of the KOM Free Zone, a prime hub for technology and finance.",
    icon: FaMapMarkerAlt,
  },
  {
    title: "High ROI",
    desc: "Offers up to 9% return on investment and guaranteed rental returns.",
    icon: FaChartLine,
  },
  {
    title: "Freehold Ownership",
    desc: "Rare Freehold Commercial Ownership opportunity for Omani and international investors.",
    icon: FaHome,
  },
  {
    title: "Residency",
    desc: "Property purchase includes eligibility for a Long-Term Omani Residency Visa.",
    icon: FaIdCard,
  },
  {
    title: "Office Flexibility",
    desc: "Single-Tenant and Multi-Tenant Floors (7 office floors total) designed for flexible configuration.",
    icon: FaBuilding,
  },
];
