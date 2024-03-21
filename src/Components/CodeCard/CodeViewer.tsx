import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
const CodeViewer = ({ html, css, component: Component }: any) => {
  const styles: { [key: string]: React.CSSProperties } = {
    codeViewer: {
      display: "flex",
      width: "100%",
    },
    column: {
      width: "50%",
      padding: "10px",
    },
    output: {
      height: "100%",
      border: "1px solid #ccc",
      borderRadius: "4px",
      padding: "10px",
      overflowY: "auto",
    },
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
  }

  const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
    />
  ))({
    "& .MuiTabs-indicator": {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#635ee7",
    },
  });
  interface StyledTabProps {
    label: string;
  }

  const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
  ))(({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  }));

  return (
    <div style={styles.codeViewer}>
      <div style={styles.column}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="styled tabs example"
            >
              <Tab label="TSX" />
              <Tab label="Css" />
            </Tabs>
          </Box>
          <Box>
            {value === 0 && (
              <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                {html}
              </SyntaxHighlighter>
            )}
            {value === 1 && (
              <SyntaxHighlighter language="css" style={vscDarkPlus}>
                {css}
              </SyntaxHighlighter>
            )}
          </Box>
        </Box>
      </div>
      <div style={styles.column}>
        {/* Render the output of the component */}
        <div style={styles.output}>
          <Component />
        </div>
      </div>
    </div>
  );
};

export default CodeViewer;
