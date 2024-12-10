// Get references to the views and the button
const initialView = document.getElementById('initial-view');
const realView = document.getElementById('real-view');
const unravelButton = document.getElementById('unravel-button');

// Add click event listener to the "Unravel" button
unravelButton.addEventListener('click', () => {
  // Add a fade-out effect to the initial view
  initialView.classList.add('hidden');
  
  // Delay the appearance of the real view
  setTimeout(() => {
    initialView.style.display = 'none';
    realView.classList.remove('hidden');
  }, 1000); // Match the CSS transition duration (1s)
});

// Simulate file downloads
function downloadFile(filename) {
  const element = document.createElement('a');
  element.setAttribute('href', `data:text/plain;charset=utf-8,This is ${filename}`);
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

//accordeion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}