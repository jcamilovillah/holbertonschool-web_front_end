let studentHogwarts = (function() {
    let privateScore = 0;
    let name = null;

    let changeScoreBy = function(points) {
        privateScore += points;
    }

    return {
        setName : function(newName) {
            name = newName;
        },
        rewardStudent: function() {
            changeScoreBy(1);
        },
        penalizeStudent: function() {
            changeScoreBy(-1);
        },
        getScore: function() {
            return `${name}: ${privateScore}`;
        }
    }
});
 
let harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
