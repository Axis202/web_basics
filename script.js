// Function to generate a random fact based on the person
function generateFact(person) {
  const facts = getFacts(person);
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("random-fact").textContent = randomFact;
}

// Search functionality
const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("input", function () {
  const query = searchBar.value.toLowerCase();
  document.querySelectorAll("main p, main h1").forEach(function (element) {
    element.style.display = element.textContent.toLowerCase().includes(query)
      ? "block"
      : "none";
  });
});
