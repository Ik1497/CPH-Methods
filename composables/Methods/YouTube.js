export default {
  SendYouTubeMessage: {
    title: `Send YouTube Message`,
    description: `Send a message to the YouTube chat.`,
    version: `0.1.8`,
    tags: [`Messages`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `message`,
      },
    ]
  }
}