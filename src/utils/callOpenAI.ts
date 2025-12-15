import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
// 从环境变量中获取API密钥
const ARK_API_KEY = process.env.ARK_API_KEY;
async function callArkChatApi(prompt: string): Promise<string> {
    try {
        // 1. 定义请求配置
        const config = {
            // 请求URL
            url: 'https://ark.cn-beijing.volces.com/api/v3/chat/completions',
            // 请求方法
            method: 'POST',
            // 请求头
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ARK_API_KEY}` // 拼接Bearer和API密钥
            },
            // 请求体
            data: {
                "model": "doubao-seed-1-6-lite-251015",
                "messages": [
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
                "max_tokens": 256,
                "reasoning_effort": "low",
                "temperature": 0.8
            }
        };

        // 2. 发送请求并获取响应
        const response = await axios(config);
        return response.data.choices[0].message.content;

    } catch (error: any) {
        throw error; // 按需抛出错误，让上层处理
    }
}
export { callArkChatApi };
