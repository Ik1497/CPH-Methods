export default {
  return {
    /////////////
    // General //
    /////////////

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

    ////////////
    // Twitch //
    ////////////

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
    SetTwitchUserVarById: {
      title: `Set Twitch user global variable`,
      description: `Set a Twitch user's global variable.`,
      version: `0.2.0`,
      tags: [`Twitch`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `userId`,
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
    SetTwitchUsersVarById: {
      title: `Set Twitch users global variable`,
      description: `Set the global variables for a list of users.`,
      version: `0.2.0`,
      tags: [`Twitch`],
      return: `void`,
      fields: [
        {
          datatype: `List<string>`,
          name: `userIds`,
          itemName: `User Id`,
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
    UnsetTwitchUserVarById: {
      title: `Unset Twitch user var by id`,
      description: `Unset a global variable from Twitch user by its id.`,
      version: `0.2.0`,
      tags: [`Twitch`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `userId`,
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
    UnsetTwitchUserById: {
      title: `Unset Twitch user by id`,
      description: `Unset all global variables a from Twitch user by its id.`,
      version: `0.2.0`,
      tags: [`Twitch`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `userId`,
        },
        {
          datatype: `bool`,
          name: `persisted`,
          default: `true`,
        },
      ]
    },
    GetTwitchUserVarById: {
      title: `Get Twitch user var by id`,
      description: `Get a global variable from a Twitch user by its id.`,
      version: `0.2.0`,
      tags: [`Twitch`],
      return: `T`,
      fields: [
        {
          datatype: `string`,
          name: `userId`,
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
    GetTwitchUsersVar: {
      title: `Get Twitch users var`,
      description: `Get all global variable values from a var name.`,
      version: `0.2.0`,
      tags: [`Twitch`],
      return: `List<UserVariableValue<T>>`,
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

    /////////////
    // YouTube //
    /////////////

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
    SetYouTubeUserVarById: {
      title: `Set YouTube user global variable`,
      description: `Set a YouTube user's global variable.`,
      version: `0.2.0`,
      tags: [`YouTube`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `userId`,
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
    SetYouTubeUsersVarById: {
      title: `Set YouTube users global variable`,
      description: `Set the global variables for a list of users.`,
      version: `0.2.0`,
      tags: [`YouTube`],
      return: `void`,
      fields: [
        {
          datatype: `List<string>`,
          name: `userIds`,
          itemName: `User Id`,
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
    UnsetYouTubeUserVarById: {
      title: `Unset YouTube user var by id`,
      description: `Unset a global variable from YouTube user by its id.`,
      version: `0.2.0`,
      tags: [`YouTube`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `userId`,
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
    UnsetYouTubeUserById: {
      title: `Unset YouTube user by id`,
      description: `Unset all global variables a from YouTube user by its id.`,
      version: `0.2.0`,
      tags: [`YouTube`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `userId`,
        },
        {
          datatype: `bool`,
          name: `persisted`,
          default: `true`,
        },
      ]
    },
    GetYouTubeUserVarById: {
      title: `Get YouTube user var by id`,
      description: `Get a global variable from a YouTube user by its id.`,
      version: `0.2.0`,
      tags: [`YouTube`],
      return: `T`,
      fields: [
        {
          datatype: `string`,
          name: `userId`,
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
    GetYouTubeUsersVar: {
      title: `Get YouTube users var`,
      description: `Get all global variable values from a var name.`,
      version: `0.2.0`,
      tags: [`YouTube`],
      return: `List<UserVariableValue<T>>`,
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
  }
}