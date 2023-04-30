export default {
  DiscordPostTextToWebhook: {
    title: `Post Text To Webhook`,
    description: `Post basic text to a Discord webhook.`,
    tags: [`Webhooks`],
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
      }
    ],
  }
}
