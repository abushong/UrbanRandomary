// include jquery in file
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script); 

// create a div, add to page, and change innter text
var wordDiv = document.createElement("div");
var word = document.createElement("h1"); 
var wordDef = document.createElement("p");
var logo = document.createElement("p");
document.body.appendChild(wordDiv);
wordDiv.appendChild(word);
wordDiv.appendChild(wordDef); 
wordDiv.appendChild(logo);
wordDiv.className = "word-container";
word.className = "word";
wordDef.className = "wordDef";
logo.className = "logo";

// jquery
$(document).ready(function(){

	var word;
	var def;
	var results = "";

	$(".logo").html("Urban Randomary");

	$.get('https://api.urbandictionary.com/v0/random',function (data,status) {
	    if(status === 'success'){
	    	for(var i=0; i<10; i++){
	    		// if the length of the definition exceeds 350 characters, use next word. Prevents overlap of google logo
	    		if(data.list[i].definition.length <= 350){
	    			$(".word").html(data.list[i].word);
	    			$(".wordDef").html(data.list[i].definition);
	    			break;
	    		}
	    	}
	    	//console.log(data);
	    	//$(".word").html(data.list[0].word);
	    	//$(".wordDef").html(data.list[0].definition);
	    	//alert(data.list[0].word);
	    	//alert(data.list[0].definition);
	    }
	    else{
	    	console.log(status);
	    }
    });     
}); 