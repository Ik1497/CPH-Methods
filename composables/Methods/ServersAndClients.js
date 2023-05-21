export default {
  //////////////////////
  // Websocket Server //
  //////////////////////
  
  WebsocketBroadcastString: {
    title: `Websocket broadcast string`,
    description: `Broadcast a string to the Streamer.bot websocket server.`,
    tags: [`Websocket Server`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `data`,
      },
    ]
  },
  WebsocketBroadcastJson: {
    title: `Websocket broadcast JSON`,
    description: `Broadcast JSON to the Streamer.bot websocket server.`,
    tags: [`Websocket Server`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `data`,
        type: `json`,
      },
    ]
  },
  
  ///////////////////////
  // Websocket Clients //
  ///////////////////////
  
  WebsocketConnect: {
    title: `Websocket connect`,
    description: `Connect a websocket client.`,
    tags: [`Websocket Clients`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ]
  },
  WebsocketDisconnect: {
    title: `Websocket disconnect`,
    description: `Disconnect a websocket client.`,
    tags: [`Websocket Clients`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ]
  },
  WebsocketIsConnected: {
    title: `Websocket is connected`,
    description: `Check if a websocket client is connected.`,
    tags: [`Websocket Clients`],
    return: `bool`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ]
  },
  WebsocketSend: {
    title: `Websocket send`,
    description: `Send a string to a websocket client.`,
    tags: [`Websocket Clients`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `data`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ]
  },
  WebsocketSendByte: {
    method: `WebsocketSend`,
    title: `Websocket send byte`,
    description: `Send byte data to a websocket client.`,
    tags: [`Websocket Clients`],
    return: `void`,
    fields: [
      {
        datatype: `byte[]`,
        name: `data`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ]
  },
  
  //////////////////////////////
  // Custom Websocket Servers //
  //////////////////////////////
  
  WebsocketCustomServerStart: {
    title: `Start custom websocket server`,
    description: `Start a custom websocket server.`,
    version: `0.0.59`,
    tags: [`Custom Websocket Servers`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ]
  },
  WebsocketCustomServerStop: {
    title: `Stop custom websocket server`,
    description: `Stop a custom websocket server.`,
    version: `0.0.59`,
    tags: [`Custom Websocket Servers`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ]
  },
  WebsocketCustomServerIsListening: {
    title: `Custom websocket server is listening`,
    description: `Check if a custom websocket server is listening.`,
    version: `0.0.59`,
    tags: [`Custom Websocket Servers`],
    return: `bool`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ]
  },
  WebsocketCustomServerCloseAllSessions: {
    title: `Close all custom websocket server sessions`,
    description: `Close all sessions from a custom websocket server.`,
    version: `0.0.59`,
    tags: [`Custom Websocket Servers`],
    return: `void`,
    fields: [
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ]
  },
  WebsocketCustomServerCloseSession: {
    title: `Close a custom websocket server session`,
    description: `Close a session from a custom websocket server.`,
    version: `0.0.59`,
    tags: [`Custom Websocket Servers`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `sessionId`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ]
  },
  WebsocketCustomServerBroadcast: {
    title: `Broadcast to custom websocket server`,
    description: `Broadcast a message to a custom websocket server.`,
    version: `0.0.59`,
    tags: [`Custom Websocket Servers`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `data`,
      },
      {
        datatype: `string`,
        name: `sessionId`,
      },
      {
        datatype: `int`,
        name: `connection`,
        default: `0`,
      },
    ]
  },
  WebsocketCustomServerGetConnectionByName: {
    title: `Get custom websocket server connection by name`,
    description: `Get the name of a custom websocket server by name.`,
    version: `0.1.8`,
    version: `0.0.59`,
    tags: [`Custom Websocket Servers`],
    return: `int`,
    fields: [
      {
        datatype: `string`,
        name: `name`,
      },
    ]
  },
  
  ///////////////////
  // UDP Broadcast //
  ///////////////////
  
  BroadcastUdp: {
    title: `UDP Broadcast`,
    description: `Broadcast a message to a UDP server.`,
    tags: [`UDP Broadcast`],
    return: `int`,
    fields: [
      {
        datatype: `int`,
        name: `port`,
      },
      {
        datatype: `object`,
        name: `data`,
      },
    ]
  },
}