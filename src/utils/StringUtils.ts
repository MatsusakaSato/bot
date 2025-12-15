/**
 * 从以空格分隔的字符串中随机选取一个非空元素返回
 * @param str 以空格分隔的字符串（例如："苹果 香蕉 橙子"）
 * @returns 随机选中的元素，若输入无效则返回空字符串
 */
function randomPickFromSpaceStr(str: string): string {
    // 1. 去除首尾空格，再按任意数量空格分割（避免多个连续空格导致空元素）
    const tokens = str.trim().split(/\s+/);

    // 2. 处理边界情况：分割后无有效元素时返回空字符串
    if (tokens.length === 0 || (tokens.length === 1 && tokens[0] === '')) {
        return '';
    }

    // 3. 计算有效随机索引（1 到 tokens.length - 1）
    const resultIndex = Math.floor(Math.random() * (tokens.length - 1)) + 1;

    // 4. 返回随机选中的元素
    return tokens[resultIndex];
}
export { randomPickFromSpaceStr };