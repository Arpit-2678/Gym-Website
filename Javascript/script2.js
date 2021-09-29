'use strict'

const tc = document.querySelector(".terms-conditions");
const pay=document.querySelector(".extra");
const cb = document.getElementById('accept');
const btn=document.querySelector(".btn-join");

cb.addEventListener("click", function () {
    if (cb.checked == true) {
        tc.classList.add("hidden");
        pay.classList.remove("hidden");
    }
});
    
btn.addEventListener("click", function () {
    alert("Welcome to fitZone family🤩🤗🤩");
    
});
    