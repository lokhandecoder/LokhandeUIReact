import React from "react";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SyntaxHighlighter from "react-syntax-highlighter";
function CodeCard({ code, output }: any) {
  return (
    <Paper>
      <Typography variant="h6" gutterBottom>
        Code
      </Typography>
      <div>
        <SyntaxHighlighter language="javascript" style={tomorrowNight}>
          {code}
        </SyntaxHighlighter>
      </div>
      <Typography variant="h6" gutterBottom>
        Output
      </Typography>
      <Typography>{output}</Typography>
    </Paper>
  );
}

export default CodeCard;
