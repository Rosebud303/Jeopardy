class Player {
  constructor(name, score = 0) {
    this.name = name;
    this.score = score;
  }

  //invoke this method below to keep
  //track of the points 
  addScore(points) {
    this.score += points;
  }
}

export default Player;