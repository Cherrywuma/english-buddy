// 20 个情景对话剧本
// 每个剧本含角色、场景、8-12 轮对话、学习要点
window.SCRIPTS = {
  meta: {
    title: "情景对话剧本",
    total: 20
  },
  scripts: [
    {
      id: 1,
      title: "Good Morning!",
      titleZh: "早晨起床",
      scene: "卧室和早餐桌",
      level: 1,
      roles: ["Mum", "Child"],
      learningPoints: ["问候", "时间表达", "早餐场景"],
      dialogue: [
        { role: "Mum", en: "Good morning! Time to get up!", zh: "早上好!该起床了!" },
        { role: "Child", en: "Good morning, Mum. What time is it?", zh: "早上好,妈妈。几点了?" },
        { role: "Mum", en: "It's seven o'clock.", zh: "七点了。" },
        { role: "Child", en: "OK. I'm getting up.", zh: "好的,我起来了。" },
        { role: "Mum", en: "Wash your face and brush your teeth.", zh: "洗脸刷牙。" },
        { role: "Child", en: "OK, Mum. What's for breakfast?", zh: "好的,妈妈。早餐吃什么?" },
        { role: "Mum", en: "Bread, eggs and milk.", zh: "面包、鸡蛋和牛奶。" },
        { role: "Child", en: "Great! I love eggs!", zh: "太好了!我爱吃鸡蛋!" },
        { role: "Mum", en: "Hurry up! You'll be late for school.", zh: "快点!你上学要迟到了。" },
        { role: "Child", en: "OK, I'm coming!", zh: "好的,我来了!" }
      ]
    },
    {
      id: 2,
      title: "On the Way to School",
      titleZh: "上学路上",
      scene: "街道",
      level: 1,
      roles: ["Tom", "Lily"],
      learningPoints: ["问候", "交通安全", "课程话题"],
      dialogue: [
        { role: "Tom", en: "Hi, Lily!", zh: "嗨,Lily!" },
        { role: "Lily", en: "Hi, Tom! How are you?", zh: "嗨,Tom!你好吗?" },
        { role: "Tom", en: "I'm good. Let's go to school together.", zh: "我很好。我们一起去上学吧。" },
        { role: "Lily", en: "OK! Wait for the green light.", zh: "好的!等绿灯。" },
        { role: "Tom", en: "Look left and right first.", zh: "先看左右两边。" },
        { role: "Lily", en: "Now it's safe. Let's cross.", zh: "现在安全了,过吧。" },
        { role: "Tom", en: "What lessons do we have today?", zh: "我们今天有什么课?" },
        { role: "Lily", en: "We have English, Maths and PE.", zh: "我们有英语、数学和体育。" },
        { role: "Tom", en: "I like English best!", zh: "我最喜欢英语!" },
        { role: "Lily", en: "Me too. Look! We're at school.", zh: "我也是。看!我们到学校了。" }
      ]
    },
    {
      id: 3,
      title: "In the Classroom",
      titleZh: "课堂上",
      scene: "教室",
      level: 1,
      roles: ["Teacher", "Student"],
      learningPoints: ["课堂用语", "举手提问", "礼貌"],
      dialogue: [
        { role: "Teacher", en: "Good morning, class!", zh: "同学们早上好!" },
        { role: "Student", en: "Good morning, Miss Li!", zh: "李老师早上好!" },
        { role: "Teacher", en: "Open your books to page 12.", zh: "翻到课本第 12 页。" },
        { role: "Student", en: "May I ask a question?", zh: "我可以提问吗?" },
        { role: "Teacher", en: "Of course. What's your question?", zh: "当然可以。什么问题?" },
        { role: "Student", en: "I don't understand this word.", zh: "我不懂这个词。" },
        { role: "Teacher", en: "It means 'happy'. Repeat after me.", zh: "意思是'开心'。跟我读。" },
        { role: "Student", en: "Happy.", zh: "开心。" },
        { role: "Teacher", en: "Good job! Now read the sentence aloud.", zh: "做得好!现在大声读这句话。" },
        { role: "Student", en: "OK. I will try.", zh: "好的,我试试。" }
      ]
    },
    {
      id: 4,
      title: "Lunch Time",
      titleZh: "午餐时间",
      scene: "学校食堂",
      level: 1,
      roles: ["Mike", "Sam"],
      learningPoints: ["食物", "分享", "口味"],
      dialogue: [
        { role: "Mike", en: "I'm hungry. What about you?", zh: "我饿了,你呢?" },
        { role: "Sam", en: "Me too. Let's go to the canteen.", zh: "我也是,我们去食堂吧。" },
        { role: "Mike", en: "What's for lunch today?", zh: "今天午饭吃什么?" },
        { role: "Sam", en: "Rice, chicken and vegetables.", zh: "米饭、鸡肉和蔬菜。" },
        { role: "Mike", en: "Yum! I love chicken.", zh: "好吃!我爱吃鸡肉。" },
        { role: "Sam", en: "Do you want some of my soup?", zh: "想喝点我的汤吗?" },
        { role: "Mike", en: "Yes, please. Thank you.", zh: "好,谢谢。" },
        { role: "Sam", en: "How does it taste?", zh: "味道怎么样?" },
        { role: "Mike", en: "It's delicious!", zh: "真好吃!" },
        { role: "Sam", en: "I'm full now. Are you?", zh: "我吃饱了。你呢?" },
        { role: "Mike", en: "Yes, I'm full too. Let's go play.", zh: "我也饱了。我们去玩吧。" }
      ]
    },
    {
      id: 5,
      title: "After School",
      titleZh: "放学回家",
      scene: "家门口",
      level: 1,
      roles: ["Child", "Mum"],
      learningPoints: ["问候", "日常", "分享一天"],
      dialogue: [
        { role: "Child", en: "Mum, I'm home!", zh: "妈妈,我回来了!" },
        { role: "Mum", en: "Welcome home! How was your day?", zh: "欢迎回家!今天怎么样?" },
        { role: "Child", en: "It was great!", zh: "很棒!" },
        { role: "Mum", en: "What did you learn today?", zh: "今天学了什么?" },
        { role: "Child", en: "We learned new English words.", zh: "我们学了新的英语单词。" },
        { role: "Mum", en: "That's nice. Are you tired?", zh: "真好,你累吗?" },
        { role: "Child", en: "A little. I'm hungry too.", zh: "有点累,也饿了。" },
        { role: "Mum", en: "Have a rest. Dinner will be ready soon.", zh: "休息一下,马上吃饭。" },
        { role: "Child", en: "Thanks, Mum. Can I help you?", zh: "谢谢妈妈。我能帮你吗?" },
        { role: "Mum", en: "Yes, please set the table.", zh: "好,请摆一下餐具。" }
      ]
    },
    {
      id: 6,
      title: "Dinner Together",
      titleZh: "晚饭时光",
      scene: "餐桌",
      level: 1,
      roles: ["Dad", "Mum", "Child"],
      learningPoints: ["家庭对话", "口味描述", "礼貌"],
      dialogue: [
        { role: "Dad", en: "It's time for dinner!", zh: "该吃晚饭了!" },
        { role: "Child", en: "Wow, it smells good!", zh: "哇,真香!" },
        { role: "Mum", en: "Help yourself, everyone.", zh: "大家请自便。" },
        { role: "Dad", en: "Pass the salt, please.", zh: "请把盐递给我。" },
        { role: "Child", en: "Here you are, Dad.", zh: "给你,爸爸。" },
        { role: "Dad", en: "Thank you.", zh: "谢谢。" },
        { role: "Mum", en: "How do you like the fish?", zh: "鱼怎么样?" },
        { role: "Child", en: "It's delicious, Mum!", zh: "真好吃,妈妈!" },
        { role: "Dad", en: "Eat more vegetables, dear.", zh: "多吃点蔬菜,亲爱的。" },
        { role: "Child", en: "OK, Dad. May I have some rice?", zh: "好的爸爸。能再来点米饭吗?" },
        { role: "Mum", en: "Sure. Here you are.", zh: "当然,给你。" },
        { role: "Child", en: "Thanks. I'm full now.", zh: "谢谢。我吃饱了。" }
      ]
    },
    {
      id: 7,
      title: "Going to the Doctor",
      titleZh: "看医生",
      scene: "医院",
      level: 2,
      roles: ["Doctor", "Child", "Mum"],
      learningPoints: ["身体不适", "看病用语", "礼貌"],
      dialogue: [
        { role: "Doctor", en: "Hello! What's the matter?", zh: "你好,怎么了?" },
        { role: "Mum", en: "He has a fever and a cough.", zh: "他发烧咳嗽。" },
        { role: "Doctor", en: "Open your mouth, please.", zh: "请张开嘴。" },
        { role: "Child", en: "Ahhh...", zh: "啊..." },
        { role: "Doctor", en: "Does it hurt here?", zh: "这里疼吗?" },
        { role: "Child", en: "Yes, a little.", zh: "有一点。" },
        { role: "Doctor", en: "Don't worry. It's just a cold.", zh: "别担心,只是感冒。" },
        { role: "Mum", en: "What should we do?", zh: "我们该怎么办?" },
        { role: "Doctor", en: "Take this medicine three times a day.", zh: "这个药每天吃三次。" },
        { role: "Mum", en: "Thank you, Doctor.", zh: "谢谢你,医生。" },
        { role: "Doctor", en: "Get well soon!", zh: "早日康复!" },
        { role: "Child", en: "Thanks!", zh: "谢谢!" }
      ]
    },
    {
      id: 8,
      title: "Happy Birthday!",
      titleZh: "生日聚会",
      scene: "家里",
      level: 1,
      roles: ["Lily", "Tom", "Mum"],
      learningPoints: ["祝福", "礼物", "生日歌"],
      dialogue: [
        { role: "Mum", en: "Happy birthday, Lily!", zh: "生日快乐,Lily!" },
        { role: "Lily", en: "Thanks, Mum!", zh: "谢谢妈妈!" },
        { role: "Tom", en: "Happy birthday! Here's your gift.", zh: "生日快乐!这是给你的礼物。" },
        { role: "Lily", en: "Wow, thank you, Tom! Can I open it?", zh: "哇,谢谢你 Tom!我能打开吗?" },
        { role: "Tom", en: "Of course!", zh: "当然!" },
        { role: "Lily", en: "A book! I love it!", zh: "一本书!我喜欢!" },
        { role: "Mum", en: "Let's sing the birthday song.", zh: "我们唱生日歌吧。" },
        { role: "all", en: "Happy birthday to you!", zh: "祝你生日快乐!" },
        { role: "Lily", en: "Now I'll make a wish.", zh: "现在我要许愿。" },
        { role: "Mum", en: "Blow out the candles!", zh: "吹蜡烛!" },
        { role: "Tom", en: "Let's eat the cake!", zh: "我们吃蛋糕吧!" },
        { role: "Lily", en: "Thank you, everyone!", zh: "谢谢大家!" }
      ]
    },
    {
      id: 9,
      title: "At the Supermarket",
      titleZh: "超市购物",
      scene: "超市",
      level: 1,
      roles: ["Child", "Mum", "Cashier"],
      learningPoints: ["购物", "价钱", "付款"],
      dialogue: [
        { role: "Mum", en: "Let's get some fruit.", zh: "我们买点水果吧。" },
        { role: "Child", en: "Can I have an apple?", zh: "我能要个苹果吗?" },
        { role: "Mum", en: "Sure. Pick one.", zh: "可以,选一个。" },
        { role: "Child", en: "How about this big red one?", zh: "这个又大又红的怎么样?" },
        { role: "Mum", en: "Good choice. Let's also get some milk.", zh: "好选择。再买点牛奶。" },
        { role: "Child", en: "OK, I'll get it.", zh: "好的,我去拿。" },
        { role: "Mum", en: "Now let's pay. The cashier is over there.", zh: "现在去付钱。收银台在那边。" },
        { role: "Cashier", en: "Hello! That's 35 yuan.", zh: "你好!一共 35 元。" },
        { role: "Mum", en: "Here you are.", zh: "给你。" },
        { role: "Cashier", en: "Here's your change. Thank you!", zh: "这是您的找零。谢谢!" },
        { role: "Child", en: "Bye! Have a nice day!", zh: "再见!祝您愉快!" }
      ]
    },
    {
      id: 10,
      title: "At the Restaurant",
      titleZh: "餐厅点餐",
      scene: "中餐馆",
      level: 1,
      roles: ["Waiter", "Dad", "Child"],
      learningPoints: ["点餐", "礼貌用语", "饮品"],
      dialogue: [
        { role: "Waiter", en: "Welcome! How many people?", zh: "欢迎光临!几位?" },
        { role: "Dad", en: "Two, please.", zh: "两位。" },
        { role: "Waiter", en: "This way, please. Here's the menu.", zh: "这边请。这是菜单。" },
        { role: "Dad", en: "What would you like to eat?", zh: "你想吃什么?" },
        { role: "Child", en: "I'd like some noodles.", zh: "我想要面条。" },
        { role: "Dad", en: "I'd like fried rice and spring rolls.", zh: "我要炒饭和春卷。" },
        { role: "Waiter", en: "Anything to drink?", zh: "喝点什么?" },
        { role: "Child", en: "A glass of orange juice, please.", zh: "请来一杯橙汁。" },
        { role: "Dad", en: "A cup of tea for me.", zh: "我要一杯茶。" },
        { role: "Waiter", en: "OK, just a moment.", zh: "好的,稍等。" },
        { role: "Child", en: "It's delicious! I love Chinese food!", zh: "真好吃!我爱中国菜!" },
        { role: "Dad", en: "The bill, please.", zh: "请结账。" }
      ]
    },
    {
      id: 11,
      title: "Asking for Directions",
      titleZh: "问路",
      scene: "街上",
      level: 2,
      roles: ["Tourist", "Local"],
      learningPoints: ["问路", "方向", "礼貌"],
      dialogue: [
        { role: "Tourist", en: "Excuse me. Can you help me?", zh: "打扰一下,能帮我吗?" },
        { role: "Local", en: "Sure. What's the matter?", zh: "当然,怎么了?" },
        { role: "Tourist", en: "I'm looking for the library.", zh: "我在找图书馆。" },
        { role: "Local", en: "Go straight and turn left at the bank.", zh: "一直走,在银行那里左转。" },
        { role: "Tourist", en: "Is it far from here?", zh: "离这儿远吗?" },
        { role: "Local", en: "No, it's about 5 minutes' walk.", zh: "不远,走路大概 5 分钟。" },
        { role: "Tourist", en: "Could you say it again, please?", zh: "能再说一遍吗?" },
        { role: "Local", en: "Sure. Go straight, then turn left at the bank.", zh: "当然。一直走,然后在银行左转。" },
        { role: "Tourist", en: "I see. Thank you so much!", zh: "明白了。非常感谢!" },
        { role: "Local", en: "You're welcome. Have a good day!", zh: "不客气。祝你愉快!" }
      ]
    },
    {
      id: 12,
      title: "Inviting a Friend",
      titleZh: "约朋友来玩",
      scene: "电话",
      level: 2,
      roles: ["Mike", "Tom"],
      learningPoints: ["电话用语", "邀请", "约定时间"],
      dialogue: [
        { role: "Mike", en: "Hello! This is Mike.", zh: "你好,我是 Mike。" },
        { role: "Tom", en: "Hi, Mike! What's up?", zh: "嗨 Mike!怎么了?" },
        { role: "Mike", en: "Would you like to come to my house?", zh: "你想来我家吗?" },
        { role: "Tom", en: "Sure! When?", zh: "好啊!什么时候?" },
        { role: "Mike", en: "How about this Saturday?", zh: "这周六怎么样?" },
        { role: "Tom", en: "Saturday is good. What time?", zh: "周六可以。几点?" },
        { role: "Mike", en: "At three o'clock in the afternoon.", zh: "下午三点。" },
        { role: "Tom", en: "OK. What can we do?", zh: "好的。我们能做什么?" },
        { role: "Mike", en: "We can play games and watch a movie.", zh: "我们可以玩游戏看电影。" },
        { role: "Tom", en: "Sounds great! See you on Saturday!", zh: "听起来不错!周六见!" },
        { role: "Mike", en: "See you!", zh: "再见!" }
      ]
    },
    {
      id: 13,
      title: "At the Museum",
      titleZh: "参观博物馆",
      scene: "博物馆",
      level: 2,
      roles: ["Guide", "Child", "Teacher"],
      learningPoints: ["参观用语", "提问", "学习"],
      dialogue: [
        { role: "Guide", en: "Welcome to the museum!", zh: "欢迎来到博物馆!" },
        { role: "Teacher", en: "Class, look at this old painting.", zh: "同学们,看这幅古画。" },
        { role: "Child", en: "Wow, it's beautiful!", zh: "哇,真美!" },
        { role: "Guide", en: "It's over 500 years old.", zh: "它有 500 多年历史了。" },
        { role: "Child", en: "May I take a picture?", zh: "我可以拍照吗?" },
        { role: "Guide", en: "Sorry, no photos here.", zh: "对不起,这里不能拍照。" },
        { role: "Child", en: "OK. I'm sorry.", zh: "好的,对不起。" },
        { role: "Teacher", en: "What did you learn today?", zh: "你今天学到了什么?" },
        { role: "Child", en: "Many interesting things!", zh: "很多有趣的东西!" },
        { role: "Guide", en: "Please follow me to the next room.", zh: "请跟我去下个房间。" }
      ]
    },
    {
      id: 14,
      title: "At the Airport",
      titleZh: "在机场",
      scene: "机场",
      level: 2,
      roles: ["Mum", "Child", "Staff"],
      learningPoints: ["旅行", "正式用语", "时间"],
      dialogue: [
        { role: "Child", en: "Mum, where do we go now?", zh: "妈妈,我们现在去哪儿?" },
        { role: "Mum", en: "We need to check in first.", zh: "我们先要办登机。" },
        { role: "Staff", en: "Hello! May I see your tickets?", zh: "你好!请出示机票。" },
        { role: "Mum", en: "Here you are.", zh: "给你。" },
        { role: "Staff", en: "Two tickets to Beijing, right?", zh: "两张去北京的票,对吗?" },
        { role: "Mum", en: "Yes, that's right.", zh: "对,没错。" },
        { role: "Staff", en: "Gate 12, please. Have a nice trip!", zh: "12 号登机口。祝旅途愉快!" },
        { role: "Mum", en: "Thank you very much.", zh: "非常感谢。" },
        { role: "Child", en: "Mum, I'm excited!", zh: "妈妈,我好兴奋!" },
        { role: "Mum", en: "Me too! Let's go.", zh: "我也是!走吧。" }
      ]
    },
    {
      id: 15,
      title: "Chinese New Year",
      titleZh: "过年聚会",
      scene: "家里",
      level: 1,
      roles: ["Grandma", "Child", "Dad"],
      learningPoints: ["节日祝福", "家庭", "传统"],
      dialogue: [
        { role: "Child", en: "Happy New Year, Grandma!", zh: "新年快乐,奶奶!" },
        { role: "Grandma", en: "Happy New Year! Here's a red envelope for you.", zh: "新年快乐!这是给你的红包。" },
        { role: "Child", en: "Wow, thank you so much!", zh: "哇,太谢谢您了!" },
        { role: "Grandma", en: "How old are you now?", zh: "你现在多大了?" },
        { role: "Child", en: "I'm ten years old.", zh: "我十岁了。" },
        { role: "Dad", en: "Time flies! You're a big kid now.", zh: "时间过得真快!你是大孩子了。" },
        { role: "Grandma", en: "Are you doing well at school?", zh: "你在学校怎么样?" },
        { role: "Child", en: "Yes, I love English class!", zh: "很好,我喜欢英语课!" },
        { role: "Dad", en: "Dinner is ready. Let's eat!", zh: "晚饭好了,吃饭吧!" },
        { role: "Child", en: "Yay! I love jiaozi!", zh: "耶!我爱吃饺子!" }
      ]
    },
    {
      id: 16,
      title: "I'm Lost!",
      titleZh: "走丢了",
      scene: "商场",
      level: 2,
      roles: ["Child", "Stranger", "Mum"],
      learningPoints: ["求助", "紧急情况", "礼貌"],
      dialogue: [
        { role: "Child", en: "Excuse me, can you help me?", zh: "打扰一下,能帮我吗?" },
        { role: "Stranger", en: "Of course. What's wrong?", zh: "当然,怎么了?" },
        { role: "Child", en: "I can't find my mum.", zh: "我找不到妈妈了。" },
        { role: "Stranger", en: "Don't worry. What's her name?", zh: "别担心。她叫什么?" },
        { role: "Child", en: "Her name is Mary Wang.", zh: "她叫王玛丽。" },
        { role: "Stranger", en: "Do you know her phone number?", zh: "你知道她的电话吗?" },
        { role: "Child", en: "Yes, it's 138-1234-5678.", zh: "知道,138-1234-5678。" },
        { role: "Stranger", en: "Let me call her for you.", zh: "我帮你给她打电话。" },
        { role: "Mum", en: "Hello?", zh: "喂?" },
        { role: "Stranger", en: "Your child is with me at the toy shop.", zh: "你的孩子和我在玩具店。" },
        { role: "Mum", en: "Oh thank you! I'll come right away.", zh: "哦谢谢你!我马上来。" },
        { role: "Child", en: "Thank you so much for helping me.", zh: "太感谢您帮我了。" }
      ]
    },
    {
      id: 17,
      title: "Meeting a New Friend",
      titleZh: "认识新朋友",
      scene: "操场",
      level: 1,
      roles: ["Anna", "Ben"],
      learningPoints: ["自我介绍", "兴趣爱好", "交朋友"],
      dialogue: [
        { role: "Anna", en: "Hi! I'm Anna. What's your name?", zh: "嗨!我叫 Anna。你叫什么?" },
        { role: "Ben", en: "Hi, Anna! I'm Ben. Nice to meet you.", zh: "嗨 Anna!我叫 Ben。很高兴认识你。" },
        { role: "Anna", en: "Nice to meet you too. Are you new here?", zh: "我也是。你是新来的吗?" },
        { role: "Ben", en: "Yes, I just moved here.", zh: "是的,我刚搬来。" },
        { role: "Anna", en: "Where are you from?", zh: "你从哪儿来?" },
        { role: "Ben", en: "I'm from Shanghai. How about you?", zh: "我从上海来。你呢?" },
        { role: "Anna", en: "I'm from here. What's your hobby?", zh: "我是本地的。你的爱好是什么?" },
        { role: "Ben", en: "I like playing football. Do you?", zh: "我喜欢踢足球。你呢?" },
        { role: "Anna", en: "Yes! Let's play together sometime.", zh: "是的!我们改天一起玩吧。" },
        { role: "Ben", en: "Great! Can we be friends?", zh: "太好了!我们能做朋友吗?" },
        { role: "Anna", en: "Of course!", zh: "当然!" }
      ]
    },
    {
      id: 18,
      title: "The Neighbor",
      titleZh: "邻居见面",
      scene: "电梯里",
      level: 1,
      roles: ["Mrs. Lee", "Child"],
      learningPoints: ["寒暄", "礼貌", "邻里关系"],
      dialogue: [
        { role: "Mrs. Lee", en: "Good morning, little friend!", zh: "早上好,小朋友!" },
        { role: "Child", en: "Good morning, Mrs. Lee!", zh: "早上好,李阿姨!" },
        { role: "Mrs. Lee", en: "Are you going to school?", zh: "你去上学吗?" },
        { role: "Child", en: "Yes, I am.", zh: "是的。" },
        { role: "Mrs. Lee", en: "How is your mother?", zh: "你妈妈好吗?" },
        { role: "Child", en: "She's fine, thanks. How about you?", zh: "她很好,谢谢。您呢?" },
        { role: "Mrs. Lee", en: "I'm good. Be careful on the road.", zh: "我很好。路上小心。" },
        { role: "Child", en: "I will. Thank you.", zh: "好的,谢谢。" },
        { role: "Mrs. Lee", en: "Have a nice day at school.", zh: "祝你在学校开心。" },
        { role: "Child", en: "Thank you! Goodbye!", zh: "谢谢!再见!" }
      ]
    },
    {
      id: 19,
      title: "Lost and Found",
      titleZh: "失物招领",
      scene: "学校",
      level: 2,
      roles: ["Child", "Teacher"],
      learningPoints: ["丢东西", "描述物品", "求助"],
      dialogue: [
        { role: "Child", en: "Miss Li, I have a problem.", zh: "李老师,我有个问题。" },
        { role: "Teacher", en: "What's the matter?", zh: "怎么了?" },
        { role: "Child", en: "I lost my pencil case.", zh: "我的文具盒丢了。" },
        { role: "Teacher", en: "When did you see it last?", zh: "你最后什么时候看到的?" },
        { role: "Child", en: "After lunch in the library.", zh: "午饭后在图书馆。" },
        { role: "Teacher", en: "What does it look like?", zh: "什么样子的?" },
        { role: "Child", en: "It's blue with stars on it.", zh: "蓝色的,上面有星星。" },
        { role: "Teacher", en: "Let's go to lost and found.", zh: "我们去失物招领处看看。" },
        { role: "Child", en: "Look! That's my pencil case!", zh: "看!那就是我的文具盒!" },
        { role: "Teacher", en: "Great! Be more careful next time.", zh: "太好了!下次小心一点。" },
        { role: "Child", en: "I will. Thank you, Miss Li.", zh: "我会的。谢谢李老师。" }
      ]
    },
    {
      id: 20,
      title: "Sharing Ideas",
      titleZh: "讨论想法",
      scene: "教室",
      level: 2,
      roles: ["Yang Ling", "Wang Bing", "Su Hai"],
      learningPoints: ["表达想法", "讨论", "意见"],
      dialogue: [
        { role: "Yang Ling", en: "What should we do this weekend?", zh: "我们这周末做什么?" },
        { role: "Wang Bing", en: "How about going to the park?", zh: "去公园怎么样?" },
        { role: "Su Hai", en: "I have a better idea. Let's go swimming.", zh: "我有个更好的想法。去游泳吧。" },
        { role: "Yang Ling", en: "That sounds fun! But it might rain.", zh: "听起来不错!但可能下雨。" },
        { role: "Wang Bing", en: "Let's check the weather.", zh: "我们查一下天气。" },
        { role: "Su Hai", en: "It says sunny on Saturday.", zh: "上面说周六晴天。" },
        { role: "Yang Ling", en: "Great! Saturday it is then.", zh: "太好了!那就定周六。" },
        { role: "Wang Bing", en: "What time should we meet?", zh: "我们几点见?" },
        { role: "Su Hai", en: "How about 9 o'clock?", zh: "九点怎么样?" },
        { role: "Yang Ling", en: "Perfect. Where shall we meet?", zh: "可以。在哪儿见?" },
        { role: "Wang Bing", en: "Let's meet at the school gate.", zh: "在校门口见吧。" },
        { role: "Su Hai", en: "Sounds good. See you on Saturday!", zh: "好的,周六见!" }
      ]
    }
  ]
};

// 工具
window.SCRIPTS.getAll = function() { return this.scripts; };
window.SCRIPTS.getById = function(id) { return this.scripts.find(s => s.id === id); };
window.SCRIPTS.getByLevel = function(level) { return this.scripts.filter(s => s.level === level); };
