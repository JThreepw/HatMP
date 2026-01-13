//Room name
var room152 = {};
room152.main = function () {
    if (!daily.get("jonesCleanRoom1"))
        sc.select("clean", "152_sittingRoom/clean.png", 0);

    nav.buildnav([150, 153, 154]);
};

room152.btnclick = function (name) {
    switch (name) {
        case "clean":
            nav.killall();
            char.addtime(60);
            nav.bg("152_sittingRoom/dust.jpg");
            daily.set("jonesCleanRoom1");
            nav.next("finishClean");
            break;
        case "finishClean":
            char.room(152);
            break;
        default:
            break;
    }
};

room152.chatcatch = function (callback) {
    switch (callback) {
        case "inspect":
          
            break;
       
        default:
            break;
    }
};

room152.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "butler",
            text: "So you're the whore who wore the master's piss at the fashion show. You must be quite desperate for attention to do such a dreadful act, a common trollop.",
            button: [
                { chatID: 1, text: "Oh. That's me.", callback: "" }
            ]
        },
       
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};