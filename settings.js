import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SelectorProperty, Color} from 'Vigilance';
@Vigilant('Fancy Bridge Chat', 'Hypixel Bridge Bot Chat Format', {
    getCategoryComparator: () => (a, b) => {
        const categories = ['Guild Chat', 'Officer Chat', 'Command Handler', 'Event Handler'];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})

class Settings {
    // ! Guild Chat
    @SwitchProperty({
        name: "Guild Chat Format",
        description: "Toggle Bridge Chat format.",
        category: "Guild Chat",
        subcategory: "General"
    })
    guildChatFormat = true;
    @TextProperty({
        name: 'Bot name',
        description: 'Bots name',
        category: 'Guild Chat',
        subcategory: 'General',
        placeholder: 'Minecraft Username',
    })
    guildBotName = 'FemboysBot';

    // ! Guild >
    // ? Toggle
    @SwitchProperty({
        name: "Chat Format",
        description: "§7Toggle §2Guild > §7Format",
        category: "Guild Chat",
        subcategory: "§2Guild >"
    })
    guildArrowFormat = true;

    // ? Dropdown
    @SelectorProperty({
        name: "Replacement",
        description: '§7Select an replacement',
        category: 'Guild Chat',
        subcategory: "§2Guild >",
        options: ['Guild >', 'Discord >', 'Bridge >', 'Bridge Bot >'],
    })
    guildArrowOption = 0;

    // ? Dropdown
    @SelectorProperty({
        name: "Replacement Color",
        description: 'Select an replacement color.',
        category: 'Guild Chat',
        subcategory: "§2Guild >",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    guildArrowColor = 2;

    // ! [RANK]
    // ? Toggle
    @SwitchProperty({
        name: "Chat Format",
        description: "§7Toggle §3[RANK] §7Format",
        category: "Guild Chat",
        subcategory: "§3[RANK]"
    })
    guildRankFormat = true;

    // ? Dropdown
    @SelectorProperty({
        name: "Replacement",
        description: 'Select an replacement',
        category: 'Guild Chat',
        subcategory: "§3[RANK]",
        options: ['[DISCORD]', '[Discord]', '[GUILD]', '[Guild]'],
    })
    guildRankOption = 0;

    // ? Dropdown
    @SelectorProperty({
        name: "Replacement Color",
        description: 'Select an replacement color.',
        category: 'Guild Chat',
        subcategory: "§3[RANK]",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    guildRankColor = 3;

    // ! discordUsername
    // ? Toggle
    @SwitchProperty({
        name: "Chat Format",
        description: "§7Toggle Discord username format",
        category: "Guild Chat",
        subcategory: "§fDiscord Username Format",
    })
    guildDiscordUsernameFormat = true;

    // ? Dropdown
    @SelectorProperty({
        name: "Replacement Color",
        description: 'Select an replacement color.',
        category: 'Guild Chat',
        subcategory: "§fDiscord Username Format",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    guildDiscordUsernameColor = 9;

    // ! » 
    // ? Dropdown
    @SelectorProperty({
        name: "Replacement",
        description: '§7Select an replacement',
        category: 'Guild Chat',
        subcategory: "§fDiscord message split",
        options: [': ', ' » ', ' > '],
    })
    guildDiscordMessageSplitOption = 1;

    // ! message
    // ? Dropdown
    @SwitchProperty({
        name: "Chat Format",
        description: "§7Toggle Discord message Format",
        category: "Guild Chat",
        subcategory: "§fDiscord message Format"
    })
    guildDiscordMessageFormat = true;

    @SelectorProperty({
        name: "Replacement Color",
        description: 'Select an replacement color.',
        category: 'Guild Chat',
        subcategory: "§fDiscord message Format",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    guildDiscordMessageColor = 15;

    // ! Officer Chat
    @SwitchProperty({
        name: "Officer Chat Format",
        description: "Toggle Bridge Chat format for Officer Chat.",
        category: "Officer Chat",
        subcategory: "General"
    })
    officerChatFormat = true;

    @TextProperty({
        name: 'Bot name',
        description: 'Bots name',
        category: 'Officer Chat',
        subcategory: 'General',
        placeholder: 'Minecraft Username',
    })
    officerBotName = 'FemboysBot';
    
    // ! officer >
    // ? Toggle
    @SwitchProperty({
        name: "Chat Format",
        description: "§7Toggle §3Officer > §7Format",
        category: "Officer Chat",
        subcategory: "§3Officer >"
    })
    officerArrowFormat = true;
    
    // ? Dropdown
    @SelectorProperty({
        name: "Replacement",
        description: '§7Select an replacement',
        category: 'Officer Chat',
        subcategory: "§3Officer >",
        options: ['Officer >', 'Discord >', 'Bridge >', 'Bridge Bot >'],
    })
    officerArrowOption = 0;
    
    // ? Dropdown
    @SelectorProperty({
        name: "Replacement Color",
        description: 'Select an replacement color.',
        category: 'Officer Chat',
        subcategory: "§3Officer >",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    officerArrowColor = 3;
    
    // ! [RANK]
    // ? Toggle
    @SwitchProperty({
        name: "Chat Format",
        description: "§7Toggle §3[RANK] §7Format",
        category: "Officer Chat",
        subcategory: "§3[RANK]"
    })
    officerRankFormat = true;
    
    // ? Dropdown
    @SelectorProperty({
        name: "Replacement",
        description: 'Select an replacement',
        category: 'Officer Chat',
        subcategory: "§3[RANK]",
        options: ['[DISCORD]', '[Discord]', '[OFFICER]', '[Officer]'],
    })
    officerRankOption = 0;
    
    // ? Dropdown
    @SelectorProperty({
        name: "Replacement Color",
        description: 'Select an replacement color.',
        category: 'Officer Chat',
        subcategory: "§3[RANK]",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    officerRankColor = 3;
    
    // ! discordUsername
    // ? Toggle
    @SwitchProperty({
        name: "Chat Format",
        description: "§7Toggle Discord username format",
        category: "Officer Chat",
        subcategory: "§fDiscord Username Format",
    })
    officerDiscordUsernameFormat = true;
    
    // ? Dropdown
    @SelectorProperty({
        name: "Replacement Color",
        description: 'Select an replacement color.',
        category: 'Officer Chat',
        subcategory: "§fDiscord Username Format",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    officerDiscordUsernameColor = 9;
    
    // ! » 
    // ? Dropdown
    @SelectorProperty({
        name: "Replacement",
        description: '§7Select an replacement',
        category: 'Officer Chat',
        subcategory: "§fDiscord message split",
        options: [': ', ' » ', ' > '],
    })
    officerDiscordMessageSplitOption = 1;
    
    // ! message
    // ? Dropdown
    @SwitchProperty({
        name: "Chat Format",
        description: "§7Toggle Discord message Format",
        category: "Officer Chat",
        subcategory: "§fDiscord message Format"
    })
    officerDiscordMessageFormat = true;
    
    @SelectorProperty({
        name: "Replacement Color",
        description: 'Select an replacement color.',
        category: 'Officer Chat',
        subcategory: "§fDiscord message Format",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    officerDiscordMessageColor = 15;

    // ! Command Handler
    @SwitchProperty({
        name: "Command Handler Format",
        description: "Toggle Bridge Chat format for Commands.",
        category: "Command Handler",
        subcategory: "General"
    })
    commandHandlerFormat = true;

    // ! Event Handler
    @SwitchProperty({
        name: "Event Handler Chat Format",
        description: "Toggle format for Events.",
        category: "Event Handler",
        subcategory: "General"
    })
    eventHandlerFormat = true;

    @SelectorProperty({
        name: "[EVENT] Color",
        description: 'Select an title color.',
        category: 'Event Handler',
        subcategory: "§f[EVENT]",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    eventColor = 12;

    @SelectorProperty({
        name: "Event Information Color",
        description: 'Select an color.',
        category: 'Event Handler',
        subcategory: "§fEvent",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    eventMessageColor = 15;

    @SelectorProperty({
        name: "Event Arrow Color",
        description: 'Select an color.',
        category: 'Event Handler',
        subcategory: "§fEvent",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    eventArrowColor = 15;

    @SelectorProperty({
        name: "Event Time Color",
        description: 'Select an color.',
        category: 'Event Handler',
        subcategory: "§fEvent",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    eventTimeColor = 15;

    @SwitchProperty({
        name: "Event Title",
        description: "Toggle title for Events.",
        category: "Event Handler",
        subcategory: "Title"
    })
    eventHandlerTitle = true;

    @SelectorProperty({
        name: "Event Title Color",
        description: 'Select an color.',
        category: 'Event Handler',
        subcategory: "Title",
        options: ["§0Black", "§1Dark Blue", "§2Dark Green", "§3Dark Aqua", "§4Dark Red", "§5Dark Purple", "§6Gold", "§7Gray", "§8Dark Gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§dLight Purple", "§eYellow", "§fWhite"],
    })
    eventTitleColor = 12;

    constructor() {
        this.initialize(this);
    }
}

export default new Settings;
