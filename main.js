

const btn_next=document.querySelector('.btnnext');

let imgArry=['images/desktop-image-hero-1.jpg','images/desktop-image-hero-2.jpg','images/desktop-image-hero-3.jpg'];

let headArry=['Discover innovative ways to decorate','We are available all across the globe',' Manufactured with the best materials'];

let textArry=[`We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,`With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`];

btn_next.addEventListener('click',()=>{
	const imgEl=document.querySelector('.imgMain');
	const main_texth1=document.querySelector('.main_Text h1');
	const main_textp=document.querySelector('.main_Text p');

	let splitPath=imgEl.src.split("/");
	let currentImg=(splitPath[splitPath.length-2]+"/"+splitPath[splitPath.length-1]);
	let currentImgIndex=(imgArry.indexOf(currentImg));
	let nextImgIndex=currentImgIndex+1;
	if(nextImgIndex==3){
		nextImgIndex=0;
	}
	imgEl.src=imgArry[nextImgIndex];
	main_texth1.innerText=headArry[nextImgIndex];
	main_textp.innerText=textArry[nextImgIndex];
});

const btn_back=document.querySelector(".btnback");
btn_back.addEventListener('click',()=>{
	const imgEl=document.querySelector('.imgMain');
	const main_texth1=document.querySelector('.main_Text h1');
	const main_textp=document.querySelector('.main_Text p');

	let splitPath=imgEl.src.split("/");
	let currentImg=(splitPath[splitPath.length-2]+"/"+splitPath[splitPath.length-1]);
	let currentImgIndex=(imgArry.indexOf(currentImg));
	let nextImgIndex=currentImgIndex-1;
	if(nextImgIndex==-1){
		nextImgIndex=2;
	}
	imgEl.src=imgArry[nextImgIndex];
	main_texth1.innerText=headArry[nextImgIndex];
	main_textp.innerText=textArry[nextImgIndex];
});
//Navigation menu

const navmenu = document.querySelector('#navMenu');
const logoTx = document.querySelector('.logo');
const mainMenu=document.querySelector('.mainMenu');

// hamburger.addEventListener('click',() => {
// 	navmenu.classList.toggle('show');
	
// });

function myFunction(x) {
  x.classList.toggle("change");
  navmenu.classList.toggle('show');
  logoTx.classList.toggle('show');
  mainMenu.classList.toggle('show');
}

//Button 
const slidImg = document.querySelector('.main_img');
var sliderMain = document.createElement("DIV");
var sliderBtnOne = document.createElement("BUTTON");
var sliderBtnTwo = document.createElement("BUTTON");
sliderBtnOne.innerHTML = `<img src="images/icon-angle-left.svg">`;
sliderBtnTwo.innerHTML = `<img src="images/icon-angle-right.svg">`;
sliderBtnOne.classList.add("btn");
sliderBtnTwo.classList.add("btn");
sliderBtnOne.classList.add("btnbackone");
sliderBtnTwo.classList.add("btnnexttwo");
slidImg.appendChild(sliderMain);  
sliderMain.appendChild(sliderBtnOne);  
sliderMain.appendChild(sliderBtnTwo);  

const btn_nexttwo=document.querySelector(".btnnexttwo");
btn_nexttwo.addEventListener('click',()=>{
	const imgEl=document.querySelector('.imgMain');
	const main_texth1=document.querySelector('.main_Text h1');
	const main_textp=document.querySelector('.main_Text p');

	let splitPath=imgEl.src.split("/");
	let currentImg=(splitPath[splitPath.length-2]+"/"+splitPath[splitPath.length-1]);
	let currentImgIndex=(imgArry.indexOf(currentImg));
	let nextImgIndex=currentImgIndex+1;
	if(nextImgIndex==3){
		nextImgIndex=0;
	}
	imgEl.src=imgArry[nextImgIndex];
	main_texth1.innerText=headArry[nextImgIndex];
	main_textp.innerText=textArry[nextImgIndex];
});

const btn_backone=document.querySelector(".btnbackone");
btn_backone.addEventListener('click',()=>{
	const imgEl=document.querySelector('.imgMain');
	const main_texth1=document.querySelector('.main_Text h1');
	const main_textp=document.querySelector('.main_Text p');

	let splitPath=imgEl.src.split("/");
	let currentImg=(splitPath[splitPath.length-2]+"/"+splitPath[splitPath.length-1]);
	let currentImgIndex=(imgArry.indexOf(currentImg));
	let nextImgIndex=currentImgIndex-1;
	if(nextImgIndex==-1){
		nextImgIndex=2;
	}
	imgEl.src=imgArry[nextImgIndex];
	main_texth1.innerText=headArry[nextImgIndex];
	main_textp.innerText=textArry[nextImgIndex];
});