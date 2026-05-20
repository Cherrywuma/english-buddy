// 译林版 4B 8 大语法点系统
// 每个语法点: 说明 + 例句 + 公式 + 练习
window.GRAMMAR = {
  meta: { title: "语法系统", total: 8 },
  topics: [
    {
      id: 1,
      title: "There is / There are",
      titleZh: "There be 句型",
      icon: "📍",
      unit: 1,
      color: "#4F7CFF",
      summary: "表示某地有某物",
      formula: [
        { pattern: "There is + 单数名词 + 地点", example: "There is a book on the desk." },
        { pattern: "There are + 复数名词 + 地点", example: "There are many trees in the park." },
        { pattern: "There is + 不可数名词 + 地点", example: "There is some water in the cup." }
      ],
      explanation: "🎯 看主语 (be 后面的那个名词) 决定用 is 还是 are\n• 单数用 is (a/an/one + 名词)\n• 复数用 are (some/many/数字 + 复数名词)\n• 不可数名词用 is (water, milk, juice, food 等)\n• 注意: There be 句型表示'存在',不能翻译成'那里是'",
      examples: [
        { en: "There is a panda in the zoo.", zh: "动物园里有一只熊猫。", point: "单数 → is" },
        { en: "There are five birds in the tree.", zh: "树上有五只鸟。", point: "复数 → are" },
        { en: "There is some milk in the bottle.", zh: "瓶子里有一些牛奶。", point: "不可数 → is" },
        { en: "There is a hole in the net.", zh: "网上有一个洞。", point: "课文原句" }
      ],
      practice: [
        { q: "____ many flowers in the garden.", options: ["There is", "There are", "Have", "It is"], answer: 1, exp: "flowers 是复数,用 are" },
        { q: "____ a piano in the music room.", options: ["There is", "There are", "Have", "Is"], answer: 0, exp: "a piano 是单数,用 is" },
        { q: "____ some bread on the plate.", options: ["There is", "There are", "Are", "Have"], answer: 0, exp: "bread 不可数,用 is" },
        { q: "____ two boys in the classroom.", options: ["There is", "There are", "There have", "Is"], answer: 1, exp: "two boys 复数,用 are" }
      ]
    },
    {
      id: 2,
      title: "Is there...? / Are there...?",
      titleZh: "There be 疑问句",
      icon: "❓",
      unit: 2,
      color: "#34C759",
      summary: "询问某地是否有某物",
      formula: [
        { pattern: "Is there + 单数 + 地点?", example: "Is there a piano in the room?" },
        { pattern: "Are there + 复数 + 地点?", example: "Are there computer rooms in the school?" },
        { pattern: "肯定回答: Yes, there is./are.", example: "Yes, there is." },
        { pattern: "否定回答: No, there isn't./aren't.", example: "No, there aren't." }
      ],
      explanation: "🎯 把 There be 句型变成疑问句\n• be 动词 (is/are) 提到 there 前面\n• 句末加问号\n• 回答用 Yes, there is/are 或 No, there isn't/aren't\n• 注意: 不能说 Yes, it is 或 Yes, they are",
      examples: [
        { en: "Is there a swing in the playground?", zh: "操场上有秋千吗?", point: "课文原句 · 单数提问" },
        { en: "Yes, there is.", zh: "是的,有。", point: "肯定回答" },
        { en: "Are there any books on the desk?", zh: "桌上有书吗?", point: "复数提问" },
        { en: "No, there aren't.", zh: "不,没有。", point: "否定回答" }
      ],
      practice: [
        { q: "____ a library in your school?", options: ["Is there", "Are there", "Have there", "Is here"], answer: 0, exp: "a library 单数" },
        { q: "____ any students in the classroom?", options: ["Is there", "Are there", "Have", "Do"], answer: 1, exp: "students 复数" },
        { q: "Is there a piano? — ____ .", options: ["Yes, it is.", "Yes, there is.", "Yes, has.", "Yes, there has."], answer: 1, exp: "回答用 there is" },
        { q: "Are there flowers? — No, ____ .", options: ["it isn't", "they aren't", "there aren't", "there isn't"], answer: 2, exp: "否定回答用 there aren't" }
      ]
    },
    {
      id: 3,
      title: "Imperative Sentences",
      titleZh: "祈使句",
      icon: "🚦",
      unit: 3,
      color: "#FF9500",
      summary: "命令、请求、建议、警告",
      formula: [
        { pattern: "动词原形 + 其他", example: "Stop! / Wait! / Look!" },
        { pattern: "Don't + 动词原形 + 其他", example: "Don't run!" },
        { pattern: "Please + 祈使句", example: "Please be quiet." }
      ],
      explanation: "🎯 祈使句不需要主语 (You 省略)\n• 直接用动词原形开头\n• 否定形式用 Don't + 动词原形\n• 加 Please 更礼貌\n• 课本场景: 道路安全用很多祈使句 (Stop! Wait! Don't run!)",
      examples: [
        { en: "Stop, Haohao!", zh: "停下,浩浩!", point: "课文原句" },
        { en: "Wait for the green light.", zh: "等绿灯。", point: "课文原句" },
        { en: "Don't run on the road!", zh: "不要在路上跑!", point: "课文原句 · 否定" },
        { en: "Please look left and right.", zh: "请看左右两边。", point: "礼貌祈使" }
      ],
      practice: [
        { q: "____ careful! It's dangerous!", options: ["Be", "Are", "Is", "To be"], answer: 0, exp: "祈使句用动词原形 Be" },
        { q: "____ run in the corridor!", options: ["No", "Not", "Don't", "Doesn't"], answer: 2, exp: "否定祈使用 Don't" },
        { q: "____ for the bus, please.", options: ["Wait", "Waits", "Waiting", "To wait"], answer: 0, exp: "祈使句用动词原形" },
        { q: "Please ____ the door.", options: ["close", "closing", "to close", "closes"], answer: 0, exp: "Please 后用动词原形" }
      ]
    },
    {
      id: 4,
      title: "What's the matter?",
      titleZh: "询问情况",
      icon: "🤔",
      unit: 4,
      color: "#EC4899",
      summary: "关心他人感觉、问怎么了",
      formula: [
        { pattern: "What's the matter?", example: "What's the matter, Mum?" },
        { pattern: "What's wrong?", example: "What's wrong with you?" },
        { pattern: "回答: I'm + 形容词", example: "I'm tired. / I'm hungry." }
      ],
      explanation: "🎯 询问别人感受/情况的常用句\n• What's the matter? = 怎么了?\n• 回答时用 'I'm + 形容词': I'm tired/hungry/thirsty/ill/sad...\n• 想关心更多可问: Are you OK?\n• 注意: matter 前面用 the 不能省略",
      examples: [
        { en: "What's the matter, Mum?", zh: "怎么了,妈妈?", point: "课文原句" },
        { en: "I'm tired.", zh: "我累了。", point: "课文回答" },
        { en: "Are you ill?", zh: "你病了吗?", point: "进一步关心" },
        { en: "I'm hungry. I want to eat.", zh: "我饿了,我想吃。", point: "表达需求" }
      ],
      practice: [
        { q: "What's the matter? — ____", options: ["I'm fine.", "I'm hungry.", "I'm Mike.", "I'm 10."], answer: 1, exp: "回答感受" },
        { q: "What's the ____, dear?", options: ["wrong", "matter", "fine", "good"], answer: 1, exp: "the matter 固定搭配" },
        { q: "Are you ____ ? — Yes, I have a fever.", options: ["happy", "ill", "tired", "hungry"], answer: 1, exp: "fever (发烧) → ill" },
        { q: "I'm thirsty. I want some ____ .", options: ["bread", "rice", "water", "fish"], answer: 2, exp: "thirsty (渴) → water" }
      ]
    },
    {
      id: 5,
      title: "What would you like? / I'd like",
      titleZh: "礼貌点餐",
      icon: "🍴",
      unit: 5,
      color: "#D85A30",
      summary: "礼貌地说想要什么",
      formula: [
        { pattern: "What would you like?", example: "What would you like to eat?" },
        { pattern: "I'd like + 名词", example: "I'd like some noodles." },
        { pattern: "I'd like + to + 动词", example: "I'd like to drink some tea." }
      ],
      explanation: "🎯 比 want 更礼貌的表达\n• I'd like = I would like (我想要)\n• 餐厅、商店常用\n• I'd like + 名词 (东西)\n• I'd like to + 动词 (做某事)\n• 注意: 写作时用 I would like 更正式",
      examples: [
        { en: "What would you like, boys?", zh: "孩子们,你们想要什么?", point: "课文原句" },
        { en: "I'd like some noodles.", zh: "我想要面条。", point: "课文原句" },
        { en: "I'd like a cup of tea, please.", zh: "请来一杯茶。", point: "礼貌点餐" },
        { en: "I'd like to try Chinese food.", zh: "我想试试中国菜。", point: "想做某事" }
      ],
      practice: [
        { q: "What would you like? — ____ a hamburger.", options: ["I like", "I'd like", "I am", "Have"], answer: 1, exp: "对应回答 I'd like" },
        { q: "I'd like ____ glass of milk.", options: ["a", "an", "the", "some"], answer: 0, exp: "glass 辅音开头用 a" },
        { q: "I'd like ____ rice, please.", options: ["a", "an", "some", "many"], answer: 2, exp: "rice 不可数用 some" },
        { q: "____ would you like to drink?", options: ["Who", "What", "Where", "When"], answer: 1, exp: "问喝什么用 What" }
      ]
    },
    {
      id: 6,
      title: "Plural Job Nouns",
      titleZh: "职业复数表通称",
      icon: "👷",
      unit: 6,
      color: "#8B5CF6",
      summary: "用职业复数说明整个职业群体",
      formula: [
        { pattern: "He's a/an + 职业 (单数)", example: "He's a doctor." },
        { pattern: "职业复数 + 动词复数", example: "Doctors help sick people." }
      ],
      explanation: "🎯 说某个人的职业用单数,说整个职业群体用复数\n• He's a doctor. (他是个医生)\n• Doctors help sick people. (医生们帮助病人)\n• 复数后面动词也用复数 (help, take, make 等)\n• 课文规律: 介绍某人后,接着说这个职业的人都做什么",
      examples: [
        { en: "My father is a taxi driver.", zh: "我爸爸是出租车司机。", point: "介绍某人" },
        { en: "Drivers take people to different places.", zh: "司机送人们去不同地方。", point: "解释这个职业 · 复数" },
        { en: "She's a teacher. Teachers help children learn.", zh: "她是老师。老师帮助孩子学习。", point: "课文模式" },
        { en: "He's a policeman. Policemen keep us safe.", zh: "他是警察。警察保护我们安全。", point: "policeman → policemen 特殊复数" }
      ],
      practice: [
        { q: "My mother is a ____ .", options: ["nurse", "nurses", "nursing", "a nurses"], answer: 0, exp: "单数职业用 a + 单数" },
        { q: "Cooks ____ delicious food.", options: ["make", "makes", "making", "to make"], answer: 0, exp: "Cooks 复数,动词用原形" },
        { q: "Policemen ____ us safe.", options: ["keep", "keeps", "keeping", "is keep"], answer: 0, exp: "复数主语,动词不加 s" },
        { q: "My dad is ____ teacher.", options: ["a", "an", "the", "some"], answer: 0, exp: "teacher 辅音开头用 a" }
      ]
    },
    {
      id: 7,
      title: "Present Continuous Tense",
      titleZh: "现在进行时",
      icon: "🏃",
      unit: 7,
      color: "#FF6A00",
      summary: "正在做的事 (be + V-ing)",
      formula: [
        { pattern: "主语 + am/is/are + V-ing", example: "I am washing the dishes." },
        { pattern: "I am + V-ing", example: "I am cooking." },
        { pattern: "He/She/It is + V-ing", example: "She is reading." },
        { pattern: "You/We/They are + V-ing", example: "They are playing." }
      ],
      explanation: "🎯 表示'此刻正在做'的事\n• 由 be 动词 + 动词 -ing 组成\n• be 动词根据主语变 (I → am, 单数他 → is, 你/我们/他们 → are)\n• 动词 -ing 变化规则:\n  - 一般加 ing: read → reading, wash → washing\n  - 去 e 加 ing: make → making, take → taking\n  - 双写末字加 ing: cut → cutting, swim → swimming",
      examples: [
        { en: "I am making the bed.", zh: "我在铺床。", point: "课文原句" },
        { en: "Mum is cooking lunch.", zh: "妈妈在做午饭。", point: "课文原句" },
        { en: "Su Yang is watering the flowers.", zh: "苏阳在浇花。", point: "课文原句" },
        { en: "We are doing chores.", zh: "我们在做家务。", point: "课文原句" }
      ],
      practice: [
        { q: "I ____ washing my hands now.", options: ["am", "is", "are", "be"], answer: 0, exp: "主语 I 配 am" },
        { q: "She is ____ the floor.", options: ["sweep", "sweeps", "sweeping", "swept"], answer: 2, exp: "be 后接 V-ing" },
        { q: "cut 的 ing 形式:", options: ["cuting", "cutting", "cuteing", "cuts"], answer: 1, exp: "短元音+辅音双写" },
        { q: "make 的 ing 形式:", options: ["makeing", "making", "maked", "makes"], answer: 1, exp: "去 e 加 ing" }
      ]
    },
    {
      id: 8,
      title: "Present Continuous Questions",
      titleZh: "现在进行时疑问句",
      icon: "🍳",
      unit: 8,
      color: "#E24B4A",
      summary: "询问某人正在做什么",
      formula: [
        { pattern: "Are you + V-ing?", example: "Are you cooking?" },
        { pattern: "Is he/she + V-ing?", example: "Is she singing?" },
        { pattern: "What are you doing?", example: "What are you doing now?" },
        { pattern: "肯定: Yes, I am./he is.", example: "Yes, I am." },
        { pattern: "否定: No, I'm not./he isn't.", example: "No, I'm not." }
      ],
      explanation: "🎯 把现在进行时变成问句\n• 把 be 动词提到主语前面\n• What are you doing? = 你在做什么?\n• 回答有两种:\n  - 短回答: Yes, I am. / No, I'm not.\n  - 详细回答: I'm cooking dinner.\n• 注意: 缩写 I'm not 没问题,但不能说 I amn't",
      examples: [
        { en: "Are you cooking dinner, Mum?", zh: "你在做晚饭吗,妈妈?", point: "课文原句" },
        { en: "Yes, I am. I'm cutting the potatoes.", zh: "是的,我在切土豆。", point: "课文原句" },
        { en: "What are you doing, Bobby?", zh: "你在做什么,Bobby?", point: "课文原句" },
        { en: "I'm watering the flowers.", zh: "我在浇花。", point: "课文原句" }
      ],
      practice: [
        { q: "____ you cooking?", options: ["Do", "Are", "Is", "Have"], answer: 1, exp: "现在进行时用 be 动词" },
        { q: "What ____ she doing?", options: ["do", "does", "is", "are"], answer: 2, exp: "she 配 is" },
        { q: "Are you eating? — Yes, ____.", options: ["I do", "I am", "I can", "I have"], answer: 1, exp: "现在进行时回答" },
        { q: "Is he sleeping? — No, ____.", options: ["he doesn't", "he isn't", "he can't", "he isn't sleep"], answer: 1, exp: "否定短回答" }
      ]
    }
  ]
};

window.GRAMMAR.getAll = function() { return this.topics; };
window.GRAMMAR.getById = function(id) { return this.topics.find(t => t.id === id); };
