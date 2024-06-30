// Array of links
const links = [
    'https://example.com/page1',
    'https://example.com/page2',
    'https://example.com/page3',
    'https://example.com/page4',
];

// Function to get a random link
function getRandomLink() {
    const randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
}

// Set the href of the link dynamically
document.addEventListener('DOMContentLoaded', () => {
    const dynamicLink = document.getElementById('dynamic-link');
    dynamicLink.href = getRandomLink();
    dynamicLink.textContent = dynamicLink.href;
});
