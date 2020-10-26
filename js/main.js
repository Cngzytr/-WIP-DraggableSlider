var sliderInit = {
    slideIndex : 0,
    divIndex : 2,
    posX : 0,
    slide:function(e) {
        let panel = document.querySelectorAll(e.selector + " div [data-sliderpanel]"),
            imageWidth = document.querySelector(e.selector + " div div div img"),
            offsetX = imageWidth.offsetWidth,
            intervalOffset = 600,
            prev = document.querySelector(".prev"),
            next =  document.querySelector(".next"),
            pagination = document.querySelector(e.selector + " ul"),
            createDots = {
                dotsCreate: function() {
                    for (let index = 1; index < panel[sliderInit.divIndex].children.length + 1; index++) {
                        let li = document.createElement('li');
                        let inner = document.createTextNode(index);
                        li.appendChild(inner);
                        pagination.appendChild(li);
                    }
                },

                activeClass: function () {
                    pagination.children[sliderInit.slideIndex].classList.add("active");
                },

                removeClass:function () {
                    for (let i = 0; i < sliderInit.slideIndex + 1 ; i++) {
                        pagination.children[i].classList.remove("active");
                    }
                }
            },
            interval = {
                autoSlideNext:function(){
                    if(sliderInit.posX > -(offsetX * (panel[sliderInit.divIndex].children.length - 1))){
                        sliderInit.posX += -(offsetX);
                        panel[sliderInit.divIndex].style.left = sliderInit.posX.toString() + "px";
                        sliderInit.slideIndex++;
                        createDots.removeClass();
                        createDots.activeClass();
                    }else {
                        panel[sliderInit.divIndex].style.left = "0px";
                        sliderInit.posX = 0;
                        sliderInit.slideIndex = 0;
                        createDots.removeClass();
                        createDots.activeClass();
                        pagination.lastChild.classList.remove("active");
                    }
                }                
            },
            slideInterval = setInterval(interval.autoSlideNext, intervalOffset);

            createDots.dotsCreate();
            slideInterval;
            panel.forEach(element => {
               element.addEventListener('mousemove', function () {
                   clearInterval(slideInterval);
               }) 
            });

            panel.forEach(element => {
                element.addEventListener('mouseleave', function () {
                    slideInterval = setInterval(interval.autoSlideNext, intervalOffset);
                }) 
             });

            if(this.divIndex > 0){
                for (let i = 0; i < this.divIndex; i++) {
                    panel[i].style.display = "none";
                } 
            }
            
            panel.forEach(element => {
                element.style.left = "0px";
            });
            
            
            next.addEventListener("click", function(){
                interval.autoSlideNext();
            })
            prev.addEventListener("click", function(){
                sliderInit.posX += (offsetX);
                panel[sliderInit.divIndex].style.left = sliderInit.posX.toString() + "px";
            })
    },
    
}
