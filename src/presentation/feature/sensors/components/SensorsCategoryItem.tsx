import { useNavigate } from "react-router-dom";

import SensorCategoryCard from "@/presentation/components/common/sensor-category-card/SensorCategoryCard";

function SensorsCategoryItem({ category }) {
  // console.log("category => ", category);
  const navigate = useNavigate();

  const handleShowSensors = (center) => {
    navigate(`/sensors/${center.centerName}`);
    // console.log("center:: ", center);
  };

  return (
    <SensorCategoryCard
      key={category.centerName}
      icon={category.icon}
      title={category.centerName}
      normalSensor={
        category.sensors.filter((sensor) => sensor.status === "accept").length
      }
      warningSensor={
        category.sensors.filter((sensor) => sensor.status === "warning").length
      }
      dangerSensor={
        category.sensors.filter((sensor) => sensor.status === "danger").length
      }
      onClick={() => handleShowSensors(category)}
    />
  );
}

export default SensorsCategoryItem;
