function checkAspectRatio() {
  const aspectRatio = window.innerWidth / window.innerHeight;
  const threshold = 0.4; // Example threshold: aspect ratio of .4

  // Select the image container element
  const imageContainer = document.getElementById("filler");

  if (aspectRatio > threshold) {
    // Show the image if the aspect ratio is wide enough
    filler.style.display = "block";
  } else {
    // Hide the image otherwise
    filler.style.display = "none";
  }
}

// Run the check on page load
checkAspectRatio();

// Run the check whenever the window is resized
window.addEventListener("resize", checkAspectRatio);
