import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  [x: string]: any;
}

export const VisuallyHidden = ({ children, ...props }: Props) => {
  const [forceShow, setForceShow] = React.useState(false);

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === "Alt") {
          setForceShow(true);
        }
      };

      const handleKeyUp = () => {
        setForceShow(false);
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return children;
  }

  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;
