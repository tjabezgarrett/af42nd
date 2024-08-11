let currentIndex = 0;  // This should be stored in persistent storage in a real application

const links = [
    'https://calendly.com/af42assistant1/tr',
    'https://calendly.com/af42assistant2/tr'
];

exports.handler = async function(event, context) {
    currentIndex = (currentIndex + 1) % links.length;
    const link = links[currentIndex];

    // Create a unique URL to prevent caching
    const uniqueLink = `${link}?timestamp=${new Date().getTime()}`;

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'https://tjabezgarrett.github.io',  // Allow only your GitHub Pages site
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Cache-Control': 'no-cache, no-store, must-revalidate',  // No caching
            'Pragma': 'no-cache',  // Older HTTP 1.0 backward compatibility
            'Expires': '0'  // Expire immediately
        },
        body: JSON.stringify({ link: uniqueLink })
    };
};
