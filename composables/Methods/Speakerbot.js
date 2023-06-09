export default {
  TtsSpeak: {
    title: `Speak`,
    description: `Send a TTS request to Speaker.bot.`,
    version: `0.1.5`,
    tags: [`TTS`],
    return: `int`,
    fields: [
      {
        datatype: `string`,
        name: `voiceAlias`,
      },
      {
        datatype: `string`,
        name: `message`,
      },
      {
        datatype: `bool`,
        name: `badWordFilter`,
        default: `false`,
      },
    ]
  }
}
