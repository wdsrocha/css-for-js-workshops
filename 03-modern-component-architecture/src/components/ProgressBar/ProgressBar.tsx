/* Josh solved this in a better way because -webkit-progress-* isn't supported on
 * Firefox, so my solution won't work on all browsers.
 *
 * Based on:
 * - https://accessible-app.com/pattern/vue/progress
 */

import React, { Component } from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

interface Props {
  value: number;
  size: "small" | "medium" | "large";
  [x: string]: any;
}

export const ProgressBar = ({ value, size, ...props }: Props) => {
  let Component;

  if (size === "small") {
    Component = SmallProgressBar;
  } else if (size === "medium") {
    Component = MediumProgressBar;
  } else if (size === "large") {
    Component = LargeProgressBar;
  } else {
    throw new Error(`Unrecognized ProgressBar size: ${size}`);
  }

  return (
    <Component
      {...props}
      value={value}
      max={100}
      role="progressbar"
      aria-valuemin={0}
      aria-valuenow={value}
      aria-valuemax={100}
      tabIndex={-1}
    >
      {value}%
    </Component>
  );
};

const BaseProgressBar = styled.progress`
  -webkit-appearance: none;
  appearance: none;

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    // This helps to progessively make the right border "less-squared" from 98%
    // to 100% in order to fit -webkit-progress-bar radius
    --dynamicBorderRadius: ${({ value }) =>
      `${2 * ((value as number) - 98)}px`};
    border-top-right-radius: var(--dynamicBorderRadius);
    border-bottom-right-radius: var(--dynamicBorderRadius);
  }

  &::-webkit-progress-bar {
    background: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  }
`;

const SmallProgressBar = styled(BaseProgressBar)`
  &::-webkit-progress-bar {
    height: 8px;
    border-radius: 4px;
  }
`;

const MediumProgressBar = styled(BaseProgressBar)`
  &::-webkit-progress-bar {
    height: 12px;
    border-radius: 4px;
  }
`;

const LargeProgressBar = styled(BaseProgressBar)`
  &::-webkit-progress-bar {
    height: 24px;
    border-radius: 8px;
    padding: 4px;
  }
`;
