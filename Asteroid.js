function Asteroid(x, y, text, c) {

    this.pos = createVector(x, y);

    this.c = c; //color

    this.text = text; // text do be typed
    this.size = text.length * 15; //size

    this.completedText = ""; // text which the user has correctly inputted

    this.intact = true; // whether the asteroid is on-screen or not
}

/** 
 * moves Asteroid down the screen
 */
Asteroid.prototype.update = function() {

    // mak speed based upon score
    this.possition.y += map (score, 0, 1000, 1, 15);

    if (this.possition.y > height) {
        endGame();
    }
};

Asteroid.prototype.draw = function() {

    fill(this.c);

    stroke(0);
    strokeWeight(3);
    ellipse(this.pos.x, this.pos.y, this.s);

    noStroke();
    textSize(20);
    fill(255);
    text(this.text, this.pos.x, this.pos.y);

};