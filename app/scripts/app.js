// const links = document.getElementsByClassName("link");
// const linksStatic = document.querySelectorAll('[data-link="true"]');
// const nav = document.getElementById('nav');
// const isHomePage = location.pathname === "/index.html";

// const navigationListItem = document.createElement('li');
// const linkToPricePage = document.createElement('a');
// linkToPricePage.innerText = 'Pricing';
// linkToPricePage.setAttribute('class', 'link');
// linkToPricePage.setAttribute('href', isHomePage ? "./app/pages/pricing.html" :"./pricing.html");
// navigationListItem.append(linkToPricePage);

// nav.append(navigationListItem)

// const links2 = document.querySelectorAll(".link");
// const hrefs = []

// links2.forEach((value) => hrefs.push(value.getAttribute("href")))
// console.log("🚀 ~ hrefs:", hrefs)

// hrefLinks.forEach((item) => {
//   const href = item.getAttribute("href");
//   const preparedHref = location.pathname === "/" ? "/" : location.pathname.split('/').pop();
//   const isActive = href === `./${preparedHref}`;
//   console.log("🚀 ~ hrefLinks.forEach ~ preparedHref:", preparedHref);
//   console.log("🚀 ~ hrefLinks.forEach ~ location.pathname:", location.pathname);
//   console.log("🚀 ~ hrefLinks.forEach ~ href:", href);
//   console.log("🚀 ~ hrefLinks.forEach ~ isActive:", isActive);
  
//   if (isActive) {
//     item.style.color = "#e1e4e8";
//   }
// })


const linkHrefs = ['/', './about.html', './contants.html', './pricing.html', './tasks.html'];
const nav = document.getElementById('nav');

linkHrefs.forEach(link => {
  const splittedLinkName = link.split(".");
  const navigationListItem = document.createElement('li');
  const linkToPricePage = document.createElement('a');
  linkToPricePage.style.textTransform = 'capitalize';
  linkToPricePage.innerText = link === '/'? "Home": splittedLinkName[splittedLinkName.length - 2].slice(1); 
  linkToPricePage.setAttribute('class', 'link');
  linkToPricePage.setAttribute('href', link === '/' ? link : location.pathname !== "/" ? link : `./app/pages${link.slice(1)}`);
  navigationListItem.append(linkToPricePage);
  nav.append(navigationListItem)
})

// Task2, Task3
const h1Title = document.querySelector('h1');
h1Title.innerText = 'Title level 1';
console.log("🚀 ~ h1Title.innerText:", h1Title.innerText)
// const h1Title = document.querySelector('h1');
const pWithClass = document.querySelector("p.text");
console.log("🚀 ~ pWithClass:", pWithClass.innerText)
const itemWithId = document.querySelector("li#listItem3");
itemWithId.innerHTML = "<strong>List item 3</strong>";
const itemsLists = document.querySelectorAll("li.list-item")
console.log("🚀 ~ itemsLists:", itemsLists)

//Task 4
const firstParagraph = document.querySelector('p a');
firstParagraph.setAttribute("target", "_blank");
firstParagraph.setAttribute('rel', 'noopener');
firstParagraph.removeAttribute('role');
firstParagraph.setAttribute("href", "https://getbootstrap.com/")

console.log("🚀 ~ firstParagraph:", firstParagraph)

// Task 5
const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png';
const image = document.createElement('img');
image.style.width = '300px';
image.style.height = '150px';
image.setAttribute("src", imageUrl);
h1Title.append(image);



