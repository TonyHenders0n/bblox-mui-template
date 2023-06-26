import type { FC } from "react";
import { Avatar, Box, ButtonBase } from "@mui/material";
import { usePopover } from "src/hooks/use-popover";
import { AccountPopover } from "./account-popover";
import { getInitials } from "src/utils/get-initials";

interface AccountButtonProps {
  onMobileNavOpen?: () => void;
  user: {
    firstName?: string;
    lastName?: string;
    email?: string;
    name: string | undefined;
  };
  avatar: {
    width?: number;
    height?: number;
    borderWidth?: number;
    borderOffset?: number;
    image?: string;
  };
}

const DEF_AVATAR_WIDTH: number = 40;
const DEF_AVATAR_BORDER: number = 2;
const DEF_AVATAR_BORDER_OFFSET: number = 6;

export const AccountButton: FC<AccountButtonProps> = (props) => {
  const {
    user,
    avatar,
  } = props;


  const popover = usePopover<HTMLButtonElement>();
  const borderOffset = avatar.borderOffset ? avatar.borderOffset : DEF_AVATAR_BORDER_OFFSET;
  const avatarBackground = {
    width: avatar.width ? avatar.width : DEF_AVATAR_WIDTH + borderOffset,
    height: (avatar.height ? avatar.height : DEF_AVATAR_WIDTH) + borderOffset,
    borderWidth: avatar.borderWidth ? avatar.borderWidth : DEF_AVATAR_BORDER,
  };

  return (
    <>
      <Box
        component={ButtonBase}
        onClick={popover.handleOpen}
        ref={popover.anchorRef}
        sx={{
          alignItems: "center",
          display: "flex",
          borderWidth: avatarBackground.borderWidth,
          borderStyle: "solid",
          borderColor: "divider",
          height: avatarBackground.height,
          width: avatarBackground.width,
          borderRadius: "50%",
        }}
      >
        <Avatar
          sx={{
            height: avatar.height,
            width: avatar.width,
          }}
        >
          {getInitials(user?.name)}
        </Avatar>
      </Box>
      <AccountPopover
        anchorEl={popover.anchorRef.current}
        onClose={popover.handleClose}
        open={popover.open}
      />
    </>
  );
};
