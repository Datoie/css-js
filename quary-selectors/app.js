// თუ გვინდა რომ მივწვდეთ ჰტმლის ფაილს ვიყნებთ document. cuarySelectos / getElementById / getElementById getElementsByTagName
// querySelector / querySelectorAll განსხვავება ისაა რომ პიველი ირჩევს მხოლოდ 1 ელემნტს და მეორე ირჩევს ყველა ელემენტს და ქმნის ერაის 

window.onload = () => {
    const heading = document.querySelectorAll('h1');
    heading[0].style.color = "6600FF";
}

// window არის ობიექტი ვების და მაგ ობიექტის მეთოდია onload რომელიც წვდომას გვაძლევს html ის ელემენტებზე და ჩატვირთვის შემდეგ ირთვება
// მაგრამ შეგვიძლია რომ სრიფტი hmtl ის ბოლოსში მოვათავსოთ და აღარ გამოვიყენოთ ეს თვისება <3

// const heading = document.querySelectorAll('h1');
// console.log(heading);

// შეგვიძლია როგორც class გამოვიძახოთ ------ . -------- ამის დახმარებით ასევე ---------- # ------------ id იც  querySelectorAll ში
// document.querySelectorAll('.heading');                                    document.querySelectorAll('#heading');


// შეგივძლია რომ გავსტილოთ ელემენტი style ობიექტით და შემდეგ მივუთითორ მეთოდი syle.color
// heading[0].style.color = "6600FF";


// თუ გვინდა რომ რამე ელემენტი შევცვალოთ უნდა მივწვდეთ თითიოეუილ ელემენტს 
// const heading = document.querySelectorAll('h1');


// თუ გვინდა რომ ტექსი შევცალოთ html ში უნდა მივწვდეთ პრველ რიგში documnet object ის დამხარებით
document.querySelectorAll("h1")[1].innerHTML = "Davita!";
