var sliderInit = {
    slideIndex : 0,
    divIndex : 0,
    posX : 0,
    slide:function(e) {
        let panel = document.querySelectorAll(e.selector + " div [data-sliderpanel]"),
            imageWidth = document.querySelector(e.selector + " div div div img"),
            offsetX = imageWidth.offsetWidth,
            prev = document.querySelector(".prev"),
            next =  document.querySelector(".next"),
            pagination = document.querySelector(e.selector + " ul");

            panel.forEach(element => {
                element.style.left = "0px";
            });
            
            for (let index = 1; index < panel[sliderInit.divIndex].children.length + 1; index++) {
                let li = document.createElement('li');
                let inner = document.createTextNode(index);
                li.appendChild(inner);
                pagination.appendChild(li);
            }

            next.addEventListener("click", function(){
                if(sliderInit.posX >= ){
                    sliderInit.posX += -(offsetX);
                    panel[sliderInit.divIndex].style.left = sliderInit.posX.toString() + "px";
                }else {
                    panel[sliderInit.divIndex].style.left = "0px";
                }
                
            })
            prev.addEventListener("click", function(){
                sliderInit.posX += (offsetX);
                panel[sliderInit.divIndex].style.left = sliderInit.posX.toString() + "px";
            })
    },
    
}
