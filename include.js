// include.js
async function includeHTML(id, file) {
  const el = document.getElementById(id);
  if (!el) return;
  try {
    const res = await fetch(file, { cache: "no-cache" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    el.innerHTML = await res.text();
  } catch (e) {
    el.innerHTML = `<!-- include failed: ${e.message} -->`;
    console.error("includeHTML error:", e);
  }
}

