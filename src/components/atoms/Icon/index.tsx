import { Avatar } from "@mui/material";
import theme from "../../../theme";

interface IconProps {
  type: string;
  src?: any;
}

const Icon: React.FC<IconProps> = ({ type, src }) => {
  return (
    <Avatar
      variant="rounded"
      src={src}
      sx={{
        borderRadius: "10px",
        "& .MuiAvatar-img": {
          sizes: ";width:40px;height:40px",
        },
        width: type != "homepage" ? "44px" : "50px",
        height: type != "homepage" ? "44px" : "50px",
        backgroundColor:
          type != "homepage"
            ? theme.palette.secondary.light
            : theme.palette.primary.light,
      }}
    />
  );
};

export default Icon;
