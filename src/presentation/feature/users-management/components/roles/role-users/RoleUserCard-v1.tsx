import { Box, useTheme } from "@mui/material";
import Avatar from "@/presentation/components/common/avatar/Avatar";

import { Icon } from "@/presentation/components/common/icons/components/Icon";
import Button from "@/presentation/components/common/buttons/Button";
import { Text } from "@/presentation/components/common/dashboard-card/BaseDashboardCard.style";
import TagHeading from "@/presentation/components/common/tag-heading/TagHeading";
import Tag from "@/presentation/components/common/tag/Tag";

function RoleUserCard({ user, ROLE }) {
  const { image: avatar, fullName: userName, phone, roles, groups } = user;

  const isIncluded = roles.includes(ROLE);

  const visibleRoles = roles.length > 2 ? roles.slice(1, 3) : roles;
  const visibleGroups = groups.length > 2 ? groups.slice(1, 3) : groups;

  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: (theme) => theme.palette.neutral[600], //"#373040",
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            width: "240px",
            flexShrink: 0,
          }}
        >
          <Avatar src={avatar}>
            <Icon name="user" color={theme.palette.neutral.main} />
          </Avatar>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Text color="neutral.50" variant="h4">
              {userName}
            </Text>
            <Text color="neutral.200" variant="body2">
              {phone}
            </Text>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            gap: 2,
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 0.5,
            }}
          >
            <TagHeading>نقش :</TagHeading>
            <Box
              sx={{
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                flexWrap: "nowrap",
                gap: 1.25,
              }}
            >
              {visibleRoles.map((role, index) => (
                <Tag key={index}>{role}</Tag>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 0.5,
              width: "100%",
            }}
          >
            <TagHeading>گروه :</TagHeading>
            <Box
              className="sensorContainer"
              sx={{
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                flexWrap: "nowrap",
                gap: 1.25,
                width: "100%  ",
              }}
              //   ref={groupsContainerRef}
            >
              {visibleGroups.map((group, index) => (
                <Tag key={index}>{group}</Tag>
              ))}
              {/* {remainingCount > 0 && (
                <Tag>{`+ ${remainingCount} گروه دیگر`}</Tag>
                //   + {remainingCount} گروه دیگر
                // </Tag>
              )} */}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {isIncluded ? (
          <Button variant="text" size="small" colorType="primary">
            دارای این نقش
          </Button>
        ) : (
          <Button variant="outlined" size="small" colorType="success">
            افزودن به نقش
          </Button>
        )}
        <Button variant="outlined" size="small" colorType="primary">
          مشاهده
        </Button>
      </Box>
    </Box>
  );
}

export default RoleUserCard;
