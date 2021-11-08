/*
 * Based on:
 * - https://www.w3.org/WAI/tutorials/forms/labels/#hiding-the-label-element
 */
import React, { ComponentProps } from "react";
import { Icon } from "../Icon";
import styled from "styled-components";

import { COLORS } from "../../constants";

import { VisuallyHidden } from "../VisuallyHidden";

type Size = "small" | "large";

interface Props {
  label: string;
  icon: ComponentProps<typeof Icon>["id"];
  width: number;
  size: Size;
  placeholder: string;
}

interface StyleProps extends Omit<WrapperProps, "width">, InputProps {
  iconSize: number;
  strokeWidth: number;
}

const STYLES: Record<Size, StyleProps> = {
  small: {
    iconSize: 16,
    fontSize: `${14 / 16}rem`,
    lineHeight: `${16 / 16}rem`,
    leftPadding: "24px",
    borderBottomWidth: "1px",
    strokeWidth: 1,
  },
  large: {
    iconSize: 20,
    fontSize: `${18 / 16}rem`,
    lineHeight: `${21 / 16}rem`,
    leftPadding: "36px",
    borderBottomWidth: "2px",
    strokeWidth: 2,
  },
};

export const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}: Props) => {
  const style = STYLES[size];
  const widthInPx = `${width}px`;

  return (
    <Wrapper width={widthInPx} borderBottomWidth={style.borderBottomWidth}>
      <PrefixIcon
        id={icon}
        tabIndex={-1}
        aria-disabled={true}
        size={style.iconSize}
        strokeWidth={style.strokeWidth}
      />
      <VisuallyHidden for="icon-input" as="label">
        {label}
      </VisuallyHidden>
      <Input
        type={icon === "at-sign" ? "email" : "text"}
        name="icon-input"
        id="icon-input"
        placeholder={placeholder}
        fontSize={style.fontSize}
        lineHeight={style.lineHeight}
        leftPadding={style.leftPadding}
      />
    </Wrapper>
  );
};

interface WrapperProps {
  width: string;
  borderBottomWidth: string;
}

const Wrapper = styled.label<WrapperProps>`
  display: block;
  position: relative;

  width: ${(props) => props.width};

  border-bottom-width: ${(props) => props.borderBottomWidth};
  border-bottom-style: solid;
  border-bottom-color: ${COLORS.black};

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const PrefixIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: auto;
  margin-bottom: auto;
`;

interface InputProps {
  fontSize: string;
  lineHeight: string;
  leftPadding: string;
}

const Input = styled.input<InputProps>`
  display: inline-block;
  border: none;
  width: 100%;

  padding-left: ${(props) => props.leftPadding};
  padding-right: ${(props) => `-${props.leftPadding}`};

  font-family: Roboto;
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  font-weight: 700;

  color: inherit;

  &::placeholder {
    font-weight: 500;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline-offset: 2px;
  }
`;
