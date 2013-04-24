# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
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