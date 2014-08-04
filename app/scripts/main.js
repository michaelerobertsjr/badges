(function (){
    
    function getTreehouseBadges() {
        // AJAX request to pull in profile data
        $.ajax({
            type: "GET",
            url: "http://teamtreehouse.com/michaelrobertsjr.json",
            dataType: "json",
            success: function (data) {
                var badgesObj = (typeof data === "string") ? JSON.parse(data) : data;
                showTreehouseBadges(badgesObj);
            },
            error: function () {
                console.log('ERROR during AJAX request.');        
            },
            complete: function () {
                // TODO: Add transitions and hover over classes for details
            }
        });
    }

    function showTreehouseBadges(badgesObj) {
        // TODO: Refactor and switch badge img ulr based on Obj
        console.log("Total TreeHouse Badges: "+ badgesObj.badges.length);
        for (var i=0; i < badgesObj.badges.length; i++) {    
            $("#treehouse").append("<img src=" + badgesObj.badges[i].icon_url + " height=100 width=100>");
        }    
    }

    function getCodeschoolBadges() {
        // Use JSONP to avoid CORS issues.
        $.ajax({
            type: "GET",
            url: "https://www.codeschool.com/users/merobertsjr.json",
            dataType: "jsonp",
            success: function (data) {
                var badgesObj = (typeof data === "string") ? JSON.parse(data) : data;
                showCodeschoolBadges(badgesObj);
            },
            error: function () {
                console.log('ERROR during AJAX request.');
            },
            complete: function () { 
                // TODO: Add transitions and hover over classes for details
            }
        });
    }
    
    function showCodeschoolBadges(badgesObj) {
        console.log("Total CodeSchool Badges: "+ badgesObj.badges.length);
            for (var i=0; i < badgesObj.badges.length; i++) {
                $("#codeschool").append('<img src=' + badgesObj.badges[i].badge + ' height=100 width=100>');
            }
    }

getCodeschoolBadges();
getTreehouseBadges();

})()