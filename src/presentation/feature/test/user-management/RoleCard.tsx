import { useState } from "react";
import SectionContainer from "src/presentation/components/common/section-container/SectionContainer";
import {
  HeaderContainer,
  MainContainer,
} from "src/presentation/components/common/section-container/SectionContainer.style";

import { IconWrapper } from "src/presentation/components/common/icons/IconWrapper.style";
import { ListIcon } from "src/presentation/components/common/icons/ListIcon";
import ButtonErrorSmallOutlined from "../../buttons/ButtonErrorSmallOutlined";
import ButtonSuccessSmallOutlined from "../../buttons/ButtonSuccessSmallOutlined";
import ButtonPrimarySmallOutlined from "../../buttons/ButtonPrimarySmallOutlined";
import { DeleteIcon } from "src/presentation/components/common/icons/DeleteIcon";
import { TwoUserIcon } from "src/presentation/components/common/icons/TwoUsersIcon";
import { ComplaintIcon } from "src/presentation/components/common/icons/ComplaintIcon";
import { MessageEditIcon } from "src/presentation/components/common/icons/MessageEditIcon";
import CustomDivider from "src/presentation/components/common/divider/CustomDivider";
import { ArrowUpIcon } from "src/presentation/components/common/icons/ArrowUpIcon";
import { BulletIcon } from "src/presentation/components/common/icons/BulletIcon";
import { ArrowDownIcon } from "src/presentation/components/common/icons/ArrowDownIcon";
import { Backdrop, Box, Typography } from "@mui/material";
import theme from "src/themes/theme";
import ButtonPrimaryXsmallOutlined from "../../buttons/ButtonPrimaryXsmallOutlined";
import ButtonPrimaryXsmallFilled from "../../buttons/ButtonPrimaryXsmallFilled";

export default function RoleCard({
  roleObj,
  onDeleteRole,
}: {
  roleObj: {
    id: string;
    title: string;
    serverRoom: string;
    accesses: string[];
  };
  onDeleteRole: () => void;
}) {
  const { title, serverRoom, accesses } = roleObj;
  const [visible, setVisible] = useState(false);
  //   const [deleteBackdrop, setDeleteBackdrop] = useState(false);

  function handleAccess() {
    setVisible((visible) => !visible);
  }

  return (
    <SectionContainer sx={{ bgcolor: "#373040" }}>
      <HeaderContainer>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconWrapper sx={{ color: "#D5D0DB" }}>
            <ListIcon size={24} />
          </IconWrapper>
          <Typography variant="h4" color="#F7F5FA">
            {title}
          </Typography>
        </Box>

        {/* Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ButtonErrorSmallOutlined
            rightIcon={<DeleteIcon size={20} />}
            onClick={onDeleteRole}
            // onClick={() => setDeleteBackdrop(true)}
          >
            حذف
          </ButtonErrorSmallOutlined>
          {/* <BackDrop open={deleteBackdrop} setOpen={setDeleteBackdrop} /> */}
          <ButtonSuccessSmallOutlined rightIcon={<MessageEditIcon size={20} />}>
            ویرایش
          </ButtonSuccessSmallOutlined>
          <ButtonPrimarySmallOutlined rightIcon={<TwoUserIcon size={20} />}>
            کاربران
          </ButtonPrimarySmallOutlined>
          <ButtonPrimarySmallOutlined rightIcon={<ComplaintIcon size={20} />}>
            دسترسی ها
          </ButtonPrimarySmallOutlined>
        </Box>
      </HeaderContainer>

      <CustomDivider sx={{ marginBlock: 1 }} />

      <MainContainer>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, auto)",
            alignItems: "center",
            gap: 2,
            justifyContent: "space-between",
            mt: 2,
          }}
        >
          <Box>
            <Typography variant="body2" color="#B7B0BF">
              اتاق سرور :
            </Typography>
            <Typography variant="body1" color="#F7F5FA">
              {serverRoom}
            </Typography>
          </Box>
          <Box sx={{ justifySelf: "end" }}>
            <ButtonPrimarySmallOutlined
              onClick={handleAccess}
              leftIcon={visible ? <ArrowUpIcon /> : <ArrowDownIcon />}
            >
              مشاهده دسترسی ها
            </ButtonPrimarySmallOutlined>
          </Box>
          {visible && (
            <Box sx={{ gridColumn: "1 / -1" }}>
              <Typography variant="body2" color="#B7B0BF">
                دسترسی ها :
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {accesses.map((temp, i) => (
                  <Typography
                    key={i}
                    variant="body1"
                    color="#F7F5FA"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <BulletIcon color={theme.palette.primary.dark} size={8} />
                    {temp}
                  </Typography>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </MainContainer>
    </SectionContainer>
  );
}

// function BackDrop({ open, setOpen }) {
//   function handleClose() {
//     setOpen(false);
//   }
//   return (
//     <Backdrop
//       sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
//       open={open}
//       onClick={handleClose}
//     >
//       <Box
//         sx={{
//           p: 2,
//           border: "1px solid #9B92A6",
//           borderRadius: "25px",
//           bgcolor: "#1C1926",
//         }}
//       >
//         <Typography variant="h3" sx={{ color: "warning.500", mb: 2 }}>
//           هشدار!
//         </Typography>
//         <Typography variant="body1" sx={{ color: "neutral.200", mb: 3 }}>
//           آیا از حذف نقش <span>"اپراتور دانشگاه"</span> مطمئن هستید ؟
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "flex-end",
//             gap: 2,
//           }}
//         >
//           <ButtonPrimaryXsmallOutlined
//             onClick={() => console.log("Cancel Clicked")}
//           >
//             انصراف
//           </ButtonPrimaryXsmallOutlined>
//           <ButtonPrimaryXsmallFilled onClick={() => console.log("Ok Clicked")}>
//             تایید
//           </ButtonPrimaryXsmallFilled>
//         </Box>
//       </Box>
//     </Backdrop>
//   );
// }
