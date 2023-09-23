console.log("jax moment");

(async function loadPreamble() {
  if (MathJax) {
    const preambleURL =
      "https://raw.githubusercontent.com/bishan-batel/diginotes-preamble/main/preamble.sty";
    MathJax.tex2chtml(await (await fetch(preambleURL)).text());
  }

  setTimeout(loadPreamble, 100);
})();
