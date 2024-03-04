function Asteroid(x, y, text, c) {

    this.pos = createVector(x, y);

    this.c = c; //color

    this.text = text;
    
    this.s = text.length * 10; //size

    this.completedText = "";


}

Asteroid.prototype.update = function() {

    this.pos.y++;


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