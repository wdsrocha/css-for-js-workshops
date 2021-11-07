/*
 * There are two main differences from Josh solution:
 *
 *  1. I use `vertical-align: middle` on icon instead of using absolute
 *  position. This helps making the DOM structure simpler
 *
 *  2. I set color directly on the `Wrapper`, as the SVG and text color will
 *  inherit this property. This removes the necessity for one of the adjacent
 *  sibling combinators
 */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import { Icon } from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

interface Props {
  label: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  children?: React.ReactNode;
}

export const Select = ({ label, value, onChange, children }: Props) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <HiddenNativeSelect value={value} onChange={onChange}>
        {children}
      </HiddenNativeSelect>
      <VisualSelect>
        <Value>{displayedValue}</Value>
        <ChevronDown id="chevron-down" size={24} strokeWidth={2} />
      </VisualSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`;

const HiddenNativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-appearance: none;
`;

const VisualSelect = styled.div`
  height: 43px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding-top: 12px;
  padding-right: 10px;
  padding-bottom: 12px;
  padding-left: 16px;
  width: max-content;

  &:hover {
    background-color: ${COLORS.black};
  }

  ${HiddenNativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const Value = styled.span`
  display: inline;
  font-family: "Roboto";
  font-size: 1rem;
  line-height: 19px;
`;

const ChevronDown = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
  margin-left: 24px;
`;
