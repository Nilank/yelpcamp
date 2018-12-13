var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://pixabay.com/get/ea35b90d20f7033ed1584d05fb1d4e97e07ee3d21cac104496f5c97aa1eeb4b8_340.jpg",
        description: "One of the most popular hikes in the world, the Inca Trail takes you through 26 miles of grueling inclines and declines. You get a chance to explore ruins, jungle, and beautiful mountain scenery, and of course, end the hike at Machu Picchu.A hike that gets you away from the overcrowded Inca Trail, this trek is often called the Super or Hidden Inca Trail and is more strenuous and less traveled. The extra work is rewarded with amazing views and at the end, you can still take a short bus and train ride to get to Machu Picchu."
    },
    {
        name: "Desert Mesa",
        image: "https://pixabay.com/get/eb34b6062bf5093ed1584d05fb1d4e97e07ee3d21cac104496f5c97aa1e9b0b9_340.jpg",
        description: "The popular route that follows the letter “W” takes you through the spectacular Torres del Paine National Park. You get a chance to see volcanic peaks, glaciers, and beautiful lakes. Our friend just went on the longer “O” circuit that encompasses the “W” and the photos looked unbelievable. We can’t wait to do this hike or if we can add a few extra days, we might even challenge ourselves to do the “O”! If you really want to beat the crowds, it’s not as cushy, but you should do the hike in their winter! We saw one other person and guide vs 800-1000 people who are normally on the trail every day during their summer months."
    },
    {
        name: "Canyon Floor",
        image: "https://pixabay.com/get/e832b5062df4093ed1584d05fb1d4e97e07ee3d21cac104496f5c97aa1e9b0b9_340.jpg",
        description: "Some say that this is the hardest trail on the planet and many are unable to finish because unpredictable weather in the high Himalaya. Traversing 11 passes, most of which are more than 16,000 feet, you can only do this hike with a guided tour and is at the top of most hikers’ bucket lists.Not only does it help you appreciate it’s vastness physically, the views and scenery that you get by being up close and personal with it will be more rewarding than any view point you’ll get by a quick stop."
    }
]

function seedDB(){
    Campground.remove({}, function(err){
       /* if(err){
            console.log(err);
        }
        else{
            console.log("Grounds Removed!");
            
            //add few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log("Added Campground!");
                        
                        //Create a comment
                        Comment.create(
                            {
                                text: "This place is create but I wish there was Internet!",
                                author: "Nilank Sharma"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else{
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created a new comment!");
                                }
                            }
                            
                            )
                    }
                    
                });
            });
        }*/
    });
    
}


module.exports = seedDB;
