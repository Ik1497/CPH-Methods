export default {
  GuestStarSettings: {
    variables: [
      {
        datatype: `bool`,
        name: `IsModeratorSendLiveEnabled`,
      },
      {
        datatype: `int`,
        name: `SlotCount`,
      },
      {
        datatype: `bool`,
        name: `IsBrowserSourceAudioEnabled`,
      },
      {
        datatype: `string`,
        name: `GroupLayout`,
      },
      {
        datatype: `string`,
        name: `BrowserSourceToken`,
      },
    ],
  },
  GuestSession: {
    variables: [
      {
        datatype: `string`,
        name: `id`,
      },
      {
        datatype: `List<GuestStar>`,
        name: `Guests`,
      },
    ],
  },
}
