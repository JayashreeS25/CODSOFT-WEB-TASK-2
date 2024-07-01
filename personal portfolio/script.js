// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the download button
    const downloadBtn = document.querySelector('.btn');

    // Add an event listener for the download button
    downloadBtn.addEventListener('click', function (event) {
        // Prevent the default action
        event.preventDefault();

        // Get the URL of the PDF
        const pdfUrl = downloadBtn.getAttribute('href');

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Jayashree_CV.pdf';

        // Append the link to the body
        document.body.appendChild(link);

        // Simulate a click on the link
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
    });
});
