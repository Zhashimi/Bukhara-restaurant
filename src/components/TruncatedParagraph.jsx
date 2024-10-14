import { useState } from "react";

function TruncatedParagraph({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = text.split(" ");

  const truncatedText =
    words.slice(0, 25).join(" ") + (words.length > 25 ? "..." : "");

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {isExpanded ? text : truncatedText}
      {words.length > 25 && (
        <button onClick={handleReadMoreClick} className="btn show-btn">
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
}

export default TruncatedParagraph;
