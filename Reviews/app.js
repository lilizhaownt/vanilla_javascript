let persons = ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg', 'p6.jpg'];
let reviews = [
    "The cash price is reasonable.  I like not going anywhere. Humen are not fun.  I love machines.",
    "I received my insulin in perfect condition and they are not willing to reimburse me.  I will never use this service again.",
    "Amazon pharmacy is the best.  I love the fact that I can get my guns delivered along with my psychotic meds.",
    "Can't stand talking to the Siri.  She refuse to refill my vicodin early.  I told her that I lost my vicodin.  Siri pretended that she can't hear me.",
    "Siri was so helpful in answering all my drug-related questions.  She even told me how to pass my drug test.  I asked her out but she didn't answer me back.  I would definitely recommend Amazon pharmacy service if Siri talks dirty to me.",
    "Amazon pharmacy service sucks!! They were suppose to send me two times the oxycodone.  I had to harrass and lie to my local pharmacist about Amazon lost my narcotics.  My local pharmacist told me to call the police on Amazon.  You watch out Siri.  The police is coming for you."
]

let count = 0;
let index = 0;

function getReview(arg) {
    if (arg === "right") {
        count++;
        index = count;
        
        document.getElementById("reviewers").src = persons[index];
        document.getElementById("quote").innerHTML = reviews[index];
        
        if (count > 5) {
            count = 0;
            index = 0;

            document.getElementById("reviewers").src = persons[index];
            document.getElementById("quote").innerHTML = reviews[index];
        
        }
    } else if (arg === "left") {
        count--;
        index = Math.abs(count);
        
        document.getElementById("reviewers").src = persons[index];
        document.getElementById("quote").innerHTML = reviews[index];

        if (count < -5) {
            count = 0;
            index = count;

            document.getElementById("reviewers").src = persons[index];
            document.getElementById("quote").innerHTML = reviews[index];
        }
    } else {
        let randomNum = Math.floor(Math.random() * 6);
        document.getElementById("reviewers").src = persons[randomNum];
        document.getElementById("quote").innerHTML = reviews[randomNum];
    }
   
}
