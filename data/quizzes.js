// 译林版 4B 单元测试卷 (8 套,对应 8 个 Unit)
// 每套约 25-30 题: 听力 + 词汇 + 语法 + 阅读
window.QUIZZES = {
  meta: {
    title: "单元测试卷",
    total: 8
  },
  quizzes: [
    {
      id: 1,
      unitId: 1,
      title: "Unit 1 We become good friends",
      titleZh: "Unit 1 单元测试",
      totalPoints: 100,
      sections: [
        {
          name: "听力",
          type: "listen",
          desc: "听单词,选出对应中文",
          points: 20,
          items: [
            { audio: "forest", options: ["森林", "公园", "学校", "操场"], answer: 0 },
            { audio: "angry", options: ["开心", "难过", "生气", "害怕"], answer: 2 },
            { audio: "kind", options: ["友好的", "勇敢的", "聪明的", "美丽的"], answer: 0 },
            { audio: "hole", options: ["山", "湖", "洞", "河"], answer: 2 },
            { audio: "friendship", options: ["友谊", "爱情", "亲情", "信任"], answer: 0 }
          ]
        },
        {
          name: "词汇",
          type: "vocab",
          desc: "选出正确的英文单词",
          points: 30,
          items: [
            { q: "瘦的", options: ["thin", "fat", "small", "tall"], answer: 0 },
            { q: "强壮的", options: ["weak", "strong", "kind", "happy"], answer: 1 },
            { q: "网", options: ["bag", "box", "net", "hole"], answer: 2 },
            { q: "聚会", options: ["party", "friend", "school", "park"], answer: 0 },
            { q: "成为", options: ["become", "make", "do", "have"], answer: 0 },
            { q: "背部", options: ["face", "back", "hand", "head"], answer: 1 }
          ]
        },
        {
          name: "语法 (There is/are)",
          type: "grammar",
          desc: "选择正确的句子",
          points: 30,
          items: [
            { q: "森林里有许多动物。", options: [
              "There is many animals in the forest.",
              "There are many animals in the forest.",
              "There have many animals in the forest.",
              "Have many animals in the forest."
            ], answer: 1 },
            { q: "桌上有一本书。", options: [
              "There are a book on the table.",
              "There has a book on the table.",
              "There is a book on the table.",
              "There a book is on the table."
            ], answer: 2 },
            { q: "盒子里有一些苹果。", options: [
              "There is some apples in the box.",
              "There are some apples in the box.",
              "There have some apples in the box.",
              "There are a apples in the box."
            ], answer: 1 },
            { q: "天上有一只风筝。", options: [
              "There are a kite in the sky.",
              "There is a kites in the sky.",
              "There is a kite in the sky.",
              "There have a kite in the sky."
            ], answer: 2 },
            { q: "How many trees ____ in the park?", options: ["is there", "are there", "there is", "there are"], answer: 1 },
            { q: "____ a panda in the zoo.", options: ["There is", "There are", "There have", "It is"], answer: 0 }
          ]
        },
        {
          name: "阅读理解",
          type: "reading",
          desc: "读短文,回答问题",
          points: 20,
          passage: "One day, a small mouse runs on a big lion's back. The lion is angry. 'Why are you on my back?' he asks. The mouse says, 'Please don't eat me. I can help you one day.' The lion laughs but lets the mouse go. Later, the lion is in a net. He is sad and shouts 'Help!' The little mouse hears him. The mouse makes a hole in the net with his teeth. The lion is free! 'Thank you, my friend!' says the lion. Now they are good friends.",
          passageZh: "一天,一只小老鼠跑到大狮子的背上。狮子很生气。'你为什么在我背上?'他问。老鼠说:'求求你别吃我。我有一天能帮你。' 狮子笑了但放走了老鼠。后来,狮子掉进网里。他很难过,大喊'救命!'小老鼠听到了。老鼠用牙齿在网上咬了个洞。狮子自由了!'谢谢你,我的朋友!'狮子说。现在他们是好朋友了。",
          items: [
            { q: "Why is the lion angry at first?", options: ["He is hungry", "The mouse is on his back", "He is lost", "He is sad"], answer: 1 },
            { q: "What does the mouse promise?", options: ["To bring food", "To help one day", "To leave", "To be quiet"], answer: 1 },
            { q: "How does the mouse help the lion?", options: ["Calls for help", "Brings food", "Makes a hole in the net", "Fights the hunter"], answer: 2 }
          ]
        }
      ]
    },
    {
      id: 2,
      unitId: 2,
      title: "Unit 2 Helping others at school",
      titleZh: "Unit 2 单元测试",
      totalPoints: 100,
      sections: [
        {
          name: "听力",
          type: "listen",
          desc: "听单词,选出对应中文",
          points: 20,
          items: [
            { audio: "library", options: ["教室", "图书馆", "操场", "音乐室"], answer: 1 },
            { audio: "playground", options: ["游戏场,操场", "美术室", "电脑室", "厨房"], answer: 0 },
            { audio: "floor", options: ["地板", "楼层", "天花板", "墙"], answer: 1 },
            { audio: "piano", options: ["小提琴", "吉他", "钢琴", "鼓"], answer: 2 },
            { audio: "swing", options: ["秋千", "跑步", "滑梯", "网"], answer: 0 }
          ]
        },
        {
          name: "词汇",
          type: "vocab",
          desc: "选出正确的英文",
          points: 30,
          items: [
            { q: "第一", options: ["one", "first", "once", "fir"], answer: 1 },
            { q: "第二", options: ["two", "second", "twice", "twoth"], answer: 1 },
            { q: "第三", options: ["three", "thirty", "third", "thrid"], answer: 2 },
            { q: "电脑", options: ["compute", "computar", "computer", "compoter"], answer: 2 },
            { q: "音乐室", options: ["music room", "music's room", "musics room", "rooms music"], answer: 0 },
            { q: "不客气", options: ["Thank you.", "You're welcome.", "I'm sorry.", "Sure."], answer: 1 }
          ]
        },
        {
          name: "语法 (Is/Are there...?)",
          type: "grammar",
          desc: "选择正确的句子",
          points: 30,
          items: [
            { q: "操场上有秋千吗?", options: [
              "Is there a swing in the playground?",
              "Are there a swing in the playground?",
              "Have there a swing in the playground?",
              "There is a swing in the playground?"
            ], answer: 0 },
            { q: "图书馆里有许多书吗?", options: [
              "Is there many books in the library?",
              "Are there many books in the library?",
              "There are many books in the library?",
              "Have many books in the library?"
            ], answer: 1 },
            { q: "Yes, ____ . (回答 Is there a piano?)", options: ["there is", "there are", "it is", "I have"], answer: 0 },
            { q: "No, ____ . (回答 Are there computer rooms?)", options: ["there isn't", "there aren't", "they aren't", "no"], answer: 1 },
            { q: "音乐室在三楼。", options: [
              "The music room is in the third floor.",
              "The music room is on the third floor.",
              "The music room on the third floor.",
              "The music room at third floor."
            ], answer: 1 },
            { q: "Our classrooms ____ on the second floor.", options: ["is", "are", "have", "has"], answer: 1 }
          ]
        },
        {
          name: "阅读理解",
          type: "reading",
          desc: "读短文,回答问题",
          points: 20,
          passage: "Nancy is a new student at Yang Ling's school. Yang Ling shows her around. 'Our school is big,' says Nancy. 'There are three floors. The library is on the first floor. The art room is on the first floor too. Our classrooms are on the second floor. There are two computer rooms on the third floor. The music room is also on the third floor, with a piano.' Nancy is very happy with her new school.",
          passageZh: "Nancy 是杨玲学校的新学生。杨玲带她参观。'我们学校很大,'Nancy 说。'有三层。图书馆在一楼。美术室也在一楼。我们的教室在二楼。三楼有两个电脑室。音乐室也在三楼,有一台钢琴。' Nancy 对她的新学校很满意。",
          items: [
            { q: "How many floors does the school have?", options: ["Two", "Three", "Four", "Five"], answer: 1 },
            { q: "Where is the library?", options: ["First floor", "Second floor", "Third floor", "Not in school"], answer: 0 },
            { q: "How many computer rooms are there?", options: ["One", "Two", "Three", "Four"], answer: 1 }
          ]
        }
      ]
    },
    {
      id: 3,
      unitId: 3,
      title: "Unit 3 Road Safety",
      titleZh: "Unit 3 单元测试",
      totalPoints: 100,
      sections: [
        {
          name: "听力",
          type: "listen",
          desc: "听单词,选出对应中文",
          points: 20,
          items: [
            { audio: "road", options: ["路", "桥", "山", "河"], answer: 0 },
            { audio: "safe", options: ["危险的", "安全的", "繁忙的", "快的"], answer: 1 },
            { audio: "cross", options: ["停止", "等待", "穿越", "转弯"], answer: 2 },
            { audio: "traffic light", options: ["路灯", "交通信号灯", "前灯", "手电筒"], answer: 1 },
            { audio: "busy", options: ["安静的", "忙的/繁忙的", "懒的", "快乐的"], answer: 1 }
          ]
        },
        {
          name: "词汇",
          type: "vocab",
          desc: "选出正确的英文",
          points: 30,
          items: [
            { q: "向左", options: ["right", "left", "up", "down"], answer: 1 },
            { q: "向右", options: ["left", "right", "back", "front"], answer: 1 },
            { q: "等待", options: ["wait", "stop", "go", "run"], answer: 0 },
            { q: "停止", options: ["go", "stop", "start", "stay"], answer: 1 },
            { q: "公共汽车", options: ["car", "taxi", "bus", "train"], answer: 2 },
            { q: "靠近", options: ["close", "far", "near", "between"], answer: 0 }
          ]
        },
        {
          name: "语法 (祈使句)",
          type: "grammar",
          desc: "选择正确的句子",
          points: 30,
          items: [
            { q: "停下,小心!", options: ["Stop, be careful!", "Stopping carefully!", "You stop carefully!", "To stop carefully!"], answer: 0 },
            { q: "等绿灯。", options: [
              "Wait the green light.",
              "Wait for the green light.",
              "Waiting for green light.",
              "You wait green light."
            ], answer: 1 },
            { q: "别在路上跑!", options: [
              "Not run on the road!",
              "Don't run on the road!",
              "No run on the road!",
              "You don't running on the road!"
            ], answer: 1 },
            { q: "先看左右两边。", options: [
              "Look left and right first.",
              "First look at left and right.",
              "You first look left right.",
              "Looking left and right first."
            ], answer: 0 },
            { q: "红灯时我们 ____ 过马路。", options: ["can", "can't", "must", "will"], answer: 1 },
            { q: "It's safe now. We ____ cross the road.", options: ["can't", "can", "don't", "won't"], answer: 1 }
          ]
        },
        {
          name: "阅读理解",
          type: "reading",
          desc: "读短文,回答问题",
          points: 20,
          passage: "Haohao and his mum are at the road. The traffic lights are red. 'Mum, let's cross now,' says Haohao. 'Stop, Haohao!' says Mum. 'We can't cross when the lights are red. Wait for the green light.' Soon the lights turn green. 'Now we can go,' says Haohao. 'Wait!' says Mum. 'Look left and right first.' They look carefully. 'It's safe now,' Mum says. They cross the road safely.",
          passageZh: "浩浩和妈妈在路边。红灯。'妈妈,我们现在过吧,'浩浩说。'停下,浩浩!'妈妈说。'红灯时不能过。等绿灯。' 不久灯变绿了。'现在可以走了,'浩浩说。'等!'妈妈说。'先看左右两边。' 他们仔细看。'现在安全了,'妈妈说。他们安全地过了马路。",
          items: [
            { q: "Why can't they cross at first?", options: ["No cars", "Red light", "Too busy", "It's late"], answer: 1 },
            { q: "What should they do before crossing?", options: ["Run fast", "Look left and right", "Close eyes", "Call dad"], answer: 1 },
            { q: "What's the main rule from this story?", options: ["Run on the road", "Cross when safe", "Cross anytime", "Stay home"], answer: 1 }
          ]
        }
      ]
    },
    {
      id: 4,
      unitId: 4,
      title: "Unit 4 Caring about others",
      titleZh: "Unit 4 单元测试",
      totalPoints: 100,
      sections: [
        {
          name: "听力",
          points: 20,
          desc: "听单词,选出对应中文",
          type: "listen",
          items: [
            { audio: "hungry", options: ["渴的", "饿的", "累的", "病的"], answer: 1 },
            { audio: "thirsty", options: ["热的", "冷的", "渴的", "饿的"], answer: 2 },
            { audio: "tired", options: ["开心的", "疲倦的", "生气的", "兴奋的"], answer: 1 },
            { audio: "bread", options: ["米饭", "鸡蛋", "面包", "面条"], answer: 2 },
            { audio: "ill", options: ["生病", "高兴", "繁忙", "聪明"], answer: 0 }
          ]
        },
        {
          name: "词汇",
          points: 30,
          desc: "选出正确的英文",
          type: "vocab",
          items: [
            { q: "休息", options: ["a rest", "a tired", "a sleep", "a sit"], answer: 0 },
            { q: "怎么了?", options: ["What's wrong?", "What's the matter?", "How's it?", "A 和 B 都对"], answer: 3 },
            { q: "亲爱的", options: ["dear", "deer", "near", "ear"], answer: 0 },
            { q: "包", options: ["box", "bag", "back", "bug"], answer: 1 },
            { q: "摆放餐具", options: ["set the table", "make the bed", "wash dishes", "clean room"], answer: 0 },
            { q: "在家", options: ["at house", "in home", "at home", "on home"], answer: 2 }
          ]
        },
        {
          name: "语法 (be 动词 + 感觉)",
          points: 30,
          desc: "选择正确的句子",
          type: "grammar",
          items: [
            { q: "我饿了。", options: ["I am hungry.", "I have hungry.", "I hungry.", "I'm a hungry."], answer: 0 },
            { q: "你病了吗?", options: ["You are ill?", "Are you ill?", "Do you ill?", "Is you ill?"], answer: 1 },
            { q: "他累吗?", options: ["Is he tired?", "Are he tired?", "Does he tired?", "He is tired?"], answer: 0 },
            { q: "妈妈,我渴了。", options: [
              "Mum, I have thirsty.",
              "Mum, I am thirsty.",
              "Mum, I thirsty.",
              "Mum, I thirsty am."
            ], answer: 1 },
            { q: "你想要一些面包吗?", options: [
              "Do you like some bread?",
              "Would you like some bread?",
              "You would like bread?",
              "Are you like bread?"
            ], answer: 1 },
            { q: "What's the matter ____ you?", options: ["of", "with", "to", "in"], answer: 1 }
          ]
        },
        {
          name: "阅读理解",
          points: 20,
          desc: "读短文,回答问题",
          type: "reading",
          passage: "Mum comes home from work. Su Hai helps her take off her coat. Su Yang takes her bag. 'What's the matter, Mum? Are you ill?' asks Su Hai. 'No, but I'm tired,' says Mum. 'Have a rest,' says Su Yang. 'Are you hungry? Want some bread?' 'No thanks. I'm not hungry. I'm thirsty.' Su Hai brings some water. 'Thank you, dear,' says Mum.",
          passageZh: "妈妈下班回家。苏海帮她脱外套。苏阳拿包。'怎么了,妈妈?你病了吗?'苏海问。'没有,但我累了,'妈妈说。'休息一下,'苏阳说。'你饿吗?要点面包吗?''不,谢谢,我不饿。我渴。'苏海拿来一些水。'谢谢你,亲爱的,'妈妈说。",
          items: [
            { q: "How does Mum feel?", options: ["Ill", "Tired", "Hungry", "Happy"], answer: 1 },
            { q: "What does Mum want?", options: ["Bread", "Water", "Tea", "Soup"], answer: 1 },
            { q: "What do the girls do for Mum?", options: ["Make dinner", "Take care of her", "Read to her", "Sing for her"], answer: 1 }
          ]
        }
      ]
    },
    {
      id: 5,
      unitId: 5,
      title: "Unit 5 Eating out",
      titleZh: "Unit 5 单元测试",
      totalPoints: 100,
      sections: [
        {
          name: "听力",
          points: 20, type: "listen", desc: "听单词,选出对应中文",
          items: [
            { audio: "menu", options: ["菜单", "餐厅", "服务员", "菜"], answer: 0 },
            { audio: "delicious", options: ["难吃的", "辣的", "美味的", "甜的"], answer: 2 },
            { audio: "fried rice", options: ["米饭", "炒饭", "面条", "饺子"], answer: 1 },
            { audio: "spring roll", options: ["饺子", "热狗", "春卷", "汉堡"], answer: 2 },
            { audio: "tea", options: ["咖啡", "茶", "果汁", "牛奶"], answer: 1 }
          ]
        },
        {
          name: "词汇", points: 30, type: "vocab", desc: "选出正确的英文",
          items: [
            { q: "三明治", options: ["sandwitch", "sandwich", "sandwhich", "sandwidth"], answer: 1 },
            { q: "热狗", options: ["hotdog", "hot dog", "dog-hot", "hot-dog"], answer: 1 },
            { q: "一杯 (玻璃杯)", options: ["a glass of", "a cup of", "a bowl of", "a plate of"], answer: 0 },
            { q: "一杯 (热饮)", options: ["a glass of", "a cup of", "a piece of", "a bottle of"], answer: 1 },
            { q: "外出", options: ["out", "outside", "outdoor", "go"], answer: 0 },
            { q: "还要其他东西吗?", options: [
              "What else?", "Anything else?", "Some more?", "B 和 C 都对"
            ], answer: 1 }
          ]
        },
        {
          name: "语法 (点餐句型)", points: 30, type: "grammar", desc: "选择正确的句子",
          items: [
            { q: "你想要什么?", options: [
              "What you like?",
              "What would you like?",
              "What do you would like?",
              "What you would like to?"
            ], answer: 1 },
            { q: "我想要一些面条。", options: [
              "I like some noodles.",
              "I'd like some noodles.",
              "I am like some noodles.",
              "I would some noodles."
            ], answer: 1 },
            { q: "请来两杯果汁。", options: [
              "Two glass of juice, please.",
              "Two glasses of juice, please.",
              "Two cups of juices, please.",
              "Two juice glasses, please."
            ], answer: 1 },
            { q: "请来一杯茶。", options: [
              "A cup of teas, please.",
              "A cup of tea, please.",
              "A glass of tea, please.",
              "One tea, please."
            ], answer: 1 },
            { q: "Can I help you? — Yes, ____ some bread.", options: [
              "I like", "I'd like", "I'm like", "I am liking"
            ], answer: 1 },
            { q: "I'd like ____ apple.", options: ["a", "an", "the", "some"], answer: 1 }
          ]
        },
        {
          name: "阅读理解", points: 20, type: "reading", desc: "读短文,回答问题",
          passage: "Mike and his dad eat out at a Chinese restaurant. 'What would you like?' asks Dad. 'I'd like some noodles, please,' says Mike. Dad orders fried rice and spring rolls. The waiter asks, 'Anything to drink?' Mike wants orange juice. Dad wants tea. The food is very delicious. Mike loves Chinese food! After eating, Dad says, 'Let's try hot pot next time.' Mike is excited.",
          passageZh: "Mike 和爸爸去中餐馆吃饭。'你想要什么?'爸爸问。'我想要面条,'Mike 说。爸爸点了炒饭和春卷。服务员问:'喝点什么?' Mike 想喝橙汁,爸爸要茶。食物很好吃。Mike 爱中国菜!吃完后,爸爸说:'下次试试火锅吧。' Mike 很兴奋。",
          items: [
            { q: "What does Mike order?", options: ["Fried rice", "Noodles", "Spring rolls", "Hot pot"], answer: 1 },
            { q: "What does Mike drink?", options: ["Tea", "Water", "Orange juice", "Milk"], answer: 2 },
            { q: "What food will they try next time?", options: ["Sandwich", "Hot dog", "Hot pot", "Pizza"], answer: 2 }
          ]
        }
      ]
    },
    {
      id: 6,
      unitId: 6,
      title: "Unit 6 Jobs",
      titleZh: "Unit 6 单元测试",
      totalPoints: 100,
      sections: [
        {
          name: "听力", points: 20, type: "listen", desc: "听单词,选出对应中文",
          items: [
            { audio: "doctor", options: ["医生", "护士", "老师", "工人"], answer: 0 },
            { audio: "nurse", options: ["医生", "护士", "厨师", "司机"], answer: 1 },
            { audio: "farmer", options: ["工人", "农民", "警察", "厨师"], answer: 1 },
            { audio: "policeman", options: ["女警察", "男警察", "司机", "医生"], answer: 1 },
            { audio: "hospital", options: ["学校", "工厂", "医院", "银行"], answer: 2 }
          ]
        },
        {
          name: "词汇", points: 30, type: "vocab", desc: "选出正确的英文",
          items: [
            { q: "司机", options: ["drive", "driver", "drivor", "driving"], answer: 1 },
            { q: "工人", options: ["work", "worker", "workor", "working"], answer: 1 },
            { q: "厨师", options: ["cooker", "cooker", "cook", "cooking"], answer: 2 },
            { q: "出租车", options: ["taxi", "bus", "train", "car"], answer: 0 },
            { q: "火车", options: ["plane", "train", "tram", "trian"], answer: 1 },
            { q: "父母", options: ["parents", "parent", "people", "person"], answer: 0 }
          ]
        },
        {
          name: "语法 (问职业)", points: 30, type: "grammar", desc: "选择正确的句子",
          items: [
            { q: "你爸爸是做什么的?", options: [
              "What is your father?",
              "What's your father's job?",
              "What does your father?",
              "B 和 C 都对"
            ], answer: 1 },
            { q: "他是医生。", options: ["He's a doctor.", "He's doctor.", "He's an doctor.", "He doctor."], answer: 0 },
            { q: "她是老师吗?", options: [
              "Is she teacher?",
              "Is she a teacher?",
              "Does she a teacher?",
              "She is a teacher?"
            ], answer: 1 },
            { q: "医生帮助生病的人。", options: [
              "Doctor help sick people.",
              "Doctors help sick people.",
              "Doctors help sick person.",
              "Doctor helps sick people."
            ], answer: 1 },
            { q: "她妈妈是 ____ 老师。", options: ["a", "an", "the", "/"], answer: 0 },
            { q: "他爸爸是 ____ 出租车司机。", options: ["a", "an", "the", "/"], answer: 0 }
          ]
        },
        {
          name: "阅读理解", points: 20, type: "reading", desc: "读短文,回答问题",
          passage: "It's Labour Day. Liu Tao, Su Hai and Yang Ling talk about their parents' jobs. Liu Tao's father is a taxi driver. He takes people to different places. His mother is a cook. She makes delicious food. Su Hai's father is a doctor. He helps sick people. Her mother is a worker. She makes nice sweets. Yang Ling's father is a policeman. He keeps people safe. Her mother is a teacher. She helps children learn. All parents have great jobs!",
          passageZh: "今天是劳动节。刘涛、苏海和杨玲谈论父母的工作。刘涛爸爸是出租车司机,送人去不同地方。妈妈是厨师,做美味食物。苏海爸爸是医生,帮助病人。妈妈是工人,做好吃的糖果。杨玲爸爸是警察,保护人民安全。妈妈是老师,帮助孩子学习。所有父母都有伟大的工作!",
          items: [
            { q: "What's Liu Tao's mother's job?", options: ["Driver", "Doctor", "Cook", "Teacher"], answer: 2 },
            { q: "What does Su Hai's father do?", options: ["Takes people places", "Helps sick people", "Teaches children", "Keeps people safe"], answer: 1 },
            { q: "Yang Ling's father keeps people ____.", options: ["happy", "safe", "healthy", "smart"], answer: 1 }
          ]
        }
      ]
    },
    {
      id: 7,
      unitId: 7,
      title: "Unit 7 Chores",
      titleZh: "Unit 7 单元测试",
      totalPoints: 100,
      sections: [
        {
          name: "听力", points: 20, type: "listen", desc: "听单词,选出对应中文",
          items: [
            { audio: "chore", options: ["游戏", "家务", "课程", "运动"], answer: 1 },
            { audio: "dish", options: ["筷子", "碗,碟", "杯子", "盘子"], answer: 1 },
            { audio: "weekend", options: ["工作日", "周末", "假期", "今天"], answer: 1 },
            { audio: "make the bed", options: ["铺床", "做饭", "洗衣服", "打扫"], answer: 0 },
            { audio: "feed the cat", options: ["遛猫", "洗猫", "喂猫", "抱猫"], answer: 2 }
          ]
        },
        {
          name: "词汇", points: 30, type: "vocab", desc: "选出正确的英文",
          items: [
            { q: "洗碗", options: ["wash the dish", "wash the dishes", "washing dish", "washing dishes"], answer: 1 },
            { q: "给花浇水", options: ["water flowers", "water the flowers", "watering flower", "give flowers water"], answer: 1 },
            { q: "扫地", options: ["sweep floor", "sweeping floor", "sweep the floor", "sweep floors"], answer: 2 },
            { q: "做午饭", options: ["cook the lunch", "make lunch", "cook lunch", "B 和 C 都对"], answer: 3 },
            { q: "干得好!", options: ["Good!", "Good job!", "Job good!", "A 和 B 都对"], answer: 3 },
            { q: "周末", options: ["weekday", "weekend", "weeks", "week and"], answer: 1 }
          ]
        },
        {
          name: "语法 (现在进行时 V-ing)", points: 30, type: "grammar", desc: "选择正确的句子",
          items: [
            { q: "你在做什么?", options: [
              "What you doing?",
              "What are you doing?",
              "What you do?",
              "What are you do?"
            ], answer: 1 },
            { q: "我在洗碗。", options: [
              "I wash the dishes.",
              "I am washing the dishes.",
              "I'm wash the dishes.",
              "I washing dishes."
            ], answer: 1 },
            { q: "他在喂猫。", options: [
              "He feed the cat.",
              "He is feed the cat.",
              "He is feeding the cat.",
              "He feeding cat."
            ], answer: 2 },
            { q: "妈妈正在做午饭。", options: [
              "Mum cook lunch.",
              "Mum is cooking lunch.",
              "Mum is cook lunch.",
              "Mum cooking lunch."
            ], answer: 1 },
            { q: "wash 的 ing 形式:", options: ["washing", "washeing", "washng", "washinging"], answer: 0 },
            { q: "make 的 ing 形式:", options: ["makeing", "making", "makding", "maeking"], answer: 1 }
          ]
        },
        {
          name: "阅读理解", points: 20, type: "reading", desc: "读短文,回答问题",
          passage: "It's Saturday. Liu Tao's family is doing chores. Mum is cooking lunch in the kitchen. Dad is washing the clothes. Liu Tao is making his bed. His sister Su Yang is watering the flowers. After lunch, Mum is cleaning the table. Su Yang is washing the dishes. Liu Tao is feeding their cat. Their home is clean and nice now. Everyone feels happy.",
          passageZh: "今天是星期六。刘涛家在做家务。妈妈在厨房做午饭。爸爸在洗衣服。刘涛在铺床。妹妹苏阳在浇花。午饭后,妈妈在擦桌子。苏阳在洗碗。刘涛在喂猫。家里现在干净整洁,大家都很开心。",
          items: [
            { q: "What's Dad doing?", options: ["Cooking", "Washing clothes", "Watering flowers", "Sleeping"], answer: 1 },
            { q: "What's Liu Tao doing in the morning?", options: ["Washing dishes", "Making the bed", "Sweeping", "Reading"], answer: 1 },
            { q: "How does the family feel?", options: ["Tired", "Sad", "Happy", "Angry"], answer: 2 }
          ]
        }
      ]
    },
    {
      id: 8,
      unitId: 8,
      title: "Unit 8 In the kitchen",
      titleZh: "Unit 8 单元测试",
      totalPoints: 100,
      sections: [
        {
          name: "听力", points: 20, type: "listen", desc: "听单词,选出对应中文",
          items: [
            { audio: "kitchen", options: ["卧室", "客厅", "厨房", "浴室"], answer: 2 },
            { audio: "potato", options: ["番茄", "土豆", "茄子", "黄瓜"], answer: 1 },
            { audio: "tomato", options: ["土豆", "番茄", "苹果", "草莓"], answer: 1 },
            { audio: "chicken", options: ["鱼", "猪肉", "牛肉", "鸡肉"], answer: 3 },
            { audio: "soup", options: ["汤", "水", "果汁", "茶"], answer: 0 }
          ]
        },
        {
          name: "词汇", points: 30, type: "vocab", desc: "选出正确的英文",
          items: [
            { q: "鸡蛋", options: ["eg", "egg", "egge", "eggs"], answer: 1 },
            { q: "牛奶", options: ["mike", "milk", "milkt", "milks"], answer: 1 },
            { q: "切", options: ["cat", "cut", "cot", "cit"], answer: 1 },
            { q: "肉", options: ["meet", "meat", "meatt", "meets"], answer: 1 },
            { q: "小心", options: ["careful", "carefull", "carfull", "carefor"], answer: 0 },
            { q: "生日", options: ["birthday", "birthdy", "birthdaie", "birsday"], answer: 0 }
          ]
        },
        {
          name: "语法 (现在进行时疑问句)", points: 30, type: "grammar", desc: "选择正确的句子",
          items: [
            { q: "你在做晚饭吗?", options: [
              "Do you cook dinner?",
              "Are you cooking dinner?",
              "Are you cook dinner?",
              "You are cooking dinner?"
            ], answer: 1 },
            { q: "肯定回答 (Are you cooking?):", options: ["Yes, I do.", "Yes, I am.", "Yes, I can.", "Yes, I have."], answer: 1 },
            { q: "否定回答 (Are you cooking?):", options: ["No, I'm not.", "No, I don't.", "No, I can't.", "No, I haven't."], answer: 0 },
            { q: "cut 的 ing 形式:", options: ["cuting", "cutting", "cuteing", "cuts"], answer: 1 },
            { q: "swim 的 ing 形式:", options: ["swiming", "swimming", "swiming", "swims"], answer: 1 },
            { q: "What ____ she ____?", options: [
              "is, doing", "are, doing", "do, doing", "does, doing"
            ], answer: 0 }
          ]
        },
        {
          name: "阅读理解", points: 20, type: "reading", desc: "读短文,回答问题",
          passage: "Today is Dad's birthday. The family is in the kitchen. Mum is cutting potatoes. Taotao asks, 'Can I help?' 'Yes, wash the tomatoes please,' Mum says. Dad is cooking Kung Pao Chicken. Taotao says, 'I can't wait!' At dinner, the chicken is delicious. 'You're a great cook!' says Taotao. Taotao makes tomato and egg soup for Dad and Mum. They say 'Thanks!' It's a happy dinner.",
          passageZh: "今天是爸爸生日。一家人在厨房。妈妈在切土豆。陶陶问:'我能帮忙吗?''可以,请洗番茄,'妈妈说。爸爸在做宫保鸡丁。陶陶说:'我等不及了!'吃晚饭时,鸡肉很美味。'你是个伟大的厨师!'陶陶说。陶陶给爸妈做了番茄鸡蛋汤。他们说'谢谢!'快乐的晚餐。",
          items: [
            { q: "Why is the family in the kitchen?", options: ["It's lunch", "Dad's birthday", "Mum's tired", "Taotao asked"], answer: 1 },
            { q: "What is Dad cooking?", options: ["Tomato soup", "Fried fish", "Kung Pao Chicken", "Noodles"], answer: 2 },
            { q: "What does Taotao make?", options: ["Cake", "Chicken", "Tomato and egg soup", "Salad"], answer: 2 }
          ]
        }
      ]
    }
  ]
};

// 工具
window.QUIZZES.getAll = function() { return this.quizzes; };
window.QUIZZES.getById = function(id) { return this.quizzes.find(q => q.id === id); };
window.QUIZZES.getTotalItems = function(quiz) {
  return quiz.sections.reduce((s, sec) => s + sec.items.length, 0);
};
