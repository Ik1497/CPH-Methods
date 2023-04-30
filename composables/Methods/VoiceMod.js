export default {
  VoiceModSelectVoice: {
    title: `Select Voice`,
    description: `Select your VoiceMod voice.`,
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
    tags: [`Voice`],
    return: `string`,
    fields: []
  },
  VoiceModVoiceChangerOn: {
    title: `Voice changer on`,
    description: `Turn your voice changer on.`,
    tags: [`Voice Changer`],
    return: `bool`,
    fields: []
  },
  VoiceModVoiceChangerOff: {
    title: `Voice changer off`,
    description: `Turn your voice changer off.`,
    tags: [`Voice Changer`],
    return: `bool`,
    fields: []
  },
  VoiceModGetVoiceChangerStatus: {
    title: `Get voice changer status`,
    description: `Get your voice changer status.`,
    tags: [`Voice Changer`],
    return: `bool`,
    fields: []
  },
  VoiceModHearMyVoiceOn: {
    title: `Hear my voice on`,
    description: `Turn hear my voice on.`,
    tags: [`Hear my voice`],
    return: `bool`,
    fields: []
  },
  VoiceModHearMyVoiceOff: {
    title: `Hear my voice off`,
    description: `Turn hear my voice off.`,
    tags: [`Hear my voice`],
    return: `bool`,
    fields: []
  },
  VoiceModGetHearMyselfStatus: {
    title: `Get hear myself status`,
    description: `Get your hear myself status.`,
    tags: [`Hear my voice`],
    return: `bool`,
    fields: []
  },
  VoiceModCensorOn: {
    title: `Censor on`,
    description: `Turn censor on.`,
    tags: [`Censor`],
    return: `void`,
    fields: []
  },
  VoiceModCensorOff: {
    title: `Censor off`,
    description: `Turn censor off.`,
    tags: [`Censor`],
    return: `void`,
    fields: []
  },
}
