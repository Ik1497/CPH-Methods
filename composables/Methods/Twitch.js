export default {
  /////////////
  // General //
  /////////////

  TwitchSubscriberOnly: {
    title: `Subscriber only`,
    description: `Change your Twitch chat to subscriber only.`,
    tags: [`General`],
    return: `void`,
    fields: [
      {
        datatype: `bool`,
        name: `enabled`,
        default: `true`,
      },
    ],
  },
  TwitchEmoteOnly: {
    title: `Emote only`,
    description: `Change your Twitch chat to emote only.`,
    tags: [`General`],
    return: `void`,
    fields: [
      {
        datatype: `bool`,
        name: `enabled`,
        default: `true`,
      },
    ],
  },
  TwitchSlowMode: {
    title: `Slow mode`,
    description: `Change your Twitch chat to slow mode.`,
    tags: [`General`],
    return: `void`,
    fields: [
      {
        datatype: `bool`,
        name: `enabled`,
        default: `true`,
      },
      {
        datatype: `int`,
        name: `duration`,
        default: `0`,
      },
    ],
  },
  TwitchFollowMode: {
    title: `Follow mode`,
    description: `Change your Twitch chat to Follow mode.`,
    tags: [`General`],
    return: `void`,
    fields: [
      {
        datatype: `bool`,
        name: `enabled`,
        default: `true`,
      },
      {
        datatype: `int`,
        name: `duration`,
        default: `0`,
      },
    ],
  },

  //////////////////////
  // User Information //
  //////////////////////

  TwitchIsUserSubscribed: {
    title: `Is user subscribed`,
    description: `Check if a Twitch user is subscribed.`,
    tags: [`User Information`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `userId`,
      },
      {
        datatype: `string`,
        name: `tier`,
        out: true,
      },
    ],
  },

  //////////////////////
  // TODO: Cheermotes //
  //////////////////////

  /////////////
  // Whisper //
  /////////////

  SendWhisper: {
    title: `Send whisper`,
    description: `Send a whisper.`,
    tags: [`Whisper`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `userName`,
      },
      {
        datatype: `string`,
        name: `message`,
      },
      {
        datatype: `bool`,
        name: `bot`,
        default: `true`,
      },
    ],
  },

  ///////////////
  // Moderator //
  ///////////////

  TwitchAddModerator: {
    title: `Add moderator`,
    description: `Add a moderator to your channel.`,
    tags: [`Moderator`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `userName`,
      },
    ],
  },
  TwitchRemoveModerator: {
    title: `Remove moderator`,
    description: `Remove a moderator from your channel.`,
    tags: [`Moderator`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `userName`,
      },
    ],
  },

  /////////
  // Vip //
  /////////

  
  TwitchAddVip: {
    title: `Add vip`,
    description: `Add a vip to your channel.`,
    tags: [`Vip`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `userName`,
      },
    ],
  },
  TwitchRemoveVip: {
    title: `Remove vip`,
    description: `Remove a vip from your channel.`,
    tags: [`Vip`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `userName`,
      },
    ],
  },

  //////////////
  // Messages //
  //////////////

  SendMessage: {
    title: `Send message`,
    description: `Send a message to your channel.`,
    tags: [`Messages`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `message`,
      },
      {
        datatype: `bool`,
        name: `bot`,
        default: `true`,
      },
    ],
  },
  SendAction: {
    title: `Send action`,
    description: `Send an action to your channel. This has the same effect as using /me.`,
    tags: [`Messages`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `action`,
      },
      {
        datatype: `bool`,
        name: `bot`,
        default: `true`,
      },
    ],
  },
  TwitchClearChatMessages: {
    title: `Clear chat messages`,
    description: `Clear the chat messages from your channel.`,
    tags: [`Messages`],
    return: `bool`,
    fields: [
      {
        datatype: `bool`,
        name: `bot`,
        default: `true`,
      },
    ],
  },
  TwitchDeleteChatMessage: {
    title: `Delete chat message`,
    description: `Delete a chat message from your channel.`,
    tags: [`Messages`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `messageId`,
      },
      {
        datatype: `bool`,
        name: `bot`,
        default: `true`,
      },
    ],
  },

  //////////////////
  // Channel Tags //
  //////////////////
  
  TwitchClearChannelTags: {
    title: `Clear channel tags`,
    description: `Clear all the channel tags from your channel.`,
    tags: [`Channel Tags`],
    return: `bool`,
    fields: [],
  },
  TwitchSetChannelTags: {
    title: `Set channel tags`,
    description: `Set new channel tags on your channel.`,
    tags: [`Channel Tags`],
    return: `bool`,
    fields: [
      {
        datatype: `List<string>`,
        name: `tags`,
      },
    ],
  },
  TwitchAddChannelTag: {
    title: `Add channel tag`,
    description: `Add a new channel tag on your channel.`,
    tags: [`Channel Tags`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `tag`,
      },
    ],
  },
  TwitchRemoveChannelTag: {
    title: `Remove channel tag`,
    description: `Remove a new channel tag from your channel.`,
    tags: [`Channel Tags`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `tag`,
      },
    ],
  },

  //////////////
  // Shoutout //
  //////////////

  TwitchSendShoutoutById: {
    title: `Send shoutout by id`,
    description: `Send a shoutout by id.`,
    tags: [`Shoutout`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `userId`,
      },
    ],
  },
  TwitchSendShoutoutByLogin: {
    title: `Send shoutout by login`,
    description: `Send a shoutout by login.`,
    tags: [`Shoutout`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `userLogin`,
      },
    ],
  },

  /////////////////////
  // Timeouts / Bans //
  /////////////////////

  TwitchBanUser: {
    title: `Ban user`,
    description: `Ban a twitch user from your channel.`,
    tags: [`Timeouts / Bans`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `userName`,
      },
      {
        datatype: `string`,
        name: `reason`,
        default: `null`,
      },
      {
        datatype: `bool`,
        name: `bot`,
        default: `false`,
      },
    ],
  },
  TwitchUnbanUser: {
    title: `Unban user`,
    description: `Unban a twitch user from your channel.`,
    tags: [`Timeouts / Bans`],
    return: `bool`,
    information: `This will unban and untimeout users`,
    fields: [
      {
        datatype: `string`,
        name: `userName`,
      },
      {
        datatype: `bool`,
        name: `bot`,
        default: `false`,
      },
    ],
  },
  TwitchTimeoutUser: {
    title: `Timeout user`,
    description: `Timeout a twitch user from your channel.`,
    tags: [`Timeouts / Bans`],
    return: `bool`,
    information: `A duration of 0 will result in a ban`,
    fields: [
      {
        datatype: `string`,
        name: `username`,
      },
      {
        datatype: `int`,
        name: `duration`,
      },
      {
        datatype: `string`,
        name: `reason`,
        default: `null`,
      },
      {
        datatype: `bool`,
        name: `bot`,
        default: `false`,
      },
    ],
  },

  ///////////////////////////
  // TODO: Channel Rewards //
  ///////////////////////////

  ///////////
  // Polls //
  ///////////

  TwitchPollCreate: {
    title: `Poll create`,
    description: `Create a Twitch poll on your channel.`,
    tags: [`Polls`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `title`,
      },
      {
        datatype: `List<string>`,
        name: `choices`,
      },
      {
        datatype: `int`,
        name: `duration`,
      },
      {
        datatype: `int`,
        name: `channelPointsPerVote`,
        default: `0`,
      },
    ],
  },
  TwitchPollTerminate: {
    title: `Poll terminate`,
    description: `Terminate a Twitch poll on your channel.`,
    tags: [`Polls`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `pollId`,
      },
    ],
  },
  TwitchPollArchive: {
    title: `Poll archive`,
    description: `Archive a Twitch poll on your channel.`,
    tags: [`Polls`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `pollId`,
      },
    ],
  },

  /////////////////
  // Predictions //
  /////////////////

  TwitchPredictionCreate: {
    title: `Prediction create`,
    description: `Create a Twitch prediction on your channel.`,
    tags: [`Predictions`],
    return: `string`,
    fields: [
      {
        datatype: `string`,
        name: `title`,
      },
      {
        datatype: `List<string>`,
        name: `options`,
      },
      {
        datatype: `int`,
        name: `duration`,
      },
    ],
  },
  TwitchPredictionCancel: {
    title: `Prediction cancel`,
    description: `Cancel a Twitch prediction on your channel.`,
    tags: [`Predictions`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `predictionId`,
      },
    ],
  },
  TwitchPredictionLock: {
    title: `Prediction lock`,
    description: `Lock a Twitch prediction on your channel.`,
    tags: [`Predictions`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `predictionId`,
      },
    ],
  },
  TwitchPredictionResolve: {
    title: `Prediction resolve`,
    description: `Resolve a Twitch prediction on your channel.`,
    tags: [`Predictions`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `predictionId`,
      },
      {
        datatype: `string`,
        name: `winningId`,
      },
    ],
  },

  //////////
  // Bits //
  //////////

  TwitchGetBitsDonatedByUserId: {
    title: `Get bits donated by user id`,
    description: `Get the total amount of bits donated by a user's id.`,
    tags: [`Bits`],
    return: `long`,
    fields: [
      {
        datatype: `string`,
        name: `userId`,
      },
    ],
  },

  /////////////////
  // TODO: Clips //
  /////////////////

  ///////////////////
  // TODO: Markers //
  ///////////////////

  ////////////////////
  // Run Commercial //
  ////////////////////

  TwitchRunCommercial: {
    title: `Run commercial`,
    description: `Run a Twitch commercial on your channel.`,
    tags: [`Run Commercial`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `duration`,
      },
    ],
  },

  ////////////////////////
  // Stream Information //
  ////////////////////////

  SetChannelTitle: {
    title: `Set channel title`,
    description: `Set the title on your Twitch channel.`,
    tags: [`Stream Information`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `title`,
      },
    ],
  },

  /******************/
  /* TODO: 1 method */
  /******************/

  SetChannelGameById: {
    title: `Set channel game id`,
    description: `Set the game by id on your Twitch channel.`,
    tags: [`Stream Information`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `gameId`,
      },
    ],
  },

  ///////////
  // Raids //
  ///////////

  TwitchStartRaidById: {
    title: `Start raid by id`,
    description: `Start a raid by a user id.`,
    tags: [`Raids`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `userId`,
      },
    ],
  },
  TwitchStartRaidByName: {
    title: `Start raid by name`,
    description: `Start a raid by a user name.`,
    tags: [`Raids`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `userName`,
      },
    ],
  },
  TwitchCancelRaid: {
    title: `Cancel raid`,
    description: `Cancel the pending Twitch raid.`,
    tags: [`Raids`],
    return: `bool`,
    fields: [],
  },

  ////////////////////////
  // TODO: Announcement //
  ////////////////////////

  TwitchAnnounce: {
    title: `Announce`,
    description: `Send an announcement to your Twitch chat.`,
    tags: [`Announcement`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `message`,
      },
      {
        datatype: `bool`,
        name: `bot`,
        default: `false`,
      },
      {
        datatype: `string`,
        name: `color`,
        default: `null`,
        suggestedItems: [
          `blue`,
          `orange`,
          `green`,
          `purple`,
          `null`
        ]
      },
    ],
  },

  ////////////////////////////
  // TODO: Team Information //
  ////////////////////////////

  /////////////////////////////
  // TODO: OAuth & Client Id //
  /////////////////////////////
}
