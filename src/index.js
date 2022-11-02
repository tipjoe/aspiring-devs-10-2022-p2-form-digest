window.onload = () => {
    console.log('Your HttpService class should be available on window.httpServer\n\n', window.httpService)

    // Place to hold all the poops before you flush.
    let poops = []

    // Here's the food input from our HTML.
    let food = document.getElementById("food")

    // Here's the toilet div where we can dump the digested food.
    let toilet = document.getElementById("toilet")

    // Stuff for flushing the toilet.
    let flush = document.getElementById("flush")
    let flushWarning = document.getElementById("flush-warning")

    // Here's the digest button to poop the food into the toilet div.
    let digest = document.getElementById("digest")
    digest.addEventListener("submit", function(event) {
        // Don't refresh the web page when the form submits.
        event.preventDefault()

        // Don't do anything if a food wasn't entered.
        if (food.value.trim() == "") return

        poops.push('💩 ' + food.value + "<br>")
        toilet.className = "visible"
        toilet.innerHTML = poops.join("")
        food.value = ""

        if (poops.length > 2) {
            flushWarning.className = "visible"
        }

        if (poops.length > 4) {
            toilet.innerHTML = "<img style='width: 60%;' src='https://i.gifer.com/74qR.gif'>"
            setTimeout(function() {
                poops = []
                flushWarning.innerHTML = "YOU WERE WARNED!!!<br><br>GAME OVER"
                window.scrollTo(0, document.body.scrollHeight);
            }, 200)
        }
    })

    // Here's the flusher button stuff.
    flush.addEventListener("click", function() {
        poops = []
        toilet.innerHTML = "Ahhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
        flushWarning.className = "hidden"

        // Show Ahhh for 2 seconds then clear it out.
        setTimeout(function() {
            toilet.innerHTML = ""
            toilet.className = "hidden"
        }, 2000)
    })




}

const http = new HttpService()
