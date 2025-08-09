const VariableText = ({ text }) => {
  const varRegex = /<<var:(.+?)>>/g;
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const elements = [];
  let lastIndex = 0;
  let match;

  while ((match = varRegex.exec(text)) !== null) {
    // Push any text before the <<var:...>>
    if (match.index > lastIndex) {
      const before = text.slice(lastIndex, match.index);
      elements.push(...processUrls(before, elements.length));
    }

    // Get variable name without surrounding quotes
    let varName = match[1].trim();
    if (
      (varName.startsWith('"') && varName.endsWith('"')) ||
      (varName.startsWith("'") && varName.endsWith("'"))
    ) {
      varName = varName.slice(1, -1);
    }

    // Push the bold variable name
    elements.push(
      <span key={elements.length} className="font-bold">
        &lt;{varName}&gt;
      </span>
    );

    lastIndex = varRegex.lastIndex;
  }

  // Push remaining text after last variable
  if (lastIndex < text.length) {
    const after = text.slice(lastIndex);
    elements.push(...processUrls(after, elements.length));
  }

  return <>{elements}</>;

  // Helper: detects URLs in text and wraps them in <a> tags
  function processUrls(segment, startKey) {
    const parts = [];
    let lastUrlIndex = 0;
    let urlMatch;
    let keyCounter = startKey;

    while ((urlMatch = urlRegex.exec(segment)) !== null) {
      if (urlMatch.index > lastUrlIndex) {
        parts.push(segment.slice(lastUrlIndex, urlMatch.index));
      }
      const url = urlMatch[0];
      parts.push(
        <a
          key={keyCounter++}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {url}
        </a>
      );
      lastUrlIndex = urlRegex.lastIndex;
    }

    if (lastUrlIndex < segment.length) {
      parts.push(segment.slice(lastUrlIndex));
    }

    return parts;
  }
};

export default VariableText;
