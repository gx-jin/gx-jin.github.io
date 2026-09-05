# Personal Homepage | 个人主页

🔗 **Live Site**: https://www.mpa-garching.mpg.de/~gxjin  / https://gx-jin.github.io/

<!-- ---

## 📝 How to Add Content | 如何添加内容

All content is managed in `data/content.json`. Edit this file and refresh your browser!  
所有内容都在 `data/content.json` 文件中管理。编辑此文件后刷新浏览器即可!

---

### 📚 Add Publication | 添加论文

In `data/content.json`, find `publications` array and add:  
在 `data/content.json` 中找到 `publications` 数组并添加:

```json
{
  "title": "Paper Title",
  "year": "2025",
  "journal": "Journal Name Vol, Page",
  "authors": "<strong>Gaoxiang Jin</strong>, Co-author, et al.",
  "pdfUrl": "https://arxiv.org/pdf/xxxx.xxxxx",
  "pdfSize": "15MB"
}
```

**Note**: `pdfUrl` and `pdfSize` are optional.  
**注意**: `pdfUrl` 和 `pdfSize` 是可选的。

---

### 🖼️ Add Photo | 添加照片

In the `gallery` array:  
在 `gallery` 数组中:

```json
{
  "title": "München 慕尼黑",
  "category": "travel",
  "image": "./images/gallery/munich.webp"
}
```

**Categories | 分类**: `travel`, `science`, `art`

---

### 🎓 Add Education | 添加教育经历

In the `education` array:  
在 `education` 数组中:

```json
{
  "institution": "University Name",
  "period": "2022 — now",
  "location": "City, Country",
  "degree": "PhD, Field",
  "thesis": "Thesis: Title"
}
```

**Note**: `thesis` is optional.  
**注意**: `thesis` 是可选的。

---

### 🔭 Add Telescope Time | 添加望远镜观测时间

In the `telescopes` array:  
在 `telescopes` 数组中:

```json
{
  "name": "Telescope Name",
  "image": "./images/telescope.jpg",
  "role": "PI",
  "time": "4 nights",
  "year": "2022",
  "type": "optical IFU",
  "instrument": "Instrument Name"
}
```

**Role | 角色**: `PI` (Principal Investigator) or `CoI` (Co-Investigator)

---

### 🎤 Add Conference | 添加会议

In the `conferences` array:  
在 `conferences` 数组中:

```json
{
  "title": "Conference Name",
  "date": "2025.11",
  "location": "Munich, Germany"
}
```

---

### 💻 Add Programming Tool | 添加编程工具

In the `programming` array:  
在 `programming` 数组中:

```json
{
  "name": "Python",
  "url": "https://www.python.org",
  "logo": "./images/python.svg",
  "alt": "Python",
  "class": ""
}
```

**Note**: `class` is optional (e.g., `"filter-green"` for special styling).  
**注意**: `class` 是可选的(如 `"filter-green"` 用于特殊样式)。

---

### 🔬 Add Research Project | 添加研究项目

In the `research` array:  
在 `research` 数组中:

```json
{
  "image": "./images/project.jpg",
  "category": "Galaxy Evolution",
  "date": "2025A",
  "title": "Research Title",
  "description": "Detailed description of the research..."
}
```

---

## ⚠️ Important Notes | 重要提示

### JSON Format Rules | JSON 格式规则

1. **Commas | 逗号**: Each item needs a comma, except the last one  
   每一项后需要逗号,最后一项除外

2. **Quotes | 引号**: Use double quotes `"` for all keys and strings  
   所有键和字符串值必须用双引号 `"`

3. **HTML Tags | HTML标签**: Can use `<strong>`, `<em>`, etc.  
   可以使用 `<strong>`, `<em>` 等标签

### Example | 示例:

```json
{
  "title": "First Item",
  "year": "2025"
},
{
  "title": "Second Item",
  "year": "2024"
}
```

### Validate JSON | 验证JSON

Use online tools to check your JSON:  
使用在线工具检查JSON格式:
- https://jsonlint.com/

---

## 🚀 Local Testing | 本地调试

**⚠️ Important**: You MUST use a local server to view the website. Double-clicking `index.html` will NOT work!  
**⚠️ 重要**: 必须使用本地服务器才能查看网页。直接双击 `index.html` 无法正常显示!

### Method 1: Python HTTP Server | 方法1: Python服务器

```bash
# Navigate to project directory | 进入项目目录
cd d:\OneDrive\Code\public_html

# Start server on port 8000 | 在8000端口启动服务器
python -m http.server 8000

# Open browser and visit | 打开浏览器访问:
# http://localhost:8000
```

**Check if it works | 检查是否成功:**
- Press `F12` to open browser console | 按 `F12` 打开浏览器控制台
- You should see: `✅ 内容加载完成` in the Console tab | 应该在Console标签看到这条消息
- All content (publications, photos, etc.) should be visible | 所有内容(论文、照片等)应该可见

**Stop server | 停止服务器:**
- Press `Ctrl + C` in the terminal | 在终端按 `Ctrl + C`

---

### Method 2: VS Code Live Server | 方法2: VS Code Live Server

1. Install extension | 安装扩展:
   - Search for **"Live Server"** in VS Code Extensions | 在VS Code扩展中搜索 **"Live Server"**
   - Install it | 安装

2. Start server | 启动服务器:
   - Right-click `index.html` | 右键点击 `index.html`
   - Select **"Open with Live Server"** | 选择 **"Open with Live Server"**
   - Browser will open automatically | 浏览器会自动打开

3. Auto-refresh | 自动刷新:
   - Edits are reflected immediately | 修改会立即显示
   - No need to manually refresh | 无需手动刷新

---

### Method 3: Node.js http-server | 方法3: Node.js服务器

```bash
# Install globally (one time only) | 全局安装(仅需一次)
npm install -g http-server

# Start server | 启动服务器
http-server -p 8000

# Visit | 访问: http://localhost:8000
```

---

### 🔍 Troubleshooting | 故障排除

**Problem: Content not showing | 问题:内容不显示**

1. Check browser console (F12) | 检查浏览器控制台(F12)
2. Look for errors in Console tab | 查看Console标签中的错误
3. Common issues | 常见问题:
   - ❌ `Failed to fetch` → Not using a server | 没有使用服务器
   - ❌ `JSON parse error` → Invalid JSON format in `content.json` | JSON格式错误
   - ❌ `404 Not Found` → File path incorrect | 文件路径错误

**Solution | 解决方案:**
- Always use a local server (Method 1, 2, or 3) | 始终使用本地服务器
- Validate JSON at https://jsonlint.com/ | 在线验证JSON格式
- Check file paths in `content.json` | 检查文件路径

---

## 📱 Preview Tool | 预览工具

Use `preview.html` to check your data:  
使用 `preview.html` 检查数据:

```bash
# Start server | 启动服务器
python -m http.server 8000

# Visit preview page | 访问预览页面:
# http://localhost:8000/preview.html
```

This shows all your content in a simple format for verification.  
这会以简单格式显示所有内容,便于验证。

---

## 图片压缩 notebook 用法

在 `python` 文件夹下的 notebook（如 `compress_gallery.ipynb`）中，包含批量压缩图片的 Python 代码。适用于 `images/gallery` 目录下的 JPG/PNG/WEBP 图片。

### 使用方法

1. 打开 notebook，运行所有代码单元。
2. 默认会遍历 `images/gallery` 文件夹下所有图片，并压缩到最大 1920x1080，质量 70。
3. 压缩后图片会覆盖原文件，建议提前备份。

### 示例代码

```python
from PIL import Image
import os

folder = './images/gallery'
for fname in os.listdir(folder):
    if fname.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        path = os.path.join(folder, fname)
        img = Image.open(path)
        img.thumbnail((1920, 1080))
        img.save(path, quality=70, optimize=True)
```

如需调整压缩质量或尺寸，请修改 `quality` 和 `thumbnail` 参数。

---

## 批量生成缩略图 / Batch Generate Thumbnails

你可以使用 `python/image_compress.ipynb` 中的 `generate_thumbnails` 函数，批量为 `images/gallery` 文件夹下的图片生成缩略图，适合网页快速预览。

You can use the `generate_thumbnails` function in `python/image_compress.ipynb` to batch generate thumbnails for images in the `images/gallery` folder, suitable for fast web preview.

### 用法说明 / Usage

1. 运行 notebook 中的 `generate_thumbnails` 代码单元。
2. 所有支持格式（JPEG/PNG/WEBP/BMP）会自动生成最大尺寸为 400x225 的缩略图，保留原比例。
3. 不支持压缩的格式会直接复制到目标文件夹。
4. 已存在的缩略图会自动跳过，不会重复生成。

1. Run the `generate_thumbnails` code cell in the notebook.
2. All supported formats (JPEG/PNG/WEBP/BMP) will generate thumbnails with max size 400x225, keeping aspect ratio.
3. Unsupported formats will be copied directly to the target folder.
4. Existing thumbnails will be skipped automatically.

### 示例代码 / Example Code

```python
import shutil

def generate_thumbnails(src_folder, dst_folder, thumb_size=(400, 225)):
    """
    Batch generate thumbnails for images in src_folder, keeping aspect ratio,
    with max size thumb_size. Unsupported formats are copied directly.
    Skip if thumbnail already exists.
    """
    os.makedirs(dst_folder, exist_ok=True)
    count = 0
    skipped = 0
    for fname in os.listdir(src_folder):
        src_path = os.path.join(src_folder, fname)
        dst_path = os.path.join(dst_folder, fname)
        if not os.path.isfile(src_path):
            continue
        if os.path.exists(dst_path):
            skipped += 1
            continue
        try:
            with Image.open(src_path) as img:
                img_format = img.format
                if img_format in ['JPEG', 'PNG', 'WEBP', 'BMP']:
                    img.thumbnail(thumb_size)
                    img.save(dst_path, format=img_format, quality=80, optimize=True)
                else:
                    shutil.copy2(src_path, dst_path)
                count += 1
        except Exception as e:
            print(f'Skipped {src_path}: {e}')
    print(f'Generated {count} thumbnails in {dst_folder}, {skipped} files skipped (already exist).')

# Example usage
generate_thumbnails('../images/gallery/', '../images/gallery_thumbs/')
```

--- -->
