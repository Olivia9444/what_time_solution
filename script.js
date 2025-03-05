var time = new Date().getHours();

// console.log(time);

var greeting = "Hello Darling";
var name = "my name is Olivia";

// Your code here
if (time < 12) {
  greeting = "Good morning";
} else if (time <= 18) {
  greeting = "Good afternoon";
} else if (time <= 22) {
  greeting = "Good evening";
} else {
  greeting = "Why are you still up? Go to bed please :)";
}

// alert
alert(
  `${greeting}, ${name}! Welcome to my site. I'd love to have you stay a while.`
);
