import { Box, keyframes, styled } from "@mui/material";

// const rotate = keyframes`
//   to {
//     transform: rotate(1turn)
//   }
// `;

const rotate = keyframes({
  to: {
    transform: "rotate(1turn)",
  },
});

const Spinner = styled(Box)(({ theme }) => ({
  margin: "4.8rem auto",

  width: "6.4rem",
  aspectRatio: 1,
  borderRadius: "50%",
  //   backgroundColor: "#EEE",
  background: `radial-gradient(farthest-side, ${theme.palette.neutral.main} 94%, #0000) top/10px 10px no-repeat, conic-gradient(#0000 30%, ${theme.palette.neutral.main})`,
  "-webkit-mask":
    "radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0)",
  animation: `${rotate} 1.5s infinite linear`,
}));

export default Spinner;
