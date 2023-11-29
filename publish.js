(async function loadPreamble() {
  if (window.MathJax && window.MathJax.tex2chtml) {
    const preambleURL =
      "https://raw.githubusercontent.com/bishan-batel/diginotes-preamble/main/preamble.sty";

    console.log("Loading preamble");
    MathJax.texReset();
    MathJax.typesetClear();
    MathJax.tex2chtml(await (await fetch(preambleURL)).text());
    MathJax.typesetPromise();
    console.log("Preamble Loaded!");

    return;
  }
  setTimeout(loadPreamble, 5);
})();
