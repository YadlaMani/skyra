import { GuildSettings, ModerationEntity, readSettings } from '#lib/database';
import { LanguageKeys } from '#lib/i18n/languageKeys';
import { HandledCommandContext, ModerationCommand } from '#lib/moderation';
import type { GuildMessage } from '#lib/types';
import { floatPromise } from '#utils/common';
import { deleteMessage, getModeration, getSecurity } from '#utils/functions';
import { TypeCodes } from '#utils/moderationConstants';
import { getImage, getTag } from '#utils/util';
import { ApplyOptions } from '@sapphire/decorators';
import { send } from '@sapphire/plugin-editable-commands';

@ApplyOptions<ModerationCommand.Options>({
	aliases: ['uw', 'unwarning'],
	description: LanguageKeys.Commands.Moderation.UnwarnDescription,
	detailedDescription: LanguageKeys.Commands.Moderation.UnwarnExtended
})
export class UserModerationCommand extends ModerationCommand {
	public async messageRun(message: GuildMessage, args: ModerationCommand.Args) {
		const caseId = await args.pick('case');
		const reason = args.finished ? null : await args.rest('string');

		const [autoDelete, messageDisplay, reasonDisplay] = await readSettings(message.guild, [
			GuildSettings.Messages.ModerationAutoDelete,
			GuildSettings.Messages.ModerationMessageDisplay,
			GuildSettings.Messages.ModerationReasonDisplay
		]);

		const modlog = await getModeration(message.guild).fetch(caseId);
		if (!modlog || !modlog.isType(TypeCodes.Warning)) {
			this.error(LanguageKeys.Commands.Moderation.GuildWarnNotFound);
		}

		const user = await modlog.fetchUser();
		const unwarnLog = await this.handle(message, { args, target: user, reason, modlog, duration: null, preHandled: null });

		// If the server was configured to automatically delete messages, delete the command and return null.
		if (autoDelete) {
			if (message.deletable) floatPromise(deleteMessage(message));
		}

		if (messageDisplay) {
			const originalReason = reasonDisplay ? unwarnLog.reason : null;
			const content = args.t(
				originalReason ? LanguageKeys.Commands.Moderation.ModerationOutputWithReason : LanguageKeys.Commands.Moderation.ModerationOutput,
				{ count: 1, range: unwarnLog.caseId, users: [`\`${getTag(user)}\``], reason: originalReason }
			);

			return send(message, content) as Promise<GuildMessage>;
		}

		return null;
	}

	public async handle(message: GuildMessage, context: HandledCommandContext<null> & { modlog: ModerationEntity }) {
		return getSecurity(message.guild).actions.unWarning(
			{
				userId: context.target.id,
				moderatorId: message.author.id,
				reason: context.reason,
				imageURL: getImage(message)
			},
			context.modlog.caseId,
			await this.getTargetDM(message, context.args, context.target)
		);
	}
}
