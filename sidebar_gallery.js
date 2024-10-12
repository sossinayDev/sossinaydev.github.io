// Function to get the page name from the URL
function getPageName() {
    const url = window.location.pathname; // Get current path from URL
    pageName = url.split('/').filter(Boolean).pop(); // Get last part of the path
    pageName = pageName.replace(".html", "");
    return pageName || 'default'; // Return 'default' if no page name is found
}

// Function to load images dynamically and stop on error
function loadImages(pageName) {
    const pageNameDisplay = document.getElementById('pageName');

    let imageNumber = 1; // Start with img_1.png

    function addImage() {
        const imgElement = document.createElement('img');
        const imgPath = `../assets/${pageName}/img_${imageNumber}.png`;

        imgElement.src = imgPath;
        imgElement.alt = `Image ${imageNumber} from ${pageName}`;

        // If the image fails to load, stop adding further images
        imgElement.onerror = function () {
            console.log(`Image ${imgPath} failed to load. Stopping further image loading.`);
            return; // Stop here, do not proceed with adding more images
        };

        imgElement.onload = function () {

            sidebar = document.getElementById('sidebar');
            sidebar.appendChild(imgElement); // Add the image if it loads successfully
            imageNumber++; // Increment the image number for the next one
            addImage(); // Attempt to add the next image
        };
    }

    addImage(); // Start loading the first image
}

// Get the current page name and load images
const currentPage = getPageName();
console.log(currentPage);
loadImages(currentPage);

