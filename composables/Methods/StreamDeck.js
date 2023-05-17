export default {
  ////////////////
  // Background //
  ////////////////

    //////////////////////
    // Background Color //
    //////////////////////

    StreamDeckSetBackgroundColor: {
      title: `Set background color`,
      description: `Set the background color of a button.`,
      version: `0.1.21`,
      tags: [`Background`, `Color`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `buttonId`,
        },
        {
          datatype: `string`,
          name: `color`,
        },
      ],
    },
    StreamDeckSetBackgroundColorAndState: {
      method: `StreamDeckSetBackgroundColor`,
      title: `Set background color and state`,
      description: `Set the background color and the state of a button.`,
      version: `0.1.21`,
      tags: [`Background`, `Color`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `buttonId`,
        },
        {
          datatype: `string`,
          name: `color`,
        },
        {
          datatype: `int`,
          name: `state`,
        },
      ],
    },

    //////////////////////////
    // Background Image URL //
    //////////////////////////
    
    StreamDeckSetBackgroundUrl: {
      title: `Set the background image url`,
      description: `Set the background image url of a button.`,
      version: `0.1.21`,
      tags: [`Background`, `Image URL`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `buttonId`,
        },
        {
          datatype: `string`,
          name: `imageUrl`,
        },
      ],
    },
    StreamDeckSetBackgroundUrlWithColor: {
      method: `StreamDeckSetBackgroundUrl`,
      title: `Set the background image url with color`,
      description: `Set the background image url with color of a button.`,
      version: `0.1.21`,
      tags: [`Background`, `Image URL`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `buttonId`,
        },
        {
          datatype: `string`,
          name: `imageUrl`,
        },
        {
          datatype: `string`,
          name: `color`,
        },
      ],
    },
    StreamDeckSetBackgroundUrlAndState: {
      method: `StreamDeckSetBackgroundUrl`,
      title: `Set the background image url and the state`,
      description: `Set the background image url and the state of a button.`,
      version: `0.1.21`,
      tags: [`Background`, `Image URL`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `buttonId`,
        },
        {
          datatype: `string`,
          name: `imageUrl`,
        },
        {
          datatype: `int`,
          name: `state`,
        },
      ],
    },
    StreamDeckSetBackgroundUrlWithColorAndState: {
      method: `StreamDeckSetBackgroundUrl`,
      title: `Set the background image url with color and state`,
      description: `Set the background image url with color and state of a button.`,
      version: `0.1.21`,
      tags: [`Background`, `Image URL`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `buttonId`,
        },
        {
          datatype: `string`,
          name: `imageUrl`,
        },
        {
          datatype: `string`,
          name: `color`,
        },
        {
          datatype: `int`,
          name: `state`,
        },
      ],
    },

    ////////////////////////////////
    // Background Image File Path //
    ////////////////////////////////
    
    StreamDeckSetBackgroundLocal: {
      title: `Set the file for the background image`,
      description: `Set the file for the background image of a button.`,
      version: `0.1.21`,
      tags: [`Background`, `Local File`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `buttonId`,
        },
        {
          datatype: `string`,
          name: `imageFile`,
        },
      ],
    },
    StreamDeckSetBackgroundLocalWithColor: {
      method: `StreamDeckSetBackgroundLocal`,
      title: `Set the file for the background image with color`,
      description: `Set the file for the background image with color of a button.`,
      version: `0.1.21`,
      tags: [`Background`, `Local File`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `buttonId`,
        },
        {
          datatype: `string`,
          name: `imageFile`,
        },
        {
          datatype: `string`,
          name: `color`,
        },
      ],
    },
    StreamDeckSetBackgroundLocalAndState: {
      method: `StreamDeckSetBackgroundLocal`,
      title: `Set the file for the background image and the state`,
      description: `Set the file for the background image and the state of a button.`,
      version: `0.1.21`,
      tags: [`Background`, `Local File`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `buttonId`,
        },
        {
          datatype: `string`,
          name: `imageFile`,
        },
        {
          datatype: `int`,
          name: `state`,
        },
      ],
    },
    StreamDeckSetBackgroundLocalWithColorAndState: {
      method: `StreamDeckSetBackgroundLocal`,
      title: `Set the file for the background image with color and state`,
      description: `Set the file for the background image with color and state of a button.`,
      version: `0.1.21`,
      tags: [`Background`, `Local File`],
      return: `void`,
      fields: [
        {
          datatype: `string`,
          name: `buttonId`,
        },
        {
          datatype: `string`,
          name: `imageFile`,
        },
        {
          datatype: `string`,
          name: `color`,
        },
        {
          datatype: `int`,
          name: `state`,
        },
      ],
    },

  ///////////
  // Title //
  ///////////

  StreamDeckSetTitle: {
    title: `Set title`,
    description: `Set the title of a button.`,
    version: `0.1.21`,
    tags: [`Title`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `buttonId`,
      },
      {
        datatype: `string`,
        name: `title`,
      },
    ],
  },
  StreamDeckSetTitleAndState: {
    method: `StreamDeckSetTitle`,
    title: `Set title and state`,
    description: `Set the title and state of a button.`,
    version: `0.1.21`,
    tags: [`Title`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `buttonId`,
      },
      {
        datatype: `string`,
        name: `title`,
      },
      {
        datatype: `int`,
        name: `state`,
      },
    ],
  },

  ///////////
  // State //
  ///////////

  StreamDeckSetState: {
    title: `Set state`,
    description: `Set the state of a button.`,
    version: `0.1.21`,
    tags: [`State`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `buttonId`,
      },
      {
        datatype: `int`,
        name: `state`,
      },
    ],
  },
  StreamDeckToggleState: {
    title: `Toggle state`,
    description: `Set the state of a button.`,
    version: `0.1.21`,
    tags: [`State`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `buttonId`,
      },
    ],
  },

  ///////////
  // Value //
  ///////////

  StreamDeckSetValue: {
    title: `Set value`,
    description: `Set the value of a button.`,
    version: `0.1.21`,
    tags: [`Value`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `buttonId`,
      },
      {
        datatype: `string`,
        name: `value`,
      },
    ],
  },

  ///////////
  // Alert //
  ///////////

  StreamDeckShowAlert: {
    title: `Show alert`,
    description: `Show an alert on a button.`,
    version: `0.1.21`,
    tags: [`Alert`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `buttonId`,
      },
    ],
  },

  ////////
  // Ok //
  ////////

  StreamDeckShowOk: {
    title: `Show ok`,
    description: `Show an ok on a button.`,
    version: `0.1.21`,
    tags: [`Ok`],
    return: `void`,
    fields: [
      {
        datatype: `string`,
        name: `buttonId`,
      },
    ],
  },
}
