/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  function generadorNombres(pronouns, adjectives, nouns) {
    let domains = [];
    for (let i = 0; i < pronouns.length; i++) {
      for (let j = 0; j < adjectives.length; j++) {
        for (let k = 0; k < nouns.length; k++) {
          let domain = pronouns[i] + adjectives[j] + nouns[k] + ".com";
          domains.push(domain);
        }
      }
    }
    return domains;
  }
  let dominiosNombre = generadorNombres(pronoun, adj, noun);
  for (let l = 0; l < dominiosNombre.length; l++) {
    console.log(dominiosNombre[l]);
  }
  let domainListText = dominiosNombre.join("\n");
  document.getElementById("generar").innerText = domainListText;
};
