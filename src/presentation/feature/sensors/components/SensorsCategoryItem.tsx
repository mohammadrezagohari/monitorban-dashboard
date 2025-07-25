import { useNavigate } from "react-router-dom";

import { iconsMap } from "src/presentation/assets/icons/iconsMap";
import SensorCategoryCard from "src/presentation/components/common/sensor-category-card/SensorCategoryCard";

function SensorsCategoryItem({ category }) {
  const ItemIcon = iconsMap[category.icon as keyof typeof iconsMap];
  const navigate = useNavigate();

  const handleShowSensors = (center) => {
    navigate(`/sensors/${center.centerName}`);
    console.log("center:: ", center);
  };

  return (
    <SensorCategoryCard
      key={category.centerName}
      icon={<ItemIcon />}
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
