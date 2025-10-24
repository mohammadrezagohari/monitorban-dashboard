import Stepper from "src/presentation/components/common/stepper/Stepper";
import PageTitle from "src/presentation/components/common/page-title/PageTitle";
import { StyledAddAccessContainer } from "./AddAccessGroup.styles";

function AddAccessGroup() {
  return (
    <>
      <PageTitle title="افزودن دسترسی" />

      <StyledAddAccessContainer>
        <Stepper />
      </StyledAddAccessContainer>
    </>
  );
}

export default AddAccessGroup;
