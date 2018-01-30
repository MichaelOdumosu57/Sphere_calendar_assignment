//the assignment task should be rather easy to implement as I can trigger the click function that changes the time slots

$(document).ready(function () {

    
    //understanding needed info from the creators work
{
    console.log($($(".time.checkbox")[30]));
    console.log($(".day"))
    
    
    
}
    //////////////////////////////////////////////////////////////
    // figured .time.checkbox from the elements view
    //
    //////////////////////////////////////////////////////////////
 
 
 
    
    //creating menu
{
    var well_clone;
    $("body").append("<div class = 'well'></div>");
    $(".well").css({
        "min-height": "20px",
        "padding": "19px",
        "margin-bottom":" 20px",
        "background-color":" #f5f5f5",
        "border": "1px solid #e3e3e3",
        "border-radius":" 4px",
        "-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, .05)",
        "box-shadow": "inset 0 1px 1px rgba(0, 0, 0, .05)",
        "background-color":"rgba(255, 255, 0,1)"
        
    })
    
    // well_clone = $(".well").clone();
    
    $(".well").css({
        "position":"fixed"
    })
    
    

}
    //////////////////////////////////////////////////////////////
    //on clicking in touch device a customized well displays
    // well clone setup in case I need additional clones
    // further adjusted the original well, for specific editing
    //////////////////////////////////////////////////////////////



    
    //displaying menu
{

    
        //helper function
    {
        
        function BrowserCheck()
        {
            var N= navigator.appName, ua= navigator.userAgent, tem;
            var M= ua.match(/(opera|chrome|safari|firefox|msie|trident)\/?\s*(\.?\d+(\.\d+)*)/i);
            if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) {M[2]=tem[1];}
            M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
            return M;
        }

    }
        //////////////////////////////////////////////////////////////
        //this function checks for the browser used on the media device
        //////////////////////////////////////////////////////////////

    var browser = [BrowserCheck()];
    var browser_window = window;
    

    if(browser[0][0] == "Firefox" && parseFloat(browser[0][1]) >= 57 ){
      browser_window = window.top;
    }
    
    $(".well").css({
        "height": browser_window.outerHeight/4,
        "width": browser_window.outerWidth/1.7,
        "top": "30%",
        "left": "20%"
        
        
    })

}
    //////////////////////////////////////////////////////////////
    //needs to come to the width and heightof the screen of the device
    //  var browser holds info about the browser, so my script can know how to access information about the device
    //  var browser_window holds the window object that the browser should return, and changes according to the info held in browser
        // holds
        // browser_window.outerHeight
        // browser_window.outerWidth
    // positioned menu to be in the middle of the page
    //////////////////////////////////////////////////////////////

});