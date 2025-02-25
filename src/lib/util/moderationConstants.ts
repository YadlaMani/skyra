import { Colors } from '#utils/constants';

/* eslint-disable no-multi-spaces */
export const enum TypeVariation {
	Ban = 0b00000000,
	Kick = 0b00000001,
	Mute = 0b00000010,
	Prune = 0b00000011,
	SoftBan = 0b00000100,
	VoiceKick = 0b00000101,
	VoiceMute = 0b00000110,
	Warning = 0b00000111,
	RestrictedReaction = 0b00001000,
	RestrictedEmbed = 0b00001001,
	RestrictedAttachment = 0b00001010,
	RestrictedVoice = 0b00001011,
	SetNickname = 0b00001100,
	AddRole = 0b00001101,
	RemoveRole = 0b00001110,
	RestrictedEmoji = 0b00001111
}

export const enum TypeMetadata {
	Appeal = 0b00010000,
	Temporary = 0b00100000,
	Fast = 0b01000000,
	Invalidated = 0b10000000
}

export const enum TypeBits {
	Variation = 0b00001111,
	Metadata = 0b11110000
}

export const enum TypeCodes {
	Warning = TypeVariation.Warning,
	Mute = TypeVariation.Mute,
	Kick = TypeVariation.Kick,
	SoftBan = TypeVariation.SoftBan,
	Ban = TypeVariation.Ban,
	VoiceMute = TypeVariation.VoiceMute,
	VoiceKick = TypeVariation.VoiceKick,
	RestrictionAttachment = TypeVariation.RestrictedAttachment,
	RestrictionReaction = TypeVariation.RestrictedReaction,
	RestrictionEmbed = TypeVariation.RestrictedEmbed,
	RestrictionEmoji = TypeVariation.RestrictedEmoji,
	RestrictionVoice = TypeVariation.RestrictedVoice,
	UnWarn = TypeVariation.Warning | TypeMetadata.Appeal,
	UnMute = TypeVariation.Mute | TypeMetadata.Appeal,
	UnBan = TypeVariation.Ban | TypeMetadata.Appeal,
	UnVoiceMute = TypeVariation.VoiceMute | TypeMetadata.Appeal,
	UnRestrictionReaction = TypeVariation.RestrictedReaction | TypeMetadata.Appeal,
	UnRestrictionEmbed = TypeVariation.RestrictedEmbed | TypeMetadata.Appeal,
	UnRestrictionEmoji = TypeVariation.RestrictedEmoji | TypeMetadata.Appeal,
	UnRestrictionAttachment = TypeVariation.RestrictedAttachment | TypeMetadata.Appeal,
	UnRestrictionVoice = TypeVariation.RestrictedVoice | TypeMetadata.Appeal,
	UnSetNickname = TypeVariation.SetNickname | TypeMetadata.Appeal,
	UnAddRole = TypeVariation.AddRole | TypeMetadata.Appeal,
	UnRemoveRole = TypeVariation.RemoveRole | TypeMetadata.Appeal,
	TemporaryWarning = TypeVariation.Warning | TypeMetadata.Temporary,
	TemporaryMute = TypeVariation.Mute | TypeMetadata.Temporary,
	TemporaryBan = TypeVariation.Ban | TypeMetadata.Temporary,
	TemporaryVoiceMute = TypeVariation.VoiceMute | TypeMetadata.Temporary,
	TemporaryRestrictionAttachment = TypeVariation.RestrictedAttachment | TypeMetadata.Temporary,
	TemporaryRestrictionReaction = TypeVariation.RestrictedReaction | TypeMetadata.Temporary,
	TemporaryRestrictionEmbed = TypeVariation.RestrictedEmbed | TypeMetadata.Temporary,
	TemporaryRestrictionEmoji = TypeVariation.RestrictedEmoji | TypeMetadata.Temporary,
	TemporaryRestrictionVoice = TypeVariation.RestrictedVoice | TypeMetadata.Temporary,
	TemporarySetNickname = TypeVariation.SetNickname | TypeMetadata.Temporary,
	TemporaryAddRole = TypeVariation.AddRole | TypeMetadata.Temporary,
	TemporaryRemoveRole = TypeVariation.RemoveRole | TypeMetadata.Temporary,
	FastTemporaryWarning = TypeVariation.Warning | TypeMetadata.Temporary | TypeMetadata.Fast,
	FastTemporaryMute = TypeVariation.Mute | TypeMetadata.Temporary | TypeMetadata.Fast,
	FastTemporaryBan = TypeVariation.Ban | TypeMetadata.Temporary | TypeMetadata.Fast,
	FastTemporaryVoiceMute = TypeVariation.VoiceMute | TypeMetadata.Temporary | TypeMetadata.Fast,
	FastTemporaryRestrictionAttachment = TypeVariation.RestrictedAttachment | TypeMetadata.Temporary | TypeMetadata.Fast,
	FastTemporaryRestrictionReaction = TypeVariation.RestrictedReaction | TypeMetadata.Temporary | TypeMetadata.Fast,
	FastTemporaryRestrictionEmbed = TypeVariation.RestrictedEmbed | TypeMetadata.Temporary | TypeMetadata.Fast,
	FastTemporaryRestrictionEmoji = TypeVariation.RestrictedEmoji | TypeMetadata.Temporary | TypeMetadata.Fast,
	FastTemporaryRestrictionVoice = TypeVariation.RestrictedVoice | TypeMetadata.Temporary | TypeMetadata.Fast,
	FastTemporarySetNickname = TypeVariation.SetNickname | TypeMetadata.Temporary | TypeMetadata.Fast,
	FastTemporaryAddRole = TypeVariation.AddRole | TypeMetadata.Temporary | TypeMetadata.Fast,
	FastTemporaryRemoveRole = TypeVariation.RemoveRole | TypeMetadata.Temporary | TypeMetadata.Fast,
	Prune = TypeVariation.Prune,
	SetNickname = TypeVariation.SetNickname,
	AddRole = TypeVariation.AddRole,
	RemoveRole = TypeVariation.RemoveRole
}
/* eslint-enable no-multi-spaces */

export const metadata = new Map<TypeCodes, ModerationTypeAssets>([
	[TypeCodes.Warning, { color: Colors.Yellow, title: 'Warning' }],
	[TypeCodes.Mute, { color: Colors.Amber, title: 'Mute' }],
	[TypeCodes.Kick, { color: Colors.Orange, title: 'Kick' }],
	[TypeCodes.SoftBan, { color: Colors.DeepOrange, title: 'SoftBan' }],
	[TypeCodes.Ban, { color: Colors.Red, title: 'Ban' }],
	[TypeCodes.VoiceMute, { color: Colors.Amber, title: 'Voice Mute' }],
	[TypeCodes.VoiceKick, { color: Colors.Orange, title: 'Voice Kick' }],
	[TypeCodes.RestrictionReaction, { color: Colors.Lime, title: 'Reaction Restriction' }],
	[TypeCodes.RestrictionEmbed, { color: Colors.Lime, title: 'Embed Restriction' }],
	[TypeCodes.RestrictionEmoji, { color: Colors.Lime, title: 'Emoji Restriction' }],
	[TypeCodes.RestrictionAttachment, { color: Colors.Lime, title: 'Attachment Restriction' }],
	[TypeCodes.RestrictionVoice, { color: Colors.Lime, title: 'Voice Restriction' }],
	[TypeCodes.UnWarn, { color: Colors.LightBlue, title: 'Reverted Warning' }],
	[TypeCodes.UnMute, { color: Colors.LightBlue, title: 'Reverted Mute' }],
	[TypeCodes.UnBan, { color: Colors.LightBlue, title: 'Reverted Ban' }],
	[TypeCodes.UnVoiceMute, { color: Colors.LightBlue, title: 'Reverted Voice Mute' }],
	[TypeCodes.UnRestrictionReaction, { color: Colors.LightBlue, title: 'Reverted Reaction Restriction' }],
	[TypeCodes.UnRestrictionEmbed, { color: Colors.LightBlue, title: 'Reverted Embed Restriction' }],
	[TypeCodes.UnRestrictionEmoji, { color: Colors.LightBlue, title: 'Reverted Emoji Restriction' }],
	[TypeCodes.UnRestrictionAttachment, { color: Colors.LightBlue, title: 'Reverted Attachment Restriction' }],
	[TypeCodes.UnRestrictionVoice, { color: Colors.LightBlue, title: 'Reverted Voice Restriction' }],
	[TypeCodes.UnSetNickname, { color: Colors.LightBlue, title: 'Reverted Set Nickname' }],
	[TypeCodes.UnAddRole, { color: Colors.LightBlue, title: 'Reverted Add Role' }],
	[TypeCodes.UnRemoveRole, { color: Colors.LightBlue, title: 'Reverted Remove Role' }],
	[TypeCodes.TemporaryWarning, { color: Colors.Yellow300, title: 'Temporary Warning' }],
	[TypeCodes.TemporaryMute, { color: Colors.Amber300, title: 'Temporary Mute' }],
	[TypeCodes.TemporaryBan, { color: Colors.Red300, title: 'Temporary Ban' }],
	[TypeCodes.TemporaryVoiceMute, { color: Colors.Amber300, title: 'Temporary Voice Mute' }],
	[TypeCodes.TemporaryRestrictionReaction, { color: Colors.Lime300, title: 'Temporary Reaction Restriction' }],
	[TypeCodes.TemporaryRestrictionEmbed, { color: Colors.Lime300, title: 'Temporary Embed Restriction' }],
	[TypeCodes.TemporaryRestrictionEmoji, { color: Colors.Lime300, title: 'Temporary Emoji Restriction' }],
	[TypeCodes.TemporaryRestrictionAttachment, { color: Colors.Lime300, title: 'Temporary Attachment Restriction' }],
	[TypeCodes.TemporaryRestrictionVoice, { color: Colors.Lime300, title: 'Temporary Voice Restriction' }],
	[TypeCodes.TemporarySetNickname, { color: Colors.Lime300, title: 'Temporary Set Nickname' }],
	[TypeCodes.TemporaryAddRole, { color: Colors.Lime300, title: 'Temporarily Added Role' }],
	[TypeCodes.TemporaryRemoveRole, { color: Colors.Lime300, title: 'Temporarily Removed Role' }],
	[TypeCodes.FastTemporaryWarning, { color: Colors.Yellow300, title: 'Temporary Warning' }],
	[TypeCodes.FastTemporaryMute, { color: Colors.Amber300, title: 'Temporary Mute' }],
	[TypeCodes.FastTemporaryBan, { color: Colors.Red300, title: 'Temporary Ban' }],
	[TypeCodes.FastTemporaryVoiceMute, { color: Colors.Amber300, title: 'Temporary Voice Mute' }],
	[TypeCodes.FastTemporaryRestrictionReaction, { color: Colors.Lime300, title: 'Temporary Reaction Restriction' }],
	[TypeCodes.FastTemporaryRestrictionEmbed, { color: Colors.Lime300, title: 'Temporary Embed Restriction' }],
	[TypeCodes.FastTemporaryRestrictionEmoji, { color: Colors.Lime300, title: 'Temporary Emoji Restriction' }],
	[TypeCodes.FastTemporaryRestrictionAttachment, { color: Colors.Lime300, title: 'Temporary Attachment Restriction' }],
	[TypeCodes.FastTemporaryRestrictionVoice, { color: Colors.Lime300, title: 'Temporary Voice Restriction' }],
	[TypeCodes.FastTemporarySetNickname, { color: Colors.Lime300, title: 'Temporary Set Nickname' }],
	[TypeCodes.FastTemporaryAddRole, { color: Colors.Lime300, title: 'Temporarily Added Role' }],
	[TypeCodes.FastTemporaryRemoveRole, { color: Colors.Lime300, title: 'Temporarily Removed Role' }],
	[TypeCodes.Prune, { color: Colors.Brown, title: 'Prune' }],
	[TypeCodes.SetNickname, { color: Colors.Lime, title: 'Set Nickname' }],
	[TypeCodes.AddRole, { color: Colors.Lime, title: 'Added Role' }],
	[TypeCodes.RemoveRole, { color: Colors.Lime, title: 'Removed Role' }]
]) as ReadonlyMap<TypeCodes, ModerationTypeAssets>;

export const enum TypeVariationAppealNames {
	Warning = 'moderationEndWarning',
	Mute = 'moderationEndMute',
	Ban = 'moderationEndBan',
	VoiceMute = 'moderationEndVoiceMute',
	RestrictedReaction = 'moderationEndRestrictionReaction',
	RestrictedEmbed = 'moderationEndRestrictionEmbed',
	RestrictedEmoji = 'moderationEndRestrictionEmoji',
	RestrictedAttachment = 'moderationEndRestrictionAttachment',
	RestrictedVoice = 'moderationEndRestrictionVoice',
	SetNickname = 'moderationEndSetNickname',
	AddRole = 'moderationEndAddRole',
	RemoveRole = 'moderationEndRemoveRole'
}

export const enum SchemaKeys {
	Case = 'caseID',
	CreatedAt = 'createdAt',
	Duration = 'duration',
	ExtraData = 'extraData',
	Guild = 'guildID',
	Moderator = 'moderatorID',
	Reason = 'reason',
	ImageURL = 'imageURL',
	Type = 'type',
	User = 'userID'
}

export interface ModerationTypeAssets {
	color: number;
	title: string;
}

export interface ModerationManagerDescriptionData {
	reason: string | null;
	prefix: string;
	caseId: number;
	formattedDuration: string;
}

export interface Unlock {
	unlock(): void;
}
