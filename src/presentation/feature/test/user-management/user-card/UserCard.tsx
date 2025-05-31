import { Text } from "src/presentation/components/common/dashboard-card/BaseDashboardCard.style";
import { Avatar, Box, Container, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { IconWrapper } from "src/presentation/components/common/icons/IconWrapper.style";
import { UserCardProps } from "./IUserCard";
import ButtonPrimarySmallOutlined from "src/presentation/feature/buttons/ButtonPrimarySmallOutlined";
import { UserIcon } from "src/presentation/components/common/icons/UserIcon";

const UserCard: React.FC<UserCardProps> = ({
  avatar,
  userName,
  phone,
  roles,
  groups,
}) => {
  // const {
  //   text: statusText,
  //   textColor: statusColor,
  //   bgColor: statusBgColor,
  // } = getServerRoomListCardStatus(status);
  const groupsContainerRef = useRef<HTMLDivElement | null>(null);
  const [visibleRoles, setVisibleRoles] = useState<string[]>([]);
  const [visibleGroups, setVisibleGroups] = useState<string[]>([]);
  const [remainingCount, setRimainingCount] = useState(0);
  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updateVisibleRolesCount = () => {
      if (!roles?.length) return;

      if (roles.length > 2) {
        setVisibleRoles([roles[0], `+${roles.length - 1} نقش دیگر`]);
      } else {
        setVisibleRoles(roles);
      }
    };

    updateVisibleRolesCount();
    window.addEventListener("resize", () => {
      updateVisibleRolesCount();
    });

    return () => {
      window.removeEventListener("resize", updateVisibleRolesCount);
    };
  }, [roles]);

  // TODO:: this part has a bug when viewport is changed!!

  useEffect(() => {
    let frameId: number;

    function updateVisible() {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        // console.log("resize window");

        if (!groupsContainerRef.current || !groups?.length) return;

        const containerWidth = groupsContainerRef.current.offsetWidth;
        // console.log("***", groupsContainerRef.current);
        // console.log("container-width-top = ", containerWidth);

        let usedWidth = 0;
        let result: string[] = [];
        let remaining = 0;

        const dummy = document.createElement("div");
        dummy.style.visibility = "hidden";
        dummy.style.position = "absolute";
        dummy.style.padding = "10px";
        dummy.style.fontSize = "14px";
        dummy.style.fontFamily = "Dana-Regular";
        dummy.style.background = "#4D4259";
        dummy.style.borderRadius = "10px";
        dummy.innerText = `+ ${groups.length} گروه دیگر`;
        document.body.appendChild(dummy);

        const remainingTextWidth = dummy.getBoundingClientRect().width + 10;
        dummy.remove();

        for (let i = 0; i < groups.length; i++) {
          const el = groupRefs.current[i];
          if (!el) continue;

          const width = el.getBoundingClientRect().width + 10;

          if (usedWidth + width + remainingTextWidth <= containerWidth) {
            usedWidth += width;
            result.push(groups[i]);
          } else {
            remaining = groups.length - i;
            break;
          }
        }

        setVisibleGroups(result);
        setRimainingCount(remaining);

        // console.log("container-width-bottom = ", containerWidth);
      });
    }

    window.addEventListener("resize", updateVisible);

    updateVisible();

    return () => {
      window.removeEventListener("resize", updateVisible);
      cancelAnimationFrame(frameId);
    };
  }, [groups]);

  // useEffect(() => {
  //   function updateVisible() {
  //     if (!groupsContainerRef.current || !groups?.length) return;

  //     const containerWidth = groupsContainerRef.current.offsetWidth;
  //     console.log("***", groupsContainerRef.current);
  //     console.log("container-width-top = ", containerWidth);
  //     let usedWidth = 0;
  //     let result: string[] = [];
  //     let remaining = 0;

  //     const dummy = document.createElement("div");
  //     dummy.style.visibility = "hidden";
  //     dummy.style.position = "absolute";
  //     dummy.style.padding = "10px";
  //     dummy.style.fontSize = "14px";
  //     dummy.style.fontFamily = "Dana-Regular";
  //     dummy.style.background = "#4D4259";
  //     dummy.style.borderRadius = "10px";
  //     dummy.innerText = `+ ${groups.length} گروه دیگر`;
  //     document.body.appendChild(dummy);
  //     const remainingTextWidth = dummy.getBoundingClientRect().width + 10;
  //     dummy.remove();

  //     for (let i = 0; i < groups.length; i++) {
  //       const el = groupRefs.current[i];
  //       if (!el) continue;

  //       const width = el.getBoundingClientRect().width + 10;

  //       if (usedWidth + width + remainingTextWidth <= containerWidth) {
  //         usedWidth += width;
  //         result.push(groups[i]);
  //       } else {
  //         remaining = groups.length - i;
  //         break;
  //       }
  //     }

  //     setVisibleGroups(result);
  //     setRimainingCount(remaining);
  //     console.log("container-width-bottom = ", containerWidth);
  //   }
  //   setTimeout(updateVisible, 2000);
  //   // updateVisible();
  //   window.addEventListener("resize", updateVisible);

  //   return () => {
  //     window.removeEventListener("resize", updateVisible);
  //   };
  // }, [groups]);
  // ////////////////////////////////////////////////////////////
  // useEffect(() => {
  //   const updateVisibleGroupsCount = () => {
  //     if (!groupsContainerRef.current) return;

  //     const containerWidth = groupsContainerRef.current.offsetWidth;
  //     console.log("***", containerWidth, groupsContainerRef.current);

  //     let usedWidth = 0; // عرض آیتم های نمایش داده شده
  //     let padding = 2 * 10; // پدینگ آیتم ها
  //     let gap = 10; // گپ بین آیتم ها

  //     const canvasText = document.createElement("canvas").getContext("2d");
  //     if (!canvasText) return;
  //     if (!groups?.length) return;
  //     canvasText.font = "14px Dana-Regular"; // فونت مورد استفاده برای محاسبه عرض

  //     let tempVisibleGroups: string[] = [];
  //     let tempRemainingCount = 0;

  //     const remainingText = `+ ${groups.length} گروه دیگر`;
  //     const remainingTextWidth =
  //       canvasText.measureText(remainingText).width + padding + gap;
  //     console.log("remainingTextWidth:: ", remainingTextWidth);
  //     for (let i = 0; i < groups.length; i++) {
  //       const sensorWidth =
  //         canvasText.measureText(groups[i]).width + padding + gap;

  //       console.log(
  //         `item text ${i}::`,
  //         canvasText.measureText(groups[i]).width
  //       );
  //       console.log(`item ${i}::`, sensorWidth);

  //       if (usedWidth + sensorWidth + remainingTextWidth <= containerWidth) {
  //         tempVisibleGroups.push(groups[i]);
  //         usedWidth += sensorWidth;
  //       } else {
  //         tempRemainingCount = groups.length - i;
  //         break;
  //       }
  //     }

  //     if (tempRemainingCount === 1) {
  //       const lastItemWidth =
  //         canvasText.measureText(groups[groups.length - 1]).width + padding;
  //       if (usedWidth + lastItemWidth <= containerWidth) {
  //         tempVisibleGroups.push(groups[groups.length - 1]);
  //         tempRemainingCount = 0;
  //       }
  //     }

  //     setVisibleGroups(tempVisibleGroups);
  //     setRimainingCount(tempRemainingCount);
  //     console.log(containerWidth);
  //   };

  //   setTimeout(updateVisibleGroupsCount, 50);
  //   window.addEventListener("resize", updateVisibleGroupsCount);
  //   return () => {
  //     window.removeEventListener("resize", updateVisibleGroupsCount);
  //   };
  // }, [groups]);

  return (
    <Container
      className="main-container"
      sx={{
        bgcolor: "#373040",
        borderRadius: "15px",
        // display: "flex",
        // justifyContent: "space-between",
        alignItems: "center",
        display: "grid",
        gap: 2,
        gridTemplateColumns: "250px auto 110px",
        "&.MuiContainer-root": {
          p: 2,
        },
      }}
    >
      {/* Server Room Name */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          width: "264px",
          flexShrink: 0,
        }}
      >
        {avatar ? (
          <Avatar src={avatar} sx={{ width: 48, height: 48 }} />
        ) : (
          <IconWrapper bgcolor="#4D4259">
            <UserIcon size={24} />
          </IconWrapper>
        )}
        {/* <IconWrapper bgcolor="#4D4259">
          {avatar ? <img src="{avatar}" /> : <UserIcon />}
        </IconWrapper> */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Text color="neutral.50" variant="h4">
            {userName}
          </Text>
          <Text color="neutral.200" variant="body2">
            {phone}
          </Text>
        </Box>
      </Box>

      {/* Groups List */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          // width: "650px",
          // maxWidth: 672,
        }}
      >
        {/* roles  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "4px",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#B7B0BF", width: "max-content" }}
          >
            نقش :
          </Typography>
          <Box
            sx={{
              // color: statusColor,
              // bgcolor: statusBgColor,
              // padding: "10px",
              // borderRadius: "10px",
              // width: "fit-content",
              // typography: "body2",
              // lineHeight: "100%",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "10px",
            }}
          >
            {visibleRoles.map((role, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  color: "#C480FF",
                  bgcolor: "#4D4259",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "max-content",
                }}
              >
                {role}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Groups  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "4px",
            width: "100%",
          }}
        >
          <Typography variant="body2" sx={{ color: "#B7B0BF" }}>
            گروه :
          </Typography>
          <Box
            className="sensorContainer"
            sx={{
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "10px",
              width: "100%  ",
            }}
            ref={groupsContainerRef}
          >
            {visibleGroups.map((group, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  color: "#C480FF",
                  bgcolor: "#4D4259",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "max-content",
                  whiteSpace: "nowrap",
                }}
              >
                {group}
              </Typography>
            ))}
            {remainingCount > 0 && (
              <Typography
                variant="body2"
                sx={{
                  whiteSpace: "nowrap",
                  color: "#C480FF",
                  bgcolor: "#4D4259",
                  borderRadius: "10px",
                  padding: "10px",
                  // width: "max-content",
                }}
              >
                + {remainingCount} گروه دیگر
              </Typography>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            visibility: "hidden",
            position: "absolute",
            top: -9999,
            left: -9999,
          }}
        >
          {groups.map((group, index) => (
            <Box
              key={index}
              ref={(el) => (groupRefs.current[index] = el)}
              sx={{
                color: "#c480ff",
                bgcolor: "#4d4259",
                borderRadius: "10px",
                padding: "10px",
                fontSize: "14px",
                fontFamily: "Dana-Reqular",
                whiteSpace: "nowrap",
                display: "inline-block",
              }}
            >
              {group}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          justifySelf: "end",
          flexShrink: 0,
          mr: 2,
        }}
      >
        <ButtonPrimarySmallOutlined>مشاهده</ButtonPrimarySmallOutlined>
      </Box>
    </Container>
  );
};

export default UserCard;
