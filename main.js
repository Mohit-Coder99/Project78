var images=[
    "Welcome.gif",
    "https://previews.123rf.com/images/chaliya/chaliya1803/chaliya180300008/97572964-happy-father-s-day-man-open-shirt-to-show-super-dad-cartoon-vector-illustration-.jpg",
    "https://img.pngio.com/mom-cartoon-mom-mom-aprons-chef-png-transparent-image-and-png-of-mom-391_403.png",
    "https://image.shutterstock.com/image-illustration/cartoon-character-little-boy-points-260nw-1550040197.jpg",
    "https://lh3.googleusercontent.com/-q0YQsgipaKw/X7w5Mnp-hAI/AAAAAAAAAQI/-aREiD2WLrIDBI0Evdte8Qd90uXJDl_UACK8BGAsYHg/s0/171210e2-db3a-400d-81ca-02054e60ca08.jpg",
    "https://i.pinimg.com/originals/d0/57/d0/d057d0157678a6664132e880f117b813.gif",
];

var text=[
    "My Family Book",
    "Subbu (My DAD)",
    "Devi (My MOM)", 
    "Eeswar(My Brother)",
    "Mohit (ME!)",
    "Bye!!"
];


var i=0;


function next(){

    i++;
    
    if ( i > 7 ) {
        
        i=0
   
    };
   
    
    document.getElementById("txtChange").innerHTML = text[i];
    document.getElementById("imgChange").src = images[i];       
    
    
   
       
};



function back(){

    i--;

    if ( i < 7 ) {
        
        i=28
   
    };

    document.getElementById("txtChange").innerHTML = text[i];
    document.getElementById("imgChange").src = images[i];       
    
  


}