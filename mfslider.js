let i=1;

let slideitx= function(elem){
    i=1;
    let childcount= elem.childNodes.length;

    if(childcount==2){
        elem.nextSibling.nextSibling.style.display='none';
        let hidables = elem.querySelectorAll('div');
        hidables[0].style.display='block';
        hidables[0].style.margin='auto';

        if(window.screen.width<415){
            elem.childNodes[1].className+=' activia';
            for(let i=1; i<childcount; i++){
                elem.childNodes[i].style.width='100%';
            }
        }
    } else if (childcount>2 && childcount<=4) {
        elem.nextSibling.nextSibling.style.display='none';
        elem.style.textAlign='center';
        if(window.screen.width<415){
            elem.nextSibling.nextSibling.style.display='block';
            elem.nextSibling.nextSibling.style.textAlign='center';

            elem.childNodes[1].className+=' activia';
            for(let i=1; i<childcount; i++){
                elem.childNodes[i].style.width='100%';
            }
        }

    } else {
        elem.nextSibling.nextSibling.style.display='block';
        elem.nextSibling.nextSibling.style.textAlign='center';

        if(window.screen.width<415){
            elem.childNodes[1].className+=' activia';
            for(let i=1; i<childcount; i++){
                elem.childNodes[i].style.width='100%';
            }
        }
    }

}


let moveit = function(durum){
    let slides= document.getElementById('wrapperx').childNodes;

if(durum==='next' && i<slides.length-1 && window.screen.width<415){
    slides[i].classList.remove('activia');
    slides[i+1].className+= ' activia';
    i++;
} else if(durum === 'prev' && i>1 && window.screen.width<415){
    slides[i].classList.remove('activia');
    slides[i-1].className+= ' activia';
    i--;
} else if(durum === 'next' && i<slides.length-1 && window.screen.width>415){
    slides[i].className+= ' disablia';
    slides[i+1].className+= ' disablia';
    slides[i+2].className+= ' disablia';
    i+=3;
} else if(durum === 'prev' && i>3 && window.screen.width>415){
    slides[i-1].classList.remove('disablia');
    slides[i-2].classList.remove('disablia');
    slides[i-3].classList.remove('disablia');
    i-=3;
}
}


/*let dropit = function(e){
   let evalue= e.parentElement.nextSibling.nextSibling.childNodes[1].value;

    request = $.ajax({
        url: "faturadetay.php",
        type: "post",
        data: "detayid="+ evalue
    });

    request.done(function (response){
        $('.swiper-wrapper').html(' ');

        $('.swiper-wrapper').append('<div class="swiper-slide"><img src="assets/img/'+response+'" alt="#"></div>');

        let item= document.getElementById('wrapperx');
        slideitx(item);
        $("#dialog").dialog( "open" );
    });

    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

}*/

