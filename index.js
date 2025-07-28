const desktopShareBtn = document.getElementById("share-btn");

desktopShareBtn.addEventListener("click", function () {
  const shareShapeContainer = document.querySelector(".share-shape-container");
  const authorInfo = document.querySelector(".author-info");
  const avatarContainer = document.querySelector(".date-name-avatar-container");

  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // On mobile: toggle showing share container in flow, and hide avatar
    avatarContainer.classList.toggle("display-none");
    shareShapeContainer.classList.toggle("mobile-active");
  } else {
    // On desktop: toggle popup-style share box
    shareShapeContainer.classList.toggle("display-none");
  }
});
