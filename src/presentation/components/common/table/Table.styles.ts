import { Box, styled } from "@mui/material";

export const StyledTable = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: theme.palette.neutral[700],
    borderRadius: "25px",
}))

const CommonRow = styled(Box)(({ theme, columns }) => {
    // console.log(columns)
    return ({
        display: "grid",
        gridTemplateColumns: columns,
        gap: theme.spacing(2.5),
        alignItems: "center",
    })
})
// grid - template - columns: ${ (props) => props.columns };
// column - gap: 2.4rem;
// align - items: center;
// transition: none;


export const StyledTableHeader = styled(CommonRow)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    "& p": {
        color: theme.palette.neutral[200],
    },
}))

export const StyledTableRow = styled(CommonRow)(({ theme }) => ({
    "& p": {
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.caption.fontWeight,
        color: "#FFFFFF",
    }
}))

export const StyledBody = styled("section")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2)
})) 