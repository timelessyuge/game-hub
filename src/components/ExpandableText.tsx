import { Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const limit = 300;
  const [expanded, setExpanded] = useState(false);
  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <div>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Less" : "Read More"}
      </Button>
    </div>
  );
};

export default ExpandableText;
