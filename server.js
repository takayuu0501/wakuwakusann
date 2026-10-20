import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const server = createServer(app);

// 静的ファイルの配信設定
app.use(express.static(join(__dirname, 'dist')));

// どのルートにアクセスしてもトップページを返す設定
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Ultraviolet frontend listening on port ${port}`);
});
