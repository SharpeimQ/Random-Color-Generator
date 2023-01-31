const container = document.querySelector('.container');
const refreshBtn = document.querySelector('.refresh-btn');

const maxPaletteBoxes = 32;

const generatePalette = () => {
    container.innerHTML = ""; //clearing the container
    for (let i = 0; i < maxPaletteBoxes; i++) {
        // generating a random hex color 
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        
        //creating new "li" element and inserting it in the "ul" container
        const color = document.createElement('li');
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                            <span class="hex-value">${randomHex}</span>`;
        //adding click event to current li element to copy the color
        color.addEventListener('click', () => copyColor(color, randomHex))
        container.appendChild(color);
    }
}
generatePalette(); //calling generatePallete on page load

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector('.hex-value');
    //copy the hex value, updating the text to copied
    //undoing the updated text back to hex value after 1 sec
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerHTML = hexVal, 1000);
    }).catch(() => alert("Failed to copy the color code!")) // showing alert if color code failed to copy
}

refreshBtn.addEventListener('click', generatePalette);