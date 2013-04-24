// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
var display_content = function(response){
    $("#content").html(response);

    $("#content a").on("click", monitor_links);
    $("#content form").on("submit", monitor_form)
}

var monitor_form = function(e){
    var output_error = function(msg){
        alert(msg);
        return false;

    }
    var validation = function (form){

        var value = $(form).find("#book_title").val().trim();
        $(form).find("#book_title").val(value);

        if(value.length < 5) return output_error("Name is too small");
        if(value.length > 20) return output_error("Name is too big");

        var value = $(form).find("#book_description").val().trim();
        $(form).find("#book_description").val(value);

        if(value.length < 20) return output_error("Description is too small");
        if(value.length > 100) return output_error("Description is too big");

        var value = $(form).find("#book_price").val().trim();
        $(form).find("#book_price").val(value);

        var value_float = parseFloat(value);


        if(isNaN(value_float)) return output_error("Price is not a Number :/");
        if(value_float < 0) return output_error("Price must be a positive Number");

        return true;

    }
    e.preventDefault();

    if(!validation($(this))) {return;}

    var data = {};
    $(this).find("input, textarea").each(function(){
        var name = $(this).attr("name");
        var value = $(this).val();
        data[name] = value;
    });

    var url = $(this).attr("action");
    $.ajax(
        {
            url: url,
            method: $(this).attr("method"),
            data: data,
            complete:  function() {
                $.get(url, display_content);
            }
        }
    )

}

var monitor_links = function(e){
    e.preventDefault();

    var link =$(this);
    var url = $(this).attr("href");
    $.ajax({
        url: url,
        method: $(this).attr("data-method"),
        success: display_content,
        error: function() { $(link).parent("tr").remove();}
    });

}

$("#menu a").on("click", monitor_links);

//          QUIZ           //

//question array
//array of JSON objects
//FMT Q => txt, Ans = > txt, Correct =>nom
var questions = [
//	{"text": "this is my question"},
    {"text": "Which is not a cat?", "answers": ["Alice","Sandra","Smoked Cod","Vagin" ], "correct": "Vagin" },
    {"text": "Which cat is fat?", "answers": ["Smoked Cod","Mr. F McCat","Alice","Sandra" ], "correct": "Smoked Cod"  },
    {"text": "Who is the prettiest cat?", "answers": ["Alice","Oregano","Sandra","Goolag" ], "correct": "Sandra" },
    {"text": "What does Maurice love more than anything?", "answers": ["Salt","Kippers","Wool","Silly Questions" ], "correct": "Wool" },
    {"text": "What happened wigget?", "answers": ["he stood on a crack","he broke his back","he lied","all of the above", "wool" ], "correct": "all of the above" }

];

var score = 0;//assign a value to score
var display_question =(function(){//creates a var
    var question = questions[score];//targets a specific question, change array position to change q number

    $("#question").text(question.text); //select key => value

    $("#answers").empty();
    for(var i in question.answers) {
        var answer =question.answers[i];
        $("#answers").append("<li>" + answer + "</li>"); //append adds instead of overwrites as list items
    }

    $("#answers li").on("click", validate_answer); //aims to validate the answer by calling the variable val ans
});

var validate_answer = (function () { //creates a function that will validate the answer
    if( $(this).text().toLowerCase() == questions[score].correct.toLowerCase()){
        score++;
        if(questions.length > score){
            display_question();
            countdown = max_countdown
        }else{
            $("#question").text("you finished, you are not retarded!");
            $("#answers").empty();
            clearInterval(countdown_interval);
        }
    }else{
        display_error();
    }
    display_score();
});

var display_error = (function(){
    $("#question").text("you are retarded, refresh and try again");
    $("#answers").empty();
    clearInterval(countdown_interval);
});
var display_score =(function(){
    $("#score").text(score);
});
var max_countdown = 10;
var countdown = max_countdown;
var display_countdown = (function () {
    $("#countdown").text(countdown);
});

var countdown_interval = setInterval( function() {
        display_countdown();
        countdown--;
        if(countdown < 0){
            display_error();
        }
    },
    1000);




display_question();//displays the content of the question variable
display_score();

// AJAX REQUESTS //

var display_content = function(response){
    $("#content").html(response);

    $("#content a").on("click", monitor_links);
    $("#content form").on("submit", monitor_form)
}

var monitor_form = function(e){
    var output_error = function(msg){
        alert(msg);
        return false;

    }
    var validation = function (form){

     var value = $(form).find("#book_title").val().trim();
     $(form).find("#book_title").val(value);

     if(value.length < 5) return output_error("Name is too small");
     if(value.length > 20) return output_error("Name is too big");

     var value = $(form).find("#book_description").val().trim();
     $(form).find("#book_description").val(value);

     if(value.length < 20) return output_error("Description is too small");
     if(value.length > 100) return output_error("Description is too big");

     var value = $(form).find("#book_price").val().trim();
     $(form).find("#book_price").val(value);

     var value_float = parseFloat(value);


     if(isNaN(value_float)) return output_error("Price is not a Number :/");
     if(value_float < 0) return output_error("Price must be a positive Number");

     return true;

     }
     e.preventDefault();

     if(!validation($(this))) {return;}

     var data = {};
     $(this).find("input, textarea").each(function(){
     var name = $(this).attr("name");
     var value = $(this).val();
     data[name] = value;
     });

     var url = $(this).attr("action");
     $.ajax(
     {
     url: url,
     method: $(this).attr("method"),
     data: data,
     complete:  function() {
     $.get(url, display_content);
     }
     }
     )

     }

    var monitor_links = function(e){
        e.preventDefault();

        var link =$(this);
        var url = $(this).attr("href");
        $.ajax({
            url: url,
            method: $(this).attr("data-method"),
            success: display_content,
            error: function() { $(link).parent("tr").remove();}
        });

    }

    $("#menu a").on("click", monitor_links);
