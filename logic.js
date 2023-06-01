let bgImages= ["https://images.pexels.com/photos/775180/pexels-photo-775180.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/101667/pexels-photo-101667.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/316018/pexels-photo-316018.jpeg?auto=compress&cs=tinysrgb&w=700", "https://images.pexels.com/photos/1200861/pexels-photo-1200861.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/179847/pexels-photo-179847.jpeg?auto=compress&cs=tinysrgb&w=700", "https://images.pexels.com/photos/2421198/pexels-photo-2421198.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/2020376/pexels-photo-2020376.jpeg?auto=compress&cs=tinysrgb&w=600"

];

const currentTime = () => {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
    let greetings = "Good Morning";

    // hh = 0;
    // mm = 0;
    // ss = 0;

    //  localStorage.setItem(`date`, 2);
    
    if (localStorage.getItem("date") !== date.getDate().toString()) {
        let randomImage = bgImages[Math.floor(Math.random() * bgImages.length)];
        localStorage.setItem("date", date.getDate());
        localStorage.setItem("bg", randomImage);
    }

    console.log(localStorage.getItem("date") !== date.getDate().toString());

    if (hh === 0) {
        hh = 12;
    }

    if (hh === 12) {
        session = "pm"
    }


    if (hh > 12) {
        // hh = hh - 12;
        hh -= 12;
        session = "PM";
        let greetings = "Good Afternoon"
    }

    //Converting single digit numbers to double digits e.g 7 to 07
    hh = (hh < 10) ? `0${hh}` : hh;
    mm = (mm < 10) ? `0${mm}` : mm;
    ss = (ss < 10) ? `0${ss}` : ss;

    let time = `${hh}:${mm}:${ss} ${session}`;

    document.querySelector('.time').textContent = time;
    document.querySelector(".greeting").textContent = greetings;

    let t = setTimeout(() => currentTime(), 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    currentTime();
    let bg = document.querySelector('.main');
    localStorage.getItem("bg") && 
   (bg.style.backgroundImage = `url(${localStorage.getItem("bg")})`);
   
});