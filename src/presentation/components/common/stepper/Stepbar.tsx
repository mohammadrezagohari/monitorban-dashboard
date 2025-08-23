import { Box, Step, StepLabel, Stepper as MuiStepper } from "@mui/material";
import { StepbarProps } from "../../../feature/users-management/components/roles/add-accesses/IAddAccesses";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.style";
import Button from "../buttons/Button";
import { CheckedIcon } from "src/presentation/assets/icons/CheckedIcon";
import { UncheckedIcon } from "src/presentation/assets/icons/UncheckedIcon";
import { ArrowRightIcon } from "src/presentation/assets/icons/ArrowRightIcon";
import { ArrowLeftIcon } from "src/presentation/assets/icons/ArrowLeftIcon";
import { PlusIcon } from "src/presentation/assets/icons/PlusIcon";
// import Stepper from "./Stepper";

function Stepbar({ steps, activeStep, setActiveStep }: StepbarProps) {
  //   const { steps, activeStep, setActiveStep } = props;

  return (
    <SectionContainer>
      <MainContainer
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* <Stepper
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        /> */}
        <Button variant="outlined" size="small" colorType="primary">
          لغو
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MuiStepper
            activeStep={activeStep}
            sx={{
              width: 350,
              "&.MuiStepper-root *": { p: 0 },
              "&.MuiStepper-root": { gap: 4 },
              "& .MuiStepConnector-root": { display: "none" },
              "& .MuiStepLabel-root": {
                gap: 1,
                "& .Mui-disabled": { color: "#5B5266" },
                "& .Mui-active": { color: "#B7B0BA" },
                "& .Mui-completed": { color: "#F7F5FA" },
              },
              "& .MuiStepLabel-labelContainer": { whiteSpace: "nowrap" },
            }}
          >
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
          </MuiStepper>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            minWidth: 300,
            justifyContent: "flex-end",
          }}
        >
          {activeStep !== 0 && (
            <Button
              variant="outlined"
              size="small"
              colorType="primary"
              onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
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
        </Box>
      </MainContainer>
    </SectionContainer>
  );
}

export default Stepbar;
