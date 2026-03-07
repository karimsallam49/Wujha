export type Slide = {
  image: string;
  title: string;
  points: string[];
};

export type TabData = {
  id: string;
  label: string;
  slides: Slide[];
};

import TabsImag1 from "../assets/Images/TabsSlider.webp";
import TabsImag2 from "../assets/Images/TabsSlider1.webp";
import Tab1Slider2Image from "../assets/Images/CollectionSlider5-BPe-gB1M.webp";
import Tab1Slider3Image from "../assets/Images/CollectionSlider6-D2i_0P3f.webp";
export const tabsData: TabData[] = [
  {
    id: "wellness",
    label: "Wellness & Air Quality",
    slides: [
      {
        image: TabsImag1,
        title: "Creating Healthier, More Productive Work Environments",
        points: [
          "Advanced eco-AC system increases fresh air circulation",
          "HVAC UV disinfection technology eliminates 100% airborne pathogens",
          "95% natural daylight access with direct outdoor views",
          "Comprehensive wellness facilities including pools, gym, spa (2,038 sqm)",
        ],
      },
      {
        image: TabsImag2,
        title: "Cleaner Air, Better Performance",
        points: [
          "Smart ventilation monitoring",
          "High efficiency air filtration",
        ],
      },
    ],
  },
  {
    id: "architecture",
    label: "Architectural Excellence",
  slides: [
    {
      image: Tab1Slider2Image,
      title: "Built Around Your Business Success",
      points: [
        "4m clear ceiling heights for professional atmosphere",
        "Flexible 8m-21m column grid maximizes layout efficiency",
      ],
    },
    {
      image: Tab1Slider2Image,
      title: "Built Around Your Business Success",
      points: [
        "4m clear ceiling heights for professional atmosphere",
        "Flexible 8m-21m column grid maximizes layout efficiency",
      ],
    },
    {
      image: Tab1Slider3Image,
      title: "Built Around Your Business Success",
      points: [
        "4m clear ceiling heights for professional atmosphere",
        "Flexible 8m-21m column grid maximizes layout efficiency",
      ],
    },
  ],
  },
  {
    id: "Tier 1",
    label: "Tier 1 Office Building",
 slides: [
    {
      image: "https://picsum.photos/1600/900?random=15",
      title: "Setting New Standards in Sustainable Excellence",
      points: [
        "High-performance UV-resistant glazing reduces cooling costs",
        "Integrated solar cell technology generates renewable energy",
        "Sustainable construction practices with recycled materials",
        "Eco-friendly HVAC systems with motion-sensor LED lighting",
        "LEED Gold certification pursuit for environmental excellence",
      ],
    },
    {
      image: "https://picsum.photos/1600/900?random=16",
      title: "Setting New Standards in Sustainable Excellence",
      points: [
        "High-performance UV-resistant glazing reduces cooling costs",
        "Integrated solar cell technology generates renewable energy",
        "Sustainable construction practices with recycled materials",
        "Eco-friendly HVAC systems with motion-sensor LED lighting",
        "LEED Gold certification pursuit for environmental excellence",
      ],
    },
  ],
  },
  {
    id: "Smart Building",
        label: "Smart Building Technology",
     slides: [
    {
      image: "https://picsum.photos/1600/900?random=17",
      title: "Where Connectivity Meets Operational Excellence",
      points: [
        "Building-wide fiber optic connectivity",
        "Back-up generator system ensures power continuity",
        "Advanced security access control with high-security doors",
        "8 high-speed panoramic elevators (8-person, 1.4 m/s)",
        "Smart office infrastructure with flexible designs",
        "24/7 security cameras and maintenance services",
        "Dynamic digital signage throughout building",
      ],
    },
    {
      image: "https://picsum.photos/1600/900?random=18",
      title: "Where Connectivity Meets Operational Excellence",
      points: [
        "Building-wide fiber optic connectivity",
        "Back-up generator system ensures power continuity",
        "Advanced security access control with high-security doors",
        "8 high-speed panoramic elevators (8-person, 1.4 m/s)",
        "Smart office infrastructure with flexible designs",
        "24/7 security cameras and maintenance services",
        "Dynamic digital signage throughout building",
      ],
    },
  ],
  },
];
