import { Box, Collapse, IconButton, Typography } from "@mui/material";
import { sensorsTreeItem } from "src/presentation/data/data";
import { useState } from "react";
import { ArrowUpIcon } from "src/presentation/assets/icons/ArrowUpIcon";
import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";
import Checkbox from "../checkbox-input/Checkbox";
import { useFormContext } from "react-hook-form";
import { FormValues } from "../stepper/IStepper";

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
  const { watch, setValue, control } = useFormContext<FormValues>();
  const selectedSensors = watch("sensors");

  const isLeaf = !node.sensors || node.sensors.length === 0;

  const isSelected =
    selectedSensors?.includes(node.id) ||
    (node.sensors &&
      node.sensors.some((child: any) => selectedSensors?.includes(child.id)));

  const toggleSelection = () => {
    const current = selectedSensors || [];

    if (isLeaf) {
      setValue(
        "sensors",
        current.includes(node.id)
          ? current.filter((id) => id !== node.id)
          : [...current, node.id]
      );
    } else {
      const childrenIds = node.sensors.map((child: any) => child.id);
      const anySelected = childrenIds.some((id: string) =>
        current.includes(id)
      );

      if (anySelected) {
        setValue(
          "sensors",
          current.filter((id) => !childrenIds.includes(id))
        );
      } else {
        setValue("sensors", Array.from(new Set([...current, ...childrenIds])));
      }
    }
  };
  const [open, setOpen] = useState(false);
  // const [checked, setChecked] = useState(false);

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
          id="test2"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {/* <Controller
          name
          control={control}
          /> */}
          <Checkbox
            size={24}
            text={node.name}
            checked={isSelected}
            onChange={toggleSelection}
          />
          <Typography
            variant={isRoot ? "body1" : "body2"}
            onClick={toggleSelection}
          >
            {node.name}
          </Typography>
        </Box>
      </Box>

      {node.sensors && open && (
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
          ))}
        </Collapse>
      )}
    </Box>
  );
}
