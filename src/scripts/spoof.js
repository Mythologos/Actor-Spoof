
const asCommandPattern = new RegExp("(?:(?<firstName>\\w+)|\"(?<fullName>.+)\")[ ](?<content>.+)");


function spoofActor(chat, parameters, messageData) {
    let spoofedMessage = {};
    if (asCommandPattern.test(parameters) === true) {
        const commandMatch = parameters.match(asCommandPattern)
        let spoofedAlias = commandMatch.groups.firstName !== undefined ? commandMatch.groups.firstName : commandMatch.groups.fullName; 
        spoofedMessage["content"] = commandMatch.groups.content;
        messageData.speaker["alias"] = spoofedAlias;
    } else {
        throw new Error("spoofActor: the command's message was not able to be parsed.");
    }
    return spoofedMessage;
}


Hooks.on("chatCommandsReady", commands => {
    commands.register({
        name: "/as",
        module: "actor-spoof",
        aliases: ["/spoof"],
        description: game.i18n.localize("actor-spoof.commands.as.description"),
        requiredRole: foundry.CONST.USER_ROLES.GAMEMASTER,
        callback: (chat, parameters, messageData) => spoofActor(chat, parameters, messageData),
        closeOnComplete: true
    })
});
