let clickCount = 0;
let clickCountVisible = 0;
let pullCount = 0;
const clickButton = document.getElementById("clickbutton");
const clickCounter = document.getElementById("clickcounter");
const pullCounter = document.getElementById("pullcounter")

// Common fruits
let apple = document.getElementById("apple");
let timesPulledApple = 0;

let orange = document.getElementById("orange");
let timesPulledOrange = 0;

let banana = document.getElementById("banana");
let timesPulledBanana = 0;

let grapes = document.getElementById("grapes");
let timesPulledGrapes = 0;

let peach = document.getElementById("peach");
let timesPulledPeach = 0;

let mango = document.getElementById("mango");
let timesPulledMango = 0;

let strawberry = document.getElementById("strawberry");
let timesPulledStrawberry = 0;

let blueberry = document.getElementById("blueberry");
let timesPulledBlueberry = 0;

let raspberry = document.getElementById("raspberry");
let timesPulledRaspberry = 0;

let pineapple = document.getElementById("pineapple");
let timesPulledPineapple = 0;


// Uncommon fruits
let lemon = document.getElementById("lemon");
let timesPulledLemon = 0;

let lime = document.getElementById("lime");
let timesPulledLime = 0;

let blackberry = document.getElementById("blackberry");
let timesPulledBlackberry = 0;

let passionfruit = document.getElementById("passionfruit");
let timesPulledPassionfruit = 0;

let apricot = document.getElementById("apricot");
let timesPulledApricot = 0;

let watermelon = document.getElementById("watermelon");
let timesPulledWatermelon = 0;

let kiwi = document.getElementById("kiwi");
let timesPulledKiwi = 0;

let pear = document.getElementById("pear");
let timesPulledPear = 0;

let tomato = document.getElementById("tomato");
let timesPulledTomato = 0;

let avocado = document.getElementById("avocado");
let timesPulledAvocado = 0;


// Rare fruits
let pomegranate = document.getElementById("pomegranate");
let timesPulledPomegranate = 0;

let papaya = document.getElementById("papaya");
let timesPulledPapaya = 0;

let lychee = document.getElementById("lychee");
let timesPulledLychee = 0;

let guava = document.getElementById("guava");
let timesPulledGuava = 0;

let grapefruit = document.getElementById("grapefruit");
let timesPulledGrapefruit = 0;

let coconut = document.getElementById("coconut");
let timesPulledCoconut = 0;

let cactuspear = document.getElementById("cactuspear");
let timesPulledCactuspear = 0;


// Legendary fruits
let pitaya = document.getElementById("pitaya");
let timesPulledPitaya = 0;

let carambola = document.getElementById("carambola");
let timesPulledCarambola = 0;

let tamarillo = document.getElementById("tamarillo");
let timesPulledTamarillo = 0;

let kiwano = document.getElementById("kiwano");
let timesPulledKiwano = 0;


clickButton.addEventListener("click", function() {
    clickCount++;
    clickCountVisible++;
    clickCounter.textContent = `Click count : ${clickCountVisible}`;

    function fruitPullAlert(fruit) {
        alert(`You unlocked... ${fruit}`);
    }

    if (clickCount === 10) {
        clickCount -= 10;

        pullCount++;
        pullCounter.textContent = `Pull count : ${pullCount}`;

        let luck = Math.floor(Math.random() * 100 + 1);
        console.log(luck);

        // Function running when you unlock the fruit for the first time
        function fruitPulled1(fruitShownAlert1, fruitShownList1, fruitName1) {
            fruitPullAlert(fruitShownAlert1);

            fruitName1.textContent = fruitShownList1;
            fruitName1.style.color = "white";
            fruitName1.style.textShadow = "1px 1px 1px black";
        }

        // Function running when you pull a fruit that you already unlocked
        function fruitPulled2(fruitShownAlert2) {
            fruitPullAlert(fruitShownAlert2);
        }

        if (luck > 35 && luck <= 100) {
            let randomPickCommon = Math.floor(Math.random() * 10 + 1);
            
            if (randomPickCommon === 1) {
                timesPulledApple++;

                if (timesPulledApple <= 1) {
                    fruitPulled1("An apple! [COMMON]", `Apple (Pull ${clickCountVisible / 10})`, apple);
                } else {
                    fruitPulled2("An apple! [COMMON]")
                };
            };

            if (randomPickCommon === 2) {
                timesPulledOrange++;

                if (timesPulledOrange <= 1) {
                    fruitPulled1("An orange! [COMMON]", `Orange (Pull ${clickCountVisible / 10})`, orange);
                } else {
                    fruitPulled2("An orange! [COMMON]");
                };
            };

            if (randomPickCommon === 3) {
                timesPulledBanana++;

                if (timesPulledBanana <= 1) {
                    fruitPulled1("A banana! [COMMON]", `Banana (Pull ${clickCountVisible / 10})`, banana);
                } else {
                    fruitPulled2("A banana! [COMMON]");
                };
            };

            if (randomPickCommon === 4) {
                timesPulledGrapes++;

                if (timesPulledGrapes <= 1) {
                    fruitPulled1("Grapes! [COMMON]", `Grapes (Pull ${clickCountVisible / 10})`, grapes);
                } else {
                    fruitPulled2("Grapes! [COMMON]");
                };
            };

            if (randomPickCommon === 5) {
                timesPulledPeach++;

                if (timesPulledPeach <= 1) {
                    fruitPulled1("A peach! [COMMON]", `Peach (Pull ${clickCountVisible / 10})`, peach);
                } else {
                    fruitPulled2("A peach! [COMMON]");
                };
            };

            if (randomPickCommon === 6) {
                timesPulledMango++;

                if (timesPulledMango <= 1) {
                    fruitPulled1("A mango! [COMMON]", `Mango (Pull ${clickCountVisible / 10})`, mango);
                } else {
                    fruitPulled2("A mango! [COMMON]");
                };
            };

            if (randomPickCommon === 7) {
                timesPulledStrawberry++;

                if (timesPulledStrawberry <= 1) {
                    fruitPulled1("A strawberry! [COMMON]", `Strawberry (Pull ${clickCountVisible / 10})`, strawberry);
                } else {
                    fruitPulled2("A strawberry! [COMMON]");
                };
            };

            if (randomPickCommon === 8) {
                timesPulledBlueberry++;

                if (timesPulledBlueberry <= 1) {
                    fruitPulled1("A blueberry! [COMMON]", `Blueberry (Pull ${clickCountVisible / 10})`, blueberry);
                } else {
                    fruitPulled2("A blueberry! [COMMON]");
                };
            };

            if (randomPickCommon === 9) {
                timesPulledRaspberry++;

                if (timesPulledRaspberry <= 1) {
                    fruitPulled1("A raspberry! [COMMON]", `Raspberry (Pull ${clickCountVisible / 10})`, raspberry);
                } else {
                    fruitPulled2("A raspberry! [COMMON]");
                };
            };

            if (randomPickCommon === 10) {
                timesPulledPineapple++;

                if (timesPulledPineapple <= 1) {
                    fruitPulled1("A pineapple! [COMMON]", `Pineapple (Pull ${clickCountVisible / 10})`, pineapple);
                } else {
                    fruitPulled2("A pineapple! [COMMON]");
                };
            };
        };

        if (luck > 10 && luck <= 35) {
            let randomPickUncommon = Math.floor(Math.random() * 10 + 1);
            
            if (randomPickUncommon === 1) {
                timesPulledLemon++;

                if (timesPulledLemon <= 1) {
                    fruitPulled1("A lemon! [UNCOMMON]", `Lemon (Pull ${clickCountVisible / 10})`, lemon);
                } else {
                    fruitPulled2("A lemon! [UNCOMMON]");
                };
            };

            if (randomPickUncommon === 2) {
                timesPulledLime++;

                if (timesPulledLime <= 1) {
                    fruitPulled1("A lime! [UNCOMMON]", `Lime (Pull ${clickCountVisible / 10})`, lime);
                } else {
                    fruitPulled2("A lime! [UNCOMMON]");
                };
            };

            if (randomPickUncommon === 3) {
                timesPulledBlackberry++;

                if (timesPulledBlackberry <= 1) {
                    fruitPulled1("A blackberry! [UNCOMMON]", `Blackberry (Pull ${clickCountVisible / 10})`, blackberry);
                } else {
                    fruitPulled2("A blackberry! [UNCOMMON]");
                };
            };

            if (randomPickUncommon === 4) {
                timesPulledPassionfruit++;

                if (timesPulledPassionfruit <= 1) {
                    fruitPulled1("A passion fruit! [UNCOMMON]", `Passion fruit (Pull ${clickCountVisible / 10})`, passionfruit);
                } else {
                    fruitPulled2("A passion fruit! [UNCOMMON]");
                };
            };

            if (randomPickUncommon === 5) {
                timesPulledApricot++;

                if (timesPulledApricot <= 1) {
                    fruitPulled1("An apricot! [UNCOMMON]", `Apricot (Pull ${clickCountVisible / 10})`, apricot);
                } else {
                    fruitPulled2("An apricot! [UNCOMMON]");
                };
            };

            if (randomPickUncommon === 6) {
                timesPulledWatermelon++;

                if (timesPulledWatermelon <= 1) {
                    fruitPulled1("A watermelon! [UNCOMMON]", `Watermelon (Pull ${clickCountVisible / 10})`, watermelon);
                } else {
                    fruitPulled2("A watermelon! [UNCOMMON]");
                };
            };

            if (randomPickUncommon === 7) {
                timesPulledKiwi++;

                if (timesPulledKiwi <= 1) {
                    fruitPulled1("A kiwi! [UNCOMMON]", `Kiwi (Pull ${clickCountVisible / 10})`, kiwi);
                } else {
                    fruitPulled2("A kiwi! [UNCOMMON]");
                };
            };

            if (randomPickUncommon === 8) {
                timesPulledPear++;

                if (timesPulledPear <= 1) {
                    fruitPulled1("A pear! [UNCOMMON]", `Pear (Pull ${clickCountVisible / 10})`, pear);
                } else {
                    fruitPulled2("A pear! [UNCOMMON]");
                };
            };

            if (randomPickUncommon === 9) {
                timesPulledTomato++;

                if (timesPulledTomato <= 1) {
                    fruitPulled1("A tomato! [UNCOMMON]", `Tomato (Pull ${clickCountVisible / 10})`, tomato);
                } else {
                    fruitPulled2("A tomato! [UNCOMMON]");
                };
            };

            if (randomPickUncommon === 10) {
                timesPulledAvocado++;

                if (timesPulledAvocado <= 1) {
                    fruitPulled1("An avocado! [UNCOMMON]", `Avocado (Pull ${clickCountVisible / 10})`, avocado);
                } else {
                    fruitPulled2("An avocado! [UNCOMMON]");
                };
            };
        };

        if (luck > 1 && luck <= 10) {
            let randomPickRare = Math.floor(Math.random() * 7 + 1);
            
            if (randomPickRare === 1) {
                timesPulledPomegranate++;

                if (timesPulledPomegranate <= 1) {
                    fruitPulled1("A pomegranate! [RARE]", `Pomegranate (Pull ${clickCountVisible / 10})`, pomegranate);
                } else {
                    fruitPulled2("A pomegranate! [RARE]");
                };
            };

            if (randomPickRare === 2) {
                timesPulledPapaya++;

                if (timesPulledPapaya <= 1) {
                    fruitPulled1("A papaya! [RARE]", `Papaya (Pull ${clickCountVisible / 10})`, papaya);
                } else {
                    fruitPulled2("A papaya! [RARE]");
                };
            };

            if (randomPickRare === 3) {
                timesPulledLychee++;

                if (timesPulledLychee <= 1) {
                    fruitPulled1("A lychee! [RARE]", `Lychee (Pull ${clickCountVisible / 10})`, lychee);
                } else {
                    fruitPulled2("A lychee! [RARE]");
                };
            };

            if (randomPickRare === 4) {
                timesPulledGuava++;

                if (timesPulledGuava <= 1) {
                    fruitPulled1("A guava! [RARE]", `Guava (Pull ${clickCountVisible / 10})`, guava);
                } else {
                    fruitPulled2("A guava! [RARE]");
                };
            };

            if (randomPickRare === 5) {
                timesPulledGrapefruit++;

                if (timesPulledGrapefruit <= 1) {
                    fruitPulled1("A grapefruit! [RARE]", `Grapefruit (Pull ${clickCountVisible / 10})`, grapefruit);
                } else {
                    fruitPulled2("A grapefruit! [RARE]");
                };
            };

            if (randomPickRare === 6) {
                timesPulledCoconut++;

                if (timesPulledCoconut <= 1) {
                    fruitPulled1("A coconut! [RARE]", `Coconut (Pull ${clickCountVisible / 10})`, coconut);
                } else {
                    fruitPulled2("A coconut! [RARE]");
                };
            };

            if (randomPickRare === 7) {
                timesPulledCactuspear++;

                if (timesPulledCactuspear <= 1) {
                    fruitPulled1("A cactus pear! [RARE]", `Cactus pear (Pull ${clickCountVisible / 10})`, cactuspear);
                } else {
                    fruitPulled2("A cactus pear! [RARE]");
                };
            };
        };

        if (luck === 1) {
            let randomPickLegendary = Math.floor(Math.random() * 4 + 1);
            
            if (randomPickLegendary === 1) {
                timesPulledPitaya++;

                if (timesPulledPitaya <= 1) {
                    fruitPulled1("A pitaya! [LEGENDARY]", `Pitaya (Pull ${clickCountVisible / 10})`, pitaya);
                } else {
                    fruitPulled2("A pitaya! [LEGENDARY]");
                };
            };

            if (randomPickLegendary === 2) {
                timesPulledCarambola++;

                if (timesPulledCarambola <= 1) {
                    fruitPulled1("A carambola! [LEGENDARY]", `Carambola (Pull ${clickCountVisible / 10})`, carambola);
                } else {
                    fruitPulled2("A carambola! [LEGENDARY]");
                };
            };

            if (randomPickLegendary === 3) {
                timesPulledTamarillo++;

                if (timesPulledTamarillo <= 1) {
                    fruitPulled1("A tamarillo! [LEGENDARY]", `Tamarillo (Pull ${clickCountVisible / 10})`, tamarillo);
                } else {
                    fruitPulled2("A tamarillo! [LEGENDARY]");
                };
            };

            if (randomPickLegendary === 4) {
                timesPulledKiwano++;

                if (timesPulledKiwano <= 1) {
                    fruitPulled1("A kiwano! [LEGENDARY]", `Kiwano (Pull ${clickCountVisible / 10})`, kiwano);
                } else {
                    fruitPulled2("A kiwano! [LEGENDARY]");
                };
            };
        };
    };
})
