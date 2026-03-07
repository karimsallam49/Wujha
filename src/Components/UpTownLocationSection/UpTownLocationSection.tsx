import mapImg from "../../assets/Images/utm map-C5yXsPI7.png"
import MapSection from "../MapSection/MapSection";
export const UpTowmLocationSection = (scrollRef:any) => {
console.log(scrollRef);

      const locationsData = {
    5:["to Al Rusayl Industrial Area", "Sultan Qaboos University", "and Al Mawaleh Commercial Market."],
    10: ["to German University", "Al Mawaleh City Center", "and Maabila Industrial Area."],
    15:  ["to Oman International Exhibition Centre", "Al Hail Beach", "and Al-Khoud Commercial Market."],
    20:   ["to Muscat International Airport", "Mall of Oman", "and Avenue Mall."] 
  };
 
const locations = Object.entries(locationsData).map(
    ([time, places]) => ({
      time,
      place: places.join(", "),
    })
  );

  return (
    <MapSection
    backgrounColor="gray"
      locations={locations}
       image={mapImg}
      title="Uptown Muscat"
      description="Uptown Muscat benefits from its prime location in KOM, a premier economic and educational hub. The project is strategically positioned with exceptional accessibility to key destinations across Muscat"
    />
    );
}
