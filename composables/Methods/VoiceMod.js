export default {
  VoiceModSelectVoice: {
    title: `Select Voice`,
    description: `Select your VoiceMod voice.`,
    version: `0.1.8`,
    tags: [`Voice`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `voiceId`
      },
    ]
  },
  VoiceModGetCurrentVoice: {
    title: `Get current voice`,
    description: `Get your current voice.`,
    version: `0.1.8`,
    tags: [`Voice`],
    return: `string`,
    fields: []
  },
  VoiceModVoiceChangerOn: {
    title: `Voice changer on`,
    description: `Turn your voice changer on.`,
    version: `0.1.8`,
    tags: [`Voice Changer`],
    return: `bool`,
    fields: []
  },
  VoiceModVoiceChangerOff: {
    title: `Voice changer off`,
    description: `Turn your voice changer off.`,
    version: `0.1.8`,
    tags: [`Voice Changer`],
    return: `bool`,
    fields: []
  },
  VoiceModGetVoiceChangerStatus: {
    title: `Get voice changer status`,
    description: `Get your voice changer status.`,
    version: `0.1.8`,
    tags: [`Voice Changer`],
    return: `bool`,
    fields: []
  },
  VoiceModHearMyVoiceOn: {
    title: `Hear my voice on`,
    description: `Turn hear my voice on.`,
    version: `0.1.8`,
    tags: [`Hear my voice`],
    return: `bool`,
    fields: []
  },
  VoiceModHearMyVoiceOff: {
    title: `Hear my voice off`,
    description: `Turn hear my voice off.`,
    version: `0.1.8`,
    tags: [`Hear my voice`],
    return: `bool`,
    fields: []
  },
  VoiceModGetHearMyselfStatus: {
    title: `Get hear myself status`,
    description: `Get your hear myself status.`,
    version: `0.1.8`,
    tags: [`Hear my voice`],
    return: `bool`,
    fields: []
  },
  VoiceModCensorOn: {
    title: `Censor on`,
    description: `Turn censor on.`,
    version: `0.1.8`,
    tags: [`Censor`],
    return: `void`,
    fields: []
  },
  VoiceModCensorOff: {
    title: `Censor off`,
    description: `Turn censor off.`,
    version: `0.1.8`,
    tags: [`Censor`],
    return: `void`,
    fields: []
  },
}
