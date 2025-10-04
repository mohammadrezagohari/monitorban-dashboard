import { Collapse, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { ArrowUpIcon } from "src/presentation/assets/icons/ArrowUpIcon";
import { ArrowDownIcon } from "src/presentation/assets/icons/ArrowDownIcon";
import ControledCheckbox from "../checkbox/ControledCheckbox";
import { IconButtonWithBorder } from "../IconButtonWithBorder";
import {
  StyledMainItemContainer,
  StyledMainItemContent,
  StyledTreeItem,
} from "./TreeView.styles";
import { TreeItemProps } from "./ITreeView";

export default function TreeItem({ node, control, level = 0 }: TreeItemProps) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  // const [checked, setChecked] = useState(false);

  function handleToggle() {
    setOpen((prev) => !prev);
  }

  const isRoot = level === 0;

  return (
    <StyledTreeItem>
      <StyledMainItemContainer>
        {node.sensors && (
          <IconButtonWithBorder size="small" onClick={handleToggle}>
            {!open ? (
              <ArrowUpIcon size={16} color={theme.palette.primary[200]} />
            ) : (
              <ArrowDownIcon size={16} color={theme.palette.primary[200]} />
            )}
          </IconButtonWithBorder>
        )}
        <StyledMainItemContent>
          <ControledCheckbox
            label={node.name}
            name="items"
            itemValue={node.id}
            control={control}
            size={24}
            fontSize={isRoot ? 16 : 14}
          />
          {/* <CustomCheckbox
            size={24}
            text={node.name}
            checked={checked || node.sensors?.some((sensor) => sensor.checked)}
            onChange={(e) => setChecked(e.target.checked)}
          /> */}
          {/* <Typography variant={isRoot ? "body1" : "body2"}>
            {node.name}
          </Typography> */}
        </StyledMainItemContent>
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
      </StyledMainItemContainer>

      {node.sensors && (
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          sx={{
            mr: isDesktop ? 7.5 : 7,
            paddingInlineStart: 2,
            borderRight: "1px solid #9B92A6",
            mt: 1.5,
            "& .MuiButtonBase-root": { py: 0 },
            "& .MuiCollapse-wrapperInner": {
              display: "flex",
              flexDirection: "column",
              gap: 2,
            },
          }}
        >
          {node.sensors.map((child) => (
            <TreeItem key={child.id} node={child} level={1} control={control} />

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
    </StyledTreeItem>
  );
}
