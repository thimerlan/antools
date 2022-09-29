// //let header = document.querySelector('.header')
// //let homescroll = document.querySelector('.home')
// // window.onscroll = () =>{
// // 	if(window.scrollY > 601){
// // 		header.classList.add('scroll')
// // 		console.log('asdfad');
// // 	} else{
// // 		header.classList.remove('scroll')
// // 	}
// // }



let menuli = document.querySelectorAll('.menu-list li')

menuli.forEach((item, index) =>{
	item.addEventListener('click', () =>{
		RemoveStyle();
		item.classList.add('active')
		
	})
})

function RemoveStyle(){
	menuli.forEach((item, index) =>{
			item.classList.remove('active')
	})
}

let openBurger = document.querySelector('.open-menu')
let closeBurger = document.querySelector('.close-menu')
let menus = document.querySelector('.menu-list')

openBurger.addEventListener('click', () =>{
	menus.classList.add('menu-list-active')
	openBurger.classList.add('open-menu-act')
	closeBurger.classList.add('close-menu-active')
});

closeBurger.addEventListener('click', () =>{
	menus.classList.remove('menu-list-active')
	openBurger.classList.remove('open-menu-act')
	closeBurger.classList.remove('close-menu-active')
});







let likeLow = document.querySelectorAll('.logo-like')
let likeAct = document.querySelectorAll('.logo-like-act')
let grids = document.querySelectorAll('.tool-grid')
likeLow.forEach((item)=>{
	item.addEventListener('click', ()=>{
		item.classList.toggle('logo-like-act')
	})
})

grids.forEach((item) =>{
	item.addEventListener('click', () =>{
		item.classList.toggle('tool-grid-act')
	})
})


const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 90,
	grabCursor: true,
	speed: 600,
	parallax: true,
	// loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	  dynamicBullets: true,
	  clickable: true,
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ //


let nameinput = document.getElementById("name")
let emailuser = ""
console.log(nameinput);

nameinput.addEventListener("input", (e)=>{
    emailuser = e.target.value
})



let count = 1
document.getElementById("form1").addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log(emailuser);
    localStorage.setItem(`user email ${count}`, emailuser)
    ++count
    emailuser = ""
    nameinput.value = ""
	localStorage.clear()
})

let name = localStorage.getItem("username3")
console.log(name);


function RemoveInfo(str){
    // localStorage.clear()
    localStorage.removeItem(srt)
}
