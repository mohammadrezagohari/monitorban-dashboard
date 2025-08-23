import Checkbox from "./Checkbox";
import CustomCheckbox from "./CustomCheckBoxInput";
import { StyledFormControlLabel } from "./LabeledCheckbox.styles";

function LabeledCheckbox({ label }: { label: string }) {
  return <StyledFormControlLabel label={label} control={<Checkbox />} />;
}

export default LabeledCheckbox;
