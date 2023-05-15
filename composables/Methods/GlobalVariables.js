export default {
  GetGlobalVar: {
    title: `Get global variable`,
    description: `Get a global variable.`,
    tags: [`General`],
    return: `T`,
    fields: [
      {
        datatype: `string`,
        name: `varName`,
      },
      {
        datatype: `bool`,
        name: `persisted`,
        default: `true`,
      },
    ]
  },
  SetGlobalVar: {
    title: `Set global variable`,
    description: `Set a global variable.`,
    tags: [`General`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `varName`,
      },
      {
        datatype: `object`,
        name: `value`,
      },
      {
        datatype: `bool`,
        name: `persisted`,
        default: `true`,
      },
    ]
  },
  UnsetGlobalVar: {
    title: `Unset global variable`,
    description: `Unset a global variable.`,
    tags: [`General`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `varName`,
      },
      {
        datatype: `bool`,
        name: `persisted`,
        default: `true`,
      },
    ]
  },
  GetTwitchUserVar: {
    title: `Get Twitch user global variable`,
    description: `Get a Twitch user globale variable.`,
    version: `0.1.8`,
    tags: [`Twitch`],
    return: `T`,
    fields: [
      {
        datatype: `string`,
        name: `userName`,
      },
      {
        datatype: `string`,
        name: `varName`,
      },
      {
        datatype: `bool`,
        name: `persisted`,
        default: `true`,
      },
    ]
  },
  SetTwitchUserVar: {
    title: `Set Twitch user global variable`,
    description: `Set a Twitch user global variable.`,
    version: `0.1.8`,
    tags: [`Twitch`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `userName`,
      },
      {
        datatype: `string`,
        name: `varName`,
      },
      {
        datatype: `object`,
        name: `value`,
      },
      {
        datatype: `bool`,
        name: `persisted`,
        default: `true`,
      },
    ]
  },
  UnsetTwitchUserVar: {
    title: `Unset Twitch user global variable`,
    description: `Unset a Twitch user global variable.`,
    version: `0.1.8`,
    tags: [`Twitch`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `userName`,
      },
      {
        datatype: `string`,
        name: `varName`,
      },
      {
        datatype: `bool`,
        name: `persisted`,
        default: `true`,
      },
    ]
  },
  UnsetTwitchUser: {
    title: `Unset Twitch user global variables`,
    description: `Unset a Twitch user's global variables.`,
    version: `0.1.8`,
    tags: [`Twitch`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `userName`,
      },
      {
        datatype: `bool`,
        name: `persisted`,
        default: `true`,
      },
    ]
  },
  GetYouTubeUserVar: {
    title: `Get YouTube user global variable`,
    description: `Get a YouTube user globale variable.`,
    version: `0.1.8`,
    tags: [`YouTube`],
    return: `T`,
    fields: [
      {
        datatype: `string`,
        name: `userName`,
      },
      {
        datatype: `string`,
        name: `varName`,
      },
      {
        datatype: `bool`,
        name: `persisted`,
        default: `true`,
      },
    ]
  },
  SetYouTubeUserVar: {
    title: `Set YouTube user global variable`,
    description: `Set a YouTube user global variable.`,
    version: `0.1.8`,
    tags: [`YouTube`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `userName`,
      },
      {
        datatype: `string`,
        name: `varName`,
      },
      {
        datatype: `object`,
        name: `value`,
      },
      {
        datatype: `bool`,
        name: `persisted`,
        default: `true`,
      },
    ]
  },
  UnsetYouTubeUserVar: {
    title: `Unset YouTube user global variable`,
    description: `Unset a YouTube user global variable.`,
    version: `0.1.8`,
    tags: [`YouTube`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `userName`,
      },
      {
        datatype: `string`,
        name: `varName`,
      },
      {
        datatype: `bool`,
        name: `persisted`,
        default: `true`,
      },
    ]
  },
  UnsetYouTubeUser: {
    title: `Unset YouTube user global variables`,
    description: `Unset a YouTube user's global variables.`,
    version: `0.1.8`,
    tags: [`YouTube`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `userName`,
      },
      {
        datatype: `bool`,
        name: `persisted`,
        default: `true`,
      },
    ]
  },
}
