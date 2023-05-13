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

  ////////////////
  // Cheermotes //
  ////////////////

  GetCheermotes: {
    title: `Get cheermotes`,
    description: `Get all the cheer motes.`,
    tags: [`Cheermotes`],
    return: `List<Cheermote>`,
    returnType: `class`,
    fields: [],
  },

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
        itemName: `Tag`,
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

  /////////////////////
  // Channel Rewards //
  /////////////////////

    /////////////////
    // Get Rewards //
    /////////////////

    TwitchGetRewards: {
      title: `Get rewards`,
      description: `Get a list of all your Twitch rewards.`,
      tags: [`Channel Rewards`, `Get Rewards`],
      return: `List<TwitchReward>`,
      returnType: `class`,
      fields: [],
    },

    //////////////////////
    // Get Reward Usage //
    //////////////////////

    TwitchGetChannelPointsUsedByUserId: {
      title: `Get channel points used by user id`,
      description: `Get the amount of channel points used by a user's id.`,
      tags: [`Channel Rewards`, `Get Reward Usage`],
      return: `long`,
      fields: [
        {
          datatype: `string`,
          name: `userId`,
        },
      ],
    },

    ///////////////////
    // Reward States //
    ///////////////////

    DisableReward: {
      title: `Disable reward`,
      description: `Disable a Twitch reward.`,
      tags: [`Channel Rewards`, `Reward States`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `rewardId`,
        },
      ],
    },
    EnableReward: {
      title: `Enable reward`,
      description: `Enable a Twitch reward.`,
      tags: [`Channel Rewards`, `Reward States`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `rewardId`,
        },
      ],
    },
    PauseReward: {
      title: `Pause reward`,
      description: `Pause a Twitch reward.`,
      tags: [`Channel Rewards`, `Reward States`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `rewardId`,
        },
      ],
    },
    UnPauseReward: {
      title: `Unpause reward`,
      description: `Unpause a Twitch reward.`,
      tags: [`Channel Rewards`, `Reward States`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `rewardId`,
        },
      ],
    },

    /////////////////////////
    // Reward Group States //
    /////////////////////////

    TwitchRewardGroupEnable: {
      title: `Enable reward group`,
      description: `Enable a Twitch reward group.`,
      tags: [`Channel Rewards`, `Reward Group States`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `groupName`,
        },
      ],
    },
    TwitchRewardGroupDisable: {
      title: `Disable reward group`,
      description: `Disable a Twitch reward group.`,
      tags: [`Channel Rewards`, `Reward Group States`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `groupName`,
        },
      ],
    },
    TwitchRewardGroupToggleEnable: {
      title: `Toggle enable reward group`,
      description: `Toggle enable a Twitch reward group.`,
      tags: [`Channel Rewards`, `Reward Group States`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `groupName`,
        },
      ],
    },
    TwitchRewardGroupPause: {
      title: `Pause reward group`,
      description: `Pause a Twitch reward group.`,
      tags: [`Channel Rewards`, `Reward Group States`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `groupName`,
        },
      ],
    },
    TwitchRewardGroupUnPause: {
      title: `Unpause reward group`,
      description: `Unpause a Twitch reward group.`,
      tags: [`Channel Rewards`, `Reward Group States`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `groupName`,
        },
      ],
    },
    TwitchRewardGroupTogglePause: {
      title: `Toggle pause reward group`,
      description: `Toggle pause a Twitch reward group.`,
      tags: [`Channel Rewards`, `Reward Group States`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `groupName`,
        },
      ],
    },

    ////////////////////
    // Update Rewards //
    ////////////////////

    UpdateRewardTitle: {
      title: `Update reward title`,
      description: `Update the title of a Twitch reward.`,
      tags: [`Channel Rewards`, `Update Rewards`],
      return: `bool`,
      fields: [
        {
          datatype: `string`,
          name: `rewardId`,
        },
        {
          datatype: `string`,
          name: `title`,
        },
      ],
    },
    UpdateRewardPrompt: {
      title: `Update reward prompt`,
      description: `Update the prompt of a Twitch reward.`,
      tags: [`Channel Rewards`, `Update Rewards`],
      return: `bool`,
      fields: [
        {
          datatype: `string`,
          name: `rewardId`,
        },
        {
          datatype: `string`,
          name: `prompt`,
        },
      ],
    },
    UpdateRewardCost: {
      title: `Update reward cost`,
      description: `Update the cost of a Twitch reward.`,
      tags: [`Channel Rewards`, `Update Rewards`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `rewardId`,
        },
        {
          datatype: `int`,
          name: `cost`,
        },
        {
          datatype: `bool`,
          name: `additive`,
          default: `null`,
        },
      ],
    },
    UpdateRewardCooldown: {
      title: `Update reward cooldown`,
      description: `Update the cooldown of a Twitch reward.`,
      tags: [`Channel Rewards`, `Update Rewards`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `rewardId`,
        },
        {
          datatype: `int`,
          name: `cooldown`,
        },
        {
          datatype: `bool`,
          name: `additive`,
          default: `null`,
        },
      ],
    },
    UpdateReward: {
      title: `Update reward`,
      description: `Update a Twitch reward.`,
      tags: [`Channel Rewards`, `Update Rewards`],
      return: `bool`,
      fields: [
        {
          datatype: `string`,
          name: `rewardId`,
        },
        {
          datatype: `string`,
          name: `title`,
          default: `null`,
        },
        {
          datatype: `string`,
          name: `prompt`,
          default: `null`,
        },
        {
          datatype: `int`,
          nullable: true,
          name: `cost`,
          default: `null`,
        },
      ],
    },

    ////////////////////
    // Fulfill/Cancel //
    ////////////////////

    TwitchRedemptionFulfill: {
      title: `Redemption fulfill`,
      description: `Fulfill a Twitch reward redemption.`,
      tags: [`Channel Rewards`, `Fulfill/Cancel`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `rewardId`,
        },
        {
          datatype: `string`,
          name: `redemptionId`,
        },
      ],
    },
    TwitchRedemptionCancel: {
      title: `Redemption Cancel`,
      description: `Cancel a Twitch reward redemption.`,
      tags: [`Channel Rewards`, `Fulfill/Cancel`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `rewardId`,
        },
        {
          datatype: `string`,
          name: `redemptionId`,
        },
      ],
    },

    ///////////////////////////
    // Reset Reward Counters //
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
        itemName: `Choice`,
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
        itemName: `Option`,
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

  ///////////
  // Clips //
  ///////////

    ///////////////////
    // Get all clips //
    ///////////////////

    GetAllClips: {
      title: `Get all clips`,
      description: `Get a list of all created clips.`,
      tags: [`Get Clips`, `Get all clips`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [],
    },

    /////////////////////////////
    // Get clips for user name //
    /////////////////////////////

    GetClipsForUserName: {
      method: `GetClipsForUser`,
      title: `Get clips for username`,
      description: `Get a list of all created clips for a username.`,
      tags: [`Get Clips`, `Get clips for username`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [
        {
          datatype: `string`,
          name: `username`,
        },
      ],
    },
    GetClipsForUserNameWithCount: {
      method: `GetClipsForUser`,
      title: `Get clips for username with count`,
      description: `Get a list of all created clips for a username.`,
      tags: [`Get Clips`, `Get clips for username`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [
        {
          datatype: `string`,
          name: `userName`,
        },
        {
          datatype: `int`,
          name: `count`,
        },
      ],
    },
    GetClipsForUserNameWithDateTime: {
      method: `GetClipsForUser`,
      title: `Get clips for username with date time`,
      description: `Get a list of all created clips for a username.`,
      tags: [`Get Clips`, `Get clips for username`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [
        {
          datatype: `string`,
          name: `userName`,
        },
        {
          datatype: `DateTime`,
          name: `start`,
        },
        {
          datatype: `DateTime`,
          name: `end`,
        },
      ],
    },
    GetClipsForUserNameWithDateTimeAndCount: {
      method: `GetClipsForUser`,
      title: `Get clips for username with date time and count`,
      description: `Get a list of all created clips for a username.`,
      tags: [`Get Clips`, `Get clips for username`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [
        {
          datatype: `string`,
          name: `userName`,
        },
        {
          datatype: `DateTime`,
          name: `start`,
        },
        {
          datatype: `DateTime`,
          name: `end`,
        },
        {
          datatype: `int`,
          name: `count`,
        },
      ],
    },
    GetClipsForUserNameWithTimespan: {
      method: `GetClipsForUser`,
      title: `Get clips for username with timespan`,
      description: `Get a list of all created clips for a username.`,
      tags: [`Get Clips`, `Get clips for username`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [
        {
          datatype: `string`,
          name: `userName`,
        },
        {
          datatype: `TimeSpan`,
          name: `duration`,
        },
      ],
    },
    GetClipsForUserNameWithTimespanAndCount: {
      method: `GetClipsForUser`,
      title: `Get clips for username with timespan and count`,
      description: `Get a list of all created clips for a username.`,
      tags: [`Get Clips`, `Get clips for username`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [
        {
          datatype: `string`,
          name: `userName`,
        },
        {
          datatype: `TimeSpan`,
          name: `duration`,
        },
        {
          datatype: `int`,
          name: `count`,
        },
      ],
    },

    ///////////////////////////
    // Get clips for user id //
    ///////////////////////////

    GetClipsForUserId: {
      method: `GetClipsForUser`,
      title: `Get clips for user id`,
      description: `Get a list of all created clips for a user id.`,
      tags: [`Get Clips`, `Get clips for user id`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [
        {
          datatype: `int`,
          name: `userId`,
        },
      ],
    },
    GetClipsForUserIdWithCount: {
      method: `GetClipsForUser`,
      title: `Get clips for user id with count`,
      description: `Get a list of all created clips for a user id.`,
      tags: [`Get Clips`, `Get clips for user id`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [
        {
          datatype: `int`,
          name: `userId`,
        },
        {
          datatype: `int`,
          name: `count`,
        },
      ],
    },
    GetClipsForUserIdWithDateTime: {
      method: `GetClipsForUser`,
      title: `Get clips for user id with date time`,
      description: `Get a list of all created clips for a user id.`,
      tags: [`Get Clips`, `Get clips for user id`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [
        {
          datatype: `int`,
          name: `userId`,
        },
        {
          datatype: `DateTime`,
          name: `start`,
        },
        {
          datatype: `DateTime`,
          name: `end`,
        },
      ],
    },
    GetClipsForUserIdWithDateTimeAndCount: {
      method: `GetClipsForUser`,
      title: `Get clips for user id with date time and count`,
      description: `Get a list of all created clips for a user id.`,
      tags: [`Get Clips`, `Get clips for user id`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [
        {
          datatype: `int`,
          name: `userId`,
        },
        {
          datatype: `DateTime`,
          name: `start`,
        },
        {
          datatype: `DateTime`,
          name: `end`,
        },
        {
          datatype: `int`,
          name: `count`,
        },
      ],
    },
    GetClipsForUserIdWithTimespan: {
      method: `GetClipsForUser`,
      title: `Get clips for user id with timespan`,
      description: `Get a list of all created clips for a user id.`,
      tags: [`Get Clips`, `Get clips for user id`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [
        {
          datatype: `int`,
          name: `userId`,
        },
        {
          datatype: `TimeSpan`,
          name: `duration`,
        },
      ],
    },
    GetClipsForUserIdWithTimespanAndCount: {
      method: `GetClipsForUser`,
      title: `Get clips for user id with timespan and count`,
      description: `Get a list of all created clips for a user id.`,
      tags: [`Get Clips`, `Get clips for user id`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [
        {
          datatype: `int`,
          name: `userId`,
        },
        {
          datatype: `TimeSpan`,
          name: `duration`,
        },
        {
          datatype: `int`,
          name: `count`,
        },
      ],
    },


    ////////////////////////
    // Get clips for game //
    ////////////////////////

    GetClipsForGame: {
      method: `GetClipsForGame`,
      title: `Get clips for game`,
      description: `Get a list of all created clips for a game.`,
      tags: [`Get Clips`, `Get clips for game`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [
        {
          datatype: `int`,
          name: `gameId`,
        },
      ],
    },
    GetClipsForGameWithCount: {
      method: `GetClipsForGame`,
      title: `Get clips for game with count`,
      description: `Get a list of all created clips for a game.`,
      tags: [`Get Clips`, `Get clips for game`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [
        {
          datatype: `int`,
          name: `gameId`,
        },
        {
          datatype: `int`,
          name: `count`,
        },
      ],
    },
    GetClipsForGameWithDateTime: {
      method: `GetClipsForGame`,
      title: `Get clips for game with date time`,
      description: `Get a list of all created clips for a game.`,
      tags: [`Get Clips`, `Get clips for game`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [
        {
          datatype: `int`,
          name: `gameId`,
        },
        {
          datatype: `DateTime`,
          name: `start`,
        },
        {
          datatype: `DateTime`,
          name: `end`,
        },
      ],
    },
    GetClipsForGameWithDateTimeAndCount: {
      method: `GetClipsForGame`,
      title: `Get clips for game with date time and count`,
      description: `Get a list of all created clips for a game.`,
      tags: [`Get Clips`, `Get clips for game`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [
        {
          datatype: `int`,
          name: `gameId`,
        },
        {
          datatype: `DateTime`,
          name: `start`,
        },
        {
          datatype: `DateTime`,
          name: `end`,
        },
        {
          datatype: `int`,
          name: `count`,
        },
      ],
    },
    GetClipsForGameWithTimespan: {
      method: `GetClipsForGame`,
      title: `Get clips for game with timespan`,
      description: `Get a list of all created clips for a game.`,
      tags: [`Get Clips`, `Get clips for game`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [
        {
          datatype: `int`,
          name: `gameId`,
        },
        {
          datatype: `TimeSpan`,
          name: `duration`,
        },
      ],
    },
    GetClipsForGameWithTimespanAndCount: {
      method: `GetClipsForGame`,
      title: `Get clips for game with timespan and count`,
      description: `Get a list of all created clips for a game.`,
      tags: [`Get Clips`, `Get clips for game`],
      return: `List<ClipData>`,
      returnType: `class`,
      fields: [
        {
          datatype: `int`,
          name: `gameId`,
        },
        {
          datatype: `TimeSpan`,
          name: `duration`,
        },
        {
          datatype: `int`,
          name: `count`,
        },
      ],
    },

  /////////////////
  // Create Clip //
  /////////////////

  CreateClip: {
    title: `Create clip`,
    description: `Create a clip.`,
    tags: [`Create Clip`],
    return: `ClipData`,
    returnType: `class`,
    fields: [],
  },

  /////////////
  // Markers //
  /////////////

  CreateStreamMarker: {
    title: `Create stream marker`,
    description: `Create a stream marker at the current poiny in your stream.`,
    tags: [`Markers`],
    return: `StreamMarker`,
    returnType: `class`,
    fields: [
      {
        datatype: `string`,
        name: `description`,
      },
    ],
  },

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
  SetChannelGame: {
    title: `Set channel game`,
    description: `Set the game on your Twitch channel.`,
    tags: [`Stream Information`],
    return: `GameInfo`,
    returnType: `class`,
    fields: [
      {
        datatype: `string`,
        name: `game`,
      },
    ],
  },
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

  //////////////////
  // Announcement //
  //////////////////

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

  //////////////////////
  // Team Information //
  //////////////////////

  GetTeamInfoById: {
    title: `Get team info by id`,
    description: `Get the team info from a user id.`,
    tags: [`Team Information`],
    return: `List<TeamInfo>`,
    returnType: `class`,
    fields: [
      {
        datatype: `string`,
        name: `userId`,
      },
    ],
  },
  GetTeamInfoByLogin: {
    title: `Get team info by login`,
    description: `Get the team info from a user login.`,
    tags: [`Team Information`],
    return: `List<TeamInfo>`,
    returnType: `class`,
    fields: [
      {
        datatype: `string`,
        name: `userLogin`,
      },
    ],
  },

  ///////////////////////
  // OAuth & Client Id //
  ///////////////////////

  TwitchOAuthToken: {
    type: `property`,
    title: `OAuth token`,
    description: `Get the Twitch OAuth token.`,
    tags: [`OAuth & Client Id`],
    return: `string`,
    fields: [],
  },
  TwitchClientId: {
    type: `property`,
    title: `Client id`,
    description: `Get the Twitch client id.`,
    tags: [`OAuth & Client Id`],
    return: `string`,
    fields: [],
  },
}
