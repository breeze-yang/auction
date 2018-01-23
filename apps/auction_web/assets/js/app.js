// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

import {socket, channel} from "./socket"
// import jquery from "./jquery.min"
import Swiper from "./swiper.min"
// window.jQuery = jquery
// window.$ = jquery
// window.Swiper

$(function(){
  var swiper = new Swiper('.swiper7', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 2500
  });
})

$(".offer200").on("click", () => {
  channel.push("new_bid", {increase: 200})
});


$(".offer500").on("click", () => {
  channel.push("new_bid", {increase: 500})
});


$(".offer1000").on("click", () => {
  channel.push("new_bid", {increase: 1000})
});
