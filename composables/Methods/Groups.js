export default {
  UserIdInGroup: {
    title: `User id in group`,
    description: `Check if a user is in a group by id.`,
    version: `0.1.17`,
    tags: [`User in group`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `userId`,
      },
      {
        datatype: `string`,
        name: `groupName`,
      },
    ],
  },
  ClearUsersFromGroup: {
    title: `Clear users from group`,
    description: `Clear all the users from a group.`,
    version: `0.1.17`,
    tags: [`Cleaer users from group`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `groupName`,
      },
    ],
  },
  TwitchUserInGroup: {
    method: `UserInGroup`,
    title: `Twitch User in group`,
    description: `Check if a user is in a group.`,
    version: `0.0.58`,
    tags: [`User in group`],
    return: `bool`,
    fields: [
      {
        datatype: `int`,
        name: `userId`,
      },
      {
        datatype: `string`,
        name: `groupName`,
      },
    ],
  },
  YouTubeUserInGroup: {
    method: `UserInGroup`,
    title: `YouTube User in group`,
    description: `Check if a user is in a group.`,
    version: `0.0.58`,
    tags: [`User in group`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `userId`,
      },
      {
        datatype: `string`,
        name: `groupName`,
      },
    ],
  },
  AddUserIdToGroup: {
    title: `Add user id to group`,
    description: `Add a user to a group by id.`,
    version: `0.1.17`,
    tags: [`Add user to group`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `userId`,
      },
      {
        datatype: `string`,
        name: `groupName`,
      },
    ],
  },
  TwitchAddUserToGroup: {
    method: `AddUserToGroup`,
    title: `Twitch Add user to group`,
    description: `Add a user to a group.`,
    version: `0.0.58`,
    tags: [`Add user to group`],
    return: `bool`,
    fields: [
      {
        datatype: `int`,
        name: `userId`,
      },
      {
        datatype: `string`,
        name: `groupName`,
      },
    ],
  },
  YouTubeAddUserToGroup: {
    method: `AddUserToGroup`,
    title: `YouTube Add user to group`,
    description: `Add a user to a group.`,
    version: `0.0.58`,
    tags: [`Add user to group`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `userId`,
      },
      {
        datatype: `string`,
        name: `groupName`,
      },
    ],
  },
  RemoveUserIdFromGroup: {
    title: `Remove user id from group`,
    description: `Add a user to a group by id.`,
    version: `0.1.17`,
    tags: [`Remove user from group`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `userId`,
      },
      {
        datatype: `string`,
        name: `groupName`,
      },
    ],
  },
  TwitchRemoveUserFromGroup: {
    method: `RemoveUserFromGroup`,
    title: `Twitch remove user from group`,
    description: `Remove a user from a group.`,
    version: `0.0.58`,
    tags: [`Remove user from group`],
    return: `bool`,
    fields: [
      {
        datatype: `int`,
        name: `userId`,
      },
      {
        datatype: `string`,
        name: `groupName`,
      },
    ],
  },
  YouTubeRemoveUserFromGroup: {
    method: `RemoveUserFromGroup`,
    title: `YouTube remove user from group`,
    description: `Remove a user from a group.`,
    version: `0.0.58`,
    tags: [`Remove user from group`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `userId`,
      },
      {
        datatype: `string`,
        name: `groupName`,
      },
    ],
  },
}
