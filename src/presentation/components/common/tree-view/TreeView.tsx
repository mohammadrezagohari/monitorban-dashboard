import { Box, Collapse, IconButton, Typography } from "@mui/material";
import { sensorsTreeItem } from "src/presentation/data/data";
import { useState } from "react";
import { ArrowUpIcon } from "src/presentation/assets/icons/ArrowUpIcon";
import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";
import BaseCheckbox from "src/presentation/feature/old/base-checkbox/BaseCheckbox";
import CustomCheckbox from "../checkbox-input/CustomCheckBoxInput";

export default function TreeView() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {sensorsTreeItem.map((node) => (
        <TreeItem key={node.id} node={node} />
      ))}
    </Box>
  );
}

function TreeItem({ node, level = 0 }) {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  function handleToggle() {
    setOpen((prev) => !prev);
  }

  const isRoot = level === 0;

  return (
    <Box sx={{ mr: 2 }}>
      <Box id="TEST" sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {node.sensors && (
          <IconButton
            size="small"
            onClick={handleToggle}
            sx={{ border: "1px solid #9B92A6", borderRadius: "10px", p: "7px" }}
          >
            {!open ? (
              <ArrowUpIcon size={16} color="#C9A8E5" />
            ) : (
              <ArrowDownIcon size={16} color="#C9A8E5" />
            )}
          </IconButton>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <CustomCheckbox
            size={24}
            text={node.name}
            checked={checked || node.sensors?.some((sensor) => sensor.checked)}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <Typography variant={isRoot ? "body1" : "body2"}>
            {node.name}
          </Typography>
        </Box>
        {/* <BaseCheckbox
          size={24}
          text={node.name}
          checked={checked || node.sensors?.some((sensor) => sensor.checked)}
          onChange={(e) => setChecked(e.target.checked)}
        /> */}
        {/* <Checkbox
          checked={checked || node.sensors?.some((sensor) => sensor.checked)}
          onChange={(e) => setChecked(e.target.checked)}
        />*/}
      </Box>

      {node.sensors && (
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          sx={{
            mr: "60px",
            borderRight: "1px solid #9B92A6",
            mt: 1.5,
            "& .MuiButtonBase-root": { p: 0 },
            "& .MuiCollapse-wrapperInner": {
              display: "flex",
              flexDirection: "column",
              gap: 2,
            },
          }}
        >
          {node.sensors.map((child) => (
            <TreeItem key={child.id} node={child} level={1} />

            // <BaseCheckbox
            //   size={24}
            //   text={sensor.name}
            //   checked={checked}
            //   onChange={(e) => setChecked(e.target.checked)}
            // />
            //  <Typography>{sensor.name}</Typography>
          ))}
        </Collapse>
      )}
    </Box>
  );
}
