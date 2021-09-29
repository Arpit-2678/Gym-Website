'use strict';

const membershipButton = document.querySelector('#member-btn');
const plan = document.querySelector(".pricing_pannel");
const closeButton = document.querySelector(".mod-btn");
const overlayButton = document.querySelector(".book");
const goldpkg=document.querySelector('#gp1');
const platinumpkg=document.querySelector('.btn-platinum');


const closeWindow = function () {
    plan.classList.add('hidden');
    overlayButton.classList.remove('overlay');
};
if (membershipButton) {
  membershipButton.addEventListener('click', function (e) {
    e.preventDefault();
    plan.classList.remove('hidden');
    overlayButton.classList.add('overlay');
    
  });
}

    
if (closeButton) {
  closeButton.addEventListener('click', closeWindow);
}

document.addEventListener('keydown', function (e) {
   
    if (e.key === 'Escape' && !plan.classList.contains('hidden'))
        closeWindow();
});


const first="1 Month";
const three="3 Months";
const six="6 Months";
const twelve="12 Months";


const price=document.querySelector('.cost_price');

const paise = document.getElementById('plan');
if (paise) {
  paise.addEventListener('change', function () {
    const selObj = document.getElementById("plan");
    const selValue = selObj.options[selObj.selectedIndex].text;
   

    if (selValue == three) {
      price.textContent = "$130";
    }
    else if (selValue == first) {
      price.textContent = "$50";
    }
    else if (selValue == six) {
      price.textContent = "$250";
    }
    else if (selValue == twelve) {
      price.textContent = "$499";
    }
  
  });
}


const platinum=document.querySelector('.cost__complete_price');

const paisee = document.getElementById('plan__complete');
if (paisee) {
  paisee.addEventListener('change', function () {
    const selObj = document.getElementById("plan__complete");
    const selValue = selObj.options[selObj.selectedIndex].text;
   

    if (selValue == three) {
      platinum.textContent = "$420";
    }
    else if (selValue == first) {
      platinum.textContent = "$150";
    }
    else if (selValue == six) {
      platinum.textContent = "$799";
    }
    else if (selValue == twelve) {
      platinum.textContent = "$1599";
    }
  
  });
}

if (platinumpkg) {
  platinumpkg.addEventListener('click', function (e) {
    window.open('transaction.html', '_blank');
  });
}
if (goldpkg) {
  goldpkg.addEventListener('click', function (e) {
    window.open('transaction.html', '_blank');
  });
}
