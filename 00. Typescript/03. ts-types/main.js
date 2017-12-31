//any
var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4];
var f = [1, 'a', true, [1, 2, 3, 4]];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
