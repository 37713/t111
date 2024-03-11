

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Star Animation</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: black;
            font-family: 'Arial', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            box-shadow: 0 0 100px white inset;
            overflow: hidden;
        }
        .button-container {
            position: absolute;
            z-index: 2;
            /* Rest of your styles */
        }
        .star-button {
            /* Your button styles */
        }
        /* Star animation container */
        .star-animation-container {
            width: 300px;
            height: 300px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        /* Animated stars */
        .animated-star {
            width: 20px;
            height: 20px;
            background-color: white;
            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
            position: absolute;
            animation: spin 10s linear infinite, pulse 2s infinite alternate;
        }
        /* Spinning animation */
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        /* Pulsing animation */
        @keyframes pulse {
            from { transform: scale(1); opacity: 0.5; }
            to { transform: scale(1.5); opacity: 1; }
        }
        /* Positioning the stars */
        .animated-star:nth-child(1) { top: 10%; left: 50%; }
        .animated-star:nth-child(2) { top: 50%; left: 90%; }
        .animated-star:nth-child(3) { top: 90%; left: 50%; }
        /* Add more for additional stars */
    </style>
</head>
<body>
    <div class="star-animation-container">
        <!-- Animated stars -->
        <div class="animated-star"></div>
        <div class="animated-star"></div>
        <div class="animated-star"></div>
        <!-- Add more animated stars -->
    </div>

    <div class="button-container">
        <!-- Star-shaped buttons with links -->
        <button class="star-button" onclick="window.location.href='https://www.reddit.com/r/Piracy/wiki/megathread/';">Reddit Piracy Megathread</button>
        <button class="star-button" onclick="window.location.href='https://rentry.co/megathread';">Rentry Megathread</button>
        <button class="star-button" onclick="window.location.href='https://shakil-shahadat.github.io/awesome-piracy/';">Awesome Piracy</button>
        <button class="star-button" onclick="window.location.href='https://champagne.pages.dev/';">Champagne</button>
        <button class="star-button" onclick="window.location.href='https://everythingmoe.com/';">Everything Moe</button>
        <button class="star-button" onclick="window.location.href='https://fmhy.net/';">FMHY</button>
        <button class="star-button" onclick="window.location.href='https://ripped.guide/';">Ripped Guide</button>
        <button class="star-button" onclick="window.location.href='https://theindex.moe/';">The Index Moe</button>
        <button class="star-button" onclick="window.location.href='https://wotaku.moe/';">Wotaku Moe</button>
        <button class="star-button" onclick="window.location.href='https://thewiki.moe/';">The Wiki Moe</button>
        <!-- Add more star buttons for other links -->
    </div>

    <script>
        // JavaScript for MutationObserver
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'href') {
                    console.log('URL changed to', mutation.target.href);
                }
            });
        });

        document.querySelectorAll('.star-button').forEach(button => {
            observer.observe(button, { attributes: true });
        });
    </script>
</body>
</html>


