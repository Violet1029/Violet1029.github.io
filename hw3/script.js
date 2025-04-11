// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0, y = 0, dx = 5, dy = 5, r = 30, color = "#81C0C0";
let x2 = 50, y2 = 50, dx2 =10,dy2 = 10,r2 = 30, color2 = "#FFCBB3";
// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x = x + dx;
    y = y + dy;
	x2 = x2 + dx2;
    y2 = y2 + dy2;

    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    if(x<0||x>canvas.width) dx=-dx;
	if(y<0||y>canvas.height) dy=-dy;

    if(x2<0||x2>canvas.width) dx2=-dx2;
	if(y2<0||y2>canvas.height) dy2=-dy2;
	
    drawBall(x, y, r, color);
	drawBall(x2, y2, r2, color2);
    requestAnimationFrame(draw);
}
draw();