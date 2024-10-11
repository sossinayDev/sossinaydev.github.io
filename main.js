function copy(textToCopy) {
    const tempTextArea = document.createElement("textarea");

    // Set the value of the textarea to the text you want to copy
    tempTextArea.value = textToCopy;

    // Append the textarea to the document body (it must be in the DOM to select)
    document.body.appendChild(tempTextArea);

    // Select the text in the textarea
    tempTextArea.select();

    // Execute the copy command
    try {
        document.execCommand("copy");
        console.log("Text copied to clipboard");
    } catch (err) {
        console.error("Failed to copy text", err);
    }

    // Remove the temporary textarea from the document
    document.body.removeChild(tempTextArea);
}