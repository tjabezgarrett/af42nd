let currentIndex = 0;  // This should be stored in a persistent storage in a real application

const links = [
    'https://google.com',
    'https://facebook.com'
];

exports.handler = async function(event, context) {
    currentIndex = (currentIndex + 1) % links.length;
    const link = links[currentIndex];

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': 'https://tjabezgarrett.github.io',  // Allow only your GitHub Pages site
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        body: JSON.stringify({ link: link })
    };
};
