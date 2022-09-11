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
            // could'nt add low backdrop filter to the body to lower it's brightness & and blur the main section at the same time so I added a gradient over thebg image
                document.body.style.background = ` linear-gradient(rgba(0,0,0, .6), rgba(0,0,0, .6)), 
                url(${data.message} )`
    );

// Creating popup and appending it 
let app_container = document.getElementById('app_container');
let popup = document.createElement('div');
let top_border = document.createElement('hr');
let popup_text = document.createElement('h1');
let popup_img = document.createElement('img');
let count_down = 100;

popup.classList.add('popup');
document.body.append(popup);

top_border.classList.add('top-border');
popup.append(top_border);

popup_text.innerText = "Here's your daily dose of cuteness."
popup.append(popup_text);


fetch('https://dog.ceo/api/breeds/image/random').then(
    res => 
    res.json()).then(
    data => 
    popup_img.src = data.message);
popup_img.classList.add('popup-img');
popup.append(popup_img);


let timer = setInterval(()=>{
    if(count_down > -1){
        top_border.style.width = `${count_down}%`; 
        count_down -= .1;
    }else{
        clearInterval(timer);
        popup.style.display = 'none';
        app_container.style.display = 'flex';
    }
}, 10);


// Implementing predection functoionality and rendering results

let name_input = document.getElementById('name_input');
let predict_btn = document.getElementById('predict_btn');
let gender = document.getElementById('gender');
let age = document.getElementById('age');
let nationalities = document.getElementById('nationalities');
let know_more = document.createElement('a');
know_more.innerText = 'Know more';
know_more.style.color = 'white';


predict_btn.addEventListener('click', ()=>{
    
    // checking user's input validity
    if(!name_input.value){
        name_input.classList.add('emtpy-input');
    } else{
        name_input.classList.remove('emtpy-input');

// fetching possible gender of given input
    fetch(`https://api.genderize.io?name=${name_input.value}`).then(
    res => 
        res.json()).then(
            data => 
            gender.innerText = `Gender: ${data.gender}` 
    );

// fetching possible age of given input
    fetch(`https://api.agify.io/?name=${name_input.value}`).then(
    res => 
        res.json()).then(
            data => 
            age.innerText = `Age: ${data.age}` 
    );

// fetching possible nationality(s) of given input
    fetch(`https://api.nationalize.io/?name=${name_input.value}`).then(
    res => 
        res.json()).then(
            data => 
            nationalities.innerText = `Nationality(s): ${data.country[0].country_id} , ${data.country[1].country_id}`
            // Charbel said only 2 nationalities, otherwise i would've used foreach to loop throughout the whole array.
        );

        // Customizing wikipedia's url to fit user's input
        know_more.href = `https://en.wikipedia.org/wiki/${name_input.value}`;
        document.querySelector('.result').append(know_more);
    };
});

// ///////////////////////////////////////////
let ipAddress = document.createElement('h4');
ipAddress.classList.add('ip-address');
app_container.append(ipAddress);

    axios.get('https://api.ipify.org/?format=json').then((res)=>{
        ipAddress.innerText = res.data.ip
        
    });

    // ACIVITY


let bored_btn = document.createElement('button');
bored_btn.innerText = 'Bored?'
bored_btn .classList.add('bored_btn');
app_container.append(bored_btn);

let activity_popup = document.createElement('h5');

bored_btn.addEventListener('click',()=>{

axios.get('https://www.boredapi.com/api/activity').then((res)=>{
        activity_popup.innerText = res.data.activity;
        app_container.append(activity_popup);
    })    
});
    
    

