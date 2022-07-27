import Settings from "./settings";
const config = Settings
let guildRank, guildArrow = '', discordMessage, officerRank, officerArrow, discordUsername

register("command", () => config.openGUI()).setName("bridge");

register("chat", function (event) {
  const fullMessage = ChatLib.getChatMessage(event)
  const message = fullMessage.toString()
  if (message.startsWith("§2Guild >") && message.includes(config.guildBotName)) {
    const botMessage = message.split('§f: ')
    const messageSplit = getMessageSplit(config.guildDiscordMessageSplitOption)
    const guildDiscordMessage = botMessage[1].split(messageSplit)
    if (!guildDiscordMessage[0].startsWith('[EVENT]') && getLastWord(guildDiscordMessage).length != 24) {
      // ! Guild Chat
      if(config.guildChatFormat) {
        cancel(event)
        if (config.guildArrowFormat) guildArrow = `${getColorCode(config.guildArrowColor)}${getArrowFormat(config.guildArrowOption)}`
        if (config.guildRankFormat) guildRank = ` ${getColorCode(config.guildRankColor)}${getRankPrefix(config.guildRankOption)}`
        if (config.guildDiscordMessageFormat) discordUsername = `${getColorCode(config.guildDiscordUsernameColor)}` 
        if (config.guildDiscordMessageFormat) discordMessage = `${getColorCode(config.guildDiscordMessageColor)}`
        let rank = message.substring(message.indexOf('[')-2, message.indexOf(']') + 1) // ? Add
        const response = `${guildArrow ?? '§2Guild >' } ${discordUsername ?? '§f'}${guildDiscordMessage[0]}${config.guildRankFormat ? guildRank : ''}§f: ${discordMessage ?? '§f'}${guildDiscordMessage[1]}`
        ChatLib.chat(response)
      }
    } else if (guildDiscordMessage[0].startsWith('[EVENT]')) {
      // ! Event Handler
      if (config.eventHandlerFormat) {
        cancel(event)
        const hypixelEvent = guildDiscordMessage[0].split(']')
        const response = `§2Guild > ${getColorCode(config.eventColor)}§l[EVENT]${getColorCode(config.eventMessageColor)}${hypixelEvent[1]} ${getColorCode(config.eventArrowColor)}» ${getColorCode(config.eventTimeColor)}${guildDiscordMessage[1]}`
        const title = hypixelEvent[1].split('(')
        Client.showTitle(`${getColorCode(config.eventTitleColor)}${title[0]}`,`${guildDiscordMessage[1]}`, 1, 15, 1);
        // note.pling & random.orb & note.harp & random.successful_hit
        World.playSound("random.successful_hit", 1, 1)
        ChatLib.chat(response)
      }

    } else if (getLastWord(guildDiscordMessage).length === 24 && !guildDiscordMessage[0].startsWith('[EVENT]')) {
      // ! Command Handler
      if (config.commandHandlerFormat) {
        cancel(event)
        const response = message.replaceAll(getLastWord(message), '').replaceAll('-', '')
        ChatLib.chat(response)
      }
    }
  } if (message.startsWith("§3Officer >") && message.includes(config.guildBotName)) {
    // ! Officer Chat
    const botMessage = message.split('§f: ')
    const messageSplit = getMessageSplit(config.officerDiscordMessageSplitOption)
    const guildDiscordMessage = botMessage[1].split(messageSplit)
    if(config.officerChatFormat) {
      cancel(event)
      if (config.officerArrowFormat) officerArrow = `${getColorCode(config.officerArrowColor)}${getOfficerArrowFormat(config.officerArrowOption)}`
      if (config.officerRankFormat) officerRank = ` ${getColorCode(config.officerRankColor)}${getOfficerRankPrefix(config.officerRankOption)}`
      if (config.officerDiscordMessageFormat) discordUsername = `${getColorCode(config.officerDiscordUsernameColor)}` 
      if (config.officerDiscordMessageFormat) discordMessage = `${getColorCode(config.officerDiscordMessageColor)}`
      let rank = message.substring(message.indexOf('[')-2, message.indexOf(']') + 1) // ? Add
      const response = `${officerArrow ?? '§3Officer >' } ${discordUsername ?? '§f'}${guildDiscordMessage[0]}${config.officerRankFormat ? officerRank : ''}§f: ${discordMessage ?? '§f'}${guildDiscordMessage[1]}`
      ChatLib.chat(response)
    }
  }
})



function getLastWord(string) {
  return (""+string).replace(/[\s-]+$/,'').split(/[\s-]/).pop()
}

function getColorCode(color) {
  if(color == 0) return "§0";
  if(color == 1) return "§1";
  if(color == 2) return "§2";
  if(color == 3) return "§3";
  if(color == 4) return "§4";
  if(color == 5) return "§5";
  if(color == 6) return "§6";
  if(color == 7) return "§7";
  if(color == 8) return "§8";
  if(color == 9) return "§9";
  if(color == 10) return "§a";
  if(color == 11) return "§b";
  if(color == 12) return "§c";
  if(color == 13) return "§d";
  if(color == 14) return "§e";
  if(color == 15) return "§f";
}

function getRankPrefix(prefix) {
  if(prefix == 0) return "[DISCORD]";
  if(prefix == 0) return "[Discord]";
  if(prefix == 1) return "[GUILD]";
  if(prefix == 2) return "[Guild]";
}

function getOfficerRankPrefix(prefix) {
  if(prefix == 0) return "[DISCORD]";
  if(prefix == 0) return "[Discord]";
  if(prefix == 1) return "[OFFICER]";
  if(prefix == 2) return "[Officer]";
}

function getMessageSplit(message) {
  if (message == 0) return ':'
  if (message == 1) return ' » '
  if (message == 2) return ' > '
}

function getArrowFormat(message) {
  if (message == 0) return 'Guild >'
  if (message == 1) return 'Discord >'
  if (message == 2) return 'Bridge >'
  if (message == 3) return 'Bridge Bot >'
}

function getOfficerArrowFormat(message) {
  if (message == 0) return 'Officer >'
  if (message == 1) return 'Discord >'
  if (message == 2) return 'Bridge >'
  if (message == 3) return 'Bridge Bot >'
}

