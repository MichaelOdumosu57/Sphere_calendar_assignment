// helping resources
// 1 https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript
//     find:You can use the canvas so you don't have to deal so much with css properties:


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

{

//vertical and horizionatal positioning achieved
    //capabilities : core pretty print concept in horizontal spacing
    //             : vertical reposition proper alginment
    //              :indentation, or pretty_print usuable space object
    //              :recognintion of overstepping horizontal bounds
    //             : full object pretty print conept

    
    //planned work
    //             : horizontal and vertical alignment
    

    
    
    // far in the future
    //             : pretty pattern regristration
    //             : pretty print fine tuning
    //              : detection of outer objects that do not belong in pretty print
    //              : amimatable detection, if not proper steps would be made to enable it without interfering in front end design
    //              : return error if obejcts cant be pretty printed inside
    
    
    // properties
    
    //objects -- contains all the obejcts desired to be pretty printed, in the order of input, we could build customization but that is a waste of time and space, if michael is not an object this can be the only argumen
    // x_spacing -- amount of horizontal space between each object in pretty print, this is needed as row creation of how many objects are in the row depends on it, if you don't place one its default is 20
    // y_spacing -- amount of vertical space between each object in pretty print, this is needed as row creation of how many objects are in the row depends on it, if you don't place one its default is 10
    // leftover -- decides how much leftover there will be for the last item in the row and the end width of the container object
    // indent -- decides initial space for row starting, now it 4% because all containers are different
    

var call = 0;
    jQuery.fn.extend({
        pretty_print:function(michael){
            // jquery does not have a pretty print function, this concept function will take objects inside and obejct and fill a space accoriding to rows and columns, plenty of development required for full functionality
            
            //detecting object to pretty print in and selected inner object for pretty printing
{
            console.log($(this))
            console.log(michael)
}
            //////////////////////////////////////////////////////////////
            
            //initialization
            
{
                //helper function
            {
                function numberParse(dimension){
                    dimension = parseFloat(dimension.split("p")[0])
                    return dimension;
                }
                //this function takes a dimension and cuts it off and returns the number for use

            }
                //////////////////////////////////////////////////////////////
                //this function takes a dimension and cuts it off and returns the number for use
                //////////////////////////////////////////////////////////////
                
            var pretty_container_width = numberParse($(this).css("width"));
            var pretty_container_height = numberParse($(this).css("height"));
            $("body").after("<div class = 'pretty'></div>")
            if(michael.objects === undefined){
                michael.objects = michael;
                
            }
            if(michael.x_spacing === undefined){
                michael.x_spacing = 20;
            }
            else{
                $(".pretty").css("width",michael.x_spacing)
                michael.x_spacing = numberParse($(".pretty").css("width"))
            }
            if(michael.y_spacing === undefined){
                michael.y_spacing = 10;
            }
            else{
                $(".pretty").css("width",michael.y_spacing)
                michael.y_spacing = numberParse($(".pretty").css("width"))
            }
            if(michael.leftover === undefined){
                michael.leftover = 50;
            }
            else{
                $(".pretty").css("width",michael.leftover)
                michael.leftover = numberParse($(".pretty").css("width"))
            }
            if(michael.indent !== undefined){
                michael.indent = .04 * pretty_container_width;
            }
            else{
                $(".pretty").css("width",michael.indent)
                michael.indent = numberParse($(".pretty").css("width"))
            }
            $(".pretty").remove()
}
            //////////////////////////////////////////////////////////////
            //  if user wants a quick pretty print they can just put in only what they want pretty printed
            // any thing with var pretty_container contains information about the the container objects will be pretty printed in
            //////////////////////////////////////////////////////////////
            
            // setting and arraging objects
{
            
            var x_space = michael.x_spacing;
            var y_space = michael.y_spacing;
            var pretty_print_height;
            var pretty_print_start = {"x":michael.indent,"y":0};
            var pretty_caught = 0;
            var pretty_leftover = michael.leftover
            var pretty_print = $.map(michael.objects,function (pretty_object,index) {
                
                pretty_print_height = numberParse($(pretty_object).css("height"));
                if( pretty_print_start["x"] > pretty_container_width - pretty_leftover){
                    console.log("Greater than!!")
                    pretty_print_start["x"] = michael.indent;
                    pretty_caught += 1;
                }
                $(pretty_object).css({
                    "position":"relative",
                    "left":pretty_print_start["x"],
                    "top":pretty_print_start["y"] - (pretty_print_height * index) + ((pretty_print_height + y_space)* pretty_caught )
                })
                console.log($(pretty_object).css("left"), pretty_print_start["x"] ,x_space, pretty_container_width - pretty_leftover)
                // console.log($(pretty_object).css("top"), pretty_print_start["y"] ,pretty_print_height)
                pretty_print_start["x"] += numberParse($(pretty_object).css("width")) + x_space
                return $(pretty_object)
            })
            
}
            //////////////////////////////////////////////////////////////
            //var pretty_print holds the desired object to be pretty printed, only needed to help programmers understanding of plugin
            //  however when I use map, i try to do everything in map because it is better than function looping saves times space and hopefully I can remove the variable
            // however variables are good if others read your code
            // var pretty_print_start is going to be the basis of the positioning of the objects, it is an object the first number being the x and the second the y
            // var x_space desired horizontal space between objects
            // var y_space desired vertical space between objects
            // all objects must be have a position:relative attribute to be position properly inside the object
            // var pretty_print_height will contain the height of each object, in the future this variable will contain the height of the object with max height
            // var pretty_caught is the stablizier, it removes the bug of printing on same row by adding the height of the pretty_object back to the y axis
            //////////////////////////////////////////////////////////////
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

addFnCounter($().pretty_print);
    
    
}





















// main objective completed
// capabilities :script creation and position of menu object
//              :script dynamically aware of the order of the days and the times on the calendar
//              : inner menu item positinon and creation
//              : dynamic resizing of div based on text widht
//              : dynamic selection and option refill
//              : selects all input items based on time_queries
// planned work
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
        // "min-height": "20px",
        "padding": "19px",
        "margin-bottom":" 20px",
        "background-color":" #f5f5f5",
        "border": "1px solid #e3e3e3",
        "border-radius":" 4px",
        "-webkit-box-shadow": "inset 0 1px 1px rgba(0, 0, 0, .05)",
        "box-shadow": "inset 0 1px 1px rgba(0, 0, 0, .05)"
        
        
    })
    
    well_clone = $(".well").adv_clone({
        items:"8",
        specifiers:[["menu",1],["selectors",2,3,4,5],["day_selector",2,3],["day_start",2],["day_end",3],["time_selector",4,5],["time_start",4],["time_end",5],["selector_display",6,8],["submit",7,8]]
    });
    
    console.log(well_clone)
    
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
    
    var time_info = {"Day":day,"Time":time};
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
            //placement of selection buttons
        {
            $(".well:not(:first)").appendTo($(".well:first" ))
            
            $(".well.selectors").css({
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
        }
            //////////////////////////////////////////////////////////////
            // turning rest of wells into select items with adv_clone
            //////////////////////////////////////////////////////////////
            
            // placement and editing of submit button
        {
            $(".well.submit").css({
                "background-color":"rgb(66, 197, 244)",
                "width":"5em",
                "height":"7px",
                "border-radius":"200px",
                "position":"absolute",
                "left":"75%",
                "bottom":"0%"
            }).wrapInner("<div><h3>Submit</h3><div>")
            
            $(".well.submit > div").css({
                "position":"absolute",
                "top":"0%"
            })
            
            
        }
            //////////////////////////////////////////////////////////////
            // so user can submit data to the script to process
            //////////////////////////////////////////////////////////////
            
            // placement and editing of selection screen
        {
            var time_version = "[PLACEHOLDER]";
                //helper function
            {
                function numberParse(dimension){
                    dimension = parseFloat(dimension.split("p")[0])
                    return dimension;
                }
                //this function takes a dimension and cuts it off and returns the number for use

            }
                //////////////////////////////////////////////////////////////
                //this function takes a dimension and cuts it off and returns the number for use
                //////////////////////////////////////////////////////////////
        
            
            $(".well.selector_display:not(.submit)").appendTo("body").css({
                "position":"fixed",
                "width":numberParse($(".well:first").css("width"))*1.5,
                "height":numberParse($(".well:first").css("height"))*1.5,
                "top":numberParse($(".well:first").css("top"))/1.25,
                "left":numberParse($(".well:first").css("left"))/1.25
                // "display":"none"
                
            }).wrapInner("<h2> </h2>").hide();
            
            $(".well.selector_display >h2").css({
                "text-align":"center"
                
            })
            
            $(".well.selector_display.submit").appendTo($(".well.selector_display:not(.submit)"))
            
        }
            //////////////////////////////////////////////////////////////
            // selection script for the process
            // var time_version will be used in the event blocks to give data to display in the title section of the selction ox
            // needed hidden to work on event functionality
            //////////////////////////////////////////////////////////////
    }
    

    
    
        //////////////////////////////////////////////////////////////
        // to adjust inner objects in item menu
        // wrapped all objects in div to move them better
        // turning rest of wells into select items with adv_clone
        //////////////////////////////////////////////////////////////
        $(".menu").hide();
}
    //////////////////////////////////////////////////////////////
    // var day holds all the days of the week as can be seen in the x-axis calendar and in order and is lowercase according to the .checkbox attributes
    // needed to use the map method like this becuase if the times intervals change in the calendar, my script needs to know abut this not got on convetional views of time, as expected the time will be in the last postition also to preserve order for in desktop version, the mousedrag functionality, does not go across but there is an order that it has to cover as well will make an algorithm for this
    // time splitter used to seperate time from day, is setup also dynamic knowing about changes in the caledar
    // var time_info is used for the event function, since javascript and jquery cannot return variables from comparison statements, requires looking in the global window element, but that itself is a big object it is better to use and object with string refreences instead
    // hide the final product it is not supposed to appear on screen
    //////////////////////////////////////////////////////////////
    
    //event function
{
        // helper function
    {
        function jsUcfirst(string)
        {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
        //////////////////////////////////////////////////////////////
        // this function gives proper uppercase to any string
        //////////////////////////////////////////////////////////////
        
        // helper function
    {
        function text_dimension(string_selector)
        {
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            ctx.font =  string_selector.css("font-size") + " " + string_selector.css("font-family") ;  // This can be set programmaticly from
            var textWidth = ctx.measureText(string_selector.text()).width;
            return textWidth
        }
    }
        //////////////////////////////////////////////////////////////
        // this function returns the text width and height of given strings
        //////////////////////////////////////////////////////////////
        
        // opening the menu event
    {
        var one_time = 0;
        $.map($("div.checkbox.time "),function(click_info) {
            $(click_info).attr("onclick","$('.menu').fadeIn()")
            console.log($(click_info)["0"].onclick )
            
        });
        

            // event.preventDefault();
            // $(".menu").fadeIn()
            // $(this).css({
            //     "color":"rgb(0,0,0)"
            // })
            
            // console.log($(this).css("color"))

        // })
        
    }
        
        //selection object events
    {
        var event_target;
        
            // helper function
        {
            function wait(ms){
               var start = new Date().getTime();
               var end = start;
               while(end < start + ms) {
                 end = new Date().getTime();
              }
            }
        }
            //////////////////////////////////////////////////////////////
            // the next function can hit an infinite loop, which is not good for my computer, i use functions like these
            //////////////////////////////////////////////////////////////
            
            // helper advnaced recursive function needs an outside variable to work
        
        {
            var result;
            function find_child(parent,suspect,answer = undefined){
                
                
                
                   if($(parent)["0"].tagName !== suspect){
                       console.log($(parent))
                   }
                   else{
                       console.log($(parent))
                       console.log("exit here")
                       return $(parent)
                       
                   }
                   
                   if($(parent)["0"].childElementCount == 0){
                       return result
                   }
                $.map( $($(parent)["0"].children),function(child) {
                    
                    console.log("looking at children")
                    console.log("___________________________________________________________________")
                    result = find_child(child,suspect,result)

                });
                
                if(result != undefined){
                    console.log("tring to shed light")
                    return result
                }

                

                

                
                
            }
        }
            //////////////////////////////////////////////////////////////
            // function finds necssary child of element
            // var result is what makes this function special,
            // to understand this is a new type of function, where the function cannot return the answer rather it needs an external variable to store data to help if you will "unbury" the desired return data
            //////////////////////////////////////////////////////////////
                            
        $(".well.selectors").click(function (event){
            event_target = event.target;
            time_version =  jsUcfirst($(this)["0"].classList[2].split("_")[0]);
            $(".selector_display").fadeIn(2000)
            $(".selector_display > h2").text("Select " + time_version)
            console.log(time_info[time_version])
            time_info[time_version].forEach(function (time_item){
                $(".selector_display:not(.submit)").append("<div><p>" + time_item + "</p></div>" )
                if(time_version == "Day"){
                    $(".selector_display:not(.submit) p").css({
                        "font-size":"5em"
                    })
                }
                
                else{
                    $(".selector_display:not(.submit) p").css({
                        "font-size":"1.5em"
                    })
                }
                
                // selection box event reaction
            {

                $(".selector_display:not(.submit) > div:last").css({
                    "width": text_dimension($(".selector_display:not(.submit) > div:not(.submit):last > p"))
                }).click(function (event){
                    
                    
                    $(this).css({
                        "background-color":"yellow"
                    }).addClass("selection");
                    
                    
                    $.map($(".selector_display:not(.submit) > div:not(.submit)"),function(remove_select){
                       if($(remove_select).hasClass("selection") == false ) {
                          $(remove_select).css("background-color","transparent")
                       }
                    });
                    
                    // console.log($(event_target)["0"].children)
                    
                    
                    console.log($(find_child($(event_target),"H3")).text(jsUcfirst($(".selection > p").text())))
                    // $(".selection > p").text()
                    

                    
                    $(this).removeClass("selection");
                })
                
                
            }
                //////////////////////////////////////////////////////////////
                // the background of the selected turns yellow and the others turn transparent
                // var target holds info about the object clicked
                //////////////////////////////////////////////////////////////
            
            })
            
            // pretty print the info
        {
            $(".selector_display:not(.submit) > *").pretty_print({
                objects:$(".selector_display:not(.submit) > div:not(.submit)"),
                x_spacing:"2em",
                y_spacing:"2em",
                leftover:"10em",
                indent:"4em"
                });
            
        }
            //////////////////////////////////////////////////////////////
            // ill make a plugin jquery_pretty_print, first locally to pretty print the data
            // jquery_pretty_print needs to know what to select
            //////////////////////////////////////////////////////////////
            
        })
            // $(".well.selectors:first").trigger("click")
            // re-display menu
        {
            $("div.well.selector_display.submit").click(function () {
                $("div.well.selector_display").fadeOut(2500);
                $("div.well.selector_display:not(.submit) > div:not(.submit)").remove();
                
                
            })
        }
            //////////////////////////////////////////////////////////////
            // fadesout the selection box and remove the choices to make room for new ones
            //////////////////////////////////////////////////////////////

    }
        //////////////////////////////////////////////////////////////
        // the code here controls the inital appearning of the selection object
        // the selection object will contain all possible choices and will replace the text as well
        // henece the selection object is dynamic
        // use the text_dimension, to properly resize div for selection process,
        // var event_target explained in helper advanced recursive function
        //////////////////////////////////////////////////////////////
        
        
        
        
        // submission event
    {
        var time_editing;
        var start;
        var end;
        var hit_it = false;
        $("div.submit:not(.selector_display").click(function (){
            time_editing = $.map($(".selectors"),function (time_query){
                return find_child(time_query,"H3").text().toLowerCase();
            })
            
            start = time_editing[0] + time_editing[2];
            end= time_editing[1] + time_editing[3];
            console.log(time_editing,start,end)
            
            // needed to rebind function call from shiftcheckbox
        {
            
        }
        // ////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////
            $.map($(" div.checkbox.time > input"),function(check){
                if(start == check.id){
                    console.log("found start time")
                    hit_it = true;
                    
                }
                
                console.log(check.checked)
                
                if(hit_it == true){
                    
                    $(check).trigger("click")
                }
                
                if(end == check.id){
                    hit_it = false;
                    console.log("found end time")
                }
            })
            $(".well.menu").fadeOut();
                    
        })
        

    }
        //////////////////////////////////////////////////////////////
        // the code here acts as an app interface manipulating the calendar checkbox properties to fulfill the options chosen from the menu user interface
        // this is the point where i will need to create an algorithm and look how the native scripts selected multiple checkboxes
        //  holds information for algorithm to chooose all the checkboxes
        // var start and var end are for the algortim to find what to choose
        //  var time_editing retrives the final info from the selectors
        //////////////////////////////////////////////////////////////
    
}
    //////////////////////////////////////////////////////////////
    // events here include the click event for bringing up the selection menu
    // click event for bringing up the main menu
    // submit event to make changes
    //////////////////////////////////////////////////////////////
});