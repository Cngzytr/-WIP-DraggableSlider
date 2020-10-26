var sliderInit = {
    posX : 0,
    slide:function(e) {
        let panel = document.querySelector("div[data-sliderpanel]"),
            imageWidth = document.querySelector("div[data-sliderpanel] div img"),
            offsetX = imageWidth.offsetWidth + 10,
            prev = document.querySelector(".prev"),
            next =  document.querySelector(".next"),
            interval = {
                autoSlideNext:function(){
                    if(sliderInit.posX > -(offsetX * (panel.children.length - 2))){
                        sliderInit.posX += -(offsetX);
                        panel.style.left = sliderInit.posX.toString() + "px";
                        panel.style.transition = "left 0.7s ease-out";
                    }else {
                        panel.style.left = "0px";
                        sliderInit.posX = 0;
                        panel.style.transition = "none";
                    }
                },
                autoSlidePrev:function() {
                    if(sliderInit.posX < 0){
                        sliderInit.posX += (offsetX);
                        panel.style.left = sliderInit.posX.toString() + "px";
                        panel.style.transition = "left 0.7s ease-out";
                    }else {
                        panel.style.left = -(offsetX * (panel.children.length - 2 )).toString() + "px";
                        sliderInit.posX = -(offsetX * (panel.children.length - 2 ));
                        panel.style.transition = "none";
                    }
                }                
            };

            next.addEventListener("click", function(){
                interval.autoSlideNext();
            })
            prev.addEventListener("click", function(){
                interval.autoSlidePrev();
            })
    },
    
}
sliderInit.slide();