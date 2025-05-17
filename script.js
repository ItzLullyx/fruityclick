let clickCount = 0;
let clickCountVisible = 0;
const boutonClick = document.getElementById("boutonClick");
const counter = document.getElementById("counter");

// Common fruits
let apple = document.getElementById("apple");
let orange = document.getElementById("orange");
let banana = document.getElementById("banana");
let grapes = document.getElementById("grapes");
let peach = document.getElementById("peach");
let mango = document.getElementById("mango");
let strawberry = document.getElementById("strawberry");
let raspberry = document.getElementById("raspberry");
let pineapple = document.getElementById("pineapple");

// Uncommon fruits
let lemon = document.getElementById("lemon");
let lime = document.getElementById("lime");
let blackberry = document.getElementById("blackberry");
let passionfruit = document.getElementById("passionfruit");
let apricot = document.getElementById("apricot");
let watermelon = document.getElementById("watermelon");
let kiwi = document.getElementById("kiwi");
let pear = document.getElementById("pear");
let tomato = document.getElementById("tomato");
let avocado = document.getElementById("avocado");

// Rare fruits
let pomegranate = document.getElementById("pomegranate");
let papaya = document.getElementById("papaya");
let lychee = document.getElementById("lychee");
let guava = document.getElementById("guava");
let grapefruit = document.getElementById("grapefruit");
let coconut = document.getElementById("coconut");
let cactuspear = document.getElementById("cactuspear");

// Legendary fruits
let pitaya = document.getElementById("pitaya");
let carambola = document.getElementById("carambola");
let tamarillo = document.getElementById("tamarillo");
let kiwano = document.getElementById("kiwano");

boutonClick.addEventListener("click", function() {
    clickCount++;
    clickCountVisible++;
    counter.textContent = `Click count : ${clickCountVisible}`;

    function fruitUnlockedAlert(fruit) {
        alert(`You unlocked... ${fruit}`);
    }

    if (clickCount === 10) {
        clickCount -= 10;

        let luck = Math.floor(Math.random() * 100 + 1);
        console.log(luck);

        function fruitUnlocked(fruitShownAlert1, fruitShownList1, fruitName1) {
            fruitUnlockedAlert(fruitShownAlert1);
            fruitName1.textContent = fruitShownList1;
            fruitName1.style.color = "white";
            fruitName1.style.textShadow = "1px 1px 1px black";
        }

        if (luck > 35 && luck <= 100) {
            let randomPickCommon = Math.floor(Math.random() * 10 + 1);
            
            if (randomPickCommon === 1) {
                fruitUnlocked("An apple!", "Apple", apple);
            };

            if (randomPickCommon === 2) {
                fruitUnlocked("An orange!", "Orange", orange);
            };

            if (randomPickCommon === 3) {
                fruitUnlocked("A banana!", "Banana", banana);
            };

            if (randomPickCommon === 4) {
                fruitUnlocked("Grapes!", "Grapes", grapes);
            };

            if (randomPickCommon === 5) {
                fruitUnlocked("A peach!", "Peach", peach);
            };

            if (randomPickCommon === 6) {
                fruitUnlocked("A mango!", "Mango", mango);
            };

            if (randomPickCommon === 7) {
                fruitUnlocked("A strawberry!", "Strawberry", strawberry);
            };

            if (randomPickCommon === 8) {
                fruitUnlocked("A blueberry!", "Blueberry", blueberry);
            };

            if (randomPickCommon === 9) {
                fruitUnlocked("A raspberry!", "Raspberry", raspberry);
            };

            if (randomPickCommon === 10) {
                fruitUnlocked("A pineapple", "Pineapple", pineapple);
            };
        };

        if (luck > 10 && luck <= 35) {
            let randomPickUncommon = Math.floor(Math.random() * 10 + 1);
            
            if (randomPickUncommon === 1) {
                fruitUnlocked("A lemon!", "Lemon", lemon);
            };

            if (randomPickUncommon === 2) {
                fruitUnlocked("A lime!", "Lime", lime);
            };

            if (randomPickUncommon === 3) {
                fruitUnlocked("A blackberry!", "Blackberry", blackberry);
            };

            if (randomPickUncommon === 4) {
                fruitUnlocked("A passion fruit!", "Passion fruit", passionfruit);
            };

            if (randomPickUncommon === 5) {
                fruitUnlocked("An apricot!", "Apricot", apricot);
            };

            if (randomPickUncommon === 6) {
                fruitUnlocked("A watermelon!", "Watermelon", watermelon);
            };

            if (randomPickUncommon === 7) {
                fruitUnlocked("A kiwi!", "Kiwi", kiwi);
            };

            if (randomPickUncommon === 8) {
                fruitUnlocked("A pear!", "Pear", pear);
            };

            if (randomPickUncommon === 9) {
                fruitUnlocked("A tomato!", "Tomato", tomato);
            };

            if (randomPickUncommon === 10) {
                fruitUnlocked("An avocado!", "Avocado", avocado);
            };
        };

        if (luck > 1 && luck <= 10) {
            let randomPickRare = Math.floor(Math.random() * 7 + 1);
            
            if (randomPickRare === 1) {
                fruitUnlocked("A pomegranate!", "Pomegranate", pomegranate);
            };

            if (randomPickRare === 2) {
                fruitUnlocked("A papaya!", "Papaya", papaya);
            };

            if (randomPickRare === 3) {
                fruitUnlocked("A lychee!", "Lychee", lychee);
            };

            if (randomPickRare === 4) {
                fruitUnlocked("A guava!", "Guava", guava);
            };

            if (randomPickRare === 5) {
                fruitUnlocked("A grapefruit!", "Grapefruit", grapefruit);
            };

            if (randomPickRare === 6) {
                fruitUnlocked("A coconut!", "Coconut", coconut);
            };

            if (randomPickRare === 7) {
                fruitUnlocked("A cactus pear!", "Cactus pear", cactuspear);
            };
        };

        if (luck === 1) {
            let randomPickLegendary = Math.floor(Math.random() * 4 + 1);
            
            if (randomPickLegendary === 1) {
                fruitUnlocked("A pitaya!", "Pitaya", pitaya);
            };

            if (randomPickLegendary === 2) {
                fruitUnlocked("A carambola!", "Carambola", carambola);
            };

            if (randomPickLegendary === 3) {
                fruitUnlocked("A tamarillo!", "Tamarillo", tamarillo);
            };

            if (randomPickLegendary === 4) {
                fruitUnlocked("A kiwano!", "Kiwano", kiwano);
            };
        };
    };
})