function Firstanimation(){
const greenicon = document.querySelector("#greenIcon");
const CheckIcon = document.querySelector("#CheckIcon");
const tl = gsap.timeline();

tl.from(greenicon, {
    rotate: 155,
   duration:1,
});
tl.from(CheckIcon, {
    opacity: 0, 
    duration: 1,
});
conformation_Sound();
};

const SubmitBtn = document.querySelector("#submit");

SubmitBtn.addEventListener("click", function() {
    const pyapp = document.querySelector(".PaytmApp");
    const from = document.querySelector(".From");

        pyapp.style.display = "block";
        from.style.display = "none";
        Firstanimation();
        TakeInput();
        BacktoHome();
        
});


function TakeInput() {
    const UserName = document.querySelector("#username").value;
    const UserMobileNumber = document.querySelector("#mobile").value;
    const UserAmount = document.querySelector("#amount").value;
    const ShowName = document.querySelector(".name");
    const ShowAmount = document.querySelector(".amount");
    const ShowNumber = document.querySelector(".number");

    ShowName.innerHTML = `${UserName}`;
    ShowAmount.innerHTML = `${UserAmount}`;
    ShowNumber.innerHTML = `${UserMobileNumber}`;

    ShowAmount.classList.add("text-4xl", "font-bold", "text-black","text-center");
    ShowTime_Date();
    ShowRandomNumber();
    ShowAmount1();
};

function ShowTime_Date(){
    const showTime_Date = document.querySelector(".Time_Date");
    const today = new Date();
    let Hour = today.getHours();
    let Minute = today.getMinutes();
    const date = today.getDate();
    const Month = today.toLocaleDateString('en-IN', { month: 'long' });;
    const Year = today.getFullYear();
    const prepend = (Hour > 12)? "PM" : "AM";
    Hour = (Hour > 12)? Hour - 12 : Hour;
    Hour = (Hour < 10)? `0${Hour}` : Hour;
    Minute = (Minute < 10)? `0${Minute}` : Minute;
    showTime_Date.innerHTML = `${Hour}:${Minute} ${prepend} , ${date} ${Month} ${Year}`;

};
function ShowRandomNumber(){
    let walletId = document.querySelector(".WalletId");
    function generateRandom11DigitNumber() {
        let randomNumber = '';
        for (let i = 0; i < 11; i++) {
            randomNumber += Math.floor(Math.random() * 10);
        }
        return randomNumber;
    }
        
      walletId.innerHTML = `wallet Txn ID:${generateRandom11DigitNumber()}`;
};

function ShowAmount1(){
    let Balance = document.querySelector(".Balance");
    function generateRandom11DigitNumber() {
        let randomNumber = '';
        for (let i = 0; i < 3; i++) {
            randomNumber += Math.floor(Math.random() * 10);
        }
        return randomNumber;
    }
    Balance.innerHTML = `Updated Wallet Balance ₹${generateRandom11DigitNumber()}`;
}

function BacktoHome(){
    const home = document.querySelector("#Home");
    const pyapp = document.querySelector(".PaytmApp");
    const from = document.querySelector(".From");


    home.addEventListener("click", function() {

            pyapp.style.display = "none";
            from.style.display = "block";
            home.style.color = "black"; // Corrected property name
        }
)};

function conformation_Sound(){
    const music = new Audio("Paytm_Sound.mp3");
    music.play();
};
