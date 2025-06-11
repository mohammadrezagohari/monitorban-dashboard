import ButtonPrimarySmallFilled from "src/presentation/feature/buttons/ButtonPrimarySmallFilled";
import ButtonPrimarySmallOutlined from "src/presentation/feature/buttons/ButtonPrimarySmallOutlined";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { CheckedIcon } from "../icons/CheckedIcon";
import { UncheckedIcon } from "../icons/UncheckedIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";

// const steps = ["نوع دسترسی", "اتاق سرور", "انتخاب سنسور"];

export default function CustomStepper({ steps, activeStep, setActiveStep }) {
  // const [activeStep, setActiveStep] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <ButtonPrimarySmallOutlined>لغو</ButtonPrimarySmallOutlined>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stepper
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
                icon={activeStep > index ? <CheckedIcon /> : <UncheckedIcon />}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          minWidth: 300,
          justifyContent: "flex-end",
        }}
      >
        {Boolean(activeStep) && (
          <ButtonPrimarySmallOutlined
            onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
            rightIcon={<ArrowRightIcon />}
          >
            مرحله قبل
          </ButtonPrimarySmallOutlined>
        )}
        {activeStep !== steps.length - 1 ? (
          <ButtonPrimarySmallFilled
            onClick={() =>
              setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))
            }
            leftIcon={<ArrowLeftIcon />}
          >
            مرحله بعد
          </ButtonPrimarySmallFilled>
        ) : (
          <ButtonPrimarySmallFilled
            onClick={() => console.log("Added")}
            rightIcon={activeStep === steps.length - 1 && <PlusIcon />}
          >
            افزودن
          </ButtonPrimarySmallFilled>
        )}
      </Box>
    </Box>
  );
}
