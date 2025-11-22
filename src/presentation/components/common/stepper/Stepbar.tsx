import { Step, StepLabel } from "@mui/material";

import Button from "../buttons/Button";
import { PlusIcon } from "src/presentation/assets/icons/PlusIcon";
import { CheckedIcon } from "src/presentation/assets/icons/CheckedIcon";
import { StepbarProps } from "../../../feature/users-management/components/roles/add-accesses/IAddAccesses";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { ArrowLeftIcon } from "src/presentation/assets/icons/ArrowLeftIcon";
import { UncheckedIcon } from "src/presentation/assets/icons/UncheckedIcon";
import { ArrowRightIcon } from "src/presentation/assets/icons/ArrowRightIcon";
import {
  ButtonContainer,
  Steps,
  StyledStepbar,
  StyledStepper,
} from "./Stepper.styles";

function Stepbar({ steps, activeStep, setActiveStep }: StepbarProps) {
  return (
    <SectionContainer>
      <StyledStepbar>
        <Button variant="outlined" size="small" colorType="primary">
          لغو
        </Button>

        <Steps>
          <StyledStepper activeStep={activeStep} sx={{}}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  icon={
                    activeStep > index ? <CheckedIcon /> : <UncheckedIcon />
                  }
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </StyledStepper>
        </Steps>

        <ButtonContainer>
          {activeStep !== 0 && (
            <Button
              variant="outlined"
              size="small"
              colorType="primary"
              onClick={() =>
                setActiveStep(Math.max(activeStep - 1, 0))
              }
              startIcon={<ArrowRightIcon size={16} />}
            >
              مرحله قبل
            </Button>
          )}
          {activeStep !== steps.length - 1 ? (
            <Button
              variant="contained"
              size="small"
              colorType="primary"
              onClick={() =>
                setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))
              }
              endIcon={<ArrowLeftIcon size={16} />}
            >
              مرحله بعد
            </Button>
          ) : (
            <Button
              variant="contained"
              size="small"
              colorType="primary"
              onClick={() => console.log("Added")}
              startIcon={activeStep === steps.length - 1 && <PlusIcon />}
            >
              افزودن
            </Button>
          )}
        </ButtonContainer>
      </StyledStepbar>
    </SectionContainer>
  );
}

export default Stepbar;
