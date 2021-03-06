var Comment = require("../models/comment");
//var Rec = require("../models/rec");
var Campground = require("../models/campground");
module.exports = {
    isLoggedIn: function(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        req.flash("error", "You must be logged in to do that!");
        res.redirect("/login");
    },
    checkUserCampground: function(req, res, next){
        if(req.isAuthenticated()){
            Campground.findById(req.params.id, function(err, campground){
               if(campground.author.id.equals(req.user._id) || req.user.isAdmin){
                   next();
               } else {
                   req.flash("error", "You don't have permission to do that!");
                   console.log("Bad!");
                   res.redirect("/campgrounds/" + req.params.id);
               }
            });
        } else {
            req.flash("error", "You need to be logged in to do that!");
            res.redirect("/login");
        }
    },
    checkUserComment: function(req, res, next){
        console.log("Welcome!");
        if(req.isAuthenticated()){
            Comment.findById(req.params.commentId, function(err, comment){
               if(comment.author.id.equals(req.user._id) || req.user.isAdmin){
                   next();
               } else {
                   req.flash("error", "You don't have permission to do that!");
                   res.redirect("/campgrounds/" + req.params.id);
               }
            });
        } else {
            req.flash("error", "You need to be logged in to do that!");
            res.redirect("login");
        }
    }
    /*checkUserRec: function(req, res, next){
        console.log("Welcome!");
        if(req.isAuthenticated()){
            Rec.findById(req.params.recId, function(err, rec){
               if(rec.author.id.equals(req.user._id) || req.user.isAdmin){
                   next();
               } else {
                   req.flash("error", "You don't have permission to do that!");
                   res.redirect("/campgrounds/" + req.params.id);
               }
            });
        } else {
            req.flash("error", "You need to be logged in to do that!");
            res.redirect("login");
        }
    }
    */
}