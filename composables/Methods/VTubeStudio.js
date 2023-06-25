export default {
  ////////////
  // Models //
  ////////////

  VTubeStudioLoadModelById: {
    title: `Load model by id`,
    description: `Load a VTube Studio model by its id.`,
    version: `0.2.0`,
    tags: [`Models`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `modelId`,
      },
    ],
  },
  VTubeStudioLoadModelByName: {
    title: `Load model by name`,
    description: `Load a VTube Studio model by its name.`,
    version: `0.2.0`,
    tags: [`Models`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `modelName`,
      },
    ],
  },
  VTubeStudioMoveModel: {
    title: `Move model`,
    description: `Move the current VTube Studio model.`,
    version: `0.2.0`,
    tags: [`Models`],
    return: `bool`,
    fields: [
      {
        datatype: `double`,
        name: `seconds`,
      },
      {
        datatype: `bool`,
        name: `relative`,
      },
      {
        datatype: `double`,
        nullable: true,
        name: `posX`,
        default: `null`,
      },
      {
        datatype: `double`,
        nullable: true,
        name: `posY`,
        default: `null`,
      },
      {
        datatype: `double`,
        nullable: true,
        name: `rotation`,
        default: `null`,
      },
      {
        datatype: `double`,
        nullable: true,
        name: `size`,
        default: `null`,
      },
    ],
  },

  /////////////
  // Hotkeys //
  /////////////

  VTubeStudioTriggerHotkeyById: {
    title: `Trigger hotkey by id`,
    description: `Trigger a VTube Studio hotkey by its id.`,
    version: `0.2.0`,
    tags: [`Hotkeys`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `hotkeyId`,
      },
    ],
  },
  VTubeStudioTriggerHotkeyByName: {
    title: `Trigger hotkey by name`,
    description: `Trigger a VTube Studio hotkey by its name.`,
    version: `0.2.0`,
    tags: [`Hotkeys`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `hotkeyName`,
      },
    ],
  },
}