function parseIntent(text) {
  if (text.includes("integral") || text.includes("integrate")) return "integral";
  if (text.includes("türev") || text.includes("derive")) return "derivative";
  if (text.includes("açıkla")) return "explain";
  return "integral";
}

function solveMath(input) {
  try {
    const intent = parseIntent(input.toLowerCase());
    let expr = input.toLowerCase();

    if (intent === "integral") {
      expr = expr.replace("integral", "").trim();
      const res = nerdamer(`integrate(${expr},x)`);
      return {
        type: "solution",
        latex: res.toTeX(),
        explanation: "İfade sembolik olarak integre edildi."
      };
    }

    if (intent === "derivative") {
      expr = expr.replace("türev", "").trim();
      const res = nerdamer(`diff(${expr},x)`);
      return {
        type: "solution",
        latex: res.toTeX(),
        explanation: "İfade sembolik olarak türev alındı."
      };
    }

    if (intent === "explain") {
      return {
        type: "text",
        text: "Bu sistem deterministik sembolik matematik çözümleri üretir. LLM kullanmaz, hata oranı düşüktür."
      };
    }

  } catch (e) {
    return { type: "error", text: "Bu ifade çözülemedi." };
  }
}
