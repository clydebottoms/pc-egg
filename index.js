const { Plugin } = require('powercord/entities');

module.exports = class egg extends Plugin {
  startPlugin() {
    powercord.api.commands.registerCommand({
      command: 'egg',
      description: 'egg',
      usage: '{c}',
      executor: () => this.sendEgg()
    });
  } 



  async sendEgg() {
    return {
      send: true,
      result: "\
       \`\`\`\n\
       \`.---\`\n\
      -/oooooo+-\n\
    \`/oooooooooo+-\n\
   .oooooooooooooo:\n\
  \`oooooooooooooooo:\n\
  +ooooooooooooooooo-\n\
 -oooooooooooooooooo+\n\
 +ooooooooooooooooooo-\n\
 oooooooooooooooooooo:\n\
 oooooooooooooooooooo:\n\
 /ooooooooooooooooooo.\n\
 \`+ooooooooooooooooo:\n\
  \`+ooooooooooooooo:\n\
    -+ooooooooooo/\`\n\
      \`.:////:-.\
\`\`\`"
    };
  }
  
  pluginWillUnload() {
    powercord.api.commands.unregisterCommand('egg');
  }
};
