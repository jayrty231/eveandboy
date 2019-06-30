var products = [
    {
        productBrand: 'BVLGARI',
        productName: 'AQVA Pour Homme',
        productImg: 'aqva-pour-homme.png',
        productPrice: [
            { vol: '100 ML', price: '$94'}
        ],
        productScent: ['Aqua'],
        productNotes: 'Mandarin, Petit Grain, Santolina, Posidonia, Mineral Amber.',
        productDes: 'Vibrant, pure, and masculine, this crisp blend of mandarin and petit grain, \
        spiced with sexy mineral amber, evokes a brisk, aromatic freshness, with an elegant Mediterranean touch.',
        productGender: 'Women'
    },
    {
        productBrand: 'BVLGARI',
        productName: 'Omnia Amethyste',
        productImg: 'omnia-amethyste.png',
        productPrice: [
            { vol: '65 ML', price: '$84'}
        ],
        productScent: ['Floral'],
        productNotes: 'Lotus Blossom, Bamboo.',
        productDes: "VCapturing the glowing clarity of crystal light, Omnia Crystalline illuminates, \
        reflects, and reveals a woman's unique radiance, her femininity, her beauty - the inexpressible, irresistible lightness of her being.",
        productGender: 'Women'
    },
    {
        productBrand: 'CHANEL',
        productName: 'Coco Mademoiselle',
        productImg: 'coco-mademoiselle.png',
        productPrice: [
            { vol: '35 ML', price: '$80'},
            { vol: '50 ML', price: '$105'},
            { vol: '100 ML', price: '$135'}
        ],
        productScent: ['Floral', 'Citrus'],
        productNotes: 'Orange, Bergamot, Grapefruit.',
        productDes: "Sexy, fresh Oriental fragrance recalls the irrepressible spirit of the young \
        Coco Chanel. An elegant, luxurious spray closest in strength and character to the perfume \
        form. Spray lightly on pulse points morning and evening. The classic bottle signifies personal \
        luxury and is a welcome addition to any dressing table.",
        productGender: 'Women'
    },
    {
        productBrand: 'CHANEL',
        productName: 'Eau Vive',
        productImg: 'eau-vive.png',
        productPrice: [
            { vol: '50 ML', price: '$85'},
            { vol: '100 ML', price: '$107'}
        ],
        productScent: ['Floral', 'fruity', 'Woody'],
        productNotes: 'Grapefruit-Blood Orange, Jasmine, Cedar-Iris',
        productDes: "Radiant with energy, this vibrant floral fragrance sweeps you into a lively \
        whirlwind of happiness for a chance encounter.",
        productGender: 'Women'
    },
    {
        productBrand: 'CHANEL',
        productName: 'Allure Homme Sport',
        productImg: 'allure-homme-sport.png',
        productPrice: [
            { vol: '50 ML', price: '$95'},
            { vol: '100 ML', price: '$120'}
        ],
        productScent: ['Aquatics', 'Citrus'],
        productNotes: 'Mandarin, Cedar, White Musk.',
        productDes: "Allure in motion. More than a fragrance, ALLURE HOMME SPORT Eau de Toilette \
        is a boost of well-being for the active man—a fresh, invigorating composition like a breath \
        of energy. \n A generous citrus freshness is subtly heightened by spicy lovage and elemi notes, \
        and set against a backdrop of cedar and white musk.",
        productGender: 'Men'
    },
    {
        productBrand: 'CHANEL',
        productName: 'Chance Eau Tendre',
        productImg: 'chance-eau-tendre.png',
        productPrice: [
            { vol: '50 ML', price: '$105'},
            { vol: '100 ML', price: '$135'}
        ],
        productScent: ['Floral', 'Fruity'],
        productNotes: 'Grapefruit, Quince, Rose Accord, White Musk.',
        productDes: "An enhanced interpretation of the unexpected floral-fruity fragrance, \
        CHANCE EAU TENDRE Eau de Parfum sweeps you into an intensified whirlwind of tenderness. \
        The signature CHANCE bottle is reinvented with a silver cap and golden accent.",
        productGender: 'Women'
    },
    {
        productBrand: 'CHANEL',
        productName: 'COCO Eau de Parfum',
        productImg: 'COCO-eau-de-parfum.png',
        productPrice: [
            { vol: '50 ML', price: '$105'},
        ],
        productScent: ['Spice'],
        productNotes: 'coriander, mandarin orange, peach, jasmine and bulgarian rose.',
        productDes: "An elegant, luxurious spray closest in strength and character to the parfum \
        form. Spray lightly on pulse points morning and evening. The classic signature bottle \
        is a sophisticated addition to any dressing table.",
        productGender: 'Women'
    },
    {
        productBrand: 'CHANEL',
        productName: 'BLEU DE CHANEL',
        productImg: 'bleu-de-chanel.png',
        productPrice: [
            { vol: '50 ML', price: '$95'},
            { vol: '100 ML', price: '$120'}
        ],
        productScent: ['Woody', 'Citrus'],
        productNotes: 'Citrus Accord, Labdanum, Sandalwood Cedar.',
        productDes: "Unexpected and undeniably bold. Fresh, clean, and profoundly sensual, this woody, \
        aromatic fragrance reveals the spirit of a man who chooses his own destiny with independence \
        and determination—a man who defies convention. \n A fresh citrus accord is immediately \
        followed by ambery dry cedar notes. Woods are amplified by tonka bean and vanilla for \
        heightened sensuality. New Caledonian sandalwood unfolds at the base for greater depth.",
        productGender: 'Men'
    },
    {
        productBrand: 'Chloé',
        productName: 'Love story',
        productImg: ['love-story.png', 'love-story-minisize.png'],
        productPrice: [
            { vol: 'Mini size (6 ML)', price: '$30'},
            { vol: '30 ML', price: '$76'},
            { vol: '50 ML', price: '$105'},
        ],
        productScent: ['Fruity', 'Floral'],
        productNotes: 'Jasmine, Neroli.',
        productDes: "Chloé unveils an essence of seduction, a declaration of femininity, \
        a proclamation of freedom. Love Story Eau de Parfum by Chloé is the expression of a \
        free woman: the Chloé woman. A floral love story, the fragrance opens with the sensuality \
        of orange blossom, luminous and intoxicating like the flush of new love. The stirring \
        femininity of jasmine stephanotis, the flower of happiness, gives the fragrance its heart. \
        The scent is grounded by the sensual strength and freshness of cedarwood, creating an \
        unforgettable essence of seduction.",
        productGender: 'Women'
    },
    {
        productBrand: 'Chloé',
        productName: 'Fleur de Parfum',
        productImg: ['fleur-de-parfum.png', 'fleur-de-parfum-mini.png'],
        productPrice: [
            { vol: 'Mini size (10 ML)', price: '$30'},
            { vol: '30 ML', price: '$76'},
            { vol: '50 ML', price: '$105'},
            { vol: '75 ML', price: '$132'},
        ],
        productScent: ['Floral'],
        productNotes: 'Rose, Verbena, Cherry Blossom.',
        productDes: "Chloé Fleur de Parfum is a generous bouquet composed of the most tender part \
        of flowers—their hearts. A subtle combination of elegance and sensuality, Chloé Fleur de \
        Parfum feels like the touch of soft silk on bare skin. The central note comes from the rose \
        heart. Surprisingly, it unfolds slightly tangy inflections that recall the scent of \
        raspberry. Never before has Chloé’s rose displayed such fruity tonalities. The verbena \
        flower adds a fresh and luminously verdant dimension that sublimates the luxurious rose \
        heart while retaining its absolute delicacy. Cherry blossom diffuses milky almond notes. \
        Filled with sweetness, they bring roundness to the composition.",
        productGender: 'Women'
    },
    {
        productBrand: 'Dior',
        productName: 'Miss Dior Eau de Parfum',
        productImg: 'miss-dior-eau-de-parfum.png',
        productPrice: [
            { vol: '30 ML', price: '$75'},
            { vol: '50 ML', price: '$100'},
            { vol: '100 ML', price: '$130'},
            { vol: '150 ML', price: '$155'},
        ],
        productScent: ['Floral'],
        productNotes: 'Bergamot, Grasse Rose, Rosewood',
        productDes: "Description: And you, what would you do for love? This Eau de Parfum is a \
        floral declaration of love. In the heart of the fragrance, the fresh, sensual beauty of \
        the Grasse rose combines with the boldness of Damascus rose. They are woven with Calabrian \
        bergamot, vivid rosewood from French Guiana, and pink pepper from Réunion Island. ",
        productGender: 'Women'
    },
    {
        productBrand: 'Dior',
        productName: "Sauvage Eau de Parfum",
        productImg: 'sauvage-eau-de-parfum.png',
        productPrice: [
            { vol: '60 ML', price: '$95'},
            { vol: '100 ML', price: '$120'},
            { vol: '200 ML', price: '$170'},
        ],
        productScent: ['Citrus', 'Woody'],
        productNotes: 'Bergamot, Amber, Vanilla.',
        productDes: "The powerful freshness of Sauvage exudes new sensual and mysterious facets, \
        amply renewing its signature with an ingenious composition. Calabrian bergamot, as juicy \
        and spirited as ever, invites new spicy notes to add fullness and sensuality, as the woody, \
        ambery trail of Ambroxan® is wrapped in smoky accents of Papua New Guinean vanilla absolute \
        for greater virility. François Demachy, Dior Perfumer-Creator, drew inspiration from the \
        desert in the magical hour of twilight. Mixed with the coolness of the night, the burning \
        desert air exudes profound scents. In the hour when nature awakes and the sky is set ablaze, \
        a new magic unfolds. ",
        productGender: 'Men'
    },
    {
        productBrand: 'DOLCE & GABBANA',
        productName: "Light Blue Eau de Toilette",
        productImg: ['light-blue-eau-de-toilette.png', 'light-blue-eau-de-toilette-mini.png'],
        productPrice: [
            { vol: 'Mini size (7.5 ML)', price: '$29'},
            { vol: '25 ML', price: '$58'},
            { vol: '50 ML', price: '$80'},
            { vol: '100 ML', price: '$102'},
            { vol: '200 ML', price: '$134'},
        ],
        productScent: ['Citrus', 'Fruity'],
        productNotes: 'Citrus, Apple, Bamboo.',
        productDes: "This colorful, fresh, floral fruity Eau de Toilette reflects the sensuality \
        of the Mediterranean lifestyle. Sicilian cedar combines with the freshness of the green \
        apple and the floral allure and spontaneity of the bluebell, the top note captures the \
        essence of a sunny South Italian summer. ",
        productGender: 'Women'
    },
    {
        productBrand: 'DOLCE & GABBANA',
        productName: "Dolce Peony",
        productImg: 'dolce-peony.png',
        productPrice: [
            { vol: '50 ML', price: '$94'},
            { vol: '75 ML', price: '$120'},
        ],
        productScent: ['Floral', 'Fruity'],
        productNotes: 'Nashi Pear, Pink Peony, Yellow Plum.',
        productDes: "The fruity transparency of the nashi pear note and the \
        sumptuous floral volume of the peony accord combine with woody \
        patchouli to create the joyful and colorful Dolce Peony Eau de Parfum.",
        productGender: 'Women'
    },
    {
        productBrand: 'DOLCE & GABBANA',
        productName: "Dolce Rosa Excelsa Eau de Parfum",
        productImg: 'Dolce-Rosa-Excelsa-Eau-de-Parfum.png',
        productPrice: [
            { vol: '47 ML', price: '$94'},
            { vol: '74 ML', price: '$120'},
        ],
        productScent: ['Floral'],
        productNotes: 'Musk, Rose, White Lily.',
        productDes: "The bold and pure spirit of the rose is captured in \
        full bloom with the Dolce&Gabbana Dolce Rosa Excelsa Eau de Parfum, \
        an exquisite creation for women.",
        productGender: 'Women'
    },
    {
        productBrand: 'DOLCE & GABBANA',
        productName: "The One For Men",
        productImg: 'The-One-For-Men.png',
        productPrice: [
            { vol: '50 ML', price: '$70'},
            { vol: '75 ML', price: '$90'},
        ],
        productScent: ['Woody', 'Spice'],
        productNotes: 'Grapefruit, Coriander, Basil, Cardamom, Ginger, Orange Blossom, Cedar, Tobacco, Ambergris. ',
        productDes: "Dolce & Gabbana The One for Men is a fragrance dedicated \
        to the Dolce & Gabbana man: charismatic and seductive, elegant and \
        sophisticated. He loves taking care of himself—a bold, modern hedonist \
        who never passes by unobserved. The One for Men was developed by \
        preeminent perfumer Olivier Polge. His masterpiece is a sensual, spicy, \
        oriental fragrance developed on the harmony of tobacco with refined base \
        notes of cardamom, ginger, cedarwood, and citrus spice accord. It is both \
        classic and modern, vibrant and engaging.",
        productGender: 'Men'
    },
    {
        productBrand: 'GUCCI',
        productName: "Bloom Eau de Parfum For Her",
        productImg: 'Bloom Eau de Parfum For Her.png',
        productPrice: [
            { vol: '50 ML', price: '$97'},
            { vol: '75 ML', price: '$128'},
        ],
        productScent: ['Floral'],
        productNotes: 'Rangoon Creeper, Jasmine Bud, Tuberose.',
        productDes: "Capturing the spirit of the contemporary, diverse, and authentic women of \
        Gucci, envisioned as a thriving garden of flowers, Bloom Eau de Parfum For Her is created \
        to unfold like its name. Notes of natural tuberose and jasmine create an unexpectedly rich \
        white floral scent on the skin. Rangoon creeper—a plant discovered in south India that \
        changes color from white to pink and finally to red when it blooms—infuses a powdery floral \
        edge to the fragrance.",
        productGender: 'Women'
    },
    {
        productBrand: 'GUCCI',
        productName: "Flora By Gucci - Gorgeous Gardenia",
        productImg: 'Flora By Gucci - Gorgeous Gardenia.png',
        productPrice: [
            { vol: '50 ML', price: '$78'},
            { vol: '75 ML', price: '$107'},
        ],
        productScent: ['Floral', 'Fruity'],
        productNotes: 'Red Berries, Pear, White Gardenia.',
        productDes: "A sumptuous white floral Gorgeous Gardenia is Gucci’s faithful creation of \
        the perfect gardenia. The Gorgeous Gardenia woman exudes a sultry sensuality that is \
        lushly enticing. Men are drawn to her as bees are to a blossoming flower.",
        productGender: 'Women'
    },
    {
        productBrand: 'GUCCI',
        productName: "Guilty Pour Femme",
        productImg: 'Guilty Pour Femme.png',
        productPrice: [
            { vol: '50 ML', price: '$78'},
            { vol: '75 ML', price: '$99'},
        ],
        productScent: ['Floral', 'Fruity', 'Spice'],
        productNotes: 'Geranium, Pink Pepper, Lilac, Peach, Amber, Patchouli.',
        productDes: "Created for a contemporary libertine, Gucci Guilty for Her is defined by a \
        signature Fougère accord of Geranium usually found in men’s scents. Intimate and magical \
        lilac flower is laced with amber to radiate warmth and grace at the fragrance’s heart. ",
        productGender: 'Women'
    },
    {
        productBrand: 'GUCCI',
        productName: "Bamboo Eau de Parfum",
        productImg: 'Bamboo Eau de Parfum.png',
        productPrice: [
            { vol: '50 ML', price: '$95'},
        ],
        productScent: ['Woody', 'Floral', 'Citrus'],
        productNotes: 'Italian Bergamot, Casablanca Lily, Ylang-Ylang, Comoros Sandalwood. ',
        productDes: "Gucci revisits one of its most recognizable icons: the Bamboo—reinterpreted \
        in a modern way. Taking inspiration from the symbolism of strength and elegance, \
        this alluring fragrance translates the essence of today’s multifaceted woman. The modern \
        Gucci woman shares Bamboo’s characteristics of confidence and poise. The fragrance is soft \
        and intense at once to exude power and femininity.",
        productGender: 'Women'
    },
    {
        productBrand: 'GUCCI',
        productName: "Rush",
        productImg: 'Rush.png',
        productPrice: [
            { vol: '50 ML', price: '$80'},
        ],
        productScent: ['Gourmand', 'Floral'],
        productNotes: 'Gardenia, Freesia, Jasmine, Vanilla, Patchouli.',
        productDes: "Introduced in 1999, Gucci Rush is a fantasy to be reached through an \
        intoxicating, addictive combination of florals and spices. A sensual burst unlike any other.",
        productGender: 'Women'
    },
    {
        productBrand: 'MARC JACOBS',
        productName: "Daisy",
        productImg: 'Daisy.png',
        productPrice: [
            { vol: '50 ML', price: '$84'},
            { vol: '100 ML', price: '$104'},
        ],
        productScent: ['Fruity', 'Floral'],
        productNotes: 'Strawberry, Violet Leaves, Jasmine',
        productDes: "Charmingly simple with a signature quality, Daisy Marc Jacobs transports you \
        to a place that’s optimistic, beautiful, and pure. The top of the fragrance is infused with \
        succulent wild berries and soft white violets. At the heart, velvety jasmine warms to a \
        dreamy dry-down of sensual sandalwood, for a romantic, lingering finish.",
        productGender: 'Women'
    },
    {
        productBrand: 'MARC JACOBS',
        productName: "Daisy Eau So Fresh",
        productImg: 'Daisy Eau So Fresh.png',
        productPrice: [
            { vol: '75 ML', price: '$100'},
            { vol: '125 ML', price: '$114'},
        ],
        productScent: ['Fruity', 'Floral'],
        productNotes: 'Red Raspberry, Wild Rose, Warm Plum.',
        productDes: "Sophisticated but not too serious, Daisy Eau So Fresh sparkles with a sunny, \
        vibrant energy. A spirited incarnation of the original Daisy, this fragrance excites the \
        senses with a bright elegance and whimsical charm. Like the woman who wears it, Daisy Eau \
        So Fresh inspires boldness and femininity, sweetness and unpredictability. The scent's \
        enticing top notes of raspberry and grapefruit sparkle on the skin like sunshine, \
        deepening into a sensuous heart of wild rose and a musky, sophisticated finish of warm plum \
        and cedarwood.",
        productGender: 'Women'
    },
    {
        productBrand: 'MARC JACOBS',
        productName: "Daisy Love Eau So Sweet",
        productImg: 'Daisy Love Eau So Sweet.png',
        productPrice: [
            { vol: '50 ML', price: '$84'},
            { vol: '100 ML', price: '$104'},
        ],
        productScent: ['Fruity', 'Floral'],
        productNotes: 'White Raspberry, Daisy Tree Petals, Sugar Musk.',
        productDes: "This fragrance boasts notes of sparkling white raspberries to reveal a \
        lustrous personality, while a soft floral airiness and delicate musk immerse you in the \
        sweetness of the moment. ",
        productGender: 'Women'
    },
    {
        productBrand: 'MARC JACOBS',
        productName: "Daisy Love",
        productImg: 'Daisy Love.png',
        productPrice: [
            { vol: '50 ML', price: '$84'},
            { vol: '100 ML', price: '$104'},
        ],
        productScent: ['Floral'],
        productNotes: 'Cyrstallized Cloudberries, Daisy Tree Petals, Cashmere Musks, Driftwood.',
        productDes: "Addictive and irresistible, Daisy Love fills the air with a contagious love of \
        life. Created by master perfumer Alberto Morillas, this gourmand radiant fragrance reveals \
        its first notes in a vibrant burst of sweet cloudberries. Delicate daisy tree petals mingle \
        with sparkling cashmere musks and driftwood to create a lasting and memorable gourmand twist. ",
        productGender: 'Women'
    },
    {
        productBrand: 'MARC JACOBS',
        productName: "Daisy Dream",
        productImg: 'Daisy Dream.png',
        productPrice: [
            { vol: '50 ML', price: '$84'},
        ],
        productScent: ['Fruity', 'Floral'],
        productNotes: 'Blackberry, Jasmine Flower, White Woods.',
        productDes: "Light and airy, Daisy Dream captivates with its delectably fruity and floral \
        personality. From the first hints of blackberry, fresh grapefruit, and succulent pear, \
        Daisy Dream draws you in with her easy charm and an irresistibly feminine mix of jasmine \
        flower, lychee, and blue wisteria. The fragrance lingers on the skin, drying down to a \
        dreamy finish of white woods, musk, and an elusive hint of coconut water.",
        productGender: 'Women'
    },
    {
        productBrand: 'Dior',
        productName: "J'adore Eau de Parfum",
        productImg: 'jadore-eau-de-parfum.png',
        productPrice: [
            { vol: '30 ML', price: '$75'},
            { vol: '50 ML', price: '$100'},
            { vol: '100 ML', price: '$130'},
            { vol: '150 ML', price: '$165'},
        ],
        productScent: ['Fruity', 'Floral'],
        productNotes: 'Ylang-Ylang, Damascus Rose, Jasmine.',
        productDes: "The ultimate expression of femininity and luxury. This eau de parfum opens \
        with the exotic, floral-fruity notes of ylang-ylang. Damascus Rose and a duo of \
        jasmines—jasmine grandiflorum and Indian jasmine sambac—exude a seductive warmth. \
        It is sensual without being too heavy, floral yet mysterious. A confident signature to \
        celebrate your feminine allure.",
        productGender: 'Women'
    },
    {
        productBrand: 'DOLCE & GABBANA',
        productName: "Dolce Garden",
        productImg: 'dolce-garden.png',
        productPrice: [
            { vol: '50 ML', price: '$94'},
            { vol: '75 ML', price: '$120'},
        ],
        productScent: ['Floral'],
        productNotes: 'Frangipani Flower, Coconut Essence, Ylang-Ylang.',
        productDes: "Dolce Garden Eau de Parfum is a delicious flower blossoming in a garden where \
        simple pleasures and spontaneity set the beat for a joyful afternoon dance.",
        productGender: 'Women'
    },
    {
        productBrand: 'VERSACE',
        productName: "Bright Crystal",
        productImg: ['Bright Crystal.png', 'Bright Crystal-mini.png'],
        productPrice: [
            { vol: 'Mini size (10 ML)', price: '$30'},
            { vol: '30 ML', price: '$57'},
            { vol: '50 ML', price: '$75'},
        ],
        productScent: ['Floral', 'Fruity'],
        productNotes: 'Iced Accord, Yuzu, Pomegranate, Peony, Magnolia, Lotus Flower, Acajou, Vegetal Amber, Musk.',
        productDes: "Inspired by a mixture of Donatella Versace's favorite floral fragrances, \
        Bright Crystal is a fresh, sensual blend of refreshing chilled yuzu and pomegranate \
        mingled with soothing blossoms of peony, magnolia, and lotus flower, warmed with notes \
        of musk and amber.",
        productGender: 'Women'
    },
    {
        productBrand: 'YVES SAINT LAURENT',
        productName: "Black Opium",
        productImg: ['Black Opium.png', 'Black Opium-mini.png'],
        productPrice: [
            { vol: 'Mini size (10 ML)', price: '$29'},
            { vol: '30 ML', price: '$72'},
            { vol: '50 ML', price: '$94'},
            { vol: '90 ML', price: '$124'},
            { vol: '150 ML', price: '$145'},
        ],
        productScent: ['Gourmands'],
        productNotes: 'Black Coffee, White Flowers, and Vanilla',
        productDes: "Black Opium is the highly addictive feminine fragrance from Yves Saint \
        Laurent. Fascinating and seductively intoxicating, the opening notes of adrenaline-rich \
        coffee and the sweet sensuality of vanilla recline into the softness of white flowers \
        for a modern, young, and vibrant interpretation of addiction. Get your dose.",
        productGender: 'Women'
    },
    {
        productBrand: 'YVES SAINT LAURENT',
        productName: "Black Opium Eau de Parfum Intense",
        productImg: ['Black Opium Eau de Parfum Intense.png', 'Black Opium Eau de Parfum Intense-mini.png'],
        productPrice: [
            { vol: 'Mini size (10 ML)', price: '$29'},
            { vol: '30 ML', price: '$72'},
            { vol: '50 ML', price: '$94'},
            { vol: '90 ML', price: '$124'},
            { vol: '150 ML', price: '$145'},
        ],
        productScent: ['Gourmands'],
        productNotes: 'Coffee, Orange Blossom, Absinthe',
        productDes: "Black Opium Eau de Parfum Intense is the stronger, bolder, and more seductive take on the classic Eau de Parfum. The opening notes of adrenaline-rich coffee give way to a vibrant heart of delicate orange blossom, energized by a thrilling aura of blue absinthe.",
        productGender: 'Women'
    },
    {
        productBrand: 'YVES SAINT LAURENT',
        productName: "Y Eau de Toilett",
        productImg: 'Y Eau de Toilett.png',
        productPrice: [
            { vol: 'Mini size (10 ML)', price: '$29'},
            { vol: '40 ML', price: '$60'},
            { vol: '60 ML', price: '$75'},
            { vol: '100 ML', price: '$95'},
            { vol: '200 ML', price: '$145'},
        ],
        productScent: ['Citrus', 'Woody'],
        productNotes: 'Bergamot, Sage, Cedarwood.',
        productDes: "Inspired by the iconic Yves Saint Laurent white t-shirt and black jacket, Y Eau de Toilette represents a balance between freshness and strength. Like a crisp white t-shirt, notes of bergamot, sage, and ginger offer a sharp juicy freshness to challenge convention and exceed all expectations. At its base, soft notes of balsam fir, cedarwood, and marine ambergris embody the subtle power of a tailored black jacket that is refined, chic, and surprisingly powerful. An authentic and bold creation, Y is masculinity redefined.",
        productGender: 'Men'
    },
    {
        productBrand: 'YVES SAINT LAURENT',
        productName: "L'Homme",
        productImg: "L'Homme.png",
        productPrice: [
            { vol: '40 ML', price: '$58'},
            { vol: '60 ML', price: '$72'},
            { vol: '100 ML', price: '$92'},
            { vol: '200 ML', price: '$128'},
        ],
        productScent: ['Spice', 'Fruity'],
        productNotes: 'Bergamot, Cedar, Ozonic Notes, White Ginger, Basil Flower, White Pepper, Violet Leaves, Cedarwood, Haiti Vetiver, Tonka Bean.',
        productDes: "Infused with the force of attraction of a man with style and sensuality, this fresh, woody fragrance is effervescent with bright, sparkling notes of bergamot, ginger, and vetiver. A fragrance of contrasts it is a unique combination of luxury, art, and modernity that exudes a timeless elegance.",
        productGender: 'Women'
    },
    {
        productBrand: 'YVES SAINT LAURENT',
        productName: "Mon Paris Florale Eau de Parfum",
        productImg: "Mon Paris Florale Eau de Parfum.png",
        productPrice: [
            { vol: '30 ML', price: '$74'},
            { vol: '50 ML', price: '$97'},
            { vol: '90 ML', price: '$124'},
        ],
        productScent: ['Floral', 'Fruity'],
        productNotes: 'Pear, Peony, White Musk.',
        productDes: "Infused with the force of attraction of a man with style and sensuality, this fresh, woody fragrance is effervescent with bright, sparkling notes of bergamot, ginger, and vetiver. A fragrance of contrasts it is a unique combination of luxury, art, and modernity that exudes a timeless elegance.",
        productGender: 'Women'
    },
    {
        productBrand: 'YVES SAINT LAURENT',
        productName: "Mon Paris Couture Eau de Parfum",
        productImg: "Mon Paris Couture Eau de Parfum.png",
        productPrice: [
            { vol: '30 ML', price: '$74'},
            { vol: '50 ML', price: '$97'},
        ],
        productScent: ['Floral', 'Fruity'],
        productNotes: 'Grapefruit, Rose, White Musks.',
        productDes: "Feel the rush of a passionate love story with Mon Paris Couture, a new sparkling, citrus interpretation of the iconic Mon Paris floral signature.\ The citrus fruity opening combines raspberry and strawberry from the signature Mon Paris Eau de Parfum with notes of grapefruit and mandarin for a sweetness that is engaging and inviting. Giving way to a sparkling heart, the signature notes of white flowers are now infused with rosebud that is fresh, yet romantic. The warmth of patchouli highlights the delicate white musks.",
        productGender: 'Women'
    },
    {
        productBrand: 'YVES SAINT LAURENT',
        productName: "Mon Paris Eau de Parfum Rollerball",
        productImg: "Mon Paris Eau de Parfum Rollerball.png",
        productPrice: [
            { vol: '10 ML', price: '$29'},
        ],
        productScent: ['Floral', 'Fruity'],
        productNotes: 'Strawberry, Raspberry, Bergamot, Calone, Pear, Orange Flower, Jasmin Sambac, White Peony, Datura, Patchouli, White Musk, Ambrox, Cedarwood, Crystal Moss. ',
        productDes: "Yves Saint Laurent introduces a new sparkling fragrance inspired by Paris, the city of intense love. Red berries and pear immediately exude sensuality and femininity. The exotic white datura flower, the soul of the fragrance, embodies desire and seduces the senses. Finally, this modern and daring floral scent is balanced by creamy white musks and patchouli. The experience is a passionate and unforgettable whirlwind journey to Paris.",
        productGender: 'Women'
    },
    {
        productBrand: 'YVES SAINT LAURENT',
        productName: "Mon Paris Eau de Toilette Travel Spray",
        productImg: "Mon Paris Eau de Toilette Travel Spray.png",
        productPrice: [
            { vol: '10 ML', price: '$22'},
        ],
        productScent: ['Floral', 'Fruity'],
        productNotes: 'Grapefruit, Datura, Rose flower, Patchouli',
        productDes: "Love takes flight with this fresh, luminous version of the iconic scent. The sparkling white floral fragrance of the original Mon Paris Eau de Parfum is transformed into an ultra-luminous floral citrus. A citrus start with juicy grapefruit and raspberry notes brings about a new fruity freshness. The delicate floral heart of white flowers from the signature Eau de Parfum is romanced by orange blossom for a scent that evokes the lighter side of love.",
        productGender: 'Women'
    },
    {
        productBrand: 'Chloé',
        productName: "Roses De Chloé",
        productImg: ["Roses De Chloé.png", 'Roses De Chloé-mini.png'],
        productPrice: [
            { vol: 'Mini size (10 ML)', price: '$28'},
            { vol: '30 ML', price: '$70'},
            { vol: '50 ML', price: '$95'},
            { vol: '75 ML', price: '$125'},
        ],
        productScent: ['Floral'],
        productNotes: 'Bergamot, Damascena Rose Essence, Amber Musk.',
        productDes: "Airy, luminous, subtle…Like thousands of petals from a bouquet of fresh cut roses, Roses de Chloé is an invitation to grace.\
        The scent opens with incredible freshness. A sensation derived from the bergamot, which is gradually joined by a heart of damascena rose essence, modernized with a magnolia accord. Then, on the skin, appears the trail of white musk and amber, signature of the House of Chloé.",
        productGender: 'Women'
    },
    {
        productBrand: 'Chloé',
        productName: "Nomade Eau de Parfum",
        productImg: ["Nomade Eau de Parfum.png", 'Nomade Eau de Parfum-mini.png'],
        productPrice: [
            { vol: 'Mini size (10 ML)', price: '$30'},
            { vol: '30 ML', price: '$76'},
            { vol: '50 ML', price: '$105'},
            { vol: '75 ML', price: '$132'},
        ],
        productScent: ['Floral'],
        productNotes: 'Oakmoss, Freesia, Mirabelle Liquor',
        productDes: "Nomade Eau de Parfum is the essence of a free-spirited and confident women, taking inspiration from her experiences and encounters throughout the world and asserting who she is.\
        The intense mineral character of oakmoss is enveloped in the voluptuous softness of mirabelle plum. From this freshness emanates a bright floral note carried by freesia. Natural ingredients brought into focus by the perfumer Quentin Bisch, revealing accords as exhilarating as the feeling of escape they inspire.",
        productGender: 'Women'
    },
    {
        productBrand: 'Dior',
        productName: "Joy",
        productImg: "Joy.png",
        productPrice: [
            { vol: '30 ML', price: '$75'},
            { vol: '50 ML', price: '$100'},
            { vol: '90 ML', price: '$130'},
        ],
        productScent: ['Floral'],
        productNotes: 'Mandarin, Sandalwood, White Musk',
        productDes: "Discover the new fragrance JOY by Dior. The feeling of joy is finally captured in a perfume with enveloping softness and energy. Shining with the vibrant smile of flowers and citrus fruits, the smooth caress of wood, and the serenity of musks, the fragrance is faceted with a thousand enveloping nuances that lead to a clean, simple expression.",
        productGender: 'Women'
    },
    {
        productBrand: 'Dior',
        productName: "Hypnotic Poison",
        productImg: "Hypnotic Poison.png",
        productPrice: [
            { vol: '30 ML', price: '$62'},
            { vol: '50 ML', price: '$80'},
            { vol: '100 ML', price: '$102'},
        ],
        productScent: ['Spice', 'Woody'],
        productNotes: 'Bitter Almond, Caraway Spice, Sambac Jasmine, Cinnamon, Tuberose, Vanilla, Musk, Mosses, Jucarunda Wood',
        productDes: "Mysterious and mesmerizing, extravagant and bewitching, Hypnotic Poison is a magic potion for modern times. Audacious and profoundly feminine, the fragrance is an unsettling harmony, a fusion of contrasting olfactory facets.",
        productGender: 'Women'
    },
    {
        productBrand: 'Dior',
        productName: "Pure Poison",
        productImg: "Pure Poison.png",
        productPrice: [
            { vol: '50 ML', price: '$100'},
            { vol: '100 ML', price: '$130'},
        ],
        productScent: ['Fruity', 'Floral'],
        productNotes: 'Sweet Orange, Bergamot of Calabre, Mandarin of Sicily, Orange Flower, Jasmine Sambac LMR, Hydroponic Living Gardenia, Sandalwood, White Amber, Musks.',
        productDes: "For the seductress within, here's a fragrance for a new generation of seductress. Pure Poison is a modern floral based on a white flower bouquet, infused with fresh amber. A radiant scent, it emits both purity and seduction with a first impression of soft flowers and the lingering allure of woody-amber and sexy musks.",
        productGender: 'Women'
    },
    {
        productBrand: 'Dior',
        productName: "Poison Girl",
        productImg: "Poison Girl.png",
        productPrice: [
            { vol: '30 ML', price: '$62'},
            { vol: '50 ML', price: '$80'},
            { vol: '100 ML', price: '$102'},
        ],
        productScent: ['Gourmands', 'Spice'],
        productNotes: 'Warm Rose, Sparkling Neroli, Icy Orange',
        productDes: "Poison Girl is a floral gourmand that seduces with a fruity floral top note and the addictive base. A pairing of icy-cool and juicy oranges complement each other while armfuls of sensual flowers introduce a spirited hot and cold ambiance. Lastly, tonka bean and vanilla notes spread their sensual and bittersweet caress.",
        productGender: 'Women'
    },
    {
        productBrand: 'Dior',
        productName: "Eau Sauvage",
        productImg: "Eau Sauvage.png",
        productPrice: [
            { vol: '50 ML', price: '$75'},
            { vol: '100 ML', price: '$95'},
        ],
        productScent: ['Fruity'],
        productNotes: 'Lemon, Rosemary, Petit Grain, Basil, Water Jasmine, Vetiver.',
        productDes: "Lucid and willful, Eau Sauvage is the perfume of the cult of elegance, refinement, and good humor. With the zest of citrus fruits for freshness, an invigorating bouquet of herbs, a hint of jasmine and vetiver for the sensual touch, and oakmoss to conquer and seduce, it will remain a fresh, discreet classic.",
        productGender: 'Women'
    },
    {
        productBrand: 'CHANEL',
        productName: "CHANCE EAU FRAÎCHE",
        productImg: "CHANCE EAU FRAÎCHE.png",
        productPrice: [
            { vol: '30 ML', price: '$62'},
            { vol: '50 ML', price: '$85'},
            { vol: '100 ML', price: '$107'},
        ],
        productScent: ['Fruity', 'Floral'],
        productNotes: 'Citron, Jasmine, Teakwood',
        productDes: "A fresh, sparkling floral expression of CHANCE—a surge of energy that sweeps you into a whirlwind of happiness and fantasy.\
        A whirlwind of energy and vitality intertwines the zesty freshness of citron with the softness of jasmine and the vibrant presence of teakwood.",
        productGender: 'Women'
    },
    {
        productBrand: 'CHANEL',
        productName: "N°5 Eau de Parfum",
        productImg: "N°5 Eau de Parfum.png",
        productPrice: [
            { vol: '30 ML', price: '$80'},
            { vol: '50 ML', price: '$105'},
            { vol: '100 ML', price: '$135'},
        ],
        productScent: ['Woody', 'Floral'],
        productNotes: 'Rose, ylang-ylang, jasmine, lily, vetiver, sandalwood, vanilla, amber, patchouli',
        productDes: "The now and forever fragrance. The ultimate in femininity. An elegant, luxurious spray closest in strength and character to the parfum form. The sleek, portable signature bottle is perfect for the dressing table or travel.",
        productGender: 'Women'
    },
    {
        productBrand: 'CHANEL',
        productName: "N°5 L’EAU",
        productImg: "N°5 L’EAU.png",
        productPrice: [
            { vol: '35 ML', price: '$80'},
            { vol: '50 ML', price: '$105'},
            { vol: '100 ML', price: '$135'},
        ],
        productScent: ['Fruity', 'Floral'],
        productNotes: 'Lemon, mandarin, orange, neroli ,aldehydes, rose, ylang-ylang, jasmine, white musk.',
        productDes: "A modern, fresh and vibrant embodiment of the now and forever scent. Timeless and audacious, simple and sophisticated. N°5 L’EAU is the N°5 of today. \
        Composed by Chanel perfumer Olivier Polge, N°5 L’EAU features dynamic, crisp top notes of lemon, mandarin, and orange that reveal lightheartedness and transparency. The emblematic heart of the bouquet unfolds with rose, jasmine, and a new fraction of ylang ylang, more modern than ever. Behind this floral whirlwind lies an unprecedented sense of liveliness: the vibrant echo of cedar, accompanied by soft and cottony musk notes.",
        productGender: 'Women'
    },
    {
        productBrand: 'CHANEL',
        productName: "COCO Noir",
        productImg: "COCO Noir.png",
        productPrice: [
            { vol: '50 ML', price: '$105'},
            { vol: '100 ML', price: '$135'},
        ],
        productScent: ['Fruity', 'Floral'],
        productNotes: 'apefruit, Bergamot, Rose, Jasmine,  Indonesian Patchouli and Sandalwood',
        productDes: "Magnetic and uncompromising, COCO NOIR reveals a black that is intimate, seductive and intensely brilliant. Striking top notes of Grapefruit and Bergamot accentuate the floral accord, with Rose and Jasmine, while Indonesian Patchouli and Sandalwood notes add warmth.",
        productGender: 'Women'
    },
    {
        productBrand: 'BVLGARI',
        productName: "Omnia Coral",
        productImg: ["Omnia Coral.png", 'Omnia Coral-mini.png'],
        productPrice: [
            { vol: 'Mini size (10 ML)', price: '$27'},
            { vol: '65 ML', price: '$86'},
        ],
        productScent: ['Fruity', 'Floral'],
        productNotes: 'Bergamot, Goji Berries, Hibiscus Flower, Water Lily, Pomegranate, Cedarwood',
        productDes: "Omnia Coral is reminiscent of the sun, the resplendence of nature, and far-off oceans. Like an unforgettable piece of coral jewelry, wearing it evokes the essence of summer. \
        A radiant, floral-fruity eau de toilette, this utterly joyful fragrance bursts with tasty colors, juicy undertones, and an abundance of flowers. The fragrance opens with a fresh sensation of sparkling bergamot and fruity goji berries. An unexpected blend of flowers comes forward in the heart notes. The brightly colored orange hibiscus, a flower of great originality and tropical warmth, is set against the water lily, a flower with luminous and transparent floral accents that carry gentle watery undertones. As the fragrance dries down, juicy pomegranate allies with the depth of cedarwood and musks. These notes create a smooth, enveloping trail that adds a light, sensual nuance to a joyful and colorful scent.",
        productGender: 'Women'
    },
    {
        productBrand: 'BVLGARI',
        productName: "Eau Parfumée Au Thé Blanc",
        productImg: 'Eau Parfumée Au Thé Blanc.png',
        productPrice: [
            { vol: '75 ML', price: '$98'},
        ],
        productScent: ['Citrus', 'Woody'],
        productNotes: 'Artemisia, Musk, White Tea',
        productDes: "Both men and women can wear this delicate, soothing, white tea scent with white pepper accents, day or evening. White tea, the inspiration and main ingredient, has been used in China as an elixir of youth for centuries because of its antioxidant and revitalizing properties. Cultivated only a few times per year, this rare essence invokes an overall sense of wellbeing.",
        productGender: 'Women'
    },
    {
        productBrand: 'BVLGARI',
        productName: "Omnia Crystalline",
        productImg: ["Omnia Crystalline.png", 'Omnia Crystalline-mini.png'],
        productPrice: [
            { vol: 'Mini size (10 ML)', price: '$27'},
            { vol: '40 ML', price: '$70'},
            { vol: '65 ML', price: '$86'},
        ],
        productScent: ['Floral'],
        productNotes: 'Lotus Blossom, Bamboo ',
        productDes: "Capturing the glowing clarity of crystal light, Omnia Crystalline illuminates, reflects, and reveals a woman's unique radiance, her femininity, her beauty - the inexpressible, irresistible lightness of her being.",
        productGender: 'Women'
    },
    {
        productBrand: 'BVLGARI',
        productName: "MAN Black Cologne",
        productImg: 'MAN Black Cologne.png',
        productPrice: [
            { vol: '60 ML', price: '$72'},
            { vol: '100 ML', price: '$95'},
        ],
        productScent: ['Citrus'],
        productNotes: 'Rum, Citrus, Tuberose, Neroli, Benzoin, Sandalwood.',
        productDes: "BVLGARI MAN Black Cologne is a fresh and masculine scent for the contemporary explorer. Addictive and sensual, the jeweler’s oriental eau de cologne opens with notes of rum and citrus, and then blooms into a luminous accord of tuberose and neroli. The base is rounded out with sensual, warm benzoin and sandalwood.",
        productGender: 'Men'
    },
    {
        productBrand: 'BVLGARI',
        productName: "MAN",
        productImg: 'MAN.png',
        productPrice: [
            { vol: '100 ML', price: '$95'},
        ],
        productScent: ['Citrus', 'Woody'],
        productNotes: 'Bergamot, White Pear, Cashmere Wood, Vetiver, Tonka Bean, Musk.',
        productDes: "A fragrance of unadorned elegance, BVLGARI Man balances fresh, vibrant notes of citrusy bergamot with warmer tones of wood. At once classic, modern, and sensual, this everyday fragrance embodies masculine charisma.",
        productGender: 'Men'
    },
    {
        productBrand: 'BVLGARI',
        productName: "MAN Extreme",
        productImg: 'MAN Extreme.png',
        productPrice: [
            { vol: '60 ML', price: '$72'},
            { vol: '100 ML', price: '$95'},
        ],
        productScent: ['Fruity'],
        productNotes: 'Pink Grapefruit, Calabrian Bergamot, Balsa Wood, Haitian Vetiver.',
        productDes: "Inspired by Rome’s vitality and strength, this fragrance stands as a timeless symbol of power. BVLGARI Man Extreme is the expression of an intense Mediterranean freshness, modern and full of contrasts, like a faceted gem.",
        productGender: 'Men'
    },
    {
        productBrand: 'RALPH LAUREN',
        productName: "Polo Red",
        productImg: 'Polo Red.png',
        productPrice: [
            { vol: '75 ML', price: '$56'},
            { vol: '125 ML', price: '$72'},
        ],
        productScent: ['Spice', 'Citrus'],
        productNotes: 'aldehydes, artemisia, lavender, mandarin orange, mint, neroli, bergamot lemon, seagrass, jasmine, rose, brazilian rosewood, geranium, sandalwpod, amber, musk, guaiac wood amen, and cedar.',
        productDes: "A clean, crisp scent that keeps you cool and refreshed. A state-of-the-art collection of skin fitness essentials created for today's active, health-focused man.",
        productGender: 'Men'
    },
    {
        productBrand: 'RALPH LAUREN',
        productName: "Polo Green",
        productImg: 'Polo Green.png',
        productPrice: [
            { vol: '60 ML', price: '$68'},
            { vol: '120 ML', price: '$85'},
        ],
        productScent: ['Woody'],
        productNotes: 'Basil, Chamomile, Tobacco, Patchouli, Oakmoss.',
        productDes: "A masculine blend of tobacco, wood, and leather, energized with the refreshing scent of brilliant herbals. Discover the classic men's fragrance by America's foremost designer, Ralph Lauren.",
        productGender: 'Men'
    },
    {
        productBrand: 'RALPH LAUREN',
        productName: "Polo Blue",
        productImg: 'Polo Blue.png',
        productPrice: [
            { vol: '75 ML', price: '$69'},
            { vol: '125 ML', price: '$86'},
        ],
        productScent: ['Woody', 'Citrus'],
        productNotes: 'Melon de Cavaillon, Lush Accord, Lush Watery Melon, Fresh Sliced Cucumber, Tangerine, Clary Sage Absolute, Geranium, Basil Verbena, Washed Suede, Velvety Moss, Amber Wood, Patchouli Coeur, Sheer Musk.',
        productDes: "Polo Blue evokes a feeling of the freedom of the big, blue sky and the energy of the open waters, combined with an invigorating blast of fresh air. This lush fragrance for men is a fresh blend of aquatic accords combined with spicy basil, verbena, and clary sage, softened with soothing notes of washed suede, velvety moss, and sheer musk.",
        productGender: 'Men'
    },
    {
        productBrand: 'RALPH LAUREN',
        productName: "Polo Black",
        productImg: 'Polo Black.png',
        productPrice: [
            { vol: '75 ML', price: '$68'},
            { vol: '125 ML', price: '$85'},
            { vol: '200 ML', price: '$105'},
        ],
        productScent: ['Fruity', 'Citrus'],
        productNotes: 'Iced Mango, Silver Armoise, Patchouli Noir.',
        productDes: "This modern, daring fragrance is a bold fusion of iced mango, silver armoise, and patchouli noir.",
        productGender: 'Men'
    },
    {
        productBrand: 'RALPH LAUREN',
        productName: "Polo Ultra Blue",
        productImg: 'Polo Ultra Blue.png',
        productPrice: [
            { vol: '75 ML', price: '$69'},
            { vol: '125 ML', price: '$86'},
        ],
        productScent: ['Aqua', 'Citrus'],
        productNotes: 'Citrus, Article, Ambertonic, Salty Mineral Accord',
        productDes: "burst of fragrance is for the man who balances success and leisure. Polo Ultra Blue evokes the cool and crisp feeling of the sea. The long-lasting scent embodies ultimate freshness for the sporting gentleman. With its notes of cedrat lemon, ambertonic, and salt minerals, Polo Ultra Blue is a burst of refreshing aquatic fragrance.",
        productGender: 'Men'
    },
    {
        productBrand: 'RALPH LAUREN',
        productName: "Polo Red Rush",
        productImg: 'Polo Red Rush.png',
        productPrice: [
            { vol: '40 ML', price: '$50'},
            { vol: '75 ML', price: '$68'},
            { vol: '125 ML', price: '$85'},
        ],
        productScent: ['Aqua', 'Spice'],
        productNotes: 'Crisp Red Mandarin, Energizing Fresh Mint, Cedarwood',
        productDes: "The new Polo Red Rush delivers an instant rush of freshness and energy. This energizing mix is driven by red mandarin, boosted with fresh mint, and finished with cedarwood. It demands you to seize the moment and feel the rush of passion, energy, and freedom.",
        productGender: 'Men'
    },
]

var priceId = $('.lattest-product-area').attr('id');
var priceIndex;

function prod(index){
    var selectedImg, selectedPrice;
    if (typeof(products[index].productImg) == 'object') {
        selectedImg = products[index].productImg[0];
    }else if (typeof(products[index].productImg) == 'string'){
        selectedImg = products[index].productImg;
    }
    selectedPrice = products[index].productPrice[priceIndex].price;
    return [selectedImg, selectedPrice];
}

function buildSingle(index) {
    var product = document.getElementById('show-product');
    var arry = prod(index);
    var link = '../products/' + arry[0].slice(0, -3) + 'html'
    var hrefLink = '<a href="' + link + '">'

    product.innerHTML += '<div class="col-lg-3 col-md-4"><div class="single-product">' + hrefLink + '<img class="img-fluid" src="../img/products/' + arry[0] + 
                        '" alt=""></a><div class="product-details"><h6>' + products[index].productName + '</h6><div class="price"><p>' + products[index].productBrand + '</p><h6>' + 
                        arry[1] + '</h6><p></p></div></div><div class="card_area d-flex align-items-center"><a class="primary-btn" href="' + 
                        link + '">View more</a></div></div></div>'
}

function buildPrice() {
    for (var i = 0; i < products.length; i++) {
        for (var x = 0; x < products[i].productPrice.length; x++) {
            price = Number(products[i].productPrice[x].price.substring(1));
            if (priceId == '0' && price <= 50){
                priceIndex = x;
                buildSingle(i);
                break;
            }else if (priceId == '1' && price >= 50 && price <= 100){
                priceIndex = x;
                buildSingle(i);
                break;
            }else if (priceId == '2' && price >= 100 && price <= 150) {
                priceIndex = x;
                buildSingle(i);
                break;
            }else if (priceId == '3' && price >= 150) {
                priceIndex = x;
                buildSingle(i);
                break;
            }
        }
    }
}

buildPrice();

document.title = 'EVEANDBOY'

document.getElementById('custom-navbar').innerHTML = '<!-- Header -->\
<header class="header_area sticky-header">\
    <div class="main_menu">\
        <nav class="navbar navbar-expand-lg navbar-light main_box">\
            <div class="container">\
                <!-- Brand and toggle get grouped for better mobile display -->\
                <a class="navbar-brand logo_h" href="../index.html"><img class="resize" src="../img/logo.png" alt="Eve and Boy"></a>\
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"\
                 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
                    <span class="icon-bar"></span>\
                    <span class="icon-bar"></span>\
                    <span class="icon-bar"></span>\
                </button>\
                <!-- Collect the nav links, forms, and other content for toggling -->\
                <div class="collapse navbar-collapse offset" id="navbarSupportedContent">\
                    <ul class="nav navbar-nav menu_nav ml-auto">\
                        <li class="nav-item"><a class="nav-link" href="../index.html">Home</a></li>\
                        <li class="nav-item"><a class="nav-link" style="font-family:EdwardianScriptITC" href="../sprayit.html">Spray it to slay it!</a></li>\
                        <li class="nav-item submenu dropdown">\
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"\
                             aria-expanded="false">Gender</a>\
                            <ul class="dropdown-menu">\
                                <li class="nav-item"><a class="nav-link" href="../gender/men.html">Men</a></li>\
                                <li class="nav-item"><a class="nav-link" href="../gender/women.html">Women</a></li>\
                                <li class="nav-item"><a class="nav-link" href="../gender/unisex.html">Unisex</a></li>\
                            </ul>\
                        </li>\
                        <li class="nav-item submenu dropdown">\
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"\
                             aria-expanded="false">Brand</a>\
                            <ul class="dropdown-menu">\
                                <li class="nav-item"><a class="nav-link" href="../brands/bvlgari-brand.html">Bvlgari</a></li>\
                                <li class="nav-item"><a class="nav-link" href="../brands/chanel-brand.html">Chanel</a></li>\
                                <li class="nav-item"><a class="nav-link" href="../brands/chloe-brand.html">Chloé</a></li>\
                                <li class="nav-item"><a class="nav-link" href="../brands/dior-brand.html">Dior</a></li>\
                                <li class="nav-item"><a class="nav-link" href="../brands/dolcegabbara-brand.html">DOLCE & GABBANA</a></li>\
                                <li class="nav-item"><a class="nav-link" href="../brands/gucci-brand.html">Gucci</a></li>\
                                <li class="nav-item"><a class="nav-link" href="../brands/marcsjacobs-brand.html">Marc Jacobs</a></li>\
                                <li class="nav-item"><a class="nav-link" href="../brands/ralph-lauren.html">RALPH LAUREN</a></li>\
                                <li class="nav-item"><a class="nav-link" href="../brands/versace.html">VERSACE</a></li>\
                                <li class="nav-item"><a class="nav-link" href="../brands/yves-saint-laurent.html">YVES SAINT LAURENT</a></li>\
                            </ul>\
                        </li>\
                        <li class="nav-item submenu dropdown">\
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"\
                             aria-expanded="false">Scent</a>\
                            <ul class="dropdown-menu">\
                                <li class="nav-item"><a class="nav-link" href="../scents/aqua-scent.html">Aqua</a></li>\
                                <li class="nav-item"><a class="nav-link" href="../scents/citrus-scent.html">Citrus</a></li>\
                                <li class="nav-item"><a class="nav-link" href="../scents/floral-scent.html">Floral</a></li>\
                                <li class="nav-item"><a class="nav-link" href="../scents/fruity-scent.html">Fruity</a></li>\
                                <li class="nav-item"><a class="nav-link" href="../scents/qourmand-scent.html">Gourmand</a></li>\
                                <li class="nav-item"><a class="nav-link" href="../scents/spice-scent.html">Spice</a></li>\
                                <li class="nav-item"><a class="nav-link" href="../scents/woody-scent.html">Woody</a></li>\
                            </ul>\
                        </li>\
                        <li class="nav-item active submenu dropdown">\
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"\
                             aria-expanded="false">Price</a>\
                            <ul class="dropdown-menu">\
                                <li class="nav-item"><a class="nav-link" href="price0.html">Less than $50</a></li>\
                                <li class="nav-item"><a class="nav-link" href="price1.html">$50 - $100</a></li>\
                                <li class="nav-item"><a class="nav-link" href="price2.html">$100 - $150</a></li>\
                                <li class="nav-item"><a class="nav-link" href="price3.html">More than $150</a></li>\
                            </ul>\
                        </li>\
                    </ul>\
                    <ul class="nav navbar-nav navbar-right">\
                        <li class="nav-item"><i class="fas fa-shopping-cart"></i></li>\
                    </ul>\
                </div>\
            </div>\
        </nav>\
    </div>\
</header>'