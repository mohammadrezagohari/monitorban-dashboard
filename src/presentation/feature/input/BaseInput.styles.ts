import { Box, styled, TextField, Typography } from "@mui/material";
import { BaseInputStatus } from "./IBaseInput";

export const Container = styled(Box)<{ status?: BaseInputStatus }>(({ status }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    position: 'relative',
    // borderColor: status === "error"
    //     ? "#E8383B"
    //     : status === "accept"
    //         ? "#0FD36A"
    //         : "#5B5266",
}))

export const StyledLabel = styled(Typography)(() => ({
    fontSize: "16px",
    fontWeight: 600,
    textAlign: "right",
    color: "#B7B0BF",
}))

export const StyledCaption = styled(Typography)<{ status?: BaseInputStatus }>(({ status }) => ({
    fontSize: "12px",
    fontWeight: 500,
    textAlign: "right",
    color: status === "error"
        ? "#E8383B"
        : status === "accept"
            ? "#0FD36A"
            : "#B7B0BF",
}))

export const StyledTextField = styled(TextField)<{ status?: BaseInputStatus }>(({ status }) => ({
    "& .MuiOutlineInput-root": {
        borderRadius: "15px",
        backgroundColor: "#1C1926",
        border: "none ",
        color: "#C3C8D5",
        "& .MuiInputBase-input": {
            width: "100%",
            padding: 0
        }
        /*
         "& fieldset": {
             borderColor: status === "error"
                 ? "#E8383B"
                 : status === "accept"
                     ? "#0FD36A"
                     : "#5B5266",
         },
 */
    }
}))

export const IconWrraper = styled("div")(() => ({
    // position: "absolute",
    // left: "16px",
    // top: "50%",
    // transform: "translateY(-50%)",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "24px",
    height: "24px",
}))