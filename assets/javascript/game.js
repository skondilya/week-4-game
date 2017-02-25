 // JavaScript function that wraps everything
$(document).ready(function(){
      //game starts 
      //fighter's picture 
      //each character has three attributes: HP; attack pt, counter attck points. differs for each character
      // Creating an function that assigns character name, hp,AP,counter AP, container, styyle class.
    var drawCharacter = function(character, container, styleclass){
          var characterToPlay = $("<div>");

          // 3. Then give each "characterToPlay" the style classes.
          characterToPlay.addClass(styleclass);
          
          // 4. Then give each "characterToPlay" data-attribute.
          //console.log(character.name);
          characterToPlay.attr("name",character.name);
          characterToPlay.attr("data-n",character.name);
          characterToPlay.attr("data-hp",character.healthPower);
          characterToPlay.attr("data-ap",character.attackPower);
          characterToPlay.attr("data-cap",character.counterAttackPower);
          // Each fighter will be given a src link to the image
          var image = $("<img>");
          image.attr("src",character.picture);
          image.addClass("fighters-image");
          characterToPlay.append(image);
          //appending the name and hp to the fighter container 
          var theName = $("<div>");
          theName.append(character.name);
          characterToPlay.append(theName);

          var theHP = $("<div>");
          theHP.append(character.healthPower);
          characterToPlay.append(theHP);
          // appending fighters to different container. 
          container.append(characterToPlay);
    };
    // function similar to drawCharacter with the for loop - will give all the fighters together
    var drawCharacters = function(characters, container, styleclass){
        for (var i = 0; i < characters.length; i++) {
          drawCharacter(characters[i], container, styleclass);
        }
    };
    
    // array of all fighters that can be chosen, along with info such as their picture and powers.
    var fightersToPick= [];
    fightersToPick.push({
    name:"Obi-Wan Kenobi",
    picture: "assets/images/ch-1.jpg",
    healthPower : 120,
    attackPower : 8,
    counterAttackPower : 6,
    });
    fightersToPick.push({
      name: "Luke Skywalker",
      picture: "assets/images/ch-2.jpg",
      healthPower : 100,
      attackPower : 10,
      counterAttackPower : 5,
    });
    fightersToPick.push({
      name: "Darth Sidious",
      picture: "assets/images/ch-3.png",
      healthPower : 150,
      attackPower : 5,
      counterAttackPower : 20,
    });
    fightersToPick.push({
      name : "Darth Maul",
      picture: "assets/images/ch-4.png",
      healthPower : 180,
      attackPower :6,
      counterAttackPower : 25,
    });

    //setting up the initial variables 
    var wins = 0;
    var playerCurrentHP = null;
    var enemyCurrentHP = null; 
    
    //function to get player and its attribute 
    var getPlayer = function(name){
        for (var i = 0; i < fightersToPick.length; i++) {
          if(fightersToPick[i].name === name){
            return fightersToPick[i];
            console.log("fightersToPick[i]")
          }
        }
    };
    // function to get player when its name is not equals the name passes as the argument 
    var getPlayersExcept = function(name, players){
        var t = [];
        for (var i = 0; i < players.length; i++) {
          if(players[i].name != name){
            t.push(players[i]); 
          }
        }
        return t;
    };

    // The setupGame method is called when the page first loads.
    var setupGame= function(){
      // calling drawCharacter to each fighter in the container fightersToPick and applying fighter class 
        drawCharacters(fightersToPick, $(".fightersToPick"), "fighters");

        $(".fighters").on("click", function(){
        // calling drawCharacter to fighter clicked in the container yourCharacter and applying player class 
            drawCharacter(getPlayer($(this).attr("name")), $(".yourCharacter"), "player");
        // calling drawCharacter to fighter not clicked in the container yourCharacter and applying enemy class    
            var defenders = getPlayersExcept($(this).attr("name"), fightersToPick);
            drawCharacters(defenders, $(".enemies"), "enemy");
        // calling drawCharacter to enemy clicked in the container enemies and applying defender class
            $(".enemy").on("click", function(){
              drawCharacter(getPlayer($(this).attr("name")), $(".defender"), "defenders");
              $(".enemies").empty();
              $(".enemies").append('Enemies Available To Attack');
              drawCharacters(getPlayersExcept($(this).attr("name"), defenders), $(".enemies"), "enemy");
            });

            $(".fightersToPick").empty();
        });

         $(".attack").on("click", function(){
         var playerHP = ($(this).attr("data-hp"));
         playerHP = parseInt(playerHP);
         });
    };
//calling the main fuction of setting up page.
    setupGame();
});

