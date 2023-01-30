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
        container.appendChild(color);
    }
}
generatePalette(); //calling generatePallete on page load

refreshBtn.addEventListener('click', generatePalette);