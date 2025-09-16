import { MainContainer } from "src/presentation/components/common/section-container/SectionContainer.styles";
import { List as MuiList, styled } from "@mui/material";

export const StyledAnnounceItem = styled("li")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
}));

export const List = styled(MuiList)(() => ({
    padding: 0
}))

export const AnnouncementsList = styled(MainContainer)(() => ({
    component: "ul",
    padding: 0,
    overflow: "scroll",
    height: "calc(100% - 55px)",
    "&::-webkit-scrollbar": { display: "none" },
}))