//script now knows about the possible day and time options for the user to select boxes
// capabilities :script creation and position of menu object
//              :script dynamically aware of the order of the days and the times on the calendar

// planned work
//              :drop down section for the user
//              :algorithm for checkbox selection

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
        "width": browser_window.outerWidth/1.9,
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
    


    //editing  menu object
{
    var day = $.map($(".day > .x-axis"), function(value, index) {
                return $(value).text().toLowerCase();
            });
    
    var time_splitter =  $(".day > .x-axis").eq(1).text().toLowerCase()
    console.log(time_splitter)
    var time  = $.map($(".day:eq(1) > .checkbox >input"), function(value, index) {
                return value.id.split(time_splitter)[1];
                
            });
    console.log(time)
    $(".well").append("<h2>Select Time Interval</h2>");
    $(".well").append("<h3 start_time = 'true'>Start Time</h3>");
    $(".well").append("<h3 end_time = 'true'>End Time</h3>");
    $(".well").append("<h4>Day</h4>");
    $(".well").append("<h4>Time</h4>");
    
        //inner customization
    {
        $(".well > h3:has('[end_time]')").css({
            "top":"40%",
            "left":"50%"
        })

        $(".well > h4").css({
            "color":"blue"
        })        
    }
        //////////////////////////////////////////////////////////////
        // to adjust inner objects in item menu
        //////////////////////////////////////////////////////////////
}
    //////////////////////////////////////////////////////////////
    // var day holds all the days of the week as can be seen in the x-axis calendar and in order and is lowercase according to the .checkbox attributes
    // needed to use the map method like this becuase if the times intervals change in the calendar, my script needs to know abut this not got on convetional views of time, as expected the time will be in the last postition also to preserve order for in desktop version, the mousedrag functionality, does not go across but there is an order that it has to cover as well will make an algorithm for this
    // time splitter used to seperate time from day, is setup also dynamic knowing about changes in the caledar
    //////////////////////////////////////////////////////////////

});
