import { styled, Switch } from "@mui/material";

const StyledSwitchButton = styled(Switch)(({ theme, disabled }) => ({
    width: 44,
    height: 24,
    padding: 0,
    display: "flex",
    border: `1px solid ${!disabled ? theme.palette.neutral[100] : theme.palette.text.disabled}`, 
    borderRadius: 50,
    transition: "border-color 0.3s ease",
    "&.checked": {
        borderColor: theme.palette.primary.main,
    },


    "& .MuiSwitch-switchBase": {
        padding: 1,
        "&.Mui-checked": {
            transform: "translateX(20px)",
            "& + .MuiSwitch-track": {
                opacity: 1,
                background: "none",
            },
            "& .MuiSwitch-thumb": {
                color: theme.palette.primary.main,
            },
        },
    },
    "& .MuiSwitch-thumb": {
        color: !disabled ? theme.palette.neutral.main : theme.palette.text.disabled,//TODO
        boxShadow: "none",
        width: 20,
        height: 20,
        borderRadius: 50,
        // transition: theme.transitions.create(["width"], {
        //     duration: 200,
        // }),
    },
    "& .MuiSwitch-track": {
        borderRadius: 50 / 2,
        opacity: 1,
        background: "none",
    },
}));

export default StyledSwitchButton