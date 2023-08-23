import { Book, Logout, Menu as MenuIcon, Search } from "@mui/icons-material";
import {
  Container,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface Props {}

const Header: FC<Props> = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper
      component="header"
      sx={{ position: "sticky", top: 0, zIndex: 10, py: 1 }}
    >
      <Container maxWidth="xl" sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h4">Bookshelf App</Typography>

        <IconButton
          size="large"
          edge="end"
          sx={{ ml: "auto" }}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              "& .MuiMenu-list": { py: 0 },
              "& a": {
                textDecoration: "none",
                color: "inherit",
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Link to="/">
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Book fontSize="small" />
              </ListItemIcon>
              My Books
            </MenuItem>
          </Link>
          <Link to="/search">
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Search fontSize="small" />
              </ListItemIcon>
              Find a book
            </MenuItem>
          </Link>
          <Divider />
          <MenuItem onClick={handleClose}>
            <Link to="/logout">
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </Link>
          </MenuItem>
        </Menu>
      </Container>
    </Paper>
  );
};

export default Header;
