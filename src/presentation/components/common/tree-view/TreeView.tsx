import { sensorsTreeItem } from "src/presentation/data/data";
import { useForm } from "react-hook-form";
import { StyledTreeView } from "./TreeView.styles";
import TreeItem from "./TreeItem";

export default function TreeView() {
  const { control, watch, setValue } = useForm({
    defaultValues: {
      items: [],
    },
  });
  return (
    <StyledTreeView>
      {sensorsTreeItem.map((node) => (
        <TreeItem key={node.id} node={node} control={control} level={0} />
      ))}
    </StyledTreeView>
  );
}
