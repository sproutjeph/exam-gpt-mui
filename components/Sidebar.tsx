"use client";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { FC } from "react";
import { Toolbar } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/utils";
import { routes } from "@/constants/constants";
import { useRouter } from "next/navigation";
import { FreeCounter } from ".";

interface SidebarProps {
  container: (() => HTMLElement) | undefined;
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
}
const drawerWidth = 240;

const Sidebar: FC<SidebarProps> = ({
  container,
  handleDrawerToggle,
  mobileOpen,
}) => {
  const router = useRouter();

  const drawer = (
    <div>
      <Toolbar>
        <Link href="/dashboard" className="flex items-center  text-black">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold")}>Exam GPT</h1>
        </Link>
      </Toolbar>
      <Divider />
      <List>
        {routes.map((route, i) => (
          <ListItem
            key={i}
            disablePadding
            onClick={() => router.push(route.href)}
          >
            <ListItemButton>
              <ListItemIcon>{<route.icon />}</ListItemIcon>
              <ListItemText primary={route.label} style={{ color: "black" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
        <FreeCounter apiLimitCount={1} isPro={false} />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
        <FreeCounter apiLimitCount={1} isPro={false} />
      </Drawer>
    </Box>
  );
};

export default Sidebar;
