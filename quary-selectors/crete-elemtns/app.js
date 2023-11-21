
// --------- შექმნა ---------------



//creating a new paragraph
// createElement მეთოდით იქმენრბეა ელემნტი html ში  createTextNode ტექსტი ამ მეთოეიდთ 
const p = document.createElement("p");
const node = document.createTextNode("Some new text");
//adding the text to the paragraph
// appendChild მეთოდით ემატება ტექსტი html ში და აუცილებალდ უნდა იყოს შექმნილი ტექსტი ისე ვერ ჩავწერთ მეთოდში
p.appendChild(node);

//მმივწვდეთ დივს 
const div = document.querySelector('#demo');
//adding the paragraph to the div
div.appendChild(p);


//------ ამოშლაა -----------



// removing child

// მივწვდეთ მეორე დივს
const pernet = document.querySelector('#demo-1');
console.log(pernet);

/* შეგვიძლია რომ მივწვდეთ სელექტორებს ჩვეულებრივად როგორც documnet ობიექტით ვსვდებით და შეგვიძლია კიდევ ეორმ ეხრთ ხაზში რომ მოვათავსოთ როგორც
css ში ვაკეთებდით <3 ---------- const childArray = documnet.querySelectorAll('#demo-1 p'); ----------- #demo-1 p -----------
*/
const childArray = pernet.querySelectorAll('p');

pernet.removeChild(childArray[0])
console.log(childArray)





// ---------- ჩანაცვლება -------------



// შეგვიძლია ჩავანცვლოთ შვილი ელემნეტბი
const newText = document.createElement('p');
const texOfNewText = document.createTextNode('THIS  ISS FUUUNNN THIS IS NEW TEXT');
newText.appendChild(texOfNewText);

// რა ელემენტსაც უნდა მივწვდეთ ისც უნდა დავწეროთ <3
const p1 = document.querySelectorAll('#demo-2 p')[0];
const pRpelacer = document.querySelector('#demo-2');

// ჩვენ უკვე მივწვით div-ს და შევიძლია აქედანვე რო მჩვანაცბლოთ <3 
pRpelacer.replaceChild(newText, p1);
console.log(p1) 
