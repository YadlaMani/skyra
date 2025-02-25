import { GuildSettings, readSettings, writeSettings } from '#lib/database';
import { LanguageKeys } from '#lib/i18n/languageKeys';
import { Colors } from '#utils/constants';
import { ApplyOptions } from '@sapphire/decorators';
import { Events, Listener, ListenerOptions } from '@sapphire/framework';
import { isNullish } from '@sapphire/utilities';
import { CategoryChannel, MessageEmbed, NewsChannel, StoreChannel, TextChannel, VoiceChannel } from 'discord.js';
import type { TFunction } from 'i18next';

type GuildBasedChannel = TextChannel | VoiceChannel | CategoryChannel | NewsChannel | StoreChannel;

@ApplyOptions<ListenerOptions>({ event: Events.ChannelDelete })
export class UserListener extends Listener<typeof Events.ChannelDelete> {
	public async run(next: GuildBasedChannel) {
		const [channelId, t] = await readSettings(next.guild, (settings) => [
			settings[GuildSettings.Channels.Logs.ChannelDelete],
			settings.getLanguage()
		]);
		if (isNullish(channelId)) return;

		const channel = next.guild.channels.cache.get(channelId) as TextChannel | undefined;
		if (channel === undefined) {
			await writeSettings(next.guild, [[GuildSettings.Channels.Logs.ChannelDelete, null]]);
			return;
		}

		const changes = [...this.getChannelInformation(t, next)];
		const embed = new MessageEmbed()
			.setColor(Colors.Red)
			.setAuthor({ name: `${next.name} (${next.id})`, iconURL: channel.guild.iconURL({ size: 64, format: 'png', dynamic: true }) ?? undefined })
			.setDescription(changes.join('\n'))
			.setFooter({ text: t(LanguageKeys.Events.Guilds.Logs.ChannelDelete) })
			.setTimestamp();
		await channel.send({ embeds: [embed] });
	}

	private *getChannelInformation(t: TFunction, channel: GuildBasedChannel) {
		if (channel.parentId) yield t(LanguageKeys.Events.Guilds.Logs.ChannelCreateParent, { value: `<#${channel.parentId}>` });
	}
}
