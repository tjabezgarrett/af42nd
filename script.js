// Array of links
const links = [
    'https://google.com/',
    'https://facebook.com/'
];

// Function to get a random link
function getRandomLink() {
    const randomIndex = Math.floor(Math.random() * links.length);
    console.log('Random index:', randomIndex);  // Debug: Log the random index
    return links[randomIndex];
}

// Set the href of the link dynamically
document.addEventListener('DOMContentLoaded', () => {
    const dynamicLink = document.getElementById('dynamic-link');
    const selectedLink = getRandomLink();
    console.log('Selected link:', selectedLink);  // Debug: Log the selected link
    dynamicLink.href = selectedLink;
    dynamicLink.textContent = selectedLink;
});
