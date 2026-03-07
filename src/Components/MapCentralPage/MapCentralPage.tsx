import mapImg from "../../assets/Images/c7 map-DD91c1yk.png"
import MapSection from "../MapSection/MapSection";
export const MapCentralPage = (scrollRef:any) => {
console.log(scrollRef);

      const locationsData = {
    5: [
      "Al Rusayl Industrial Area",
      "Sultan Qaboos University",
      "Al Mawaleh Commercial Market"
    ],
    10: [
      "German University",
      "Al Mawaleh City Center",
      "Maabila Industrial Area",
      "Oman Convention & Exhibition Centre"
    ],
    15: [
      "Oman International Exhibition Centre",
      "Al Hail Beach",
      "Al Khoud Commercial Market",
      "Muscat International Airport"
    ]
  };
const locations = Object.entries(locationsData).map(
    ([time, places]) => ({
      time,
      place: places.join(", "),
    })
  );

  return (
    <MapSection
    backgrounColor="#4a7a5a"
      locations={locations}
       image={mapImg}
      title="Central 7"
      description="AT THE CROSSROADS OF COMMERCE
Located centrally in Knowledge Oasis Muscat (KOM), offering unmatched logistics advantages.
"
    />
    );
}
