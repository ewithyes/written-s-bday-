document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(lnk => lnk.classList.remove('active'));  // Uklanja klasu 'active' s svih linkova
            link.classList.add('active');  // Dodaje klasu 'active' na kliknuti link
        });
    });
});
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded user credentials
    const storedUsername = 'user1';
    const storedPassword = 'password123';

    if (username === storedUsername && password === storedPassword) {
        alert('SLAYYY you have successfully logged in!!! :DDD');
        // Redirect to another page or change the view
        window.location.href = 'index.html'; // Assume there's a welcome page
    } else {
        document.getElementById('error-message').textContent = '://// incorrect username or password!';
    }
}

const text = 'Warmest welcome!';
const specialWord = "welcome!";
const specialColor = "#fdb25d"; // Boja za posebnu riječ
let index = 0;
let currentText = '';
let isSpecialWord = false;
let specialWordIndex = 0;

function typeText() {
  if (index < text.length) {
    const currentChar = text.charAt(index);
    
    if (text.substr(index, specialWord.length) === specialWord && !isSpecialWord) {
      // Počinje posebna riječ
      isSpecialWord = true;
      specialWordIndex = 0;
    }
    
    if (isSpecialWord) {
      // Ako se trenutno kuca posebna riječ
      if (specialWordIndex < specialWord.length) {
        currentText += `<span style="color: ${specialColor};">${currentChar}</span>`;
        specialWordIndex++;
      }
      if (specialWordIndex === specialWord.length) {
        // Ako je posebna riječ završena
        isSpecialWord = false;
      }
    } else {
      currentText += currentChar;
    }
    
    document.getElementById('typing').innerHTML = currentText;
    index++;
    setTimeout(typeText, 300); // Podesite brzinu prema želji
  } else {
    // Nakon što je cijeli tekst prikazan, resetirajte za ponovni početak
    setTimeout(() => {
      index = 0;
      currentText = '';
      document.getElementById('typing').innerHTML = '';
      typeText(); // Ponovno pokretanje
    }, 2500); // pauza prije ponovnog pokretanja
  }
}
document.addEventListener("DOMContentLoaded", () => {
  typeText();
});

document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.prevBtn');
  const nextBtn = document.querySelector('.nextBtn');
  const carouselContent = document.querySelector('.carousel-content');

  let counter = 0;

  nextBtn.addEventListener('click', () => {
    counter++;
    carouselContent.style.transform = `translateX(-${counter * 100}%)`;
    // Ako dođemo do kraja, vratimo se na početak
    if (counter === 3) { // Ako imamo 3 slike, promijenite broj prema broju slika koje imate
      counter = 0;
      carouselContent.style.transform = `translateX(0%)`;
    }
  });

  prevBtn.addEventListener('click', () => {
    if (counter > 0) {
      counter--;
      carouselContent.style.transform = `translateX(-${counter * 100}%)`;
    }
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
      link.addEventListener('click', function () {
          links.forEach(lnk => lnk.classList.remove('active'));  // Uklanja klasu 'active' s svih linkova
          link.classList.add('active');  // Dodaje klasu 'active' na kliknuti link
      });
  });
});


function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Hardcoded user credentials
  const storedUsername = 'user1';
  const storedPassword = 'password123';

  if (username === storedUsername && password === storedPassword) {
      alert('SLAYYY you have successfully logged in!!! :DDD');
      // Redirect to another page or change the view
      window.location.href = 'index.html'; // Assume there's a welcome page
  } else {
      document.getElementById('error-message').textContent = '://// incorrect username or password!';
  }
}

document.addEventListener("DOMContentLoaded", function() {
const funFacts = [
  { 
      fact: "The shortest war in history lasted only 38 minutes between Britain and Zanzibar in 1896.",
      link: "https://en.wikipedia.org/wiki/Anglo-Zanzibar_War"
  },
  { 
      fact: "Bananas are berries, but strawberries aren't.",
      link: "https://stanfordmag.org/contents/bananas-are-berries#:~:text=Strawberries%20and%20raspberries%20aren't,and%20typically%20have%20several%20seeds."
  },
  { 
      fact: "The original name of Bank of America was 'Bank of Italy.'",
      link: "https://en.wikipedia.org/wiki/Bank_of_America"
  }
];

function displayRandomFunFact() {
  const lastDisplayedFact = localStorage.getItem('lastDisplayedFact');
  const lastDisplayedTime = localStorage.getItem('lastDisplayedTime');
  const currentTime = new Date().getTime();
  const timeElapsed = currentTime - Number(lastDisplayedTime);

  let factText, factLink; // Declare variables outside if scope

  if (!lastDisplayedFact || timeElapsed >= 86400000) {
    let factIndex = Math.floor(Math.random() * funFacts.length);
    while (funFacts[factIndex].fact === lastDisplayedFact && funFacts.length > 1) {
      factIndex = Math.floor(Math.random() * funFacts.length);
    }

    factText = funFacts[factIndex].fact;
    factLink = funFacts[factIndex].link;

    localStorage.setItem('lastDisplayedFact', factText);
    localStorage.setItem('lastDisplayedTime', currentTime.toString());
  } else {
    factText = lastDisplayedFact;
    // We need to find the link of the last displayed fact
    const fact = funFacts.find(f => f.fact === factText);
    factLink = fact ? fact.link : "#"; // Provide a fallback link or handle it accordingly
  }

  const factElement = document.getElementById("fun-fact-text");
  factElement.innerHTML = `<a href="${factLink}" target="_blank">${factText}</a>`;
}


displayRandomFunFact();
setInterval(displayRandomFunFact, 86400000);
});



document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.prevBtn-1');
  const nextBtn = document.querySelector('.nextBtn-1');
  const carouselContent = document.querySelector('.carousel-content-1');

  let counter = 0;

  nextBtn.addEventListener('click', () => {
    counter++;
    carouselContent.style.transform = `translateX(-${counter * 100}%)`;
    // Ako dođemo do kraja, vratimo se na početak
    if (counter === 3) { // Ako imamo 3 slike, promijenite broj prema broju slika koje imate
      counter = 0;
      carouselContent.style.transform = `translateX(0%)`;
    }
  });

  prevBtn.addEventListener('click', () => {
    if (counter > 0) {
      counter--;
      carouselContent.style.transform = `translateX(-${counter * 100}%)`;
    }
  });
});













