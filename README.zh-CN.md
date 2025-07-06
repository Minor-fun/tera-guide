[English](README.md) | [简体中文](README.zh-CN.md)

# tera-guide

## 1. 在线TTS功能介绍与依赖安装

要体验完整的 **在线TTS** 及 **离线语音包** 功能，您必须使用特定版本的核心模块。

#### 安装步骤
1.  **删除旧版**: 如果您的 `mods` 文件夹中存在 `tera-guide-core`，请先删除它。
2.  **下载新版**: 从 [Minor-fun/tera-guide-core](https://github.com/Minor-fun/tera-guide-core/archive/refs/heads/master.zip) 下载最新的核心模块。
3.  **解压安装**: 将下载的压缩包解压，并将文件夹重命名为 `tera-guide-core`，然后放入您的 `mods` 文件夹中。

> **注意**: 必须使用此特定版本的 `tera-guide-core`，否则在线TTS相关功能将无法正常工作。

---

## 2. 在线TTS示范音色试听

#### 芭芭拉 (英文)
https://github.com/user-attachments/assets/6bad194a-6230-400c-9ae2-368a3afd11ae

#### 神里绫华 (英文)
https://github.com/user-attachments/assets/093d4199-6812-4c0f-ab64-b1d4bf4cfed1

#### 芭芭拉 (中文)
https://github.com/user-attachments/assets/f8be6b3e-d856-42f1-8659-f17832ebc47b

---

## 3. 在线TTS使用方法

### 在线TTS (需要联网)

#### 第一步：注册并获取API密钥
1. 访问注册地址：[https://dev.espai.fun](https://dev.espai.fun?invite_code=4c5bf7b78649494689dbc446e43db7f1)
2. 完成注册并创建超体后，在左下角找到并复制您的API Key。

#### 第二步：配置API密钥
在游戏内的代理命令窗口输入：
```
guide onlinetts apikey 你的API密钥
```

#### 第三步：添加并设置语音音色
下面是一些预设的音色示例，您可以根据需要添加：

**Kamisato (英文)**
```
guide onlinetts addvoice Kamisato cosyvoice-v2-espai-353f83ac94d8461a954b86cbd67fc6d8
```

**Barbara (英文)**
```
guide onlinetts addvoice Barbara cosyvoice-v2-espai-2e9378e1d85144a295d9c6998a4bb28a
```

**芭芭拉 (中文)**
```
guide onlinetts addvoice 芭芭拉 cosyvoice-v2-espai-0c241e723b104792a3f88822049e86d6
```

> **警告**: 添加英文音色时，自定义的 `<语音名称>` **必须**使用全英文，否则会造成数字读音错误。

> **提示**: `addvoice` 命令的格式为 `guide onlinetts addvoice <语音名称> <语音ID>`。您可以自定义 `<语音名称>`，方便您记忆和使用。

### 离线语音包 (无需联网)


#### 第一步：下载与解压
*   从 Releases 页面下载音色离线语音包 `Barbara.rar`。
*   将其解压到 `tera-guide-core` 模块的根目录。解压后，确保 `tts-cache` 文件夹位于 `tera-guide-core` 内。
*   目录结构应如下:
    ```
    tera-guide-core/
    ├── tts-cache/
    │   └── Barbara/
    └── ... (其他文件)
    ```

#### 第二步：游戏内配置
*   在游戏中输入以下命令。**注意：** 声音名称必须为 `Barbara`，而API密钥和声音ID可任意填写。
*   设置一个任意的API密钥:
    ```
    guide onlinetts apikey any-key
    ```
*   添加 `Barbara` 语音 (ID可任意填写):
    ```
    guide onlinetts addvoice Barbara any-id
    ```

配置完成后，使用guide gui命令打开guide界面设置选择 `Barbara`音色，模块将优先使用本地缓存的语音文件。


---

## 4. 命令与配置

### 命令列表
Toolbox(/8) | 命令说明
--- | ---
**guide** | 开启/关闭模块
**guide&nbsp;gui** | 显示模块图形用户界面
**guide&nbsp;voice**<br>(默认: 关闭) | 开启/关闭语音（TTS）通知，语速通过 **guide `1`~`10`** 命令设置
**guide&nbsp;lNotice**<br>(默认: 关闭) | 将通知发送到"通知"聊天频道（替代屏幕消息）
**guide&nbsp;gNotice**<br>(默认: 关闭) | 将通知发送到队伍聊天频道
**guide&nbsp;`auto`/`en`/`ru`/`zh`**<br>(默认: auto) | 设置指南语言
**guide&nbsp;`1`~`10`**<br>(默认: 2) | 设置语音（TTS）语速
**guide&nbsp;spawnObject**<br>(默认: 开启) | 开启/关闭标记物生成
**guide&nbsp;stream**<br>(默认: 关闭) | 开启/关闭主播模式（隐藏所有通知和对象，但会播放语音通知）
**guide&nbsp;dungeons** | 列出所有支持的地下城及其ID
**guide&nbsp;verbose&nbsp;`id`**<br>(默认: 全部开启) | 开启/关闭指定ID地下城的所有通知
**guide&nbsp;spawnObject&nbsp;`id`**<br>(默认: 全部开启) | 开启/关闭指定ID地下城的标记物生成
**guide&nbsp;help** | 列出支持的命令
**guide&nbsp;onlinetts** | 启用/禁用在线TTS功能
**guide&nbsp;onlinetts&nbsp;apikey&nbsp;`<密钥>`** | 设置API密钥
**guide&nbsp;onlinetts&nbsp;voice** | 显示当前默认语音和所有可用语音及其ID
**guide&nbsp;onlinetts&nbsp;voice&nbsp;`<语音名称>`** | 设置默认语音
**guide&nbsp;onlinetts&nbsp;addvoice&nbsp;`<语音名称>`&nbsp;`<语音ID>`** | 添加/修改语音
**guide&nbsp;onlinetts&nbsp;deletevoice&nbsp;`<语音名称>`** | 删除语音
**guide&nbsp;onlinetts&nbsp;rate&nbsp;`<速率值>`** | 设置语音速率（范围：0.5-5，默认：1）
**guide&nbsp;onlinetts&nbsp;test&nbsp;`[文本]`&nbsp;`[语音名称]`** | 测试在线TTS功能

### 通知设置

*   屏幕下方和聊天通知，如果 **lNotice** 参数为 *开启*。

    ![](https://i.imgur.com/BPlK58M.png)

*   当 **gNotice** 参数为 *开启* 时，通知也将发送到队伍聊天频道。

*   屏幕上方的消息，如果 **lNotice** 参数为 *关闭* (默认)。

    ![](https://i.imgur.com/r2bb8Wc.png)
    
    您可以使用命令或图形用户界面为此类通知设置颜色（也会更改Toolbox聊天中的颜色）。

*   当主播模式为 *开启* (**stream** 参数)时，所有文本通知仅发送到Toolbox(/8)聊天频道，但会播放语音通知。

*   要禁用或启用语音通知，请使用 **guide voice** 命令。

### 图形用户界面

*   当您输入 **guide gui** 命令时，会显示模块的图形用户界面，允许您更改基本设置。
    ![](https://i.imgur.com/IwtZvuY.png)
    ![](https://i.imgur.com/PRhCjJU.png)
---

## 5. 支持的地下城

id | 地下城名称 (英文) | 地下城名称 (中文)
--- | --- | ---
2800 | Dreadspire VALKYTEQ | 残酷幻影之塔VALKYTEQ
3023 | Akalath Quarantine | 贝尔亚克城堡秘密地区
3026 | Corrupted Skynest | 凯尔赛克隐藏地
3027 | Forbidden Arena [Hagufna] | 狂气竞技场 [不灭的斗士]
3030 | Commander's Residence | 军团长的处所
3032 | Akalath Quarantine (Guide) | 贝尔亚克城堡秘密地区(导览)
3034 | Rampaging RK-9 Kennel | 暴走的RK-9机库
3036 | Sky Cruiser (Hard) | 炽热艾尔凯拉斯号
3037 | Bahaar's Sanctum (Guide) | 巴哈勒神殿(导览)
3101 | Gossamer Vault | 费尔奎娜巢穴
3102 | Draakon Arena | 司令官修练场
3103 | Forbidden Arena [Undying Warlord] | 狂气竞技场 [永恒的斗神]
3104 | Catalepticon | 路克米亚的幻梦
3106 | Killing Grounds | 杀戮场
3107 | Corrupted RK-9 Kennel | 腐化的RK-9机库
3111 | The Veil (Darkan) | 面纱（黑暗）menma顶本
3123 | Akalath Quarantine (Hard) | 贝尔亚克城堡秘密地区(困难)
3126 | Corrupted Skynest (Hard) | 不灭凯尔赛克隐藏地(困难)
3201 | Gossamer Vault (Hard) | 灿烂的费尔奎娜巢穴(困难)
3202 | Draakon Arena (Hard) | 愤怒的司令官修练场(困难)
3203 | Forbidden Arena [Nightmare Undying Warlord] | 狂气竞技场 [不灭的斗神]
3204 | Catalepticon (Hard) | 残酷的路克米亚幻梦(困难)
3206 | Crimson Killing Grounds | 深红杀戮场
7011 | Shadow of the Gutrends (Guardian) | 剥皮者与黑影（守护者）
7015 | Escape from Balder's Refuge (Guardian) | 解救巴尔德庇护所（守护者）
9027 | Manaya's Core (Hard) | 珊德拉马奈伊亚(高阶)
9034 | Dreadspire | 残酷幻影之塔
9044 | Bahaar's Sanctum | 巴哈勒神殿
9050 | Rift's Edge (Hard) (10-Person) | 贪婪的卡舒帕露峡谷
9053 | Kezzel's Gorge | 巨人丛林(五人）
9054 | Bathysmal Rise (Hard) | 邪恶的奥露卡神殿
9056 | Timescape (Hard) | 扭曲的法罗纳时空
9057 | Akeron's Inferno (Hard) | 傲慢的阿凯伦炎狱
9066 | Demon's Wheel | 岱魔鲁斯的轮盘
9067 | Demokron Factory (Hard) | 残暴费勒诺的实验室
9068 | Shadow Sanguinary (Hard) | 暴君杜利温的安息地
9070 | Manglemire | 吹牛王塔勒斯基的游乐场
9710 | Broken Prison | 扭曲的拉坎祭坛
9716 | Sky Cruiser Endeavor | 艾尔凯拉斯号
9720 | Antaroth's Abyss | 安塔洛斯深渊
9735 | RK-9 Kennel | RK-9 机库
9739 | Red Refuge | 革命团总部
9750 | Rift's Edge (10-Person) | 卡舒帕露峡谷
9754 | Bathysmal Rise | 奥露卡神殿
9756 | Timescape | 法罗纳时空
9757 | Akeron's Inferno | 阿凯伦炎狱
9759 | Forsaken Island (Hard) | 伯恩斯坦恶灵岛 (高阶)
9768 | Shadow Sanguinary | 杜利温的安息地
9770 | Ruinous Manor | 拉坎里斯的废墟
9780 | Velik's Hold (5-Person) | 贝利卡地下关口
9781 | Velik's Sanctuary | 贝里克神殿
9782 | Grotto of Lost Souls | 里安的地下殿堂
9783 | Dark Reach Citadel | 泰内布利斯城堡
9794 | Thaumetal Refinery | 赛伊洛斯研究基地
9916 | Sky Cruiser Endeavor (Hard) | 暴风的艾尔凯拉斯号
9920 | Antaroth's Abyss (Hard) | 空洞的安塔洛斯深渊
9935 | RK-9 Kennel (Hard) | 终极RK-9 机库
9939 | Red Refuge (Hard) | 森严的革命团总部
9970 | Ruinous Manor (Hard) | 超越的拉坎里斯的废墟
9980 | Velik's Hold (Hard) | 倒塌的贝利卡地下关口
9981 | Velik's Sanctuary (Hard) | 塌陷的贝里克神殿
9982 | Grotto of Lost Souls (Hard) | 扭曲的里安地下殿堂
9983 | Dark Reach Citadel (Hard) | 漆黑的泰内布利斯城堡
9994 | Thaumetal Refinery (Hard) | 阿尔法赛伊洛斯研究基地

---

## 6. 其他信息与鸣谢

### 更多信息
*   英文guide开发者维基: https://github.com/hsdn/tera-guide-core/wiki
*   如英文guide有问题和建议，请在 Discord 中提出: https://discord.gg/sJzRJhtwWX

### 鸣谢
- **[Kasea](https://github.com/Kaseaa)** - Tera-Guide 模块的原始开发者
- **[michengs](https://github.com/michengs)** - 大多数指南和模块核心的基础代码作者
- **[ZC](https://github.com/tera-mod)** - 提供了渲染攻击区域和机制的坐标
- **[Kuroine](https://github.com/Kuroine)** - DA 指南基础代码的作者
- **[Multarix](https://github.com/Multarix)** - RR 指南的作者，并对英文翻译进行了修改
- **[Owyn](https://github.com/Owyn)** - RK-9, AA, 和 GV 的优秀指南开发者，其代码被使用
- **[Emilia](https://github.com/emilia-s2)** - 葡萄牙语翻译和守护者指南的作者
- **[Loliconera](https://github.com/Loliconera)** - 西班牙语翻译的作者
- **[ITunk](https://github.com/GrafNikola)** - 俄语初始翻译的作者