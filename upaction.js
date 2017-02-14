function upaction(acdata){
alert("aaaaaaa");}

function seek(data, playerId){var tid=setTimeout(function(){upaction("&action=seek" + data.toFixed(2));},500);clearTimeout(tid-1);}
function pstate(data, playerId){var ptime = player.getCurrentTime();upaction("&action=" + data + "_" + ptime.toFixed(2));}
var player = null;
function jsbridge(playerId){if (player == null){player = document.getElementById(playerId);player.addEventListener("seekingChange", "seek");
player.addEventListener("playStateChange", "pstate");}}