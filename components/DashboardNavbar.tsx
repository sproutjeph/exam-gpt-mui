import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { UserButton } from "@clerk/nextjs";
import MenuIcon from "@mui/icons-material/Menu";

interface DashboardNavbarProps {
  drawerWidth: number;
  handleDrawerToggle: () => void;
}

const DashboardNavbar: FC<DashboardNavbarProps> = ({
  drawerWidth,
  handleDrawerToggle,
}) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <div className="flex justify-end w-full">
          <UserButton afterSignOutUrl="/" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;
