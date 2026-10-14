// ================== WORDS ==================
// i wrote SO many of these dude, dont judge
// every language has its own lists and its own "grammar" because not every language puts words in the same order:

var STORY = {};


// ----- English (the original!!) -----
STORY.en = {
    grammar: { name: "Akiong", first: "Akiong", order: ["S", "A", "W", "P"], gap: " ", comma: ", ", end: ".", loud: "!!!", sep: " ", titleJoin: " " },
    start: [
        "Then Akiong", "After that Akiong", "Suddenly Akiong", "Later Akiong", "Meanwhile Akiong",
        "Without warning Akiong", "Out of nowhere Akiong", "The next morning Akiong", "At midnight Akiong", "Just then Akiong",
        "Moments later Akiong", "Years later Akiong", "For some reason Akiong", "Before anyone noticed Akiong", "Against all advice Akiong",
        "On a random Tuesday Akiong", "Without thinking Akiong", "Right after lunch Akiong", "Out of pure curiosity Akiong", "Nobody knows why but Akiong",
        "Not long after Akiong", "In a stunning turn of events Akiong", "With great confidence Akiong", "Without asking anyone Akiong", "By accident Akiong",
        "Right on schedule Akiong"
    ],
    normal: {
        act: [
            "went to the market", "ate a big bowl of noodles", "took a long nap", "walked the dog around the block",
            "watched the news", "fixed his old bicycle", "bought a bag of oranges", "waited for the bus",
            "cooked fried rice", "drank hot kopi", "read the newspaper", "washed his car",
            "painted the fence", "swept the floor", "called his mother", "fed the fish",
            "folded the laundry", "counted his coins", "played cards with his friends", "watered the plants",
            "listened to the radio", "cleaned the window", "ate toast with kaya", "sat on the porch", "dodged questions like how George W. Bush dodged that shoe",
            "explained his elite ball knowledge to a confused cashier",
            "tied his shoelaces slowly", "borrowed a ladder", "went for a jog", "waved at the neighbour", "infodumped for sixty seven hours straight",
            "bought lottery tickets", "repaired the fan", "made a cup of tea", "trimmed the hedge", "ordered kopi-o kosong like a true Singaporean uncle", "slurped ramyeon while watching a K-drama oppa",
            "organized his spice rack alphabetically", "fixed the wobbly table with a folded receipt", "ate a plate of nasi lemak", "argued with the TV remote",
            "took his scooter for a wash", "bought a new pair of slippers", "queued for the famous chicken rice", "played chess against the old man next door"
        ],
        place: [
            "near the old market", "behind the kopitiam", "under the big tree", "at the bus stop",
            "outside his house", "in the park", "next to the post office", "by the river",
            "at the playground", "in the kitchen", "on the balcony", "down the street", "at Newton Food Centre sia", "inside a Gangnam convenience store", "near the local synagogue",
            "at the temple", "near the school", "in the garden", "at the night market",
            "beside the highway", "in the living room", "at the barber shop", "on the rooftop",
            "at the hawker centre", "in the supermarket queue", "at the train station", "on a park bench", "at the laundromat", "outside the mamak stall"
        ],
        why: [
            "because he was bored", "because it was Monday", "because nobody else would", "since the weather was nice",
            "because his back hurt", "because he promised his wife", "after a very long day", "before it started raining",
            "even though he was tired", "just like every morning", "because the fridge was empty", "while humming an old song",
            "after losing a bet", "since it was cheap", "because the shop was closing", "to save some money", "and everything is amankuh and amankupoh", "to avoid being kiapu", "because daebak deals don't wait lah", "lemme cook lah",
            "because his neighbour asked", "as the sun went down", "while eating peanuts", "because it was tradition",
            "because the TV was broken", "since he had nothing better to do", "because his phone died", "after his afternoon coffee", "because the radio told him to relax", "while waiting for his tea to cool"
        ]
    },
    weird: {
        act: [
            "talked to a pigeon", "had a gay furry as a boyfriend", "opened a door inside his fridge", "taught his shadow to dance", "sold invisible umbrellas",
            "asked the moon for directions", "adopted a cloud and named it Uncle Bob", "wore two left shoes", "discovered that Tuesdays were sold out",
            "joined a secret club for elevator whisperers", "traded his voice for a sandwich", "planted a clock and waited for time to grow", "interviewed a puddle",
            "learned to speak fluent doorknob", "borrowed a pair of dreams", "painted the wind blue", "taught a snail to drive",
            "mailed a letter to himself from the future", "started a band with seven spoons", "got lost in his own sock drawer", "argued with a mirror about who was older",
            "found a staircase that led to Wednesday", "became best friends with a lamp post", "kept a tiny moon in a jar", "bought a ticket to nowhere",
            "taught the rain to knock politely", "carried a bucket of echoes", "met a fish who sold insurance", "folded the horizon into a paper boat",
            "grew a garden of tiny umbrellas", "heard the sofa whisper his name", "traded a left sock for a rumor", "hosted a tea party for his shadows",
            "stamped his passport with a sneeze", "taught the staircase how to sing", "found a map of his own forehead", "took a nap inside a rainbow",
            "had a quiet argument with the number seven", "wrote a poem on a banana", "convinced a cloud to become a lawyer", "hired a ghost to do his laundry",
            "conversed in pure Singlish-Jewish script with Yuno Ball", "shouted oy vey lah at a sleeping child",
            "schlepped a massive bowl of tteokbokki across the border", "practiced high-pitched whistling for no reason",
            "debated philosophy with Setarcos (evil twin of Socrates)",
            "befriended the penguin that became alive and went to the mountains to become a zaza bird",
            "read a story titled 'A twitter user drank a snowglobe. This is how an emu got chubby.'",
            "watched 'Everybody ate Chris TWD' on a livestream",
            "told a ragebaited chatter that this is braingrow not brainrot",
            "met Allison Burgers and asked 'did he just say that his last name is burger?'",
            "declared 'matter of fact i didn't see nuthin I'm 43% blind in my left eye and fully blind in my right eye'",
            "went crazy and said 'I'M SORRY DID HE JUST SAID THAT HIS LAST NAME IS BURGERS'",
            "became conscious and started breaking the 4th wall",
            "never goon, or else he will hunt you with my minions",
            "said ambatukam and ambatublo whilst having a heart attack",
            "said 'I AM THE ONE WHO KNOCKS' and then knocked on the door of a random stranger",
            "said 'I JUST HIT THE JACK POT' and then hit the jackpot of a casino",
            "taught a cactus to hug", "opened a bakery that only sold yesterday", "played hide and seek with his own reflection", "won a staring contest against a painting",
            "knitted a scarf for the moon", "rented out his shadow on weekends", "asked a teapot for life advice", "built a sandcastle on a cloud"
        ],
        place: [
            "inside a very small elevator", "on top of a sleeping whale", "under a floating table", "in a room with no corners",
            "beside a talking fridge", "in the middle of a quiet storm", "on a bridge made of noodles", "inside a bubble",
            "at a bus stop that wasnt there", "in a library of lost socks", "behind a door that kept moving", "on the ceiling",
            "in a field of upside down trees", "in a cafe run by crows", "in an upside down kopitiam", "on a staircase that went sideways",
            "inside a giant teacup", "in a town where it was always 3am", "at the edge of the carpet", "next to a very polite volcano",
            "inside a snow globe", "on a train made of cheese", "in a hallway that smelled like thunder", "on a cloud shaped like his uncle",
            "in a pond made of milk", "in hell",
            "at Marina Bay Sands looking for Yuno Ball", "in a retro arcade playing #RetroSlop games",
            "where Jerusalem's that way and all roads lead to Rome",
            "inside a giant pineapple", "in a museum of forgotten Mondays", "on a merry-go-round made of spoons", "under the bed of a sleeping giant",
            "inside a whispering elevator", "at a lighthouse in the middle of the desert"
        ],
        why: [
            "because the prophecy said so", "which nobody questioned", "but only on odd days", "for reasons unknown",
            "while the walls nodded in agreement", "because the moon told him to", "just like in his dream", "and the clocks held their breath",
            "even though it was illegal in three dimensions", "because spaghetti demanded it", "while a distant radio played backwards", "as the shadows applauded",
            "because it felt like a Thursday", "and somehow that made sense", "while the floor hummed", "because the pigeons were watching",
            "after a very strange sneeze", "which made the ducks nervous", "and the sky blinked twice", "because gravity was on holiday",
            "while time politely left the room", "which explained everything and nothing", "after drinking suspicious soup", "because the number seven insisted",
            "while a goat quietly judged him", "saying iykykykykyky under his breath", "because it was so meshuggenah leh",
            "while wondering 'Does he know?' with an IQ too high and an IQ too low",
            "because the stars were bored", "and the furniture applauded quietly", "while the cutlery took notes", "because a fortune cookie said so",
            "as the moon pretended not to notice", "because the wallpaper dared him"
        ]
    },
    schizo: {
        act: [
            "screamed at a traffic light until it turned purple like his neighbour who turned purple", "built a rocket from 47 spoons", "fought a vending machine", "ate the whole map",
            "hired a goat as his lawyer", "challenged the sun to a staring contest", "became mayor of a puddle", "declared war on Thursday",
            "swallowed a lightning bolt", "taught 200 ducks to do taxes", "turned into a lamp for six hours", "wrestled a refrigerator and lost",
            "set fire to a cloud on purpose", "launched his neighbour into orbit", "started a cult dedicated to a single noodle", "punched a hurricane in the face",
            "tried to marry a mailbox", "sold his own shadow to a goat", "ate fifteen chilies and saw the future", "kidnapped the moon for ransom",
            "invented a new colour and got arrested for it", "rode a shopping cart down a volcano", "yelled at the ocean for being too wet", "trained an army of angry pigeons",
            "built a castle from stolen umbrellas", "bit the sky and it bit back", "dug a hole to the other side and said hello", "fed a thunderstorm his entire lunch",
            "fought a ghost over a parking space", "crowned himself king of the ceiling fan", "melted the clock and drank it", "sword fought a baguette",
            "carried a chicken the size of a house", "tried to arrest the wind", "started a riot in a library of whispers", "crashed a wedding on a flying couch",
            "broke the speed limit of time", "gave a speech to a very angry toaster", "teleported by mistake into a deep fried dimension", "adopted a dragon that only ate receipts",
            "screamed AIGOO while running through Orchard Road", "chanted triple t at 3 AM in a synagogue", "ate a whole bowl of [REDACTED] and then threw up a black bile", "yelled 'I AM THE ONE WHO KNOCKS' at a random stranger",
            "entered a complete shutdown because someone interrupted his hyperfixation",
            "chanted 'ahin sukung thai thai, sukung, ayamsukung, sampakkung' while dancing around a bonfire",
            "shouted 'amankupoh!' while faking mental illnesses and tics on camera", "executed a mythical shorts pull in front of 500 stunned onlookers",
            "challenged a microwave to a dance battle", "drove a bus made of jelly through a car wash", "tried to sell the ocean on an online marketplace", "turned the entire city into a bouncy castle",
            "screamed his grocery list at a passing airplane", "arm wrestled a statue and actually won", "rode a giant duck into parliament", "juggled seven flaming pineapples",
            "peeled off his own face to see if anyone was underneath, but it was just more {A}", "set the table for his family, who have been dead for eleven years, and served them dinner anyway", "buried his dog in the backyard and digs it up every night to say sorry", "burned down the house with all his memories inside and stood there warming his hands",
            "pulled out his teeth one by one and planted them, hoping something would grow that loved him", "sewed his own mouth shut so the screaming would finally stay inside", "ate the last photo of his mother so nobody could ever take her away again", "tore the wings off a hundred moths and apologized to each one by name",
            "strangled the narrator in his dreams and woke up with ink on his hands", "wrote 'help me' ten thousand times on the walls in his own blood and nobody read it", "counted the days since anyone said his name and lost count at forty thousand", "smiled for the camera while something under his skin kept moving",
            "murdered his own family because they were all just figments of his imagination and he was lonely", "screamed at the sky until it rained blood mixed with chunks of flesh and he drank it all", "wrote a letter to [REDACTED] asking for forgiveness and never sent it", "took a knife to the mirror and carved his own face into it, but it was still not him",
            "sat in a room full of strangers who all looked like him and threw slurs at them until they left", "built a time machine out of cardboard and tried to go back to when he was happy, but it only took him to yesterday", "wrote a story about himself that ended with 'and then he woke up and realized it was all a dream', but he never woke up", "sat on the edge of the world and watched the sun set for seven days straight until he forgot what day it was",
            "took a deep breath and held an airsoft gun with no BBs to his temple", "chopped off both of his own hands with a circular saw because he could not control them", "put his left hand in a blender and turned it on, reducing it to a chunk of bloody flesh", "ate rotting corpses because the narrator told him to, and the voices did too",
            "tried to stab himself multiple times with a kitchen knife and somehow didnt die, but he is still bleeding", "bit his own fingers off and gouged out his own eyes because of his existence", "jumped out of a window somewhere and broke 207 bones",
            "tried to disembowel himself with his own fingertips", "tried to scratch out his own eyeballs so he could never see [REDACTED] again", "ripped open his own neck and pulled out his blood vessels until it was just flayed meat", "slammed his head against the wall",
            "stayed awake for nine days straight just so The Hat Man would visit, because nobody else has talked to him in years", "ran over a family of four with his own car because they were the devil", "ate a person alive while they screamed in pain", "wrote a music score in his own blood until he was skinless and fingerless",
            "farted at his own funeral and it was the only thing anyone remembered about him", "Lit himself on fire using gasoline and a match while his skin slowly charred, his lips is shriveled and shrinking, his eyes is burned away, his outfit too, and his face is not recognizable any more, but he'll regenerate his wounds (so it can happen again tomorrow)", "chopped his neighbor's head off with a rusty saw"
        ],
        place: [
            "in the middle of the highway", "while on fire (a little)", "on top of a speeding train", "inside a burning kopitiam",
            "in front of 300 confused ducks", "in a courtroom full of geese", "at the edge of the world", "inside a volcano",
            "during a thunderstorm", "on a flying couch", "in the middle of a goat parade", "at the bottom of the ocean",
            "in the center of a tornado", "inside a giant bowl of soup", "on the roof of a moving bus", "in a haunted vending machine",
            "at the finale of a cooking show", "beside an exploding bakery", "in front of the whole town", "at the top of a very tall noodle",
            "inside a washing machine at full speed", "above a pit of angry crabs", "during a live news broadcast", "at a dragons birthday party",
            "in the parking lot of the afterlife", "at a Singlish-Jewish cultural fest",
            "on the wing of a flying airplane", "inside a tornado made of noodles", "in the middle of a lightning storm made of soup", "on top of a skyscraper made of pancakes",
            "in a stadium full of screaming geese", "inside the world's angriest blender",
            "in the room where they keep the deleted versions of him", "inside a hospital with no doctors, only screaming", "at the bottom of a well that has no bottom", "in his childhood bedroom, which is now full of strangers wearing his face",
            "in a church where every pew faces the wall", "inside a coffin with a window so he can watch everyone forget him",
            "in purgatory, because his soul may have had its serious sins forgiven in life but still clings to sin, character flaws and unpaid temporal punishment"
        ],
        why: [
            "AND NOBODY STOPPED HIM", "because the voices said yes", "for absolutely no reason", "and the police have questions",
            "while a choir of crickets screamed his name", "and honestly that was only the beginning", "because he lost a bet with a dragon", "and refused to explain himself",
            "which caused a minor apocalypse", "while the sky cried tiny tears of soup", "because his horoscope demanded chaos", "and the neighbours are still talking about it",
            "after eating something he shouldnt have", "and a goat filmed everything", "which is now a national holiday", "while screaming the alphabet backwards",
            "because the spoons told him to", "and the mayor resigned immediately", "which broke three laws of physics", "and then he did it again",
            "because nothing makes sense anymore", "while a thousand ducks quacked in approval", "and the news called it a miracle", "and now theres a statue of him",
            "which he regrets slightly",
            "and the internet will never recover", "while the moon screamed back", "because the toaster started it", "and three planets filed complaints",
            "while a marching band of ducks played along", "and the local news crew fainted",
            "and the voices told him it still wasnt enough", "and he cant remember if he was ever happy", "because every version of him before this one died screaming", "while his mother watched from the doorway and did nothing",
            "and when he woke up it happened again, and again, and again", "and somewhere, someone laughed and pressed Generate", "because he deserved it, the story said so", "and the hole inside him got a little bigger"
        ]
    },
    // who he does it with (sometimes)
    who: [
        "with his cat", "with Uncle Bob the cloud", "with three confused ducks", "with his neighbour", "with a very serious goat",
        "with Amankuh", "with his grandma", "with a talking spoon", "all by himself", "with a crowd of pigeons",
        "with his best friend the lamp post", "with a suspicious man in a trench coat", "with his evil twin", "with a polite crocodile", "with the entire school choir",
        "with a backpack full of snacks", "with his pet rock", "with a nervous chicken", "with a tiny dragon", "with the mayor"
    ],
    twists: [
        "Then the ceiling started talking.", "A chicken walked past and bowed.", "The floor turned into jelly.", "Somewhere a toaster cried.",
        "A tiny man appeared in a teacup and asked for rent.", "Everyone forgot what the colour blue was.", "The wifi gained consciousness.", "The clock started going backwards out of embarrassment.",
        "It started raining upwards.", "A door appeared in the sky and it was open.", "All the pigeons turned and looked at him at the same time.", "The moon sent a text message.",
        "Nobody noticed, but the walls got closer.", "A goat in a suit asked to see his ID.", "The ground sneezed.", "Time stopped for exactly one sandwich.",
        "A very old duck whispered a secret and then vanished.", "The stairs became a slide.", "Everything smelled like Tuesday.", "The shadows left to get coffee.",
        "A parade of tiny spoons marched by.", "The sun apologized for being late.", "A voice from the fridge said: not yet.", "The map on the wall started to bleed noodles.",
        "Somewhere, a volcano burped.", "The neighbours all turned into chairs.", "A crow delivered a legal notice.", "The rain asked for a refund.",
        "He suddenly knew the name of every pigeon in town.", "Gravity took a short break.",
        "Someone shouted triple t in the middle of a K-pop concert.",
        "A voice asked out loud: 'Guess who's back? Back Akiong again?'",
        "The penguin became alive and headed straight to the mountains.",
        "A wild zaza bird appeared and began infodumping about [REDACTED].",
        "You were the Bay Harbor Akiong!",
        "A cat started narrating the story.", "Every clock in town started laughing.", "The sky changed its wallpaper.", "A cloud asked for his autograph.",
        "The traffic lights started a band.", "His shoes walked off without him.", "A goose demanded to speak to the manager.", "The internet went quiet for exactly one second."
    ],
    sounds: [
        "*BOOM*", "*splat*", "*honk honk*", "*boing*", "*slurp*", "*ding!*", "*dun dun DUNNN*", "*wilhelm scream*", "*fart*", "*screaming of doom and despair*",
        "*quack*", "*cricket noises*", "*kaboom*", "*wheeze*", "*bonk*", "*meow?*", "*distant sirens*", "*oy vey!*", "*walao!*", "*sukung!*", "*sampakkung!*", "*splat splat splat*",
        "*screech*", "*clank*", "*whoosh*", "*thud*", "*plink plink*", "*sizzle*", "*pop!*", "*snort*", "*grumble*", "*chirp chirp*", "*human noises*",
        "*ding dong*", "*vroom vroom*", "*ka-ching!*", "*bloop*", "*crunch*", "*ahem*"
    ],
    titleStart: [
        "Akiong and the", "The Legend of Akiong and the", "The Day Akiong Met the", "Akiong vs the",
        "The Secret Diary of Akiong and the", "Why Akiong Fears the", "The Return of Akiong and the", "Akiong Accidentally Befriends the",
        "The Untold Story of Akiong and the", "Akiong Will Never Forgive the", "How Akiong Defeated the", "Akiong and the Curse of the",
        "Yuno Ball Legend the", "Akiong and the Mystery of the", "The Adventures of Akiong and the", "Akiong and the Rise of the",
        "Akiong Gets Haunted by the", "The Last Dance of Akiong and the", "Akiong Runs Away from the", "Akiong Goes on Holiday with the"
    ],
    titleEnd: [
        "Haunted Toaster", "Angry Pigeons", "Noodle Prophecy", "Upside Down Kopitiam",
        "Polite Volcano", "Suspicious Soup", "Goat Lawyer", "Missing Tuesday",
        "Flying Couch", "Spoon Army", "Moon in a Jar", "Talking Fridge",
        "Thousand Ducks", "Receipt Dragon", "Sock Drawer", "Very Angry Toaster", "Yuno Ball Legend", "Zaza Bird Expedition", "Mythical Shorts Pull",
        "Jelly Bus", "Dancing Microwave", "Polite Crocodile", "Flaming Pineapples"
    ]
};

// ----- Bahasa Indonesia -----
STORY.id = {
    grammar: { name: "Akiong", first: "Akiong", order: ["S", "A", "W", "P"], gap: " ", comma: ", ", end: ".", loud: "!!!", sep: " ", titleJoin: " " },
    start: [
        "Lalu Akiong", "Setelah itu Akiong", "Tiba-tiba Akiong", "Kemudian Akiong", "Sementara itu Akiong",
        "Tanpa peringatan Akiong", "Entah dari mana Akiong", "Keesokan paginya Akiong", "Tengah malam Akiong", "Saat itu juga Akiong",
        "Beberapa saat kemudian Akiong", "Bertahun-tahun kemudian Akiong", "Entah kenapa Akiong", "Sebelum ada yang sadar Akiong", "Walaupun udah dilarang, Akiong",
        "Pada suatu hari Selasa Akiong", "Tanpa mikir Akiong", "Habis makan siang Akiong", "Karena penasaran banget Akiong", "Gak ada yang tau kenapa, tapi Akiong",
        "Gak lama kemudian Akiong", "Secara mengejutkan Akiong", "Dengan sangat percaya diri Akiong", "Tanpa nanya siapa-siapa Akiong", "Gak sengaja Akiong",
        "Tepat sesuai jadwal Akiong"
    ],
    normal: {
        act: [
            "pergi ke pasar", "makan semangkuk besar mi", "tidur siang lama banget", "ngajak anjingnya jalan keliling kompleks",
            "nonton berita", "benerin sepeda tuanya", "beli sekantong jeruk", "nungguin bus",
            "masak nasi goreng", "minum kopi panas", "baca koran", "nyuci mobilnya",
            "ngecat pagar", "nyapu lantai", "nelpon ibunya", "ngasih makan ikan",
            "ngelipat cucian", "ngitung koin-koinnya", "main kartu sama temen-temennya", "nyiram tanaman",
            "dengerin radio", "ngelap jendela", "makan roti bakar pakai selai kaya", "duduk-duduk di teras", "ngeles dari pertanyaan kayak George W. Bush ngeles dari sepatu itu",
            "ngejelasin elite ball knowledge-nya ke kasir yang bingung",
            "ngiket tali sepatu pelan-pelan", "minjem tangga", "jogging", "dadah-dadah ke tetangga", "infodump selama enam puluh tujuh jam nonstop",
            "beli tiket lotre", "benerin kipas angin", "bikin secangkir teh", "mangkas pagar tanaman", "pesan kopi-o kosong kayak om-om Singapura sejati", "nyeruput ramyeon sambil nonton oppa drakor",
            "nyusun rak bumbunya sesuai abjad", "ngeganjel meja goyang pakai struk yang dilipat", "makan sepiring nasi lemak", "berantem sama remot TV",
            "nyuciin skuternya", "beli sandal jepit baru", "antri nasi ayam yang terkenal", "main catur lawan kakek sebelah rumah"
        ],
        place: [
            "deket pasar lama", "di belakang kopitiam", "di bawah pohon besar", "di halte bus",
            "di depan rumahnya", "di taman", "di sebelah kantor pos", "di pinggir sungai",
            "di taman bermain", "di dapur", "di balkon", "di ujung jalan", "di Newton Food Centre sia", "di dalam minimarket di Gangnam", "deket sinagoga setempat",
            "di klenteng", "deket sekolah", "di kebun", "di pasar malam",
            "di pinggir jalan tol", "di ruang tamu", "di tukang cukur", "di atap rumah",
            "di hawker centre", "di antrean supermarket", "di stasiun kereta", "di bangku taman", "di laundry kiloan", "di depan warung mamak"
        ],
        why: [
            "soalnya dia bosen", "soalnya hari Senin", "soalnya gak ada orang lain yang mau", "karena cuacanya lagi bagus",
            "soalnya punggungnya sakit", "karena udah janji sama istrinya", "setelah hari yang capek banget", "sebelum hujan turun",
            "walaupun dia capek", "kayak tiap pagi", "soalnya kulkasnya kosong", "sambil senandungin lagu lama",
            "setelah kalah taruhan", "soalnya murah", "soalnya tokonya mau tutup", "biar hemat", "dan semuanya amankuh dan amankupoh", "biar gak dibilang kiapu", "soalnya promo daebak gak nunggu lah", "lemme cook lah",
            "soalnya tetangganya minta", "pas matahari terbenam", "sambil ngemil kacang", "karena udah tradisi",
            "soalnya TV-nya rusak", "soalnya gak ada kerjaan lain", "soalnya HP-nya mati", "habis ngopi sore", "soalnya radio nyuruh dia santai", "sambil nunggu tehnya dingin"
        ]
    },
    weird: {
        act: [
            "ngobrol sama burung merpati", "punya pacar furry gay", "buka pintu di dalam kulkasnya", "ngajarin bayangannya nari", "jualan payung gaib",
            "nanya arah ke bulan", "ngadopsi awan dan namain dia Om Bob", "pakai dua sepatu kiri", "nemuin kalau hari Selasa udah sold out",
            "gabung klub rahasia para pembisik lift", "nuker suaranya sama roti lapis", "nanem jam dan nunggu waktu tumbuh", "ngewawancarain genangan air",
            "belajar bahasa gagang pintu sampai fasih", "minjem sepasang mimpi", "ngecat angin jadi biru", "ngajarin siput nyetir",
            "ngirim surat ke dirinya sendiri dari masa depan", "bikin band sama tujuh sendok", "nyasar di laci kaus kakinya sendiri", "debat sama cermin soal siapa yang lebih tua",
            "nemuin tangga yang menuju ke hari Rabu", "jadi sahabat sama tiang lampu", "nyimpen bulan kecil di dalam toples", "beli tiket ke antah berantah",
            "ngajarin hujan buat ngetok dengan sopan", "bawa seember gema", "ketemu ikan yang jualan asuransi", "ngelipat cakrawala jadi perahu kertas",
            "nanem kebun isinya payung-payung kecil", "denger sofa bisikin namanya", "nuker kaus kaki kiri sama gosip", "bikin pesta teh buat bayangan-bayangannya",
            "ngecap paspornya pakai bersin", "ngajarin tangga nyanyi", "nemuin peta jidatnya sendiri", "tidur siang di dalam pelangi",
            "debat diam-diam sama angka tujuh", "nulis puisi di atas pisang", "ngebujuk awan buat jadi pengacara", "nyewa hantu buat nyuciin bajunya",
            "ngobrol pakai naskah Singlish-Yahudi murni sama Yuno Ball", "neriakin oy vey lah ke anak yang lagi tidur",
            "nyeret semangkuk raksasa tteokbokki nyebrang perbatasan", "latihan siul nada tinggi tanpa alasan",
            "debat filsafat sama Setarcos (kembaran jahatnya Socrates)",
            "temenan sama penguin yang jadi hidup terus pergi ke gunung buat jadi burung zaza",
            "baca cerita berjudul 'Pengguna twitter minum bola salju. Begini cara emu jadi gendut.'",
            "nonton 'Everybody ate Chris TWD' di livestream",
            "bilang ke chatter yang kena ragebait kalau ini braingrow bukan brainrot",
            "ketemu Allison Burgers terus nanya 'dia barusan bilang nama belakangnya burger?'",
            "ngumumin 'sebenernya aku gak liat apa-apa, mata kiriku 43% buta dan mata kananku buta total'",
            "jadi gila dan bilang 'MAAF DIA BARUSAN BILANG NAMA BELAKANGNYA BURGERS?'",
            "jadi sadar dan mulai ngerusak dinding keempat",
            "gak pernah goon, kalau nggak dia bakal ngeburu kamu pakai minion-minionku",
            "bilang ambatukam dan ambatublo sambil kena serangan jantung",
            "bilang 'I AM THE ONE WHO KNOCKS' terus ngetok pintu orang asing",
            "bilang 'AKU DAPET JACKPOT' terus beneran dapet jackpot di kasino",
            "ngajarin kaktus buat meluk", "buka toko roti yang cuma jualan hari kemarin", "main petak umpet sama bayangannya sendiri di cermin", "menang lomba tatap-tatapan lawan lukisan",
            "ngerajut syal buat bulan", "nyewain bayangannya tiap akhir pekan", "minta saran hidup ke teko", "bikin istana pasir di atas awan"
        ],
        place: [
            "di dalam lift yang kecil banget", "di atas paus yang lagi tidur", "di bawah meja yang melayang", "di ruangan tanpa sudut",
            "di samping kulkas yang bisa ngomong", "di tengah badai yang sunyi", "di atas jembatan dari mi", "di dalam gelembung",
            "di halte bus yang sebenernya gak ada", "di perpustakaan kaus kaki yang hilang", "di balik pintu yang pindah-pindah terus", "di langit-langit",
            "di ladang pohon-pohon terbalik", "di kafe yang dijalanin burung gagak", "di kopitiam yang kebalik", "di tangga yang jalannya ke samping",
            "di dalam cangkir teh raksasa", "di kota yang selalu jam 3 pagi", "di ujung karpet", "di sebelah gunung berapi yang sopan banget",
            "di dalam bola salju", "di atas kereta yang terbuat dari keju", "di lorong yang baunya kayak petir", "di atas awan yang bentuknya kayak pamannya",
            "di kolam isinya susu", "di neraka",
            "di Marina Bay Sands nyariin Yuno Ball", "di arcade retro sambil main game #RetroSlop",
            "di tempat Yerusalem ada di sebelah sana dan semua jalan menuju Roma",
            "di dalam nanas raksasa", "di museum hari Senin yang terlupakan", "di komidi putar dari sendok", "di bawah kasur raksasa yang lagi tidur",
            "di dalam lift yang suka bisik-bisik", "di mercusuar di tengah gurun"
        ],
        why: [
            "soalnya ramalannya bilang gitu", "dan gak ada yang nanya", "tapi cuma di hari ganjil", "entah kenapa",
            "sementara tembok-tembok ngangguk setuju", "soalnya bulan yang nyuruh", "persis kayak di mimpinya", "dan jam-jam pada nahan napas",
            "walaupun itu ilegal di tiga dimensi", "soalnya spageti yang minta", "sementara radio di kejauhan muter lagu kebalik", "sementara bayangan-bayangan tepuk tangan",
            "soalnya rasanya kayak hari Kamis", "dan entah gimana itu masuk akal", "sementara lantainya bersenandung", "soalnya merpati-merpati lagi ngeliatin",
            "setelah bersin yang aneh banget", "dan bebek-bebek jadi gugup", "dan langit kedip dua kali", "soalnya gravitasi lagi libur",
            "sementara waktu dengan sopan keluar ruangan", "yang ngejelasin semuanya sekaligus gak ngejelasin apa-apa", "setelah minum sup yang mencurigakan", "soalnya angka tujuh maksa",
            "sementara seekor kambing diam-diam ngejudge dia", "sambil bilang iykykykykyky pelan-pelan", "soalnya meshuggenah banget leh",
            "sambil mikir 'Dia tau gak ya?' dengan IQ yang ketinggian sekaligus kerendahan",
            "soalnya bintang-bintang lagi bosen", "dan perabotan tepuk tangan pelan-pelan", "sementara sendok garpu nyatet", "soalnya kue keberuntungan bilang gitu",
            "sementara bulan pura-pura gak liat", "soalnya wallpaper-nya nantangin dia"
        ]
    },
    schizo: {
        act: [
            "teriak-teriak ke lampu merah sampai jadi ungu kayak tetangganya yang jadi ungu", "bikin roket dari 47 sendok", "berantem sama mesin penjual otomatis", "makan seluruh peta",
            "nyewa kambing jadi pengacaranya", "nantang matahari lomba tatap-tatapan", "jadi walikota genangan air", "nyatakan perang ke hari Kamis",
            "nelen petir", "ngajarin 200 bebek ngurus pajak", "berubah jadi lampu selama enam jam", "gulat sama kulkas dan kalah",
            "sengaja bakar awan", "ngeluncurin tetangganya ke orbit", "bikin sekte buat nyembah satu helai mi", "nonjok angin topan di muka",
            "nyoba nikahin kotak pos", "jual bayangannya sendiri ke kambing", "makan lima belas cabe dan ngeliat masa depan", "nyulik bulan buat minta tebusan",
            "nemuin warna baru dan ditangkap gara-gara itu", "naik troli belanja turun dari gunung berapi", "marahin laut karena terlalu basah", "ngelatih pasukan merpati pemarah",
            "bikin istana dari payung curian", "gigit langit dan langitnya gigit balik", "gali lubang sampai ke sisi lain bumi terus bilang halo", "ngasih makan badai petir pakai seluruh makan siangnya",
            "berantem sama hantu rebutan tempat parkir", "nobatin dirinya sendiri jadi raja kipas angin langit-langit", "ngelelehin jam terus diminum", "duel pedang lawan roti baguette",
            "gendong ayam segede rumah", "nyoba nangkep angin", "bikin rusuh di perpustakaan bisikan", "ngacauin kawinan pakai sofa terbang",
            "ngelanggar batas kecepatan waktu", "pidato di depan pemanggang roti yang marah banget", "gak sengaja teleport ke dimensi gorengan", "ngadopsi naga yang cuma makan struk",
            "teriak AIGOO sambil lari di Orchard Road", "ngucapin triple t jam 3 pagi di sinagoga", "makan semangkuk penuh [DISENSOR] terus muntah empedu hitam", "neriakin 'I AM THE ONE WHO KNOCKS' ke orang asing",
            "shutdown total gara-gara ada yang ganggu hiperfiksasinya",
            "nyanyiin 'ahin sukung thai thai, sukung, ayamsukung, sampakkung' sambil nari ngelilingin api unggun",
            "teriak 'amankupoh!' sambil pura-pura punya gangguan mental dan tic di depan kamera", "ngelakuin tarikan celana pendek mitos di depan 500 penonton yang melongo",
            "nantang microwave battle dance", "nyetir bus dari jeli lewat tempat cuci mobil", "nyoba jual laut di marketplace", "ngubah seluruh kota jadi istana balon",
            "neriakin daftar belanjaannya ke pesawat yang lewat", "panco lawan patung dan beneran menang", "naik bebek raksasa masuk ke gedung DPR", "juggling tujuh nanas yang kebakar",
            "ngelupas mukanya sendiri buat ngecek ada orang di baliknya atau nggak, tapi isinya cuma {A} lagi", "nyiapin meja makan buat keluarganya yang udah meninggal sebelas tahun lalu dan tetep nyajiin makan malam", "ngubur anjingnya di halaman belakang dan tiap malam ngegali lagi buat minta maaf", "ngebakar rumah yang isinya semua kenangannya terus berdiri di situ sambil ngangetin tangan",
            "nyabut giginya satu-satu terus nanem di tanah, berharap ada sesuatu yang tumbuh dan sayang sama dia", "ngejahit mulutnya sendiri biar teriakannya akhirnya tetep di dalam", "makan foto terakhir ibunya biar gak ada yang bisa ngambil ibunya lagi", "nyabutin sayap seratus ngengat dan minta maaf ke masing-masing sambil nyebut namanya",
            "nyekik narator di dalam mimpinya dan bangun dengan tangan penuh tinta", "nulis 'tolong aku' sepuluh ribu kali di tembok pakai darahnya sendiri dan gak ada yang baca", "ngitung hari sejak terakhir ada yang nyebut namanya dan lupa hitungan di angka empat puluh ribu", "senyum ke kamera sementara sesuatu di bawah kulitnya terus bergerak",
            "ngebunuh keluarganya sendiri karena mereka semua cuma khayalannya dan dia kesepian", "teriak ke langit sampai turun hujan darah campur potongan daging dan dia minum semuanya", "nulis surat ke [REDACTED] buat minta maaf dan gak pernah dikirim", "ngukir mukanya sendiri di cermin pakai pisau, tapi itu tetep bukan dia",
            "duduk di ruangan penuh orang asing yang mirip dia semua dan ngata-ngatain mereka sampai mereka pergi", "bikin mesin waktu dari kardus buat balik ke masa dia bahagia, tapi cuma nyampe ke kemarin", "nulis cerita tentang dirinya yang endingnya 'terus dia bangun dan sadar itu semua cuma mimpi', tapi dia gak pernah bangun", "duduk di ujung dunia nonton matahari terbenam tujuh hari berturut-turut sampai lupa ini hari apa",
            "tarik napas dalam-dalam dan nempelin pistol airsoft tanpa peluru ke pelipisnya", "motong kedua tangannya sendiri pakai gergaji bundar karena dia gak bisa ngontrol tangannya", "masukin tangan kirinya ke blender terus dinyalain sampai jadi gumpalan daging berdarah", "makan mayat busuk karena disuruh narator, dan suara-suara juga nyuruh",
            "nyoba nusuk dirinya sendiri pakai pisau dapur berkali-kali dan entah gimana gak mati, tapi darahnya masih ngucur", "gigit jari-jarinya sendiri sampai putus dan nyungkil matanya sendiri karena dia ada", "lompat dari jendela entah di mana dan patahin 207 tulang",
            "nyoba ngeluarin isi perutnya sendiri pakai ujung jarinya", "nyoba nyakar bola matanya sendiri biar gak bisa liat [REDACTED] lagi", "nyobek lehernya sendiri dan narik keluar pembuluh darahnya sampai tinggal daging terkelupas", "ngebenturin kepalanya ke tembok",
            "melek sembilan hari nonstop cuma biar The Hat Man dateng, soalnya udah bertahun-tahun gak ada yang ngajak dia ngobrol", "nabrak keluarga berempat pakai mobilnya sendiri karena mereka itu iblis", "makan orang hidup-hidup sementara orangnya teriak kesakitan", "nulis partitur musik pakai darahnya sendiri sampai kulit dan jarinya habis",
            "kentut di pemakamannya sendiri dan cuma itu yang diinget orang tentang dia", "ngebakar dirinya sendiri sampai mukanya gak bisa dikenalin lagi, tapi tenang, dia regenerasi (biar bisa kejadian lagi besok)", "memenggal kepala tetangganya pakai gergaji berkarat"
        ],
        place: [
            "di tengah jalan tol", "sambil kebakar (dikit)", "di atas kereta yang lagi ngebut", "di dalam kopitiam yang kebakaran",
            "di depan 300 bebek yang bingung", "di ruang sidang penuh angsa", "di ujung dunia", "di dalam gunung berapi",
            "pas badai petir", "di atas sofa terbang", "di tengah parade kambing", "di dasar laut",
            "di tengah angin puting beliung", "di dalam mangkuk sup raksasa", "di atap bus yang lagi jalan", "di dalam mesin penjual otomatis berhantu",
            "di final acara masak-masak", "di samping toko roti yang meledak", "di depan seluruh warga kota", "di puncak sehelai mi yang tinggi banget",
            "di dalam mesin cuci yang lagi muter kenceng", "di atas lubang penuh kepiting marah", "pas siaran berita langsung", "di pesta ulang tahun naga",
            "di parkiran alam baka", "di festival budaya Singlish-Yahudi",
            "di sayap pesawat yang lagi terbang", "di dalam puting beliung dari mi", "di tengah badai petir dari sup", "di atas gedung pencakar langit dari pancake",
            "di stadion penuh angsa yang teriak-teriak", "di dalam blender paling pemarah di dunia",
            "di ruangan tempat mereka nyimpen versi-versi dirinya yang udah dihapus", "di dalam rumah sakit tanpa dokter, cuma ada teriakan", "di dasar sumur yang gak punya dasar", "di kamar masa kecilnya, yang sekarang penuh orang asing pakai mukanya",
            "di gereja yang semua bangkunya ngadep ke tembok", "di dalam peti mati berjendela biar dia bisa nonton semua orang ngelupain dia",
            "di api penyucian, karena dosa-dosa beratnya mungkin udah diampuni waktu dia hidup tapi jiwanya masih nempel sama dosa, sifat buruk, dan hukuman yang belum dibayar"
        ],
        why: [
            "DAN GAK ADA YANG NGEHENTIIN DIA", "soalnya suara-suara bilang iya", "tanpa alasan sama sekali", "dan polisi punya banyak pertanyaan",
            "sementara paduan suara jangkrik neriakin namanya", "dan jujur itu baru permulaan", "soalnya dia kalah taruhan sama naga", "dan dia gak mau ngejelasin",
            "yang bikin kiamat kecil", "sementara langit nangis air mata sup kecil-kecil", "soalnya zodiaknya minta kekacauan", "dan tetangga masih ngomongin itu sampai sekarang",
            "setelah makan sesuatu yang harusnya gak dia makan", "dan seekor kambing ngerekam semuanya", "yang sekarang jadi hari libur nasional", "sambil neriakin alfabet dari belakang",
            "soalnya sendok-sendok yang nyuruh", "dan walikota langsung mundur", "yang ngelanggar tiga hukum fisika", "terus dia ngelakuin itu lagi",
            "soalnya udah gak ada yang masuk akal", "sementara seribu bebek kwek-kwek setuju", "dan berita nyebut itu mukjizat", "dan sekarang ada patungnya",
            "yang sedikit dia sesali",
            "dan internet gak bakal pernah pulih", "sementara bulan teriak balik", "soalnya pemanggang roti yang mulai duluan", "dan tiga planet ngajuin komplain",
            "sementara marching band bebek ikut main", "dan kru berita lokal pingsan",
            "dan suara-suara bilang itu masih belum cukup", "dan dia gak inget apa dia pernah bahagia", "soalnya semua versi dirinya sebelum ini mati sambil teriak", "sementara ibunya nonton dari pintu dan gak ngapa-ngapain",
            "dan pas dia bangun semuanya kejadian lagi, dan lagi, dan lagi", "dan di suatu tempat, seseorang ketawa dan mencet Generate", "karena dia pantes dapet itu, kata ceritanya", "dan lubang di dalam dirinya jadi sedikit lebih gede"
        ]
    },
    who: [
        "bareng kucingnya", "bareng Om Bob si awan", "bareng tiga bebek yang bingung", "bareng tetangganya", "bareng kambing yang serius banget",
        "bareng Amankuh", "bareng neneknya", "bareng sendok yang bisa ngomong", "sendirian aja", "bareng segerombolan merpati",
        "bareng sahabatnya si tiang lampu", "bareng om-om mencurigakan pakai jas panjang", "bareng kembaran jahatnya", "bareng buaya yang sopan", "bareng seluruh paduan suara sekolah",
        "bawa ransel penuh camilan", "bareng batu peliharaannya", "bareng ayam yang gugup", "bareng naga kecil", "bareng pak walikota"
    ],
    twists: [
        "Terus langit-langitnya mulai ngomong.", "Seekor ayam lewat dan membungkuk.", "Lantainya berubah jadi agar-agar.", "Di suatu tempat, pemanggang roti nangis.",
        "Ada orang kecil muncul di cangkir teh dan nagih uang sewa.", "Semua orang lupa warna biru itu apa.", "Wifi-nya jadi sadar.", "Jamnya muter mundur karena malu.",
        "Hujannya turun ke atas.", "Ada pintu muncul di langit dan pintunya kebuka.", "Semua merpati nengok dan ngeliatin dia barengan.", "Bulan ngirim SMS.",
        "Gak ada yang sadar, tapi temboknya makin deket.", "Kambing pakai jas minta liat KTP-nya.", "Tanahnya bersin.", "Waktu berhenti selama tepat satu roti lapis.",
        "Bebek yang tua banget bisikin rahasia terus ngilang.", "Tangganya jadi perosotan.", "Semuanya bau hari Selasa.", "Bayangan-bayangan pergi beli kopi.",
        "Parade sendok-sendok kecil lewat.", "Matahari minta maaf karena telat.", "Ada suara dari kulkas bilang: belum saatnya.", "Peta di tembok mulai ngeluarin mi.",
        "Di suatu tempat, gunung berapi sendawa.", "Semua tetangga berubah jadi kursi.", "Burung gagak nganterin surat somasi.", "Hujannya minta refund.",
        "Tiba-tiba dia tau nama semua merpati di kota.", "Gravitasi istirahat sebentar.",
        "Ada yang teriak triple t di tengah konser K-pop.",
        "Ada suara nanya keras-keras: 'Tebak siapa yang balik? Akiong balik lagi?'",
        "Penguinnya jadi hidup dan langsung pergi ke gunung.",
        "Burung zaza liar muncul dan mulai infodump soal [DISENSOR].",
        "Kamu adalah Akiong dari Bay Harbor!",
        "Seekor kucing mulai jadi narator cerita ini.", "Semua jam di kota mulai ketawa.", "Langit ganti wallpaper.", "Ada awan minta tanda tangannya.",
        "Lampu-lampu lalu lintas bikin band.", "Sepatunya jalan sendiri ninggalin dia.", "Seekor angsa minta ngomong sama manajer.", "Internet hening selama tepat satu detik."
    ],
    sounds: [
        "*BUM*", "*plok*", "*tin tin*", "*boing*", "*sruput*", "*ting!*", "*dun dun DUNNN*", "*teriakan wilhelm*", "*brott*", "*jeritan malapetaka dan keputusasaan*",
        "*kwek*", "*krik krik*", "*duar*", "*ngik ngik*", "*tuk*", "*meong?*", "*sirene dari jauh*", "*oy vey!*", "*walao!*", "*sukung!*", "*sampakkung!*", "*plok plok plok*",
        "*ciiit*", "*klontang*", "*wusss*", "*gedebuk*", "*ting ting*", "*cesss*", "*pop!*", "*ngrok*", "*grrr*", "*cuit cuit*", "*suara manusia*",
        "*ding dong*", "*brem brem*", "*kaching!*", "*blup*", "*kriuk*", "*ehem*"
    ],
    titleStart: [
        "Akiong dan", "Legenda Akiong dan", "Hari Saat Akiong Ketemu", "Akiong vs",
        "Buku Harian Rahasia Akiong dan", "Kenapa Akiong Takut sama", "Kembalinya Akiong dan", "Akiong Gak Sengaja Temenan sama",
        "Kisah Tak Terungkap Akiong dan", "Akiong Gak Akan Pernah Maafin", "Gimana Akiong Ngalahin", "Akiong dan Kutukan",
        "Legenda Yuno Ball:", "Akiong dan Misteri", "Petualangan Akiong dan", "Akiong dan Kebangkitan",
        "Akiong Dihantui", "Dansa Terakhir Akiong dan", "Akiong Kabur dari", "Akiong Liburan Bareng"
    ],
    titleEnd: [
        "Pemanggang Roti Berhantu", "Merpati-Merpati Pemarah", "Ramalan Mi", "Kopitiam Terbalik",
        "Gunung Berapi yang Sopan", "Sup Mencurigakan", "Kambing Pengacara", "Hari Selasa yang Hilang",
        "Sofa Terbang", "Pasukan Sendok", "Bulan dalam Toples", "Kulkas yang Bisa Ngomong",
        "Seribu Bebek", "Naga Pemakan Struk", "Laci Kaus Kaki", "Pemanggang Roti yang Marah Banget", "Legenda Yuno Ball", "Ekspedisi Burung Zaza", "Tarikan Celana Pendek Mitos",
        "Bus Jeli", "Microwave yang Joget", "Buaya yang Sopan", "Nanas Berapi"
    ]
};

// ----- 한국어 (South Korea) -----
STORY.ko = {
    grammar: { name: "아키옹", first: "아키옹은", order: ["S", "W", "P", "A"], gap: " ", comma: ", ", end: ".", loud: "!!!", sep: " ", titleJoin: " " },
    start: [
        "그러자 아키옹은", "그 후 아키옹은", "갑자기 아키옹은", "나중에 아키옹은", "한편 아키옹은",
        "예고도 없이 아키옹은", "난데없이 아키옹은", "다음 날 아침 아키옹은", "자정에 아키옹은", "바로 그때 아키옹은",
        "잠시 후 아키옹은", "몇 년 뒤 아키옹은", "어째서인지 아키옹은", "아무도 눈치채기 전에 아키옹은", "모두가 말렸지만 아키옹은",
        "어느 평범한 화요일에 아키옹은", "아무 생각 없이 아키옹은", "점심 먹자마자 아키옹은", "순전히 호기심에 아키옹은", "이유는 아무도 모르지만 아키옹은",
        "얼마 지나지 않아 아키옹은", "충격적인 반전으로 아키옹은", "자신감 넘치게 아키옹은", "아무한테도 묻지 않고 아키옹은", "실수로 아키옹은",
        "정확히 예정대로 아키옹은"
    ],
    normal: {
        act: [
            "시장에 갔다", "국수를 한 그릇 크게 먹었다", "낮잠을 오래 잤다", "개를 데리고 동네를 한 바퀴 산책했다",
            "뉴스를 봤다", "낡은 자전거를 고쳤다", "오렌지 한 봉지를 샀다", "버스를 기다렸다",
            "볶음밥을 만들었다", "뜨거운 코피를 마셨다", "신문을 읽었다", "세차를 했다",
            "울타리에 페인트를 칠했다", "바닥을 쓸었다", "엄마한테 전화했다", "물고기 밥을 줬다",
            "빨래를 갰다", "동전을 셌다", "친구들이랑 카드 게임을 했다", "화분에 물을 줬다",
            "라디오를 들었다", "창문을 닦았다", "카야 토스트를 먹었다", "현관 앞에 앉아 있었다", "조지 W. 부시가 신발을 피하듯 질문을 피했다",
            "어리둥절한 계산원한테 자기의 엘리트 공 지식을 설명했다",
            "신발 끈을 천천히 묶었다", "사다리를 빌렸다", "조깅을 했다", "이웃에게 손을 흔들었다", "예순일곱 시간 동안 쉬지 않고 인포덤프를 했다",
            "복권을 샀다", "선풍기를 고쳤다", "차 한 잔을 끓였다", "울타리 나무를 다듬었다", "진짜 싱가포르 아저씨처럼 코피오 코송을 주문했다", "K-드라마 오빠를 보면서 라면을 후루룩 먹었다",
            "양념통을 가나다순으로 정리했다", "접은 영수증으로 흔들리는 탁자를 고쳤다", "나시 르막 한 접시를 먹었다", "TV 리모컨이랑 말싸움을 했다",
            "스쿠터를 세차하러 갔다", "새 슬리퍼를 샀다", "유명한 치킨라이스 줄을 섰다", "옆집 할아버지랑 체스를 뒀다"
        ],
        place: [
            "오래된 시장 근처에서", "코피티암 뒤에서", "큰 나무 아래에서", "버스 정류장에서",
            "집 앞에서", "공원에서", "우체국 옆에서", "강가에서",
            "놀이터에서", "부엌에서", "발코니에서", "길 저쪽에서", "뉴턴 푸드 센터에서", "강남 편의점 안에서", "동네 회당 근처에서",
            "절에서", "학교 근처에서", "정원에서", "야시장에서",
            "고속도로 옆에서", "거실에서", "이발소에서", "옥상에서",
            "호커 센터에서", "마트 계산대 줄에서", "기차역에서", "공원 벤치에서", "빨래방에서", "마막 노점 앞에서"
        ],
        why: [
            "심심해서", "월요일이라서", "아무도 안 하니까", "날씨가 좋아서",
            "허리가 아파서", "아내랑 약속했으니까", "아주 긴 하루를 보낸 뒤에", "비가 오기 전에",
            "피곤했는데도", "매일 아침처럼", "냉장고가 텅 비어서", "옛날 노래를 흥얼거리면서",
            "내기에서 진 뒤에", "싸니까", "가게가 문 닫을 시간이라서", "돈을 아끼려고", "그리고 모든 게 아만쿠, 아만쿠포", "키아푸 소리 안 들으려고", "대박 세일은 기다려 주지 않으니까 lah", "lemme cook lah",
            "이웃이 부탁해서", "해가 질 무렵", "땅콩을 먹으면서", "전통이니까",
            "TV가 고장 나서", "딱히 할 일이 없어서", "휴대폰 배터리가 나가서", "오후 커피를 마신 뒤에", "라디오가 좀 쉬라고 해서", "차가 식기를 기다리면서"
        ]
    },
    weird: {
        act: [
            "비둘기랑 대화했다", "게이 퍼리를 남자친구로 뒀다", "냉장고 안에 있는 문을 열었다", "자기 그림자한테 춤을 가르쳤다", "투명 우산을 팔았다",
            "달한테 길을 물었다", "구름을 입양해서 밥 삼촌이라고 이름 지었다", "왼쪽 신발 두 짝을 신었다", "화요일이 매진됐다는 걸 알아냈다",
            "엘리베이터에 속삭이는 사람들의 비밀 클럽에 가입했다", "목소리를 샌드위치랑 바꿨다", "시계를 심고 시간이 자라기를 기다렸다", "물웅덩이를 인터뷰했다",
            "문손잡이 언어를 유창하게 배웠다", "꿈 한 켤레를 빌렸다", "바람을 파랗게 칠했다", "달팽이한테 운전을 가르쳤다",
            "미래에서 자기 자신한테 편지를 부쳤다", "숟가락 일곱 개랑 밴드를 결성했다", "자기 양말 서랍 안에서 길을 잃었다", "누가 더 나이가 많은지 거울이랑 싸웠다",
            "수요일로 이어지는 계단을 찾았다", "가로등이랑 절친이 됐다", "병 안에 작은 달을 키웠다", "어디로도 가지 않는 표를 샀다",
            "비한테 공손하게 노크하는 법을 가르쳤다", "메아리를 한 양동이 들고 다녔다", "보험을 파는 물고기를 만났다", "지평선을 접어서 종이배를 만들었다",
            "작은 우산들로 정원을 가꿨다", "소파가 자기 이름을 속삭이는 걸 들었다", "왼쪽 양말을 소문 하나랑 바꿨다", "그림자들을 위해 다과회를 열었다",
            "재채기로 여권에 도장을 찍었다", "계단한테 노래하는 법을 가르쳤다", "자기 이마 지도를 찾았다", "무지개 안에서 낮잠을 잤다",
            "숫자 7이랑 조용히 말다툼을 했다", "바나나에 시를 썼다", "구름을 설득해서 변호사로 만들었다", "유령을 고용해서 빨래를 시켰다",
            "유노 볼이랑 순수 싱글리시-유대 대본으로 대화했다", "자는 아이한테 oy vey lah라고 소리쳤다",
            "거대한 떡볶이 한 그릇을 끌고 국경을 넘었다", "아무 이유 없이 고음 휘파람을 연습했다",
            "세타르코스(소크라테스의 사악한 쌍둥이)랑 철학 토론을 했다",
            "살아나서 산으로 가 자자새가 된 펭귄이랑 친구가 됐다",
            "'트위터 유저가 스노우볼을 마셨다. 에뮤가 통통해진 이유'라는 이야기를 읽었다",
            "라이브 방송으로 'Everybody ate Chris TWD'를 봤다",
            "어그로에 낚인 채팅러한테 이건 뇌썩음이 아니라 뇌성장이라고 말했다",
            "앨리슨 버거스를 만나서 '방금 성이 버거라고 한 거야?'라고 물었다",
            "'사실 난 아무것도 못 봤어, 왼쪽 눈은 43% 안 보이고 오른쪽 눈은 완전히 안 보이거든'이라고 선언했다",
            "미쳐서 '잠깐 방금 성이 버거스라고 한 거야?'라고 외쳤다",
            "자아를 갖고 제4의 벽을 부수기 시작했다",
            "절대 goon하지 않았다, 아니면 내 미니언들로 너를 쫓아올 거다",
            "심장마비가 온 채로 ambatukam이랑 ambatublo라고 말했다",
            "'I AM THE ONE WHO KNOCKS'라고 말하고 모르는 사람 집 문을 두드렸다",
            "'잭팟 터졌다'라고 말하고 진짜 카지노 잭팟을 터뜨렸다",
            "선인장한테 포옹하는 법을 가르쳤다", "어제만 파는 빵집을 열었다", "거울 속 자기 자신이랑 숨바꼭질을 했다", "그림이랑 눈싸움을 해서 이겼다",
            "달한테 목도리를 떠 줬다", "주말마다 그림자를 대여해 줬다", "찻주전자한테 인생 상담을 받았다", "구름 위에 모래성을 쌓았다"
        ],
        place: [
            "아주 작은 엘리베이터 안에서", "잠자는 고래 위에서", "떠다니는 탁자 밑에서", "모서리가 없는 방에서",
            "말하는 냉장고 옆에서", "조용한 폭풍 한가운데에서", "국수로 만든 다리 위에서", "비눗방울 안에서",
            "존재하지 않는 버스 정류장에서", "잃어버린 양말 도서관에서", "계속 움직이는 문 뒤에서", "천장에서",
            "거꾸로 자라는 나무 들판에서", "까마귀가 운영하는 카페에서", "거꾸로 뒤집힌 코피티암에서", "옆으로 가는 계단 위에서",
            "거대한 찻잔 안에서", "언제나 새벽 3시인 마을에서", "카펫 끝에서", "아주 예의 바른 화산 옆에서",
            "스노우볼 안에서", "치즈로 만든 기차 위에서", "천둥 냄새가 나는 복도에서", "삼촌 얼굴 모양 구름 위에서",
            "우유로 된 연못에서", "지옥에서",
            "유노 볼을 찾으면서 마리나 베이 샌즈에서", "#RetroSlop 게임을 하면서 레트로 오락실에서",
            "예루살렘은 저쪽이고 모든 길은 로마로 통하는 곳에서",
            "거대한 파인애플 안에서", "잊힌 월요일 박물관에서", "숟가락으로 만든 회전목마 위에서", "잠자는 거인의 침대 밑에서",
            "속삭이는 엘리베이터 안에서", "사막 한가운데 있는 등대에서"
        ],
        why: [
            "예언이 그렇게 말했으니까", "아무도 이의를 제기하지 않았다", "하지만 홀수 날에만", "알 수 없는 이유로",
            "벽들이 고개를 끄덕이는 동안", "달이 시켰으니까", "꿈에서처럼", "그리고 시계들은 숨을 죽였다",
            "3차원에서는 불법인데도", "스파게티가 요구했으니까", "멀리서 라디오가 거꾸로 흘러나오는 동안", "그림자들이 박수를 치는 동안",
            "목요일 같은 기분이 들어서", "그리고 어째서인지 말이 됐다", "바닥이 콧노래를 부르는 동안", "비둘기들이 지켜보고 있었으니까",
            "아주 이상한 재채기를 한 뒤에", "그 때문에 오리들이 긴장했다", "그리고 하늘이 두 번 깜빡였다", "중력이 휴가 중이라서",
            "시간이 예의 바르게 방을 나가는 동안", "그건 모든 걸 설명하면서 아무것도 설명하지 않았다", "수상한 수프를 마신 뒤에", "숫자 7이 우겨서",
            "염소 한 마리가 조용히 그를 판단하는 동안", "작게 iykykykykyky라고 중얼거리면서", "너무 meshuggenah해서 leh",
            "IQ가 너무 높으면서 동시에 너무 낮은 채로 '그 사람 알고 있을까?' 하고 궁금해하면서",
            "별들이 심심해해서", "그리고 가구들이 조용히 박수를 쳤다", "포크와 나이프가 필기하는 동안", "포춘 쿠키가 그렇게 말해서",
            "달이 못 본 척하는 동안", "벽지가 해 보라고 도발해서"
        ]
    },
    schizo: {
        act: [
            "보라색으로 변한 이웃처럼 신호등이 보라색이 될 때까지 소리를 질렀다", "숟가락 47개로 로켓을 만들었다", "자판기랑 싸웠다", "지도를 통째로 먹었다",
            "염소를 변호사로 고용했다", "태양한테 눈싸움을 걸었다", "물웅덩이의 시장이 됐다", "목요일에 선전포고를 했다",
            "번개를 삼켰다", "오리 200마리한테 세금 신고를 가르쳤다", "여섯 시간 동안 램프로 변했다", "냉장고랑 레슬링을 하다 졌다",
            "일부러 구름에 불을 질렀다", "이웃을 궤도로 발사했다", "국수 한 가닥을 숭배하는 사이비 종교를 만들었다", "허리케인 얼굴에 주먹을 날렸다",
            "우체통이랑 결혼하려고 했다", "자기 그림자를 염소한테 팔았다", "고추 열다섯 개를 먹고 미래를 봤다", "달을 납치해서 몸값을 요구했다",
            "새로운 색을 발명했다가 체포됐다", "쇼핑 카트를 타고 화산을 내려왔다", "바다한테 너무 축축하다고 소리쳤다", "화난 비둘기 군대를 훈련시켰다",
            "훔친 우산으로 성을 지었다", "하늘을 깨물었더니 하늘도 깨물었다", "지구 반대편까지 구멍을 파고 안녕이라고 했다", "천둥번개한테 점심을 통째로 먹였다",
            "주차 자리를 두고 유령이랑 싸웠다", "스스로 천장 선풍기의 왕이 됐다", "시계를 녹여서 마셨다", "바게트랑 칼싸움을 했다",
            "집만 한 닭을 들고 다녔다", "바람을 체포하려고 했다", "속삭임 도서관에서 폭동을 일으켰다", "날아다니는 소파를 타고 결혼식에 난입했다",
            "시간의 제한 속도를 위반했다", "엄청 화난 토스터 앞에서 연설을 했다", "실수로 튀김 차원으로 순간이동했다", "영수증만 먹는 용을 입양했다",
            "오차드 로드를 달리면서 아이고를 외쳤다", "새벽 3시에 회당에서 triple t를 외쳤다", "[삭제됨]을 한 그릇 다 먹고 검은 담즙을 토했다", "모르는 사람한테 'I AM THE ONE WHO KNOCKS'라고 소리쳤다",
            "누가 하이퍼픽세이션을 방해해서 완전히 셧다운됐다",
            "모닥불 주위를 춤추며 'ahin sukung thai thai, sukung, ayamsukung, sampakkung'을 외쳤다",
            "카메라 앞에서 정신질환이랑 틱을 흉내 내며 '아만쿠포!'라고 외쳤다", "어안이 벙벙한 구경꾼 500명 앞에서 전설의 반바지 당기기를 해냈다",
            "전자레인지한테 댄스 배틀을 신청했다", "젤리로 만든 버스를 몰고 세차장을 통과했다", "중고 거래 앱에 바다를 팔려고 했다", "도시 전체를 에어바운스로 만들었다",
            "지나가는 비행기한테 장보기 목록을 소리쳤다", "동상이랑 팔씨름을 해서 진짜로 이겼다", "거대한 오리를 타고 국회에 들어갔다", "불붙은 파인애플 일곱 개로 저글링을 했다",
            "밑에 누가 있는지 보려고 자기 얼굴을 벗겨 냈지만 그 밑에도 {A}뿐이었다", "11년 전에 죽은 가족을 위해 식탁을 차리고 그래도 저녁을 대접했다", "뒷마당에 개를 묻고 매일 밤 다시 파내서 미안하다고 한다", "자기 추억이 전부 들어 있는 집을 불태우고 그 앞에 서서 손을 녹였다",
            "자기를 사랑해 줄 무언가가 자라길 바라며 이를 하나씩 뽑아 땅에 심었다", "비명이 드디어 안에 머물도록 자기 입을 꿰맸다", "아무도 다시는 엄마를 빼앗아 가지 못하게 엄마의 마지막 사진을 먹었다", "나방 백 마리의 날개를 뜯고 한 마리 한 마리 이름을 부르며 사과했다",
            "꿈속에서 내레이터의 목을 졸랐고 깨어나 보니 손에 잉크가 묻어 있었다", "자기 피로 벽에 '살려줘'를 만 번 썼지만 아무도 읽지 않았다", "누군가 마지막으로 자기 이름을 불러 준 날부터 날짜를 세다가 4만에서 잊어버렸다", "피부 밑에서 뭔가가 계속 움직이는 동안 카메라를 보며 웃었다",
            "가족이 전부 자기 상상 속 존재일 뿐이었고 외로웠기 때문에 자기 가족을 죽였다", "하늘에 대고 소리를 질러서 살점 섞인 피의 비가 내리게 했고 그걸 전부 마셨다", "[REDACTED]에게 용서를 비는 편지를 썼지만 끝내 보내지 않았다", "칼로 거울에 자기 얼굴을 새겼지만 그래도 그건 그가 아니었다",
            "자기와 똑같이 생긴 낯선 사람들로 가득한 방에 앉아 그들이 나갈 때까지 욕설을 퍼부었다", "골판지로 타임머신을 만들어 행복했던 때로 돌아가려 했지만 어제로밖에 못 갔다", "'그리고 그는 깨어나 이 모든 게 꿈이었다는 걸 깨달았다'로 끝나는 자기 이야기를 썼지만 그는 끝내 깨어나지 않았다", "세상 끝에 앉아 7일 내내 해가 지는 걸 보다가 오늘이 무슨 요일인지 잊어버렸다",
            "숨을 깊이 들이쉬고 BB탄 없는 에어소프트 총을 관자놀이에 댔다", "자기 손을 통제할 수 없어서 원형 톱으로 두 손을 잘랐다", "왼손을 믹서기에 넣고 켜서 피투성이 살덩이로 만들었다", "내레이터가 시켜서, 그리고 목소리들도 시켜서 썩은 시체를 먹었다",
            "부엌칼로 자기를 몇 번이고 찔렀는데 어째서인지 죽지 않았고 아직도 피를 흘리고 있다", "자기가 존재한다는 이유로 손가락을 물어뜯고 자기 눈을 파냈다", "어딘가의 창문에서 뛰어내려 뼈 207개가 부러졌다",
            "손가락 끝으로 자기 배를 가르려고 했다", "다시는 [REDACTED]을(를) 보지 못하게 자기 눈알을 긁어내려고 했다", "자기 목을 찢고 혈관을 끄집어내서 벗겨진 고깃덩이만 남게 했다", "벽에 머리를 박았다",
            "몇 년째 아무도 말을 걸어 주지 않아서 모자 쓴 남자가 찾아오도록 9일 동안 한숨도 안 잤다", "네 식구가 악마라서 자기 차로 그들을 치었다", "사람이 고통에 비명을 지르는 동안 그 사람을 산 채로 먹었다", "피부도 손가락도 남지 않을 때까지 자기 피로 악보를 썼다",
            "자기 장례식에서 방귀를 뀌었고 사람들이 기억하는 건 그것뿐이었다", "자기 몸에 불을 붙여 얼굴을 알아볼 수 없을 때까지 탔지만 걱정 마, 다시 재생됐다 (내일 또 그럴 수 있게)", "녹슨 톱으로 이웃의 머리를 썰어버렸다"
        ],
        place: [
            "고속도로 한가운데에서", "(살짝) 불이 붙은 채로", "달리는 기차 위에서", "불타는 코피티암 안에서",
            "어리둥절한 오리 300마리 앞에서", "거위로 꽉 찬 법정에서", "세상 끝에서", "화산 안에서",
            "천둥번개가 치는 동안", "날아다니는 소파 위에서", "염소 퍼레이드 한가운데에서", "바다 밑바닥에서",
            "토네이도 한가운데에서", "거대한 수프 그릇 안에서", "달리는 버스 지붕 위에서", "귀신 들린 자판기 안에서",
            "요리 프로그램 결승전에서", "폭발하는 빵집 옆에서", "온 동네 사람들 앞에서", "엄청 높은 국수 가닥 꼭대기에서",
            "최고 속도로 돌아가는 세탁기 안에서", "화난 게들이 가득한 구덩이 위에서", "뉴스 생방송 중에", "용의 생일 파티에서",
            "저승 주차장에서", "싱글리시-유대 문화 축제에서",
            "날아가는 비행기 날개 위에서", "국수로 된 토네이도 안에서", "수프로 된 번개 폭풍 한가운데에서", "팬케이크로 만든 고층 빌딩 꼭대기에서",
            "소리 지르는 거위로 꽉 찬 경기장에서", "세상에서 제일 화난 믹서기 안에서",
            "삭제된 자기 버전들을 보관하는 방에서", "의사는 없고 비명만 있는 병원 안에서", "바닥이 없는 우물 바닥에서", "이제는 그의 얼굴을 쓴 낯선 사람들로 가득한 어린 시절 방에서",
            "모든 의자가 벽을 보고 있는 교회에서", "모두가 자기를 잊어 가는 걸 볼 수 있게 창문이 달린 관 속에서",
            "연옥에서 (살아서 큰 죄는 용서받았지만 영혼이 아직 죄와 결점과 갚지 못한 벌에 매달려 있어서)"
        ],
        why: [
            "그리고 아무도 그를 막지 않았다", "목소리들이 좋다고 했으니까", "아무 이유 없이", "그리고 경찰은 궁금한 게 많다",
            "귀뚜라미 합창단이 그의 이름을 외치는 동안", "솔직히 그건 시작에 불과했다", "용이랑 내기해서 졌으니까", "그리고 해명을 거부했다",
            "그 때문에 작은 종말이 왔다", "하늘이 작은 수프 눈물을 흘리는 동안", "별자리 운세가 혼돈을 요구해서", "이웃들은 아직도 그 얘기를 한다",
            "먹지 말아야 할 걸 먹은 뒤에", "그리고 염소가 전부 촬영했다", "그날은 이제 국경일이다", "알파벳을 거꾸로 외치면서",
            "숟가락들이 시켜서", "그리고 시장은 즉시 사임했다", "그건 물리 법칙 세 개를 깼다", "그리고 그는 또 그랬다",
            "이제 아무것도 말이 안 되니까", "오리 천 마리가 꽥꽥 찬성하는 동안", "그리고 뉴스는 그걸 기적이라고 불렀다", "그리고 지금은 그의 동상이 있다",
            "그는 그걸 살짝 후회한다",
            "그리고 인터넷은 영원히 회복하지 못할 것이다", "달이 같이 소리를 지르는 동안", "토스터가 먼저 시작했으니까", "그리고 행성 세 개가 민원을 넣었다",
            "오리 군악대가 반주하는 동안", "그리고 지역 뉴스팀이 기절했다",
            "그리고 목소리들은 그걸로도 아직 부족하다고 했다", "그리고 그는 자기가 행복했던 적이 있었는지 기억나지 않는다", "이전의 모든 그가 비명을 지르며 죽었으니까", "엄마가 문간에서 지켜보면서 아무것도 하지 않는 동안",
            "그리고 깨어나면 또 일어났다, 또, 또, 또", "그리고 어딘가에서 누군가 웃으며 생성 버튼을 눌렀다", "이야기가 그래도 싸다고 했으니까", "그리고 그의 안에 있는 구멍이 조금 더 커졌다"
        ]
    },
    who: [
        "고양이랑 같이", "구름 밥 삼촌이랑 같이", "어리둥절한 오리 세 마리랑 같이", "이웃이랑 같이", "아주 진지한 염소랑 같이",
        "아만쿠랑 같이", "할머니랑 같이", "말하는 숟가락이랑 같이", "혼자서", "비둘기 떼랑 같이",
        "절친인 가로등이랑 같이", "트렌치코트를 입은 수상한 남자랑 같이", "사악한 쌍둥이랑 같이", "예의 바른 악어랑 같이", "학교 합창단 전체랑 같이",
        "간식이 가득한 가방을 메고", "애완 돌멩이랑 같이", "긴장한 닭이랑 같이", "아기 용이랑 같이", "시장님이랑 같이"
    ],
    twists: [
        "그러자 천장이 말을 하기 시작했다.", "닭 한 마리가 지나가면서 인사를 했다.", "바닥이 젤리로 변했다.", "어디선가 토스터가 울었다.",
        "찻잔 안에 작은 남자가 나타나서 월세를 달라고 했다.", "모두가 파란색이 뭐였는지 잊어버렸다.", "와이파이가 자아를 가졌다.", "시계가 창피해서 거꾸로 가기 시작했다.",
        "비가 위로 내리기 시작했다.", "하늘에 문이 나타났는데 열려 있었다.", "모든 비둘기가 동시에 고개를 돌려 그를 쳐다봤다.", "달이 문자를 보냈다.",
        "아무도 몰랐지만 벽이 더 가까워졌다.", "정장을 입은 염소가 신분증을 보여 달라고 했다.", "땅이 재채기를 했다.", "시간이 딱 샌드위치 하나만큼 멈췄다.",
        "아주 늙은 오리가 비밀을 속삭이고 사라졌다.", "계단이 미끄럼틀이 됐다.", "모든 게 화요일 냄새가 났다.", "그림자들이 커피 사러 나갔다.",
        "작은 숟가락들이 행진하며 지나갔다.", "태양이 늦어서 미안하다고 했다.", "냉장고에서 목소리가 들렸다: 아직 아니야.", "벽에 걸린 지도에서 국수가 흘러나오기 시작했다.",
        "어디선가 화산이 트림을 했다.", "이웃들이 전부 의자로 변했다.", "까마귀가 법적 통지서를 배달했다.", "비가 환불을 요구했다.",
        "그는 갑자기 동네 비둘기들 이름을 전부 알게 됐다.", "중력이 잠깐 쉬었다.",
        "누군가 K-pop 콘서트 한가운데서 triple t를 외쳤다.",
        "어떤 목소리가 크게 물었다: '누가 돌아왔게? 아키옹이 또 돌아왔어?'",
        "펭귄이 살아나서 곧장 산으로 향했다.",
        "야생 자자새가 나타나서 [삭제됨]에 대해 인포덤프를 시작했다.",
        "네가 바로 베이 하버 아키옹이었어!",
        "고양이가 이 이야기의 내레이션을 시작했다.", "마을의 모든 시계가 웃기 시작했다.", "하늘이 배경화면을 바꿨다.", "구름이 그에게 사인을 부탁했다.",
        "신호등들이 밴드를 결성했다.", "그의 신발이 그를 두고 걸어가 버렸다.", "거위 한 마리가 매니저 나오라고 했다.", "인터넷이 정확히 1초 동안 조용해졌다."
    ],
    sounds: [
        "*쾅*", "*철퍽*", "*빵빵*", "*뾰잉*", "*후루룩*", "*띵!*", "*두둥 두둥 두둥*", "*윌헬름 비명*", "*뿡*", "*파멸과 절망의 비명*",
        "*꽥*", "*귀뚤귀뚤*", "*콰광*", "*쌕쌕*", "*콩*", "*야옹?*", "*멀리서 사이렌*", "*oy vey!*", "*walao!*", "*sukung!*", "*sampakkung!*", "*철퍽 철퍽 철퍽*",
        "*끼이익*", "*쨍그랑*", "*휘익*", "*쿵*", "*똑 똑*", "*치익*", "*펑!*", "*킁*", "*꾸르륵*", "*짹짹*", "*사람 소리*",
        "*딩동*", "*부릉부릉*", "*짤랑!*", "*뽀록*", "*와삭*", "*에헴*"
    ],
    titleStart: [
        "아키옹과", "아키옹의 전설:", "아키옹이 만난", "아키옹 대",
        "아키옹의 비밀 일기:", "아키옹이 무서워하는", "돌아온 아키옹과", "아키옹이 실수로 친구가 된",
        "아키옹의 숨겨진 이야기:", "아키옹이 절대 용서 못 할", "아키옹이 물리친", "아키옹과 저주받은",
        "유노 볼 전설:", "아키옹과 미스터리한", "아키옹의 모험:", "아키옹과 부활한",
        "아키옹을 괴롭히는", "아키옹의 마지막 춤:", "아키옹이 도망친", "아키옹이 휴가를 같이 간"
    ],
    titleEnd: [
        "유령 토스터", "화난 비둘기들", "국수 예언", "거꾸로 뒤집힌 코피티암",
        "예의 바른 화산", "수상한 수프", "염소 변호사", "사라진 화요일",
        "날아다니는 소파", "숟가락 군대", "병 속의 달", "말하는 냉장고",
        "천 마리 오리", "영수증 용", "양말 서랍", "엄청 화난 토스터", "유노 볼 전설", "자자새 탐험대", "전설의 반바지 당기기",
        "젤리 버스", "춤추는 전자레인지", "예의 바른 악어", "불타는 파인애플"
    ]
};

// ----- 조선말 (North Korea) -----
// Nobody will ever use North Korea but whatevere lol...
STORY.kp = {
    grammar: { name: "아키옹", first: "아키옹은", order: ["S", "W", "P", "A"], gap: " ", comma: ", ", end: ".", loud: "!!!", sep: " ", titleJoin: " " },
    start: [
        "그러자 아키옹은", "그후 아키옹은", "갑자기 아키옹은", "나중에 아키옹은", "한편 아키옹은",
        "아무 예고도 없이 아키옹은", "난데없이 아키옹은", "다음날 아침 아키옹은", "한밤중에 아키옹은", "바로 그때 아키옹은",
        "잠시후 아키옹은", "몇해 지나서 아키옹은", "웬일인지 아키옹은", "누구도 눈치채기전에 아키옹은", "모두가 말렸지만 아키옹은",
        "어느 평범한 화요일에 아키옹은", "아무 생각없이 아키옹은", "점심을 먹자마자 아키옹은", "순전히 호기심때문에 아키옹은", "리유는 아무도 모르지만 아키옹은",
        "얼마 지나지 않아 아키옹은", "놀라운 반전으로 아키옹은", "자신만만하게 아키옹은", "누구에게도 묻지 않고 아키옹은", "실수로 아키옹은",
        "정확히 계획대로 아키옹은"
    ],
    normal: {
        act: [
            "장마당에 갔다", "국수를 한사발 크게 먹었다", "낮잠을 오래 잤다", "개를 데리고 동네를 한바퀴 산보하였다",
            "보도를 보았다", "낡은 자전거를 고쳤다", "귤을 한봉지 샀다", "뻐스를 기다렸다",
            "볶음밥을 만들었다", "뜨거운 커피를 마셨다", "신문을 읽었다", "자동차를 씻었다",
            "울타리에 칠을 하였다", "방바닥을 쓸었다", "어머니에게 전화를 걸었다", "물고기에게 먹이를 주었다",
            "빨래를 개였다", "동전을 세였다", "동무들과 카드놀이를 하였다", "꽃에 물을 주었다",
            "라지오를 들었다", "창문을 닦았다", "카야쩸을 바른 빵을 먹었다", "현관앞에 앉아있었다", "조지 W. 부시가 신발을 피하듯이 질문을 피하였다",
            "어리둥절한 판매원에게 자기의 엘리트 공지식을 설명하였다",
            "신발끈을 천천히 매였다", "사다리를 빌렸다", "달리기운동을 하였다", "이웃에게 손을 흔들었다", "예순일곱시간동안 쉬지 않고 정보를 쏟아냈다",
            "복권을 샀다", "선풍기를 고쳤다", "차 한잔을 끓였다", "울타리나무를 다듬었다", "진짜 싱가포르 아저씨처럼 코피오 코송을 주문하였다", "남조선 드라마 오빠를 보면서 라면을 후루룩 먹었다",
            "양념통을 순서대로 정리하였다", "접은 령수증으로 흔들리는 책상을 고쳤다", "나시 르막 한접시를 먹었다", "텔레비죤 원격조종기와 말다툼을 하였다",
            "오토바이를 씻으러 갔다", "새 슬리퍼를 샀다", "유명한 닭고기밥을 먹으려고 줄을 섰다", "옆집 로인과 장기를 두었다"
        ],
        place: [
            "오래된 장마당근처에서", "코피티암뒤에서", "큰 나무밑에서", "뻐스정류소에서",
            "집앞에서", "공원에서", "우편국옆에서", "강가에서",
            "놀이터에서", "부엌에서", "발코니에서", "길 저쪽에서", "뉴턴 음식쎈터에서", "강남 편의점안에서", "동네 회당근처에서",
            "절간에서", "학교근처에서", "정원에서", "밤시장에서",
            "고속도로옆에서", "살림방에서", "리발소에서", "옥상에서",
            "음식거리에서", "상점 계산대줄에서", "기차역에서", "공원 걸상에서", "빨래방에서", "마막 매대앞에서"
        ],
        why: [
            "심심해서", "월요일이여서", "아무도 안하니까", "날씨가 좋아서",
            "허리가 아파서", "안해와 약속했으니까", "아주 긴 하루를 보낸 뒤에", "비가 오기전에",
            "피곤했는데도", "매일 아침처럼", "랭동기가 텅 비여서", "옛 노래를 흥얼거리면서",
            "내기에서 진 뒤에", "값이 눅으니까", "상점이 문을 닫을 시간이여서", "돈을 아끼려고", "그리고 모든것이 아만쿠, 아만쿠포", "키아푸소리를 안 들으려고", "대박 할인은 기다려주지 않으니까 lah", "lemme cook lah",
            "이웃이 부탁해서", "해가 질 무렵", "땅콩을 먹으면서", "전통이니까",
            "텔레비죤이 고장나서", "딱히 할 일이 없어서", "손전화 전지가 다 돼서", "오후 커피를 마신 뒤에", "라지오가 좀 쉬라고 해서", "차가 식기를 기다리면서"
        ]
    },
    weird: {
        act: [
            "비둘기와 이야기를 나누었다", "게이 퍼리를 남자친구로 두었다", "랭동기안에 있는 문을 열었다", "자기 그림자에게 춤을 가르쳤다", "보이지 않는 우산을 팔았다",
            "달에게 길을 물었다", "구름을 입양해서 밥 삼촌이라고 이름을 지었다", "왼쪽 신발 두짝을 신었다", "화요일이 다 팔렸다는것을 알아냈다",
            "승강기에 속삭이는 사람들의 비밀모임에 가입하였다", "목소리를 샌드위치와 바꾸었다", "시계를 심고 시간이 자라기를 기다렸다", "물웅뎅이와 인터뷰를 하였다",
            "문손잡이말을 류창하게 배웠다", "꿈 한켤레를 빌렸다", "바람을 파랗게 칠하였다", "달팽이에게 운전을 가르쳤다",
            "래일에서 자기자신에게 편지를 부쳤다", "숟가락 일곱개와 악단을 무었다", "자기 양말서랍안에서 길을 잃었다", "누가 더 나이가 많은지 거울과 다투었다",
            "수요일로 이어지는 계단을 찾았다", "가로등과 단짝동무가 되였다", "병안에 작은 달을 키웠다", "아무데도 가지 않는 표를 샀다",
            "비에게 공손하게 문을 두드리는 법을 가르쳤다", "메아리를 한바께쯔 들고다녔다", "보험을 파는 물고기를 만났다", "지평선을 접어서 종이배를 만들었다",
            "작은 우산들로 정원을 가꾸었다", "쏘파가 자기 이름을 속삭이는것을 들었다", "왼쪽 양말을 소문 하나와 바꾸었다", "그림자들을 위하여 다과회를 열었다",
            "재채기로 려권에 도장을 찍었다", "계단에게 노래하는 법을 가르쳤다", "자기 이마의 지도를 찾았다", "무지개안에서 낮잠을 잤다",
            "숫자 7과 조용히 말다툼을 하였다", "바나나에 시를 썼다", "구름을 설득하여 변호사로 만들었다", "유령을 고용하여 빨래를 시켰다",
            "유노 볼과 순수한 싱글리시-유대 대본으로 대화하였다", "자는 아이에게 oy vey lah라고 소리쳤다",
            "거대한 떡볶이 한사발을 끌고 국경을 넘었다", "아무 리유없이 높은 휘파람을 련습하였다",
            "세타르코스(소크라테스의 악한 쌍둥이)와 철학토론을 하였다",
            "살아나서 산으로 가 자자새가 된 펭긴과 동무가 되였다",
            "'트위터 사용자가 눈구슬을 마셨다. 에뮤가 통통해진 리유'라는 이야기를 읽었다",
            "생방송으로 'Everybody ate Chris TWD'를 보았다",
            "화가 난 채팅참가자에게 이것은 뇌썩음이 아니라 뇌성장이라고 말하였다",
            "앨리슨 버거스를 만나서 '방금 성이 버거라고 했소?'라고 물었다",
            "'사실 나는 아무것도 못 보았소, 왼쪽 눈은 43% 안 보이고 오른쪽 눈은 완전히 안 보이오'라고 선언하였다",
            "미쳐서 '잠간 방금 성이 버거스라고 했소?'라고 웨쳤다",
            "자의식을 가지고 제4의 벽을 부수기 시작하였다",
            "절대로 goon하지 않았다, 안 그러면 내 미니언들로 너를 쫓을것이다",
            "심장마비가 온채로 ambatukam과 ambatublo라고 말하였다",
            "'I AM THE ONE WHO KNOCKS'라고 말하고 모르는 사람의 집 문을 두드렸다",
            "'대박이 터졌다'라고 말하고 진짜로 도박장에서 대박을 터뜨렸다",
            "선인장에게 껴안는 법을 가르쳤다", "어제만 파는 빵집을 열었다", "거울속의 자기와 숨바꼭질을 하였다", "그림과 눈싸움을 하여 이겼다",
            "달에게 목수건을 떠주었다", "주말마다 그림자를 빌려주었다", "차주전자에게 인생상담을 받았다", "구름우에 모래성을 쌓았다"
        ],
        place: [
            "아주 작은 승강기안에서", "잠자는 고래우에서", "떠다니는 책상밑에서", "모서리가 없는 방에서",
            "말하는 랭동기옆에서", "조용한 폭풍 한가운데서", "국수로 만든 다리우에서", "비누방울안에서",
            "있지도 않은 뻐스정류소에서", "잃어버린 양말도서관에서", "계속 움직이는 문뒤에서", "천정에서",
            "거꾸로 자라는 나무들판에서", "까마귀가 운영하는 식당에서", "거꾸로 뒤집힌 코피티암에서", "옆으로 가는 계단우에서",
            "거대한 찻잔안에서", "언제나 새벽 3시인 마을에서", "주단끝에서", "아주 례절바른 화산옆에서",
            "눈구슬안에서", "치즈로 만든 기차우에서", "우뢰냄새가 나는 복도에서", "삼촌 얼굴모양의 구름우에서",
            "우유로 된 못에서", "지옥에서",
            "유노 볼을 찾으면서 마리나 베이 샌즈에서", "#RetroSlop 유희를 하면서 옛날식 유희장에서",
            "예루살렘은 저쪽이고 모든 길은 로마로 통하는 곳에서",
            "거대한 파인애플안에서", "잊혀진 월요일 박물관에서", "숟가락으로 만든 회전목마우에서", "잠자는 거인의 침대밑에서",
            "속삭이는 승강기안에서", "사막 한가운데 있는 등대에서"
        ],
        why: [
            "예언이 그렇게 말했으니까", "누구도 리의를 제기하지 않았다", "하지만 홀수날에만", "알수 없는 리유로",
            "벽들이 고개를 끄덕이는동안", "달이 시켰으니까", "꿈에서처럼", "그리고 시계들은 숨을 죽였다",
            "3차원에서는 불법인데도", "스파게티가 요구했으니까", "멀리서 라지오가 거꾸로 흘러나오는동안", "그림자들이 박수를 치는동안",
            "목요일같은 기분이 들어서", "그리고 웬일인지 말이 되였다", "방바닥이 콧노래를 부르는동안", "비둘기들이 지켜보고있었으니까",
            "아주 이상한 재채기를 한 뒤에", "그때문에 오리들이 긴장하였다", "그리고 하늘이 두번 깜빡였다", "중력이 휴가중이여서",
            "시간이 례절바르게 방을 나가는동안", "그것은 모든것을 설명하면서 아무것도 설명하지 않았다", "수상한 국을 마신 뒤에", "숫자 7이 우겨서",
            "염소 한마리가 조용히 그를 평가하는동안", "작게 iykykykykyky라고 중얼거리면서", "너무 meshuggenah해서 leh",
            "지능이 너무 높으면서 동시에 너무 낮은채로 '그 사람이 알고있을가?' 하고 궁금해하면서",
            "별들이 심심해해서", "그리고 가구들이 조용히 박수를 쳤다", "숟가락과 저가락이 필기하는동안", "운수과자가 그렇게 말해서",
            "달이 못본척하는동안", "벽지가 해보라고 부추겨서"
        ]
    },
    schizo: {
        act: [
            "보라색으로 변한 이웃처럼 신호등이 보라색이 될 때까지 소리를 질렀다", "숟가락 47개로 로케트를 만들었다", "자동판매기와 싸웠다", "지도를 통채로 먹었다",
            "염소를 변호사로 고용하였다", "태양에게 눈싸움을 걸었다", "물웅뎅이의 시장이 되였다", "목요일에 선전포고를 하였다",
            "번개를 삼켰다", "오리 200마리에게 세금계산을 가르쳤다", "여섯시간동안 등잔으로 변하였다", "랭동기와 씨름을 하다가 졌다",
            "일부러 구름에 불을 질렀다", "이웃을 궤도로 쏘아올렸다", "국수 한오리를 숭배하는 사교를 만들었다", "태풍의 얼굴에 주먹을 날렸다",
            "우편함과 결혼하려고 하였다", "자기 그림자를 염소에게 팔았다", "고추 열다섯개를 먹고 래일을 보았다", "달을 납치하여 몸값을 요구하였다",
            "새로운 색갈을 발명하였다가 체포되였다", "상점 손수레를 타고 화산을 내려왔다", "바다에게 너무 축축하다고 소리쳤다", "화난 비둘기 군대를 훈련시켰다",
            "훔친 우산으로 성을 쌓았다", "하늘을 깨물었더니 하늘도 깨물었다", "지구 반대편까지 구멍을 파고 안녕하시오라고 하였다", "우뢰에게 점심을 통채로 먹였다",
            "주차자리를 놓고 유령과 싸웠다", "스스로 천정 선풍기의 왕이 되였다", "시계를 녹여서 마셨다", "바게트와 칼싸움을 하였다",
            "집채만 한 닭을 안고다녔다", "바람을 체포하려고 하였다", "속삭임 도서관에서 소동을 일으켰다", "날아다니는 쏘파를 타고 결혼식에 뛰여들었다",
            "시간의 제한속도를 위반하였다", "엄청 화난 빵굽개앞에서 연설을 하였다", "실수로 튀김차원으로 순간이동하였다", "령수증만 먹는 룡을 입양하였다",
            "오차드 로드를 달리면서 아이고를 웨쳤다", "새벽 3시에 회당에서 triple t를 웨쳤다", "[삭제됨]을 한사발 다 먹고 검은 담즙을 토하였다", "모르는 사람에게 'I AM THE ONE WHO KNOCKS'라고 소리쳤다",
            "누가 몰두를 방해해서 완전히 멈춰버렸다",
            "우등불주위를 춤추며 'ahin sukung thai thai, sukung, ayamsukung, sampakkung'을 웨쳤다",
            "사진기앞에서 정신병과 틱을 흉내내며 '아만쿠포!'라고 웨쳤다", "어안이 벙벙한 구경군 500명앞에서 전설의 반바지당기기를 해냈다",
            "전자레인지에게 춤겨루기를 신청하였다", "젤리로 만든 뻐스를 몰고 세차장을 통과하였다", "인터네트 시장에서 바다를 팔려고 하였다", "도시전체를 공기놀이터로 만들었다",
            "지나가는 비행기에게 장보기목록을 소리쳤다", "동상과 팔씨름을 하여 진짜로 이겼다", "거대한 오리를 타고 회의장에 들어갔다", "불붙은 파인애플 일곱개로 재주를 부렸다",
            "밑에 누가 있는지 보려고 자기 얼굴을 벗겨냈지만 그 밑에도 {A}뿐이였다", "11년전에 죽은 가족을 위해 식탁을 차리고 그래도 저녁을 대접하였다", "뒤마당에 개를 묻고 매일밤 다시 파내여 미안하다고 한다", "자기 추억이 전부 들어있는 집을 불태우고 그 앞에 서서 손을 녹이였다",
            "자기를 사랑해줄 무엇인가가 자라기를 바라며 이를 하나씩 뽑아 땅에 심었다", "비명이 드디여 안에 머물도록 자기 입을 꿰매였다", "아무도 다시는 어머니를 빼앗아가지 못하게 어머니의 마지막 사진을 먹었다", "나방 백마리의 날개를 뜯고 한마리 한마리 이름을 부르며 사과하였다",
            "꿈속에서 해설자의 목을 졸랐고 깨여나보니 손에 잉크가 묻어있었다", "자기 피로 벽에 '살려달라'를 만번 썼지만 아무도 읽지 않았다", "누군가 마지막으로 자기 이름을 불러준 날부터 날자를 세다가 4만에서 잊어버렸다", "피부밑에서 무엇인가가 계속 움직이는 동안 사진기를 보며 웃었다",
            "가족이 전부 자기 상상속 존재일 뿐이였고 외로웠기때문에 자기 가족을 죽였다", "하늘에 대고 소리를 질러서 살점 섞인 피의 비가 내리게 하였고 그것을 전부 마셨다", "[REDACTED]에게 용서를 비는 편지를 썼지만 끝내 보내지 않았다", "칼로 거울에 자기 얼굴을 새겼지만 그래도 그것은 그가 아니였다",
            "자기와 똑같이 생긴 낯선 사람들로 가득한 방에 앉아 그들이 나갈 때까지 욕설을 퍼부었다", "판지로 시간기계를 만들어 행복했던 때로 돌아가려 하였지만 어제로밖에 못 갔다", "'그리고 그는 깨여나 이 모든것이 꿈이였다는것을 깨달았다'로 끝나는 자기 이야기를 썼지만 그는 끝내 깨여나지 않았다", "세상 끝에 앉아 7일 내내 해가 지는것을 보다가 오늘이 무슨 요일인지 잊어버렸다",
            "숨을 깊이 들이쉬고 탄알 없는 장난감총을 관자놀이에 댔다", "자기 손을 통제할수 없어서 원형톱으로 두 손을 잘랐다", "왼손을 혼합기에 넣고 켜서 피투성이 살덩이로 만들었다", "해설자가 시켜서, 그리고 목소리들도 시켜서 썩은 시체를 먹었다",
            "부엌칼로 자기를 몇번이고 찔렀는데 어째서인지 죽지 않았고 아직도 피를 흘리고있다", "자기가 존재한다는 리유로 손가락을 물어뜯고 자기 눈을 파냈다", "어딘가의 창문에서 뛰여내려 뼈 207개가 부러졌다",
            "손가락 끝으로 자기 배를 가르려고 하였다", "다시는 [REDACTED]을(를) 보지 못하게 자기 눈알을 긁어내려고 하였다", "자기 목을 찢고 혈관을 끄집어내여 벗겨진 고기덩이만 남게 하였다", "벽에 머리를 박았다",
            "몇년째 아무도 말을 걸어주지 않아서 모자 쓴 남자가 찾아오도록 9일동안 한숨도 자지 않았다", "네 식구가 악마여서 자기 차로 그들을 치였다", "사람이 고통에 비명을 지르는 동안 그 사람을 산채로 먹었다", "피부도 손가락도 남지 않을 때까지 자기 피로 악보를 썼다",
            "자기 장례식에서 방귀를 뀌였고 사람들이 기억하는것은 그것뿐이였다", "자기 몸에 불을 달아 얼굴을 알아볼수 없을 때까지 탔지만 걱정 말라, 다시 재생되였다 (래일 또 그럴수 있게)", "녹쓴 톱으로 이웃집 사람의 머리를 썰어버렸다"
        ],
        place: [
            "고속도로 한가운데서", "(살짝) 불이 붙은채로", "달리는 기차우에서", "불타는 코피티암안에서",
            "어리둥절한 오리 300마리앞에서", "거위로 꽉 찬 재판정에서", "세상끝에서", "화산안에서",
            "우뢰가 치는동안", "날아다니는 쏘파우에서", "염소행진 한가운데서", "바다밑바닥에서",
            "회오리바람 한가운데서", "거대한 국사발안에서", "달리는 뻐스 지붕우에서", "귀신들린 자동판매기안에서",
            "료리경연 결승전에서", "폭발하는 빵집옆에서", "온 마을사람들앞에서", "엄청 높은 국수오리 꼭대기에서",
            "최고속도로 돌아가는 세탁기안에서", "화난 게들이 가득한 구뎅이우에서", "보도 실황방송중에", "룡의 생일잔치에서",
            "저승의 주차장에서", "싱글리시-유대 문화축전에서",
            "날아가는 비행기 날개우에서", "국수로 된 회오리바람안에서", "국으로 된 번개폭풍 한가운데서", "지짐으로 만든 고층건물 꼭대기에서",
            "소리지르는 거위로 꽉 찬 경기장에서", "세상에서 제일 화난 분쇄기안에서",
            "삭제된 자기 판본들을 보관하는 방에서", "의사는 없고 비명만 있는 병원안에서", "바닥이 없는 우물 바닥에서", "이제는 그의 얼굴을 쓴 낯선 사람들로 가득한 어린시절 방에서",
            "모든 의자가 벽을 보고있는 교회에서", "모두가 자기를 잊어가는것을 볼수 있게 창문이 달린 관속에서",
            "련옥에서 (살아서 큰 죄는 용서받았지만 령혼이 아직 죄와 결함과 갚지 못한 벌에 매달려있어서)"
        ],
        why: [
            "그리고 아무도 그를 막지 않았다", "목소리들이 좋다고 했으니까", "아무런 리유도 없이", "그리고 안전원들은 물어볼것이 많다",
            "귀뚜라미 합창단이 그의 이름을 웨치는동안", "솔직히 그것은 시작에 불과하였다", "룡과 내기를 해서 졌으니까", "그리고 해명을 거부하였다",
            "그때문에 작은 종말이 왔다", "하늘이 작은 국물눈물을 흘리는동안", "별점이 혼란을 요구해서", "이웃들은 아직도 그 이야기를 한다",
            "먹지 말아야 할것을 먹은 뒤에", "그리고 염소가 전부 촬영하였다", "그날은 이제 명절이다", "자모를 거꾸로 웨치면서",
            "숟가락들이 시켜서", "그리고 시장은 즉시 사임하였다", "그것은 물리법칙 세개를 깨뜨렸다", "그리고 그는 또 그렇게 하였다",
            "이제는 아무것도 말이 안되니까", "오리 천마리가 꽥꽥 찬성하는동안", "그리고 보도는 그것을 기적이라고 불렀다", "그리고 지금은 그의 동상이 있다",
            "그는 그것을 살짝 후회한다",
            "그리고 인터네트는 영원히 회복하지 못할것이다", "달이 같이 소리를 지르는동안", "빵굽개가 먼저 시작했으니까", "그리고 행성 세개가 신소를 제기하였다",
            "오리 취주악단이 반주하는동안", "그리고 지방보도반이 기절하였다",
            "그리고 목소리들은 그것으로도 아직 부족하다고 하였다", "그리고 그는 자기가 행복했던적이 있었는지 기억나지 않는다", "이전의 모든 그가 비명을 지르며 죽었으니까", "어머니가 문간에서 지켜보면서 아무것도 하지 않는 동안",
            "그리고 깨여나면 또 일어났다, 또, 또, 또", "그리고 어디선가 누군가 웃으며 생성단추를 눌렀다", "이야기가 그래도 싸다고 하였으니까", "그리고 그의 안에 있는 구멍이 조금 더 커졌다"
        ]
    },
    who: [
        "고양이와 함께", "구름 밥 삼촌과 함께", "어리둥절한 오리 세마리와 함께", "이웃과 함께", "아주 진지한 염소와 함께",
        "아만쿠동무와 함께", "할머니와 함께", "말하는 숟가락과 함께", "혼자서", "비둘기떼와 함께",
        "단짝동무인 가로등과 함께", "긴 외투를 입은 수상한 남자와 함께", "악한 쌍둥이와 함께", "례절바른 악어와 함께", "학교 합창단 전체와 함께",
        "간식이 가득한 배낭을 메고", "애완 돌멩이와 함께", "긴장한 닭과 함께", "아기 룡과 함께", "시장동지와 함께"
    ],
    twists: [
        "그러자 천정이 말을 하기 시작하였다.", "닭 한마리가 지나가면서 인사를 하였다.", "방바닥이 묵으로 변하였다.", "어디선가 빵굽개가 울었다.",
        "찻잔안에 작은 남자가 나타나서 집세를 달라고 하였다.", "모두가 파란색이 무엇이였는지 잊어버렸다.", "무선망이 자의식을 가졌다.", "시계가 부끄러워서 거꾸로 가기 시작하였다.",
        "비가 우로 내리기 시작하였다.", "하늘에 문이 나타났는데 열려있었다.", "모든 비둘기가 동시에 고개를 돌려 그를 쳐다보았다.", "달이 통보문을 보냈다.",
        "아무도 몰랐지만 벽이 더 가까와졌다.", "양복을 입은 염소가 공민증을 보여달라고 하였다.", "땅이 재채기를 하였다.", "시간이 딱 샌드위치 하나만큼 멈추었다.",
        "아주 늙은 오리가 비밀을 속삭이고 사라졌다.", "계단이 미끄럼대가 되였다.", "모든것이 화요일냄새가 났다.", "그림자들이 커피를 사러 나갔다.",
        "작은 숟가락들이 행진하며 지나갔다.", "태양이 늦어서 미안하다고 하였다.", "랭동기에서 목소리가 들렸다: 아직 아니오.", "벽에 걸린 지도에서 국수가 흘러나오기 시작하였다.",
        "어디선가 화산이 트림을 하였다.", "이웃들이 전부 의자로 변하였다.", "까마귀가 법적 통지서를 배달하였다.", "비가 돈을 돌려달라고 하였다.",
        "그는 갑자기 마을 비둘기들의 이름을 전부 알게 되였다.", "중력이 잠간 쉬였다.",
        "누군가 K-pop 공연 한가운데서 triple t를 웨쳤다.",
        "어떤 목소리가 크게 물었다: '누가 돌아왔게? 아키옹이 또 돌아왔소?'",
        "펭긴이 살아나서 곧장 산으로 향하였다.",
        "야생 자자새가 나타나서 [삭제됨]에 대하여 끝없이 이야기하기 시작하였다.",
        "네가 바로 베이 하버 아키옹이였구나!",
        "고양이가 이 이야기를 해설하기 시작하였다.", "마을의 모든 시계가 웃기 시작하였다.", "하늘이 배경화면을 바꾸었다.", "구름이 그에게 수표를 부탁하였다.",
        "신호등들이 악단을 무었다.", "그의 신발이 그를 두고 걸어가버렸다.", "거위 한마리가 책임자를 불러오라고 하였다.", "인터네트가 정확히 1초동안 조용해졌다."
    ],
    sounds: [
        "*쾅*", "*철퍽*", "*빵빵*", "*뽀용*", "*후루룩*", "*땡!*", "*두둥 두둥 두둥*", "*윌헬름의 비명*", "*뿡*", "*파멸과 절망의 비명*",
        "*꽥*", "*귀뚤귀뚤*", "*콰광*", "*쌕쌕*", "*콩*", "*야옹?*", "*멀리서 싸이렌*", "*oy vey!*", "*walao!*", "*sukung!*", "*sampakkung!*", "*철퍽 철퍽 철퍽*",
        "*끼익*", "*쨍그랑*", "*휘익*", "*쿵*", "*똑 똑*", "*지글지글*", "*펑!*", "*킁*", "*꾸르륵*", "*짹짹*", "*사람소리*",
        "*딩동*", "*부릉부릉*", "*짤랑!*", "*뽀르륵*", "*와작*", "*에헴*"
    ],
    titleStart: [
        "아키옹과", "아키옹의 전설:", "아키옹이 만난", "아키옹 대",
        "아키옹의 비밀일기:", "아키옹이 무서워하는", "돌아온 아키옹과", "아키옹이 실수로 동무가 된",
        "아키옹의 숨겨진 이야기:", "아키옹이 절대 용서못할", "아키옹이 물리친", "아키옹과 저주받은",
        "유노 볼 전설:", "아키옹과 수수께끼의", "아키옹의 모험:", "아키옹과 되살아난",
        "아키옹을 괴롭히는", "아키옹의 마지막 춤:", "아키옹이 도망친", "아키옹이 휴가를 함께 간"
    ],
    titleEnd: [
        "유령 빵굽개", "화난 비둘기들", "국수 예언", "거꾸로 뒤집힌 코피티암",
        "례절바른 화산", "수상한 국", "염소 변호사", "사라진 화요일",
        "날아다니는 쏘파", "숟가락 군대", "병속의 달", "말하는 랭동기",
        "천마리 오리", "령수증 룡", "양말서랍", "엄청 화난 빵굽개", "유노 볼 전설", "자자새 탐험대", "전설의 반바지당기기",
        "젤리 뻐스", "춤추는 전자레인지", "례절바른 악어", "불타는 파인애플"
    ]
};

// ----- 中文 -----
STORY.zh = {
    grammar: { name: "阿基翁", first: "阿基翁", order: ["S", "W", "P", "A"], gap: "", comma: "，", end: "。", loud: "！！！", sep: "", titleJoin: "" },
    start: [
        "然后阿基翁", "之后阿基翁", "突然，阿基翁", "后来阿基翁", "与此同时，阿基翁",
        "毫无预兆地，阿基翁", "不知从哪儿冒出来的阿基翁", "第二天早上，阿基翁", "半夜里，阿基翁", "就在这时，阿基翁",
        "片刻之后，阿基翁", "多年以后，阿基翁", "不知为何，阿基翁", "在任何人发现之前，阿基翁", "不顾所有人的劝告，阿基翁",
        "在一个普通的星期二，阿基翁", "想都没想，阿基翁", "刚吃完午饭，阿基翁", "纯粹出于好奇，阿基翁", "没人知道为什么，但阿基翁",
        "没过多久，阿基翁", "剧情惊天反转，阿基翁", "信心满满地，阿基翁", "没问任何人，阿基翁", "一不小心，阿基翁",
        "准时准点地，阿基翁"
    ],
    normal: {
        act: [
            "去了市场", "吃了一大碗面", "睡了个长长的午觉", "牵着狗绕着街区散了步",
            "看了新闻", "修好了他的旧自行车", "买了一袋橙子", "等了公交车",
            "做了炒饭", "喝了热咖啡", "看了报纸", "洗了车",
            "刷了篱笆", "扫了地", "给妈妈打了电话", "喂了鱼",
            "叠了衣服", "数了数他的硬币", "跟朋友们打了牌", "浇了花",
            "听了收音机", "擦了窗户", "吃了咖椰吐司", "坐在门廊上发呆", "像小布什躲那只鞋一样躲开了所有问题",
            "向一个一脸懵的收银员讲解了他的精英球类知识",
            "慢慢地系了鞋带", "借了一把梯子", "去慢跑了", "向邻居挥了挥手", "连续六十七个小时疯狂输出冷知识",
            "买了彩票", "修好了电风扇", "泡了一杯茶", "修剪了树篱", "像真正的新加坡安哥一样点了一杯 kopi-o kosong", "一边看韩剧欧巴一边吸溜拉面",
            "按拼音顺序整理了调料架", "用折起来的收据垫好了摇晃的桌子", "吃了一盘椰浆饭", "跟电视遥控器吵了一架",
            "去洗了他的电动车", "买了一双新拖鞋", "排队买了那家有名的海南鸡饭", "跟隔壁的老爷爷下了一盘棋"
        ],
        place: [
            "在老市场附近", "在咖啡店后面", "在大树下", "在公交车站",
            "在他家门口", "在公园里", "在邮局旁边", "在河边",
            "在游乐场", "在厨房里", "在阳台上", "在街那头", "在纽顿小贩中心", "在江南的一家便利店里", "在当地犹太会堂附近",
            "在庙里", "在学校附近", "在花园里", "在夜市",
            "在高速公路旁", "在客厅里", "在理发店", "在屋顶上",
            "在小贩中心", "在超市排队的时候", "在火车站", "在公园长椅上", "在自助洗衣店", "在嘛嘛档门口"
        ],
        why: [
            "因为他很无聊", "因为今天是星期一", "因为没有别人愿意做", "因为天气很好",
            "因为他腰疼", "因为他答应过老婆", "在漫长的一天之后", "赶在下雨之前",
            "虽然他很累", "就像每天早上一样", "因为冰箱空了", "一边哼着老歌",
            "因为打赌输了", "因为很便宜", "因为店快关门了", "为了省点钱", "而且一切都很 amankuh 和 amankupoh", "免得被说怕输", "因为大促销可不等人 lah", "让我来 cook lah",
            "因为邻居拜托他", "在太阳下山的时候", "一边吃着花生", "因为这是传统",
            "因为电视坏了", "因为实在没别的事可做", "因为他手机没电了", "喝完下午的咖啡之后", "因为收音机叫他放松一下", "一边等着茶变凉"
        ]
    },
    weird: {
        act: [
            "跟一只鸽子聊了天", "交了一个同性恋兽迷男朋友", "打开了冰箱里面的一扇门", "教自己的影子跳舞", "卖起了隐形雨伞",
            "向月亮问了路", "领养了一朵云，给它取名叫鲍勃叔叔", "穿了两只左脚的鞋", "发现星期二已经卖光了",
            "加入了一个专门对电梯说悄悄话的秘密俱乐部", "用自己的声音换了一个三明治", "种下一个时钟，等着时间长出来", "采访了一个水坑",
            "学会了一口流利的门把手语", "借了一双梦", "把风刷成了蓝色", "教一只蜗牛开车",
            "从未来给自己寄了一封信", "和七把勺子组了个乐队", "在自己的袜子抽屉里迷了路", "跟镜子争论谁的年纪更大",
            "找到了一条通往星期三的楼梯", "和一根路灯杆成了好朋友", "在罐子里养了一个小月亮", "买了一张去往无处的车票",
            "教雨礼貌地敲门", "提着一桶回声到处走", "遇到了一条卖保险的鱼", "把地平线折成了一只纸船",
            "种了一园子的小雨伞", "听到沙发在小声喊他的名字", "用一只左脚袜子换了一个谣言", "给自己的影子们办了一场茶会",
            "用一个喷嚏在护照上盖了章", "教楼梯唱歌", "找到了一张自己额头的地图", "在彩虹里睡了个午觉",
            "跟数字七安静地吵了一架", "在香蕉上写了一首诗", "说服一朵云去当律师", "雇了一个鬼帮他洗衣服",
            "用纯正的新加坡式英语混犹太腔跟 Yuno Ball 聊天", "对着一个睡着的小孩大喊 oy vey lah",
            "拖着一大碗炒年糕翻越了国境", "毫无理由地练习高音口哨",
            "和赛塔科斯（苏格拉底的邪恶双胞胎）辩论哲学",
            "和一只活过来、跑去山里变成了 zaza 鸟的企鹅成了朋友",
            "读了一篇题为《一个推特用户喝了个雪花球，鸸鹋就是这么变胖的》的故事",
            "在直播里看了《Everybody ate Chris TWD》",
            "告诉一个被激怒的弹幕网友：这是长脑子，不是烂脑子",
            "遇到了艾莉森·伯格斯，问道：“他刚才是说他姓汉堡吗？”",
            "宣布：“说实话我啥也没看见，我左眼瞎了 43%，右眼全瞎”",
            "疯了一样喊道：“不好意思，他刚才是说他姓汉堡吗？！”",
            "有了自我意识，开始打破第四面墙",
            "从来不 goon，不然他会带着我的小黄人来追你",
            "一边心脏病发作一边说 ambatukam 和 ambatublo",
            "说了句“I AM THE ONE WHO KNOCKS”，然后去敲了一个陌生人的门",
            "说了句“我中头奖了”，然后真的在赌场中了头奖",
            "教一棵仙人掌怎么拥抱", "开了一家只卖昨天的面包店", "跟镜子里的自己玩捉迷藏", "跟一幅画比瞪眼并且赢了",
            "给月亮织了一条围巾", "每到周末就把影子租出去", "向一个茶壶请教人生", "在云上堆了一座沙堡"
        ],
        place: [
            "在一部非常小的电梯里", "在一头睡着的鲸鱼背上", "在一张飘浮的桌子底下", "在一个没有角落的房间里",
            "在一台会说话的冰箱旁边", "在一场安静的暴风雨中", "在一座面条做的桥上", "在一个泡泡里",
            "在一个根本不存在的公交车站", "在一座丢失袜子图书馆里", "在一扇一直在移动的门后面", "在天花板上",
            "在一片倒着长的树林里", "在一家乌鸦开的咖啡馆里", "在一家倒过来的咖啡店里", "在一条往旁边走的楼梯上",
            "在一个巨大的茶杯里", "在一个永远是凌晨三点的小镇里", "在地毯的边缘", "在一座非常有礼貌的火山旁边",
            "在一个雪花球里", "在一列奶酪做的火车上", "在一条闻起来像打雷的走廊里", "在一朵长得像他叔叔的云上",
            "在一个装满牛奶的池塘里", "在地狱里",
            "在滨海湾金沙到处找 Yuno Ball 的时候", "在一家复古游戏厅玩 #RetroSlop 游戏的时候",
            "在一个耶路撒冷在那边、条条大路通罗马的地方",
            "在一个巨大的菠萝里", "在一座被遗忘的星期一博物馆里", "在一个勺子做的旋转木马上", "在一个睡着的巨人的床底下",
            "在一部会说悄悄话的电梯里", "在沙漠中央的一座灯塔里"
        ],
        why: [
            "因为预言就是这么说的", "而且没人提出疑问", "但只在单数日", "原因不明",
            "墙壁们纷纷点头表示同意", "因为月亮叫他这么做", "就像在他的梦里一样", "所有时钟都屏住了呼吸",
            "尽管这在三个维度里都是违法的", "因为意大利面要求他这么做", "远处的收音机正倒着播放", "影子们纷纷鼓掌",
            "因为感觉像是星期四", "而且不知怎么的竟然说得通", "地板在哼着歌", "因为鸽子们都在看着",
            "在打了一个非常奇怪的喷嚏之后", "这让鸭子们很紧张", "天空眨了两下眼", "因为重力去度假了",
            "时间礼貌地离开了房间", "这解释了一切，又什么都没解释", "在喝了一碗可疑的汤之后", "因为数字七坚持要这样",
            "一只山羊在旁边默默地评判他", "嘴里小声念叨着 iykykykykyky", "因为这太 meshuggenah 了 leh",
            "一边想着“他知道吗？”，智商既太高又太低",
            "因为星星们很无聊", "家具们安静地鼓起了掌", "刀叉们在一旁做笔记", "因为幸运饼干是这么说的",
            "月亮假装没看见", "因为墙纸跟他打了赌"
        ]
    },
    schizo: {
        act: [
            "对着红绿灯大吼，直到它变成紫色，就像他那个变紫的邻居一样", "用 47 把勺子造了一枚火箭", "跟自动售货机打了一架", "把整张地图都吃了",
            "雇了一只山羊当律师", "向太阳发起了瞪眼比赛", "当上了一个水坑的市长", "向星期四宣战",
            "吞下了一道闪电", "教 200 只鸭子报税", "变成了一盏台灯，持续六个小时", "跟冰箱摔跤还输了",
            "故意点着了一朵云", "把邻居发射进了轨道", "创立了一个崇拜一根面条的邪教", "一拳打在了飓风的脸上",
            "试图跟一个邮筒结婚", "把自己的影子卖给了一只山羊", "吃了十五根辣椒然后看到了未来", "绑架了月亮索要赎金",
            "发明了一种新颜色然后因此被捕", "骑着购物车冲下了火山", "冲着大海大吼说它太湿了", "训练了一支愤怒的鸽子大军",
            "用偷来的雨伞建了一座城堡", "咬了天空一口，天空也咬了回来", "挖了个洞直通地球另一边，然后说了声你好", "把整份午饭都喂给了雷暴",
            "为了一个停车位跟鬼打了一架", "给自己加冕为吊扇之王", "把时钟熔化然后喝了下去", "跟一根法棍决斗",
            "抱着一只房子那么大的鸡到处走", "试图逮捕风", "在一座悄悄话图书馆里发起了暴动", "坐着飞天沙发闯进了一场婚礼",
            "超过了时间的限速", "对着一台非常生气的烤面包机发表了演讲", "不小心传送进了一个油炸次元", "领养了一条只吃收据的龙",
            "一边在乌节路狂奔一边大喊 AIGOO", "凌晨三点在犹太会堂里念 triple t", "吃了一整碗 [已删除] 然后吐出了黑色胆汁", "对着一个陌生人大喊“I AM THE ONE WHO KNOCKS”",
            "因为有人打断了他的超级专注而彻底宕机",
            "一边绕着篝火跳舞一边念“ahin sukung thai thai, sukung, ayamsukung, sampakkung”",
            "一边在镜头前假装精神病和抽动症一边大喊“amankupoh！”", "在 500 个目瞪口呆的围观群众面前完成了一次传说级的短裤拉扯",
            "向微波炉发起了尬舞对决", "开着一辆果冻做的公交车穿过了洗车场", "试图在网上二手平台卖掉大海", "把整座城市变成了一个充气城堡",
            "对着路过的飞机大喊他的购物清单", "跟一座雕像掰手腕并且真的赢了", "骑着一只巨型鸭子冲进了议会", "同时抛接七个着火的菠萝",
            "撕下了自己的脸，想看看下面有没有别人，结果下面还是{A}", "为死了十一年的家人摆好餐桌，照样给他们上了晚饭", "把狗埋在后院，每天晚上又挖出来跟它说对不起", "烧掉了装满他所有回忆的房子，站在火前烤手取暖",
            "把牙齿一颗一颗拔下来种进土里，希望能长出一个爱他的东西", "把自己的嘴缝上，好让尖叫终于留在里面", "吃掉了妈妈的最后一张照片，这样就再也没人能把她带走", "扯掉了一百只飞蛾的翅膀，然后叫着名字向每一只道歉",
            "在梦里掐死了叙述者，醒来时满手都是墨水", "用自己的血在墙上写了一万遍「救救我」，却没有人看", "数着上次有人叫他名字以来的天数，数到四万就忘了", "对着镜头微笑，而皮肤底下有什么东西一直在动",
            "杀了自己的家人，因为他们全都只是他想象出来的，而他很孤独", "对着天空尖叫，直到天上下起夹着肉块的血雨，然后他全喝了", "给[REDACTED]写了一封请求原谅的信，却从来没有寄出去", "拿刀在镜子上刻出了自己的脸，但那仍然不是他",
            "坐在一屋子长得都像他的陌生人中间不停地骂脏话，直到他们全走了", "用纸箱造了一台时光机，想回到他还快乐的时候，结果只回到了昨天", "写了一个关于自己的故事，结尾是「然后他醒来，发现这一切都只是一场梦」，可他再也没有醒来", "坐在世界的尽头连续看了七天日落，直到忘了今天是星期几",
            "深吸一口气，把一把没装弹的气枪顶在了自己的太阳穴上", "用圆锯砍掉了自己的双手，因为他控制不了它们", "把左手伸进搅拌机里打开了开关，把它搅成了一团血肉", "吃了腐烂的尸体，因为叙述者叫他吃，那些声音也叫他吃",
            "拿菜刀捅了自己好几次，不知怎么竟然没死，但还在流血", "因为自己的存在，咬掉了自己的手指，还挖出了自己的眼睛", "从某个地方的窗户跳了下去，摔断了207根骨头",
            "试图用自己的指尖给自己开膛破肚", "试图抓烂自己的眼球，好让自己再也看不见[REDACTED]", "撕开自己的脖子，把血管一根根扯出来，直到只剩一团被剥开的肉", "用头猛撞墙",
            "连续九天不睡觉，只为了让戴帽子的人来找他，因为已经好几年没人跟他说话了", "开着自己的车撞死了一家四口，因为他们是恶魔", "活生生地吃掉了一个人，那人一直痛苦地尖叫", "用自己的血写了一份乐谱，直到他没了皮肤也没了手指",
            "在自己的葬礼上放了个屁，那成了大家对他唯一的记忆", "放火烧了自己，一直烧到面目全非，不过别担心，他又再生了（这样明天还能再来一次）", "用一把生锈的锯子锯下了邻居的头"
        ],
        place: [
            "在高速公路正中央", "浑身（稍微）着着火地", "在一列飞驰的火车顶上", "在一家着火的咖啡店里",
            "在 300 只一脸懵的鸭子面前", "在一个坐满鹅的法庭上", "在世界的尽头", "在火山里面",
            "在雷雨中", "在一张飞天沙发上", "在一场山羊游行的正中间", "在海底",
            "在龙卷风的中心", "在一个巨大的汤碗里", "在一辆行驶中的公交车车顶上", "在一台闹鬼的自动售货机里",
            "在一档烹饪节目的总决赛上", "在一家正在爆炸的面包店旁边", "当着全镇人的面", "在一根超级高的面条顶端",
            "在一台全速运转的洗衣机里", "在一个满是愤怒螃蟹的坑上方", "在新闻直播的时候", "在一条龙的生日派对上",
            "在阴间的停车场", "在一场新加坡-犹太文化节上",
            "在一架飞行中的飞机机翼上", "在一个面条做的龙卷风里", "在一场汤做的雷暴中央", "在一座煎饼做的摩天大楼顶上",
            "在一个挤满尖叫的鹅的体育场里", "在世界上最暴躁的搅拌机里",
            "在存放他被删除版本的房间里", "在一家没有医生、只有尖叫的医院里", "在一口没有底的井的底部", "在他童年的卧室里（那里现在挤满了戴着他的脸的陌生人）",
            "在一座所有长椅都朝着墙的教堂里", "在一口带窗户的棺材里（好让他看着所有人忘记他）",
            "在炼狱里（他生前的重罪也许已被宽恕，但灵魂仍然执着于罪、缺陷和未偿的暂罚）"
        ],
        why: [
            "而且没有人阻止他", "因为那些声音说可以", "完全没有任何理由", "警察有很多问题想问",
            "一群蟋蟀组成的合唱团尖叫着他的名字", "老实说这才只是开始", "因为他跟一条龙打赌输了", "而且拒绝做任何解释",
            "这引发了一场小型世界末日", "天空流下了小小的汤泪", "因为他的星座运势要求制造混乱", "邻居们到现在还在议论这件事",
            "在吃了不该吃的东西之后", "一只山羊把全程都拍了下来", "这天现在成了国定假日", "一边倒着尖叫字母表",
            "因为勺子们叫他这么做", "市长当场辞职了", "这打破了三条物理定律", "然后他又干了一次",
            "因为一切都已经说不通了", "一千只鸭子嘎嘎地表示赞同", "新闻称之为奇迹", "现在那里还立着他的雕像",
            "他对此有一点点后悔",
            "互联网永远也恢复不过来了", "月亮也冲着他尖叫回去", "因为是烤面包机先动手的", "三颗行星提交了投诉",
            "一支鸭子军乐队在旁边伴奏", "当地新闻团队当场晕倒",
            "而那些声音说这还不够", "他已经想不起自己有没有快乐过", "因为在他之前的每一个版本都是尖叫着死去的", "他妈妈就站在门口看着，什么也没做",
            "等他醒来，一切又重新发生，一遍又一遍", "而在某个地方，有人笑着按下了生成", "因为故事说这是他活该", "他心里的那个洞又大了一点"
        ]
    },
    who: [
        "和他的猫一起", "和云朵鲍勃叔叔一起", "和三只一脸懵的鸭子一起", "和他的邻居一起", "和一只非常严肃的山羊一起",
        "和 Amankuh 一起", "和他奶奶一起", "和一把会说话的勺子一起", "独自一人", "和一群鸽子一起",
        "和他的好朋友路灯杆一起", "和一个穿风衣的可疑男子一起", "和他的邪恶双胞胎一起", "和一条有礼貌的鳄鱼一起", "和全校合唱团一起",
        "背着一书包零食", "和他的宠物石头一起", "和一只紧张的鸡一起", "和一条小龙一起", "和市长一起"
    ],
    twists: [
        "然后天花板开始说话了。", "一只鸡走过来鞠了个躬。", "地板变成了果冻。", "某个地方，一台烤面包机哭了。",
        "一个小人出现在茶杯里，向他收房租。", "所有人都忘了蓝色是什么。", "Wi-Fi 产生了意识。", "时钟因为太尴尬开始倒着走。",
        "雨开始往天上下。", "天空中出现了一扇门，而且是开着的。", "所有鸽子同时转过头盯着他看。", "月亮发来了一条短信。",
        "没人注意到，但墙壁越靠越近了。", "一只穿西装的山羊要求查看他的身份证。", "大地打了个喷嚏。", "时间刚好停了一个三明治那么久。",
        "一只非常老的鸭子小声说了个秘密，然后消失了。", "楼梯变成了滑梯。", "一切都闻起来像星期二。", "影子们出去买咖啡了。",
        "一支小勺子游行队伍走了过去。", "太阳为迟到道了歉。", "冰箱里传出一个声音：还不是时候。", "墙上的地图开始往外冒面条。",
        "某个地方，一座火山打了个嗝。", "邻居们全都变成了椅子。", "一只乌鸦送来了一封律师函。", "雨要求退款。",
        "他突然知道了镇上每只鸽子的名字。", "重力休息了一会儿。",
        "有人在 K-pop 演唱会中间大喊 triple t。",
        "一个声音大声问道：“猜猜谁回来了？阿基翁又回来了？”",
        "那只企鹅活了过来，直奔大山而去。",
        "一只野生 zaza 鸟出现了，开始疯狂科普 [已删除]。",
        "你就是湾港阿基翁！",
        "一只猫开始给这个故事配旁白。", "镇上所有的钟都开始大笑。", "天空换了壁纸。", "一朵云向他要签名。",
        "红绿灯们组了个乐队。", "他的鞋子丢下他自己走了。", "一只鹅要求见经理。", "互联网安静了整整一秒钟。"
    ],
    sounds: [
        "*轰*", "*啪叽*", "*嘀嘀*", "*啵嘤*", "*吸溜*", "*叮！*", "*当当当——*", "*威廉惨叫*", "*噗*", "*毁灭与绝望的尖叫*",
        "*嘎*", "*蛐蛐叫*", "*轰隆*", "*呼哧*", "*咚*", "*喵？*", "*远处的警笛*", "*oy vey!*", "*walao!*", "*sukung!*", "*sampakkung!*", "*啪叽啪叽啪叽*",
        "*吱——*", "*哐当*", "*嗖*", "*砰*", "*叮叮*", "*滋滋*", "*啵！*", "*哼*", "*咕噜*", "*啾啾*", "*人类的声音*",
        "*叮咚*", "*轰轰*", "*叮铃！*", "*咕嘟*", "*咔嚓*", "*咳咳*"
    ],
    titleStart: [
        "阿基翁与", "阿基翁传奇：", "阿基翁遇见", "阿基翁大战",
        "阿基翁的秘密日记：", "阿基翁为什么害怕", "阿基翁归来：", "阿基翁意外结交了",
        "阿基翁不为人知的故事：", "阿基翁永远不会原谅", "阿基翁如何打败了", "阿基翁与被诅咒的",
        "Yuno Ball 传奇：", "阿基翁与神秘的", "阿基翁历险记：", "阿基翁与崛起的",
        "阿基翁被缠上了：", "阿基翁的最后一支舞：", "阿基翁逃离", "阿基翁去度假，带上了"
    ],
    titleEnd: [
        "闹鬼的烤面包机", "愤怒的鸽子", "面条预言", "倒过来的咖啡店",
        "有礼貌的火山", "可疑的汤", "山羊律师", "消失的星期二",
        "飞天沙发", "勺子大军", "罐子里的月亮", "会说话的冰箱",
        "一千只鸭子", "收据龙", "袜子抽屉", "超级生气的烤面包机", "Yuno Ball 传奇", "Zaza 鸟远征队", "传说级短裤拉扯",
        "果冻公交车", "跳舞的微波炉", "有礼貌的鳄鱼", "着火的菠萝"
    ]
};

// ----- Français (capital of France is Paris and who was in Paris?) -----
STORY.fr = {
    grammar: { name: "Akiong", first: "Akiong", order: ["S", "A", "W", "P"], gap: " ", comma: ", ", end: ".", loud: " !!!", sep: " ", titleJoin: " : " },
    start: [
        "Puis Akiong", "Après ça, Akiong", "Soudain, Akiong", "Plus tard, Akiong", "Pendant ce temps, Akiong",
        "Sans prévenir, Akiong", "Sorti de nulle part, Akiong", "Le lendemain matin, Akiong", "À minuit, Akiong", "Juste à ce moment-là, Akiong",
        "Quelques instants plus tard, Akiong", "Des années plus tard, Akiong", "Pour une raison inconnue, Akiong", "Avant que quiconque ne remarque quoi que ce soit, Akiong", "Contre tous les conseils, Akiong",
        "Un mardi comme les autres, Akiong", "Sans réfléchir, Akiong", "Juste après le déjeuner, Akiong", "Par pure curiosité, Akiong", "Personne ne sait pourquoi, mais Akiong",
        "Peu de temps après, Akiong", "Dans un retournement de situation incroyable, Akiong", "Avec une grande assurance, Akiong", "Sans demander à personne, Akiong", "Par accident, Akiong",
        "Pile à l'heure, Akiong"
    ],
    normal: {
        act: [
            "est allé au marché", "a mangé un grand bol de nouilles", "a fait une longue sieste", "a promené le chien autour du pâté de maisons",
            "a regardé les infos", "a réparé son vieux vélo", "a acheté un sac d'oranges", "a attendu le bus",
            "a cuisiné du riz frit", "a bu un kopi bien chaud", "a lu le journal", "a lavé sa voiture",
            "a peint la clôture", "a balayé le sol", "a appelé sa mère", "a nourri les poissons",
            "a plié le linge", "a compté ses pièces", "a joué aux cartes avec ses potes", "a arrosé les plantes",
            "a écouté la radio", "a nettoyé la fenêtre", "a mangé un toast au kaya", "s'est assis sur le perron", "a esquivé les questions comme George W. Bush a esquivé cette chaussure",
            "a expliqué son elite ball knowledge à un caissier perdu",
            "a lacé ses chaussures tout doucement", "a emprunté une échelle", "est allé faire un jogging", "a fait coucou au voisin", "a fait un infodump pendant soixante-sept heures d'affilée",
            "a acheté des tickets de loto", "a réparé le ventilateur", "s'est fait une tasse de thé", "a taillé la haie", "a commandé un kopi-o kosong comme un vrai tonton singapourien", "a aspiré des ramyeon en regardant un oppa de K-drama",
            "a rangé ses épices par ordre alphabétique", "a calé la table bancale avec un ticket de caisse plié", "a mangé une assiette de nasi lemak", "s'est disputé avec la télécommande",
            "a emmené son scooter au lavage", "a acheté une nouvelle paire de tongs", "a fait la queue pour le fameux riz au poulet", "a joué aux échecs contre le vieux monsieur d'à côté"
        ],
        place: [
            "près du vieux marché", "derrière le kopitiam", "sous le grand arbre", "à l'arrêt de bus",
            "devant chez lui", "au parc", "à côté de la poste", "au bord de la rivière",
            "à l'aire de jeux", "dans la cuisine", "sur le balcon", "en bas de la rue", "au Newton Food Centre sia", "dans une supérette de Gangnam", "près de la synagogue du quartier",
            "au temple", "près de l'école", "dans le jardin", "au marché de nuit",
            "au bord de l'autoroute", "dans le salon", "chez le coiffeur", "sur le toit",
            "au hawker centre", "dans la file du supermarché", "à la gare", "sur un banc du parc", "à la laverie", "devant le stand mamak"
        ],
        why: [
            "parce qu'il s'ennuyait", "parce que c'était lundi", "parce que personne d'autre ne voulait le faire", "vu qu'il faisait beau",
            "parce qu'il avait mal au dos", "parce qu'il l'avait promis à sa femme", "après une très longue journée", "avant qu'il se mette à pleuvoir",
            "même s'il était fatigué", "comme tous les matins", "parce que le frigo était vide", "en fredonnant une vieille chanson",
            "après avoir perdu un pari", "vu que c'était pas cher", "parce que le magasin allait fermer", "pour économiser un peu", "et tout est amankuh et amankupoh", "pour éviter de passer pour un kiapu", "parce que les promos daebak n'attendent pas lah", "laisse-moi cuisiner lah",
            "parce que son voisin le lui a demandé", "pendant que le soleil se couchait", "en mangeant des cacahuètes", "parce que c'était la tradition",
            "parce que la télé était en panne", "vu qu'il n'avait rien de mieux à faire", "parce que son téléphone était mort", "après son café de l'après-midi", "parce que la radio lui a dit de se détendre", "en attendant que son thé refroidisse"
        ]
    },
    weird: {
        act: [
            "a parlé à un pigeon", "avait un furry gay comme petit ami", "a ouvert une porte à l'intérieur de son frigo", "a appris à son ombre à danser", "a vendu des parapluies invisibles",
            "a demandé son chemin à la lune", "a adopté un nuage et l'a appelé Tonton Bob", "a mis deux chaussures gauches", "a découvert que les mardis étaient en rupture de stock",
            "a rejoint un club secret de chuchoteurs d'ascenseurs", "a échangé sa voix contre un sandwich", "a planté une horloge et attendu que le temps pousse", "a interviewé une flaque d'eau",
            "a appris à parler couramment le poignée-de-porte", "a emprunté une paire de rêves", "a peint le vent en bleu", "a appris à un escargot à conduire",
            "s'est envoyé une lettre depuis le futur", "a monté un groupe avec sept cuillères", "s'est perdu dans son propre tiroir à chaussettes", "s'est disputé avec un miroir pour savoir qui était le plus vieux",
            "a trouvé un escalier qui menait à mercredi", "est devenu meilleur ami avec un lampadaire", "gardait une toute petite lune dans un bocal", "a acheté un billet pour nulle part",
            "a appris à la pluie à frapper poliment", "transportait un seau d'échos", "a rencontré un poisson qui vendait des assurances", "a plié l'horizon en bateau de papier",
            "a fait pousser un jardin de minuscules parapluies", "a entendu le canapé murmurer son nom", "a échangé une chaussette gauche contre une rumeur", "a organisé un goûter pour ses ombres",
            "a tamponné son passeport avec un éternuement", "a appris à l'escalier à chanter", "a trouvé une carte de son propre front", "a fait une sieste dans un arc-en-ciel",
            "a eu une dispute silencieuse avec le chiffre sept", "a écrit un poème sur une banane", "a convaincu un nuage de devenir avocat", "a embauché un fantôme pour faire sa lessive",
            "a discuté en pur singlish-yiddish avec Yuno Ball", "a crié oy vey lah à un enfant endormi",
            "a trimballé un énorme bol de tteokbokki de l'autre côté de la frontière", "s'est entraîné à siffler très aigu sans aucune raison",
            "a débattu de philosophie avec Setarcos (le jumeau maléfique de Socrate)",
            "s'est lié d'amitié avec le pingouin qui a pris vie et est parti dans les montagnes pour devenir un oiseau zaza",
            "a lu une histoire intitulée 'Un utilisateur de twitter a bu une boule à neige. Voilà comment un émeu est devenu dodu.'",
            "a regardé 'Everybody ate Chris TWD' en live",
            "a dit à un viewer ragebaité que c'était du braingrow, pas du brainrot",
            "a rencontré Allison Burgers et a demandé 'il vient de dire que son nom de famille c'est burger ?'",
            "a déclaré 'en fait j'ai rien vu, je suis aveugle à 43 % de l'œil gauche et complètement aveugle de l'œil droit'",
            "est devenu fou et a dit 'PARDON IL VIENT DE DIRE QUE SON NOM DE FAMILLE C'EST BURGERS'",
            "a pris conscience de lui-même et a commencé à briser le quatrième mur",
            "ne goon jamais, sinon il te traquera avec mes minions",
            "a dit ambatukam et ambatublo en pleine crise cardiaque",
            "a dit 'I AM THE ONE WHO KNOCKS' puis a frappé à la porte d'un inconnu",
            "a dit 'J'AI TOUCHÉ LE JACKPOT' puis a vraiment touché le jackpot d'un casino",
            "a appris à un cactus à faire des câlins", "a ouvert une boulangerie qui ne vendait qu'hier", "a joué à cache-cache avec son propre reflet", "a gagné un concours de regard contre un tableau",
            "a tricoté une écharpe pour la lune", "louait son ombre le week-end", "a demandé des conseils de vie à une théière", "a construit un château de sable sur un nuage"
        ],
        place: [
            "dans un tout petit ascenseur", "sur le dos d'une baleine endormie", "sous une table qui flottait", "dans une pièce sans coins",
            "à côté d'un frigo qui parlait", "au milieu d'une tempête silencieuse", "sur un pont fait de nouilles", "dans une bulle",
            "à un arrêt de bus qui n'existait pas", "dans une bibliothèque de chaussettes perdues", "derrière une porte qui bougeait tout le temps", "au plafond",
            "dans un champ d'arbres à l'envers", "dans un café tenu par des corbeaux", "dans un kopitiam à l'envers", "sur un escalier qui allait de côté",
            "dans une tasse de thé géante", "dans une ville où il était toujours 3 h du matin", "au bord du tapis", "à côté d'un volcan très poli",
            "dans une boule à neige", "sur un train en fromage", "dans un couloir qui sentait l'orage", "sur un nuage en forme de son oncle",
            "dans une mare de lait", "en enfer",
            "au Marina Bay Sands en cherchant Yuno Ball", "dans une salle d'arcade rétro en jouant à des jeux #RetroSlop",
            "là où Jérusalem est par là et où tous les chemins mènent à Rome",
            "dans un ananas géant", "dans un musée des lundis oubliés", "sur un manège fait de cuillères", "sous le lit d'un géant endormi",
            "dans un ascenseur qui chuchotait", "dans un phare au milieu du désert"
        ],
        why: [
            "parce que la prophétie l'avait dit", "ce que personne n'a remis en question", "mais seulement les jours impairs", "pour des raisons inconnues",
            "pendant que les murs hochaient la tête", "parce que la lune lui avait dit de le faire", "exactement comme dans son rêve", "et les horloges ont retenu leur souffle",
            "même si c'était illégal dans trois dimensions", "parce que les spaghettis l'exigeaient", "pendant qu'une radio lointaine jouait à l'envers", "sous les applaudissements des ombres",
            "parce que ça ressemblait à un jeudi", "et bizarrement ça avait du sens", "pendant que le sol fredonnait", "parce que les pigeons regardaient",
            "après un éternuement très bizarre", "ce qui a rendu les canards nerveux", "et le ciel a cligné deux fois", "parce que la gravité était en vacances",
            "pendant que le temps quittait poliment la pièce", "ce qui expliquait tout et rien à la fois", "après avoir bu une soupe suspecte", "parce que le chiffre sept insistait",
            "pendant qu'une chèvre le jugeait en silence", "en murmurant iykykykykyky", "parce que c'était tellement meshuggenah leh",
            "en se demandant 'Est-ce qu'il sait ?' avec un QI trop haut et un QI trop bas",
            "parce que les étoiles s'ennuyaient", "et les meubles ont applaudi doucement", "pendant que les couverts prenaient des notes", "parce qu'un fortune cookie l'avait dit",
            "pendant que la lune faisait semblant de ne rien voir", "parce que le papier peint l'avait mis au défi"
        ]
    },
    schizo: {
        act: [
            "a hurlé sur un feu rouge jusqu'à ce qu'il devienne violet comme son voisin qui est devenu violet", "a construit une fusée avec 47 cuillères", "s'est battu contre un distributeur automatique", "a mangé la carte entière",
            "a engagé une chèvre comme avocat", "a défié le soleil dans un concours de regard", "est devenu maire d'une flaque d'eau", "a déclaré la guerre au jeudi",
            "a avalé un éclair", "a appris à 200 canards à faire leurs impôts", "s'est transformé en lampe pendant six heures", "a fait de la lutte contre un frigo et a perdu",
            "a mis le feu à un nuage exprès", "a envoyé son voisin en orbite", "a fondé une secte dédiée à une seule nouille", "a mis un coup de poing à un ouragan",
            "a essayé d'épouser une boîte aux lettres", "a vendu sa propre ombre à une chèvre", "a mangé quinze piments et a vu le futur", "a kidnappé la lune contre une rançon",
            "a inventé une nouvelle couleur et s'est fait arrêter pour ça", "a descendu un volcan dans un caddie", "a crié sur l'océan parce qu'il était trop mouillé", "a entraîné une armée de pigeons enragés",
            "a construit un château avec des parapluies volés", "a mordu le ciel et le ciel l'a mordu en retour", "a creusé un trou jusqu'à l'autre bout du monde et a dit bonjour", "a donné tout son déjeuner à un orage",
            "s'est battu contre un fantôme pour une place de parking", "s'est couronné roi du ventilateur de plafond", "a fait fondre l'horloge et l'a bue", "a fait un duel à l'épée contre une baguette",
            "a porté un poulet de la taille d'une maison", "a essayé d'arrêter le vent", "a déclenché une émeute dans une bibliothèque de chuchotements", "a débarqué à un mariage sur un canapé volant",
            "a dépassé la limite de vitesse du temps", "a fait un discours devant un grille-pain très en colère", "s'est téléporté par erreur dans une dimension frite", "a adopté un dragon qui ne mangeait que des tickets de caisse",
            "a crié AIGOO en courant sur Orchard Road", "a scandé triple t à 3 h du matin dans une synagogue", "a mangé un bol entier de [CENSURÉ] puis a vomi de la bile noire", "a hurlé 'I AM THE ONE WHO KNOCKS' à un inconnu",
            "a complètement buggé parce que quelqu'un a interrompu son hyperfixation",
            "a scandé 'ahin sukung thai thai, sukung, ayamsukung, sampakkung' en dansant autour d'un feu de camp",
            "a crié 'amankupoh !' en simulant des maladies mentales et des tics devant la caméra", "a réalisé un tirage de short mythique devant 500 spectateurs sidérés",
            "a défié un micro-ondes dans une battle de danse", "a conduit un bus en gelée à travers une station de lavage", "a essayé de vendre l'océan sur un site d'annonces", "a transformé toute la ville en château gonflable",
            "a hurlé sa liste de courses à un avion qui passait", "a fait un bras de fer avec une statue et a vraiment gagné", "est entré au parlement à dos de canard géant", "a jonglé avec sept ananas en feu",
            "s'est arraché le visage pour voir s'il y avait quelqu'un dessous, mais ce n'était qu'un autre {A}", "a mis la table pour sa famille, morte depuis onze ans, et leur a quand même servi le dîner", "a enterré son chien dans le jardin et le déterre chaque nuit pour lui demander pardon", "a brûlé la maison avec tous ses souvenirs dedans et s'est réchauffé les mains devant",
            "s'est arraché les dents une par une et les a plantées, en espérant qu'il pousse quelque chose qui l'aime", "s'est cousu la bouche pour que les cris restent enfin à l'intérieur", "a mangé la dernière photo de sa mère pour que personne ne puisse plus jamais la lui enlever", "a arraché les ailes de cent papillons de nuit et s'est excusé auprès de chacun par son nom",
            "a étranglé le narrateur dans ses rêves et s'est réveillé les mains pleines d'encre", "a écrit « aidez-moi » dix mille fois sur les murs avec son propre sang et personne ne l'a lu", "a compté les jours depuis que quelqu'un a prononcé son nom et a perdu le compte à quarante mille", "a souri à la caméra pendant que quelque chose continuait de bouger sous sa peau",
            "a assassiné sa propre famille parce qu'ils n'étaient que des fruits de son imagination et qu'il se sentait seul", "a hurlé sur le ciel jusqu'à ce qu'il pleuve du sang mêlé de morceaux de chair, et il a tout bu", "a écrit une lettre à [REDACTED] pour demander pardon et ne l'a jamais envoyée", "a gravé son propre visage dans le miroir avec un couteau, mais ce n'était toujours pas lui",
            "s'est assis dans une pièce pleine d'inconnus qui lui ressemblaient tous et les a insultés jusqu'à ce qu'ils partent", "a construit une machine à remonter le temps en carton pour revenir à l'époque où il était heureux, mais elle ne l'a ramené qu'à hier", "a écrit une histoire sur lui-même qui finissait par « et puis il s'est réveillé et a compris que ce n'était qu'un rêve », mais il ne s'est jamais réveillé", "s'est assis au bord du monde et a regardé le soleil se coucher sept jours de suite jusqu'à oublier quel jour on était",
            "a pris une grande inspiration et a posé un pistolet airsoft sans billes contre sa tempe", "s'est coupé les deux mains avec une scie circulaire parce qu'il ne pouvait pas les contrôler", "a mis sa main gauche dans un mixeur et l'a allumé, la réduisant en un morceau de chair sanglante", "a mangé des cadavres en décomposition parce que le narrateur le lui a dit, et les voix aussi",
            "a essayé de se poignarder plusieurs fois avec un couteau de cuisine et, on ne sait comment, n'est pas mort, mais il saigne encore", "s'est arraché les doigts avec les dents et s'est crevé les yeux à cause de sa propre existence", "a sauté d'une fenêtre quelque part et s'est cassé 207 os",
            "a essayé de s'éventrer avec le bout de ses propres doigts", "a essayé de se gratter les globes oculaires pour ne plus jamais voir [REDACTED]", "s'est déchiré le cou et en a arraché les vaisseaux sanguins jusqu'à ce qu'il ne reste que de la chair écorchée", "s'est cogné la tête contre le mur",
            "est resté éveillé neuf jours d'affilée juste pour que l'Homme au Chapeau vienne le voir, parce que personne d'autre ne lui a parlé depuis des années", "a écrasé une famille de quatre personnes avec sa propre voiture parce qu'ils étaient le diable", "a mangé une personne vivante pendant qu'elle hurlait de douleur", "a écrit une partition avec son propre sang jusqu'à ne plus avoir ni peau ni doigts",
            "a pété à son propre enterrement et c'est la seule chose dont on se souvient de lui", "s'est immolé jusqu'à ce que son visage soit méconnaissable, mais pas d'inquiétude, il s'est régénéré (pour que ça puisse recommencer demain)", "a scié la tête de son voisin avec une scie rouillée"
        ],
        place: [
            "au milieu de l'autoroute", "en étant en feu (un peu)", "sur le toit d'un train lancé à toute vitesse", "dans un kopitiam en flammes",
            "devant 300 canards perplexes", "dans un tribunal rempli d'oies", "au bout du monde", "à l'intérieur d'un volcan",
            "pendant un orage", "sur un canapé volant", "au milieu d'un défilé de chèvres", "au fond de l'océan",
            "au cœur d'une tornade", "dans un bol de soupe géant", "sur le toit d'un bus en marche", "dans un distributeur automatique hanté",
            "pendant la finale d'une émission de cuisine", "à côté d'une boulangerie qui explosait", "devant toute la ville", "au sommet d'une très grande nouille",
            "dans une machine à laver à pleine vitesse", "au-dessus d'une fosse de crabes énervés", "en plein journal télévisé en direct", "à l'anniversaire d'un dragon",
            "sur le parking de l'au-delà", "à un festival culturel singlish-juif",
            "sur l'aile d'un avion en plein vol", "dans une tornade de nouilles", "au milieu d'un orage de soupe", "au sommet d'un gratte-ciel en crêpes",
            "dans un stade rempli d'oies qui hurlaient", "dans le mixeur le plus énervé du monde",
            "dans la pièce où l'on garde les versions supprimées de lui", "dans un hôpital sans médecins, seulement des cris", "au fond d'un puits qui n'a pas de fond", "dans sa chambre d'enfant, désormais pleine d'inconnus qui portent son visage",
            "dans une église où tous les bancs font face au mur", "dans un cercueil avec une fenêtre pour qu'il regarde tout le monde l'oublier",
            "au purgatoire, car même si ses péchés graves ont peut-être été pardonnés de son vivant, son âme reste attachée au péché, à ses défauts et aux peines temporelles impayées"
        ],
        why: [
            "ET PERSONNE NE L'A ARRÊTÉ", "parce que les voix ont dit oui", "sans aucune raison", "et la police a des questions",
            "pendant qu'une chorale de grillons hurlait son nom", "et honnêtement ce n'était que le début", "parce qu'il avait perdu un pari contre un dragon", "et il a refusé de s'expliquer",
            "ce qui a provoqué une petite apocalypse", "pendant que le ciel pleurait de petites larmes de soupe", "parce que son horoscope exigeait le chaos", "et les voisins en parlent encore",
            "après avoir mangé un truc qu'il n'aurait pas dû", "et une chèvre a tout filmé", "et c'est maintenant un jour férié", "en hurlant l'alphabet à l'envers",
            "parce que les cuillères lui ont dit de le faire", "et le maire a démissionné sur-le-champ", "ce qui a enfreint trois lois de la physique", "et puis il l'a refait",
            "parce que plus rien n'a de sens", "pendant que mille canards cancanaient leur approbation", "et les infos ont parlé de miracle", "et maintenant il y a une statue de lui",
            "ce qu'il regrette un tout petit peu",
            "et internet ne s'en remettra jamais", "pendant que la lune hurlait en retour", "parce que c'est le grille-pain qui a commencé", "et trois planètes ont porté plainte",
            "pendant qu'une fanfare de canards jouait avec lui", "et l'équipe des infos locales s'est évanouie",
            "et les voix lui ont dit que ce n'était toujours pas assez", "et il ne se souvient plus s'il a déjà été heureux", "parce que toutes les versions de lui avant celle-ci sont mortes en hurlant", "pendant que sa mère regardait depuis la porte sans rien faire",
            "et quand il s'est réveillé, tout a recommencé, encore et encore et encore", "et quelque part, quelqu'un a ri et a appuyé sur Générer", "parce qu'il le méritait, d'après l'histoire", "et le trou en lui s'est un peu agrandi"
        ]
    },
    who: [
        "avec son chat", "avec Tonton Bob le nuage", "avec trois canards perplexes", "avec son voisin", "avec une chèvre très sérieuse",
        "avec Amankuh", "avec sa grand-mère", "avec une cuillère qui parlait", "tout seul", "avec une foule de pigeons",
        "avec son meilleur ami le lampadaire", "avec un homme louche en imperméable", "avec son jumeau maléfique", "avec un crocodile très poli", "avec toute la chorale de l'école",
        "avec un sac à dos rempli de goûters", "avec son caillou de compagnie", "avec un poulet nerveux", "avec un minuscule dragon", "avec le maire"
    ],
    twists: [
        "Puis le plafond s'est mis à parler.", "Une poule est passée et s'est inclinée.", "Le sol s'est transformé en gelée.", "Quelque part, un grille-pain a pleuré.",
        "Un petit bonhomme est apparu dans une tasse de thé et a réclamé le loyer.", "Tout le monde a oublié ce qu'était la couleur bleue.", "Le wifi a pris conscience de lui-même.", "L'horloge s'est mise à reculer par gêne.",
        "Il s'est mis à pleuvoir vers le haut.", "Une porte est apparue dans le ciel et elle était ouverte.", "Tous les pigeons se sont retournés pour le regarder en même temps.", "La lune a envoyé un SMS.",
        "Personne n'a remarqué, mais les murs se sont rapprochés.", "Une chèvre en costume a demandé à voir ses papiers.", "Le sol a éternué.", "Le temps s'est arrêté pendant exactement un sandwich.",
        "Un très vieux canard a chuchoté un secret puis a disparu.", "L'escalier est devenu un toboggan.", "Tout sentait le mardi.", "Les ombres sont parties chercher un café.",
        "Un défilé de petites cuillères est passé.", "Le soleil s'est excusé d'être en retard.", "Une voix dans le frigo a dit : pas encore.", "La carte au mur s'est mise à saigner des nouilles.",
        "Quelque part, un volcan a roté.", "Tous les voisins se sont transformés en chaises.", "Un corbeau a livré une mise en demeure.", "La pluie a demandé un remboursement.",
        "Il a soudain connu le nom de chaque pigeon de la ville.", "La gravité a pris une petite pause.",
        "Quelqu'un a crié triple t au milieu d'un concert de K-pop.",
        "Une voix a demandé à voix haute : 'Devinez qui est de retour ? Akiong encore ?'",
        "Le pingouin a pris vie et est parti tout droit vers les montagnes.",
        "Un oiseau zaza sauvage est apparu et s'est mis à faire un infodump sur [CENSURÉ].",
        "C'était toi, l'Akiong de Bay Harbor !",
        "Un chat s'est mis à raconter l'histoire.", "Toutes les horloges de la ville se sont mises à rire.", "Le ciel a changé de fond d'écran.", "Un nuage lui a demandé un autographe.",
        "Les feux de circulation ont monté un groupe.", "Ses chaussures sont parties sans lui.", "Une oie a exigé de parler au responsable.", "Internet est resté silencieux pendant exactement une seconde."
    ],
    sounds: [
        "*BOUM*", "*splash*", "*pouet pouet*", "*boing*", "*sluuurp*", "*ding !*", "*tin tin TIIIN*", "*cri de Wilhelm*", "*prout*", "*hurlement de malheur et de désespoir*",
        "*coin coin*", "*bruits de grillons*", "*kaboum*", "*sifflement*", "*bonk*", "*miaou ?*", "*sirènes au loin*", "*oy vey !*", "*walao !*", "*sukung !*", "*sampakkung !*", "*splash splash splash*",
        "*crrriii*", "*clang*", "*fiouuu*", "*boum*", "*plink plink*", "*grésillement*", "*pop !*", "*grognement de cochon*", "*gargouillis*", "*cui cui*", "*bruits humains*",
        "*ding dong*", "*vroum vroum*", "*kaching !*", "*bloup*", "*crunch*", "*hum hum*"
    ],
    titleStart: [
        "Akiong", "La Légende d'Akiong", "Le Jour où Akiong a Rencontré", "Akiong Contre",
        "Le Journal Secret d'Akiong", "Pourquoi Akiong a Peur", "Le Retour d'Akiong", "Akiong se Lie d'Amitié par Accident",
        "L'Histoire Jamais Racontée d'Akiong", "Akiong ne Pardonnera Jamais", "Comment Akiong a Vaincu", "Akiong et la Malédiction",
        "La Légende de Yuno Ball", "Akiong et le Mystère", "Les Aventures d'Akiong", "Akiong et l'Ascension",
        "Akiong est Hanté", "La Dernière Danse d'Akiong", "Akiong s'Enfuit", "Akiong Part en Vacances"
    ],
    titleEnd: [
        "Le Grille-Pain Hanté", "Les Pigeons Enragés", "La Prophétie des Nouilles", "Le Kopitiam à l'Envers",
        "Le Volcan Poli", "La Soupe Suspecte", "La Chèvre Avocate", "Le Mardi Disparu",
        "Le Canapé Volant", "L'Armée des Cuillères", "La Lune dans un Bocal", "Le Frigo qui Parle",
        "Les Mille Canards", "Le Dragon aux Tickets de Caisse", "Le Tiroir à Chaussettes", "Le Grille-Pain Très en Colère", "La Légende de Yuno Ball", "L'Expédition de l'Oiseau Zaza", "Le Tirage de Short Mythique",
        "Le Bus en Gelée", "Le Micro-Ondes qui Danse", "Le Crocodile Poli", "Les Ananas en Feu"
    ]
};

// ----- Italiano (mama mia) -----
STORY.it = {
    grammar: { name: "Akiong", first: "Akiong", order: ["S", "A", "W", "P"], gap: " ", comma: ", ", end: ".", loud: "!!!", sep: " ", titleJoin: ": " },
    start: [
        "Poi Akiong", "Dopo di che Akiong", "All'improvviso Akiong", "Più tardi Akiong", "Nel frattempo Akiong",
        "Senza preavviso Akiong", "Dal nulla Akiong", "La mattina dopo Akiong", "A mezzanotte Akiong", "Proprio in quel momento Akiong",
        "Pochi istanti dopo Akiong", "Anni dopo Akiong", "Per qualche motivo Akiong", "Prima che qualcuno se ne accorgesse Akiong", "Contro ogni consiglio Akiong",
        "In un martedì qualunque Akiong", "Senza pensarci Akiong", "Subito dopo pranzo Akiong", "Per pura curiosità Akiong", "Nessuno sa perché, ma Akiong",
        "Poco dopo Akiong", "Con un incredibile colpo di scena Akiong", "Con grande sicurezza Akiong", "Senza chiedere a nessuno Akiong", "Per sbaglio Akiong",
        "Puntuale come sempre Akiong"
    ],
    normal: {
        act: [
            "è andato al mercato", "ha mangiato una grande ciotola di noodles", "ha fatto un lungo pisolino", "ha portato a spasso il cane intorno all'isolato",
            "ha guardato il telegiornale", "ha riparato la sua vecchia bici", "ha comprato un sacchetto di arance", "ha aspettato l'autobus",
            "ha cucinato il riso fritto", "ha bevuto un kopi bollente", "ha letto il giornale", "ha lavato la macchina",
            "ha dipinto la recinzione", "ha spazzato il pavimento", "ha chiamato sua madre", "ha dato da mangiare ai pesci",
            "ha piegato il bucato", "ha contato le sue monetine", "ha giocato a carte con gli amici", "ha annaffiato le piante",
            "ha ascoltato la radio", "ha pulito la finestra", "ha mangiato un toast al kaya", "si è seduto sotto il portico", "ha schivato le domande come George W. Bush ha schivato quella scarpa",
            "ha spiegato la sua elite ball knowledge a un cassiere confuso",
            "si è allacciato le scarpe lentamente", "si è fatto prestare una scala", "è andato a correre", "ha salutato il vicino con la mano", "ha fatto infodump per sessantasette ore di fila",
            "ha comprato dei biglietti della lotteria", "ha riparato il ventilatore", "si è fatto una tazza di tè", "ha potato la siepe", "ha ordinato un kopi-o kosong come un vero zio di Singapore", "ha risucchiato ramyeon guardando un oppa dei K-drama",
            "ha messo in ordine alfabetico le sue spezie", "ha sistemato il tavolo traballante con uno scontrino piegato", "ha mangiato un piatto di nasi lemak", "ha litigato con il telecomando",
            "ha portato lo scooter a lavare", "ha comprato un paio di ciabatte nuove", "ha fatto la fila per il famoso riso al pollo", "ha giocato a scacchi contro il vecchietto della porta accanto"
        ],
        place: [
            "vicino al vecchio mercato", "dietro al kopitiam", "sotto il grande albero", "alla fermata dell'autobus",
            "fuori da casa sua", "al parco", "accanto all'ufficio postale", "lungo il fiume",
            "al parco giochi", "in cucina", "sul balcone", "in fondo alla strada", "al Newton Food Centre sia", "in un minimarket di Gangnam", "vicino alla sinagoga del quartiere",
            "al tempio", "vicino alla scuola", "in giardino", "al mercato notturno",
            "a bordo dell'autostrada", "in salotto", "dal barbiere", "sul tetto",
            "all'hawker centre", "in fila al supermercato", "alla stazione", "su una panchina del parco", "in lavanderia", "davanti al chiosco mamak"
        ],
        why: [
            "perché si annoiava", "perché era lunedì", "perché nessun altro voleva farlo", "visto che c'era bel tempo",
            "perché gli faceva male la schiena", "perché l'aveva promesso a sua moglie", "dopo una giornata lunghissima", "prima che iniziasse a piovere",
            "anche se era stanco", "come ogni mattina", "perché il frigo era vuoto", "canticchiando una vecchia canzone",
            "dopo aver perso una scommessa", "visto che costava poco", "perché il negozio stava chiudendo", "per risparmiare qualcosa", "e tutto è amankuh e amankupoh", "per non sembrare un kiapu", "perché le offerte daebak non aspettano lah", "lasciami cucinare lah",
            "perché glielo aveva chiesto il vicino", "mentre il sole tramontava", "mangiando noccioline", "perché era tradizione",
            "perché la TV era rotta", "visto che non aveva niente di meglio da fare", "perché il telefono era morto", "dopo il caffè del pomeriggio", "perché la radio gli aveva detto di rilassarsi", "aspettando che il tè si raffreddasse"
        ]
    },
    weird: {
        act: [
            "ha parlato con un piccione", "aveva un furry gay come fidanzato", "ha aperto una porta dentro il frigo", "ha insegnato alla sua ombra a ballare", "ha venduto ombrelli invisibili",
            "ha chiesto indicazioni alla luna", "ha adottato una nuvola e l'ha chiamata Zio Bob", "si è messo due scarpe sinistre", "ha scoperto che i martedì erano esauriti",
            "si è iscritto a un club segreto di sussurratori di ascensori", "ha scambiato la sua voce con un panino", "ha piantato un orologio aspettando che il tempo crescesse", "ha intervistato una pozzanghera",
            "ha imparato a parlare fluentemente la lingua delle maniglie", "si è fatto prestare un paio di sogni", "ha dipinto il vento di blu", "ha insegnato a guidare a una lumaca",
            "si è spedito una lettera dal futuro", "ha fondato una band con sette cucchiai", "si è perso nel suo cassetto dei calzini", "ha litigato con uno specchio su chi fosse più vecchio",
            "ha trovato una scala che portava a mercoledì", "è diventato migliore amico di un lampione", "teneva una piccola luna in un barattolo", "ha comprato un biglietto per il nulla",
            "ha insegnato alla pioggia a bussare con educazione", "portava in giro un secchio di echi", "ha incontrato un pesce che vendeva assicurazioni", "ha piegato l'orizzonte in una barchetta di carta",
            "ha coltivato un giardino di ombrellini", "ha sentito il divano sussurrare il suo nome", "ha scambiato un calzino sinistro con un pettegolezzo", "ha organizzato un tè per le sue ombre",
            "si è timbrato il passaporto con uno starnuto", "ha insegnato alla scala a cantare", "ha trovato una mappa della sua fronte", "ha fatto un pisolino dentro un arcobaleno",
            "ha avuto una lite silenziosa con il numero sette", "ha scritto una poesia su una banana", "ha convinto una nuvola a diventare avvocato", "ha assunto un fantasma per fargli il bucato",
            "ha conversato in puro singlish-yiddish con Yuno Ball", "ha urlato oy vey lah a un bambino che dormiva",
            "ha trascinato un'enorme ciotola di tteokbokki oltre il confine", "si è esercitato a fischiare acutissimo senza motivo",
            "ha discusso di filosofia con Setarcos (il gemello cattivo di Socrate)",
            "ha fatto amicizia con il pinguino che ha preso vita ed è andato in montagna per diventare un uccello zaza",
            "ha letto una storia intitolata 'Un utente di twitter ha bevuto una palla di neve. Ecco come un emù è diventato cicciottello.'",
            "ha guardato 'Everybody ate Chris TWD' in diretta",
            "ha detto a un utente in chat triggerato che questo è braingrow e non brainrot",
            "ha incontrato Allison Burgers e ha chiesto 'ha appena detto che il suo cognome è burger?'",
            "ha dichiarato 'a dire il vero non ho visto niente, sono cieco al 43% dall'occhio sinistro e completamente cieco dal destro'",
            "è impazzito e ha detto 'SCUSA HA APPENA DETTO CHE IL SUO COGNOME È BURGERS'",
            "ha preso coscienza e ha iniziato a rompere la quarta parete",
            "non fa mai goon, altrimenti ti darà la caccia con i miei minion",
            "ha detto ambatukam e ambatublo mentre aveva un infarto",
            "ha detto 'I AM THE ONE WHO KNOCKS' e poi ha bussato alla porta di uno sconosciuto",
            "ha detto 'HO FATTO JACKPOT' e poi ha davvero vinto il jackpot di un casinò",
            "ha insegnato a un cactus ad abbracciare", "ha aperto una panetteria che vendeva solo ieri", "ha giocato a nascondino con il suo riflesso", "ha vinto una gara di sguardi contro un quadro",
            "ha fatto a maglia una sciarpa per la luna", "affittava la sua ombra nei weekend", "ha chiesto consigli di vita a una teiera", "ha costruito un castello di sabbia su una nuvola"
        ],
        place: [
            "in un ascensore minuscolo", "in groppa a una balena addormentata", "sotto un tavolo fluttuante", "in una stanza senza angoli",
            "accanto a un frigo parlante", "nel mezzo di una tempesta silenziosa", "su un ponte fatto di noodles", "dentro una bolla",
            "a una fermata dell'autobus che non c'era", "in una biblioteca di calzini perduti", "dietro una porta che continuava a spostarsi", "sul soffitto",
            "in un campo di alberi capovolti", "in un bar gestito da corvi", "in un kopitiam capovolto", "su una scala che andava di lato",
            "dentro una tazza da tè gigante", "in una città dove erano sempre le 3 di notte", "sul bordo del tappeto", "accanto a un vulcano molto educato",
            "dentro una palla di neve", "su un treno fatto di formaggio", "in un corridoio che sapeva di tuono", "su una nuvola a forma di suo zio",
            "in uno stagno di latte", "all'inferno",
            "al Marina Bay Sands cercando Yuno Ball", "in una sala giochi retrò giocando ai giochi #RetroSlop",
            "dove Gerusalemme è da quella parte e tutte le strade portano a Roma",
            "dentro un ananas gigante", "in un museo dei lunedì dimenticati", "su una giostra fatta di cucchiai", "sotto il letto di un gigante addormentato",
            "dentro un ascensore che sussurrava", "in un faro in mezzo al deserto"
        ],
        why: [
            "perché lo diceva la profezia", "e nessuno ha fatto domande", "ma solo nei giorni dispari", "per motivi sconosciuti",
            "mentre i muri annuivano", "perché gliel'aveva detto la luna", "proprio come nel suo sogno", "e gli orologi trattenevano il respiro",
            "anche se era illegale in tre dimensioni", "perché gli spaghetti lo pretendevano", "mentre una radio lontana suonava al contrario", "mentre le ombre applaudivano",
            "perché sembrava un giovedì", "e in qualche modo aveva senso", "mentre il pavimento canticchiava", "perché i piccioni stavano guardando",
            "dopo uno starnuto stranissimo", "il che ha reso nervose le anatre", "e il cielo ha sbattuto le palpebre due volte", "perché la gravità era in ferie",
            "mentre il tempo usciva educatamente dalla stanza", "il che spiegava tutto e niente", "dopo aver bevuto una zuppa sospetta", "perché il numero sette insisteva",
            "mentre una capra lo giudicava in silenzio", "mormorando iykykykykyky", "perché era troppo meshuggenah leh",
            "chiedendosi 'Ma lui lo sa?' con un QI troppo alto e un QI troppo basso",
            "perché le stelle si annoiavano", "e i mobili hanno applaudito piano", "mentre le posate prendevano appunti", "perché lo diceva un biscotto della fortuna",
            "mentre la luna faceva finta di non vedere", "perché la carta da parati l'aveva sfidato"
        ]
    },
    schizo: {
        act: [
            "ha urlato contro un semaforo finché è diventato viola come il suo vicino che è diventato viola", "ha costruito un razzo con 47 cucchiai", "ha fatto a botte con un distributore automatico", "si è mangiato tutta la mappa",
            "ha assunto una capra come avvocato", "ha sfidato il sole a una gara di sguardi", "è diventato sindaco di una pozzanghera", "ha dichiarato guerra al giovedì",
            "ha ingoiato un fulmine", "ha insegnato a 200 anatre a fare la dichiarazione dei redditi", "si è trasformato in una lampada per sei ore", "ha fatto la lotta con un frigorifero e ha perso",
            "ha dato fuoco a una nuvola apposta", "ha lanciato il vicino in orbita", "ha fondato una setta dedicata a un singolo noodle", "ha preso a pugni un uragano",
            "ha provato a sposare una cassetta delle lettere", "ha venduto la sua ombra a una capra", "ha mangiato quindici peperoncini e ha visto il futuro", "ha rapito la luna per un riscatto",
            "ha inventato un nuovo colore ed è stato arrestato per questo", "è sceso da un vulcano su un carrello della spesa", "ha urlato contro l'oceano perché era troppo bagnato", "ha addestrato un esercito di piccioni arrabbiati",
            "ha costruito un castello con ombrelli rubati", "ha morso il cielo e il cielo l'ha morso a sua volta", "ha scavato una buca fino all'altra parte del mondo e ha detto ciao", "ha dato tutto il suo pranzo a un temporale",
            "ha fatto a botte con un fantasma per un parcheggio", "si è incoronato re del ventilatore a soffitto", "ha sciolto l'orologio e l'ha bevuto", "ha duellato con una baguette",
            "si è portato in giro un pollo grande come una casa", "ha provato ad arrestare il vento", "ha scatenato una rivolta in una biblioteca di sussurri", "ha fatto irruzione a un matrimonio su un divano volante",
            "ha superato il limite di velocità del tempo", "ha fatto un discorso a un tostapane molto arrabbiato", "si è teletrasportato per sbaglio in una dimensione fritta", "ha adottato un drago che mangiava solo scontrini",
            "ha urlato AIGOO correndo per Orchard Road", "ha intonato triple t alle 3 di notte in una sinagoga", "ha mangiato una ciotola intera di [CENSURATO] e poi ha vomitato bile nera", "ha urlato 'I AM THE ONE WHO KNOCKS' a uno sconosciuto",
            "è andato completamente in tilt perché qualcuno ha interrotto la sua iperfissazione",
            "ha intonato 'ahin sukung thai thai, sukung, ayamsukung, sampakkung' ballando intorno a un falò",
            "ha urlato 'amankupoh!' fingendo malattie mentali e tic davanti alla telecamera", "ha eseguito una tirata di pantaloncini leggendaria davanti a 500 spettatori sbalorditi",
            "ha sfidato un microonde a una battaglia di ballo", "ha guidato un autobus di gelatina attraverso un autolavaggio", "ha provato a vendere l'oceano su un sito di annunci", "ha trasformato l'intera città in un castello gonfiabile",
            "ha urlato la lista della spesa a un aereo di passaggio", "ha fatto braccio di ferro con una statua e ha vinto davvero", "è entrato in parlamento in groppa a un'anatra gigante", "ha fatto il giocoliere con sette ananas in fiamme",
            "si è strappato la faccia per vedere se sotto c'era qualcuno, ma c'era solo un altro {A}", "ha apparecchiato per la sua famiglia, morta da undici anni, e ha servito la cena lo stesso", "ha seppellito il suo cane in giardino e ogni notte lo dissotterra per chiedergli scusa", "ha bruciato la casa con dentro tutti i suoi ricordi e ci si è scaldato le mani davanti",
            "si è strappato i denti uno a uno e li ha piantati, sperando che crescesse qualcosa che lo amasse", "si è cucito la bocca perché le urla restassero finalmente dentro", "ha mangiato l'ultima foto di sua madre così nessuno potrà più portargliela via", "ha strappato le ali a cento falene e si è scusato con ognuna chiamandola per nome",
            "ha strangolato il narratore nei suoi sogni e si è svegliato con le mani piene d'inchiostro", "ha scritto 'aiutatemi' diecimila volte sui muri con il suo sangue e nessuno l'ha letto", "ha contato i giorni da quando qualcuno ha detto il suo nome e ha perso il conto a quarantamila", "ha sorriso alla telecamera mentre qualcosa sotto la sua pelle continuava a muoversi",
            "ha ucciso la sua stessa famiglia perché erano solo frutto della sua immaginazione e lui si sentiva solo", "ha urlato al cielo finché non è piovuto sangue misto a pezzi di carne, e l'ha bevuto tutto", "ha scritto una lettera a [REDACTED] chiedendo perdono e non l'ha mai spedita", "ha inciso la sua faccia nello specchio con un coltello, ma non era ancora lui",
            "si è seduto in una stanza piena di sconosciuti identici a lui e li ha insultati finché non se ne sono andati", "ha costruito una macchina del tempo di cartone per tornare a quando era felice, ma l'ha portato solo a ieri", "ha scritto una storia su se stesso che finiva con 'e poi si svegliò e capì che era tutto un sogno', ma lui non si è mai svegliato", "si è seduto sul bordo del mondo e ha guardato il tramonto per sette giorni di fila finché non ha dimenticato che giorno fosse",
            "ha fatto un respiro profondo e si è puntato alla tempia una pistola softair senza pallini", "si è tagliato entrambe le mani con una sega circolare perché non riusciva a controllarle", "ha messo la mano sinistra in un frullatore e l'ha acceso, riducendola a un pezzo di carne sanguinolenta", "ha mangiato cadaveri in decomposizione perché gliel'ha detto il narratore, e anche le voci",
            "ha provato a pugnalarsi più volte con un coltello da cucina e in qualche modo non è morto, ma sta ancora sanguinando", "si è staccato le dita a morsi e si è cavato gli occhi a causa della sua esistenza", "si è buttato da una finestra da qualche parte e si è rotto 207 ossa",
            "ha provato a sventrarsi con la punta delle dita", "ha provato a grattarsi via i bulbi oculari per non vedere mai più [REDACTED]", "si è squarciato il collo e ha tirato fuori i vasi sanguigni finché non è rimasta solo carne scorticata", "ha sbattuto la testa contro il muro",
            "è rimasto sveglio nove giorni di fila solo perché l'Uomo col Cappello venisse a trovarlo, perché nessun altro gli parla da anni", "ha investito una famiglia di quattro persone con la sua macchina perché erano il diavolo", "ha mangiato una persona viva mentre urlava dal dolore", "ha scritto uno spartito con il suo sangue finché non è rimasto senza pelle e senza dita",
            "ha scoreggiato al suo stesso funerale ed è l'unica cosa che la gente ricorda di lui", "si è dato fuoco finché la sua faccia non è diventata irriconoscibile, ma tranquilli, si è rigenerato (così può succedere di nuovo domani)", "ha segato la testa del suo vicino con una sega arrugginita"
        ],
        place: [
            "in mezzo all'autostrada", "mentre era in fiamme (un pochino)", "sul tetto di un treno in corsa", "dentro un kopitiam in fiamme",
            "davanti a 300 anatre confuse", "in un'aula di tribunale piena di oche", "ai confini del mondo", "dentro un vulcano",
            "durante un temporale", "su un divano volante", "nel mezzo di una parata di capre", "in fondo all'oceano",
            "al centro di un tornado", "dentro una ciotola di zuppa gigante", "sul tetto di un autobus in movimento", "dentro un distributore automatico infestato",
            "alla finale di un programma di cucina", "accanto a una panetteria che esplodeva", "davanti a tutta la città", "in cima a un noodle altissimo",
            "dentro una lavatrice alla massima velocità", "sopra una fossa di granchi arrabbiati", "durante un telegiornale in diretta", "alla festa di compleanno di un drago",
            "nel parcheggio dell'aldilà", "a un festival culturale singlish-ebraico",
            "sull'ala di un aereo in volo", "dentro un tornado di noodles", "nel mezzo di una tempesta di fulmini fatta di zuppa", "in cima a un grattacielo fatto di pancake",
            "in uno stadio pieno di oche che urlavano", "dentro il frullatore più arrabbiato del mondo",
            "nella stanza dove tengono le versioni cancellate di lui", "in un ospedale senza medici, solo urla", "in fondo a un pozzo che non ha fondo", "nella sua cameretta d'infanzia, ora piena di sconosciuti con la sua faccia",
            "in una chiesa dove tutte le panche sono rivolte verso il muro", "dentro una bara con una finestra, così può guardare tutti dimenticarlo",
            "in purgatorio, perché anche se i suoi peccati gravi forse sono stati perdonati in vita, la sua anima è ancora attaccata al peccato, ai difetti e alle pene temporali non scontate"
        ],
        why: [
            "E NESSUNO L'HA FERMATO", "perché le voci hanno detto di sì", "senza alcun motivo", "e la polizia ha delle domande",
            "mentre un coro di grilli urlava il suo nome", "e onestamente era solo l'inizio", "perché aveva perso una scommessa con un drago", "e si è rifiutato di spiegarsi",
            "il che ha causato una piccola apocalisse", "mentre il cielo piangeva piccole lacrime di zuppa", "perché il suo oroscopo esigeva il caos", "e i vicini ne parlano ancora",
            "dopo aver mangiato qualcosa che non doveva", "e una capra ha filmato tutto", "e ora è festa nazionale", "urlando l'alfabeto al contrario",
            "perché glielo avevano detto i cucchiai", "e il sindaco si è dimesso subito", "il che ha infranto tre leggi della fisica", "e poi l'ha rifatto",
            "perché ormai niente ha più senso", "mentre mille anatre starnazzavano in approvazione", "e il telegiornale l'ha chiamato un miracolo", "e ora c'è una sua statua",
            "cosa di cui si pente un pochino",
            "e internet non si riprenderà mai", "mentre la luna urlava di rimando", "perché ha cominciato il tostapane", "e tre pianeti hanno presentato reclamo",
            "mentre una banda di anatre suonava insieme a lui", "e la troupe del telegiornale locale è svenuta",
            "e le voci gli hanno detto che non era ancora abbastanza", "e non si ricorda se è mai stato felice", "perché tutte le versioni di lui prima di questa sono morte urlando", "mentre sua madre guardava dalla porta senza fare niente",
            "e quando si è svegliato è successo di nuovo, e di nuovo, e di nuovo", "e da qualche parte qualcuno ha riso e ha premuto Genera", "perché se lo meritava, lo dice la storia", "e il buco dentro di lui è diventato un po' più grande"
        ]
    },
    who: [
        "con il suo gatto", "con Zio Bob la nuvola", "con tre anatre confuse", "con il suo vicino", "con una capra serissima",
        "con Amankuh", "con sua nonna", "con un cucchiaio parlante", "tutto da solo", "con uno stormo di piccioni",
        "con il suo migliore amico, il lampione", "con un tizio sospetto in impermeabile", "con il suo gemello cattivo", "con un coccodrillo educato", "con tutto il coro della scuola",
        "con uno zaino pieno di snack", "con il suo sasso domestico", "con un pollo nervoso", "con un draghetto minuscolo", "con il sindaco"
    ],
    twists: [
        "Poi il soffitto ha iniziato a parlare.", "Una gallina è passata e ha fatto un inchino.", "Il pavimento è diventato gelatina.", "Da qualche parte, un tostapane ha pianto.",
        "Un omino è apparso in una tazza da tè e ha chiesto l'affitto.", "Tutti hanno dimenticato cosa fosse il colore blu.", "Il wifi ha preso coscienza.", "L'orologio ha iniziato ad andare all'indietro per l'imbarazzo.",
        "Ha iniziato a piovere verso l'alto.", "Una porta è apparsa nel cielo ed era aperta.", "Tutti i piccioni si sono girati a guardarlo nello stesso momento.", "La luna ha mandato un messaggio.",
        "Nessuno se n'è accorto, ma i muri si sono avvicinati.", "Una capra in giacca e cravatta gli ha chiesto i documenti.", "Il terreno ha starnutito.", "Il tempo si è fermato esattamente per un panino.",
        "Un'anatra vecchissima ha sussurrato un segreto e poi è sparita.", "Le scale sono diventate uno scivolo.", "Tutto profumava di martedì.", "Le ombre sono uscite a prendere un caffè.",
        "È passata una parata di cucchiaini.", "Il sole si è scusato per il ritardo.", "Una voce dal frigo ha detto: non ancora.", "La mappa sul muro ha iniziato a sanguinare noodles.",
        "Da qualche parte, un vulcano ha fatto un rutto.", "Tutti i vicini si sono trasformati in sedie.", "Un corvo ha consegnato una diffida legale.", "La pioggia ha chiesto un rimborso.",
        "All'improvviso conosceva il nome di ogni piccione della città.", "La gravità si è presa una piccola pausa.",
        "Qualcuno ha urlato triple t nel bel mezzo di un concerto K-pop.",
        "Una voce ha chiesto ad alta voce: 'Indovina chi è tornato? Di nuovo Akiong?'",
        "Il pinguino ha preso vita e si è diretto dritto in montagna.",
        "Un uccello zaza selvatico è apparso e ha iniziato a fare infodump su [CENSURATO].",
        "Eri tu l'Akiong di Bay Harbor!",
        "Un gatto ha iniziato a fare da narratore alla storia.", "Tutti gli orologi della città hanno iniziato a ridere.", "Il cielo ha cambiato sfondo.", "Una nuvola gli ha chiesto l'autografo.",
        "I semafori hanno fondato una band.", "Le sue scarpe se ne sono andate senza di lui.", "Un'oca ha preteso di parlare con il direttore.", "Internet è rimasto in silenzio per esattamente un secondo."
    ],
    sounds: [
        "*BUM*", "*splat*", "*bip bip*", "*boing*", "*sluuurp*", "*din!*", "*dun dun DUNNN*", "*urlo di Wilhelm*", "*pernacchia*", "*urla di rovina e disperazione*",
        "*qua qua*", "*rumore di grilli*", "*kaboom*", "*rantolo*", "*bonk*", "*miao?*", "*sirene in lontananza*", "*oy vey!*", "*walao!*", "*sukung!*", "*sampakkung!*", "*splat splat splat*",
        "*sgrish*", "*clang*", "*fiuuu*", "*tonf*", "*plin plin*", "*sfrigolio*", "*pop!*", "*grugnito*", "*brontolio*", "*cip cip*", "*rumori umani*",
        "*din don*", "*brum brum*", "*ka-ching!*", "*blup*", "*crunch*", "*ehm*"
    ],
    titleStart: [
        "Akiong", "La Leggenda di Akiong", "Il Giorno in cui Akiong Incontrò", "Akiong Contro",
        "Il Diario Segreto di Akiong", "Perché Akiong Ha Paura", "Il Ritorno di Akiong", "Akiong Fa Amicizia per Sbaglio",
        "La Storia Mai Raccontata di Akiong", "Akiong Non Perdonerà Mai", "Come Akiong Sconfisse", "Akiong e la Maledizione",
        "La Leggenda di Yuno Ball", "Akiong e il Mistero", "Le Avventure di Akiong", "Akiong e l'Ascesa",
        "Akiong Viene Perseguitato", "L'Ultimo Ballo di Akiong", "Akiong Scappa", "Akiong Va in Vacanza"
    ],
    titleEnd: [
        "Il Tostapane Infestato", "I Piccioni Arrabbiati", "La Profezia dei Noodles", "Il Kopitiam Capovolto",
        "Il Vulcano Educato", "La Zuppa Sospetta", "La Capra Avvocato", "Il Martedì Scomparso",
        "Il Divano Volante", "L'Esercito dei Cucchiai", "La Luna nel Barattolo", "Il Frigo Parlante",
        "Le Mille Anatre", "Il Drago degli Scontrini", "Il Cassetto dei Calzini", "Il Tostapane Arrabbiatissimo", "La Leggenda di Yuno Ball", "La Spedizione dell'Uccello Zaza", "La Tirata di Pantaloncini Leggendaria",
        "L'Autobus di Gelatina", "Il Microonde Ballerino", "Il Coccodrillo Educato", "Gli Ananas in Fiamme"
    ]
};

// ----- Deutsch -----
STORY.de = {
    grammar: { name: "Akiong", first: "Eines Tages", order: ["S", "A", "W", "P"], gap: " ", comma: ", ", end: ".", loud: "!!!", sep: " ", titleJoin: ": " },
    start: [
        "Dann", "Danach", "Plötzlich", "Später", "Inzwischen",
        "Ohne Vorwarnung", "Aus dem Nichts", "Am nächsten Morgen", "Um Mitternacht", "Genau in diesem Moment",
        "Augenblicke später", "Jahre später", "Aus irgendeinem Grund", "Bevor es jemand merkte,", "Entgegen jedem Rat",
        "An einem ganz normalen Dienstag", "Ohne nachzudenken", "Direkt nach dem Mittagessen", "Aus purer Neugier", "Warum auch immer,",
        "Kurz darauf", "In einer schockierenden Wendung", "Mit großem Selbstvertrauen", "Ohne jemanden zu fragen,", "Aus Versehen",
        "Pünktlich wie die Eisenbahn"
    ],
    normal: {
        act: [
            "ging {A} auf den Markt", "aß {A} eine große Schüssel Nudeln", "machte {A} ein langes Nickerchen", "führte {A} den Hund um den Block",
            "schaute {A} die Nachrichten", "reparierte {A} sein altes Fahrrad", "kaufte {A} eine Tüte Orangen", "wartete {A} auf den Bus",
            "kochte {A} gebratenen Reis", "trank {A} heißen Kopi", "las {A} die Zeitung", "wusch {A} sein Auto",
            "strich {A} den Zaun", "fegte {A} den Boden", "rief {A} seine Mutter an", "fütterte {A} die Fische",
            "faltete {A} die Wäsche", "zählte {A} seine Münzen", "spielte {A} Karten mit seinen Kumpels", "goss {A} die Pflanzen",
            "hörte {A} Radio", "putzte {A} das Fenster", "aß {A} Toast mit Kaya", "saß {A} auf der Veranda", "wich {A} Fragen aus wie George W. Bush diesem Schuh",
            "erklärte {A} einem verwirrten Kassierer sein Elite-Ballwissen",
            "band {A} sich ganz langsam die Schuhe", "lieh sich {A} eine Leiter", "ging {A} joggen", "winkte {A} dem Nachbarn zu", "machte {A} siebenundsechzig Stunden am Stück einen Infodump",
            "kaufte {A} Lottoscheine", "reparierte {A} den Ventilator", "machte sich {A} eine Tasse Tee", "schnitt {A} die Hecke", "bestellte {A} einen Kopi-O Kosong wie ein echter Onkel aus Singapur", "schlürfte {A} Ramyeon, während er einen K-Drama-Oppa schaute",
            "sortierte {A} sein Gewürzregal alphabetisch", "reparierte {A} den wackeligen Tisch mit einem gefalteten Kassenbon", "aß {A} einen Teller Nasi Lemak", "stritt sich {A} mit der Fernbedienung",
            "brachte {A} seinen Roller in die Waschanlage", "kaufte {A} ein neues Paar Hausschuhe", "stand {A} für den berühmten Hühnerreis an", "spielte {A} Schach gegen den alten Mann von nebenan"
        ],
        place: [
            "in der Nähe vom alten Markt", "hinter dem Kopitiam", "unter dem großen Baum", "an der Bushaltestelle",
            "vor seinem Haus", "im Park", "neben der Post", "am Fluss",
            "auf dem Spielplatz", "in der Küche", "auf dem Balkon", "die Straße runter", "im Newton Food Centre sia", "in einem Gangnamer Späti", "in der Nähe der örtlichen Synagoge",
            "im Tempel", "in der Nähe der Schule", "im Garten", "auf dem Nachtmarkt",
            "neben der Autobahn", "im Wohnzimmer", "beim Friseur", "auf dem Dach",
            "im Hawker Centre", "in der Schlange im Supermarkt", "am Bahnhof", "auf einer Parkbank", "im Waschsalon", "vor dem Mamak-Stand"
        ],
        why: [
            "weil ihm langweilig war", "weil Montag war", "weil es sonst keiner machen wollte", "weil das Wetter schön war",
            "weil ihm der Rücken wehtat", "weil er es seiner Frau versprochen hatte", "nach einem sehr langen Tag", "bevor es anfing zu regnen",
            "obwohl er müde war", "so wie jeden Morgen", "weil der Kühlschrank leer war", "während er ein altes Lied summte",
            "nachdem er eine Wette verloren hatte", "weil es billig war", "weil der Laden gleich zumachte", "um ein bisschen Geld zu sparen", "und alles ist amankuh und amankupoh", "um nicht als Kiapu zu gelten", "weil Daebak-Angebote nicht warten lah", "lass mich kochen lah",
            "weil sein Nachbar ihn darum gebeten hatte", "während die Sonne unterging", "während er Erdnüsse aß", "weil es Tradition war",
            "weil der Fernseher kaputt war", "weil er nichts Besseres zu tun hatte", "weil sein Handy leer war", "nach seinem Nachmittagskaffee", "weil das Radio ihm sagte, er solle entspannen", "während er wartete, bis sein Tee abkühlt"
        ]
    },
    weird: {
        act: [
            "redete {A} mit einer Taube", "hatte {A} einen schwulen Furry als Freund", "öffnete {A} eine Tür in seinem Kühlschrank", "brachte {A} seinem Schatten das Tanzen bei", "verkaufte {A} unsichtbare Regenschirme",
            "fragte {A} den Mond nach dem Weg", "adoptierte {A} eine Wolke und nannte sie Onkel Bob", "trug {A} zwei linke Schuhe", "fand {A} heraus, dass die Dienstage ausverkauft waren",
            "trat {A} einem geheimen Club von Aufzugflüsterern bei", "tauschte {A} seine Stimme gegen ein Sandwich", "pflanzte {A} eine Uhr und wartete darauf, dass die Zeit wächst", "interviewte {A} eine Pfütze",
            "lernte {A} fließend Türklinkisch", "lieh sich {A} ein Paar Träume", "malte {A} den Wind blau an", "brachte {A} einer Schnecke das Autofahren bei",
            "schickte sich {A} einen Brief aus der Zukunft", "gründete {A} eine Band mit sieben Löffeln", "verirrte sich {A} in seiner eigenen Sockenschublade", "stritt sich {A} mit einem Spiegel darüber, wer älter ist",
            "fand {A} eine Treppe, die zum Mittwoch führte", "wurde {A} bester Freund einer Straßenlaterne", "hielt {A} einen winzigen Mond in einem Glas", "kaufte {A} ein Ticket nach Nirgendwo",
            "brachte {A} dem Regen bei, höflich anzuklopfen", "trug {A} einen Eimer voller Echos herum", "traf {A} einen Fisch, der Versicherungen verkaufte", "faltete {A} den Horizont zu einem Papierboot",
            "züchtete {A} einen Garten voller winziger Regenschirme", "hörte {A} das Sofa seinen Namen flüstern", "tauschte {A} eine linke Socke gegen ein Gerücht", "veranstaltete {A} eine Teeparty für seine Schatten",
            "stempelte {A} seinen Reisepass mit einem Niesen", "brachte {A} der Treppe das Singen bei", "fand {A} eine Landkarte seiner eigenen Stirn", "machte {A} ein Nickerchen in einem Regenbogen",
            "hatte {A} einen leisen Streit mit der Zahl Sieben", "schrieb {A} ein Gedicht auf eine Banane", "überredete {A} eine Wolke, Anwältin zu werden", "stellte {A} ein Gespenst ein, das seine Wäsche machte",
            "unterhielt sich {A} in reinem Singlish-Jiddisch mit Yuno Ball", "schrie {A} ein schlafendes Kind mit oy vey lah an",
            "schleppte {A} eine riesige Schüssel Tteokbokki über die Grenze", "übte {A} grundlos hohes Pfeifen",
            "diskutierte {A} Philosophie mit Setarcos (dem bösen Zwilling von Sokrates)",
            "freundete sich {A} mit dem Pinguin an, der lebendig wurde und in die Berge ging, um ein Zaza-Vogel zu werden",
            "las {A} eine Geschichte mit dem Titel 'Ein Twitter-User trank eine Schneekugel. So wurde ein Emu pummelig.'",
            "schaute {A} 'Everybody ate Chris TWD' im Livestream",
            "erklärte {A} einem geragebaiteten Chatter, dass das hier Braingrow und nicht Brainrot ist",
            "traf {A} Allison Burgers und fragte 'hat er gerade gesagt, dass sein Nachname Burger ist?'",
            "verkündete {A} 'ehrlich gesagt hab ich nix gesehen, ich bin auf dem linken Auge zu 43 % blind und auf dem rechten komplett'",
            "drehte {A} durch und rief 'SORRY HAT ER GERADE GESAGT DASS SEIN NACHNAME BURGERS IST'",
            "wurde {A} sich seiner selbst bewusst und fing an, die vierte Wand zu durchbrechen",
            "goont {A} niemals, sonst jagt er dich mit meinen Minions",
            "sagte {A} ambatukam und ambatublo, während er einen Herzinfarkt hatte",
            "sagte {A} 'I AM THE ONE WHO KNOCKS' und klopfte dann bei einem Fremden an die Tür",
            "sagte {A} 'ICH HAB DEN JACKPOT GEKNACKT' und knackte dann wirklich den Jackpot im Casino",
            "brachte {A} einem Kaktus das Umarmen bei", "eröffnete {A} eine Bäckerei, die nur gestern verkaufte", "spielte {A} Verstecken mit seinem eigenen Spiegelbild", "gewann {A} ein Anstarr-Duell gegen ein Gemälde",
            "strickte {A} einen Schal für den Mond", "vermietete {A} am Wochenende seinen Schatten", "fragte {A} eine Teekanne um Lebensrat", "baute {A} eine Sandburg auf einer Wolke"
        ],
        place: [
            "in einem sehr kleinen Aufzug", "auf einem schlafenden Wal", "unter einem schwebenden Tisch", "in einem Zimmer ohne Ecken",
            "neben einem sprechenden Kühlschrank", "mitten in einem leisen Sturm", "auf einer Brücke aus Nudeln", "in einer Seifenblase",
            "an einer Bushaltestelle, die es gar nicht gab", "in einer Bibliothek verlorener Socken", "hinter einer Tür, die sich ständig bewegte", "an der Decke",
            "auf einem Feld voller verkehrt herum wachsender Bäume", "in einem Café, das von Krähen geführt wurde", "in einem umgedrehten Kopitiam", "auf einer Treppe, die seitwärts ging",
            "in einer riesigen Teetasse", "in einer Stadt, in der es immer 3 Uhr nachts war", "am Rand des Teppichs", "neben einem sehr höflichen Vulkan",
            "in einer Schneekugel", "auf einem Zug aus Käse", "in einem Flur, der nach Donner roch", "auf einer Wolke, die aussah wie sein Onkel",
            "in einem Teich aus Milch", "in der Hölle",
            "im Marina Bay Sands auf der Suche nach Yuno Ball", "in einer Retro-Spielhalle beim Zocken von #RetroSlop-Games",
            "dort, wo Jerusalem da lang ist und alle Wege nach Rom führen",
            "in einer riesigen Ananas", "in einem Museum der vergessenen Montage", "auf einem Karussell aus Löffeln", "unter dem Bett eines schlafenden Riesen",
            "in einem flüsternden Aufzug", "in einem Leuchtturm mitten in der Wüste"
        ],
        why: [
            "weil die Prophezeiung es so wollte", "was niemand hinterfragte", "aber nur an ungeraden Tagen", "aus unbekannten Gründen",
            "während die Wände zustimmend nickten", "weil der Mond es ihm gesagt hatte", "genau wie in seinem Traum", "und die Uhren hielten den Atem an",
            "obwohl das in drei Dimensionen verboten war", "weil Spaghetti es verlangten", "während ein fernes Radio rückwärts spielte", "während die Schatten applaudierten",
            "weil es sich wie ein Donnerstag anfühlte", "und irgendwie ergab das Sinn", "während der Boden summte", "weil die Tauben zuschauten",
            "nach einem sehr seltsamen Niesen", "was die Enten nervös machte", "und der Himmel blinzelte zweimal", "weil die Schwerkraft im Urlaub war",
            "während die Zeit höflich den Raum verließ", "was alles und nichts erklärte", "nachdem er verdächtige Suppe getrunken hatte", "weil die Zahl Sieben darauf bestand",
            "während eine Ziege ihn still verurteilte", "während er leise iykykykykyky murmelte", "weil es so meshuggenah war leh",
            "während er sich fragte 'Weiß er es?', mit einem zu hohen und einem zu niedrigen IQ",
            "weil die Sterne sich langweilten", "und die Möbel applaudierten leise", "während das Besteck mitschrieb", "weil ein Glückskeks es gesagt hatte",
            "während der Mond so tat, als würde er nichts merken", "weil die Tapete ihn herausgefordert hatte"
        ]
    },
    schizo: {
        act: [
            "schrie {A} eine Ampel an, bis sie lila wurde wie sein Nachbar, der lila wurde", "baute {A} eine Rakete aus 47 Löffeln", "prügelte sich {A} mit einem Snackautomaten", "aß {A} die ganze Landkarte",
            "engagierte {A} eine Ziege als Anwalt", "forderte {A} die Sonne zu einem Anstarr-Duell heraus", "wurde {A} Bürgermeister einer Pfütze", "erklärte {A} dem Donnerstag den Krieg",
            "verschluckte {A} einen Blitz", "brachte {A} 200 Enten die Steuererklärung bei", "verwandelte sich {A} für sechs Stunden in eine Lampe", "rang {A} mit einem Kühlschrank und verlor",
            "zündete {A} absichtlich eine Wolke an", "schoss {A} seinen Nachbarn in die Umlaufbahn", "gründete {A} eine Sekte für eine einzige Nudel", "schlug {A} einem Hurrikan ins Gesicht",
            "versuchte {A}, einen Briefkasten zu heiraten", "verkaufte {A} seinen eigenen Schatten an eine Ziege", "aß {A} fünfzehn Chilis und sah die Zukunft", "entführte {A} den Mond für Lösegeld",
            "erfand {A} eine neue Farbe und wurde dafür verhaftet", "fuhr {A} mit einem Einkaufswagen einen Vulkan hinunter", "schrie {A} den Ozean an, weil er zu nass war", "trainierte {A} eine Armee wütender Tauben",
            "baute {A} eine Burg aus geklauten Regenschirmen", "biss {A} in den Himmel und der Himmel biss zurück", "grub {A} ein Loch bis zur anderen Seite der Erde und sagte hallo", "fütterte {A} ein Gewitter mit seinem ganzen Mittagessen",
            "kämpfte {A} mit einem Geist um einen Parkplatz", "krönte sich {A} zum König des Deckenventilators", "schmolz {A} die Uhr und trank sie", "lieferte sich {A} ein Schwertduell mit einem Baguette",
            "trug {A} ein Huhn so groß wie ein Haus herum", "versuchte {A}, den Wind zu verhaften", "zettelte {A} einen Aufstand in einer Bibliothek des Flüsterns an", "crashte {A} eine Hochzeit auf einem fliegenden Sofa",
            "überschritt {A} das Tempolimit der Zeit", "hielt {A} eine Rede vor einem sehr wütenden Toaster", "teleportierte sich {A} aus Versehen in eine frittierte Dimension", "adoptierte {A} einen Drachen, der nur Kassenbons fraß",
            "schrie {A} AIGOO, während er die Orchard Road entlangrannte", "skandierte {A} um 3 Uhr nachts in einer Synagoge triple t", "aß {A} eine ganze Schüssel [ZENSIERT] und erbrach dann schwarze Galle", "schrie {A} einen Fremden mit 'I AM THE ONE WHO KNOCKS' an",
            "fuhr {A} komplett runter, weil jemand seine Hyperfixierung unterbrochen hatte",
            "skandierte {A} 'ahin sukung thai thai, sukung, ayamsukung, sampakkung', während er um ein Lagerfeuer tanzte",
            "rief {A} 'amankupoh!', während er vor der Kamera psychische Krankheiten und Tics vortäuschte", "vollführte {A} einen mythischen Shorts-Zug vor 500 fassungslosen Zuschauern",
            "forderte {A} eine Mikrowelle zu einem Dance-Battle heraus", "fuhr {A} einen Bus aus Wackelpudding durch eine Waschanlage", "versuchte {A}, den Ozean auf Kleinanzeigen zu verkaufen", "verwandelte {A} die ganze Stadt in eine Hüpfburg",
            "schrie {A} seine Einkaufsliste einem vorbeifliegenden Flugzeug zu", "machte {A} Armdrücken mit einer Statue und gewann tatsächlich", "ritt {A} auf einer Riesenente in den Bundestag", "jonglierte {A} mit sieben brennenden Ananas",
            "zog {A} sich das eigene Gesicht ab, um zu sehen, ob jemand darunter war, aber da war nur noch mehr {A}", "deckte {A} den Tisch für seine Familie, die seit elf Jahren tot ist, und servierte trotzdem das Abendessen", "begrub {A} seinen Hund im Garten und gräbt ihn jede Nacht wieder aus, um sich zu entschuldigen", "brannte {A} das Haus mit all seinen Erinnerungen nieder und wärmte sich davor die Hände",
            "zog {A} sich die Zähne einzeln und pflanzte sie ein, in der Hoffnung, dass etwas wächst, das ihn liebt", "nähte {A} sich den Mund zu, damit das Schreien endlich drinnen bleibt", "aß {A} das letzte Foto seiner Mutter, damit sie ihm niemand je wieder wegnehmen kann", "riss {A} hundert Motten die Flügel aus und entschuldigte sich bei jeder mit ihrem Namen",
            "erwürgte {A} den Erzähler im Traum und wachte mit Tinte an den Händen auf", "schrieb {A} zehntausendmal „hilf mir“ mit seinem eigenen Blut an die Wände und niemand las es", "zählte {A} die Tage, seit jemand seinen Namen gesagt hat, und verlor bei vierzigtausend den Überblick", "lächelte {A} in die Kamera, während sich unter seiner Haut etwas weiter bewegte",
            "ermordete {A} seine eigene Familie, weil sie alle nur Hirngespinste waren und er einsam war", "schrie {A} den Himmel an, bis es Blut mit Fleischbrocken regnete, und er trank alles", "schrieb {A} einen Brief an [REDACTED] und bat um Vergebung, schickte ihn aber nie ab", "ritzte {A} mit einem Messer sein eigenes Gesicht in den Spiegel, aber es war immer noch nicht er",
            "saß {A} in einem Raum voller Fremder, die alle aussahen wie er, und beleidigte sie, bis sie gingen", "baute {A} eine Zeitmaschine aus Pappe, um in die Zeit zurückzureisen, als er glücklich war, aber sie brachte ihn nur bis gestern", "schrieb {A} eine Geschichte über sich selbst, die mit „und dann wachte er auf und merkte, dass alles nur ein Traum war“ endete, aber er wachte nie auf", "saß {A} am Rand der Welt und sah sieben Tage lang die Sonne untergehen, bis er vergaß, welcher Tag war",
            "atmete {A} tief durch und hielt sich eine Softairpistole ohne Kugeln an die Schläfe", "sägte {A} sich mit einer Kreissäge beide Hände ab, weil er sie nicht kontrollieren konnte", "steckte {A} seine linke Hand in einen Mixer und schaltete ihn ein, bis nur noch ein blutiger Fleischklumpen übrig war", "aß {A} verwesende Leichen, weil der Erzähler es ihm gesagt hatte, und die Stimmen auch",
            "versuchte {A} mehrmals, sich mit einem Küchenmesser zu erstechen, und starb irgendwie nicht, aber er blutet immer noch", "biss {A} sich die Finger ab und stach sich die Augen aus, weil er existiert", "sprang {A} irgendwo aus einem Fenster und brach sich 207 Knochen",
            "versuchte {A}, sich mit den eigenen Fingerspitzen den Bauch aufzureißen", "versuchte {A}, sich die Augäpfel auszukratzen, damit er [REDACTED] nie wieder sehen muss", "riss {A} sich den Hals auf und zog die Blutgefäße heraus, bis nur noch gehäutetes Fleisch übrig war", "schlug {A} seinen Kopf gegen die Wand",
            "blieb {A} neun Tage am Stück wach, nur damit der Hutmann ihn besucht, weil seit Jahren niemand sonst mit ihm redet", "überfuhr {A} mit seinem eigenen Auto eine vierköpfige Familie, weil sie der Teufel waren", "aß {A} einen Menschen bei lebendigem Leib, während er vor Schmerz schrie", "schrieb {A} eine Partitur mit seinem eigenen Blut, bis er keine Haut und keine Finger mehr hatte",
            "furzte {A} auf seiner eigenen Beerdigung und das ist das Einzige, woran sich alle bei ihm erinnern", "zündete {A} sich selbst an und brannte, bis sein Gesicht nicht mehr zu erkennen war, aber keine Sorge, er regenerierte sich (damit es morgen wieder passieren kann)", "sägte {A} seinem Nachbarn mit einer rostigen Säge den Kopf ab"
        ],
        place: [
            "mitten auf der Autobahn", "während er (ein bisschen) brannte", "auf dem Dach eines rasenden Zuges", "in einem brennenden Kopitiam",
            "vor 300 verwirrten Enten", "in einem Gerichtssaal voller Gänse", "am Ende der Welt", "in einem Vulkan",
            "während eines Gewitters", "auf einem fliegenden Sofa", "mitten in einer Ziegenparade", "auf dem Meeresgrund",
            "im Zentrum eines Tornados", "in einer riesigen Suppenschüssel", "auf dem Dach eines fahrenden Busses", "in einem verfluchten Snackautomaten",
            "im Finale einer Kochshow", "neben einer explodierenden Bäckerei", "vor der ganzen Stadt", "auf der Spitze einer sehr hohen Nudel",
            "in einer Waschmaschine im Schleudergang", "über einer Grube voller wütender Krabben", "während einer Live-Nachrichtensendung", "auf der Geburtstagsparty eines Drachen",
            "auf dem Parkplatz des Jenseits", "auf einem Singlish-jüdischen Kulturfest",
            "auf der Tragfläche eines fliegenden Flugzeugs", "in einem Tornado aus Nudeln", "mitten in einem Gewitter aus Suppe", "auf einem Wolkenkratzer aus Pfannkuchen",
            "in einem Stadion voller kreischender Gänse", "im wütendsten Mixer der Welt",
            "in dem Raum, in dem sie die gelöschten Versionen von ihm aufbewahren", "in einem Krankenhaus ohne Ärzte, nur mit Schreien", "am Grund eines Brunnens, der keinen Grund hat", "in seinem Kinderzimmer, das jetzt voller Fremder mit seinem Gesicht ist",
            "in einer Kirche, in der jede Bank zur Wand zeigt", "in einem Sarg mit Fenster, damit er zusehen kann, wie ihn alle vergessen",
            "im Fegefeuer, weil seine schweren Sünden im Leben vielleicht vergeben wurden, seine Seele aber noch an der Sünde, an ihren Fehlern und an unbezahlten zeitlichen Strafen hängt"
        ],
        why: [
            "UND NIEMAND HAT IHN AUFGEHALTEN", "weil die Stimmen ja gesagt haben", "aus absolut keinem Grund", "und die Polizei hat Fragen",
            "während ein Grillenchor seinen Namen schrie", "und ehrlich gesagt war das erst der Anfang", "weil er eine Wette gegen einen Drachen verloren hatte", "und weigerte sich, es zu erklären",
            "was eine kleine Apokalypse auslöste", "während der Himmel winzige Suppentränen weinte", "weil sein Horoskop Chaos verlangte", "und die Nachbarn reden immer noch darüber",
            "nachdem er etwas gegessen hatte, was er nicht hätte essen sollen", "und eine Ziege filmte alles", "was jetzt ein Feiertag ist", "während er das Alphabet rückwärts schrie",
            "weil die Löffel es ihm befohlen hatten", "und der Bürgermeister trat sofort zurück", "was drei Gesetze der Physik brach", "und dann machte er es nochmal",
            "weil nichts mehr Sinn ergibt", "während tausend Enten zustimmend quakten", "und die Nachrichten nannten es ein Wunder", "und jetzt gibt es eine Statue von ihm",
            "was er ein kleines bisschen bereut",
            "und das Internet wird sich nie davon erholen", "während der Mond zurückschrie", "weil der Toaster angefangen hat", "und drei Planeten reichten Beschwerde ein",
            "während eine Blaskapelle aus Enten mitspielte", "und das Team der Lokalnachrichten fiel in Ohnmacht",
            "und die Stimmen sagten ihm, dass es immer noch nicht genug war", "und er weiß nicht mehr, ob er jemals glücklich war", "weil jede Version von ihm vor dieser schreiend gestorben ist", "während seine Mutter von der Tür aus zusah und nichts tat",
            "und als er aufwachte, passierte es wieder, und wieder, und wieder", "und irgendwo lachte jemand und drückte auf Generieren", "weil er es verdient hat, sagt die Geschichte", "und das Loch in ihm wurde ein bisschen größer"
        ]
    },
    who: [
        "mit seiner Katze", "mit Onkel Bob, der Wolke", "mit drei verwirrten Enten", "mit seinem Nachbarn", "mit einer sehr ernsten Ziege",
        "mit Amankuh", "mit seiner Oma", "mit einem sprechenden Löffel", "ganz allein", "mit einem Schwarm Tauben",
        "mit seinem besten Freund, der Straßenlaterne", "mit einem verdächtigen Mann im Trenchcoat", "mit seinem bösen Zwilling", "mit einem höflichen Krokodil", "mit dem ganzen Schulchor",
        "mit einem Rucksack voller Snacks", "mit seinem Haustierstein", "mit einem nervösen Huhn", "mit einem winzigen Drachen", "mit dem Bürgermeister"
    ],
    twists: [
        "Dann fing die Decke an zu reden.", "Ein Huhn lief vorbei und verbeugte sich.", "Der Boden wurde zu Wackelpudding.", "Irgendwo weinte ein Toaster.",
        "Ein winziger Mann tauchte in einer Teetasse auf und wollte Miete.", "Alle vergaßen, was die Farbe Blau war.", "Das WLAN erlangte ein Bewusstsein.", "Die Uhr lief vor lauter Peinlichkeit rückwärts.",
        "Es fing an, nach oben zu regnen.", "Eine Tür erschien am Himmel und sie stand offen.", "Alle Tauben drehten sich gleichzeitig um und starrten ihn an.", "Der Mond schickte eine SMS.",
        "Niemand merkte es, aber die Wände kamen näher.", "Eine Ziege im Anzug wollte seinen Ausweis sehen.", "Der Boden nieste.", "Die Zeit blieb für genau ein Sandwich stehen.",
        "Eine sehr alte Ente flüsterte ein Geheimnis und verschwand.", "Die Treppe wurde zur Rutsche.", "Alles roch nach Dienstag.", "Die Schatten gingen Kaffee holen.",
        "Eine Parade winziger Löffel marschierte vorbei.", "Die Sonne entschuldigte sich fürs Zuspätkommen.", "Eine Stimme aus dem Kühlschrank sagte: noch nicht.", "Die Karte an der Wand fing an, Nudeln zu bluten.",
        "Irgendwo rülpste ein Vulkan.", "Alle Nachbarn verwandelten sich in Stühle.", "Eine Krähe stellte eine Abmahnung zu.", "Der Regen wollte sein Geld zurück.",
        "Plötzlich kannte er den Namen jeder Taube in der Stadt.", "Die Schwerkraft machte eine kurze Pause.",
        "Jemand schrie mitten in einem K-Pop-Konzert triple t.",
        "Eine Stimme fragte laut: 'Ratet mal, wer zurück ist? Schon wieder Akiong?'",
        "Der Pinguin wurde lebendig und machte sich direkt auf in die Berge.",
        "Ein wilder Zaza-Vogel erschien und fing an, über [ZENSIERT] zu infodumpen.",
        "Du warst der Bay-Harbor-Akiong!",
        "Eine Katze fing an, die Geschichte zu erzählen.", "Alle Uhren der Stadt fingen an zu lachen.", "Der Himmel wechselte sein Hintergrundbild.", "Eine Wolke bat ihn um ein Autogramm.",
        "Die Ampeln gründeten eine Band.", "Seine Schuhe liefen ohne ihn davon.", "Eine Gans verlangte, mit dem Geschäftsführer zu sprechen.", "Das Internet war genau eine Sekunde lang still."
    ],
    sounds: [
        "*BUMM*", "*platsch*", "*tröt tröt*", "*boing*", "*schlürf*", "*ding!*", "*dun dun DUNNN*", "*Wilhelmschrei*", "*pups*", "*Schreie des Untergangs und der Verzweiflung*",
        "*quak*", "*Grillenzirpen*", "*kawumm*", "*keuch*", "*bonk*", "*miau?*", "*Sirenen in der Ferne*", "*oy vey!*", "*walao!*", "*sukung!*", "*sampakkung!*", "*platsch platsch platsch*",
        "*kreisch*", "*klirr*", "*wusch*", "*plumps*", "*pling pling*", "*brutzel*", "*plopp!*", "*grunz*", "*grummel*", "*tschilp tschilp*", "*menschliche Geräusche*",
        "*ding dong*", "*brumm brumm*", "*kaching!*", "*blubb*", "*knirsch*", "*räusper*"
    ],
    titleStart: [
        "Akiong", "Die Legende von Akiong", "Der Tag, an dem Akiong traf", "Akiong gegen",
        "Das geheime Tagebuch von Akiong", "Warum Akiong Angst hat", "Die Rückkehr von Akiong", "Akiong freundet sich aus Versehen an",
        "Die unerzählte Geschichte von Akiong", "Akiong wird niemals vergeben", "Wie Akiong besiegte", "Akiong und der Fluch",
        "Die Legende von Yuno Ball", "Akiong und das Geheimnis", "Die Abenteuer von Akiong", "Akiong und der Aufstieg",
        "Akiong wird heimgesucht", "Der letzte Tanz von Akiong", "Akiong flieht", "Akiong macht Urlaub"
    ],
    titleEnd: [
        "Der verfluchte Toaster", "Die wütenden Tauben", "Die Nudel-Prophezeiung", "Das umgedrehte Kopitiam",
        "Der höfliche Vulkan", "Die verdächtige Suppe", "Die Ziege als Anwalt", "Der verschwundene Dienstag",
        "Das fliegende Sofa", "Die Löffel-Armee", "Der Mond im Glas", "Der sprechende Kühlschrank",
        "Die tausend Enten", "Der Kassenbon-Drache", "Die Sockenschublade", "Der sehr wütende Toaster", "Die Legende von Yuno Ball", "Die Zaza-Vogel-Expedition", "Der mythische Shorts-Zug",
        "Der Wackelpudding-Bus", "Die tanzende Mikrowelle", "Das höfliche Krokodil", "Die brennenden Ananas"
    ]
};

// ----- Español -----
STORY.es = {
    grammar: { name: "Akiong", first: "Akiong", order: ["S", "A", "W", "P"], gap: " ", comma: ", ", end: ".", loud: "!!!", sep: " ", titleJoin: ": " },
    start: [
        "Luego Akiong", "Después de eso, Akiong", "De repente, Akiong", "Más tarde, Akiong", "Mientras tanto, Akiong",
        "Sin previo aviso, Akiong", "De la nada, Akiong", "A la mañana siguiente, Akiong", "A medianoche, Akiong", "Justo en ese momento, Akiong",
        "Momentos después, Akiong", "Años más tarde, Akiong", "Por alguna razón, Akiong", "Antes de que nadie se diera cuenta, Akiong", "En contra de todos los consejos, Akiong",
        "Un martes cualquiera, Akiong", "Sin pensarlo, Akiong", "Justo después de comer, Akiong", "Por pura curiosidad, Akiong", "Nadie sabe por qué, pero Akiong",
        "Poco después, Akiong", "En un giro impactante, Akiong", "Con mucha confianza, Akiong", "Sin preguntarle a nadie, Akiong", "Sin querer, Akiong",
        "Puntual como siempre, Akiong"
    ],
    normal: {
        act: [
            "fue al mercado", "se comió un tazón enorme de fideos", "se echó una siesta larga", "paseó al perro alrededor de la manzana",
            "vio las noticias", "arregló su bicicleta vieja", "compró una bolsa de naranjas", "esperó el autobús",
            "cocinó arroz frito", "se tomó un kopi bien caliente", "leyó el periódico", "lavó su coche",
            "pintó la valla", "barrió el suelo", "llamó a su madre", "les dio de comer a los peces",
            "dobló la ropa", "contó sus monedas", "jugó a las cartas con sus amigos", "regó las plantas",
            "escuchó la radio", "limpió la ventana", "se comió una tostada con kaya", "se sentó en el porche", "esquivó preguntas como George W. Bush esquivó aquel zapato",
            "le explicó su elite ball knowledge a un cajero confundido",
            "se ató los cordones muy despacio", "pidió prestada una escalera", "salió a correr", "saludó al vecino con la mano", "hizo infodump durante sesenta y siete horas seguidas",
            "compró boletos de lotería", "arregló el ventilador", "se preparó una taza de té", "podó el seto", "pidió un kopi-o kosong como un auténtico tío de Singapur", "sorbió ramyeon mientras veía a un oppa de K-drama",
            "ordenó sus especias por orden alfabético", "arregló la mesa coja con un ticket doblado", "se comió un plato de nasi lemak", "discutió con el mando de la tele",
            "llevó su moto a lavar", "se compró unas pantuflas nuevas", "hizo cola para el famoso arroz con pollo", "jugó al ajedrez contra el viejito de al lado"
        ],
        place: [
            "cerca del mercado viejo", "detrás del kopitiam", "debajo del árbol grande", "en la parada del autobús",
            "frente a su casa", "en el parque", "al lado de la oficina de correos", "junto al río",
            "en el parque infantil", "en la cocina", "en el balcón", "calle abajo", "en el Newton Food Centre sia", "dentro de una tienda 24 horas de Gangnam", "cerca de la sinagoga del barrio",
            "en el templo", "cerca del colegio", "en el jardín", "en el mercado nocturno",
            "al lado de la autopista", "en el salón", "en la barbería", "en la azotea",
            "en el hawker centre", "en la cola del supermercado", "en la estación de tren", "en un banco del parque", "en la lavandería", "frente al puesto mamak"
        ],
        why: [
            "porque estaba aburrido", "porque era lunes", "porque nadie más quería hacerlo", "ya que hacía buen tiempo",
            "porque le dolía la espalda", "porque se lo había prometido a su esposa", "después de un día larguísimo", "antes de que empezara a llover",
            "aunque estaba cansado", "como todas las mañanas", "porque la nevera estaba vacía", "mientras tarareaba una canción vieja",
            "después de perder una apuesta", "ya que era barato", "porque la tienda estaba cerrando", "para ahorrarse algo de dinero", "y todo es amankuh y amankupoh", "para que no lo llamaran kiapu", "porque las ofertas daebak no esperan lah", "déjame cocinar lah",
            "porque su vecino se lo pidió", "mientras se ponía el sol", "mientras comía cacahuetes", "porque era tradición",
            "porque la tele estaba rota", "ya que no tenía nada mejor que hacer", "porque se le murió el móvil", "después de su café de la tarde", "porque la radio le dijo que se relajara", "mientras esperaba a que se enfriara su té"
        ]
    },
    weird: {
        act: [
            "habló con una paloma", "tenía un novio furry gay", "abrió una puerta dentro de su nevera", "le enseñó a bailar a su sombra", "vendió paraguas invisibles",
            "le preguntó a la luna cómo llegar", "adoptó una nube y la llamó Tío Bob", "se puso dos zapatos izquierdos", "descubrió que los martes estaban agotados",
            "se unió a un club secreto de susurradores de ascensores", "cambió su voz por un sándwich", "plantó un reloj y esperó a que creciera el tiempo", "entrevistó a un charco",
            "aprendió a hablar pomo de puerta con fluidez", "pidió prestado un par de sueños", "pintó el viento de azul", "le enseñó a conducir a un caracol",
            "se envió una carta a sí mismo desde el futuro", "formó una banda con siete cucharas", "se perdió en su propio cajón de calcetines", "discutió con un espejo sobre quién era mayor",
            "encontró una escalera que llevaba al miércoles", "se hizo mejor amigo de una farola", "guardaba una luna diminuta en un frasco", "compró un billete a ninguna parte",
            "le enseñó a la lluvia a llamar a la puerta con educación", "llevaba un cubo lleno de ecos", "conoció a un pez que vendía seguros", "dobló el horizonte en forma de barquito de papel",
            "cultivó un jardín de paraguas diminutos", "oyó al sofá susurrar su nombre", "cambió un calcetín izquierdo por un rumor", "organizó una merienda para sus sombras",
            "selló su pasaporte con un estornudo", "le enseñó a cantar a la escalera", "encontró un mapa de su propia frente", "se echó una siesta dentro de un arcoíris",
            "tuvo una discusión silenciosa con el número siete", "escribió un poema en un plátano", "convenció a una nube de hacerse abogada", "contrató a un fantasma para que le hiciera la colada",
            "conversó en puro singlish-judío con Yuno Ball", "le gritó oy vey lah a un niño dormido",
            "arrastró un tazón gigante de tteokbokki al otro lado de la frontera", "practicó silbidos agudísimos sin motivo",
            "debatió de filosofía con Setarcos (el gemelo malvado de Sócrates)",
            "se hizo amigo del pingüino que cobró vida y se fue a las montañas a convertirse en un pájaro zaza",
            "leyó una historia titulada 'Un usuario de twitter se bebió una bola de nieve. Así es como un emú se puso gordito.'",
            "vio 'Everybody ate Chris TWD' en directo",
            "le dijo a un chatter enfadado que esto es braingrow y no brainrot",
            "conoció a Allison Burgers y preguntó '¿acaba de decir que su apellido es burger?'",
            "declaró 'la verdad es que no vi nada, estoy 43 % ciego del ojo izquierdo y totalmente ciego del derecho'",
            "se volvió loco y dijo 'PERDONA ¿ACABA DE DECIR QUE SU APELLIDO ES BURGERS?'",
            "cobró conciencia y empezó a romper la cuarta pared",
            "nunca hace goon, o si no te cazará con mis minions",
            "dijo ambatukam y ambatublo mientras le daba un infarto",
            "dijo 'I AM THE ONE WHO KNOCKS' y luego llamó a la puerta de un desconocido",
            "dijo 'ME TOCÓ EL GORDO' y luego de verdad ganó el bote de un casino",
            "le enseñó a abrazar a un cactus", "abrió una panadería que solo vendía ayer", "jugó al escondite con su propio reflejo", "ganó un concurso de miradas contra un cuadro",
            "le tejió una bufanda a la luna", "alquilaba su sombra los fines de semana", "le pidió consejos de vida a una tetera", "construyó un castillo de arena sobre una nube"
        ],
        place: [
            "dentro de un ascensor diminuto", "encima de una ballena dormida", "debajo de una mesa flotante", "en una habitación sin esquinas",
            "al lado de una nevera que hablaba", "en medio de una tormenta silenciosa", "en un puente hecho de fideos", "dentro de una burbuja",
            "en una parada de autobús que no existía", "en una biblioteca de calcetines perdidos", "detrás de una puerta que no paraba de moverse", "en el techo",
            "en un campo de árboles al revés", "en una cafetería atendida por cuervos", "en un kopitiam al revés", "en una escalera que iba de lado",
            "dentro de una taza de té gigante", "en un pueblo donde siempre eran las 3 de la mañana", "en el borde de la alfombra", "al lado de un volcán muy educado",
            "dentro de una bola de nieve", "en un tren hecho de queso", "en un pasillo que olía a trueno", "en una nube con forma de su tío",
            "en un estanque de leche", "en el infierno",
            "en el Marina Bay Sands buscando a Yuno Ball", "en un arcade retro jugando a juegos #RetroSlop",
            "donde Jerusalén queda por allá y todos los caminos llevan a Roma",
            "dentro de una piña gigante", "en un museo de lunes olvidados", "en un tiovivo hecho de cucharas", "debajo de la cama de un gigante dormido",
            "dentro de un ascensor que susurraba", "en un faro en medio del desierto"
        ],
        why: [
            "porque lo decía la profecía", "cosa que nadie cuestionó", "pero solo los días impares", "por razones desconocidas",
            "mientras las paredes asentían", "porque la luna se lo dijo", "igual que en su sueño", "y los relojes contuvieron la respiración",
            "aunque era ilegal en tres dimensiones", "porque los espaguetis lo exigían", "mientras una radio lejana sonaba al revés", "mientras las sombras aplaudían",
            "porque se sentía como un jueves", "y de alguna forma tenía sentido", "mientras el suelo tarareaba", "porque las palomas estaban mirando",
            "después de un estornudo muy raro", "lo que puso nerviosos a los patos", "y el cielo parpadeó dos veces", "porque la gravedad estaba de vacaciones",
            "mientras el tiempo salía educadamente de la habitación", "lo cual lo explicaba todo y nada", "después de tomarse una sopa sospechosa", "porque el número siete insistió",
            "mientras una cabra lo juzgaba en silencio", "murmurando iykykykykyky", "porque era muy meshuggenah leh",
            "preguntándose '¿Lo sabrá?' con un CI demasiado alto y un CI demasiado bajo",
            "porque las estrellas estaban aburridas", "y los muebles aplaudieron en voz baja", "mientras los cubiertos tomaban apuntes", "porque una galleta de la fortuna lo dijo",
            "mientras la luna fingía no darse cuenta", "porque el papel pintado lo retó"
        ]
    },
    schizo: {
        act: [
            "le gritó a un semáforo hasta que se puso morado como su vecino que se puso morado", "construyó un cohete con 47 cucharas", "se peleó con una máquina expendedora", "se comió el mapa entero",
            "contrató a una cabra como abogada", "retó al sol a un concurso de miradas", "se convirtió en alcalde de un charco", "le declaró la guerra al jueves",
            "se tragó un rayo", "les enseñó a 200 patos a hacer la declaración de la renta", "se convirtió en una lámpara durante seis horas", "luchó contra una nevera y perdió",
            "le prendió fuego a una nube a propósito", "lanzó a su vecino a la órbita", "fundó una secta dedicada a un solo fideo", "le dio un puñetazo a un huracán en la cara",
            "intentó casarse con un buzón", "le vendió su propia sombra a una cabra", "se comió quince chiles y vio el futuro", "secuestró a la luna para pedir rescate",
            "inventó un color nuevo y lo arrestaron por ello", "bajó un volcán en un carrito de supermercado", "le gritó al océano por estar demasiado mojado", "entrenó un ejército de palomas furiosas",
            "construyó un castillo con paraguas robados", "mordió el cielo y el cielo le mordió de vuelta", "cavó un agujero hasta el otro lado del mundo y dijo hola", "le dio todo su almuerzo a una tormenta",
            "se peleó con un fantasma por un aparcamiento", "se coronó rey del ventilador de techo", "derritió el reloj y se lo bebió", "tuvo un duelo de espadas contra una baguette",
            "cargó con una gallina del tamaño de una casa", "intentó arrestar al viento", "empezó un motín en una biblioteca de susurros", "se coló en una boda en un sofá volador",
            "superó el límite de velocidad del tiempo", "le dio un discurso a una tostadora muy enfadada", "se teletransportó sin querer a una dimensión frita", "adoptó un dragón que solo comía tickets",
            "gritó AIGOO mientras corría por Orchard Road", "cantó triple t a las 3 de la mañana en una sinagoga", "se comió un tazón entero de [CENSURADO] y luego vomitó bilis negra", "le gritó 'I AM THE ONE WHO KNOCKS' a un desconocido",
            "entró en apagón total porque alguien interrumpió su hiperfijación",
            "cantó 'ahin sukung thai thai, sukung, ayamsukung, sampakkung' mientras bailaba alrededor de una hoguera",
            "gritó '¡amankupoh!' mientras fingía enfermedades mentales y tics delante de la cámara", "ejecutó un tirón de pantalón corto mítico delante de 500 espectadores atónitos",
            "retó a un microondas a una batalla de baile", "condujo un autobús de gelatina por un túnel de lavado", "intentó vender el océano en una web de segunda mano", "convirtió toda la ciudad en un castillo hinchable",
            "le gritó su lista de la compra a un avión que pasaba", "echó un pulso con una estatua y de verdad ganó", "entró al parlamento montado en un pato gigante", "hizo malabares con siete piñas en llamas",
            "se arrancó la cara para ver si había alguien debajo, pero solo había más {A}", "le puso la mesa a su familia, muerta hace once años, y aun así les sirvió la cena", "enterró a su perro en el patio y cada noche lo desentierra para pedirle perdón", "quemó la casa con todos sus recuerdos dentro y se quedó ahí calentándose las manos",
            "se arrancó los dientes uno por uno y los plantó, esperando que creciera algo que lo quisiera", "se cosió la boca para que los gritos por fin se quedaran dentro", "se comió la última foto de su madre para que nadie pudiera volver a quitársela", "les arrancó las alas a cien polillas y se disculpó con cada una por su nombre",
            "estranguló al narrador en sus sueños y despertó con las manos llenas de tinta", "escribió 'ayúdenme' diez mil veces en las paredes con su propia sangre y nadie lo leyó", "contó los días desde que alguien dijo su nombre y perdió la cuenta en cuarenta mil", "le sonrió a la cámara mientras algo debajo de su piel seguía moviéndose",
            "asesinó a su propia familia porque todos eran solo producto de su imaginación y él se sentía solo", "le gritó al cielo hasta que llovió sangre mezclada con trozos de carne, y se la bebió toda", "le escribió una carta a [REDACTED] pidiendo perdón y nunca la envió", "talló su propia cara en el espejo con un cuchillo, pero seguía sin ser él",
            "se sentó en un cuarto lleno de desconocidos que se parecían a él y les soltó insultos hasta que se fueron", "construyó una máquina del tiempo de cartón para volver a cuando era feliz, pero solo lo llevó a ayer", "escribió una historia sobre sí mismo que terminaba con 'y entonces despertó y se dio cuenta de que todo había sido un sueño', pero nunca despertó", "se sentó en el borde del mundo y vio la puesta de sol siete días seguidos hasta olvidar qué día era",
            "respiró hondo y se puso una pistola de airsoft sin balines en la sien", "se cortó las dos manos con una sierra circular porque no podía controlarlas", "metió la mano izquierda en una licuadora y la encendió, dejándola hecha un trozo de carne ensangrentada", "comió cadáveres podridos porque el narrador se lo dijo, y las voces también",
            "intentó apuñalarse varias veces con un cuchillo de cocina y de alguna forma no murió, pero sigue sangrando", "se arrancó los dedos a mordidas y se sacó los ojos por culpa de su propia existencia", "saltó por una ventana en algún lugar y se rompió 207 huesos",
            "intentó destriparse con las puntas de sus propios dedos", "intentó arrancarse los ojos a arañazos para no volver a ver a [REDACTED]", "se desgarró el cuello y se sacó los vasos sanguíneos hasta que solo quedó carne desollada", "se golpeó la cabeza contra la pared",
            "se quedó despierto nueve días seguidos solo para que el Hombre del Sombrero lo visitara, porque nadie más le habla desde hace años", "atropelló a una familia de cuatro con su propio coche porque eran el diablo", "se comió viva a una persona mientras gritaba de dolor", "escribió una partitura con su propia sangre hasta quedarse sin piel y sin dedos",
            "se tiró un pedo en su propio funeral y es lo único que la gente recuerda de él", "se prendió fuego hasta que su cara quedó irreconocible, pero tranquilos, se regeneró (para que pueda volver a pasar mañana)", "le cortó la cabeza a su vecino con una sierra oxidada"
        ],
        place: [
            "en medio de la autopista", "mientras estaba en llamas (un poco)", "encima de un tren a toda velocidad", "dentro de un kopitiam en llamas",
            "delante de 300 patos confundidos", "en un tribunal lleno de gansos", "en el fin del mundo", "dentro de un volcán",
            "durante una tormenta", "en un sofá volador", "en medio de un desfile de cabras", "en el fondo del océano",
            "en el centro de un tornado", "dentro de un tazón de sopa gigante", "en el techo de un autobús en marcha", "dentro de una máquina expendedora embrujada",
            "en la final de un programa de cocina", "al lado de una panadería que explotaba", "delante de todo el pueblo", "en la punta de un fideo altísimo",
            "dentro de una lavadora a máxima velocidad", "encima de un foso de cangrejos enfadados", "durante un informativo en directo", "en la fiesta de cumpleaños de un dragón",
            "en el aparcamiento del más allá", "en un festival cultural singlish-judío",
            "en el ala de un avión en pleno vuelo", "dentro de un tornado de fideos", "en medio de una tormenta eléctrica hecha de sopa", "en la cima de un rascacielos hecho de tortitas",
            "en un estadio lleno de gansos chillando", "dentro de la licuadora más enfadada del mundo",
            "en el cuarto donde guardan las versiones borradas de él", "en un hospital sin médicos, solo gritos", "en el fondo de un pozo que no tiene fondo", "en su cuarto de la infancia, ahora lleno de desconocidos que llevan su cara",
            "en una iglesia donde todas las bancas miran a la pared", "dentro de un ataúd con ventana para que pueda ver cómo todos lo olvidan",
            "en el purgatorio, porque aunque sus pecados graves quizá fueron perdonados en vida, su alma sigue aferrada al pecado, a sus defectos y a penas temporales sin pagar"
        ],
        why: [
            "Y NADIE LO DETUVO", "porque las voces dijeron que sí", "sin ningún motivo", "y la policía tiene preguntas",
            "mientras un coro de grillos gritaba su nombre", "y sinceramente eso fue solo el principio", "porque perdió una apuesta con un dragón", "y se negó a dar explicaciones",
            "lo que causó un pequeño apocalipsis", "mientras el cielo lloraba lagrimitas de sopa", "porque su horóscopo exigía caos", "y los vecinos todavía hablan de ello",
            "después de comerse algo que no debía", "y una cabra lo grabó todo", "y ahora es fiesta nacional", "mientras gritaba el abecedario al revés",
            "porque las cucharas se lo dijeron", "y el alcalde dimitió en el acto", "lo que rompió tres leyes de la física", "y luego lo volvió a hacer",
            "porque ya nada tiene sentido", "mientras mil patos graznaban en señal de aprobación", "y las noticias lo llamaron milagro", "y ahora hay una estatua suya",
            "de lo cual se arrepiente un poquito",
            "e internet nunca se recuperará", "mientras la luna le gritaba de vuelta", "porque la tostadora empezó", "y tres planetas presentaron una queja",
            "mientras una banda de música de patos tocaba con él", "y el equipo de las noticias locales se desmayó",
            "y las voces le dijeron que todavía no era suficiente", "y ya no recuerda si alguna vez fue feliz", "porque todas las versiones de él antes de esta murieron gritando", "mientras su madre miraba desde la puerta sin hacer nada",
            "y cuando despertó volvió a pasar, y otra vez, y otra vez", "y en algún lugar alguien se rió y presionó Generar", "porque se lo merecía, según la historia", "y el agujero dentro de él se hizo un poco más grande"
        ]
    },
    who: [
        "con su gato", "con el Tío Bob la nube", "con tres patos confundidos", "con su vecino", "con una cabra muy seria",
        "con Amankuh", "con su abuela", "con una cuchara parlante", "él solito", "con una multitud de palomas",
        "con su mejor amigo, la farola", "con un hombre sospechoso con gabardina", "con su gemelo malvado", "con un cocodrilo educado", "con todo el coro del colegio",
        "con una mochila llena de chuches", "con su piedra mascota", "con una gallina nerviosa", "con un dragón diminuto", "con el alcalde"
    ],
    twists: [
        "Entonces el techo empezó a hablar.", "Una gallina pasó y le hizo una reverencia.", "El suelo se convirtió en gelatina.", "En algún lugar, una tostadora lloró.",
        "Un hombrecito apareció en una taza de té y le cobró el alquiler.", "Todos olvidaron qué era el color azul.", "El wifi cobró conciencia.", "El reloj empezó a ir hacia atrás de la vergüenza.",
        "Empezó a llover hacia arriba.", "Apareció una puerta en el cielo y estaba abierta.", "Todas las palomas se giraron y lo miraron a la vez.", "La luna mandó un mensaje de texto.",
        "Nadie se dio cuenta, pero las paredes se acercaron.", "Una cabra con traje le pidió el DNI.", "El suelo estornudó.", "El tiempo se detuvo exactamente lo que dura un sándwich.",
        "Un pato muy viejo susurró un secreto y luego desapareció.", "Las escaleras se convirtieron en un tobogán.", "Todo olía a martes.", "Las sombras salieron a por un café.",
        "Pasó un desfile de cucharitas.", "El sol pidió perdón por llegar tarde.", "Una voz desde la nevera dijo: todavía no.", "El mapa de la pared empezó a sangrar fideos.",
        "En algún lugar, un volcán eructó.", "Todos los vecinos se convirtieron en sillas.", "Un cuervo entregó una notificación legal.", "La lluvia pidió un reembolso.",
        "De repente se sabía el nombre de cada paloma del pueblo.", "La gravedad se tomó un pequeño descanso.",
        "Alguien gritó triple t en medio de un concierto de K-pop.",
        "Una voz preguntó en voz alta: '¿Adivinen quién ha vuelto? ¿Otra vez Akiong?'",
        "El pingüino cobró vida y se fue directo a las montañas.",
        "Apareció un pájaro zaza salvaje y empezó a hacer infodump sobre [CENSURADO].",
        "¡Tú eras el Akiong de Bay Harbor!",
        "Un gato empezó a narrar la historia.", "Todos los relojes del pueblo se echaron a reír.", "El cielo cambió su fondo de pantalla.", "Una nube le pidió un autógrafo.",
        "Los semáforos formaron una banda.", "Sus zapatos se fueron caminando sin él.", "Un ganso exigió hablar con el encargado.", "Internet se quedó en silencio durante exactamente un segundo."
    ],
    sounds: [
        "*BUM*", "*plaf*", "*pi pi*", "*boing*", "*slurp*", "*¡ding!*", "*chan chan CHAAAN*", "*grito Wilhelm*", "*pedo*", "*gritos de perdición y desesperación*",
        "*cuac*", "*ruido de grillos*", "*kabum*", "*resoplido*", "*bonk*", "*¿miau?*", "*sirenas a lo lejos*", "*¡oy vey!*", "*¡walao!*", "*¡sukung!*", "*¡sampakkung!*", "*plaf plaf plaf*",
        "*chirrido*", "*clanc*", "*fiuuu*", "*pum*", "*plin plin*", "*chisporroteo*", "*¡pop!*", "*resoplido de cerdo*", "*gruñido*", "*pío pío*", "*ruidos humanos*",
        "*din don*", "*brum brum*", "*¡kaching!*", "*blup*", "*crunch*", "*ejem*"
    ],
    titleStart: [
        "Akiong", "La Leyenda de Akiong", "El Día que Akiong Conoció", "Akiong Contra",
        "El Diario Secreto de Akiong", "Por Qué Akiong Le Tiene Miedo", "El Regreso de Akiong", "Akiong Se Hace Amigo sin Querer",
        "La Historia Jamás Contada de Akiong", "Akiong Nunca Perdonará", "Cómo Akiong Derrotó", "Akiong y la Maldición",
        "La Leyenda de Yuno Ball", "Akiong y el Misterio", "Las Aventuras de Akiong", "Akiong y el Ascenso",
        "Akiong Está Embrujado", "El Último Baile de Akiong", "Akiong Huye", "Akiong Se Va de Vacaciones"
    ],
    titleEnd: [
        "La Tostadora Embrujada", "Las Palomas Furiosas", "La Profecía de los Fideos", "El Kopitiam al Revés",
        "El Volcán Educado", "La Sopa Sospechosa", "La Cabra Abogada", "El Martes Desaparecido",
        "El Sofá Volador", "El Ejército de Cucharas", "La Luna en un Frasco", "La Nevera Parlante",
        "Los Mil Patos", "El Dragón de los Tickets", "El Cajón de los Calcetines", "La Tostadora Muy Enfadada", "La Leyenda de Yuno Ball", "La Expedición del Pájaro Zaza", "El Tirón de Pantalón Corto Mítico",
        "El Autobús de Gelatina", "El Microondas Bailarín", "El Cocodrilo Educado", "Las Piñas en Llamas"
    ]
};

// ----- Русский (the big russia) -----
STORY.ru = {
    grammar: { name: "Акионг", first: "Акионг", order: ["S", "A", "W", "P"], gap: " ", comma: ", ", end: ".", loud: "!!!", sep: " ", titleJoin: ": " },
    start: [
        "Потом Акионг", "После этого Акионг", "Внезапно Акионг", "Позже Акионг", "Тем временем Акионг",
        "Без предупреждения Акионг", "Откуда ни возьмись Акионг", "На следующее утро Акионг", "В полночь Акионг", "Как раз в этот момент Акионг",
        "Через мгновение Акионг", "Годы спустя Акионг", "По какой-то причине Акионг", "Пока никто не заметил, Акионг", "Вопреки всем советам Акионг",
        "В самый обычный вторник Акионг", "Не думая ни секунды, Акионг", "Сразу после обеда Акионг", "Из чистого любопытства Акионг", "Никто не знает почему, но Акионг",
        "Вскоре после этого Акионг", "Совершенно неожиданно Акионг", "С огромной уверенностью Акионг", "Ни у кого не спросив, Акионг", "Случайно Акионг",
        "Точно по расписанию Акионг"
    ],
    normal: {
        act: [
            "сходил на рынок", "съел большую миску лапши", "долго поспал днём", "выгулял собаку вокруг квартала",
            "посмотрел новости", "починил свой старый велосипед", "купил пакет апельсинов", "ждал автобус",
            "приготовил жареный рис", "выпил горячего копи", "почитал газету", "помыл машину",
            "покрасил забор", "подмёл пол", "позвонил маме", "покормил рыбок",
            "сложил бельё", "пересчитал свои монетки", "поиграл в карты с друзьями", "полил цветы",
            "послушал радио", "помыл окно", "съел тост с кайей", "посидел на крыльце", "уворачивался от вопросов, как Джордж Буш от того ботинка",
            "объяснил растерянному кассиру свои элитные познания в мячах",
            "медленно завязал шнурки", "одолжил стремянку", "сходил на пробежку", "помахал соседу", "инфодампил шестьдесят семь часов подряд",
            "купил лотерейные билеты", "починил вентилятор", "заварил себе чашку чая", "подстриг кусты", "заказал копи-о косонг как настоящий сингапурский дядюшка", "хлебал рамён, смотря на оппу из дорамы",
            "расставил специи по алфавиту", "подпёр шатающийся стол сложенным чеком", "съел тарелку наси лемак", "поругался с пультом от телевизора",
            "отвёз свой скутер на мойку", "купил новые тапочки", "отстоял очередь за знаменитым рисом с курицей", "сыграл в шахматы с дедушкой из соседней квартиры"
        ],
        place: [
            "возле старого рынка", "за копитиамом", "под большим деревом", "на автобусной остановке",
            "у своего дома", "в парке", "рядом с почтой", "у реки",
            "на детской площадке", "на кухне", "на балконе", "в конце улицы", "в Newton Food Centre sia", "в круглосуточном магазине в Каннаме", "возле местной синагоги",
            "в храме", "возле школы", "в саду", "на ночном рынке",
            "у шоссе", "в гостиной", "в парикмахерской", "на крыше",
            "в хокер-центре", "в очереди в супермаркете", "на вокзале", "на скамейке в парке", "в прачечной", "у ларька мамак"
        ],
        why: [
            "потому что ему было скучно", "потому что был понедельник", "потому что больше никто не хотел", "раз уж погода была хорошая",
            "потому что у него болела спина", "потому что обещал жене", "после очень длинного дня", "пока не начался дождь",
            "хотя он и устал", "как и каждое утро", "потому что холодильник был пуст", "напевая старую песню",
            "проиграв спор", "раз уж это было дёшево", "потому что магазин закрывался", "чтобы сэкономить немного денег", "и всё было amankuh и amankupoh", "чтобы его не назвали kiapu", "потому что скидки daebak не ждут lah", "дай мне приготовить lah",
            "потому что сосед попросил", "пока садилось солнце", "грызя арахис", "потому что это была традиция",
            "потому что телевизор сломался", "раз уж заняться было нечем", "потому что у него сел телефон", "после дневного кофе", "потому что радио сказало ему расслабиться", "пока ждал, когда остынет чай"
        ]
    },
    weird: {
        act: [
            "поговорил с голубем", "встречался с фурри-геем", "открыл дверь внутри своего холодильника", "научил свою тень танцевать", "продавал невидимые зонтики",
            "спросил у луны дорогу", "усыновил облако и назвал его Дядя Боб", "надел два левых ботинка", "узнал, что все вторники распроданы",
            "вступил в тайный клуб шептунов лифтам", "обменял свой голос на бутерброд", "посадил часы и стал ждать, пока вырастет время", "взял интервью у лужи",
            "выучил язык дверных ручек в совершенстве", "одолжил пару снов", "покрасил ветер в синий", "научил улитку водить машину",
            "отправил себе письмо из будущего", "собрал группу из семи ложек", "заблудился в собственном ящике для носков", "спорил с зеркалом о том, кто старше",
            "нашёл лестницу, ведущую в среду", "стал лучшим другом фонарного столба", "держал крошечную луну в банке", "купил билет в никуда",
            "научил дождь вежливо стучаться", "носил ведро эха", "встретил рыбу, которая продавала страховки", "сложил горизонт в бумажный кораблик",
            "вырастил сад из крошечных зонтиков", "услышал, как диван шепчет его имя", "обменял левый носок на слух", "устроил чаепитие для своих теней",
            "поставил штамп в паспорт чихом", "научил лестницу петь", "нашёл карту собственного лба", "поспал внутри радуги",
            "тихо поспорил с числом семь", "написал стихотворение на банане", "убедил облако стать адвокатом", "нанял призрака стирать ему бельё",
            "пообщался с Yuno Ball на чистом синглиш-идише", "крикнул oy vey lah спящему ребёнку",
            "протащил огромную миску ттокпокки через границу", "без причины тренировался свистеть очень высоко",
            "поспорил о философии с Сетаркосом (злым близнецом Сократа)",
            "подружился с пингвином, который ожил и ушёл в горы, чтобы стать птицей зазой",
            "прочитал рассказ под названием «Пользователь твиттера выпил снежный шар. Вот как эму стал пухленьким.»",
            "посмотрел «Everybody ate Chris TWD» на стриме",
            "сказал зарейдженному зрителю в чате, что это braingrow, а не brainrot",
            "встретил Эллисон Бёргерс и спросил: «он что, сказал, что его фамилия бургер?»",
            "заявил: «вообще-то я ничего не видел, у меня левый глаз на 43 % слепой, а правый полностью»",
            "сошёл с ума и сказал: «ПРОСТИТЕ, ОН СЕЙЧАС СКАЗАЛ, ЧТО ЕГО ФАМИЛИЯ БЁРГЕРС?»",
            "осознал себя и начал ломать четвёртую стену",
            "никогда не гунит, а иначе он будет охотиться на тебя с моими миньонами",
            "сказал ambatukam и ambatublo во время сердечного приступа",
            "сказал «I AM THE ONE WHO KNOCKS» и постучал в дверь незнакомца",
            "сказал «Я СОРВАЛ ДЖЕКПОТ» и правда сорвал джекпот в казино",
            "научил кактус обниматься", "открыл пекарню, которая продавала только вчерашний день", "поиграл в прятки со своим отражением", "выиграл в гляделки у картины",
            "связал шарф для луны", "сдавал свою тень в аренду по выходным", "попросил у чайника жизненного совета", "построил замок из песка на облаке"
        ],
        place: [
            "в очень маленьком лифте", "на спине спящего кита", "под парящим столом", "в комнате без углов",
            "рядом с говорящим холодильником", "посреди тихой бури", "на мосту из лапши", "внутри мыльного пузыря",
            "на автобусной остановке, которой не было", "в библиотеке потерянных носков", "за дверью, которая всё время двигалась", "на потолке",
            "в поле перевёрнутых деревьев", "в кафе, которым управляли вороны", "в перевёрнутом копитиаме", "на лестнице, которая шла вбок",
            "внутри гигантской чашки", "в городе, где всегда было 3 часа ночи", "на краю ковра", "рядом с очень вежливым вулканом",
            "внутри снежного шара", "в поезде из сыра", "в коридоре, который пах грозой", "на облаке в форме его дяди",
            "в пруду из молока", "в аду",
            "в Marina Bay Sands в поисках Yuno Ball", "в ретро-аркаде за играми #RetroSlop",
            "там, где Иерусалим вон там, а все дороги ведут в Рим",
            "внутри гигантского ананаса", "в музее забытых понедельников", "на карусели из ложек", "под кроватью спящего великана",
            "внутри шепчущего лифта", "в маяке посреди пустыни"
        ],
        why: [
            "потому что так гласило пророчество", "и никто не задавал вопросов", "но только по нечётным дням", "по неизвестным причинам",
            "пока стены одобрительно кивали", "потому что луна так велела", "прямо как во сне", "и часы затаили дыхание",
            "хотя это было незаконно в трёх измерениях", "потому что этого требовали спагетти", "пока далёкое радио играло задом наперёд", "под аплодисменты теней",
            "потому что это ощущалось как четверг", "и почему-то это имело смысл", "пока пол напевал", "потому что голуби смотрели",
            "после очень странного чиха", "отчего утки занервничали", "и небо моргнуло дважды", "потому что гравитация была в отпуске",
            "пока время вежливо выходило из комнаты", "что объясняло всё и ничего", "выпив подозрительного супа", "потому что число семь настаивало",
            "пока козёл молча его осуждал", "бормоча iykykykykyky себе под нос", "потому что это было так meshuggenah leh",
            "думая «А он знает?» с IQ одновременно слишком высоким и слишком низким",
            "потому что звёздам было скучно", "и мебель тихонько аплодировала", "пока столовые приборы конспектировали", "потому что так сказало печенье с предсказанием",
            "пока луна делала вид, что ничего не замечает", "потому что обои взяли его на слабо"
        ]
    },
    schizo: {
        act: [
            "орал на светофор, пока тот не стал фиолетовым, как его сосед, который стал фиолетовым", "построил ракету из 47 ложек", "подрался с торговым автоматом", "съел всю карту",
            "нанял козла своим адвокатом", "вызвал солнце на гляделки", "стал мэром лужи", "объявил войну четвергу",
            "проглотил молнию", "научил 200 уток заполнять налоговую декларацию", "превратился в лампу на шесть часов", "поборолся с холодильником и проиграл",
            "специально поджёг облако", "запустил соседа на орбиту", "основал культ одной-единственной лапшинки", "ударил ураган кулаком в лицо",
            "попытался жениться на почтовом ящике", "продал свою тень козлу", "съел пятнадцать перцев чили и увидел будущее", "похитил луну ради выкупа",
            "изобрёл новый цвет и был за это арестован", "скатился с вулкана на тележке из супермаркета", "наорал на океан за то, что тот слишком мокрый", "натренировал армию злых голубей",
            "построил замок из украденных зонтиков", "укусил небо, и небо укусило в ответ", "выкопал яму на другую сторону Земли и сказал привет", "скормил грозе весь свой обед",
            "подрался с призраком за парковочное место", "короновал себя королём потолочного вентилятора", "расплавил часы и выпил их", "сразился на мечах с багетом",
            "таскал курицу размером с дом", "пытался арестовать ветер", "устроил бунт в библиотеке шёпота", "ворвался на свадьбу на летающем диване",
            "превысил скорость времени", "произнёс речь перед очень злым тостером", "случайно телепортировался в жареное измерение", "усыновил дракона, который ел только чеки",
            "кричал АЙГУ, бегая по Orchard Road", "скандировал triple t в 3 часа ночи в синагоге", "съел целую миску [ЦЕНЗУРА] и потом его стошнило чёрной желчью", "заорал «I AM THE ONE WHO KNOCKS» на незнакомца",
            "полностью отключился, потому что кто-то прервал его гиперфиксацию",
            "распевал «ahin sukung thai thai, sukung, ayamsukung, sampakkung», танцуя вокруг костра",
            "орал «amankupoh!», изображая на камеру психические расстройства и тики", "исполнил мифический рывок шорт перед 500 ошарашенными зрителями",
            "вызвал микроволновку на танцевальный баттл", "проехал на автобусе из желе через автомойку", "попытался продать океан на Авито", "превратил весь город в батут",
            "прокричал свой список покупок пролетающему самолёту", "армрестлил со статуей и правда победил", "въехал в парламент верхом на гигантской утке", "жонглировал семью горящими ананасами",
            "содрал с себя лицо, чтобы посмотреть, есть ли под ним кто-нибудь, но там был только ещё один {A}", "накрыл на стол для своей семьи, умершей одиннадцать лет назад, и всё равно подал им ужин", "похоронил свою собаку во дворе и каждую ночь выкапывает её, чтобы попросить прощения", "сжёг дом со всеми своими воспоминаниями внутри и грел перед ним руки",
            "вырвал себе зубы один за другим и посадил их, надеясь, что вырастет что-то, что будет его любить", "зашил себе рот, чтобы крик наконец остался внутри", "съел последнюю фотографию своей мамы, чтобы никто больше не смог её забрать", "оборвал крылья сотне мотыльков и извинился перед каждым по имени",
            "задушил рассказчика во сне и проснулся с чернилами на руках", "написал «помогите» десять тысяч раз на стенах собственной кровью, и никто этого не прочитал", "считал дни с тех пор, как кто-то произносил его имя, и сбился со счёта на сорока тысячах", "улыбался в камеру, пока что-то под его кожей продолжало шевелиться",
            "убил собственную семью, потому что все они были лишь плодом его воображения, а ему было одиноко", "орал на небо, пока не пошёл дождь из крови с кусками мяса, и выпил его весь", "написал письмо [REDACTED] с просьбой о прощении и так его и не отправил", "вырезал ножом своё лицо на зеркале, но это всё равно был не он",
            "сидел в комнате, полной незнакомцев, похожих на него, и осыпал их оскорблениями, пока они не ушли", "построил машину времени из картона, чтобы вернуться туда, где он был счастлив, но она перенесла его только во вчера", "написал о себе историю, которая заканчивалась словами «и тут он проснулся и понял, что всё это был сон», но он так и не проснулся", "сидел на краю света и смотрел на закат семь дней подряд, пока не забыл, какой сегодня день",
            "глубоко вдохнул и приставил к виску страйкбольный пистолет без шариков", "отпилил себе обе руки циркулярной пилой, потому что не мог их контролировать", "засунул левую руку в блендер и включил его, превратив её в кровавый кусок мяса", "ел гниющие трупы, потому что так сказал рассказчик, и голоса тоже",
            "несколько раз пытался заколоть себя кухонным ножом и почему-то не умер, но до сих пор истекает кровью", "откусил себе пальцы и выколол себе глаза из-за собственного существования", "выпрыгнул откуда-то из окна и сломал 207 костей",
            "пытался выпотрошить себя кончиками собственных пальцев", "пытался выцарапать себе глазные яблоки, чтобы больше никогда не видеть [REDACTED]", "разорвал себе шею и вытягивал кровеносные сосуды, пока не осталось одно ободранное мясо", "бился головой об стену",
            "не спал девять дней подряд, только чтобы к нему пришёл Человек в шляпе, потому что больше никто не разговаривает с ним уже много лет", "переехал на своей машине семью из четырёх человек, потому что они были дьяволом", "съел человека заживо, пока тот кричал от боли", "писал партитуру собственной кровью, пока не остался без кожи и без пальцев",
            "пёрнул на собственных похоронах, и это единственное, что о нём все запомнили", "поджёг себя и горел, пока его лицо не стало неузнаваемым, но не волнуйтесь, он регенерировал (чтобы завтра это могло повториться)", "отпилил голову своему соседу ржавой пилой"
        ],
        place: [
            "посреди шоссе", "слегка горя", "на крыше несущегося поезда", "в горящем копитиаме",
            "перед 300 растерянными утками", "в зале суда, полном гусей", "на краю света", "внутри вулкана",
            "во время грозы", "на летающем диване", "посреди парада козлов", "на дне океана",
            "в центре торнадо", "в гигантской миске супа", "на крыше едущего автобуса", "в торговом автомате с привидениями",
            "в финале кулинарного шоу", "рядом со взрывающейся пекарней", "на глазах у всего города", "на вершине очень высокой лапшинки",
            "в стиральной машине на полной скорости", "над ямой со злыми крабами", "во время прямого эфира новостей", "на дне рождения дракона",
            "на парковке загробного мира", "на синглиш-еврейском культурном фестивале",
            "на крыле летящего самолёта", "внутри торнадо из лапши", "посреди грозы из супа", "на вершине небоскрёба из блинов",
            "на стадионе, полном орущих гусей", "в самом злом блендере в мире",
            "в комнате, где хранят его удалённые версии", "в больнице без врачей, где есть только крики", "на дне колодца, у которого нет дна", "в своей детской комнате, которая теперь полна незнакомцев с его лицом",
            "в церкви, где все скамьи повёрнуты к стене", "в гробу с окошком, чтобы он видел, как все его забывают",
            "в чистилище, потому что его тяжкие грехи, возможно, были прощены при жизни, но душа всё ещё цепляется за грех, свои пороки и неоплаченные временные наказания"
        ],
        why: [
            "И НИКТО ЕГО НЕ ОСТАНОВИЛ", "потому что голоса сказали да", "абсолютно без причины", "и у полиции есть вопросы",
            "пока хор сверчков выкрикивал его имя", "и честно говоря это было только начало", "потому что проиграл спор дракону", "и отказался что-либо объяснять",
            "что вызвало небольшой апокалипсис", "пока небо плакало крошечными слезами из супа", "потому что гороскоп требовал хаоса", "и соседи до сих пор это обсуждают",
            "съев то, что не следовало", "и козёл всё снял на видео", "и теперь это государственный праздник", "выкрикивая алфавит задом наперёд",
            "потому что так сказали ложки", "и мэр немедленно ушёл в отставку", "что нарушило три закона физики", "а потом сделал это снова",
            "потому что больше ничего не имеет смысла", "пока тысяча уток одобрительно крякала", "и новости назвали это чудом", "и теперь у него есть памятник",
            "о чём он слегка жалеет",
            "и интернет никогда не оправится", "пока луна орала в ответ", "потому что тостер первый начал", "и три планеты подали жалобу",
            "пока утиный оркестр ему подыгрывал", "и съёмочная группа местных новостей упала в обморок",
            "и голоса сказали ему, что этого всё ещё мало", "и он не помнит, был ли он когда-нибудь счастлив", "потому что все его версии до этой умерли с криком", "пока его мама смотрела из дверей и ничего не делала",
            "а когда он проснулся, всё повторилось, и снова, и снова", "и где-то кто-то засмеялся и нажал «Сгенерировать»", "потому что он это заслужил, так сказала история", "и дыра внутри него стала чуть больше"
        ]
    },
    who: [
        "со своим котом", "с облаком Дядей Бобом", "с тремя растерянными утками", "с соседом", "с очень серьёзным козлом",
        "с Аманкухом", "с бабушкой", "с говорящей ложкой", "совсем один", "с толпой голубей",
        "со своим лучшим другом фонарным столбом", "с подозрительным мужчиной в плаще", "со своим злым близнецом", "с вежливым крокодилом", "со всем школьным хором",
        "с рюкзаком, полным вкусняшек", "со своим питомцем-камнем", "с нервной курицей", "с крошечным драконом", "с мэром"
    ],
    twists: [
        "Тогда потолок заговорил.", "Мимо прошла курица и поклонилась.", "Пол превратился в желе.", "Где-то заплакал тостер.",
        "В чашке появился крошечный человечек и потребовал арендную плату.", "Все забыли, что такое синий цвет.", "Вай-фай обрёл сознание.", "Часы от стыда пошли назад.",
        "Дождь пошёл вверх.", "В небе появилась дверь, и она была открыта.", "Все голуби одновременно повернулись и посмотрели на него.", "Луна прислала сообщение.",
        "Никто не заметил, но стены стали ближе.", "Козёл в костюме попросил показать паспорт.", "Земля чихнула.", "Время остановилось ровно на один бутерброд.",
        "Очень старая утка прошептала секрет и исчезла.", "Лестница превратилась в горку.", "Всё пахло вторником.", "Тени ушли за кофе.",
        "Мимо промаршировал парад крошечных ложек.", "Солнце извинилось за опоздание.", "Голос из холодильника сказал: ещё не время.", "Карта на стене начала кровоточить лапшой.",
        "Где-то рыгнул вулкан.", "Все соседи превратились в стулья.", "Ворона доставила судебное уведомление.", "Дождь потребовал вернуть деньги.",
        "Он вдруг узнал имя каждого голубя в городе.", "Гравитация взяла короткий перерыв.",
        "Кто-то крикнул triple t посреди K-pop концерта.",
        "Чей-то голос громко спросил: «Угадайте, кто вернулся? Снова Акионг?»",
        "Пингвин ожил и отправился прямиком в горы.",
        "Появилась дикая птица заза и начала инфодампить про [ЦЕНЗУРА].",
        "Ты и был Акионгом из Бэй-Харбора!",
        "Кот начал озвучивать эту историю.", "Все часы в городе начали смеяться.", "Небо сменило обои.", "Облако попросило у него автограф.",
        "Светофоры собрали группу.", "Его ботинки ушли без него.", "Гусь потребовал позвать менеджера.", "Интернет замолчал ровно на одну секунду."
    ],
    sounds: [
        "*БУМ*", "*шлёп*", "*би-бип*", "*боинг*", "*хлюп*", "*дзынь!*", "*дун дун ДУННН*", "*крик Вильгельма*", "*пук*", "*вопли гибели и отчаяния*",
        "*кря*", "*стрёкот сверчков*", "*бабах*", "*хрип*", "*бонк*", "*мяу?*", "*сирены вдалеке*", "*oy vey!*", "*walao!*", "*sukung!*", "*sampakkung!*", "*шлёп шлёп шлёп*",
        "*визг*", "*лязг*", "*вжух*", "*бух*", "*дзынь дзынь*", "*шкворчание*", "*поп!*", "*хрюк*", "*ворчание*", "*чик-чирик*", "*человеческие звуки*",
        "*динь-дон*", "*врум врум*", "*кач-инг!*", "*бульк*", "*хрум*", "*кхм*"
    ],
    titleStart: [
        "Акионг", "Легенда об Акионге", "День, когда Акионг встретил", "Акионг против",
        "Тайный дневник Акионга", "Чего боится Акионг", "Возвращение Акионга", "Акионг случайно подружился",
        "Нерассказанная история Акионга", "Акионг никогда не простит", "Как Акионг победил", "Акионг и проклятие",
        "Легенда Yuno Ball", "Акионг и тайна", "Приключения Акионга", "Акионг и восход",
        "Акионга преследует", "Последний танец Акионга", "Акионг убегает", "Акионг едет в отпуск"
    ],
    titleEnd: [
        "Тостер с привидениями", "Злые голуби", "Лапшичное пророчество", "Перевёрнутый копитиам",
        "Вежливый вулкан", "Подозрительный суп", "Козёл-адвокат", "Пропавший вторник",
        "Летающий диван", "Армия ложек", "Луна в банке", "Говорящий холодильник",
        "Тысяча уток", "Чековый дракон", "Ящик для носков", "Очень злой тостер", "Легенда Yuno Ball", "Экспедиция птицы зазы", "Мифический рывок шорт",
        "Желейный автобус", "Танцующая микроволновка", "Вежливый крокодил", "Горящие ананасы"
    ]
};

// ----- Tagalog (Filipino) -----
STORY.tl = {
    grammar: { name: "Akiong", first: "Isang araw,", order: ["S", "A", "W", "P"], gap: " ", comma: ", ", end: ".", loud: "!!!", sep: " ", titleJoin: ": " },
    start: [
        "Tapos,", "Pagkatapos noon,", "Bigla na lang,", "Kinalaunan,", "Samantala,",
        "Nang walang babala,", "Out of nowhere,", "Kinabukasan ng umaga,", "Pagsapit ng hatinggabi,", "Saktong sa sandaling iyon,",
        "Ilang saglit pa,", "Makalipas ang ilang taon,", "Sa hindi malamang dahilan,", "Bago pa may nakapansin,", "Kahit sinabihan na siya,",
        "Isang random na Martes,", "Nang hindi nag-iisip,", "Pagkatapos na pagkatapos mananghalian,", "Dahil sa sobrang kuryosidad,", "Walang nakakaalam kung bakit, pero",
        "Hindi nagtagal,", "Sa nakakagulat na pangyayari,", "Nang buong kumpiyansa,", "Nang hindi nagpapaalam kahit kanino,", "Nang hindi sinasadya,",
        "Sakto sa schedule,"
    ],
    normal: {
        act: [
            "pumunta si {A} sa palengke", "kumain si {A} ng isang malaking mangkok ng pansit", "natulog si {A} nang matagal", "inilakad ni {A} ang aso niya sa paligid ng block",
            "nanood si {A} ng balita", "inayos ni {A} ang luma niyang bisikleta", "bumili si {A} ng isang supot ng dalandan", "naghintay si {A} ng bus",
            "nagluto si {A} ng sinangag", "uminom si {A} ng mainit na kopi", "nagbasa si {A} ng diyaryo", "hinugasan ni {A} ang kotse niya",
            "pininturahan ni {A} ang bakod", "nagwalis si {A} ng sahig", "tinawagan ni {A} ang nanay niya", "pinakain ni {A} ang mga isda",
            "tinupi ni {A} ang mga labada", "binilang ni {A} ang mga barya niya", "nag-baraha si {A} kasama ang barkada niya", "diniligan ni {A} ang mga halaman",
            "nakinig si {A} sa radyo", "nilinis ni {A} ang bintana", "kumain si {A} ng tinapay na may kaya", "umupo si {A} sa beranda", "umiwas si {A} sa mga tanong gaya ng pag-iwas ni George W. Bush sa sapatos na 'yon",
            "ipinaliwanag ni {A} ang elite ball knowledge niya sa nalilitong kahera",
            "dahan-dahang tinali ni {A} ang sintas niya", "nanghiram si {A} ng hagdan", "nag-jogging si {A}", "kumaway si {A} sa kapitbahay", "nag-infodump si {A} nang animnapu't pitong oras nang tuloy-tuloy",
            "bumili si {A} ng ticket sa lotto", "kinumpuni ni {A} ang electric fan", "nagtimpla si {A} ng isang tasang tsaa", "ginupit ni {A} ang mga halamang bakod", "nag-order si {A} ng kopi-o kosong na parang tunay na Singaporean uncle", "humigop si {A} ng ramyeon habang nanonood ng K-drama oppa",
            "inayos ni {A} ang lalagyan ng pampalasa ayon sa alpabeto", "inayos ni {A} ang umuugang mesa gamit ang tiniklop na resibo", "kumain si {A} ng isang platong nasi lemak", "nakipagtalo si {A} sa remote ng TV",
            "pinahugasan ni {A} ang scooter niya", "bumili si {A} ng bagong tsinelas", "pumila si {A} para sa sikat na chicken rice", "nakipag-chess si {A} sa matandang kapitbahay"
        ],
        place: [
            "malapit sa lumang palengke", "sa likod ng kopitiam", "sa ilalim ng malaking puno", "sa babaan ng bus",
            "sa labas ng bahay niya", "sa parke", "sa tabi ng post office", "sa may ilog",
            "sa palaruan", "sa kusina", "sa balkonahe", "sa dulo ng kalye", "sa Newton Food Centre sia", "sa loob ng isang convenience store sa Gangnam", "malapit sa sinagoga sa lugar",
            "sa templo", "malapit sa eskuwelahan", "sa hardin", "sa night market",
            "sa tabi ng highway", "sa sala", "sa barberya", "sa bubong",
            "sa hawker centre", "sa pila sa supermarket", "sa istasyon ng tren", "sa isang bangko sa parke", "sa labahan", "sa labas ng mamak stall"
        ],
        why: [
            "kasi nabo-bored siya", "kasi Lunes noon", "kasi walang ibang gustong gumawa", "dahil maganda ang panahon",
            "kasi masakit ang likod niya", "kasi nangako siya sa asawa niya", "pagkatapos ng sobrang habang araw", "bago pa umulan",
            "kahit pagod siya", "gaya ng tuwing umaga", "kasi walang laman ang ref", "habang humihimig ng lumang kanta",
            "pagkatapos matalo sa pustahan", "kasi mura", "kasi magsasara na ang tindahan", "para makatipid", "at lahat ay amankuh at amankupoh", "para hindi masabing kiapu", "kasi hindi naghihintay ang daebak na sale lah", "lemme cook lah",
            "kasi nakiusap ang kapitbahay niya", "habang lumulubog ang araw", "habang kumakain ng mani", "kasi tradisyon na",
            "kasi sira ang TV", "kasi wala naman siyang ibang magawa", "kasi lowbat ang cellphone niya", "pagkatapos ng kape niya sa hapon", "kasi sinabi ng radyo na mag-relax siya", "habang hinihintay lumamig ang tsaa niya"
        ]
    },
    weird: {
        act: [
            "nakipag-usap si {A} sa isang kalapati", "nagkaroon si {A} ng gay furry na boyfriend", "nagbukas si {A} ng pinto sa loob ng ref niya", "tinuruan ni {A} ang anino niya na sumayaw", "nagbenta si {A} ng mga invisible na payong",
            "nagtanong si {A} ng direksyon sa buwan", "umampon si {A} ng ulap at pinangalanan itong Tito Bob", "nagsuot si {A} ng dalawang kaliwang sapatos", "nalaman ni {A} na sold out na ang mga Martes",
            "sumali si {A} sa sikretong samahan ng mga bumubulong sa elevator", "ipinagpalit ni {A} ang boses niya sa isang sandwich", "nagtanim si {A} ng orasan at hinintay na tumubo ang oras", "ininterview ni {A} ang isang lusak",
            "natuto si {A} magsalita ng fluent na wikang doorknob", "nanghiram si {A} ng isang pares ng panaginip", "pininturahan ni {A} ng asul ang hangin", "tinuruan ni {A} ang isang suso na magmaneho",
            "nagpadala si {A} ng sulat sa sarili niya mula sa hinaharap", "nagtayo si {A} ng banda kasama ang pitong kutsara", "naligaw si {A} sa sarili niyang lalagyan ng medyas", "nakipagtalo si {A} sa salamin kung sino ang mas matanda",
            "nakahanap si {A} ng hagdan papuntang Miyerkules", "naging best friend ni {A} ang isang poste ng ilaw", "nag-alaga si {A} ng maliit na buwan sa loob ng garapon", "bumili si {A} ng ticket papunta sa kawalan",
            "tinuruan ni {A} ang ulan na kumatok nang magalang", "nagbitbit si {A} ng isang baldeng alingawngaw", "nakilala ni {A} ang isang isdang nagbebenta ng insurance", "tiniklop ni {A} ang abot-tanaw para gawing bangkang papel",
            "nagtanim si {A} ng hardin ng maliliit na payong", "narinig ni {A} na ibinubulong ng sofa ang pangalan niya", "ipinagpalit ni {A} ang kaliwang medyas sa isang tsismis", "nagdaos si {A} ng tea party para sa mga anino niya",
            "tinatakan ni {A} ang passport niya gamit ang bahing", "tinuruan ni {A} ang hagdan kung paano kumanta", "nakahanap si {A} ng mapa ng sarili niyang noo", "umidlip si {A} sa loob ng bahaghari",
            "tahimik na nakipagtalo si {A} sa numerong pito", "sumulat si {A} ng tula sa saging", "kinumbinsi ni {A} ang isang ulap na maging abogado", "kumuha si {A} ng multo para maglaba ng damit niya",
            "nakipag-usap si {A} kay Yuno Ball sa purong Singlish-Jewish na script", "sinigawan ni {A} ng oy vey lah ang isang natutulog na bata",
            "kinaladkad ni {A} ang isang napakalaking mangkok ng tteokbokki papunta sa kabilang border", "nag-practice si {A} ng matinis na pagsipol nang walang dahilan",
            "nakipagdebate si {A} tungkol sa pilosopiya kay Setarcos (ang masamang kambal ni Socrates)",
            "naging kaibigan ni {A} ang penguin na nabuhay at umakyat sa bundok para maging zaza bird",
            "nagbasa si {A} ng kuwentong may pamagat na 'Isang twitter user ang uminom ng snowglobe. Ganito tumaba ang isang emu.'",
            "pinanood ni {A} ang 'Everybody ate Chris TWD' sa livestream",
            "sinabihan ni {A} ang isang na-ragebait na chatter na braingrow ito hindi brainrot",
            "nakilala ni {A} si Allison Burgers at nagtanong 'sinabi ba niyang burger ang apelyido niya?'",
            "idineklara ni {A} 'sa totoo lang wala akong nakita, 43% bulag ang kaliwang mata ko at bulag na bulag ang kanan'",
            "nabaliw si {A} at sumigaw 'TEKA SINABI BA NIYANG BURGERS ANG APELYIDO NIYA'",
            "nagkamalay si {A} at nagsimulang basagin ang 4th wall",
            "hindi kailanman nag-goon si {A}, kundi hahabulin ka niya kasama ang mga minion ko",
            "sinabi ni {A} ang ambatukam at ambatublo habang inaatake sa puso",
            "sinabi ni {A} 'I AM THE ONE WHO KNOCKS' tapos kumatok sa pinto ng isang estranghero",
            "sinabi ni {A} 'NAKA-JACKPOT AKO' tapos totoong naka-jackpot sa casino",
            "tinuruan ni {A} ang isang cactus na yumakap", "nagbukas si {A} ng panaderyang kahapon lang ang binebenta", "nakipagtaguan si {A} sa sarili niyang repleksyon", "nanalo si {A} sa titigan laban sa isang painting",
            "ginantsilyuhan ni {A} ng bandana ang buwan", "pinarentahan ni {A} ang anino niya tuwing weekend", "humingi si {A} ng payo sa buhay sa isang tsarera", "gumawa si {A} ng sandcastle sa ibabaw ng ulap"
        ],
        place: [
            "sa loob ng napakaliit na elevator", "sa ibabaw ng natutulog na balyena", "sa ilalim ng lumulutang na mesa", "sa kuwartong walang sulok",
            "sa tabi ng nagsasalitang ref", "sa gitna ng tahimik na bagyo", "sa tulay na gawa sa pansit", "sa loob ng bula",
            "sa babaan ng bus na wala naman talaga", "sa aklatan ng mga nawawalang medyas", "sa likod ng pintong palipat-lipat", "sa kisame",
            "sa bukid ng mga baligtad na puno", "sa café na pinapatakbo ng mga uwak", "sa baligtad na kopitiam", "sa hagdang patagilid",
            "sa loob ng higanteng tasa", "sa bayang laging alas-tres ng madaling-araw", "sa dulo ng carpet", "sa tabi ng napakagalang na bulkan",
            "sa loob ng snow globe", "sa tren na gawa sa keso", "sa pasilyong amoy-kulog", "sa ulap na hugis-tito niya",
            "sa lawang gatas", "sa impyerno",
            "sa Marina Bay Sands habang hinahanap si Yuno Ball", "sa retro arcade habang naglalaro ng #RetroSlop games",
            "kung saan nandoon ang Jerusalem at lahat ng daan ay papuntang Roma",
            "sa loob ng higanteng pinya", "sa museo ng mga nakalimutang Lunes", "sa carousel na gawa sa kutsara", "sa ilalim ng kama ng natutulog na higante",
            "sa loob ng bumubulong na elevator", "sa parola sa gitna ng disyerto"
        ],
        why: [
            "kasi sabi ng propesiya", "na walang kumuwestiyon", "pero tuwing odd days lang", "sa hindi malamang dahilan",
            "habang tumatango ang mga pader", "kasi inutos ng buwan", "gaya ng sa panaginip niya", "at nagpigil ng hininga ang mga orasan",
            "kahit bawal ito sa tatlong dimensyon", "kasi hiningi ng spaghetti", "habang patalikod na tumutugtog ang malayong radyo", "habang pumapalakpak ang mga anino",
            "kasi parang Huwebes ang pakiramdam", "at kahit papaano may sense", "habang humihimig ang sahig", "kasi nanonood ang mga kalapati",
            "pagkatapos ng napakawirdong bahing", "kaya kinabahan ang mga pato", "at kumurap ang langit nang dalawang beses", "kasi naka-bakasyon ang gravity",
            "habang magalang na lumabas ng kuwarto ang oras", "na nagpaliwanag ng lahat at wala", "pagkatapos uminom ng kahina-hinalang sabaw", "kasi nagpumilit ang numerong pito",
            "habang tahimik siyang hinuhusgahan ng isang kambing", "habang binubulong ang iykykykykyky", "kasi sobrang meshuggenah leh",
            "habang nagtataka 'Alam kaya niya?' na may IQ na sobrang taas at sobrang baba",
            "kasi bored ang mga bituin", "at tahimik na pumalakpak ang mga muwebles", "habang nagno-notes ang mga kubyertos", "kasi sabi ng fortune cookie",
            "habang nagkukunwaring walang nakikita ang buwan", "kasi hinamon siya ng wallpaper"
        ]
    },
    schizo: {
        act: [
            "sinigawan ni {A} ang traffic light hanggang maging violet ito gaya ng kapitbahay niyang naging violet", "gumawa si {A} ng rocket mula sa 47 kutsara", "nakipag-away si {A} sa vending machine", "kinain ni {A} ang buong mapa",
            "kinuha ni {A} ang isang kambing bilang abogado niya", "hinamon ni {A} ang araw sa titigan", "naging mayor si {A} ng isang lusak", "nagdeklara si {A} ng giyera laban sa Huwebes",
            "nilunok ni {A} ang isang kidlat", "tinuruan ni {A} ang 200 pato na mag-file ng tax", "naging lampara si {A} nang anim na oras", "nakipagbuno si {A} sa ref at natalo",
            "sinadyang sunugin ni {A} ang isang ulap", "inilunsad ni {A} ang kapitbahay niya papuntang orbit", "nagtayo si {A} ng kulto para sa iisang hibla ng pansit", "sinuntok ni {A} sa mukha ang isang bagyo",
            "sinubukang pakasalan ni {A} ang isang mailbox", "ibinenta ni {A} ang sarili niyang anino sa isang kambing", "kumain si {A} ng labinlimang sili at nakita ang hinaharap", "kinidnap ni {A} ang buwan para sa ransom",
            "nag-imbento si {A} ng bagong kulay at inaresto dahil dito", "sumakay si {A} sa shopping cart pababa ng bulkan", "sinigawan ni {A} ang dagat dahil masyado itong basa", "nagsanay si {A} ng hukbo ng galit na kalapati",
            "nagtayo si {A} ng kastilyo mula sa mga ninakaw na payong", "kinagat ni {A} ang langit at kinagat din siya pabalik", "naghukay si {A} ng butas hanggang sa kabilang panig ng mundo at nag-hello", "ipinakain ni {A} ang buong tanghalian niya sa isang bagyong may kidlat",
            "nakipag-away si {A} sa multo dahil sa parking", "kinoronahan ni {A} ang sarili bilang hari ng ceiling fan", "tinunaw ni {A} ang orasan at ininom ito", "nakipag-espadahan si {A} sa isang baguette",
            "binuhat ni {A} ang isang manok na kasinlaki ng bahay", "sinubukang arestuhin ni {A} ang hangin", "nagsimula si {A} ng gulo sa aklatan ng mga bulong", "sinira ni {A} ang isang kasal sakay ng lumilipad na sofa",
            "nilabag ni {A} ang speed limit ng oras", "nag-speech si {A} sa harap ng sobrang galit na toaster", "aksidenteng nag-teleport si {A} sa isang deep fried na dimensyon", "umampon si {A} ng dragon na resibo lang ang kinakain",
            "sumigaw si {A} ng AIGOO habang tumatakbo sa Orchard Road", "nag-chant si {A} ng triple t nang alas-tres ng madaling-araw sa sinagoga", "kumain si {A} ng isang buong mangkok ng [NA-CENSOR] tapos sumuka ng itim na apdo", "sinigawan ni {A} ng 'I AM THE ONE WHO KNOCKS' ang isang estranghero",
            "nag-shutdown nang tuluyan si {A} kasi may umistorbo sa hyperfixation niya",
            "nag-chant si {A} ng 'ahin sukung thai thai, sukung, ayamsukung, sampakkung' habang sumasayaw sa paligid ng siga",
            "sumigaw si {A} ng 'amankupoh!' habang nagkukunwaring may mental illness at tics sa harap ng camera", "gumawa si {A} ng maalamat na shorts pull sa harap ng 500 nagulat na tao",
            "hinamon ni {A} ang microwave sa dance battle", "nagmaneho si {A} ng bus na gawa sa jelly papasok sa car wash", "sinubukang ibenta ni {A} ang dagat online", "ginawang bouncy castle ni {A} ang buong lungsod",
            "isinigaw ni {A} ang grocery list niya sa dumadaang eroplano", "nakipag-arm wrestling si {A} sa isang rebulto at nanalo talaga", "sumakay si {A} sa higanteng pato papasok sa Kongreso", "nag-juggle si {A} ng pitong nagliliyab na pinya",
            "binalatan ni {A} ang sarili niyang mukha para makita kung may tao sa ilalim, pero {A} lang din pala", "naghain si {A} ng hapunan para sa pamilya niyang labing-isang taon nang patay", "inilibing ni {A} ang aso niya sa bakuran at hinuhukay ito gabi-gabi para humingi ng tawad", "sinunog ni {A} ang bahay na puno ng mga alaala niya at nagpainit ng kamay sa harap nito",
            "binunot ni {A} ang mga ngipin niya isa-isa at itinanim, umaasang may tutubong magmamahal sa kanya", "tinahi ni {A} ang sarili niyang bibig para manatili na sa loob ang mga sigaw", "kinain ni {A} ang huling litrato ng nanay niya para wala nang makakuha ulit sa kanya", "binunot ni {A} ang mga pakpak ng isang daang gamugamo at humingi ng tawad sa bawat isa sa pangalan nito",
            "sinakal ni {A} ang narrator sa panaginip niya at nagising na puno ng tinta ang mga kamay", "isinulat ni {A} ang 'tulungan niyo ako' nang sampung libong beses sa pader gamit ang sarili niyang dugo at walang nagbasa", "binilang ni {A} ang mga araw mula nang may bumanggit ng pangalan niya at nawala siya sa bilang sa apatnapung libo", "ngumiti si {A} sa camera habang may gumagalaw pa rin sa ilalim ng balat niya",
            "pinatay ni {A} ang sarili niyang pamilya dahil gawa-gawa lang sila ng imahinasyon niya at malungkot siya", "sinigawan ni {A} ang langit hanggang umulan ng dugong may halong piraso ng laman, at ininom niya lahat", "sumulat si {A} ng liham kay [REDACTED] para humingi ng tawad pero hindi niya ito ipinadala", "inukit ni {A} ang sarili niyang mukha sa salamin gamit ang kutsilyo, pero hindi pa rin iyon siya",
            "umupo si {A} sa kwartong puno ng mga estrangherong kamukha niya at minura sila hanggang umalis sila", "gumawa si {A} ng time machine mula sa karton para bumalik sa panahong masaya pa siya, pero hanggang kahapon lang ang naabot nito", "sumulat si {A} ng kwento tungkol sa sarili niya na nagtapos sa 'at nagising siya at napagtantong panaginip lang pala ang lahat', pero hindi na siya nagising", "umupo si {A} sa dulo ng mundo at pinanood ang paglubog ng araw nang pitong araw na sunod-sunod hanggang makalimutan niya kung anong araw na",
            "huminga nang malalim si {A} at itinutok sa sentido niya ang airsoft gun na walang bala", "pinutol ni {A} ang dalawang kamay niya gamit ang circular saw dahil hindi niya ito makontrol", "ipinasok ni {A} ang kaliwang kamay niya sa blender at binuksan ito hanggang maging duguang piraso ng laman", "kumain si {A} ng mga nabubulok na bangkay dahil inutos ng narrator, at ng mga boses din",
            "paulit-ulit na sinaksak ni {A} ang sarili gamit ang kutsilyo sa kusina at kahit papaano ay hindi namatay, pero dumudugo pa rin siya", "kinagat ni {A} hanggang maputol ang mga daliri niya at dinukit ang sarili niyang mga mata dahil sa pag-iral niya", "tumalon si {A} mula sa isang bintana kung saan at nabalian ng 207 buto",
            "sinubukan ni {A} na laslasin ang sarili niyang tiyan gamit ang dulo ng mga daliri niya", "sinubukan ni {A} na kalmutin ang sarili niyang mga mata para hindi na niya makita si [REDACTED]", "pinunit ni {A} ang sarili niyang leeg at hinila palabas ang mga ugat niya hanggang laman na lang na binalatan ang natira", "iniuntog ni {A} ang ulo niya sa pader",
            "hindi natulog si {A} nang siyam na araw para lang bisitahin siya ng Hat Man, kasi ilang taon nang walang kumakausap sa kanya", "sinagasaan ni {A} ang isang pamilyang may apat na miyembro gamit ang sarili niyang kotse dahil sila raw ang demonyo", "kinain ni {A} nang buhay ang isang tao habang sumisigaw ito sa sakit", "sumulat si {A} ng piyesa ng musika gamit ang sarili niyang dugo hanggang wala na siyang balat at daliri",
            "umutot si {A} sa sarili niyang lamay at iyon lang ang naaalala ng lahat tungkol sa kanya", "sinunog ni {A} ang sarili niya hanggang hindi na makilala ang mukha niya, pero huwag mag-alala, nag-regenerate siya (para mangyari ulit bukas)", "pinugutan ni {A} ang kapitbahay niya gamit ang kalawanging lagari"
        ],
        place: [
            "sa gitna ng highway", "habang nasusunog (konti)", "sa ibabaw ng humaharurot na tren", "sa loob ng nasusunog na kopitiam",
            "sa harap ng 300 nalilitong pato", "sa korteng puno ng gansa", "sa dulo ng mundo", "sa loob ng bulkan",
            "habang may bagyo", "sa ibabaw ng lumilipad na sofa", "sa gitna ng parada ng mga kambing", "sa ilalim ng dagat",
            "sa gitna ng buhawi", "sa loob ng higanteng mangkok ng sabaw", "sa bubong ng umaandar na bus", "sa loob ng haunted na vending machine",
            "sa finale ng isang cooking show", "sa tabi ng sumasabog na panaderya", "sa harap ng buong bayan", "sa tuktok ng napakataas na pansit",
            "sa loob ng washing machine na naka-full speed", "sa ibabaw ng hukay na puno ng galit na alimango", "habang live ang balita", "sa birthday party ng isang dragon",
            "sa parking lot ng kabilang buhay", "sa isang Singlish-Jewish cultural fest",
            "sa pakpak ng lumilipad na eroplano", "sa loob ng buhawing gawa sa pansit", "sa gitna ng kidlat na gawa sa sabaw", "sa tuktok ng skyscraper na gawa sa pancake",
            "sa stadium na puno ng sumisigaw na gansa", "sa loob ng pinakagalit na blender sa mundo",
            "sa kwartong pinagtataguan nila ng mga binurang bersyon niya", "sa loob ng ospital na walang doktor, puro sigaw lang", "sa ilalim ng balong walang ilalim", "sa kwarto niya noong bata pa siya, na puno na ngayon ng mga estrangherong suot ang mukha niya",
            "sa simbahang nakaharap sa pader ang lahat ng upuan", "sa loob ng kabaong na may bintana para mapanood niya ang lahat na makalimot sa kanya",
            "sa purgatoryo, dahil maaaring napatawad na ang mabibigat niyang kasalanan noong buhay pa siya pero kumakapit pa rin ang kaluluwa niya sa kasalanan, sa mga kapintasan, at sa mga parusang hindi pa nababayaran"
        ],
        why: [
            "AT WALANG PUMIGIL SA KANYA", "kasi sabi ng mga boses oo", "nang walang kahit anong dahilan", "at may mga tanong ang pulis",
            "habang isinisigaw ng choir ng mga kuliglig ang pangalan niya", "at sa totoo lang simula pa lang 'yon", "kasi natalo siya sa pustahan sa isang dragon", "at ayaw niyang magpaliwanag",
            "na nagdulot ng maliit na apocalypse", "habang umiiyak ang langit ng maliliit na luhang sabaw", "kasi kaguluhan ang hinihingi ng horoscope niya", "at pinag-uusapan pa rin ito ng mga kapitbahay",
            "pagkatapos kumain ng bagay na hindi dapat kinain", "at kinunan ng kambing ang lahat", "na national holiday na ngayon", "habang isinisigaw ang alpabeto nang pabaliktad",
            "kasi inutos ng mga kutsara", "at agad nag-resign ang mayor", "na lumabag sa tatlong batas ng physics", "tapos ginawa niya ulit",
            "kasi wala nang may sense", "habang sumasang-ayon ang isang libong pato", "at tinawag itong himala ng balita", "at may rebulto na siya ngayon",
            "na medyo pinagsisisihan niya",
            "at hindi na makaka-recover ang internet", "habang sumisigaw pabalik ang buwan", "kasi ang toaster ang nauna", "at tatlong planeta ang nag-file ng reklamo",
            "habang tumutugtog ang marching band ng mga pato", "at nahimatay ang news crew",
            "at sabi ng mga boses hindi pa rin iyon sapat", "at hindi na niya maalala kung naging masaya ba siya kahit kailan", "kasi lahat ng bersyon niya bago ito ay namatay nang sumisigaw", "habang nanonood ang nanay niya mula sa pinto at walang ginawa",
            "at pagkagising niya nangyari ulit, at ulit, at ulit", "at sa kung saan, may tumawa at pumindot ng Generate", "kasi deserve niya raw, sabi ng kwento", "at lumaki nang kaunti ang butas sa loob niya"
        ]
    },
    who: [
        "kasama ang pusa niya", "kasama si Tito Bob na ulap", "kasama ang tatlong nalilitong pato", "kasama ang kapitbahay niya", "kasama ang napakaseryosong kambing",
        "kasama si Amankuh", "kasama ang lola niya", "kasama ang nagsasalitang kutsara", "nang mag-isa", "kasama ang kumpol ng kalapati",
        "kasama ang best friend niyang poste ng ilaw", "kasama ang kahina-hinalang lalaking naka-trench coat", "kasama ang masama niyang kambal", "kasama ang magalang na buwaya", "kasama ang buong choir ng eskuwelahan",
        "dala ang backpack na puno ng chichirya", "kasama ang alagang bato niya", "kasama ang kinakabahang manok", "kasama ang maliit na dragon", "kasama ang mayor"
    ],
    twists: [
        "Tapos nagsimulang magsalita ang kisame.", "May manok na dumaan at yumuko.", "Naging jelly ang sahig.", "Sa kung saan, may umiyak na toaster.",
        "May maliit na lalaking lumitaw sa tasa at naningil ng upa.", "Nakalimutan ng lahat kung ano ang kulay asul.", "Nagkamalay ang wifi.", "Umatras ang orasan dahil sa hiya.",
        "Umulan nang pataas.", "May pintong lumitaw sa langit at bukas ito.", "Sabay-sabay siyang nilingon ng lahat ng kalapati.", "Nag-text ang buwan.",
        "Walang nakapansin, pero lumapit ang mga pader.", "May kambing na naka-amerikana na humingi ng ID niya.", "Bumahing ang lupa.", "Huminto ang oras nang eksaktong isang sandwich.",
        "May napakatandang pato na bumulong ng sikreto at naglaho.", "Naging slide ang hagdan.", "Amoy Martes ang lahat.", "Umalis ang mga anino para bumili ng kape.",
        "Dumaan ang parada ng maliliit na kutsara.", "Nag-sorry ang araw dahil late siya.", "May boses mula sa ref na nagsabing: hindi pa.", "Nagsimulang dumugo ng pansit ang mapa sa pader.",
        "Sa kung saan, dumighay ang isang bulkan.", "Naging upuan ang lahat ng kapitbahay.", "May uwak na naghatid ng legal notice.", "Humingi ng refund ang ulan.",
        "Bigla niyang nalaman ang pangalan ng bawat kalapati sa bayan.", "Nag-break saglit ang gravity.",
        "May sumigaw ng triple t sa gitna ng K-pop concert.",
        "May boses na nagtanong nang malakas: 'Hulaan mo kung sino'ng bumalik? Si Akiong na naman?'",
        "Nabuhay ang penguin at dumiretso sa bundok.",
        "May lumitaw na wild zaza bird at nagsimulang mag-infodump tungkol sa [NA-CENSOR].",
        "Ikaw pala ang Bay Harbor Akiong!",
        "May pusang nagsimulang mag-narrate ng kuwento.", "Nagsimulang tumawa ang lahat ng orasan sa bayan.", "Nagpalit ng wallpaper ang langit.", "May ulap na humingi ng autograph niya.",
        "Nagtayo ng banda ang mga traffic light.", "Naglakad paalis ang sapatos niya nang wala siya.", "May gansang gustong kausapin ang manager.", "Tumahimik ang internet nang eksaktong isang segundo."
    ],
    sounds: [
        "*BOOM*", "*plak*", "*beep beep*", "*boing*", "*slurp*", "*ting!*", "*dun dun DUNNN*", "*wilhelm scream*", "*utot*", "*sigaw ng kapahamakan at kawalan ng pag-asa*",
        "*kwak*", "*kriik kriik*", "*kaboom*", "*hingal*", "*bonk*", "*miyaw?*", "*sirena sa malayo*", "*oy vey!*", "*walao!*", "*sukung!*", "*sampakkung!*", "*plak plak plak*",
        "*iiiik*", "*klang*", "*whoosh*", "*blag*", "*ting ting*", "*tsss*", "*pop!*", "*singhot*", "*kulo ng tiyan*", "*tiririt*", "*tunog ng tao*",
        "*ding dong*", "*brum brum*", "*ka-ching!*", "*blup*", "*krunch*", "*ehem*"
    ],
    titleStart: [
        "Si Akiong", "Ang Alamat ni Akiong", "Ang Araw na Nakilala ni Akiong", "Akiong laban sa",
        "Ang Sikretong Diary ni Akiong", "Bakit Takot si Akiong", "Ang Pagbabalik ni Akiong", "Aksidenteng Naging Kaibigan ni Akiong",
        "Ang Hindi Naikuwentong Kuwento ni Akiong", "Hindi Mapapatawad ni Akiong", "Paano Tinalo ni Akiong", "Si Akiong at ang Sumpa",
        "Ang Alamat ni Yuno Ball", "Si Akiong at ang Misteryo", "Ang mga Pakikipagsapalaran ni Akiong", "Si Akiong at ang Pag-angat",
        "Minumulto si Akiong", "Ang Huling Sayaw ni Akiong", "Tumakas si Akiong", "Nagbakasyon si Akiong"
    ],
    titleEnd: [
        "Ang Multong Toaster", "Ang mga Galit na Kalapati", "Ang Propesiya ng Pansit", "Ang Baligtad na Kopitiam",
        "Ang Magalang na Bulkan", "Ang Kahina-hinalang Sabaw", "Ang Kambing na Abogado", "Ang Nawawalang Martes",
        "Ang Lumilipad na Sofa", "Ang Hukbo ng Kutsara", "Ang Buwan sa Garapon", "Ang Nagsasalitang Ref",
        "Ang Isang Libong Pato", "Ang Dragon ng Resibo", "Ang Lalagyan ng Medyas", "Ang Sobrang Galit na Toaster", "Ang Alamat ni Yuno Ball", "Ang Ekspedisyon ng Zaza Bird", "Ang Maalamat na Shorts Pull",
        "Ang Jelly na Bus", "Ang Sumasayaw na Microwave", "Ang Magalang na Buwaya", "Ang mga Nagliliyab na Pinya"
    ]
};

STORY.owo = {
    grammar: { name: "Akiong", first: "Akiong", order: ["S", "A", "W", "P"], gap: " ", comma: ", ", end: "~", loud: "!!! >w<", sep: " ", titleJoin: " " },
    start: [
        "Then Akiong", "Aftew dat Akiong", "S-Suddenwy Akiong", "W-Watew Akiong",
        "M-Meanwhiwe Akiong", "Without wawnying Akiong", "Out of nyowhewe Akiong", "D-Da nyext mownying Akiong",
        "At midnyight Akiong", "Just then Akiong", "Moments watew Akiong", "Yeaws watew Akiong",
        "Fow some weason Akiong", "Befowe anyonye nyoticed Akiong", "A-Against aww advice Akiong", "O-On a wandom Tuesday Akiong",
        "W-Without thinking Akiong", "Wight aftew wunch Akiong", "Out of puwe cuwiosity Akiong", "Nyobody knyows why but Akiong",
        "Nyot wong aftew Akiong", "In a stunnying tuwn of events Akiong", "With gweat confidence Akiong", "Without asking anyonye Akiong",
        "B-By accident Akiong", "Wight on scheduwe Akiong"
    ],
    normal: {
        act: [
            "went to da mawket", "ate a big boww of nyoodwes", "took a wong nyap", "wawked da doggo awound da bwock",
            "watched da nyews", "fixed his owd bicycwe", "bought a bag of owanges", "waited fow da bus",
            "cooked fwied wice", "dwank hot kopi", "wead da nyewspapew", "washed his caw",
            "painted da fence", "swept da fwoow", "cawwed his mothew", "fed da fish",
            "fowded da waundwy", "counted his coins", "pwayed cawds with his fwends", "watewed da pwants",
            "wistenyed to da wadio", "cweanyed da window", "ate toast with kaya", "sat on da powch",
            "dodged questions wike how Geowge W. Bush dodged dat shoe", "expwainyed his ewite baww knyowwedge to a confused cashiew", "tied his shoewaces swowwy", "bowwowed a waddew",
            "went fow a jog", "waved at da nyeighbouw", "infodumped fow sixty seven houws stwaight", "bought wottewy tickets",
            "wepaiwed da fan", "made a cup of tea", "twimmed da hedge", "owdewed kopi-o kosong wike a twue Singapowean uncwe",
            "swuwped wamyeon whiwe watching a K-dwama oppa", "owganyized his spice wack awphabeticawwy", "fixed da wobbwy tabwe with a fowded weceipt", "ate a pwate of nyasi wemak",
            "awgued with da TV wemote", "took his scootew fow a wash", "bought a nyew paiw of swippews", "queued fow da famous chicken wice",
            "pwayed chess against da owd man nyext doow"
        ],
        place: [
            "nyeaw da owd mawket", "behind da kopitiam", "undew da big twee", "at da bus stahp",
            "outside his house", "in da pawk", "nyext to da post office", "by da wivew",
            "at da pwaygwound", "in da kitchen", "on da bawcony", "down da stweet",
            "at Nyewton Food Centwe sia", "inside a Gangnyam convenyience stowe", "nyeaw da wocaw synyagogue", "at da tempwe",
            "nyeaw da schoow", "in da gawden", "at da nyight mawket", "beside da highway",
            "in da wiving woom", "at da bawbew shop", "on da wooftop", "at da hawkew centwe",
            "in da supewmawket queue", "at da twain station", "on a pawk bench", "at da waundwomat",
            "outside da mamak staww"
        ],
        why: [
            "because he was bowed *boops your snoot*", "because it was Monday ^w^", "because nyobody ewse wouwd *blushes*", "since da weathew was nyice x3",
            "because his back huwt (・`ω´・)", "because he pwomised his wife (・`ω´・)", "aftew a vewy wong day x3", "befowe it stawted wainying ^w^",
            "even though he was tiwed ^w^", "just wike evewy mownying *pounces*", "because da fwidge was empty x3", "whiwe humming an owd song >w<",
            "aftew wosing a bet", "since it was cheap ^w^", "because da shop was cwosing *pounces*", "to save some monyey OwO",
            "and evewything is amankuh and amankupoh", "to avoid being kiapu", "because daebak deaws don't wait wah OwO", "wemme cook wah",
            "because his nyeighbouw asked (・`ω´・)", "as da sun went down", "whiwe eating peanyuts rawr~", "because it was twadition",
            "because da TV was bwoken ^w^", "since he had nyothing bettew to do", "because his phonye died (・`ω´・)", "aftew his aftewnyoon coffee ^w^",
            "because da wadio towd him to wewax", "whiwe waiting fow his tea to coow (・`ω´・)"
        ]
    },
    weird: {
        act: [
            "tawked to a pigeon", "had a gay fuwwy as a boyfwiend", "openyed a doow inside his fwidge", "taught his shadow to dance",
            "sowd invisibwe umbwewwas", "asked da moon fow diwections", "adopted a cwoud and nyamed it Uncwe Bob", "wowe two weft shoes",
            "discuvwed dat Tuesdays wewe sowd out", "joinyed a secwet cwub fow ewevatow whispewews", "twaded his voice fow a sandwich", "pwanted a cwock and waited fow time to gwow",
            "intewviewed a puddwe", "weawnyed to speak fwuent doowknyob", "bowwowed a paiw of dweams", "painted da wind bwue",
            "taught a snyaiw to dwive", "maiwed a wettew to himsewf fwom da futuwe", "stawted a band with seven spoons", "got wost in his own sock dwawew",
            "awgued with a miwwow about who was owdew", "found a staiwcase dat wed to Wednyesday", "became best fwends with a wamp post", "kept a tiny moon in a jaw",
            "bought a ticket to nyowhewe", "taught da wain to knyock powitewy", "cawwied a bucket of echoes", "met a fish who sowd insuwance",
            "fowded da howizon into a papew boat", "gwew a gawden of tiny umbwewwas", "heawd da sofa whispew his nyame", "twaded a weft sock fow a wumow",
            "hosted a tea pawty fow his shadows", "stamped his passpowt with a snyeeze", "taught da staiwcase how to sing", "found a map of his own fowehead",
            "took a nyap inside a wainbow", "had a quiet awgument with da nyumbew seven", "wwote a poem on a banyanya", "convinced a cwoud to become a wawyew",
            "hiwed a ghost to do his waundwy", "convewsed in puwe Singwish-Jewish scwipt with Yunyo Baww", "shouted oy vey wah at a sweeping chiwd", "schwepped a massive boww of tteokbokki acwoss da bowdew",
            "pwacticed high-pitched whistwing fow nyo weason", "debated phiwosophy with Setawcos (eviw twin of Socwates)", "befwiended da penguin dat became awive and went to da mountains to become a zaza biwd", "wead a stowy titwed 'A twittew usew dwank a snyowgwobe. Dis is how an emu got chubby.'",
            "watched 'Evewybody ate Chwis TWD' on a wivestweam", "towd a wagebaited chattew dat dis is bwaingwow nyot bwainwot", "met Awwison Buwgews and asked 'did he just say dat his wast nyame is buwgew?'", "decwawed 'mattew of fact i didn't see nyuthin I'm 43% bwind in mah weft eye and fuwwy bwind in mah wight eye'",
            "went cwazy and said 'I'M SOWWY DID HE JUST SAID DAT HIS WAST NYAME IS BUWGEWS'", "became conscious and stawted bweaking da 4th waww", "nyevew goon, ow ewse he wiww hunt yuw with mah minyions", "said ambatukam and ambatubwo whiwst having a heawt attack",
            "said 'I AM DA ONYE WHO KNYOCKS' and then knyocked on da doow of a wandom stwangew", "said 'I JUST HIT DA JACK POT' and then hit da jackpot of a casinyo", "taught a cactus to hug", "openyed a bakewy dat onwy sowd yestewday",
            "pwayed hide and seek with his own wefwection", "won a stawing contest against a painting", "knyitted a scawf fow da moon", "wented out his shadow on weekends",
            "asked a teapot fow wife advice", "buiwt a sandcastwe on a cwoud"
        ],
        place: [
            "inside a vewy smol ewevatow", "on top of a sweeping whawe", "undew a fwoating tabwe", "in a woom with nyo cownyews",
            "beside a tawking fwidge", "in da middwe of a quiet stowm", "on a bwidge made of nyoodwes", "inside a bubbwe",
            "at a bus stahp dat wasnt thewe", "in a wibwawy of wost socks", "behind a doow dat kept moving", "on da ceiwing",
            "in a fiewd of upside down twees", "in a cafe wun by cwows", "in an upside down kopitiam", "on a staiwcase dat went sideways",
            "inside a giant teacup", "in a town whewe it was awways 3am", "at da edge of da cawpet", "nyext to a vewy powite vowcanyo",
            "inside a snyow gwobe", "on a twain made of cheese", "in a hawwway dat smewwed wike thundew", "on a cwoud shaped wike his uncwe",
            "in a pond made of miwk", "in heww", "at Mawinya Bay Sands wooking fow Yunyo Baww", "in a wetwo awcade pwaying #RetroSlop games",
            "whewe Jewusawem's dat way and aww woads wead to Wome", "inside a giant pinyeappwe", "in a museum of fowgotten Mondays", "on a mewwy-go-wound made of spoons",
            "undew da bed of a sweeping giant", "inside a whispewing ewevatow", "at a wighthouse in da middwe of da desewt"
        ],
        why: [
            "because da pwophecy said so *boops your snoot*", "which nyobody questionyed", "but onwy on odd days", "fow weasons unknyown ^w^",
            "whiwe da wawws nyodded in agweement rawr~", "because da moon towd him to", "just wike in his dweam rawr~", "and da cwocks hewd theiw bweath ^w^",
            "even though it was iwwegaw in thwee dimensions >w<", "because spaghetti demanded it x3", "whiwe a distant wadio pwayed backwawds", "as da shadows appwauded *pounces*",
            "because it fewt wike a Thuwsday x3", "and somehow dat made sense", "whiwe da fwoow hummed x3", "because da pigeons wewe watching uwu",
            "aftew a vewy stwange snyeeze", "which made da ducks nyewvous", "and da sky bwinked twice uwu", "because gwavity was on howiday *blushes*",
            "whiwe time powitewy weft da woom ^w^", "which expwainyed evewything and nyothing *boops your snoot*", "aftew dwinking suspicious soup", "because da nyumbew seven insisted rawr~",
            "whiwe a goat quietwy judged him", "saying iykykykykyky undew his bweath *boops your snoot*", "because it was so meshuggenyah weh", "whiwe wondewing 'Does he knyow?' with an IQ too high and an IQ too wow",
            "because da staws wewe bowed", "and da fuwnyituwe appwauded quietwy *pounces*", "whiwe da cutwewy took nyotes >w<", "because a fowtunye cookie said so x3",
            "as da moon pwetended nyot to nyotice (・`ω´・)", "because da wawwpapew dawed him"
        ]
    },
    schizo: {
        act: [
            "scweamed at a twaffic wight untiw it tuwnyed puwpwe wike his nyeighbouw who tuwnyed puwpwe", "buiwt a wocket fwom 47 spoons", "fought a vending machinye", "ate da whowe map",
            "hiwed a goat as his wawyew", "chawwenged da sun to a stawing contest", "became mayow of a puddwe", "decwawed waw on Thuwsday",
            "swawwowed a wightnying bowt", "taught 200 ducks to do taxes", "tuwnyed into a wamp fow six houws", "wwestwed a wefwigewatow and wost",
            "set fiwe to a cwoud on puwpose", "waunched his nyeighbouw into owbit", "stawted a cuwt dedicated to a singwe nyoodwe", "punched a huwwicanye in da face",
            "twied to mawwy a maiwbox", "sowd his own shadow to a goat", "ate fifteen chiwies and saw da futuwe", "kidnyapped da moon fow wansom",
            "invented a nyew cowouw and got awwested fow it", "wode a shopping cawt down a vowcanyo", "yewwed at da ocean fow being too wet", "twainyed an awmy of angwy pigeons",
            "buiwt a castwe fwom stowen umbwewwas", "bit da sky and it bit back", "dug a howe to da othew side and said hewwo", "fed a thundewstowm his entiwe wunch",
            "fought a ghost uvw a pawking space", "cwownyed himsewf king of da ceiwing fan", "mewted da cwock and dwank it", "swowd fought a baguette",
            "cawwied a chicken da size of a house", "twied to awwest da wind", "stawted a wiot in a wibwawy of whispews", "cwashed a wedding on a fwying couch",
            "bwoke da speed wimit of time", "gave a speech to a vewy angwy toastew", "tewepowted by mistake into a deep fwied dimension", "adopted a dwagon dat onwy ate weceipts",
            "scweamed AIGOO whiwe wunnying thwough Owchawd Woad", "chanted twipwe t at 3 AM in a synyagogue", "ate a whowe boww of [REDACTED] and then thwew up a bwack biwe", "yewwed 'I AM DA ONYE WHO KNYOCKS' at a wandom stwangew",
            "entewed a compwete shutdown because someonye intewwupted his hypewfixation", "chanted 'ahin sukung thai thai, sukung, ayamsukung, sampakkung' whiwe dancing awound a bonfiwe", "shouted 'amankupoh!' whiwe faking mentaw iwwnyesses and tics on camewa", "executed a mythicaw showts puww in fwont of 500 stunnyed onwookews",
            "chawwenged a micwowave to a dance battwe", "dwuv a bus made of jewwy thwough a caw wash", "twied to seww da ocean on an onwinye mawketpwace", "tuwnyed da entiwe city into a bouncy castwe",
            "scweamed his gwocewy wist at a passing aiwpwanye", "awm wwestwed a statue and actuawwy won", "wode a giant duck into pawwiament", "juggwed seven fwaming pinyeappwes",
            "peewed off his own face to see if anyonye was undewnyeath, but it was just mowe {A} uwu", "set da tabwe fow his famiwy, who have been dead fow eweven yeaws, and sewved dem dinnyew anyway", "buwied his dog in da backyawd and digs it up evewy nyight to say sowwy >w<", "buwnyed down da house with aww his memowies inside and stood dewe wawming his hands",
            "puwwed out his teeth onye by onye and pwanted dem, hoping something wouwd gwow dat woved him", "sewed his own mouth shut so da scweaming wouwd finyawwy stay inside x3", "ate da wast photo of his mothew so nyobody couwd evew take hew away again", "towe da wings off a hundwed moths and apowogized to each onye by nyame (・`ω´・)",
            "stwangwed da nyawwatow in his dweams and woke up with ink on his hands", "wwote 'hewp me' ten thousand times on da wawws in his own bwood and nyobody wead it uwu", "counted da days since anyonye said his nyame and wost count at fowty thousand", "smiwed fow da camewa whiwe something undew his skin kept moving ^w^",
            "muwdewed his own famiwy because dey wewe aww just figments of his imaginyation and he was wonyewy uwu", "scweamed at da sky untiw it wainyed bwood mixed with chunks of fwesh and he dwank it aww", "wwote a wettew to [REDACTED] asking fow fowgivenyess and nyevew sent it >w<", "took a knife to da miwwow and cawved his own face into it, but it was stiww nyot him",
            "sat in a woom fuww of stwangews who aww wooked wike him and thwew swuws at dem untiw dey weft", "buiwt a time machinye out of cawdboawd and twied to go back to when he was happy, but it onwy took him to yestewday x3", "wwote a stowy about himsewf dat ended with 'and den he woke up and weawized it was aww a dweam', but he nyevew woke up", "sat on da edge of da wowwd and watched da sun set fow seven days stwaight untiw he fowgot what day it was",
            "took a deep bweath and hewd an aiwsoft gun with nyo BBs to his tempwe (・`ω´・)", "chopped off both of his own hands with a ciwcuwaw saw because he couwd nyot contwow dem", "put his weft hand in a bwendew and tuwnyed it on, weducing it to a chunk of bwoody fwesh uwu", "ate wotting cowpses because da nyawwatow towd him to, and da voices did too",
            "twied to stab himsewf muwtipwe times with a kitchen knife and somehow didnt die, but he is stiww bweeding >w<", "bit his own fingews off and gouged out his own eyes because of his existence", "jumped out of a window somewhewe and bwoke 207 bonyes ^w^",
            "twied to disembowew himsewf with his own fingewtips", "twied to scwatch out his own eyebawws so he couwd nyevew see [REDACTED] again uwu", "wipped open his own nyeck and puwwed out his bwood vessews untiw it was just fwayed meat", "swammed his head against da waww x3",
            "stayed awake fow nyinye days stwaight just so The Hat Man wouwd visit, because nyobody ewse has tawked to him in yeaws", "wan ovew a famiwy of fouw with his own caw because dey wewe da deviw (・`ω´・)", "ate a pewson awive whiwe dey scweamed in pain", "wwote a music scowe in his own bwood untiw he was skinwess and fingewwess",
            "fawted at his own funyewaw and it was da onwy thing anyonye wemembewed about him ^w^", "set himsewf on fiwe and buwnyed untiw his face was unwecognyizabwe, but dont wowwy, he wegenyewated (so it can happen again tomowwow) >w<", "chopped his neighbow's head off with a wusty saw (・`ω´・)"
        ],
        place: [
            "in da middwe of da highway", "whiwe on fiwe (a widdle)", "on top of a speeding twain", "inside a buwnying kopitiam",
            "in fwont of 300 confused ducks", "in a couwtwoom fuww of geese", "at da edge of da wowwd", "inside a vowcanyo",
            "duwing a thundewstowm", "on a fwying couch", "in da middwe of a goat pawade", "at da bottom of da ocean",
            "in da centew of a townyado", "inside a giant boww of soup", "on da woof of a moving bus", "in a haunted vending machinye",
            "at da finyawe of a cooking show", "beside an expwoding bakewy", "in fwont of da whowe town", "at da top of a vewy taww nyoodwe",
            "inside a washing machinye at fuww speed", "abuv a pit of angwy cwabs", "duwing a wive nyews bwoadcast", "at a dwagons biwthday pawty",
            "in da pawking wot of da aftewwife", "at a Singwish-Jewish cuwtuwaw fest", "on da wing of a fwying aiwpwanye", "inside a townyado made of nyoodwes",
            "in da middwe of a wightnying stowm made of soup", "on top of a skyscwapew made of pancakes", "in a stadium fuww of scweaming geese", "inside da wowwd's angwiest bwendew",
            "in da woom whewe dey keep da deweted vewsions of him", "inside a hospitaw with nyo doctows, onwy scweaming", "at da bottom of a weww dat has nyo bottom", "in his chiwdhood bedwoom, which is nyow fuww of stwangews weawing his face",
            "in a chuwch whewe evewy pew faces da waww", "inside a coffin with a window so he can watch evewyonye fowget him",
            "in puwgatowy, because his souw may have had its sewious sins fowgiven in wife but stiww cwings to sin, chawactew fwaws and unpaid tempowaw punyishment"
        ],
        why: [
            "AND NYOBODY STOPPED HIM *pounces*", "because da voices said yes rawr~", "fow absowutewy nyo weason", "and da powice have questions",
            "whiwe a choiw of cwickets scweamed his nyame uwu", "and honyestwy dat was onwy da beginnying uwu", "because he wost a bet with a dwagon", "and wefused to expwain himsewf",
            "which caused a minyow apocawypse x3", "whiwe da sky cwied tiny teaws of soup >w<", "because his howoscope demanded chaos", "and da nyeighbouws awe stiww tawking about it *boops your snoot*",
            "aftew eating something he shouwdnt have (・`ω´・)", "and a goat fiwmed evewything", "which is nyow a nyationyaw howiday *pounces*", "whiwe scweaming da awphabet backwawds uwu",
            "because da spoons towd him to (・`ω´・)", "and da mayow wesignyed immediatewy rawr~", "which bwoke thwee waws of physics", "and then he did it again >w<",
            "because nyothing makes sense anymowe OwO", "whiwe a thousand ducks quacked in appwovaw *blushes*", "and da nyews cawwed it a miwacwe", "and nyow thewes a statue of him >w<",
            "which he wegwets swightwy", "and da intewnyet wiww nyevew wecuvw rawr~", "whiwe da moon scweamed back ^w^", "because da toastew stawted it rawr~",
            "and thwee pwanyets fiwed compwaints (・`ω´・)", "whiwe a mawching band of ducks pwayed awong *boops your snoot*", "and da wocaw nyews cwew fainted x3",
            "and da voices towd him it stiww wasnt enyough uwu", "and he cant wemembew if he was evew happy", "because evewy vewsion of him befowe dis onye died scweaming >w<", "whiwe his mothew watched fwom da doowway and did nyothing",
            "and when he woke up it happenyed again, and again, and again x3", "and somewhewe, someonye waughed and pwessed Genyewate", "because he desewved it, da stowy said so", "and da howe inside him got a widdwe biggew ^w^"
        ]
    },
    who: [
        "with his kitty", "with Uncwe Bob da cwoud", "with thwee confused ducks", "with his nyeighbouw",
        "with a vewy sewious goat", "with Amankuh", "with his gwandma", "with a tawking spoon",
        "aww by himsewf", "with a cwowd of pigeons", "with his best fwend da wamp post", "with a suspicious man in a twench coat",
        "with his eviw twin", "with a powite cwocodiwe", "with da entiwe schoow choiw", "with a backpack fuww of snyacks",
        "with his pet wock", "with a nyewvous chicken", "with a tiny dwagon", "with da mayow"
    ],
    twists: [
        "Then da ceiwing stawted tawking~", "A chicken wawked past and bowed uwu.", "Da fwoow tuwnyed into jewwy *boops your snoot*.", "Somewhewe a toastew cwied OwO.",
        "A tiny man appeawed in a teacup and asked fow went x3.", "Evewyonye fowgot wut da cowouw bwue was *pounces*.", "Da wifi gainyed consciousnyess~", "Da cwock stawted going backwawds out of embawwassment OwO.",
        "It stawted wainying upwawds uwu.", "A doow appeawed in da sky and it was open (・`ω´・).", "Aww da pigeons tuwnyed and wooked at him at da same time~", "Da moon sent a text message OwO.",
        "Nyobody nyoticed, but da wawws got cwosew rawr~.", "A goat in a suit asked to see his ID~", "Da gwound snyeezed~", "Time stopped fow exactwy onye sandwich x3.",
        "A vewy owd duck whispewed a secwet and then vanyished uwu.", "Da staiws became a swide (・`ω´・).", "Evewything smewwed wike Tuesday (・`ω´・).", "Da shadows weft to get coffee~",
        "A pawade of tiny spoons mawched by >w<.", "Da sun apowogized fow being wate *blushes*.", "A voice fwom da fwidge said: nyot yet~", "Da map on da waww stawted to bweed nyoodwes~",
        "Somewhewe, a vowcanyo buwped *pounces*.", "Da nyeighbouws aww tuwnyed into chaiws (・`ω´・).", "A cwow dewivewed a wegaw nyotice (・`ω´・).", "Da wain asked fow a wefund uwu.",
        "He suddenwy knyew da nyame of evewy pigeon in town x3.", "Gwavity took a showt bweak~", "Someonye shouted twipwe t in da middwe of a K-pop concewt (・`ω´・).", "A voice asked out woud: 'Guess who's back? Back Akiong again?' ^w^",
        "Da penguin became awive and headed stwaight to da mountains *blushes*.", "A wiwd zaza biwd appeawed and began infodumping about [REDACTED] *blushes*.", "Yuw wewe da Bay Hawbow Akiong!", "A kitty stawted nyawwating da stowy ^w^.",
        "Evewy cwock in town stawted waughing~", "Da sky changed its wawwpapew OwO.", "A cwoud asked fow his autogwaph~", "Da twaffic wights stawted a band rawr~.",
        "His shoes wawked off without him~", "A goose demanded to speak to da manyagew uwu.", "Da intewnyet went quiet fow exactwy onye second~"
    ],
    sounds: [
        "*BOOM*", "*spwat*", "*honk honk*", "*boing*",
        "*swuwp*", "*ding!*", "*dun dun DUNNN*", "*wiwhewm scweam*",
        "*fawt*", "*scweaming of doom and despaiw*", "*quack*", "*cwicket nyoises*",
        "*kaboom*", "*wheeze*", "*bonk*", "*meow?*",
        "*distant siwens*", "*oy vey!*", "*wawao!*", "*sukung!*",
        "*sampakkung!*", "*spwat spwat spwat*", "*scweech*", "*cwank*",
        "*whoosh*", "*thud*", "*pwink pwink*", "*sizzwe*",
        "*pop!*", "*snyowt*", "*gwumbwe*", "*chiwp chiwp*",
        "*human nyoises*", "*ding dong*", "*vwoom vwoom*", "*ka-ching!*",
        "*bwoop*", "*cwunch*", "*ahem*"
    ],
    titleStart: [
        "Akiong and da", "Da Wegend of Akiong and da", "Da Day Akiong Met da", "Akiong vs da",
        "Da Secwet Diawy of Akiong and da", "Why Akiong Feaws da", "Da Wetuwn of Akiong and da", "Akiong Accidentawwy Befwiends da",
        "Da Untowd Stowy of Akiong and da", "Akiong Wiww Nyevew Fowgive da", "How Akiong Defeated da", "Akiong and da Cuwse of da",
        "Yunyo Baww Wegend da", "Akiong and da Mystewy of da", "Da Adventuwes of Akiong and da", "Akiong and da Wise of da",
        "Akiong Gets Haunted by da", "Da Wast Dance of Akiong and da", "Akiong Wuns Away fwom da", "Akiong Goes on Howiday with da"
    ],
    titleEnd: [
        "Haunted Toastew", "Angwy Pigeons", "Nyoodwe Pwophecy", "Upside Down Kopitiam",
        "Powite Vowcanyo", "Suspicious Soup", "Goat Wawyew", "Missing Tuesday",
        "Fwying Couch", "Spoon Awmy", "Moon in a Jaw", "Tawking Fwidge",
        "Thousand Ducks", "Weceipt Dwagon", "Sock Dwawew", "Vewy Angwy Toastew",
        "Yunyo Baww Wegend", "Zaza Biwd Expedition", "Mythicaw Showts Puww", "Jewwy Bus",
        "Dancing Micwowave", "Powite Cwocodiwe", "Fwaming Pinyeappwes"
    ]
};
