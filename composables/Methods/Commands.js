export default {
  /////////////////////////////
  // Enable/Disable Commands //
  /////////////////////////////

  EnableCommand: {
    title: `Enable command`,
    description: `Enable a command.`,
    tags: [`Enable/Disable Commands`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `id`,
      },
    ],
  },
  DisableCommand: {
    title: `Disable command`,
    description: `Disable a command.`,
    tags: [`Enable/Disable Commands`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `id`,
      },
    ],
  },

  ////////////////////////////
  // Set Commands Cooldowns //
  ////////////////////////////
  
  CommandSetGlobalCooldownDuration: {
    title: `Set global cooldown duration`,
    description: `Set the global cooldown duration on a command.`,
    tags: [`Set Commands Cooldowns`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `id`,
      },
      {
        datatype: `int`,
        name: `seconds`,
      },
    ],
  },
  CommandSetUserCooldownDuration: {
    title: `Set user cooldown duration`,
    description: `Set the user cooldown duration on a command.`,
    tags: [`Set Commands Cooldowns`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `id`,
      },
      {
        datatype: `int`,
        name: `seconds`,
      },
    ],
  },

  ///////////////////////////////
  // Add to Commands Cooldowns //
  ///////////////////////////////
  
  CommandAddToGlobalCooldown: {
    title: `Add to global cooldown`,
    description: `Add to the global command cooldown.`,
    tags: [`Add to Commands Cooldowns`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `id`,
      },
      {
        datatype: `int`,
        name: `seconds`,
      },
    ]
  },
  CommandAddToUserCooldown: {
    title: `Add to user cooldown`,
    description: `Add to the command user cooldown.`,
    tags: [`Add to Commands Cooldowns`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `id`,
      },
      {
        datatype: `string`,
        name: `userId`,
      },
      {
        datatype: `int`,
        name: `seconds`,
      },
    ]
  },
  CommandAddToAllUserCooldowns: {
    title: `Add to all user cooldowns`,
    description: `Add to all command user cooldowns.`,
    tags: [`Add to Commands Cooldowns`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `id`,
      },
      {
        datatype: `int`,
        name: `seconds`,
      },
    ]
  },

  /////////////////////////////
  // Reset Command Cooldowns //
  /////////////////////////////
  
  CommandResetGlobalCooldown: {
    title: `Reset global cooldown`,
    description: `Reset the command global cooldown.`,
    tags: [`Reset Command Cooldowns`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `id`,
      },
    ]
  },
  CommandResetUserCooldown: {
    title: `Reset user cooldown`,
    description: `Reset the command user cooldown.`,
    tags: [`Reset Command Cooldowns`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `id`,
      },
      {
        datatype: `string`,
        name: `userId`,
      },
    ]
  },
  CommandResetAllUserCooldowns: {
    title: `Reset all user cooldowns`,
    description: `Reset all the command user cooldowns.`,
    tags: [`Reset Command Cooldowns`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `id`,
      },
    ]
  },

  //////////////////////////////
  // Remove Command Cooldowns //
  //////////////////////////////

  CommandRemoveGlobalCooldown: {
    title: `Remove global cooldown`,
    description: `Remove the command global cooldown.`,
    tags: [`Remove Command Cooldowns`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `id`,
      },
    ]
  },
  CommandRemoveUserCooldown: {
    title: `Remove user cooldown`,
    description: `Remove the command user cooldown.`,
    tags: [`Remove Command Cooldowns`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `id`,
      },
      {
        datatype: `string`,
        name: `userId`,
      },
    ]
  },
  CommandRemoveAllUserCooldowns: {
    title: `Remove all user cooldowns`,
    description: `Remove all the command user cooldowns.`,
    tags: [`Remove Command Cooldowns`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `id`,
      },
    ]
  },
}
