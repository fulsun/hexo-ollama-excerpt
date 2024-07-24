# 安装 ollama

去 ollama 官网下载
[https://ollama.com/](https://ollama.com/)

# 下载模型

```sh
ollama pull qwen2:latest
```

可以使用其他模型

[ollama 模型列表](https://ollama.com/library)

# 安装 hexo-ollama-excerpt

```sh
yarn add hexo-ollama-excerpt
```

# 在 config.yaml 配置

```yaml
ollamaexcerpt:
  default_enable: true #是否默认开启摘要
  api: http://127.0.0.1:11434 #ollama api地址
  model: qwen2:latest # 使用的模型
  prompt: '你是一个摘要生成工具，你需要解释我发送给你的内容，不要换行，不要超过200字，只需要介绍文章的内容，不需要提出建议和缺少的东西。请用中文回答，输出的内容开头为“这篇文章介绍了”' #提示词
  ignoreEl: ['table', 'pre', 'figure'] # 要排除的 content 内容
```
