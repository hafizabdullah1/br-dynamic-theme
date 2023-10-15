//Main ul data
const navLi = [
    {
        liText: 'Projects'
    },
    {
        liText: 'About'
    },
    {
        liText: 'Contact'
    },
]

var ul = document.querySelector('ul')
navLi.forEach((ele) => {
    var li = document.createElement('li')
    li.innerHTML = ele.liText
    ul.appendChild(li)
})

let Projects = [
    {
        heading: "Summer House",
        src: "./img/house2.jpg"
    },
    {
        heading: "Brick House",
        src: "./img/house3.jpg"
    },
    {
        heading: "Renovated",
        src: "./img/house4.jpg"
    },
    {
        heading: "Barn House",
        src: "./img/house5.jpg"
    },
    {
        heading: "Summer House",
        src: "./img/house5.jpg"
    },
    {
        heading: "Brick House",
        src: "./img/house4.jpg"
    },
    {
        heading: "Renovated",
        src: "./img/house3.jpg"
    },
    {
        heading: "Barn House",
        src: "./img/house2.jpg"
    }
]

var pro = document.getElementsByClassName('proj')[0]
Projects.forEach((ele) => {
    var proDiv = document.createElement('div')
    proDiv.classList.add('col-lg-3')
    proDiv.classList.add('sum')
    proDiv.classList.add('col-md-4')
    proDiv.classList.add('col-sm-6')
    proDiv.classList.add('col-12')
    proDiv.innerHTML = `<h5 class="text-white bg-dark w-50 pe-3 ps-1">${ele.heading}</h5>
        
    `
    proDiv.style.backgroundImage = `url(${ele.src})`
    pro.appendChild(proDiv)
})
// console.log(pro,"test");

let teamData = [
    {
        src: "./img/team1.jpg",
        name: "John Doe",
        post: "CEO & Founder",
        about: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum"
    },
    {
        src: "./img/team2.jpg",
        name: "Jane Doe",
        post: "Architects",
        about: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum"
    },
    {
        src: "./img/team3.jpg",
        name: "Mike Ross",
        post: "Architects",
        about: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum"
    },
    {
        src: "./img/team4.jpg",
        name: "Dan Star",
        post: "Architects",
        about: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum"
    },
]

let team = document.querySelector('.teamMain')
teamData.forEach((ele) => {
    console.log(ele, "test");
    var teamCol = document.createElement('div');
    teamCol.classList.add('col-lg-3')
    teamCol.classList.add('team')
    teamCol.classList.add('col-md-4')
    teamCol.classList.add('col-sm-6')
    teamCol.classList.add('col-12')

    teamCol.innerHTML = `<img class="w-100 h-50" src="${ele.src}">
    <h5 class="pt-3 ps-2">${ele.name}</h5>
    <h6 class="fw-normal ps-2 pt-1">${ele.post}</h6>
    <P class="ps-2 pt-1"> ${ele.about}</p>
    <div class="d-grid gap-2">
  <button class="btn btn-secondary" type="button">Contact</button>
</div>
    `;
    team.appendChild(teamCol);
})
