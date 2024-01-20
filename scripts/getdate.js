document.addEventListener("DOMContentLoaded", function () {
  // Get the current year and set it in the footer
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;

  // Get the last modified date and set it in the second paragraph
  const lastModifiedDate = document.lastModified;
  document.getElementById("lastModified").textContent = `Last Modified: ${lastModifiedDate}`;
});

