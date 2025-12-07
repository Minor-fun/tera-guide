[English](README.md) | [简体中文](README.zh-CN.md)

# tera-guide

<div align="center">

<table>
  <tr>
    <td align="center" width="999">
      <h3> 想要有更多语言的支持？ / Help us translate</h3>
      <p>本项目集成了 i18n 支持，我们需要您的帮助来完善各语言版本！</p>
      <a href="https://crowdin.com/project/tera-guide">
        <img src="https://badges.awesome-crowdin.com/translation-17437738-853034.png" alt="Translation status" />
      </a>
      <br/><br/>
      <a href="https://crowdin.com/project/tera-guide">
        <b>点击此处，前往翻译成你的语言</b>
      </a>
    </td>
  </tr>
</table>

</div>

---

## 国际化 (i18n) 与社区翻译支持

本项目现已引入了自动化的翻译流程，支持按副本 ID 加载多语言配置文件。

这意味着您可以直接参与到指南的翻译工作中！
*   **无需编程知识**：您不需要修改代码或 JSON 文件，只需在网页上输入翻译即可。
*   **自动同步**：您在 Crowdin 上提交的翻译会自动同步并推送到仓库中。
*   **实时更新**：帮助我们将副本攻略翻译成更多语言，造福全球玩家。

点击上方的徽章或链接即可开始贡献翻译！

---

## 在线 TTS (Online TTS)

### 在线 TTS 语音演示

#### Barbara (英语)
https://github.com/user-attachments/assets/6bad194a-6230-400c-9ae2-368a3afd11ae

#### Kamisato Ayaka (英语)
https://github.com/user-attachments/assets/093d4199-6812-4c0f-ab64-b1d4bf4cfed1

#### 芭芭拉 (中文)
https://github.com/user-attachments/assets/f8be6b3e-d856-42f1-8659-f17832ebc47b

### 如何使用在线 TTS

#### 1. 在线 TTS
1.  **注册并获取 API Key**：访问 [https://dev.espai.fun](https://dev.espai.fun?invite_code=4c5bf7b78649494689dbc446e43db7f1)，完成注册并复制您的 API Key。
2.  **配置 API Key**：在游戏内的代理（Proxy/Toolbox）命令窗口中输入：`guide onlinetts apikey 您的API_KEY`
3.  **添加并设置音色**：示例：
    *   **Kamisato (英语)**: `guide onlinetts addvoice Kamisato cosyvoice-v2-espai-353f83ac94d8461a954b86cbd67fc6d8`
    *   **Barbara (英语)**: `guide onlinetts addvoice Barbara cosyvoice-v2-espai-2e9378e1d85144a295d9c6998a4bb28a`
    *   **芭芭拉 (中文)**: `guide onlinetts addvoice 芭芭拉 cosyvoice-v2-espai-0c241e723b104792a3f88822049e86d6`

> **警告**：添加英语语音时，自定义的 `<VoiceName>` (语音名称) 必须仅包含英文字符，否则会导致数字发音错误。
>
> **提示**：`addvoice` 命令的格式为 `guide onlinetts addvoice <语音名称> <语音ID>`。您可以自定义 `<语音名称>` 以便记忆和使用。

---

## 依赖项

本模块依赖于特定版本的核心库。

*   **tera-guide-core** - **[https://github.com/Minor-fun/tera-guide-core](https://github.com/Minor-fun/tera-guide-core)**

*   **library** - https://github.com/tera-private-toolbox/library

---
---

## 命令 / Commands
Toolbox(/8) | 命令描述
--- | ---
**guide** | 开启/关闭模块
**guide&nbsp;gui** | 显示模块图形界面 (GUI)
**guide&nbsp;voice**<br>(默认: 关闭) | 开启/关闭文字转语音 (TTS) 通知，语速可通过 **guide `1`~`10`** 设置
**guide&nbsp;lNotice**<br>(默认: 关闭) | 开启/关闭发送通知到聊天频道 "Notice"（代替屏幕中央显示）
**guide&nbsp;gNotice**<br>(默认: 关闭) | 开启/关闭发送通知到队伍聊天频道
**guide&nbsp;`auto`/`en`/`ru`**<br>(默认: auto) | 设置指南语言
**guide&nbsp;`1`~`10`**<br>(默认: 2) | 设置 TTS 朗读语速
**guide&nbsp;spawnObject**<br>(默认: 开启) | 开启/关闭生成标记物体（光柱/花朵等）
**guide&nbsp;stream**<br>(默认: 关闭) | 开启/关闭主播模式（隐藏所有屏幕通知和标记物体，但 TTS 语音仍会播放）
**guide&nbsp;dungeons** | 列出所有支持的副本及其 ID
**guide&nbsp;verbose&nbsp;`id`**<br>(默认: 全部开启) | 开启/关闭指定 `id` 副本的通知
**guide&nbsp;spawnObject&nbsp;`id`**<br>(默认: 全部开启) | 开启/关闭指定 `id` 副本的标记物体生成
**guide&nbsp;help** | 列出支持的命令

## 支持的副本 / Supported dungeons

ID | Dungeon name (English) | 副本名称 (中文)
--- | --- | ---
2800 | Dreadspire VALKYTEQ | 残酷幻影之塔VALKYTEQ
2802 | Aesir's End (Hard) (Arborea Reborn) | Aesir's End (Hard) (Arborea Reborn)
2803 | Aesir's End (Arborea Reborn) | Aesir's End (Arborea Reborn)
2804 | Phantom hideout (Arborea Reborn) | Phantom hideout (Arborea Reborn)
2809 | The Observatory (Arborea Reborn) | 观星神殿 (Arborea Reborn服)
2811 | Sea of Honor (Arborea Reborn) | 金麟號 (Arborea Reborn 服)
2813 | Beach River Outpost (Arborea Reborn) | Beach River Outpost (Arborea Reborn)
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
3105 | Fusion Laboratory | 核心融合所 (初阶)
3106 | Killing Grounds | 杀戮场
3107 | Corrupted RK-9 Kennel | 腐化的RK-9机库
3111 | The Veil (Darkan) | 面纱（黑暗）menma服
3123 | Akalath Quarantine (Hard) | 贝尔亚克城堡秘密地区(困难)
3126 | Corrupted Skynest (Hard) | 不灭凯尔赛克隐藏地(困难)
3201 | Gossamer Vault (Hard) | 灿烂的费尔奎娜巢穴(困难)
3202 | Draakon Arena (Hard) | 愤怒的司令官修练场(困难)
3203 | Forbidden Arena [Nightmare Undying Warlord] | 狂气竞技场 [不灭的斗神]
3204 | Catalepticon (Hard) | 残酷的路克米亚幻梦(困难)
3205 | Cursed Fusion Laboratory | 核心融合所 (高阶)
3206 | Crimson Killing Grounds | 深红杀戮场
7011 | Shadow of the Gutrends (Guardian) | 剥皮者与黑影（守护者）
7015 | Escape from Balder's Refuge (Guardian) | 解救巴尔德庇护所（守护者）
9027 | Manaya's Core (Hard) | 珊德拉马奈伊亚(高阶)
9034 | Dreadspire | 残酷幻影之塔
9044 | Bahaar's Sanctum | 巴哈勒神殿
9048 | Sanctum of the Fire God (Agaia Online) | 火神的圣所 (Agaia Online)
9050 | Rift's Edge (Hard) | 贪婪的卡舒帕露峡谷
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
9750 | Rift's Edge | 卡舒帕露峡谷
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
9985 | Sanctuary's Ruins (Hard) | 塌陷的贝里克神殿
9994 | Thaumetal Refinery (Hard) | 阿尔法赛伊洛斯研究基地

## 通知设置 / Notices settings

* **屏幕显示**（底部）和 **聊天框通知**：如果 **lNotice** 参数为 *on (开启)*。
  ![](https://i.imgur.com/BPlK58M.png)

* 当 **gNotice** 参数为 *on (开启)* 时，通知也会发送到 **队伍聊天频道**。

* **屏幕顶部消息**：如果 **lNotice** 参数为 *off (关闭)*（默认设置）。
  ![](https://i.imgur.com/r2bb8Wc.png)
  您可以使用命令或 GUI 设置此类通知的颜色（也会更改 Toolbox 聊天中的颜色）。

* 当 **主播模式 (Streamer Mode)** 开启时（**stream** 参数），所有文本通知仅发送到 Toolbox(/8) 聊天频道，屏幕上不会显示，但 TTS 语音仍会播放。

* 要禁用或启用 TTS 语音通知，请使用 **guide voice** 命令。

## 模块 GUI 界面

*   输入 **guide gui** 命令时，会显示模块的图形设置界面，允许您更改基本设置。
    ![](https://i.imgur.com/nUKjQHn.png)
    ![](https://i.imgur.com/7dHs1g0.png)


## 鸣谢 / Credits
- **[Kasea](https://github.com/Kasea)** - Tera-Guide 模块的原始开发者
- **[michengs](https://github.com/michengs)** - 大多数指南和模块核心代码的作者
- **[hsdn](https://github.com/hsdn)** - 长期维护guide更新的作者
- **[ZC](https://github.com/tera-mod)** - 提供了用于绘制攻击区域和机制的坐标
- **[Kuroine](https://github.com/Kuroine)** - DA 指南的基础代码作者
- **[Multarix](https://github.com/Multarix)** - RR 指南作者，并对英语翻译进行了修改
- **[Owyn](https://github.com/Owyn)** - RK-9, AA 和 GV 的优秀指南开发者，使用了其代码
- **[Emilia](https://github.com/emilia-s2)** - 葡萄牙语翻译和守护者指南的作者
- **[Loliconera](https://github.com/Loliconera)** - 西班牙语翻译作者
- **[ITunk](https://github.com/GrafNikola)** - 初始俄语翻译作者