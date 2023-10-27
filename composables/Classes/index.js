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
  GuestStar: {
    variables: [
      {
        datatype: `string`,
        name: `SlotId`,
      },
      {
        datatype: `bool`,
        name: `IsLive`,
      },
      {
        datatype: `string`,
        name: `UserId`,
      },
      {
        datatype: `string`,
        name: `UserName`,
      },
      {
        datatype: `string`,
        name: `UserLogin`,
      },
      {
        datatype: `int`,
        name: `Volume`,
      },
      {
        datatype: `DateTime`,
        name: `AssignedAt`,
      },
      {
        datatype: `MediaSettings`,
        name: `AudioSettings`,
      },
      {
        datatype: `MediaSettings`,
        name: `VideoSettings`,
      },
    ],
  },
  MediaSettings: {
    variables: [
      {
        datatype: `bool`,
        name: `IsHostEnabled`,
      },
      {
        datatype: `bool`,
        name: `IsGuestEnabled`,
      },
      {
        datatype: `bool`,
        name: `IsAvailable`,
      },
    ],
  },
  GuestStarInvite: {
    variables: [
      {
        datatype: `string`,
        name: `UserId`,
      },
      {
        datatype: `DateTime`,
        name: `InvitedAt`,
      },
      {
        datatype: `string`,
        name: `Status`,
      },
      {
        datatype: `bool`,
        name: `IsVideoEnabled`,
      },
      {
        datatype: `bool`,
        name: `IsAudioEnabled`,
      },
      {
        datatype: `bool`,
        name: `IsVideoAvailable`,
      },
      {
        datatype: `bool`,
        name: `IsAudioAvailable`,
      },
    ],
  },
  TwitchReward: {
    variables: [
      {
        datatype: `string`,
        name: `Id`,
      },
      {
        datatype: `string`,
        name: `Title`,
      },
      {
        datatype: `string`,
        name: `Prompt`,
      },
      {
        datatype: `int`,
        name: `Cost`,
      },
      {
        datatype: `bool`,
        name: `InputRequired`,
      },
      {
        datatype: `string`,
        name: `BackgroundColor`,
      },
      {
        datatype: `bool`,
        name: `Paused`,
      },
      {
        datatype: `bool`,
        name: `Enabled`,
      },
      {
        datatype: `bool`,
        name: `IsOurs`,
      },
    ],
  },
  ClipData: {
    variables: [
      {
        datatype: `string`,
        name: `Id`,
      },
      {
        datatype: `string`,
        name: `Url`,
      },
      {
        datatype: `string`,
        name: `EmbedUrl`,
      },
      {
        datatype: `int`,
        name: `BroadcasterId`,
      },
      {
        datatype: `string`,
        name: `BroadcasterName`,
      },
      {
        datatype: `int`,
        name: `CreatorId`,
      },
      {
        datatype: `string`,
        name: `CreatorName`,
      },
      {
        datatype: `string`,
        name: `VideoId`,
      },
      {
        datatype: `string`,
        name: `GameId`,
      },
      {
        datatype: `string`,
        name: `Language`,
      },
      {
        datatype: `string`,
        name: `Title`,
      },
      {
        datatype: `int`,
        name: `ViewCount`,
      },
      {
        datatype: `DateTime`,
        name: `CreatedAt`,
      },
      {
        datatype: `string`,
        name: `ThumbnailUrl`,
      },
      {
        datatype: `float`,
        name: `Duration`,
      },
    ],
  },
  StreamMarker: {
    variables: [
      {
        datatype: `int`,
        name: `Id`,
      },
      {
        datatype: `DateTime`,
        name: `CreatedAt`,
      },
      {
        datatype: `string`,
        name: `Description`,
      },
      {
        datatype: `int`,
        name: `Position`,
      },
    ],
  },
  TeamInfo: {
    variables: [
      {
        datatype: `string`,
        name: `Id`,
      },
      {
        datatype: `string`,
        name: `Login`,
      },
      {
        datatype: `string`,
        name: `Name`,
      },
      {
        datatype: `string`,
        name: `BackgroundImageUrl`,
      },
      {
        datatype: `string`,
        name: `Banner`,
      },
      {
        datatype: `string`,
        name: `CreatedAt`,
      },
      {
        datatype: `string`,
        name: `UpdatedAt`,
      },
      {
        datatype: `string`,
        name: `Info`,
      },
      {
        datatype: `string`,
        name: `ThumbnailUrl`,
      },
      {
        datatype: `string`,
        name: `TeamName`,
      },
      {
        datatype: `string`,
        name: `TeamDisplayName`,
      },
      {
        datatype: `string`,
        name: `TeamId`,
      },
    ],
  },
  GameInfo: {
    variables: [
      {
        datatype: `int`,
        name: `Id`,
      },
      {
        datatype: `string`,
        name: `Name`,
      },
      {
        datatype: `string`,
        name: `BoxArtUrl`,
      },
    ],
  },
  VTSModelPosition: {
    variables: [
      {
        datatype: `double`,
        name: `PositionX`,
      },
      {
        datatype: `double`,
        name: `PositionY`,
      },
      {
        datatype: `double`,
        name: `Rotation`,
      },
      {
        datatype: `double`,
        name: `Size`,
      },
    ],
  },
}