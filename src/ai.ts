import { Ollama } from 'ollama';

export default async function ai(
  api?: string | null,
  model?: string | null,
  content?: string | null,
  prompt?: string | null
) {
  const ollama = new Ollama({ host: api ?? 'http://127.0.0.1:11434' });

  const response = await ollama.chat({
    model: model ?? 'qwen2:latest',
    messages: [
      {
        role: 'system',
        content:
          prompt ??
          '你是一个摘要生成工具，你需要解释我发送给你的内容，不要换行，不要超过200字，只需要介绍文章的内容，不需要提出建议和缺少的东西。请用中文回答，输出的内容开头为“这篇文章介绍了”'
      },
      { role: 'user', content: content ?? '' }
    ]
  });

  return response.message.content;
}
