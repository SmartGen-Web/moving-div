var positionx = 1;
var positiony = 1;

window.onload=createDiv();
function createDiv(){
    for (i=0; i<4; i++){
    
        var divs = document.createElement("div");
            divs.setAttribute('id', 'div_id' + i );
            
    
            divs.style = "position:absolute;text-align:center;padding-top: 15px; height: 50px;width: 50px; top:" + X + "px; left:" + Y + "px;";

            var X =  Math.floor((Math.random() * 420)+ 1) ;
            var Y =  Math.floor((Math.random() * 420)+ 1);

            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            divs.style.background = "#" + randomColor;
            
            const maindiv = document.getElementById("moving-div");
            maindiv.append(divs);              
            Movement(0.6, 0.6, X, Y, divs);
            
        }    
    }
    function Movement(xposition, yposition, X, Y, divs) {
        setInterval(() => {
          X += xposition;
          divs.style.left = X + "px";
          Y += yposition;
          divs.style.top = Y + "px";
          if(X > 450 || X < 0){
            xposition = xposition * -1;
        }
        if (Y > 440 || Y < 0) {
            yposition = yposition * -1;
        }
        }, 1);
      }
    
    