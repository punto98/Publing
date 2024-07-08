function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the page:', error);
            document.getElementById('content').innerHTML = '<p>Error loading the page. Please try again.</p>';
        });
}
