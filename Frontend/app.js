document.getElementById('search-btn').addEventListener('click', function () {
  const query = document.getElementById('search-box').value.trim();

  if (query) {
    fetch(`http://localhost:5000/search?q=${query}`)
      .then(response => response.json())
      .then(data => displayResults(data))
      .catch(error => console.error('Error:', error));
  } else {
    alert("Please enter a query!");
  }
});

function displayResults(results) {
  const resultDiv = document.getElementById('results');
  resultDiv.innerHTML = '';

  if (results.length === 0) {
    resultDiv.innerHTML = '<p>No results found.</p>';
  } else {
    results.forEach(result => {
      const resultElement = document.createElement('div');
      resultElement.innerHTML = `<h3>${result.title}</h3>`;
      resultDiv.appendChild(resultElement);
    });
  }
}

function getPersonalizedSuggestions() {
  fetch('http://localhost:5000/personalized')
    .then(response => response.json())
    .then(data => {
      const suggestionList = document.getElementById('personalized-suggestions');
      suggestionList.innerHTML = '';
      data.forEach(suggestion => {
        const listItem = document.createElement('li');
        listItem.innerText = suggestion;
        suggestionList.appendChild(listItem);
      });
    });
}

document.getElementById('toggle-theme').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

window.onload = getPersonalizedSuggestions;