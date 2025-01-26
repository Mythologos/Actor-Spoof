# Actor-Spoof

This is a plugin for the Foundry Virtual Tabletop (Foundry VTT) platform. Its main function is to permit users to type under any name as they please, including those which do not currently exist as an instance of Foundry's `Actor` class. As a GM-only function, this permits a GM to come up with and use characters on-the-fly, without having to create a corresponding `Actor` or provide an alias for an existing character.

## Usage

This plugin can be used through the `/as` (being inspired by Roll20's command of the same name) or `/spoof` commands. These commands take the following overall form (using `/as` as a stand-in for either alias):

```
/as [name] [message]
```

This command expects two arguments. The first, *name*, corresponds to the character whose actor should be spoofed (*i.e.*, the speaker of the spoofed dialogue). The second, *message*, is the text spoken or related to the spoofed actor. Specifically:
- *name* can take one of two forms. If the name does not include spaces, then *name* is the first space-delimited word after the `/as` command. However, if a name with spaces is desired, then quotation marks should be used around all words in the name.
- *message* is composed of all text following *name*; some text must be included for a valid application of the command.

Here is an example of a valid use of this command:
```
/as Storyteller "It was a dark and stormy night..."
```

Here is another use which includes a multi-word name:
```
/as "Disgruntled Knight" "They've let *what* into the castle?!"
```

## Contributing

If you find any bugs with this library or have any feature suggestions, please feel free to post a GitHub issue on the subject! The creator of this project is creating this plugin for fun; as a result, fixes and updates may occur based on urgency and interest.
