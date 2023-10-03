//begin with a happy pet for the first time that the site is opened
let petState = {
    mood: "Happy",
    health: "Good",
};

//if this is not the first time the site has been used, then pull the states from local storage
if (localStorage.getItem("petState")) {
    petState = JSON.parse(localStorage.getItem("petState"));
}

//function that updates the pets mood and health
function updatePet() {
    document.getElementById("mood").textContent = `Mood: ${petState.mood}`;
    document.getElementById("health").textContent = `Health: ${petState.health}`;

    //if we have already put in the css styling for the mood or health, then take it off
    const petElement = document.getElementById("pet");
    petElement.classList.remove( "pet-sleepy", "pet-hungry", "pet-happy", "pet-excited", "pet-sad", "pet-content", "pet-neutral");

    // set the right css based on health and mood
    if (petState.health === "Bad") {
        petElement.classList.add("pet-sad");
    } else if (petState.mood === "Sleepy") {
        petElement.classList.add("pet-sleepy");
    } else if (petState.mood === "Hungry") {
        petElement.classList.add("pet-hungry");
    } else if (petState.mood === "Happy") {
        petElement.classList.add("pet-happy");
    } else if (petState.mood === "Excited") {
        petElement.classList.add("pet-excited");
    } else if (petState.mood === "Sad") {
        petElement.classList.add("pet-sad");
    } else if (petState.mood === "Content") {
        petElement.classList.add("pet-content");
    } else if (petState.mood === "Neutral") {
        petElement.classList.add("pet-neutral");
    }
}


//when feed button is clicked
document.getElementById("feed").addEventListener("click", () => {
    petState.mood = "Happy";
    petState.health = "Nourished";
    updatePet();
    localStorage.setItem("petState", JSON.stringify(petState));
});

//when play button is clicked
document.getElementById("play").addEventListener("click", () => {
    petState.mood = "Excited";
    petState.health = "Excellent";
    updatePet();
    localStorage.setItem("petState", JSON.stringify(petState));
});

//when sleep button is clicked
document.getElementById("sleep").addEventListener("click", () => {
    petState.mood = "Sleepy";
    petState.health = "Resting";
    updatePet();
    localStorage.setItem("petState", JSON.stringify(petState));
});

//if nothing happens for a while, make the health and mood decrease
function updatePetOverTime() {
    // decrease health over time
    if (petState.health === "Excellent" || petState.health == "Nourished") {
        petState.health = "Good";
    } else if (petState.health === "Resting" || petState.health === "Good") {
        petState.health = "Fair";
    } else if (petState.health === "Fair") {
        petState.health = "Bad";
    }

    // decrease mood over time
    if (petState.mood == "Happy" || petState.mood == "Excited") {
        petState.mood = "Content";
    } else if (petState.mood == "Content") {
        petState.mood = "Neutral";
    } else if (petState.mood == "Neutral" || petState.mood == "Sleepy") {
        petState.mood = "Sad";
    }

//change the color and text etc.
    updatePet();

    //if health is bad!!! then tell the user to do something
    if (petState.health == "Bad") {
        alert("Your pet's health is bad! You need to click a button to make it healthier and happier.");
    }
}

//make the interval for decreased health and mood 10 sec
const updateInterval = setInterval(updatePetOverTime, 10000);

//for the beginning
updatePet();

