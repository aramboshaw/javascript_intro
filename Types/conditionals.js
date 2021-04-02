let tempF = 2;

switch (true) {
    case tempF > 95:
    console.log("It's hot!");
    break;
    case tempF > 50:
    console.log("It's warm!");
    break;
    case tempF > 32:
    console.log("It's chilly!");
    break;
    case tempF <= 32:
    console.log("Cold!");
    break;
    default:
    console.log("???");
};

