//selecting elements
const input = document.querySelector('.date-box');
const calculateBtn = document.querySelector('.cal-btn');

const dayBox = document.querySelector('.days h2');
const monthBox = document.querySelector('.months h2');
const yearBox = document.querySelector('.years h2');
let birthdate, birthmonth, birthyear, leapyear;

//logic part
calculateBtn.addEventListener("click",()=>{
    if(input.value ===""){
        alert("Please enter your date of birth")
    }else{
        // birthdetails
        const birthday = new Date (input.value);
        let birthMonth = (birthday.getMonth());
        let birthYear = (birthday.getFullYear());
        let birthDay = (birthday.getDate());

        // current date
        const todayDay = new Date().getDate();
        const todayMonth = (new Date().getMonth());
        const todayYear = new Date().getFullYear();

        

        // Not born yet 
        
        if(
            birthYear > todayYear || (birthMonth >todayMonth && birthYear == todayYear) || (birthDay > todayDay && birthMonth == todayMonth && birthYear == todayYear)
        ){
            alert ("Not born yet");
            return;
        } 
        //BirthYear Output

        birthyear = todayYear - birthYear;
        
        //BirthMonth Output

        if(todayMonth >= birthMonth){
            birthmonth = todayMonth - birthMonth;
        }else{
            birthyear--;
            birthmonth = 12 + todayMonth - birthMonth;
    
        }
        

        //BirthDate output

        if(todayDay >= birthDay){
            birthdate = todayDay - birthDay;
        }else{
            birthmonth--;
            const daysInPrevMonth = new Date(todayYear , todayMonth, 0).getDate();
            birthdate = todayDay + daysInPrevMonth - birthDay;
        }
        if (birthmonth < 0) {
        birthmonth += 12;
        birthyear--;
}

    // Happy Birthday wish

    if( birthdate===0 && birthmonth === 0){
        setTimeout(function() {
        alert("Happy Birthday User !");
        }, 1000); 
        
    }
    // Display Output
    dayBox.textContent = birthdate.toString(); 
    monthBox.textContent = birthmonth.toString(); 
    yearBox.textContent = birthyear.toString(); 
    }
    
});