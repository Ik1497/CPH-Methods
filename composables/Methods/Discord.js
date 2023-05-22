export default {
  DiscordPostTextToWebhook: {
    title: `Post Text To Webhook`,
    description: `Post a basic text message to a Discord webhook.`,
    version: `0.1.14`,
    tags: [`Webhooks`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `webhookUrl`,
      },
      {
        datatype: `string`,
        name: `content`,
      },
      {
        datatype: `string`,
        name: `username`,
        default: `null`,
      },
      {
        datatype: `bool`,
        name: `textToSpeech`,
        default: `false`,
      },
    ],
  },
}