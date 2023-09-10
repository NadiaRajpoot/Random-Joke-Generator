let myJoke = [
  `Two bytes meet.  The first byte asks, “Are you ill?”
The second byte replies, “No, just feeling a bit off.”`,
  `Eight bytes walk into a bar.
The bartender asks, “Can I get you anything?”
“Yeah,” reply the bytes.  “Make us a double.”`,
  `Q. How did the programmer die in the shower?
A. He read the shampoo bottle instructions: Lather. Rinse. Repeat.`,
  `How many programmers does it take to change a light bulb?
None – It’s a hardware problem`,
  `Why do programmers always mix up Halloween and Christmas?
Because Oct 31 equals Dec 25.`,
  `There are only 10 kinds of people in this world: those who know binary and those who don’t.`,
  `A programmer walks to the butcher shop and buys a kilo of meat.  An hour later he comes back upset that the butcher shortchanged him by 24 grams.`,
  `“Knock, knock.”
“Who’s there?”
very long pause….
“Java.”`,
  `Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.`,
  `Programming is like sex:
One mistake and you have to support it for the rest of your life.`,
  `A man is smoking a cigarette and blowing smoke rings into the air.  His girlfriend becomes irritated with the smoke and says, “Can’t you see the warning on the cigarette pack?  Smoking is hazardous to your health!”`,
  `To which the man replies, “I am a programmer.  We don’t worry about warnings; we only worry about errors.”`,
  `There are three kinds of lies: Lies, damned lies, and benchmarks.`,
  `A programmer is walking along a beach and finds a lamp.  He rubs the lamp, and a genie appears.  “I am the most powerful genie in the world.  I can grant you any wish, but only one wish.”`,
  `The programmer pulls out a map, points to it and says, “I’d want peace in the Middle East.”`,
  `The genie responds, “Gee, I don’t know.  Those people have been fighting for millennia.  I can do just about anything, but this is likely beyond my limits.”`,
  `The programmer then says, “Well, I am a programmer, and my programs have lots of users.  Please make all my users satisfied with my software and let them ask for sensible changes.”`,
  `At which point the genie responds, “Um, let me see that map again.”`,
  `All programmers are playwrights, and all computers are lousy actors.`,
  `Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.`,
  `The generation of random numbers is too important to be left to chance.`,
  `“I just saw my life flash before my eyes and all I could see was a close tag…”`,
  `The computer is mightier than the pen, the sword, and usually, the programmer.`,
  `Debugging: Removing the needles from the haystack.`,
  `Two strings walk into a bar and sit down. The bartender says, “So what’ll it be?”`,
  `“Please excuse my friend,” the second string says, “He isn’t null-terminated.”`,
  `From the Random Shack Data Processing Dictionary:Endless Loop: n., see Loop, Endless.
Loop, Endless: n., see Endless Loop.`,
  `The three most dangerous things in the world are a programmer with a soldering iron, a hardware engineer with a software patch, and a user with an idea.  – The Wizardry Compiled by Rick Cook`,
  `One hundred little bugs in the code
One hundred little bugs.
Fix a bug, link the fix in,
One hundred little bugs in the code.`,
  `A computer science student is studying under a tree and another pulls up on a flashy new bike.  The first student asks, “Where’d you get that?”`,
  `The student on the bike replies, “While I was studying outside, a beautiful girl pulled up on her bike.  She took off all her clothes and said, ‘You can have anything you want’.”`,
  `The first student responds, “Good choice!  Her clothes probably wouldn’t have fit you.”`,
  `A guy goes to his doctor because he can see into the future. The doctor asks him,"How long have you suffered from that condition?" The guy tells him, "Since next Monday."`,
  `What do sprinters eat before a race? Nothing, they fast!`
];


//generate random index for joke
function randomNumberFunc(min, max) {
  let floatrandomNum = Math.random();
  let difference = max - min + 1;

  const randomNum = Math.round(difference * floatrandomNum);
  const randomWithInrange = randomNum + min;
  return randomWithInrange;
}
//event listener to button
document.getElementById("btn").addEventListener("click", dispalyJoke);

//function to dispaly joke
function dispalyJoke() {
  let index = randomNumberFunc(0, myJoke.length - 2);
  console.log(myJoke.length);
  document.getElementById("joke").innerHTML = myJoke[index];
}
