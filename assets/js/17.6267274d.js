(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{219:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"создайте-пост"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#создайте-пост"}},[s._v("#")]),s._v(" Создайте пост")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("примечание")]),s._v(" "),a("p",[s._v("После выполнения этого задания, вы получите "),a("strong",[s._v("20 токенов Desmos")]),s._v(".")]),s._v(" "),a("p",[s._v("Обратите внимание, что для предотвращения спама вы получите вознаграждение только за "),a("strong",[s._v("первый пост")]),s._v(". Токены "),a("strong",[s._v("не")]),s._v(" будут присуждаться за последующие посты.")])]),s._v(" "),a("p",[s._v("В Desmos, посты - это способ пользователей делиться любой информацией публично.")]),s._v(" "),a("p",[s._v("Посты в Desmos похожи на твиты в Twitter, поскольку они имеют схожую функциональность: они позволяют вам писать то, что вы хотите (без каких-либо ограничений по длине), и они публично видны всем пользователям Desmos.")]),s._v(" "),a("p",[s._v("Единственная разница с твитами в том, что после того, как вы создали пост в Desmos, вы "),a("strong",[s._v("не сможете")]),s._v(" удалить его! Это связано с тем, что блокчейн обладает неизменной характеристикой: каждую выполняемую транзакцию нельзя отменить.")]),s._v(" "),a("h2",{attrs:{id:"создание-вашего-первого-поста"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#создание-вашего-первого-поста"}},[s._v("#")]),s._v(" Создание вашего первого поста")]),s._v(" "),a("p",[s._v("После того как вы следовали "),a("router-link",{attrs:{to:"/ru/phases/phase-1/setup/"}},[s._v("Настройке")]),s._v(" и вы создали свой Desmos аккаунт используя команду "),a("code",[s._v("desmoscli keys")]),s._v(", вы готовы к созданию вашего первого поста. Чтобы это сделать, выполните следующие команды:")],1),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('desmoscli tx posts create "<Сообщение>" true --from <имя-вашего-ключа> --yes \n\n# Пример\n# desmoscli tx posts create "Hello world!" true --from jack --yes\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("Вам будет предложено ввести пароль, который вы задали во время установки, и после правильного ввода пароля вы увидите что-то вроде этого:")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("txhash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 89243E31ED012CC0AE541C56983946E4BBE1D830DF71B2D0E2EB79CB37BE5231\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rawlog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'[{"msg_index":0,"success":true,"log":"","events":[{"type":"message","attributes":[{"key":"action","value":"create_post"}]}]}]\'')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("logs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("msgindex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("events")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" message\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("attributes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" action\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" create_post\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gaswanted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("gasused")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("codespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token null important"}},[s._v("null")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timestamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("events")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("Чтобы убедиться, что транзакция была успешно обработана, вы можете запросить ее, используя следующую команду:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("desmoscli query tx <txhash> --output json\n\n# Пример\n# desmoscli query tx 89243E31ED012CC0AE541C56983946E4BBE1D830DF71B2D0E2EB79CB37BE5231 --output json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("Это вернет вам JSON представление самой транзакции.")]),s._v(" "),a("p",[s._v(":::примечание Hello world!"),a("br"),s._v("\nПоздравляем! Вы только что создали свой первый пост в Desmos!"),a("br"),s._v("\n:::")]),s._v(" "),a("h2",{attrs:{id:"поnучение-награды"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#поnучение-награды"}},[s._v("#")]),s._v(" Получение награды")]),s._v(" "),a("p",[s._v("После того как вы создали пост, чтобы убедиться в получении награды пожалуйста выполните следующие шаги:")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Создайте fork этого репозитория в ваш Github профиль.\nЕсли вы не знаете как это сделать, то следуйте "),a("a",{attrs:{href:"https://help.github.com/en/github/getting-started-with-github/fork-a-repo",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub форк инструкции"),a("OutboundLink")],1),s._v(".")])]),s._v(" "),a("li",[a("p",[s._v("Сделайте pull этого форка на ваш компьютер:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git clone https://github.com/<your-name>/primer.git ~/desmos-primer\ncd ~/desmos-primer\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Создайте файл с именем вашего GitHub имени содержащий хеш транзации вашего первого поста.")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('echo "<tx-hash>" >> ./phases/phase-1/challenges/posts/<ваше-github-имя>\n\n# Пример\n# echo "89243E31ED012CC0AE541C56983946E4BBE1D830DF71B2D0E2EB79CB37BE5231" >> ./phases/phase-1/challenges/posts/RiccardoM\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Сделайте commit ваших изменений, сделайте push этих изменений в ваш форкнутый репозиторий и затем создайте pull request в репозитории Desmos Primer. Если вы не знаете как это сделать, то обратитесь в "),a("a",{attrs:{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub Pull Requests инструкцию"),a("OutboundLink")],1),s._v(".")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);