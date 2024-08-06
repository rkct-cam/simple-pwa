function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function invertColor(hex) {
    hex = hex.slice(1); // Remove the hash at the start
    if (hex.length === 3) {
        hex = hex.split('').map(h => h + h).join('');
    }
    const rgb = parseInt(hex, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;
    const luma = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luma > 0.5 ? '#000000' : '#FFFFFF';
}

document.addEventListener('click', () => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    document.getElementById('title').style.color = invertColor(newColor);
});