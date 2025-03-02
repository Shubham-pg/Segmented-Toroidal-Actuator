document.addEventListener("scroll", function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreContent();
    }
});

function loadMoreContent() {
    let newContent = document.createElement("div");
    newContent.innerHTML = "<p>Loading more content...</p>";
    document.body.appendChild(newContent);
}
