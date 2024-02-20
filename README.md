# Reproduction of TS errors in `@stream-io/node-sdk`

To reproduce the errors, run the following commands:

```bash
npm install
npm run build
```

The following errors will be thrown:

```console

> stream_ts_error_test@1.0.0 build
> tsc

node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/FilesApi.d.ts(13,55): error TS2724: '"../models"' has no exported member named 'ImageSizeRequest'. Did you mean 'ImagesRequest'?
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/FilesApi.d.ts(13,94): error TS2724: '"../models"' has no exported member named 'OnlyUserIDRequest'. Did you mean 'OwnUserRequest'?
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(8,1): error TS2308: Module './ChannelsApi' has already exported a member named 'DeleteChannelsOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(10,1): error TS2308: Module './ChannelsApi' has already exported a member named 'MarkChannelsReadOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(10,1): error TS2308: Module './ChannelsApi' has already exported a member named 'MarkReadOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(10,1): error TS2308: Module './ChannelsApi' has already exported a member named 'MarkUnreadOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(10,1): error TS2308: Module './ChannelsApi' has already exported a member named 'SearchOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(10,1): error TS2308: Module './FilesApi' has already exported a member named 'DeleteFileRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(10,1): error TS2308: Module './FilesApi' has already exported a member named 'DeleteImageRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(10,1): error TS2308: Module './FilesApi' has already exported a member named 'UploadFileRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(10,1): error TS2308: Module './FilesApi' has already exported a member named 'UploadImageRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(11,1): error TS2308: Module './GDPRApi' has already exported a member named 'DeactivateUserOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(11,1): error TS2308: Module './GDPRApi' has already exported a member named 'DeactivateUsersOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(11,1): error TS2308: Module './GDPRApi' has already exported a member named 'DeleteUserRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(11,1): error TS2308: Module './GDPRApi' has already exported a member named 'DeleteUsersOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(11,1): error TS2308: Module './GDPRApi' has already exported a member named 'ReactivateUserOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(11,1): error TS2308: Module './GDPRApi' has already exported a member named 'ReactivateUsersOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(11,1): error TS2308: Module './MessagesApi' has already exported a member named 'FlagOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(11,1): error TS2308: Module './MessagesApi' has already exported a member named 'QueryMessageFlagsOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(11,1): error TS2308: Module './MessagesApi' has already exported a member named 'UnflagRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(13,1): error TS2308: Module './DevicesApi' has already exported a member named 'CreateDeviceOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(14,1): error TS2308: Module './MessagesApi' has already exported a member named 'DeleteReactionRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(14,1): error TS2308: Module './MessagesApi' has already exported a member named 'GetReactionsRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(14,1): error TS2308: Module './MessagesApi' has already exported a member named 'SendReactionOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(16,1): error TS2308: Module './ChannelTypesApi' has already exported a member named 'CreateChannelTypeOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(16,1): error TS2308: Module './ChannelTypesApi' has already exported a member named 'DeleteChannelTypeRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(16,1): error TS2308: Module './ChannelTypesApi' has already exported a member named 'GetChannelTypeRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(16,1): error TS2308: Module './ChannelTypesApi' has already exported a member named 'UpdateChannelTypeOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(16,1): error TS2308: Module './ModerationApi' has already exported a member named 'CreateBlockListOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(16,1): error TS2308: Module './ModerationApi' has already exported a member named 'DeleteBlockListRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(16,1): error TS2308: Module './ModerationApi' has already exported a member named 'GetBlockListRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(16,1): error TS2308: Module './ModerationApi' has already exported a member named 'UpdateBlockListOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(16,1): error TS2308: Module './PushApi' has already exported a member named 'DeletePushProviderRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(16,1): error TS2308: Module './PushApi' has already exported a member named 'DeletePushProviderTypeEnum'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(18,1): error TS2308: Module './SettingsApi' has already exported a member named 'CheckPushOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(18,1): error TS2308: Module './SettingsApi' has already exported a member named 'CheckSNSOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(18,1): error TS2308: Module './SettingsApi' has already exported a member named 'CheckSQSOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(19,1): error TS2308: Module './GDPRApi' has already exported a member named 'DeactivateUserOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(19,1): error TS2308: Module './GDPRApi' has already exported a member named 'DeactivateUsersOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(19,1): error TS2308: Module './GDPRApi' has already exported a member named 'DeleteUserRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(19,1): error TS2308: Module './GDPRApi' has already exported a member named 'DeleteUsersOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(19,1): error TS2308: Module './GDPRApi' has already exported a member named 'ReactivateUserOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(19,1): error TS2308: Module './GDPRApi' has already exported a member named 'ReactivateUsersOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(19,1): error TS2308: Module './MessagesApi' has already exported a member named 'FlagOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(19,1): error TS2308: Module './MessagesApi' has already exported a member named 'UnflagRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(19,1): error TS2308: Module './ModerationApi' has already exported a member named 'BanOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(19,1): error TS2308: Module './ModerationApi' has already exported a member named 'MuteUserOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(19,1): error TS2308: Module './ModerationApi' has already exported a member named 'QueryBannedUsersOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(19,1): error TS2308: Module './ModerationApi' has already exported a member named 'UnbanRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/index.d.ts(19,1): error TS2308: Module './ModerationApi' has already exported a member named 'UnmuteUserOperationRequest'. Consider explicitly re-exporting to resolve the ambiguity.
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/MessagesApi.d.ts(13,164): error TS2724: '"../models"' has no exported member named 'ImageSizeRequest'. Did you mean 'ImagesRequest'?
node_modules/@stream-io/node-sdk/dist/src/gen/chat/apis/MessagesApi.d.ts(13,357): error TS2724: '"../models"' has no exported member named 'OnlyUserIDRequest'. Did you mean 'OwnUserRequest'?
node_modules/@stream-io/node-sdk/dist/src/StreamClient.d.ts(1,23): error TS2688: Cannot find type definition file for 'node'.
node_modules/@stream-io/node-sdk/dist/src/StreamClient.d.ts(97,43): error TS2580: Cannot find name 'Buffer'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
```
