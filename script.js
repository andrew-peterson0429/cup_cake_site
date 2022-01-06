let quotes = [
    "They're not baked in cups and they're definitely not cakes. Why don't we just call them for what they truly are? Little frosted Hussies!",
    "What did the cupcake say to the wrapper? Nothing! Cupcakes don't talk idiot!",
    "Ever notice how the frosting looks the same way before and after?",
    "My favorite cupcakes is the one that shed its wrapper and left skid marks down my stomach",
    "I'm giving you a dozen cupcakes, because nothing says I love you more than a lot of mini, expensive cakes",
    "Let's just call this a muffin with benefits ok",
    "6 chocolate, 4 vanilla, 3 strawberry, equals not nearly enough",
    "One for you, the rest for me!",
    "They're pretty, decorative, made with blah blah blah, just shut up, open your mouth and enjoy the goodness already!",
    "So good, even your ex will gain weight when you eat them",

]

let randomNumber = Math.floor(Math.random() * (quotes.length));

document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

/* function newQuote() {
    var randomNumber = randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
} */

function toggleMenu() {
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("primaryNav").classList.toggle("open");
}
var x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;