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
  VTubeStudioGetModelPosition: {
    title: `Get model position`,
    description: `Get the position of a VTube Studio model.`,
    version: `0.2.0`,
    tags: [`Models`],
    return: `VTSModelPosition`,
    fields: [],
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

  ////////////////
  // Color Tint //
  ////////////////

  VTubeStudioRandomColorTint: {
    title: `Set a random color tint`,
    description: `Set a random color tint in VTube Studio.`,
    version: `0.2.0`,
    tags: [`Color Tint`],
    return: `bool`,
    fields: [],
  },
  VTubeStudioResetAllColorTints: {
    title: `Reset all color tints`,
    description: `Reset all color tints in VTube Studio.`,
    version: `0.2.0`,
    tags: [`Color Tint`],
    return: `bool`,
    fields: [],
  },
  VTubeStudioColorTintAll: {
    title: `Color tint all`,
    description: `Color tint everything in VTube Studio.`,
    version: `0.2.0`,
    tags: [`Color Tint`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `hexColor`,
      },
      {
        datatype: `double`,
        name: `mixWithSceneLighting`,
        default: `0`,
      },
    ],
  },
  VTubeStudioColorTintByNumber: {
    title: `Color tint by number`,
    description: `Color tint something by its number in VTube Studio.`,
    version: `0.2.0`,
    tags: [`Color Tint`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `hexColor`,
      },
      {
        datatype: `double`,
        name: `mixWithSceneLighting`,
      },
      {
        datatype: `List<int>`,
        name: `artMeshNumbers`,
        itemName: `Art Mesh Number`,
      },
    ],
  },
  VTubeStudioColorTintByNames: {
    title: `Color tint by names`,
    description: `Color tint something by names in VTube Studio.`,
    version: `0.2.0`,
    tags: [`Color Tint`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `hexColor`,
      },
      {
        datatype: `double`,
        name: `mixWithSceneLighting`,
      },
      {
        datatype: `List<string>`,
        name: `filterValues`,
        itemName: `Filter Value`,
      },
    ],
  },
  VTubeStudioColorTintByNameContains: {
    title: `Color tint by name contains`,
    description: `Color tint something that contains a name in VTube Studio.`,
    version: `0.2.0`,
    tags: [`Color Tint`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `hexColor`,
      },
      {
        datatype: `double`,
        name: `mixWithSceneLighting`,
      },
      {
        datatype: `List<string>`,
        name: `filterValues`,
        itemName: `Filter Value`,
      },
    ],
  },
  VTubeStudioColorTintByTags: {
    title: `Color tint by tags`,
    description: `Color tint something by tags in VTube Studio.`,
    version: `0.2.0`,
    tags: [`Color Tint`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `hexColor`,
      },
      {
        datatype: `double`,
        name: `mixWithSceneLighting`,
      },
      {
        datatype: `List<string>`,
        name: `filterValues`,
        itemName: `Filter Value`,
      },
    ],
  },
  VTubeStudioColorTintByTagContains: {
    title: `Color tint by tag contains`,
    description: `Color tint something that contains a tag in VTube Studio.`,
    version: `0.2.0`,
    tags: [`Color Tint`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `hexColor`,
      },
      {
        datatype: `double`,
        name: `mixWithSceneLighting`,
      },
      {
        datatype: `List<string>`,
        name: `filterValues`,
        itemName: `Filter Value`,
      },
    ],
  },

  /////////////////
  // Expressions //
  /////////////////

  VTubeStudioActivateExpression: {
    title: `Activate expression`,
    description: `Activate an expression in VTube Studio.`,
    version: `0.2.0`,
    tags: [`Expressions`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `expressionFile`,
      },
    ],
  },
  VTubeStudioDeactivateExpression: {
    title: `Deactivate expression`,
    description: `Deactivate an expression in VTube Studio.`,
    version: `0.2.0`,
    tags: [`Expressions`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `expressionFile`,
      },
    ],
  },

  /////////
  // Raw //
  /////////

  VTubeStudioSendRawRequest: {
    title: `Send raw request`,
    description: `Send a raw request to VTube Studio.`,
    version: `0.2.0`,
    tags: [`Raw`],
    return: `string`,
    fields: [
      {
        datatype: `string`,
        name: `requestType`,
      },
      {
        datatype: `string`,
        name: `data`,
      },
    ],
  },
}