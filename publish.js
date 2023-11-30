(async function loadPreamble() {
  if (window.MathJax && window.MathJax.tex2chtml) {
    const og = document.querySelector(
      "a.tree-item-self.is-clickable.mod-active"
    );

    const preamble = await fetch(
      "https://raw.githubusercontent.com/bishan-batel/diginotes-preamble/main/preamble.sty"
    );
    MathJax.tex2chtml(await preamble.text());

    document.querySelectorAll("a.tree-item-self.is-clickable").forEach((e) => {
      if (e.attributes["data-path"].textContent != "Home.md") return;

      e.click();
      setTimeout(() => og.click(), 1);
    });

    return;
  }
  setTimeout(loadPreamble, 1);
})();
