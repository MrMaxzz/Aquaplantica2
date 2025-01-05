// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
  // Select the container element that holds all FAQ items
  const faqContainer = document.querySelector(".faq-content");

  // Add a click event listener to the FAQ container
  faqContainer.addEventListener("click", (e) => {
    // Check if the clicked element is within an FAQ group header
    const groupHeader = e.target.closest(".faq-group-header");

    // If the clicked element is not a group header, exit the function
    if (!groupHeader) return;

    // Get the parent group element and the body of the FAQ group
    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");

    // Get the icon element inside the group header
    const icon = groupHeader.querySelector("i");

    // Toggle the icon class to switch between "+" and "-" symbols
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // Toggle the visibility of the FAQ group body
    groupBody.classList.toggle("open");

    // Close other open FAQ bodies to maintain the accordion behavior
    const otherGroups = faqContainer.querySelectorAll(".faq-group");

    // Loop through all FAQ groups
    otherGroups.forEach((otherGroup) => {
      // Skip the currently clicked group
      if (otherGroup !== group) {
        // Get the body and icon of the other FAQ group
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector(".faq-group-header i");

        // Close the body of the other group if it's open
        otherGroupBody.classList.remove("open");

        // Reset the icon of the other group to the "+" symbol
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});
