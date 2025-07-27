import Stepper from "src/presentation/components/common/old/stepper/Stepper";
import { StepbarProps } from "../../../feature/users-management/components/roles/add-accesses/IAddAccesses";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.style";

function Stepbar({ steps, activeStep, setActiveStep }: StepbarProps) {
  //   const { steps, activeStep, setActiveStep } = props;

  return (
    <SectionContainer>
      <MainContainer>
        <Stepper
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </MainContainer>
    </SectionContainer>
  );
}

export default Stepbar;
