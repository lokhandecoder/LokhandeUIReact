import React from "react";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Prism as SyntaxHighlighterPrism } from 'react-syntax-highlighter';

interface CodeCardProps {
  code: string;
  output: React.ReactNode;
}

function CodeCard({ code, output }: CodeCardProps) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "50%", paddingRight: "10px" }}>
        <div>
          <Typography variant="h6" gutterBottom>
            Code
          </Typography>
          <SyntaxHighlighterPrism
            language="javascript"
            style={tomorrowNight}
            wrapLines={true} // Enable line wrapping
            showLineNumbers={true} // Show line numbers
          >
            {code.trim()} {/* Trim leading/trailing whitespace */}
          </SyntaxHighlighterPrism>
        </div>
      </div>
      <div style={{ flex: "50%", paddingLeft: "10px" }}>
        <div>
          <Typography variant="h6" gutterBottom>
            Output
          </Typography>
          <div>{output}</div>
        </div>
      </div>
    </div>
  );
}

export default CodeCard;
