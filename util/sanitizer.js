import xss from "xss";

// Custom regex for your variable pattern
const variablePattern = /<<var:([^>]+)>>/g;

const sanitizer = (step) => {
  // Extract safe variable tokens first
  const safeVars = {};
  let varIndex = 0;

  const textWithPlaceholders = step.replace(variablePattern, (match) => {
    const key = `__VAR_${varIndex}__`;
    safeVars[key] = match;
    varIndex++;
    return key;
  });

  // Run XSS sanitization on the rest
  const sanitized = xss(textWithPlaceholders, {
    whiteList: {}, // no HTML allowed
    stripIgnoreTag: true,
    stripIgnoreTagBody: ["script"],
  });

  // Restore safe variable tokens
  return sanitized.replace(
    /__VAR_(\d+)__/g,
    (_, idx) => safeVars[`__VAR_${idx}__`]
  );
};

export default sanitizer;
