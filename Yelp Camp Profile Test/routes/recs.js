/*var express = require("express");
var router  = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Rec = require("../models/rec");
var middleware = require("../middleware");

//Comments New
router.get("/new", middleware.isLoggedIn, function(req, res){
    // find campground by id
    console.log(req.params.id);
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
             res.render("recs/new", {campground: campground});
        }
    })
});

//Comments Create
router.post("/",middleware.isLoggedIn,function(req, res){
   //lookup campground using ID
   Campground.findById(req.params.id, function(err, campground){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       } else {
        Rec.create(req.body.rec, function(err, rec){
           if(err){
               console.log(err);
           } else {
               //add username and id to comment
               rec.author.id = req.user._id;
               rec.author.username = req.user.username;
               //save comment
               rec.save();
               campground.recs.push(rec);
               campground.save();
               console.log(rec);
               req.flash('success', 'Created a recommendation!');
               res.redirect('/campgrounds/' + campground._id);
           }
        });
       }
   });
});

router.get("/:recId/edit", middleware.isLoggedIn, function(req, res){
    // find campground by id
    Rec.findById(req.params.recId, function(err, rec){
        if(err){
            console.log(err);
        } else {
             res.render("recs/edit", {campground_id: req.params.id, rec: rec});
        }
    })
});

router.put("/:recId", function(req, res){
   Rec.findByIdAndUpdate(req.params.recId, req.body.rec, function(err, rec){
       if(err){
          console.log(err);
           res.render("edit");
       } else {
           res.redirect("/campgrounds/" + req.params.id);
       }
   }); 
});

router.delete("/:recId",middleware.checkUserRec, function(req, res){
    Rec.findByIdAndRemove(req.params.recId, function(err, rec){
        if(err){
            console.log(err);
        } else {
            Campground.findByIdAndUpdate(req.params.id, {
              $pull: {
                recs: rec.id
              }
            }, function(err) {
              if(err){ 
                console.log(err)
              } else {
                req.flash('error', 'Recommendation deleted!');
                res.redirect("/campgrounds/" + req.params.id);
              }
            });
        }
    });
});

module.exports = router;
*/