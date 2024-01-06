document.addEventListener("DOMContentLoaded", function () {
    let dayNum = document.querySelector("#dayNum")
    let hourNum = document.querySelector("#hourNum")
    let minuteNum = document.querySelector("#minuteNum")
    let secondNum = document.querySelector("#secondNum")
    let launchingSoon = document.querySelector("#launchingSoon")


    const countdownDuration = 14 * 24 * 60 * 60 * 1000
    
    //CALCULATE THE TARGET DATE
    const targetDate = new Date(Date.now() + countdownDuration).getTime();

    //UPDATE COUNTDOWN EVERY SECOND
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const timeDifference = targetDate - now
        
        // CALCULATE DAYS, HOURS, MINUTES, SECONDS

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))

        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

        //UPDATE THE TIMER ELEMENTS
        dayNum.textContent = days.toString().padStart(2,'0');

        hourNum.textContent = hours.toString().padStart(2,'0');

        minuteNum.textContent = minutes.toString().padStart(2,'0');
        secondNum.textContent = seconds.toString().padStart(2,'0');

        if (timeDifference < 0) {
            clearInterval(countdown)
            dayNum.textContent = "00"
            hourNum.textContent = "00"
            minuteNum.textContent = "00"
            secondNum.textContent = "00"

            launchingSoon.textContent = 'WE HAVE LAUNCHED!'
        }

    }, 1000);
    
   
})

