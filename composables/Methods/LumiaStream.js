export default {
  LumiaSetToDefault: {
    title: `Set to default`,
    description: `Set your lights to default.`,
    tags: [`Lights`],
    return: `void`,
    fields: [],
  },
  LumiaSendCommand: {
    title: `Send command`,
    description: `Send a command to Lumia Stream.`,
    tags: [`Lights`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `command`,
      },
    ],
  },
}
