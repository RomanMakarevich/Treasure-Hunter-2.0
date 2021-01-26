function contact(sprite, wall) {

    let collision = undefined;
    //to left
    if (sprite.x - (wall.x + wall.width) < 0 &&
        sprite.y + sprite.height / 2 > wall.y &&
        sprite.y + sprite.height / 2 < wall.y + wall.height &&
        sprite.x + sprite.width > wall.x + wall.width &&
        Math.abs(sprite.x - (wall.x + wall.width)) < Math.abs((sprite.y + sprite.height / 2) - (wall.y + wall.height)) ||
        sprite.x - (wall.x + wall.width) < 0 &&
        sprite.y + sprite.height > wall.y &&
        sprite.y + sprite.height < wall.y + wall.height &&
        sprite.x + sprite.width > wall.x + wall.width &&
        Math.abs(sprite.x - (wall.x + wall.width)) < Math.abs((sprite.y + sprite.height) - (wall.y))) {
        sprite.x = wall.x + wall.width;
        collision = "left";
    }
    //to up
    if ((sprite.y + sprite.height / 2) - (wall.y + wall.height) < 0 &&
        sprite.x > wall.x &&
        sprite.x < wall.x + wall.width &&
        sprite.y + sprite.height > wall.y + wall.height &&
        Math.abs((sprite.y + sprite.height / 2) - (wall.y + wall.height)) < Math.abs(sprite.x - (wall.x + wall.width)) ||
        (sprite.y + sprite.height / 2) - (wall.y + wall.height) < 0 &&
        sprite.x + sprite.width > wall.x &&
        sprite.x + sprite.width < wall.x + wall.width &&
        sprite.y + sprite.height > wall.y + wall.height &&
        Math.abs((sprite.y + sprite.height / 2) - (wall.y + wall.height)) < Math.abs((sprite.x + sprite.width) - wall.x)) {
        sprite.y = wall.y + wall.height - sprite.height / 2;
        collision = "up";
    }
    //to right
    if (wall.x - (sprite.x + sprite.width) < 0 &&
        sprite.y + sprite.height / 2 > wall.y &&
        sprite.y + sprite.height / 2 < wall.y + wall.height &&
        sprite.x < wall.x &&
        Math.abs((sprite.x + sprite.width) - wall.x) < Math.abs((sprite.y + sprite.height / 2) - (wall.y + wall.height)) ||
        wall.x - (sprite.x + sprite.width) < 0 &&
        sprite.y + sprite.height > wall.y &&
        sprite.y + sprite.height < wall.y + wall.height &&
        sprite.x < wall.x &&
        Math.abs((sprite.x + sprite.width) - wall.x) < Math.abs((sprite.y + sprite.height) - wall.y)) {
        sprite.x = wall.x - sprite.width;
        collision = "right";
    }
    //to down
    if (wall.y - (sprite.y + sprite.height) < 0 &&
        sprite.x > wall.x &&
        sprite.x < wall.x + wall.width &&
        sprite.y < wall.y &&
        Math.abs((sprite.y + sprite.height) - wall.y) < Math.abs(sprite.x - (wall.x + wall.width)) ||
        wall.y - (sprite.y + sprite.height) < 0 &&
        sprite.x + sprite.width > wall.x &&
        sprite.x + sprite.width < wall.x + wall.width &&
        sprite.y < wall.y &&
        Math.abs((sprite.y + sprite.height) - wall.y) < Math.abs((sprite.x + sprite.width) - wall.x)) {
        sprite.y = wall.y - sprite.height;
        collision = "down";
    }

    return collision;
}