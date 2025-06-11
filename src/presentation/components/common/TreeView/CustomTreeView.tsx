import { Box, Collapse, IconButton } from "@mui/material";
import { sensorsTreeItem } from "src/presentation/feature/test/data";
import { useState } from "react";
import { ArrowUpIcon } from "../icons/ArrowUpIcon";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";
import BaseCheckbox from "src/presentation/feature/base-checkbox/BaseCheckbox";

export default function CustomTreeView() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {sensorsTreeItem.map((node) => (
        <TreeItem key={node.id} node={node} />
      ))}
    </Box>
  );
}

function TreeItem({ node }) {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  function handleToggle() {
    setOpen((prev) => !prev);
  }

  return (
    <Box sx={{ mr: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
        <BaseCheckbox
          size={24}
          text={node.name}
          checked={checked || node.sensors?.some((sensor) => sensor.checked)}
          onChange={(e) => setChecked(e.target.checked)}
        />
        {/* <Typography>{node.name}</Typography> */}
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
            mr: "50px",
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
            <TreeItem key={child.id} node={child} />

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
