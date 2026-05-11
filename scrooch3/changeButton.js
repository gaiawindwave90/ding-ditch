(function () {
  function updateButton() {
    const links = document.querySelectorAll(
      'a.menu-bar_feedback-link_1BnAR[href="https://gaiawindwave90.github.io/"]'
    );

    links.forEach(link => {
      // Change link
      link.href = "https://gaiawindwave90.github.io/";

      // Change text inside
      const span = link.querySelector(".button_content_3jdgj span");
      if (span) {
        span.textContent = "Back to Gaia Zone!";
      }
    });
  }

  // Run once
  updateButton();

  // Keep checking (for dynamic UI updates)
  const observer = new MutationObserver(updateButton);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
