//carousel initialize

$(".carousel").carousel({
    interval: 5000,
});

// Reviews
// local reviews data
const reviews = [
    {
        id: 1,
        name: "Ased Constructions",
        job: "Building and Constructions",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jp",
        text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ratione deleniti cum optio illo excepturi error. Voluptatem iste doloremque obcaecati! Perspiciatis dolor dolorum pariatur aut voluptatibus beatae quas accusantium sed?.",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jp",
        text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ratione deleniti cum optio illo excepturi error. Voluptatem iste doloremque obcaecati! Perspiciatis dolor dolorum pariatur aut voluptatibus beatae quas accusantium sed?.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jp",
        text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ratione deleniti cum optio illo excepturi error. Voluptatem iste doloremque obcaecati! Perspiciatis dolor dolorum pariatur aut voluptatibus beatae quas accusantium sed?.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jp",
        text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ratione deleniti cum optio illo excepturi error. Voluptatem iste doloremque obcaecati! Perspiciatis dolor dolorum pariatur aut voluptatibus beatae quas accusantium sed?.",
    },
];

//select item
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

// show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

// show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

// show random person
randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
});

// call.addEventListener("mouseout", function (event) {
//     const link = document.createElement("li");
//     event.target.style.display = "none";
// });

// dynamic footer year
function dynamicYear() {
    const footer = document.getElementById("copyright");
    footer.textContent = new Date().getFullYear();
}
addEventListener("DOMContentLoaded", dynamicYear);

// <script>document.write(new Date().getFullYear());
