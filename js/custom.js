new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
    onLeave: function(origin, destination, direction){
        var loading2 = new TimelineMax();
        loading2.fromTo(".upper",0.6,{
            autoAlpha:0,
        },{
            autoAlpha:1,
        },"+=0.5")
        .fromTo(".lower",0.6,{
            autoAlpha:0,
        },{
            autoAlpha:1,
        },"-=0.6")
    },
});

document.addEventListener("DOMContentLoaded",function(){
    //click function
    var arrows = document.getElementsByClassName('arrow');
    for (i=0;i<arrows.length;i++){
        arrows[i].addEventListener('click',function(e){
            e.preventDefault();
            fullpage_api.moveSectionDown();
        });
    }
    
    var loading = new TimelineMax();
    loading.fromTo(".upper h2",0.6,{
        autoAlpha:0,
        y:20
    },{
        autoAlpha:1,
        y:0
    })
    .fromTo(".upper p",0.6,{
        autoAlpha:0
    },{
        autoAlpha:1
    })
    .fromTo(".arrow",0.6,{
        autoAlpha:0
    },{
        autoAlpha:1
    })
    ;

});

/* .fromTo(".b1",2.5,{
    x:-200,
},{
    x:0,
},"=0.8") 
.fromTo(".b2",2.5,{
    x:200,
},{
    x:0,
},"-=2.5") */


