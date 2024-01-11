import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLinkCategory = styled(NavLink)`
  font-size: 1.6rem;
  text-decoration: none;
  background-color: #f2f4ff;
  padding: 0.5rem 1.6rem 0.6rem 1.6rem;
  border-radius: 0.8rem;
  color: #4661e6;
  &:active,
  &.active:link,
  &.active:visited {
    color: #fff;
    background-color: #4661e6;
  }
  &:hover {
    background-color: #cfd7ff;
  }
`;
