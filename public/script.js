const showWarriors = async() => {
    const warriorsJSON = await getWarriors();
    const warriorsDiv = document.getElementById("warriors-div");

    if (warriorsJSON == "") {
        console.log("Invalid json");
        return;
    }

    warriorsJSON.forEach((warrior) => {
        const section = document.createElement("section");
        warriorsDiv.append(section);

        const Nameh2 = document.createElement("h2");
        Nameh2.innerHTML = warrior.name;
        section.append(Nameh2);

        const Weaponp = document.createElement("p");
        Weaponp.innerHTML = `<strong>Weapon</strong>: ${warrior.weapon}`;
        section.append(Weaponp);

        const Attackp = document.createElement("p");
        Attackp.innerHTML = `<strong>Attack</strong>: ${warrior.attack}`;
        section.append(Attackp);

        const Behaviorp = document.createElement("p");
        Behaviorp.innerHTML = `<strong>Behavior</strong>: ${warrior.behavior}`;
        section.append(Behaviorp);

        const Featuresul = document.createElement("ul");
        section.append(Featuresul);
    
        for (let i in warrior.features) {
            const Featuresli = document.createElement("li");
            Featuresul.append(Featuresli);
            Featuresli.innerHTML = warrior.features[i];
        }

        const img = document.createElement("img");
        img.src = "https://node-two.onrender.com/" + warrior.img;
        section.append(img);

        const hr = document.createElement("hr");
        section.append(hr);
    });

}

const getWarriors = async() => {
    try {
        return (await fetch("https://node-two.onrender.com/api/warriors")).json();
    } catch (error) {
        console.log("error getting json");
        return "";
    }
}

window.onload = () => showWarriors();