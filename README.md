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

id | Dungeon name | Название данжа
--- | --- | ---
2800 | Dreadspire VALKYTEQ | Dreadspire VALKYTEQ
2802 | Aesir's End (Hard) (Arborea Reborn) | Aesir's End (Hard) (Arborea Reborn)
2803 | Aesir's End (Arborea Reborn) | Aesir's End (Arborea Reborn)
2804 | Phantom hideout (Arborea Reborn) | Phantom hideout (Arborea Reborn)
2809 | The Observatory (Arborea Reborn) | The Observatory (Arborea Reborn)
2811 | Sea of Honor (Arborea Reborn) | Sea of Honor (Arborea Reborn)
2813 | Beach River Outpost (Arborea Reborn) | Beach River Outpost (Arborea Reborn)
2814 | Abyssal Prison (Arborea Reborn) | Abyssal Prison (Arborea Reborn)
2816 | Kelsaik Hall (Arborea Reborn) | Kelsaik Hall (Arborea Reborn)
3023 | Akalath Quarantine | Секретное подземелье крепости Берарк
3026 | Corrupted Skynest | Логово Келсаика
3027 | Forbidden Arena [Hagufna] | [Бессмертный воин] Арена безумия
3030 | Commander's Residence | Старая резиденция
3032 | Akalath Quarantine (Guide) | [Тренировка] Секретное подземелье крепости Берарк
3034 | Rampaging RK-9 Kennel | Ангар RK-9 (сложно)
3036 | Sky Cruiser (Hard) | Небесный крейсер (сложно)
3037 | Bahaar's Sanctum (Guide) | [Тренировка] Святилище Бахаара
3101 | Gossamer Vault | Гнездо Паркин
3102 | Draakon Arena | Командный центр
3103 | Forbidden Arena [Undying Warlord] | [Этерния] Арена безумия
3104 | Catalepticon | Сонный паралич Лукмии
3105 | Fusion Laboratory | Лаборатория Слияния
3106 | Killing Grounds | Место казни
3107 | Corrupted RK-9 Kennel | Разрушенный Ангар РК-9
3111 | The Veil (Darkan) | The Veil (Darkan)
3123 | Akalath Quarantine (Hard) | Akalath Quarantine (Hard)
3126 | Corrupted Skynest (Hard) | Логово Бессмертного Келсаика
3201 | Gossamer Vault (Hard) | Гнездо сверкающей Паркин
3202 | Draakon Arena (Hard) | Командный центр (сложно)
3203 | Forbidden Arena [Nightmare Undying Warlord] | [Бессмертный] Арена безумия
3204 | Catalepticon (Hard) | Сонный паралич Лукмии (сложно)
3205 | Cursed Fusion Laboratory | Заколдованная лаборатория слияния
3206 | Crimson Killing Grounds | Окровавленное место казни
3920 | Cursed Antaroth's Abyss (Asura) | Искаженный Омут (Asura)
7011 | Shadow of the Gutrends (Guardian) | Живодеры и черная тень (хранитель)
7015 | Escape from Balder's Refuge (Guardian) | Операция "Спасти Убежище Балдера" (хранитель)
9027 | Manaya's Core (Hard) | Обитель Манайи (сложно)
9034 | Dreadspire | Жуткий шпиль страха
9044 | Bahaar's Sanctum | Святилище Бахаара
9048 | Sanctum of the Fire God (Agaia Online) | Sanctum of the Fire God (Agaia Online)
9050 | Rift's Edge (Hard) | Край Разлома (сложно)
9053 | Kezzel's Gorge | Ущелье Кеззела
9054 | Bathysmal Rise (Hard) | Глубинный Храм (сложно)
9056 | Timescape (Hard) | Хроноплоскость (сложно)
9057 | Akeron's Inferno (Hard) | Акероново пекло (сложно)
9066 | Demon's Wheel | Рулетка Демороса
9067 | Demokron Factory (Hard) | Лаборатория Берна (сложно)
9068 | Shadow Sanguinary (Hard) | Убежище Дуриона (сложно)
9070 | Manglemire | Замок Парадоксов
9710 | Broken Prison | Разрушенный алтарь Лакана
9716 | Sky Cruiser Endeavor | Крейсер "Стремление"
9720 | Antaroth's Abyss | Омут Антароса
9735 | RK-9 Kennel | Ангар RK-9
9739 | Red Refuge | Лагерь повстанцев
9750 | Rift's Edge | Край Разлома
9754 | Bathysmal Rise | Глубинный Храм
9756 | Timescape | Хроноплоскость
9757 | Akeron's Inferno | Акероново пекло
9759 | Forsaken Island (Hard) | Остров Мертвых (сложно)
9768 | Shadow Sanguinary | Убежище Дуриона
9770 | Ruinous Manor | Руины Абнукты
9780 | Velik's Hold (5-Person) | Вход в катакомбы Велики
9781 | Velik's Sanctuary | Святилище Велики
9782 | Grotto of Lost Souls | Мастерская Леандра
9783 | Dark Reach Citadel | Крепость Тенебриса
9794 | Thaumetal Refinery | Лаборатория Сайрекса
9850 | Withering Dreadspire (Agaia Online) | Withering Dreadspire (Agaia Online)
9916 | Sky Cruiser Endeavor (Hard) | Крейсер "Стремление" (Сложно)
9920 | Antaroth's Abyss (Hard) | Омут Бездушного Антароса
9935 | RK-9 Kennel (Hard) | Ангар совершенного RK-9
9939 | Red Refuge (Hard) | Секретный лагерь повстанцев
9970 | Ruinous Manor (Hard) | Руины Кошмарной Абнукты
9980 | Velik's Hold (Hard) | Вход в разрушенные катакомбы Велики
9981 | Velik's Sanctuary (Hard) | Разрушенное Святилище Велики
9985 | Sanctuary's Ruins (Hard) | Sanctuary's Ruins (Hard)
9982 | Grotto of Lost Souls (Hard) | Мастерская Леандра (сложно)
9983 | Dark Reach Citadel (Hard) | Крепость Темного Тенебриса
9994 | Thaumetal Refinery (Hard) | Лаборатория Альфа-сайрекса

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