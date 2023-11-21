function repeat (){
// clearInterval არის მეთოდი რომელსაც გადაეცემა 2 არგუმენტი ფუნცქია და დრო მილიწამებში (ფუნქიცამ, დრო)
    const box = document.querySelector('#box');
    console.log(box);

// move left funct
move()
function move(){
    let pos = 0;
    let left = setInterval(function() {
        if(pos >= 150){
            clearInterval(left);
            move2();
        }else{
            pos += 1;
            box.style.left = pos + 'px';
        }
    }, 3);
}
    
    // move right
    function move2(){
        let downPos = 0;
        let tBottom = setInterval(function() {
            if(downPos >= 150){
                clearInterval(tBottom);
                move3();
            }else{
                downPos += 1;
                box.style.top = downPos + 'px';
            }
        }, 3);
    }
    function move3(){
        let rightPos = 150;
        let rBottom = setInterval(function() {
            if(rightPos <= 0){
                clearInterval(rBottom);
                move4();
            }else{
                rightPos -= 1;
                box.style.left = rightPos + 'px';
            }
        }, 3);
    
    }
    function move4(){
        let tightPos = 150;
        let rBottom = setInterval(function() {
            if(tightPos <= 0){
                clearInterval(rBottom);
                move()
            }else{
                tightPos -= 1;
                box.style.top = tightPos + 'px';
            }
        }, 3);
    }
}
repeat()