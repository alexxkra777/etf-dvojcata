# Agent: translate research notes

Claude Code sub-agent log, exported from `agent-adec7f25f493b2597.jsonl`.
Tool outputs longer than 1,500 characters are shortened.

## Brief

Translate the file /Users/[redacted]/homeW/ai-dev-test/etf-landing/research/etf-data.md from Russian into clear, plain professional English, IN PLACE (overwrite the same file). The file content must be entirely in English (Czech quotes from sources stay in Czech, in quotes). Keep every number, ticker, ISIN, date, URL, table and heading structure exactly; do not add, drop or "improve" facts. Where the original says something was not verified, keep that caveat. Don't mention translation, AI or tools in the file. Do not touch any other file, do not run git. When done, reply with one line: done + line count.

→ `Read` /Users/[redacted]/homeW/ai-dev-test/etf-landing/research/etf-data.md

<details><summary>result</summary>

```
1	# ETF с NYSE и их европейские двойники: данные для лендинга
2	
3	Собрано 11.10.2026. Машиночитаемая версия с источником, датой обращения и датой «as of» у каждого факта лежит в `etf-data.json` в этой же папке.
4	Доходности — среднегодовые, по NAV, в USD, на 30.09.2026, если не сказано иное. Для инвестора в кронах итог зависит ещё и от курса USD/CZK.
5	
6	## 1. Главный вывод для страницы
7	
8	- Чешский розничный инвестор у большинства брокеров **не может купить** американские ETF (SPY, VOO, VTI…). Мешает регламент PRIIPs (действует с 01.01.2018): без KID продавать продукт рознице нельзя, а американские эмитенты KID не выпускают. Держать и продавать уже купленное обычно можно.
9	- **Чешская особенность:** ČNB в разъяснении RS2018-12 (22.10.2018) написал, что брокер, который только исполняет поручение клиента (execution-only) и сам продукт не предлагает, не обязан выдавать KID. Поэтому **Fio e-Broker** прямо пишет: «U nás můžete obchodovat i s americkými ETF». Иностранные брокеры (XTB, Trading 212, IBKR, DEGIRO, Saxo) живут по правилам своих регуляторов и американские ETF рознице не продают.
10	- Другие легальные пути: статус профессионального клиента (2 из 3 критериев, § 2b ZPKT), CFD (это не владение фондом). Путь через исполнение опционов описан только в блогах, официально не подтверждён.
11	- Поэтому страница показывает ETF, о которых человек слышал, а рядом их **UCITS-двойников** (Ирландия, есть KID), которых он реально может купить.
12	
13	## 2. Популярные ETF с NYSE Arc
… [15785 more characters]
```
</details>

→ `Write` /Users/[redacted]/homeW/ai-dev-test/etf-landing/research/etf-data.md

<details><summary>result</summary>

```
The file /Users/[redacted]/homeW/ai-dev-test/etf-landing/research/etf-data.md has been updated successfully. (file state is current in your context — no need to Read it back)
```
</details>

→ `Bash` — wc -l /Users/[redacted]/homeW/ai-dev-test/etf-landing/research/etf-data.md
```sh
wc -l /Users/[redacted]/homeW/ai-dev-test/etf-landing/research/etf-data.md
```

<details><summary>result</summary>

```
     140 /Users/[redacted]/homeW/ai-dev-test/etf-landing/research/etf-data.md
```
</details>

**Agent:**

[redacted: name]

done, 140 lines. Числа в английском формате: десятичная точка вместо запятой, запятая как разделитель тысяч (например, 0,0945 % стало 0.0945%, а 3 507 стало 3,507).

