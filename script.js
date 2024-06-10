
class Item {
    constructor(element) {
        this.plus = element.querySelector(".plus");
        this.moin = element.querySelector(".moin");
        this.prix = element.querySelector(".prix");
        this.total = element.querySelector(".total");
        this.valeur = element.querySelector(".valeur");

        this.plus.addEventListener("click", () => {
            let btnplus = parseInt(this.prix.innerHTML);
            btnplus++;
            this.valeur.innerHTML = btnplus * parseInt(this.total.innerHTML);
            this.prix.innerHTML = btnplus;
        });

        this.moin.addEventListener("click", () => {
            let btnmoin = parseInt(this.prix.innerHTML);
            if (btnmoin > 0) {
                btnmoin--;
                this.valeur.innerHTML = btnmoin * parseInt(this.total.innerHTML);
                this.prix.innerHTML = btnmoin;
            }
        });
    }
}

let parent = document.querySelector("#parent");
let fils = document.querySelectorAll("#fils");

fils.forEach((element) => {
    new Item(element);
});

