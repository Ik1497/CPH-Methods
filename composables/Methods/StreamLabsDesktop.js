export default {
  ////////////////
  // Connection //
  ////////////////

  SlobsIsConnected: {
    title: `Is connected`,
    description: `See if Streamlabs Desktop is connected.`,
    tags: [`Connection`],
    return: `bool`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsConnect: {
    title: `Connect`,
    description: `Connect Streamlabs Desktop.`,
    tags: [`Connection`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsDisconnect: {
    title: `Disconnect`,
    description: `Disconnect Streamlabs Desktop.`,
    tags: [`Connection`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  
  /////////////////////////////
  // Stream/Recording Status //
  /////////////////////////////
  
  SlobsIsStreaming: {
    title: `Is streaming`,
    description: `Check if Streamlabs Desktop is streaming.`,
    tags: [`Stream/Recording Status`],
    return: `bool`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsStartStreaming: {
    title: `Start streaming`,
    description: `Start Streamlabs Desktop streaming.`,
    tags: [`Stream/Recording Status`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsStopStreaming: {
    title: `Stop streaming`,
    description: `Stop Streamlabs Desktop streaming.`,
    tags: [`Stream/Recording Status`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsIsRecording: {
    title: `Is recording`,
    description: `Check if Streamlabs Desktop is recording.`,
    tags: [`Stream/Recording Status`],
    return: `bool`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsStartRecording: {
    title: `Start recording`,
    description: `Start Streamlabs Desktop recording.`,
    tags: [`Stream/Recording Status`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsStopRecording: {
    title: `Stop recording`,
    description: `Stop Streamlabs Desktop recording.`,
    tags: [`Stream/Recording Status`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsPauseRecording: {
    title: `Pause recording`,
    description: `Pause Streamlabs Desktop recording.`,
    tags: [`Stream/Recording Status`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsResumeRecording: {
    title: `Resume recording`,
    description: `Resume Streamlabs Desktop recording.`,
    tags: [`Stream/Recording Status`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },

  ////////////
  // Scenes //
  ////////////

  SlobsSetScene: {
    title: `Set scene`,
    description: `Set the Streamlabs Desktop scene.`,
    tags: [`Scenes`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `sceneName`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsGetCurrentScene: {
    title: `Get current scene`,
    description: `Get the Streamlabs Desktop scene.`,
    tags: [`Scenes`],
    return: `string`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },

  /////////////
  // Sources //
  /////////////

  SlobsIsSourceVisible: {
    title: `Is source visible`,
    description: `See if a source is visible.`,
    tags: [`Sources`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `source`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsSetSourceVisibility: {
    title: `Set source visibility`,
    description: `Set the visibility for a source.`,
    tags: [`Sources`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `source`,
      },
      {
        datatype: `bool`,
        name: `visible`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsShowSource: {
    title: `Show source`,
    description: `Show a source.`,
    tags: [`Sources`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `source`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsHideSource: {
    title: `Hide source`,
    description: `Hide a source.`,
    tags: [`Sources`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `source`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsHideGroupsSources: {
    title: `Hide group sources`,
    description: `Hide all sources from a group.`,
    tags: [`Sources`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `groupName`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsSetRandomGroupSourceVisible: {
    title: `Set random group source visible`,
    description: `Set a random group source visible.`,
    tags: [`Sources`],
    return: `string`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `groupName`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsGetGroupSources: {
    title: `Get group sources`,
    description: `Get the sources from a group.`,
    tags: [`Sources`],
    return: `List<string>`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `groupName`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },

  //////////////////////////
  // Browser/Text Sources //
  //////////////////////////

  SlobsSetBrowserSource: {
    title: `Set Browser Source`,
    description: `Set the URL for a browser source.`,
    tags: [`Browser/Text Sources`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `source`,
      },
      {
        datatype: `string`,
        name: `url`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsSetGdiText: {
    title: `Set GDI text`,
    description: `Set the text for a GDI text source.`,
    tags: [`Browser/Text Sources`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `source`,
      },
      {
        datatype: `string`,
        name: `text`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },

  /////////////
  // Filters //
  /////////////
  
  SlobsIsSceneFilterEnabled: {
    method: `SlobsIsFilterEnabled`,
    title: `Is scene filter enabled`,
    description: `Check if the scene filter is enabled.`,
    tags: [`Filters`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `filterName`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsIsSourceFilterEnabled: {
    method: `SlobsIsFilterEnabled`,
    title: `Is source filter enabled`,
    description: `Check if the source filter is enabled.`,
    tags: [`Filters`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `source`,
      },
      {
        datatype: `string`,
        name: `filterName`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsSetSceneFilterState: {
    method: `SlobsSetFilterState`,
    title: `Set scene filter state`,
    description: `Set the filter state on a scene.`,
    tags: [`Filters`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `filterName`,
      },
      {
        datatype: `int`,
        name: `state`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsSetSourceFilterState: {
    method: `SlobsSetFilterState`,
    title: `Set source filter state`,
    description: `Set the filter state on a source.`,
    tags: [`Filters`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `source`,
      },
      {
        datatype: `string`,
        name: `filterName`,
      },
      {
        datatype: `int`,
        name: `state`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsShowSceneFilter: {
    method: `SlobsShowFilter`,
    title: `Show scene filter`,
    description: `Show a scene filter.`,
    tags: [`Filters`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `filterName`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsShowSourceFilter: {
    method: `SlobsShowFilter`,
    title: `Show source filter`,
    description: `Show a source filter.`,
    tags: [`Filters`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `source`,
      },
      {
        datatype: `string`,
        name: `filterName`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsHideSceneFilter: {
    method: `SlobsHideFilter`,
    title: `Hide scene filter`,
    description: `Hide a scene filter.`,
    tags: [`Filters`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `filterName`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsHideSourceFilter: {
    method: `SlobsHideFilter`,
    title: `Hide source filter`,
    description: `Hide a source filter.`,
    tags: [`Filters`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `source`,
      },
      {
        datatype: `string`,
        name: `filterName`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsToggleSceneFilter: {
    method: `SlobsToggleFilter`,
    title: `Toggle scene filter`,
    description: `Toggle a scene filter.`,
    tags: [`Filters`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `filterName`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsToggleSourceFilter: {
    method: `SlobsToggleFilter`,
    title: `Toggle source filter`,
    description: `Toggle a source filter.`,
    tags: [`Filters`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `source`,
      },
      {
        datatype: `string`,
        name: `filterName`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsSetRandomSceneFilterState: {
    method: `SlobsSetRandomFilterState`,
    title: `Set random scene filter state`,
    description: `Set random scene filter state.`,
    tags: [`Filters`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `int`,
        name: `state`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsSetRandomSourceFilterState: {
    method: `SlobsSetRandomFilterState`,
    title: `Toggle source filter`,
    description: `Toggle a source filter.`,
    tags: [`Filters`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `source`,
      },
      {
        datatype: `int`,
        name: `state`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },

  //////////
  // Mute //
  //////////

  SlobsSetSourceMuteState: {
    title: `Set source mute state`,
    description: `Set the mute state on a source.`,
    tags: [`Mute`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `source`,
      },
      {
        datatype: `int`,
        name: `state`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsSourceMute: {
    title: `Mute source`,
    description: `Mute a source.`,
    tags: [`Mute`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `source`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsSourceUnMute: {
    title: `Unmute source`,
    description: `Unmute a source.`,
    tags: [`Mute`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `source`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  SlobsSourceMuteToggle: {
    title: `Mute toggle source`,
    description: `Mute toggle a source.`,
    tags: [`Mute`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `string`,
        name: `source`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
}
