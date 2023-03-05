// get the btn by id
let all_content_btn = document.getElementById("all_btn");
let bulbs_btn = document.getElementById("bulbs_btn");
let fruits_btn = document.getElementById("fruits_btn");
let podded_btn = document.getElementById("podded_btn");
let root_btn = document.getElementById("root_btn");
// get the products with id
let bulbs_cards = document.querySelectorAll("#bulbs");

let fruits_cards = document.querySelectorAll("#fruits");

let podded_cards = document.querySelectorAll("#podded");

let root_cards = document.querySelectorAll("#root");

function bubls_only(eo) {
    bulbs_cards.forEach((eo) => {
        eo.classList.add("dis-block");
        eo.classList.remove("dis-none");
    });

    fruits_cards.forEach((eo) => {
        eo.classList.remove("dis-block");
        eo.classList.add("dis-none");
    });

    podded_cards.forEach((eo) => {
        eo.classList.remove("dis-block");
        eo.classList.add("dis-none");
    });

    root_cards.forEach((eo) => {
        eo.classList.remove("dis-block");
        eo.classList.add("dis-none");
    });

    all_content_btn.classList.remove("is-click");



    fruits_btn.classList.remove("is-click");

    podded_btn.classList.remove("is-click");

    root_btn.classList.remove("is-click");

    bulbs_btn.classList.add("is-click");

};



function fruits_only(eo) {
    bulbs_cards.forEach((eo) => {
        eo.classList.remove("dis-block");
        eo.classList.add("dis-none");
    });

    fruits_cards.forEach((eo) => {
        eo.classList.add("dis-block");
        eo.classList.remove("dis-none");
    });

    podded_cards.forEach((eo) => {
        eo.classList.remove("dis-block");
        eo.classList.add("dis-none");
    });

    root_cards.forEach((eo) => {
        eo.classList.remove("dis-block");
        eo.classList.add("dis-none");
    });

    all_content_btn.classList.remove("is-click");



    fruits_btn.classList.add("is-click");

    podded_btn.classList.remove("is-click");

    root_btn.classList.remove("is-click");

    bulbs_btn.classList.remove("is-click");

};



function podded_only(eo) {
    bulbs_cards.forEach((eo) => {
        eo.classList.remove("dis-block");
        eo.classList.add("dis-none");
    });

    fruits_cards.forEach((eo) => {
        eo.classList.remove("dis-block");
        eo.classList.add("dis-none");
    });

    podded_cards.forEach((eo) => {
        eo.classList.add("dis-block");
        eo.classList.remove("dis-none");
    });

    root_cards.forEach((eo) => {
        eo.classList.remove("dis-block");
        eo.classList.add("dis-none");
    });

    all_content_btn.classList.remove("is-click");



    fruits_btn.classList.remove("is-click");

    podded_btn.classList.add("is-click");

    root_btn.classList.remove("is-click");

    bulbs_btn.classList.remove("is-click");

};



function root_only(eo) {
    bulbs_cards.forEach((eo) => {
        eo.classList.remove("dis-block");
        eo.classList.add("dis-none");
    });

    fruits_cards.forEach((eo) => {
        eo.classList.remove("dis-block");
        eo.classList.add("dis-none");
    });

    podded_cards.forEach((eo) => {
        eo.classList.remove("dis-block");
        eo.classList.add("dis-none");
    });

    root_cards.forEach((eo) => {
        eo.classList.add("dis-block");
        eo.classList.remove("dis-none");
    });

    all_content_btn.classList.remove("is-click");



    fruits_btn.classList.remove("is-click");

    podded_btn.classList.remove("is-click");

    root_btn.classList.add("is-click");

    bulbs_btn.classList.remove("is-click");

};



function all_only(eo) {
    bulbs_cards.forEach((eo) => {
        eo.classList.add("dis-block");
        eo.classList.remove("dis-none");
    });

    fruits_cards.forEach((eo) => {
        eo.classList.add("dis-block");
        eo.classList.remove("dis-none");
    });

    podded_cards.forEach((eo) => {
        eo.classList.add("dis-block");
        eo.classList.remove("dis-none");
    });

    root_cards.forEach((eo) => {
        eo.classList.add("dis-block");
        eo.classList.remove("dis-none");
    });

    all_content_btn.classList.add("is-click");



    fruits_btn.classList.remove("is-click");

    podded_btn.classList.remove("is-click");

    root_btn.classList.remove("is-click");

    bulbs_btn.classList.remove("is-click");

};


