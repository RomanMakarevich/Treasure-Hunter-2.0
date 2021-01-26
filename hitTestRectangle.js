function hitTestRectangle(sprite1, sprite2){
    let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

    hit = false;

    sprite1.centerX = sprite1.x - sprite1.width/2;
    sprite1.centerY = sprite1.y - sprite1.height/2;
    sprite2.centerX = sprite2.x - sprite2.width/2;
    sprite2.centerY = sprite2.y - sprite2.height/2;

    sprite1.halfWidht = sprite1.width/2;
    sprite1.halfHeight = sprite1.height/2;
    sprite2.halfWidht = sprite2.width/2;
    sprite2.halfHeight = sprite2.height/2;

    vx = Math.abs(sprite1.centerX - sprite2.centerX);
    vy = Math.abs(sprite1.centerY - sprite2.centerY);

    combinedHalfWidths = sprite1.halfWidht + sprite2.halfWidht;
    combinedHalfHeights = sprite1.halfHeight + sprite2.halfHeight;

    if (vx < combinedHalfWidths){

        if (vy < combinedHalfHeights){

            hit = true;
        }else {
            hit = false;
        }
    }else {
        hit = false;
    }

    return hit;
}