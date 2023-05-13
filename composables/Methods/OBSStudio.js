export default {
  ////////////////
  // Connection //
  ////////////////

  ObsIsConnected: {
    title: `Is connected`,
    description: `Check if OBS Studio is connected.`,
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
  ObsConnect: {
    title: `Connect`,
    description: `Connect OBS Studio.`,
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
  ObsDisconnect: {
    title: `Disconnect`,
    description: `Disconnect OBS Studio.`,
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
  ObsGetConnectionByName: {
    title: `Get connection by name`,
    description: `Get an OBS Studio connection by name.`,
    tags: [`Connection`],
    return: `int`,
    fields: [
      {
        datatype: `string`,
        name: `name`,
      },
    ],
  },

  ////////////
  // Stream //
  ////////////

  ObsIsStreaming: {
    title: `Is streaming`,
    description: `Check if OBS Studio is streaming.`,
    tags: [`Stream`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  ObsStopStreaming: {
    title: `Stop streaming`,
    description: `Stop streaming with OBS Studio.`,
    tags: [`Stream`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },

  ///////////////
  // Recording //
  ///////////////

  ObsIsRecording: {
    title: `Is recording`,
    description: `Check if OBS Studio is recording.`,
    tags: [`Recording`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  ObsStartRecording: {
    title: `Start recording`,
    description: `Start recording with OBS Studio.`,
    tags: [`Recording`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  ObsStopRecording: {
    title: `Stop recording`,
    description: `Stop recording with OBS Studio.`,
    tags: [`Recording`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  ObsPauseRecording: {
    title: `Pause recording`,
    description: `Pause recording with OBS Studio.`,
    tags: [`Recording`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  ObsResumeRecording: {
    title: `Resume recording`,
    description: `Resume recording with OBS Studio.`,
    tags: [`Recording`],
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

  ObsSetScene: {
    title: `Set scene`,
    description: `Set your OBS Studio scene.`,
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
  ObsGetCurrentScene: {
    title: `Get current scene`,
    description: `Get your current OBS Studio scene.`,
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

  ObsSetSourceVisibility: {
    title: `Set source visibility`,
    description: `Set the visibility on an OBS Studio source.`,
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
  ObsHideSource: {
    title: `Hide source`,
    description: `Hide an OBS Studio source.`,
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
  ObsShowSource: {
    title: `Show source`,
    description: `Show an OBS Studio source.`,
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
  ObsGetSceneItemProperties: {
    title: `Get scene item properties`,
    description: `Get the properties of an OBS Studio scene item.`,
    tags: [`Sources`],
    return: `string`,
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
  ObsGetGroupSources: {
    title: `Get group sources`,
    description: `Get the sources of an OBS Studio group.`,
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
  ObsIsSourceVisible: {
    title: `Is source visible`,
    description: `Check if your OBS Studio source is visible.`,
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
  ObsSetRandomGroupSourceVisible: {
    title: `Set random group source visible`,
    description: `Set a random OBS Studio group source visible.`,
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
  ObsHideGroupsSources: {
    title: `Hide groups sources`,
    description: `Hide all OBS Studio group sources.`,
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

  /////////////////////
  // Browser Sources //
  /////////////////////

  ObsSetBrowserSource: {
    title: `Set browser source`,
    description: `Set an OBS Studio browser source URL.`,
    tags: [`Browser Sources`],
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

  ///////////////////////
  // GDI+ Text Sources //
  ///////////////////////

  ObsSetGdiText: {
    title: `Set GDI+ text`,
    description: `Set an OBS Studio GDI+ text.`,
    tags: [`GDI+ Text Sources`],
    return: `void`,
    information: `Use \`\\n\` for a new line e.g. line 1\\nline 2`,
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

  ObsIsSceneFilterEnabled: {
    method: `ObsIsFilterEnabled`,
    title: `Is scene filter enabled`,
    description: `Check if an OBS Studio scene filter is enabled.`,
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
  ObsIsSourceFilterEnabled: {
    method: `ObsIsFilterEnabled`,
    title: `Is source filter enabled`,
    description: `Check if an OBS Studio source filter is enabled.`,
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
  ObsSetSceneFilterState: {
    method: `ObsSetFilterState`,
    title: `Set scene filter state`,
    description: `Set the OBS Studio scene filter state.`,
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
  ObsSetSourceFilterState: {
    method: `ObsSetFilterState`,
    title: `Set source filter state`,
    description: `Set the OBS Studio source filter state.`,
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
  ObsShowSceneFilter: {
    method: `ObsShowFilter`,
    title: `Show scene filter`,
    description: `Show an OBS Studio scene filter.`,
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
  ObsShowSourceFilter: {
    method: `ObsShowFilter`,
    title: `Show source filter`,
    description: `Show an OBS Studio source filter.`,
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
  ObsHideSceneFilter: {
    method: `ObsHideFilter`,
    title: `Hide scene filter`,
    description: `Hide an OBS Studio scene filter.`,
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
  ObsHideSourceFilter: {
    method: `ObsHideFilter`,
    title: `Hide source filter`,
    description: `Hide an OBS Studio source filter.`,
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
  ObsToggleSceneFilter: {
    method: `ObsToggleFilter`,
    title: `Toggle scene filter`,
    description: `Toggle an OBS Studio scene filter.`,
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
  ObsToggleSourceFilter: {
    method: `ObsToggleFilter`,
    title: `Toggle source filter`,
    description: `Toggle an OBS Studio source filter.`,
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
  ObsSetRandomSceneFilter: {
    method: `ObsSetRandomFilter`,
    title: `Set random scene filter`,
    description: `Set random an OBS Studio scene filter.`,
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
  ObsSetRandomSourceFilter: {
    method: `ObsSetRandomFilter`,
    title: `Set random source filter`,
    description: `Set random an OBS Studio source filter.`,
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

  //////////
  // Mute //
  //////////

  ObsSetSourceMuteState: {
    title: `Set source mute state`,
    description: `Set an OBS Studio source mute state.`,
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
  ObsSourceMute: {
    title: `Source mute`,
    description: `Mute an OBS Studio source.`,
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
  ObsSourceUnMute: {
    title: `Source unmute`,
    description: `Unmute an OBS Studio source.`,
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
  ObsSourceMuteToggle: {
    title: `Source mute toggle`,
    description: `Toggle the mute on an OBS Studio source.`,
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

  /////////
  // Raw //
  /////////

  ObsSendRaw: {
    title: `Send raw`,
    description: `Send a raw request to the OBS Studio websocket.`,
    tags: [`Raw`],
    return: `string`,
    success: `Use the <a href="https://obs-raw.streamer.bot" target="_blank">OBS raw generator</a> for this method.`,
    fields: [
      {
        datatype: `string`,
        name: `requestType`,
      },
      {
        datatype: `string`,
        name: `data`,
        type: `json`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },

  ///////////////////////////////////
  // Hide All Scene/Source Filters //
  ///////////////////////////////////

  ObsHideSourcesFilters: {
    title: `Hide sources filters`,
    description: `Hide all filters on an OBS Studio source.`,
    tags: [`Hide All Scene/Source Filters`],
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
  ObsHideScenesFilters: {
    title: `Hide scenes filters`,
    description: `Hide all filters on an OBS Studio scene.`,
    tags: [`Hide All Scene/Source Filters`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `scene`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },

  ///////////
  // Media //
  ///////////

  ObsSetMediaState: {
    title: `Set media state`,
    description: `Set the media state on an OBS Studio media source.`,
    tags: [`Media`],
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
  ObsMediaPlay: {
    title: `Media play`,
    description: `Play an OBS Studio media source.`,
    tags: [`Media`],
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
  ObsMediaPause: {
    title: `Media pause`,
    description: `Pause an OBS Studio media source.`,
    tags: [`Media`],
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
  ObsMediaRestart: {
    title: `Media restart`,
    description: `Restart an OBS Studio media source.`,
    tags: [`Media`],
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
  ObsMediaStop: {
    title: `Media stop`,
    description: `Stop an OBS Studio media source.`,
    tags: [`Media`],
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
  ObsMediaNext: {
    title: `Media next`,
    description: `Next an OBS Studio media source.`,
    tags: [`Media`],
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
  ObsMediaPrevious: {
    title: `Media previous`,
    description: `Previous an OBS Studio media source.`,
    tags: [`Media`],
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

  ////////////
  // Colors //
  ////////////

  ObsConvertRgb: {
    title: `Convert RGB`,
    description: `Convert RGB to the OBS Studio color system.`,
    tags: [`Colors`],
    return: `long`,
    fields: [
      {
        datatype: `int`,
        name: `a`,
      },
      {
        datatype: `int`,
        name: `r`,
      },
      {
        datatype: `int`,
        name: `g`,
      },
      {
        datatype: `int`,
        name: `b`,
      },
    ],
  },
  ObsConvertColorHex: {
    title: `Convert color HEX`,
    description: `Convert HEX to the OBS Studio color system.`,
    tags: [`Colors`],
    return: `long`,
    fields: [
      {
        datatype: `string`,
        name: `colorHex`,
      },
    ],
  },
  ObsSetColorSourceRgbColor: {
    method: `ObsSetColorSourceColor`,
    title: `Set color source RGB color`,
    description: `Set the RGB color on an OBS Studio color source.`,
    tags: [`Colors`],
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
        name: `a`,
      },
      {
        datatype: `int`,
        name: `r`,
      },
      {
        datatype: `int`,
        name: `g`,
      },
      {
        datatype: `int`,
        name: `b`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  ObsSetColorSourceHexColor: {
    method: `ObsSetColorSourceColor`,
    title: `Set color source HEX color`,
    description: `Set the HEX color on an OBS Studio color source.`,
    tags: [`Colors`],
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
        name: `hexColor`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  ObsSetColorSourceRandomColor: {
    title: `Set color source random color`,
    description: `Set a random color on an OBS Studio color source.`,
    tags: [`Colors`],
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

  ///////////////////
  // Replay Buffer //
  ///////////////////

  ObsSetReplayBufferState: {
    title: `Set replay buffer state`,
    description: `Set the state off the OBS Studio replay buffer.`,
    tags: [`Replay Buffer`],
    return: `void`,
    fields: [
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
  ObsReplayBufferStart: {
    title: `Replay buffer start`,
    description: `Start the OBS Studio replay buffer.`,
    tags: [`Replay Buffer`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  ObsReplayBufferStop: {
    title: `Replay buffer stop`,
    description: `Stop the OBS Studio replay buffer.`,
    tags: [`Replay Buffer`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
  ObsReplayBufferSave: {
    title: `Replay buffer save`,
    description: `Save the OBS Studio replay buffer.`,
    tags: [`Replay Buffer`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },

  ///////////////////////////
  // Set Media Source File //
  ///////////////////////////

  ObsSetMediaSourceFile: {
    title: `Set media source file`,
    description: `Set an OBS Studio media source file.`,
    tags: [`Set Media Source File`],
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
        name: `file`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },

  ///////////////////////////
  // Set Image Source File //
  ///////////////////////////

  ObsSetImageSourceFile: {
    title: `Set image source file`,
    description: `Set an OBS Studio image source file.`,
    tags: [`Set Image Source File`],
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
        name: `file`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },

  ////////////////
  // Screenshot //
  ////////////////
  
  ObsTakeScreenshot: {
    title: `Take screenshot`,
    description: `Take a screenshot with OBS Studio.`,
    tags: [`Screenshot`],
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
        name: `path`,
      },
      {
        datatype: `int`,
        name: `quality `,
        default: `-1`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ],
  },
}
