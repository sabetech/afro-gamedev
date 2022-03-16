(function() {
    
    const sidebarToggle = document.querySelector(".mobile-sidebar-toggle");
    const closeSidebar = document.querySelector(".fa-times-circle");
    const sideBar = document.querySelector('#modal-sidebar');
    
    sidebarToggle.addEventListener('click', () => {
        sideBar.classList.remove('hidden');
        sideBar.classList.add('show');
    });

    closeSidebar.addEventListener('click', () => {
        sideBar.classList.remove('show');
        sideBar.classList.add('hidden');
    });
    

    const featuredSpeakers = [
        {
            name:"Kobla Setrikor Nyomi",
            image: "./images/speakers/sample_image1.jpg",
            position: "Game Developer, Oware3D",
            detail: `Kobla Nyomi is three things: 
                    a gamer, a software developer, 
                    and a firm believer in the potential
                    of the African mind.`
        },
        {
            name:"Papa Kwame Anane ",
            image: "./images/speakers/papa_kwame.jpg",
            position: "CEO & Principal Consultant at Grey Parrot IO",
            detail: `Responsible for ensuring the organization's engineering, 
                    operations and business units are working optimally to 
                    deliver applications.`
        },
        {
            name:"Gregory Banor",
            image: "./images/speakers/kobla_setri.jpg",
            position: "Game Developer Lead, Ananse Studios",
            detail: `Gregory's experience at Ananase Studios, Kenya 
                    gives him an unparallel outlook at the game development
                    landscape in Africa`
        },
        {
            name:"Jade Raymond",
            image: "./images/speakers/ubisoftlady.jpg",
            position: "Game Producer, Ubisoft",
            detail: `Jade Raymond (born 28 August 1975) 
                    is a Canadian video game creator, best 
                    known for helping create the Assassin's 
                    Creed in EA Motive Studios.`
        },
        {
            name:"Tymur Kushel",
            image: "./images/speakers/Tymur_Koshel.jpg",
            position: "Unity3d Team Lead",
            detail: `Tymur Kushel is a practicing
            neuroradiologist and an Associate
            Professor at the University of Alabama
            at Birmingham`
        },
        {
            name:"Albert Mensah-Ansah",
            image: "./images/speakers/albert.jpg",
            position: "CEO, Sabetech Games Studios",
            detail: `Experienced Software Engineer with 
                    a demonstrated history of working in 
                    the information technology and services 
                    industry.`
        }
    ];

    const featuredSpeakersSection = document.querySelector("#feature-speakers");
    
    const sectionHeading = `<h2 class="feature-speaker-heading">Featured Speakers</h2>`;
    featuredSpeakersSection.innerHTML = sectionHeading;

    featuredSpeakers.forEach((speaker) => {
        featuredSpeakersSection.innerHTML += 
        `<ul class="feature-speaker-list">
            <li>
                <img src="${speaker.image}" alt="Derry Speaker">
            </li>
            <li>
                <ul>
                    <li>
                        <h4>${speaker.name}</h4>
                    </li>
                    <li>
                        <em>${speaker.position}</em>
                    </li>
                    <!-- <hr class="hr-long"> -->
                    <li>
                        <p>
                            ${speaker.detail}
                        </p>
                    </li>
                </ul>
            </li>
        </ul>`
    });

    featuredSpeakersSection.innerHTML += 
    `<button class="more-class">MORE <i class="fa fa-chevron-down" aria-hidden="true"></i></button>`

   // featuredSpeakersSection.innerHTML
})()