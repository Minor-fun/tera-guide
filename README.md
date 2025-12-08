[English](README.md) | [简体中文](README.zh-CN.md)

# tera-guide

<div align="center">

<table>
  <tr>
    <td align="center" width="999">
      <h3> Want support for more languages? / Help us translate</h3>
      <p>This project integrates i18n support, and we need your help to improve various language versions!</p>
      <a href="https://crowdin.com/project/tera-guide">
        <img src="https://badges.awesome-crowdin.com/translation-17437738-853034.png" alt="Translation status" />
      </a>
      <br/><br/>
      <a href="https://crowdin.com/project/tera-guide">
        <b> Click here to translate into your language</b>
      </a>
    </td>
  </tr>
</table>

</div>

---

## Internationalization (i18n) & Community Translation Support

This project has introduced an automated translation workflow, supporting the loading of multi-language configuration files by dungeon ID.

This means you can directly participate in translating the guides!
*   **No programming knowledge required**: You don't need to modify code or JSON files; simply enter translations on the webpage.
*   **Automatic synchronization**: Translations submitted on Crowdin are automatically synced and pushed to the repository.
*   **Real-time updates**: Help us translate dungeon guides into more languages to benefit players worldwide.

Click the badge or link above to start contributing translations!

---

## Online TTS

### Online TTS Demo

#### Barbara (English)
https://github.com/user-attachments/assets/6bad194a-6230-400c-9ae2-368a3afd11ae

#### Kamisato Ayaka (English)
https://github.com/user-attachments/assets/093d4199-6812-4c0f-ab64-b1d4bf4cfed1

#### Barbara (Chinese)
https://github.com/user-attachments/assets/f8be6b3e-d856-42f1-8659-f17832ebc47b

### How to use Online TTS

#### 1. Online TTS
1.  **Register and get API Key**: Visit [https://dev.espai.fun](https://dev.espai.fun?invite_code=4c5bf7b78649494689dbc446e43db7f1), complete registration, and copy your API Key.
2.  **Configure API Key**: Enter the following in the in-game Proxy/Toolbox command window: `guide onlinetts apikey YOUR_API_KEY`
3.  **Add and set voice**: Examples:
    *   **Kamisato (English)**: `guide onlinetts addvoice Kamisato cosyvoice-v2-espai-353f83ac94d8461a954b86cbd67fc6d8`
    *   **Barbara (English)**: `guide onlinetts addvoice Barbara cosyvoice-v2-espai-2e9378e1d85144a295d9c6998a4bb28a`
    *   **Barbara (Chinese)**: `guide onlinetts addvoice 芭芭拉 cosyvoice-v2-espai-0c241e723b104792a3f88822049e86d6`

> **Warning**: When adding English voices, the custom `<VoiceName>` must contain only English characters; otherwise, number pronunciation will be incorrect.
>
> **Tip**: The `addvoice` command format is `guide onlinetts addvoice <VoiceName> <VoiceID>`. You can customize the `<VoiceName>` for easier memory and usage.

---

## Dependencies

This module depends on specific versions of core libraries.

*   **tera-guide-core** - **[https://github.com/Minor-fun/tera-guide-core](https://github.com/Minor-fun/tera-guide-core)**

*   **library** - https://github.com/tera-private-toolbox/library

---
---

## Commands
Toolbox(/8) | Description
--- | ---
**guide** | Enable/Disable module
**guide&nbsp;gui** | Show module GUI
**guide&nbsp;voice**<br>(Default: Off) | Enable/Disable Text-to-Speech (TTS) notifications. Speed can be set via **guide `1`~`10`**
**guide&nbsp;lNotice**<br>(Default: Off) | Enable/Disable sending notifications to chat channel "Notice" (instead of center screen)
**guide&nbsp;gNotice**<br>(Default: Off) | Enable/Disable sending notifications to Party chat channel
**guide&nbsp;`auto`/`en`/`ru`**<br>(Default: auto) | Set guide language
**guide&nbsp;`1`~`10`**<br>(Default: 2) | Set TTS speaking rate
**guide&nbsp;spawnObject**<br>(Default: On) | Enable/Disable spawning marker objects (beams/flowers etc.)
**guide&nbsp;stream**<br>(Default: Off) | Enable/Disable Streamer Mode (Hides all screen notifications and marker objects, but TTS still plays)
**guide&nbsp;dungeons** | List all supported dungeons and their IDs
**guide&nbsp;verbose&nbsp;`id`**<br>(Default: All On) | Enable/Disable notifications for specific `id`
**guide&nbsp;spawnObject&nbsp;`id`**<br>(Default: All On) | Enable/Disable marker object spawning for specific `id`
**guide&nbsp;help** | List supported commands

## Supported Dungeons

Here is the updated **Supported Dungeons** table with the Chinese column removed:

## Supported Dungeons

ID | Dungeon name (English)
--- | ---
2800 | Dreadspire VALKYTEQ
2802 | Aesir's End (Hard) (Arborea Reborn)
2803 | Aesir's End (Arborea Reborn)
2804 | Phantom hideout (Arborea Reborn)
2809 | The Observatory (Arborea Reborn)
2811 | Sea of Honor (Arborea Reborn)
2813 | Beach River Outpost (Arborea Reborn)
3023 | Akalath Quarantine
3026 | Corrupted Skynest
3027 | Forbidden Arena [Hagufna]
3030 | Commander's Residence
3032 | Akalath Quarantine (Guide)
3034 | Rampaging RK-9 Kennel
3036 | Sky Cruiser (Hard)
3037 | Bahaar's Sanctum (Guide)
3101 | Gossamer Vault
3102 | Draakon Arena
3103 | Forbidden Arena [Undying Warlord]
3104 | Catalepticon
3105 | Fusion Laboratory
3106 | Killing Grounds
3107 | Corrupted RK-9 Kennel
3111 | The Veil (Darkan)
3123 | Akalath Quarantine (Hard)
3126 | Corrupted Skynest (Hard)
3201 | Gossamer Vault (Hard)
3202 | Draakon Arena (Hard)
3203 | Forbidden Arena [Nightmare Undying Warlord]
3204 | Catalepticon (Hard)
3205 | Cursed Fusion Laboratory
3206 | Crimson Killing Grounds
7011 | Shadow of the Gutrends (Guardian)
7015 | Escape from Balder's Refuge (Guardian)
9027 | Manaya's Core (Hard)
9034 | Dreadspire
9044 | Bahaar's Sanctum
9048 | Sanctum of the Fire God (Agaia Online)
9050 | Rift's Edge (Hard)
9053 | Kezzel's Gorge
9054 | Bathysmal Rise (Hard)
9056 | Timescape (Hard)
9057 | Akeron's Inferno (Hard)
9066 | Demon's Wheel
9067 | Demokron Factory (Hard)
9068 | Shadow Sanguinary (Hard)
9070 | Manglemire
9710 | Broken Prison
9716 | Sky Cruiser Endeavor
9720 | Antaroth's Abyss
9735 | RK-9 Kennel
9739 | Red Refuge
9750 | Rift's Edge
9754 | Bathysmal Rise
9756 | Timescape
9757 | Akeron's Inferno
9759 | Forsaken Island (Hard)
9768 | Shadow Sanguinary
9770 | Ruinous Manor
9780 | Velik's Hold (5-Person)
9781 | Velik's Sanctuary
9782 | Grotto of Lost Souls
9783 | Dark Reach Citadel
9794 | Thaumetal Refinery
9916 | Sky Cruiser Endeavor (Hard)
9920 | Antaroth's Abyss (Hard)
9935 | RK-9 Kennel (Hard)
9939 | Red Refuge (Hard)
9970 | Ruinous Manor (Hard)
9980 | Velik's Hold (Hard)
9981 | Velik's Sanctuary (Hard)
9982 | Grotto of Lost Souls (Hard)
9983 | Dark Reach Citadel (Hard)
9985 | Sanctuary's Ruins (Hard)
9994 | Thaumetal Refinery (Hard)

## Notification Settings

* **Screen Display** (Bottom) and **Chat Notification**: If the **lNotice** argument is *on*.
  ![](https://i.imgur.com/BPlK58M.png)

* When the **gNotice** argument is *on*, notifications are also sent to the **Party Chat Channel**.

* **Top Screen Message**: If the **lNotice** argument is *off* (default setting).
  ![](https://i.imgur.com/r2bb8Wc.png)
  You can set the color of such notifications using commands or the GUI (this also changes the color in the Toolbox chat).

* When **Streamer Mode** is on (**stream** argument), all text notifications are sent ONLY to the Toolbox(/8) chat channel. They will not appear on screen, but TTS voice will still play.

* To disable or enable TTS voice notifications, use the **guide voice** command.

## Module GUI

*   When entering the **guide gui** command, the module's graphical settings interface will appear, allowing you to change basic settings.

    ![](https://i.imgur.com/nUKjQHn.png)
    ![](https://i.imgur.com/7dHs1g0.png)


## Credits
- **[Kasea](https://github.com/Kasea)** - Original developer of the Tera-Guide module
- **[michengs](https://github.com/michengs)** - Author of most guides and module core code
- **[hsdn](https://github.com/hsdn)** - Author maintaining long-term updates for the guide
- **[ZC](https://github.com/tera-mod)** - Provided coordinates for drawing attack zones and mechanics
- **[Kuroine](https://github.com/Kuroine)** - Author of the base code for DA guides
- **[Multarix](https://github.com/Multarix)** - Author of RR guides and modified English translations
- **[Owyn](https://github.com/Owyn)** - Developer of excellent guides for RK-9, AA, and GV; used his code
- **[Emilia](https://github.com/emilia-s2)** - Author of Portuguese translations and Guardian guides
- **[Loliconera](https://github.com/Loliconera)** - Author of Spanish translations
- **[ITunk](https://github.com/GrafNikola)** - Author of initial Russian translations