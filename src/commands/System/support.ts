import { LanguageKeys } from '#lib/i18n/languageKeys';
import { SkyraCommand } from '#lib/structures';
import { getColor } from '#utils/util';
import { ApplyOptions } from '@sapphire/decorators';
import { send } from '@sapphire/plugin-editable-commands';
import { PermissionFlagsBits } from 'discord-api-types/v9';
import { Message, MessageEmbed } from 'discord.js';

@ApplyOptions<SkyraCommand.Options>({
	aliases: ['support-server', 'server'],
	description: LanguageKeys.Commands.System.SupportDescription,
	detailedDescription: LanguageKeys.Commands.System.SupportExtended,
	guarded: true,
	requiredClientPermissions: [PermissionFlagsBits.EmbedLinks]
})
export class UserCommand extends SkyraCommand {
	public messageRun(message: Message, args: SkyraCommand.Args) {
		const embed = new MessageEmbed()
			.setTitle(args.t(LanguageKeys.Commands.System.SupportEmbedTitle, { username: message.author.displayName }))
			.setDescription(args.t(LanguageKeys.Commands.System.SupportEmbedDescription))
			.setColor(getColor(message));
		return send(message, { embeds: [embed] });
	}
}
