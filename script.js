const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const characters =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const fontSize = 16;

const columns =
    Math.floor(canvas.width / fontSize);


const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {

    ctx.fillStyle = "rgba(5, 5, 5, 0.05)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle = "#00ff88";

    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {

        const character =
            characters[
                Math.floor(
                    Math.random() * characters.length
                )
            ];

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(
            character,
            x,
            y
        );

        drops[i]++;

        if (
            drops[i] * fontSize > canvas.height &&
            Math.random() > 0.975
        ) {
            drops[i] = 0;
        }
    }
}

setInterval(draw, 50);