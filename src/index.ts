import strip from './strip.js';
import ai from './ai.js';
import fs from 'hexo-fs';
import fm from 'hexo-front-matter';

const config = hexo.config.ollamaexcerpt;
const log = hexo.log;
hexo.extend.filter.register('after_post_render', async function (data) {
  if (config.default_enable) data.aiexcerpt = data.aiexcerpt === false ? false : true;
  if (!data.aiexcerpt || data.excerpt) return data;
  const content = strip(data.content, config.ignoreEl);
  log.info(`摘要 ${data.title} 完成`);
  const path = hexo.source_dir + data.source;
  const frontMatter = fm.parse(await fs.readFile(path));

  frontMatter.excerpt = data.excerpt = await ai(config.api, config.model, content, config.prompt);
  await fs.writeFile(path, `---\n${fm.stringify(frontMatter)}`);
  return data;
});
