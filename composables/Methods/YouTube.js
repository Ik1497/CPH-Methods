export default {
  SendYouTubeMessage: {
    title: `Send YouTube Message`,
    description: `Send a message to the YouTube chat.`,
    tags: [`Messages`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `message`
      },
    ]
  }
}
