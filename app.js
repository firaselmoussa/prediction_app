// END POINTS
// The api for getting the gender is: https://api.genderize.io?name=rio
// The api for getting the age is: https://api.agify.io/?name=nour
// The api for getting the nationality: https://api.nationalize.io/?name=mohamad
// The api for getting the dog images: https://dog.ceo/api/breeds/image/random

// fetching random dog image and implementing it as the body's bg.
// step 1: GET from the api data
// step 2: turning the promise into a response
// step 3: turning the response into a json object and manipulating the needed parts.
fetch('https://dog.ceo/api/breeds/image/random').then(
    res => 
        res.json()).then(
            data => 
            // couldnt add low backdrop filter to the body to lower it's brightness & and blur the main section at the same time so I added a gradient over thebg image
                document.body.style.background = ` linear-gradient(rgba(0,0,0, .6), rgba(0,0,0, .6)), 
                url(${data.message} )`
    )