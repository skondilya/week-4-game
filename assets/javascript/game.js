 // JavaScript function that wraps everything
$(document).ready(function(){
      //game starts 
      //fighter's picture 
      //each character has three attributes: HP; attack pt, counter attack points. differs for each character
      // Creating an object that will house all of our logic and variables.
    var rpgGame = {

      // Object of all fighters that can be chosen, along with info such as their picture and powers.
      fightersToPick: {
        f1: {
        name:"Obi-Wan Kenobi",
        picture: "../images/ch-1.jpg",
        healthPower : 120,
        attackPower : 8,
        counterAttackPower : 6,
        },
        f2: {
          name: "Luke Skywalker",
          picture: "../images/ch-2.jpg",
          healthPower : 100,
          attackPower : 10,
          counterAttackPower : 5,
        },
        f3: {
          name: "Darth Sidious",
          picture: "../images/ch-3.png",
          healthPower : 150,
          attackPower : 5,
          counterAttackPower : 20,
        },
        f4: {
          name : "Darth Maul",
          picture: "../images/ch-4.png",
          healthPower : 180,
          attackPower :6,
          counterAttackPower : 25,
        }
      
      },

      // The setupGame method is called when the page first loads.
      setupGame: function() {
        var objKeys = Object.keys(this.fightersToPick);

        for (var i = 0; i < objKeys.length; i++) {
        
          // Inside the loop...


          // 2. Create a variable named "characterToPlay" equal to $("<div>");
          var characterToPlay = $("<div>");

          // 3. Then give each "characterToPlay" the following classes: "" "" "".
          characterToPlay.addClass("fighters");
          
          // 4. Then give each "characterToPlay" a data-attribute called "data-power".
          characterToPlay.attr("data-n",this.fightersToPick[objKeys[i]].name);
          characterToPlay.attr("data-hp",this.fightersToPick[objKeys[i]].healthPower);
          characterToPlay.attr("data-ap",this.fightersToPick[objKeys[i]].attackPower);
          characterToPlay.attr("data-cap",this.fightersToPick[objKeys[i]].counterAttackPower);
          // Each fifhter will be given a src link to the image
          var image = $("<img>");
          image.attr("src",this.fightersToPick[objKeys[i]].picture);
          characterToPlay.append(image);

          // then give each "characterToPlay" a text equal to "name and hp".
          //characterToPlay.text(this.fightersToPick[objKeys[i]].healthPower);
          characterToPlay.text(this.fightersToPick[objKeys[i]].name);
          $("characterToPlay").append(this.fightersToPick[objKeys[i]].healthPower);
          // Finally, append each "letterBtn" to the "#buttons" div (provided).
          
          $(".fightersToPick").append(characterToPlay);
    
        }
      },

      // Function that "restarts" the game by resetting all of the variables.
      restartGame: function() {
      },

      // Function that checks to see if the user has won.
      updateWins: function() {
      }
    }



    //Create an "on-click" event attached to the ".fighter" class.
    $(".fighters").on("click", function() {
    
    });

    //Create an "on-click" event attached to the ".enemies" class.
    $(".enemies").on("click", function() {
    
    });


    //Create an "on-click" event attached to the ".attack" class.
    $(".attack").on("click", function() {
    
    });


    //Create an "on-click" event attached to the "#restart" button id.
    $("#restart").on("click", function() {
      // Inside the on-click event...
      //Use the jQuery "empty()" method to clear the contents of the "#display" div.
      $(".enemies").empty();
      $(".defender").empty();

    });

    // Initialize the game when the page loads.
    rpgGame.setupGame();


     
      //each times the player attack attack power increases by its base attack power like 6, 12, 18, 24, 30
      //enemy character only has counter attack power and counter attack power doesnt change.
      //player chooses a character by clicking fighter's pic 
      //enemies moved to a different area of the screen 
      //player chooses an opponnet - that is moves to a defender area 
      //when attack clicked, opponnet hp lowers and display these pts at boottom of the defender's pic
      //opponnet character counter attacks n player's HP lowers and these pts aare displayed at bottom of pic
      //player keep hit attack button 
      //defender' HP < or = 0 , remove enemy from defender area n player chooses new opponent 
      //player wins by defeating all the enemy 
      // player looses if their character's HP < or = 0  


});

