#!/usr/bin/env bash
# ============================================================
# 腾讯云 CloudBase 静态网站部署脚本（给学生用的傻瓜版）
# 用法：bash deploy.sh <你的CloudBase环境ID>
# 示例：bash deploy.sh my-env-1a2b3c4d5e
# ============================================================
set -e

ENV_ID="$1"
if [ -z "$ENV_ID" ]; then
  echo "❌ 用法：bash deploy.sh <CloudBase环境ID>"
  echo "   环境ID 在云开发控制台左上角可以看到，形如 my-app-1a2b3c4d5e"
  exit 1
fi

# 只上传网站需要的文件（不要 .git / node_modules / 后端设计文档）
echo "📦 开始部署到 CloudBase 环境：$ENV_ID"
./node_modules/.bin/tcb hosting deploy index.html login.html js css -e "$ENV_ID" --no-progress

echo ""
echo "✅ 部署完成！"
echo "🌐 打开云开发控制台 → 静态网站托管，就能看到你的网站访问域名了。"
echo "   把域名发给同学，就能在线学习了（登录/学习数据会自动存到数据库）。"
