import { Badge, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CartWidget() {
  const { getTotalItems } = useContext(CartContext);
  let TotalItems = getTotalItems();
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={TotalItems} showZero color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
