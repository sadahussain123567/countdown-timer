#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
// function for countdown 
function* countdowntimer(second) {
    while (second > 0) {
        yield second;
        second--;
    }
}
let timer = countdowntimer(25);
function displaycountdown() {
    let result = timer.next();
    if (!result.done) {
        const now = new Date();
        const countdown = new Date(now.getTime() + (result.value * 1000));
        const remaing = differenceInSeconds(countdown, now);
        console.log(`REMAINING SECONDS:${remaing}`);
        setTimeout(displaycountdown, 1000);
    }
    else {
        console.log("countdown complete!");
    }
}
displaycountdown();
