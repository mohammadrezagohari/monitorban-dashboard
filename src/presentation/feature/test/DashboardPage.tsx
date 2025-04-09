import { ArrowDownIcon } from "src/presentation/components/common/icons/ArrowDownIcon";
import {
  Box,
  // FormControl,
  // MenuItem,
  // Select,
  SelectChangeEvent,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ButtonSecondaryXxsmallOutlined from "../buttons/ButtonSecondaryXxsmallOutlined";
import { SensorIcon } from "src/presentation/components/common/icons/SensorIcon";
import Map from "./Map";
import ServerRoomCard from "../server room dashboard card/ServerRoomCard";
import { MobileIcon } from "src/presentation/components/common/icons/MobileIcon";

const announceItems = [
  {
    name: "سنسور رطوبت اتاق",
    report: "کلینیک رازی  نشتی آب 3403  ",
    icon: <SensorIcon color="#E8383B" />,
  },
  {
    name: "سنسور رطوبت اتاق",
    report: "کلینیک رازی  نشتی آب 3403  ",
    icon: <SensorIcon color="#E8383B" />,
  },
  {
    name: "سنسور رطوبت اتاق",
    report: "کلینیک رازی  نشتی آب 3403  ",
    icon: <SensorIcon color="#E8383B" />,
  },
  {
    name: "سنسور رطوبت اتاق",
    report: "کلینیک رازی  نشتی آب 3403  ",
    icon: <SensorIcon color="#E8383B" />,
  },
  {
    name: "سنسور رطوبت اتاق",
    report: "کلینیک رازی  نشتی آب 3403  ",
    icon: <SensorIcon color="#E8383B" />,
  },
  {
    name: "سنسور رطوبت اتاق",
    report: "کلینیک رازی  نشتی آب 3403  ",
    icon: <SensorIcon color="#E8383B" />,
  },
  {
    name: "سنسور رطوبت اتاق",
    report: "کلینیک رازی  نشتی آب 3403  ",
    icon: <SensorIcon color="#E8383B" />,
  },
  {
    name: "سنسور رطوبت اتاق",
    report: "کلینیک رازی  نشتی آب 3403  ",
    icon: <SensorIcon color="#E8383B" />,
  },
];

const serverRoomItems = [
  {
    title: "معاونت درمان",
    icon: <MobileIcon />,
    city: "ساری",
    sensor: 3,
    rack: 12,
  },
  {
    title: "دانشگاه علوم پزشکی",
    icon: <MobileIcon />,
    city: "ساری",
    sensor: 5,
    rack: 3,
  },
  {
    title: "دانشگاه پیامبر اعظم",
    icon: <MobileIcon />,
    city: "ساری",
    sensor: 8,
    rack: 9,
  },
  {
    title: "بیمارستان رازی",
    icon: <MobileIcon />,
    city: "قائمشهر",
    sensor: 6,
    rack: 4,
  },
  {
    title: "درمانگاه ولایت",
    icon: <MobileIcon />,
    city: "ساری",
    sensor: 5,
    rack: 10,
  },
];

export const Divider = styled("hr")(({ theme }) => ({
  border: `1px solid ${theme.palette.text.disabled}`,
  // display: "block",
  margin: "8px 0",
}));

export default function Dashboard() {
  const [status, setStatus] = useState("error");
  const color =
    status === "normal"
      ? { border: "#0FD36A", textColor: "#0FD36A", text: "نرمال" }
      : status === "warning"
      ? { border: "#E8383B", textColor: "#E8383B", text: "اخطار" }
      : { border: "#E8890C", textColor: "#F5C789", text: "بحرانی" };

  function handleChange(val: SelectChangeEvent) {
    setStatus(val.target.value);
    console.log(val);
  }
  return (
    <div style={{ width: "100%" }}>
      <Typography
        variant="h2"
        color="neutral.main"
        sx={{ marginBottom: "1rem" }}
      >
        داشبورد
      </Typography>

      {/* اعلانات و نقشه */}
      <Box sx={{ display: "flex", height: "100%", width: "100%", gap: "24px" }}>
        {/* Announcements */}
        <Box
          sx={{
            // display: "flex",
            width: "350px",
            height: "344px",
            padding: "16px",
            borderRadius: "25px",
            bgcolor: "#1C1926",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          {/* Title */}
          <div
            style={{
              // width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <Typography variant="h3" color="neutral.main" lineHeight={1.6}>
              اعلانات
            </Typography>

            {/* <FormControl sx={{ minWidth: 120, color: "black" }}> */}
            {/* <Select
            // variant="standard"
            id="Select"
            value={status}
            onChange={handleChange}
            IconComponent={() => (
              <ArrowDownIcon color={color.textColor} size={16} />
            )}
            sx={{
              typography: "caption",
              color: color.textColor,
              borderRadius: 10,
              border: `1px solid ${color.border}`,
              "& .MuiSelect-outlined": {
                padding: 0,
              },
              "&.MuiInputBase-root": {
                padding: "8px 12px",
              },
              "&.MuiInputBase-root:hover": {
                outline: "none",
                // bgcolor: "rgba(255,0,0,0.2)",
              },
              "&.MuiInputBase-root:focus": {
                outline: "none",
                bgcolor: "rgba(255,0,0,0.2)",
              },
              "&.MuiPaper-root": {
                bgcolor: "transparent",
              },
              // "& .MuiSelect-icon": {color: "green"}
            }}
          >
            <MenuItem value="normal">نرمال</MenuItem>
            <MenuItem value="warning">اخطار</MenuItem>
            <MenuItem value="error">بحرانی</MenuItem>
          </Select> */}
            <ButtonSecondaryXxsmallOutlined //TODO:: should be changed by Select component
              leftIcon={<ArrowDownIcon color={color.textColor} size={16} />}
            >
              {color.text}
            </ButtonSecondaryXxsmallOutlined>
            {/* </FormControl> */}
          </div>

          {/* Announce */}
          <Box
            sx={{
              overflow: "scroll",
              height: "calc(100% - 55px)",
              "&::-webkit-scrollbar": { display: "none" },
              // padding: "1rem 0"
            }}
            className="scrolbar-hidden"
          >
            <ul style={{}}>
              {announceItems.map((item, index) => (
                <>
                  {/* {console.log(index)} */}
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#373040",
                        borderRadius: "50%",
                        padding: "12px",
                        width: "48px",
                        height: "48px",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <Typography variant="body1" sx={{ color: "#D5D0DB" }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#B7B0BF" }}>
                        {item.report}
                      </Typography>
                    </div>
                  </li>
                  {console.log("index: ", index)}
                  {console.log("length::", announceItems.length)}
                  {index !== announceItems.length - 1 && <Divider />}
                </>
              ))}
            </ul>
          </Box>
        </Box>
        {/* Map */}
        <Box
          sx={{
            bgcolor: "#1C1926",
            borderRadius: "25px",
            padding: "1rem",
            width: "100%",
            flexGrow: 1,
            minWidth: 0,
          }}
        >
          <Map />
        </Box>
      </Box>
      {/* اتاق سرور  */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "calc(100vw - 338px)",
          overflow: "auto",
        }}
      >
        {serverRoomItems.map((item) => (
          <ServerRoomCard
            title={item.title}
            icon={item.icon}
            city={item.city}
            sensor={item.sensor}
            rack={item.rack}
            key={item.title}
          />
        ))}
      </Box>
    </div>
  );
}
