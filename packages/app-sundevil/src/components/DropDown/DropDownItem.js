import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../app-sundevil/src/components/Icon_";

/**
 *
 * @typedef {{
 * label: string;
 * icon: string;
 * onClick: () => void;
 * active?: boolean;
 * as?: string;
 * }} Props
 */

const propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  as: PropTypes.string,
};

const Root = styled.button`
  background-color: ${props => (props.active ? "#191919" : "transparent")};
  color: ${props => (props.active ? "#fafafa" : "#191919")};
  min-width: min(100%, 260px);
  padding: 0.5rem 1.5rem;
  text-align: left;
  text-decoration: none;
  &.inactive {
    background-color: transparent;
    color: #191919;
    &:hover {
      background-color: rgba(25, 25, 25, 0.1);
    }
    &:focus {
      background-color: rgba(25, 25, 25, 0.1);
    }
  }
  &.active {
    background-color: #191919;
    color: #fafafa !important;
  }
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
  &:active {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
  &:hover {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
`;

/**
 *
 * @type {React.FC<Props>}
 */
export const DropDownItem = ({ active, label, icon, onClick, as, ...props }) => {
  const className = active ? "active" : "inactive";
  return (
    <Root
      onClick={onClick}
      active={active}
      className={className}
      as={as}
      {...props}
    >
      {icon && <Icon key={JSON.stringify(icon)} icon={icon} />}
      <span style={{ paddingLeft: "0.5rem" }}>{label}</span>
    </Root>
  );
};
DropDownItem.propTypes = propTypes;
