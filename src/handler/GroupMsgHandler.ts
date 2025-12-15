import { AllHandlers, Structs } from "node-napcat-ts";
import { randomPickFromSpaceStr } from "../utils/StringUtils";
import { napcat } from "../napcat/napcat";
type CommandHandler = (context: AllHandlers["message.group"]) => Promise<void>;
const COMMANDS: Record<string, CommandHandler> = {
    test: testCommandHandler,
    roll: rollCommandHandler,
};

/**
 * 群消息核心处理器：通用命令匹配逻辑
 * @param context 群消息上下文
 */
async function groupMsgHandler(context: AllHandlers["message.group"]): Promise<void> {
    try {
        if (context.raw_message === '测试') {
            await COMMANDS['test'](context);
            return;
        }
        if (context.raw_message.startsWith('roll')) {
            await COMMANDS['roll'](context);
            return;
        }
    } catch (error) {
        await context.quick_action([Structs.text(`${error}`)]);
    }
}

async function testCommandHandler(msg: AllHandlers["message.group"]) {
    await msg.quick_action([Structs.text('测试成功喵~')]);
}
async function rollCommandHandler(msg: AllHandlers["message.group"]) {
    const resp = randomPickFromSpaceStr(msg.raw_message)
    await napcat.send_group_msg({
        group_id: msg.group_id,
        message: [Structs.text(`${resp}`)]
    })
}
export default groupMsgHandler;