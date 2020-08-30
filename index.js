const sunsign = document.getElementById("sunsign");
const button = document.getElementById("button");
const input = document.getElementById("inputGroupSelect04");
const details = document.getElementById("details");
details.style.display="none"

//https://cors-anywhere.herokuapp.com/
button.addEventListener("click",function() {
    
    function getDetails(status) {
        fetch(`https://cors-anywhere.herokuapp.com/https://horoscope-api.herokuapp.com/horoscope/${status}/${input.value}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            details.style.display=""
            if(status === 'today')
                document.getElementById(`${status}Date`).innerHTML = data.date;
            else if(status === 'week') 
                document.getElementById(`${status}Date`).innerHTML = data.week;
            else if(status === 'month')
                document.getElementById(`${status}Date`).innerHTML = data.month;
            else 
                document.getElementById(`${status}Date`).innerHTML = data.year;
            document.getElementById(`${status}Horoscope`).innerHTML = data.horoscope;   
        })
        .catch((err) => {
            console.log(err);
        });
    }
    if(input.value !== 'choose') {
        sunsign.innerHTML = input.value;
        getDetails('today');
        getDetails('week');
        getDetails('month');
        getDetails('year');
    }
    else {
        details.style.display="none"
    }
    
});

