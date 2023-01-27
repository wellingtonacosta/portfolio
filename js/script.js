var typed = new Typed(".typing", {
  strings:["Software Engineer","Mentor","Digital Creator"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
})
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

removeBackSection();

  for(let i = 0; i < totalNavList; i++) 
  {
    const a = navList[i].querySelector("a");

    a.addEventListener("click", function () 
    {
      for(let j = 0; j < totalNavList; j++)
      {
        if(navList[j].querySelector("a").classList.contains("active")) 
        {
          addBackSection(j);
        }
        navList[j].querySelector("a").classList.remove("active");
      }
      this.classList.add("active");
      showSection(this);
    })
  }
  function showSection(element)
 {
  for(let i = 0; i < totalSection; i++) 
  {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active")

 }
  
  function removeBackSection() 
  {
    for(let i = 0; i < totalSection; i++) 
    {
      allSection[i].classList.remove("back-section");
    }
  }
  function addBackSection(num) {
    allSection[num].classList.add("back-section");
  }
  function updateNav(element) {
  for(let i = 0; i < totalNavList; i++)
  {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) 
    {
      navList[i].querySelector("a").classList.add("active");
    }
  }
 }
 document.querySelector(".hire-me").addEventListener("click", function () 
 {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this); 
  updateNav(this);
  addBackSection(sectionIndex)
 })

