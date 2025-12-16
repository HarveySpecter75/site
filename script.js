async function copyText(filePath) {
    try {
        const response = await fetch(filePath);
        const text = await response.text();
        await navigator.clipboard.writeText(text);
        
    } catch (err) {
        alert("Unable to copy text");
    }
}
