export default {

  /////////////
  // General //
  /////////////

  Between: {
    title: `Between`,
    description: `Get a value between two integers.`,
    tags: [`General`],
    return: `int`,
    fields: [
      {
        datatype: `int`,
        name: `min`,
      },
      {
        datatype: `int`,
        name: `max`,
      },
    ],
  },
  NextDouble: {
    title: `Next double`,
    description: `Get a random value between 0f and 1f.`,
    tags: [`General`],
    return: `double`,
    fields: [],
  },
  Wait: {
    title: `Wait`,
    description: `Wait for a specified amount of time.`,
    tags: [`General`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `milliseconds`,
      },
    ],
  },
  UrlEncode: {
    title: `Url encode`,
    description: `Encode text for a URL.`,
    tags: [`General`],
    return: `string`,
    fields: [
      {
        datatype: `string`,
        name: `text`,
      },
    ],
  },
  EscapeString: {
    title: `Escape string`,
    description: `Escape a string.`,
    tags: [`General`],
    return: `string`,
    fields: [
      {
        datatype: `string`,
        name: `text`,
      },
    ],
  },

  /////////////////////////
  // Source & Event Type //
  /////////////////////////

  GetSource: {
    title: `Get source`,
    description: `Get the source for this action.`,
    tags: [`Source & Event Type`],
    return: `EventSource`,
    returnType: `class`,
    fields: [],
  },
  GetEventType: {
    title: `Get event type`,
    description: `Get the event type for this action.`,
    tags: [`Source & Event Type`],
    return: `EventType`,
    returnType: `class`,
    fields: [],
  },

  /////////////
  // Actions //
  /////////////

  RunAction: {
    title: `Run action`,
    description: `Run an action.`,
    tags: [`Actions`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `actionName`,
      },
      {
        datatype: `bool`,
        name: `runImmediately`,
        default: `true`,
      },
    ],
  },
  RunActionById: {
    title: `Run action by id`,
    description: `Run an action by id.`,
    tags: [`Actions`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `actionId`,
      },
      {
        datatype: `bool`,
        name: `runImmediately`,
        default: `true`,
      },
    ],
  },
  DisableAction: {
    title: `Disable action`,
    description: `Disable an action.`,
    tags: [`Actions`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `actionName`,
      },
    ],
  },
  EnableAction: {
    title: `Enable action`,
    description: `Enable an action.`,
    tags: [`Actions`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `actionName`,
      },
    ],
  },
  ActionExists: {
    title: `Action exists`,
    description: `Check if an action exists.`,
    tags: [`Actions`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `actionName`,
      },
    ],
  },

  ///////////////////
  // Action Queues //
  ///////////////////

  PauseActionQueue: {
    title: `Pause action queue`,
    description: `Pause an action queue.`,
    tags: [`Action Queues`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `name`,
      },
    ],
  },
  PauseAllActionQueues: {
    title: `Pause all action queues`,
    description: `Pause all action queues.`,
    tags: [`Action Queues`],
    return: `void`,
    fields: [],
  },
  ResumeActionQueue: {
    title: `Resume action queue`,
    description: `Resume an action queue.`,
    tags: [`Action Queues`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `name`,
      },
      {
        datatype: `bool`,
        name: `clear`,
        default: `false`,
      },
    ],
  },
  ResumeAllActionQueues: {
    title: `Resume all action queues`,
    description: `Resume all action queues.`,
    tags: [`Action Queues`],
    return: `void`,
    fields: [
      {
        datatype: `bool`,
        name: `clear`,
        default: `false`,
      },
    ],
  },

  ////////////
  // Sounds //
  ////////////

  PlaySound: {
    title: `Play sound`,
    description: `Play a sound from a file.`,
    tags: [`Sounds`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `fileName`,
      },
      {
        datatype: `float`,
        name: `volume`,
        default: `1.0`,
      },
      {
        datatype: `bool`,
        name: `finishBeforeContinuing`,
        default: `false`,
      },
    ],
  },
  PlaySoundFromFolder: {
    title: `Play sound from folder`,
    description: `Play a random sound from a folder.`,
    tags: [`Sounds`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `path`,
      },
      {
        datatype: `float`,
        name: `volume`,
        default: `1.0`,
      },
      {
        datatype: `bool`,
        name: `recursive`,
        default: `false`,
      },
      {
        datatype: `bool`,
        name: `finishBeforeContinuing`,
        default: `false`,
      },
    ],
  },

  ////////////////////
  // Keyboard Press //
  ////////////////////

  KeyboardPress: {
    title: `Keyboard press`,
    description: `Press a keyboard key.`,
    tags: [`Keyboard Press`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `keyPress`,
      },
    ],
  },

  ///////////////////////
  // C# Execute Method //
  ///////////////////////

  ExecuteMethod: {
    title: `Execute method`,
    description: `Execute a method.`,
    tags: [`C# Execute Method`],
    return: `bool`,
    fields: [
      {
        datatype: `string`,
        name: `executeCode`,
      },
      {
        datatype: `string`,
        name: `methodName`,
      },
    ],
  },

  /////////////
  // Logging //
  /////////////

  LogInfo: {
    title: `Log info`,
    description: `Add an information log to your log file.`,
    tags: [`Logging`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `logLine`,
      },
    ],
  },
  LogWarn: {
    title: `Log warn`,
    description: `Add a warning log to your log file.`,
    tags: [`Logging`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `logLine`,
      },
    ],
  },
  LogDebug: {
    title: `Log debug`,
    description: `Add a debug log to your log file.`,
    tags: [`Logging`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `logLine`,
      },
    ],
  },
  LogVerbose: {
    title: `Log verbose`,
    description: `Add a verbose log to your log file.`,
    tags: [`Logging`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `logLine`,
      },
    ],
  },

  ///////////////////////////
  // Credits & First Words //
  ///////////////////////////
  
  AddToCredits: {
    title: `Add to credits`,
    description: `Add data to your credits.`,
    tags: [`Credits & First Words`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `section`,
      },
      {
        datatype: `string`,
        name: `value`,
      },
      {
        datatype: `bool`,
        name: `json`,
        default: `true`,
      },
    ],
  },
  ResetCredits: {
    title: `Reset credits`,
    description: `Reset your credits.`,
    tags: [`Credits & First Words`],
    return: `void`,
    fields: [],
  },
  ResetFirstWords: {
    title: `Reset first words`,
    description: `Reset your first words.`,
    tags: [`Credits & First Words`],
    return: `void`,
    fields: [],
  },

  ////////////
  // Timers //
  ////////////

  DisableTimer: {
    title: `Disable timer`,
    description: `Disable a timer.`,
    tags: [`Timers`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `timerName`,
      },
    ],
  },
  EnableTimer: {
    title: `Enable timer`,
    description: `Enable a timer.`,
    tags: [`Timers`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `timerName`,
      },
    ],
  },

  ///////////////
  // Variables //
  ///////////////

  SetArgument: {
    title: `Set argument`,
    description: `Set an argument.`,
    tags: [`Variables`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `variableName`,
      },
      {
        datatype: `object`,
        name: `value`,
      },
    ],
  },
}
