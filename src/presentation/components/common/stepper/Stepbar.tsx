import { Step, StepLabel } from "@mui/material";

import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { StepbarProps } from "../../../feature/users-management/components/roles/add-accesses/IAddAccesses";
import Button from "../buttons/Button";
import { Icon } from "../icons/components/Icon";
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
                    activeStep > index ? (
                      <Icon name="checked" />
                    ) : (
                      <Icon name="unchecked" />
                    )
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
              onClick={() => setActiveStep(Math.max(activeStep - 1, 0))}
              rightIcon="arrowRight"
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
              leftIcon="arrowLeft"
            >
              مرحله بعد
            </Button>
          ) : (
            <Button
              variant="contained"
              size="small"
              colorType="primary"
              onClick={() => console.log("Added")}
              rightIcon={activeStep === steps.length - 1 ? "plus" : null}
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
