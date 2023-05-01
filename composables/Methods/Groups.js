export default {
  UserIdInGroup: {
    title: `User id in group`,
    description: `Check if a user is in a group by id.`,
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
  TwitchUserInGroup: {
    method: `UserInGroup`,
    title: `Twitch User in group`,
    description: `Check if a user is in a group.`,
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
