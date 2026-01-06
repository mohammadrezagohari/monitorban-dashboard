import { Box } from "@mui/material";
import { useState } from "react";

import Button from "@/presentation/components/common/buttons/Button";
import IconButton from "@/presentation/components/common/icon-button/IconButton";
import PageTitle from "@/presentation/components/common/page-title/PageTitle";
import { usersInfo } from "@/presentation/data/data";
import useScreenSize from "@/presentation/hooks/useScreenSize";
import { IUser } from "../../users/IUsers";
import { StyledCreateGroup } from "./CreateGroup.styles";
import GroupAccesses from "./GroupAccesses";
import GroupInfo from "./GroupInfo";
import GroupMembers from "./GroupMembers";

function CreateGroup() {
  const groupMembers: IUser[] = usersInfo || [];
  // const groupMembers: IUser[] = [];
  const [accesses, setAccesses] = useState<string[]>([]);
  // const {
  //   image: avatar,
  //   fullName: userName,
  //   phone,
  //   roles = [],
  //   groups = [],
  // } = usersInfo?.[0];
  // const visibleRoles = roles.length > 2 ? roles.slice(1, 3) : roles;
  // const visibleGroups = groups.length > 2 ? groups?.slice(1, 3) : groups;

  const { isMediumScreen } = useScreenSize();

  function deleteAccess(access: string) {
    setAccesses((prevAccesses) =>
      prevAccesses.filter((item) => item !== access)
    );
  }

  return (
    <>
      <PageTitle title="ایجاد گروه">
        <Box
          sx={{ display: "flex", alignItems: "center", gap: { xs: 1, lg: 2 } }}
        >
          {isMediumScreen ? (
            <>
              <Button variant="outlined" size="small" colorType="primary">
                انصراف
              </Button>
              <Button variant="contained" size="small" colorType="primary">
                ذخیره
              </Button>
            </>
          ) : (
            <>
              <IconButton iconName="close" variant="outlined" />

              <IconButton iconName="tick" />
            </>
          )}
        </Box>
      </PageTitle>

      <StyledCreateGroup>
        <GroupInfo />

        <GroupMembers members={groupMembers} />

        <GroupAccesses accesses={accesses} deleteAccess={deleteAccess} />
      </StyledCreateGroup>
    </>
  );
}

export default CreateGroup;
