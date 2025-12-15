// src/napcat/index.ts
import { NCWebsocket } from 'node-napcat-ts';
const NAPCAT_CONFIG = {
  baseUrl: 'ws://127.0.0.1:3001',
  accessToken: 'zjl20031211hahaha',
  throwPromise: true,
};

export const napcat = new NCWebsocket(NAPCAT_CONFIG, true);

export type { NCWebsocket } from 'node-napcat-ts';