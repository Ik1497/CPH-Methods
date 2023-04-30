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
  UserInGroup: {
    title: `User in group`,
    description: `Check if a user is in a group.`,
    tags: [`User in group`],
    return: `bool`,
    fields: [
      {
        datatype: [`string`, `int`],
        name: [`userId`, `userId`],
      },
      {
        datatype: `string`,
        name: `groupName`,
      },
    ],
  },
}
