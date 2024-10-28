import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React, { CSSProperties } from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { NavLink } from "react-router-dom";

interface SideBarProps {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}
/* インターフェースはクラスやオブジェクトの型を定義 */
/* type ={}でも可能　こっちの方が多くの方を扱える */

interface menuItem {
  text: string;
  path: string;
  icon: React.ComponentType;
}

const SideBar = ({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
}: SideBarProps) => {
  const MenuItems: menuItem[] = [
    { text: "Home", path: "/", icon: HomeIcon },
    { text: "Report", path: "/report", icon: EqualizerIcon },
  ];

  const baseLinkStyle: CSSProperties = {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  };

  const activeLinkStyle: CSSProperties = {
    backgroundColor: "rgba(0,0,0,0.08)",
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {/* 囲っている線 */}
      <List>
        {MenuItems.map((item, index) => (
          <NavLink key={item.text} to={item.path} style={({ isActive }) => {
            console.log("選択したメニューは",item.text, isActive)
            return {
                ...baseLinkStyle,
                ...(isActive ? activeLinkStyle:{})
            }
          }}>
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* index % 2 === 0 ? <InboxIcon /> : <MailIcon /> */}
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/*　モバイル用  */}
      <Drawer
        variant="temporary"
        /* トリガーをきっかけにdrawerの表示非表示の切り替え */
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          /* xs:0px以上の時、sm:600px以上の時 */
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
        {/* 上で定義したリスト */}
      </Drawer>

      {/* PC用 */}
      <Drawer
        variant="permanent"
        /* 常に固定で表示されるdrawer */
        sx={{
          display: { xs: "none", sm: "block" },
          /* xs:0px以上の時、sm:600px以上の時 */
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
        {/* 上で定義したリスト */}
      </Drawer>
    </Box>
  );
};

export default SideBar;
