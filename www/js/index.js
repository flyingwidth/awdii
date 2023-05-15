const gokartData = [
    {
        img : "https://storage.googleapis.com/floatreactor/sprint-karts.jpg",
        price : 29,
        title : "Sprint Karts",
        desc : "Experience speed and precision with our lightweight Sprint Karts."
    },
    {
        img : "https://storage.googleapis.com/floatreactor/enduro-karts.jpg",
        price : 39,
        title : "Enduro Karts",
        desc : "Take on tough terrain with our tough and durable Enduro Karts."
    },
    {
        img : "https://storage.googleapis.com/floatreactor/indoor-karts.jpg",
        price : 24,
        title : "Indoor Karts",
        desc : "Get heart-pumping action with our safe and exciting battery powered Indoor Karts."
    },
    {
        img : "https://storage.googleapis.com/floatreactor/offroad-karts.jpg",
        price : 49,
        title : "Off-road Karts",
        desc : "Explore the great outdoors with our rugged Off-road Karts equipped with off-road tires."
    },
    {
        img : "https://storage.googleapis.com/floatreactor/super-karts.jpg",
        price : 59,
        title : "Super Karts",
        desc : "Feel the ultimate adrenaline rush with our high-speed Super Karts."
    }
]

const gokartReview = [
    {
        img : "https://storage.googleapis.com/floatreactor/profil1.jpg",
        rating : 5,
        name : "Raharja Widodo",
        content : "I've been racing for years, and these Sprint Karts are by far the best I've ever driven! They're incredibly lightweight, with amazing handling and acceleration."
    },
    {
        img : "https://storage.googleapis.com/floatreactor/profil2.jpg",
        rating : 4,
        name : "Jayadi Suryono",
        content : "I had so much fun racing these indoor karts with my friends! The electric-powered karts are quiet and fast, and the track is designed for thrilling turns and straightaways."
    }
]

const setProduct = ({img, price, title, desc}) => {
    const section = document.createElement("section");
    section.className = "card product";

    const image = document.createElement("img");
    image.setAttribute("src", img);
    
    const content = document.createElement("div");
    
    const heading = document.createElement("h3");
    heading.innerText = title;

    const span = document.createElement("span");
    span.className = "highlight-small";
    span.innerText = `${price}k/lap`;

    const p = document.createElement("p")
    p.innerText = desc;

    [heading, span, p].map((item) => {
        content.appendChild(item);
    })

    section.appendChild(image);
    section.appendChild(content);

    return section;
}

const setReview = ({img, rating, name, content}) => {
    const section = document.createElement("section");
    section.className = "card review";

    const profile = document.createElement("img");
    profile.className = "profile";
    profile.setAttribute("src", img);

    const div = document.createElement("div");

    const profileName = document.createElement("h3");
    profileName.innerText = name;

    const ratingReview = document.createElement("img");
    ratingReview.setAttribute("src", `https://storage.googleapis.com/floatreactor/${rating}.svg`);
    ratingReview.style.height = "16px";
    ratingReview.style.width = "80px";

    div.appendChild(profileName);
    div.appendChild(ratingReview);

    const p = document.createElement("p");
    p.innerText = content;

    const reviewHeader = document.createElement("div");
    reviewHeader.className = "review-header";
    reviewHeader.appendChild(profile);
    reviewHeader.appendChild(div);

    section.appendChild(reviewHeader);
    section.appendChild(p);

    return section;
}

const renderArray = (arr, child, parent) => {
    arr.forEach((data) => {
        parent.appendChild(child(data));
    })
}

const moveTo = (id) => {
    
}

renderArray(gokartData, setProduct, document.getElementById("list-product"));
renderArray(gokartReview, setReview, document.getElementById("list-review"));
