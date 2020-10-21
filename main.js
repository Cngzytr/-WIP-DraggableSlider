var sliderInıt = {
    slideIndex : 0,
    divIndex:0,
    slide:function() {
        let navigation = document.querySelectorAll(".enCokList li");
        let items = document.querySelectorAll('div[data-sliderpanel="active"] .slide');
        let div = document.querySelectorAll("#slides");
        let prev = document.querySelector("#prev");
        let next = document.querySelector("#next");
        let dots = document.querySelector("#enSliderList");
        let panel = document.querySelectorAll("div[data-sliderpanel]");
        console.log(panel);
        let $is_down = false;
        items[0].style.width = "755px";
        div[sliderInıt.divIndex].style.left = "0px"; 
        let slideLeft = parseInt(div[sliderInıt.divIndex].style.left);
        let sliderImage = parseInt(items[0].style.width);

        //class add to nav buttons
        navigation[0].classList.add('active');
        navigation.forEach(element => {
            element.addEventListener('click', function() {
                for(let i = 0; i < navigation.length; i++){
                    navigation[i].classList.remove('active');
                    navigation[i].setAttribute("index", i.toString());
                }
                element.classList.add('active');
                for(let i = 0; i < panel.length; i++){
                    panel[i].setAttribute("data-sliderpanel"," ");
                }
                panel[parseInt(element.getAttribute("index"))].setAttribute("data-sliderpanel","active");
                sliderInıt.divIndex = parseInt(element.getAttribute("index"));
                console.log(div.length);
                items.length = div[sliderInıt.divIndex].length;
            })
        });
        
        //create dots
        for (let index = 1; index < items.length + 1; index++) {
            let li = document.createElement('li');
            let inner = document.createTextNode(index);
            li.appendChild(inner);
            dots.appendChild(li);
        };

        //first dot active
        let dotLi = document.querySelectorAll("#enSliderList li");
        dotLi[0].classList += "active"; 

        //dot click event
        dotLi.forEach(element => {
            element.addEventListener('click', function() {
                for(let i = 0; i < dotLi.length; i++){
                    dotLi[i].classList.remove('active');
                }
                element.classList.add('active');
                let index = parseInt(element.innerHTML-1);
                sliderInıt.slideIndex = index;
                slideLeft = -(sliderImage * index);
                div[sliderInıt.divIndex].style.left = slideLeft.toString() + "px";
            })
        });
        
        div[sliderInıt.divIndex].addEventListener('mousedown', (e) => {
            $is_down = true;
            div[sliderInıt.divIndex].classList.add('active');
        });

        div[sliderInıt.divIndex].addEventListener('mouseleave', () => {
            $is_down = false;
            div[sliderInıt.divIndex].classList.remove('active');
        });

        div[sliderInıt.divIndex].addEventListener('mouseup', () => {
            $is_down = false;
            div[sliderInıt.divIndex].classList.remove('active');
        });

        div[sliderInıt.divIndex].addEventListener('mousemove', (e) => {
            if (!$is_down) return;
            e.preventDefault();
            const car = sliderImage;
            div[sliderInıt.divIndex].style.left = e.pageX - div[sliderInıt.divIndex].offsetWidth / 2 + 'px';
        });
        
        //next slide 
        next.addEventListener('click', function() {
            if(slideLeft > - ((sliderImage * items.length) - sliderImage)){
                slideLeft = slideLeft - sliderImage;
                div[sliderInıt.divIndex].style.left = slideLeft.toString() + "px";
                sliderInıt.slideIndex++;
                dotLi[sliderInıt.slideIndex].classList += "active";
                dotLi[sliderInıt.slideIndex - 1].classList = "";
                console.log(slideLeft);  
            }
            else{
                div[sliderInıt.divIndex].style.left = "0px";
                slideLeft = 0;
                sliderInıt.slideIndex = 0;
                dotLi[sliderInıt.slideIndex].classList += "active";
                dotLi[sliderInıt.slideIndex + items.length - 1].classList = "";
            }
        });

        //previous slide
        prev.addEventListener('click', function() {
            if(slideLeft < 0){
                slideLeft = slideLeft + sliderImage;
                div[sliderInıt.divIndex].style.left = slideLeft.toString() + "px";
                if(sliderInıt.slideIndex == 0) {
                    sliderInıt.slideIndex = items.length - 1;
                }
                console.log(sliderInıt.slideIndex);
                sliderInıt.slideIndex--;
                dotLi[sliderInıt.slideIndex].classList += "active";
                dotLi[sliderInıt.slideIndex + 1].classList = "";
            }
            else{
                div[sliderInıt.divIndex].style.left = - ((sliderImage * items.length) - sliderImage).toString() + "px";
                slideLeft = - ((sliderImage * items.length) - sliderImage);
                sliderInıt.slideIndex = 0;
                dotLi[sliderInıt.slideIndex + items.length - 1].classList += "active";
                dotLi[sliderInıt.slideIndex].classList = "";
            }
        });
    }
}
sliderInıt.slide();