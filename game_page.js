player1_name  =localStorage.getItem("player_1");
player2_name  =localStorage.getItem("player_2");

player1_score= 0;
player2_score=0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;


function send(){
     
get_word = document.getElementById("word").value;
word = get_word.toLowerCase();

character_1 = word.charAt(1);

middle = Math.floor(word.length/2);
character_2 = word.charAt(middle);

last = word.length - 1;
character_3 = word.charAt(last);

replace_character1 = word.replace(character_1, "_");
replace_character2 = replace_character1.replace(character_2, "_");
replace_character3 = replace_character2.replace(character_3, "_");

question = "<h4 id='word_display'> Q. "+ replace_character3+ "</h4>"
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br> <button class='btn btn-info' onclick='check()' >Check</button>"
row = question + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";


}
