var user1 = {
    username: "Dave",
    password: "little"
};

var database = [user1];
console.log(database);

var newsfeed = [
    {
        username: "Dave",
        timeline: "111"
    },
    {
        username: "Dave",
        timeline: "222"
    },
    {
        username: "Dave",
        timeline: "333"
    }
]

newsfeed.forEach((element, i) => {
    console.log(element.username);
    console.error(element.timeline);
    console.log(i);
});

for (var i of newsfeed) {
    console.log(i.timeline);
}