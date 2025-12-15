import groupMsgHandler from './handler/GroupMsgHandler'

import { napcat } from './napcat/napcat'
napcat.on('message.group', groupMsgHandler)
napcat.connect()