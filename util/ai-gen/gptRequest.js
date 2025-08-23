import createUserGuide from "./createUserGuide";

const gptRequest = async (prompt, vendorName) => {
  try {
    const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-5",
        tools: [createUserGuide],
        tool_choice: {
          type: "function",
          function: { name: "createUserGuide" },
        },
      }),
    });

    const data = await response.json();
    const toolCall = data.choices[0]?.message?.tool_calls[0];

    if (toolCall && toolCall.function) {
      const guide = JSON.parse(toolCall.function.arguments);
      guide.vendor = vendorName;
      guide.author = "Relayable AI";
      guide.ai_gen = true;
      guide.authorEmail = process.env.RELAYABLE_EMAIL;

      return guide;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error in gptRequest:", error);
    return false;
  }
};

export default gptRequest;
