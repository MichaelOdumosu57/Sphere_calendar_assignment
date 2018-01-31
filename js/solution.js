{
// in this version repeated calls to adv_clones are perfected, and jquery makes the exact number of clones to the page as desired, with the total in all of the window document
    //capabilities:core cloning functionality
    //            : cloning as many items as needed
    //            : returns a length of all the clones
    //            : responds for single, multiple and mixed calls of any length
    //            : return an array of all the desired clones

    
    //planned work : seperation of clones into certain groups and returning an array of the groups
    

    
    
    // far in the future
    //             : customization for each clone
    //             : cloning of more than one selector and returning an array of everything
    

var call = 0;
    jQuery.fn.extend({
        adv_clone:function(michael){
            //jquery's cloning function does not work as intended, it thinks a call to more clones, is a call to the same cloned object, when it finally figures things out it is not smart enough to know not to clone the selected list. This method returns an array of how many times you wanted the object to be cloned, for further variation as you please
            
                //writitng down function call amount
                call ++;
                //////////////////////////////////////////////////////////////
                
                //determining argument type
                var $clone_count
                if(typeof(michael) == "number"){
                    var count  = michael;
                    $clone_count = michael -4;
                    
                    
                    
                }
                
                else if(typeof(michael) == "object"){
                    var count = parseInt(michael.items)
                    $clone_count = parseInt(michael.items) -4;
                    console.log(count)
                    
                }
                
                ////////////////////////////////////////////////////////////////
                //becuase we will be removing the first item
                //if item is an object, then the developer wants identification among the clones
                // the michael variable can be of different types so all initalizating working with michael must be done here
                ////////////////////////////////////////////////////////////////
            
                //if its zero should we throw an error or delete the selection
                
                if($clone_count == -4 ){
                    $(this).remove()
                }
                
                ////////////////////////////////////////////////////////////////
                
                
            
                //replication init
                var clone_selector = this.selector + ":last";
                var $clone = $(clone_selector).clone();
                if($clone_count > -3 || count == 1 ){
                    $(clone_selector).after($clone);
                    console.log("made a clone with $clone ",$(this.selector).length)
                }

                var $clone_clone  =  $clone.clone();
                var $last_clone = $(clone_selector  );
                
                if($clone_count > -2 || count == 2 ){
                    $last_clone.after($clone_clone);
                    console.log("made a clone with $clone_clone",$(this.selector).length)
                    
                }
                $clone_count += 1;   //becuase additional calls are making x-1 calls, beucase one is already present
                while($clone_count >= 0){
                    $last_clone.after($last_clone.clone());
                    console.log("made a clone with $last_clone",$(this.selector).length)
                    $clone_count -= 1;
                }
                    
                    
                
                

                
                if(call == 1 ){
                    $(this.selector + ":first").remove()
                    console.log(call)
                }
                return $.map($(this.selector + (":not(.delete)")),function(value,index){
                    if(michael.specifiers != undefined){
                        michael.specifiers.forEach(function(spec,selec) {
                            spec.forEach(function (val,ind) {
                                if(ind != 0){
                                    if(index == val -1){
                                        $(value).addClass(spec[0]);
                                    }
                                }
                            });
                            
                        });
                        
                    }
                    return $(value)
                });
                    
                ////////////////////////////////////////////////////////////////
                // if the specifier propery is used the plugin will add classes based on the given indexes not a range which we will work on later
                // this method uses plenty of energy, find something that does less
                // last clone represents last cloned item
                // for two copies you must equal call is two becuase it needs to refer to the clone clone as the second clone, its recusive, as there is a new last, thats why the first clone can clone
                // same for one jquery is simply cloning the last copy of each so the first copy is okay
                ////////////////////////////////////////////////////////////////
        }
        
        
    });
    
var addFnCounter = function(target){
    var swap = target;
    var count = 0;
    return function(){
        swap.apply(null);
        count++;
        console.log("func has been called " + count + " times");
        console.log("\n");
    };
};

addFnCounter($().adv_clone);
    
}



















//secondary step in constucting menu box
// capabilities :script creation and position of menu object
//              :script dynamically aware of the order of the days and the times on the calendar
//              : inner menu item positinon and creation
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
        "box-shadow": "inset 0 1px 1px rgba(0, 0, 0, .05)"
        
        
    })
    
    well_clone = $(".well").adv_clone({
        items:"7",
        specifiers:[["day_selector",2,3],["day_start",2],["day_end",3],["time_selector",4,5],["time_start",4],["time_end",5]]
    });
    
    $(".well:first").css({
        "position":"fixed",
        "background-color":"rgba(255, 255, 0,1)"
    })
    
    

}
    //////////////////////////////////////////////////////////////
    //on clicking in touch device a customized well displays
    // use my adv_clone plugin, locally to make cloning easier
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
    
    $(".well:first").css({
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
    $(".well:first").append("<h2>Select Time Interval</h2>");
    $(".well:first").append("<h3>Start Time</h3>");
    $(".well:first").append("<h3>End Time</h3>");
    $(".well:first").append("<h4>Day</h4>");
    $(".well:first").append("<h4>Time</h4>");
    
        //inner customization
    {

    $(".well:first *" ).wrap("<div style = 'position: relative;'></div>")
        
        $(".well > div:has( h3:contains('End Time'))").css({
            "left":"50%",
            "top": "-13%",
            
        });
        $(".well > div >  h4").css({
            "color":"blue",
            
        })
        $(".well > div:has(h4) ").css({
            "left":"30%"
            
        })
        $(".well > div:has( h4:contains('Day'))").css({
            "top":"-10%"
        })
        
    }
    
    $(".well:not(:first)").appendTo($(".well:first" ))
    
    $(".well:not(:first)").css({
        "width":"5em",
        "height":"20px",
        "border-radius":"200px",
        "position":"absolute",
        
    }).wrapInner("<div><h3>Select</h3><div>")
    
    $(".well:not(:first) > div").css({
        "position":"absolute",
        "top":"0%"
    })
    
    $(".well.day_selector").css({
        "top":"40%"
    });
    
    $(".well.day_end").css({
        "left":"50%"
    });

    $(".well.time_end").css({
        "left":"50%"
    });
    
    
        //////////////////////////////////////////////////////////////
        // to adjust inner objects in item menu
        // wrapped all objects in div to move them better
        // turning rest of wells into select items with adv_clne
        //////////////////////////////////////////////////////////////
}
    //////////////////////////////////////////////////////////////
    // var day holds all the days of the week as can be seen in the x-axis calendar and in order and is lowercase according to the .checkbox attributes
    // needed to use the map method like this becuase if the times intervals change in the calendar, my script needs to know abut this not got on convetional views of time, as expected the time will be in the last postition also to preserve order for in desktop version, the mousedrag functionality, does not go across but there is an order that it has to cover as well will make an algorithm for this
    // time splitter used to seperate time from day, is setup also dynamic knowing about changes in the caledar
    //////////////////////////////////////////////////////////////

});








