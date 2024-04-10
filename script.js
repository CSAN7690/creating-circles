function draw() {
    const circleX = random(width);
    const circleY = random(height);
    const circleSize = random(12, 12);
    fill(random(255), random(255), random(255));

    ellipse(circleX, circleY, circleSize)
}