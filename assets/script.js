$(document).ready(function(){
    $("#div1").fadeIn(1000);
    var time = new Date();
    var hour = time.getHours();
    var text = "";

    if (hour >= 12) {
        text = "Selamat Siang 👋"
    } 
    
    if (hour < 12) {
        text = "Selamat Pagi 👋"
    } 
    
    if (hour >= 15) {
        text = "Selamat Sore 👋"
    }
    
    if (hour > 20) {
        text = "Selamat Malam 👋"
    }

    var loadImg = `<img src="./assets/img/ezgif-4-f50e9a7d0c.gif" alt="loading" width="100" margin="5% id="loading">`;
    
    $(".greeting").html(`<h1 class="hello">Halo, ${text}</h1><br>${loadImg}`)
    
    const hideH1 = setInterval(() => {
        $("h1.hello").hide("slow");
        
        clearInterval(hideH1);
        document.querySelector("h1.hello").innerHTML = ""
      }, 4000)

    const pause = setInterval(() => {
        $("h1.hello").hide("slow");
        clearInterval(pause);
      }, 3000)
      
    const showH1 = setInterval(() => {
        
        $(".greeting").html(`<h1 class="hello">Nama saya Ahmad Ryaldi Suhendar 😊</h1><br>${loadImg}`)
        $("h1.hello").slideDown("slow");
        $("#div2").fadeIn(2000);
        clearInterval(showH1);

        const changeTo = setInterval(() => {
            $(".greeting")
            .html(
                `
                <h1 class="hello">Selamat datang!</h1>
                <p class="aboutMe">Saya seorang fresh graduate dari fakultas Teknik dan Informatika di Universitas Bina Sarana Informatika.
                di bawah ini adalah informasi tentang saya 👇</p>

                `
            )

            $('.aboutMe').t({

                // typing speed in milliseconds
                speed:50, 
              
                // enable 'human-like'
                speed_vary:false, 
              
                // delays start
                delay:false, 
              
                // mistyping
                mistype:true,
              
                // en or de
                locale:'id',
              
                // enable caret
                caret:true, 
              
                // enable blink
                blink:false,  
              
                // permanent caret blinking
                blink_perm:true,
              
                // wrapper tag
                tag:'span',
              
                // pauses/continues typing on click/tap
                pause_on_click:false, 
              
                // infinite or N times
                repeat:false, 
              
                // Callbacks
                init:function(elem){}, 
                typing:function(elem,chars_total,chars_left,char){},
                fin:function(elem){}
              
              });

            $("h1.hello").slideDown("slow");
            clearInterval(changeTo);

            setTimeout(() => {
                $("#div3").slideDown("slow");
                $("#div4").slideDown("slow");
                $("#div5").slideDown("slow");
                $("#div6").slideDown("slow");
                $("#div7").slideDown("slow");
            }, 8500)
            
          }, 4000)

         
      }, 4000)
      
     

    // const changeH1 = setInterval(() => {
    //     $("h1.hello").slideDown("slow");
    //     clearInterval(showH1);
    //   }, 2000)
    
    $( '.type-text' ).each( function() {
        var items = $( this ).attr( 'title' ) + ';' + $( this ).text();
        $( this ).empty().attr( 'title', '' ).teletype( {
          text: [
            `JavaScript`,
            `Java`,
            `PHP`,
          ], // List of strings to output.
          typeDelay: 10, // Minimum delay, in ms, between typing characters.
          backDelay: 20, // Minimum delay, in ms, between deleting characters.
          blinkSpeed: 1000, // Interval, in ms, that the cursor will flash.
          cursor: '▋', // Character used to represent the cursor.
          delay: 3000, // Time in ms to pause before deleting the current text.
          preserve: false, // Prevent auto delete of the current string and begin outputting the next string.
          prefix: `<span id="prefix">[Bahasa dikuasai ~]#</span>`, // Begin each string with this prefix value.
          loop: 0, // Number of times to loop through the output strings, for unlimited use 0.
          humanise: true, // Add a random delay before each character to represent human interaction.
          smoothBlink: true, // Set the curser to a solid blink or smooth blink effect.
          callbackNext: null,
          callbackType: null,
          callbackFinished: null
        });
        });
        
    
   
});