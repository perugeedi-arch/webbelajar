// ==========================================
// 1. DATABASE CERITA (Bisa Tambah Chapter Lain di Sini)
// ==========================================
const storyDatabase = {
    // Novel 2 - Chapter 1
    "n2-ch1": [
        { ruby: "《<ruby>雨中<rt>yǔ zhōng</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>女孩<rt>nǚhái</rt></ruby>》", trans: "《Gadis di Tengah Hujan》" },
        { ruby: "<ruby>第一章<rt>dì-yī zhāng</rt></ruby>：<ruby>陌生<rt>mòshēng</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>城市<rt>chéngshì</rt></ruby>", trans: "Bab 1: Kota yang Asing" },
        { ruby: "<ruby>那一天<rt>nà yì tiān</rt></ruby>，<ruby>城市里<rt>chéngshì lǐ</rt></ruby><ruby>下着<rt>xiàzhe</rt></ruby><ruby>很大<rt>hěn dà</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>雨<rt>yǔ</rt></ruby>。", trans: "Hari itu, hujan turun sangat lebat di kota." },
        { ruby: "<ruby>一个<rt>yí gè</rt></ruby><ruby>十八岁<rt>shíbā suì</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>男孩<rt>nánhái</rt></ruby><ruby>从<rt>cóng</rt></ruby><ruby>一个<rt>yí gè</rt></ruby><ruby>很远<rt>hěn yuǎn</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>村子<rt>cūnzi</rt></ruby><ruby>来到<rt>láidào</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>这里<rt>zhèlǐ</rt></ruby>。", trans: "Seorang anak laki-laki berusia 18 tahun datang ke sini dari desa yang sangat jauh." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>名字<rt>míngzi</rt></ruby><ruby>叫<rt>jiào</rt></ruby><ruby>广俊<rt>Guǎngjùn</rt></ruby>。", trans: "Namanya Guangjun." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>坐船<rt>zuò chuán</rt></ruby><ruby>来到<rt>láidào</rt></ruby><ruby>这个<rt>zhè ge</rt></ruby><ruby>城市<rt>chéngshì</rt></ruby>。", trans: "Dia naik kapal menuju ke kota ini." },
        { ruby: "<ruby>下船<rt>xià chuán</rt></ruby><ruby>以后<rt>yǐhòu</rt></ruby>，<ruby>广俊<rt>Guǎngjùn</rt></ruby><ruby>不知道<rt>bù zhīdào</rt></ruby><ruby>自己<rt>zìjǐ</rt></ruby><ruby>要去<rt>yào qù</rt></ruby><ruby>哪里<rt>nǎlǐ</rt></ruby>。", trans: "Setelah turun dari kapal, Guangjun tidak tahu harus pergi ke mana." },
        { ruby: "“<ruby>我<rt>wǒ</rt></ruby><ruby>现在<rt>xiànzài</rt></ruby><ruby>要去<rt>yào qù</rt></ruby><ruby>哪里<rt>nǎlǐ</rt></ruby><ruby>呢<rt>ne</rt></ruby>？”", trans: "“Sekarang aku harus pergi ke mana ya?”" },
        { ruby: "<ruby>广俊<rt>Guǎngjùn</rt></ruby><ruby>看<rt>kàn</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>看<rt>kàn</rt></ruby><ruby>四周<rt>sìzhōu</rt></ruby>。", trans: "Guangjun melihat sekelilingnya." },
        { ruby: "<ruby>雨<rt>yǔ</rt></ruby><ruby>还在<rt>hái zài</rt></ruby><ruby>下<rt>xià</rt></ruby>，<ruby>而且<rt>érqiě</rt></ruby><ruby>越来越大<rt>yuè lái yuè dà</rt></ruby>。", trans: "Hujan masih turun, bahkan makin lama makin lebat." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>想<rt>xiǎng</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>想<rt>xiǎng</rt></ruby>，<ruby>然后<rt>ránhòu</rt></ruby><ruby>决定<rt>juédìng</rt></ruby><ruby>先<rt>xiān</rt></ruby><ruby>找<rt>zhǎo</rt></ruby><ruby>一个<rt>yí gè</rt></ruby><ruby>住<rt>zhù</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>地方<rt>dìfang</rt></ruby>。", trans: "Dia berpikir sejenak, lalu memutuskan untuk mencari tempat tinggal terlebih dahulu." },
        { ruby: "<ruby>可是<rt>kěshì</rt></ruby>，<ruby>他<rt>tā</rt></ruby><ruby>身上<rt>shēnshang</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>钱<rt>qián</rt></ruby><ruby>不多<rt>bù duō</rt></ruby>。", trans: "Tapi, uang yang dibawanya tidak banyak." },
        { ruby: "“<ruby>还是<rt>háishì</rt></ruby><ruby>先<rt>xiān</rt></ruby><ruby>找个<rt>zhǎo ge</rt></ruby><ruby>便宜<rt>piányi</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>地方<rt>dìfang</rt></ruby><ruby>吧<rt>ba</rt></ruby>……”", trans: "“Lebih baik cari tempat yang murah dulu deh...”" },
        { ruby: "<ruby>广俊<rt>Guǎngjùn</rt></ruby><ruby>走<rt>zǒu</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>很久<rt>hěn jiǔ</rt></ruby>。", trans: "Guangjun berjalan sangat lama." },
        { ruby: "<ruby>后来<rt>hòulái</rt></ruby>，<ruby>他<rt>tā</rt></ruby><ruby>看到<rt>kàndào</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一家<rt>yì jiā</rt></ruby><ruby>小店<rt>xiǎodiàn</rt></ruby>。", trans: "Kemudian, dia melihat sebuah toko kecil." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>摸<rt>mō</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>摸<rt>mō</rt></ruby><ruby>自己<rt>zìjǐ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>肚子<rt>dùzi</rt></ruby>。", trans: "Dia mengelus perutnya." },
        { ruby: "“<ruby>我<rt>wǒ</rt></ruby><ruby>好饿<rt>hǎo è</rt></ruby>……”", trans: "“Aku lapar sekali...”" },
        { ruby: "<ruby>于是<rt>yúshì</rt></ruby>，<ruby>他<rt>tā</rt></ruby><ruby>用<rt>yòng</rt></ruby><ruby>身上<rt>shēnshang</rt></ruby><ruby>不多<rt>bù duō</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>钱<rt>qián</rt></ruby><ruby>买<rt>mǎi</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一个<rt>yí gè</rt></ruby><ruby>汉堡<rt>hànbǎo</rt></ruby>。", trans: "Maka, dia menggunakan sisa uangnya yang tidak banyak untuk membeli sebuah hamburger." },
        { ruby: "<ruby>这是<rt>zhè shì</rt></ruby><ruby>他<rt>tā</rt></ruby><ruby>今晚<rt>jīnwǎn</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>晚饭<rt>wǎnfàn</rt></ruby>。", trans: "Ini adalah makan malamnya untuk nanti malam." },
        { ruby: "<ruby>广俊<rt>Guǎngjùn</rt></ruby><ruby>一个人<rt>yí gè rén</rt></ruby><ruby>坐<rt>zuò</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>那里<rt>nàlǐ</rt></ruby><ruby>吃<rt>chī</rt></ruby><ruby>汉堡<rt>hànbǎo</rt></ruby>。", trans: "Guangjun duduk sendirian di sana sambil makan hamburger." },
        { ruby: "<ruby>外面<rt>wàimian</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>雨<rt>yǔ</rt></ruby><ruby>还没<rt>hái méi</rt></ruby><ruby>有<rt>yǒu</rt></ruby><ruby>停<rt>tíng</rt></ruby>。", trans: "Hujan di luar belum berhenti." },
        { ruby: "<ruby>而且<rt>érqiě</rt></ruby>，<ruby>雨<rt>yǔ</rt></ruby><ruby>下得<rt>xià de</rt></ruby><ruby>越来越大<rt>yuè lái yuè dà</rt></ruby>。", trans: "Bahkan, hujan turun makin lama makin deras." },
        { ruby: "<ruby>广俊<rt>Guǎngjùn</rt></ruby><ruby>看着<rt>kànzhe</rt></ruby><ruby>窗外<rt>chuāngwài</rt></ruby>，<ruby>心里<rt>xīnlǐ</rt></ruby><ruby>有一点<rt>yǒu yìdiǎn</rt></ruby><ruby>害怕<rt>hàipà</rt></ruby>。", trans: "Guangjun menatap ke luar jendela, di dalam hatinya merasa agak takut." },
        { ruby: "“<ruby>我<rt>wǒ</rt></ruby><ruby>以后<rt>yǐhòu</rt></ruby><ruby>要<rt>yào</rt></ruby><ruby>怎么办<rt>zěnme bàn</rt></ruby><ruby>呢<rt>ne</rt></ruby>？”", trans: "“Nanti aku harus bagaimana ya?”" },
        { ruby: "<ruby>广俊<rt>Guǎngjùn</rt></ruby><ruby>没有<rt>méiyǒu</rt></ruby><ruby>说话<rt>shuōhuà</rt></ruby>。", trans: "Guangjun tidak berbicara." },
        { ruby: "<ruby>在<rt>zài</rt></ruby><ruby>这场<rt>zhè chǎng</rt></ruby><ruby>越来越大<rt>yuè lái yuè dà</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>雨中<rt>yǔ zhōng</rt></ruby>，<ruby>他<rt>tā</rt></ruby><ruby>一个人<rt>yí gè rén</rt></ruby><ruby>坐<rt>zuò</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>那里<rt>nàlǐ</rt></ruby>，<ruby>想着<rt>xiǎngzhe</rt></ruby><ruby>自己<rt>zìjǐ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>未来<rt>wèilái</rt></ruby>。", trans: "Di tengah hujan yang makin lebat ini, dia duduk sendirian di sana, memikirkan masa depannya." }
    ],

    // Novel 2 - Chapter 2
    "n2-ch2": [
        { ruby: "<ruby>雨<rt>yǔ</rt></ruby><ruby>下<rt>xià</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一整夜<rt>yì zhěng yè</rt></ruby>。", trans: "Hujan turun sepanjang malam." },
        { ruby: "<ruby>广俊<rt>Guǎngjùn</rt></ruby><ruby>拿<rt>ná</rt></ruby><ruby>着<rt>zhe</rt></ruby><ruby>自己<rt>zìjǐ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>行李<rt>xíngli</rt></ruby>，<ruby>在<rt>zài</rt></ruby><ruby>街上<rt>jiēshang</rt></ruby><ruby>慢慢地<rt>mànmàn de</rt></ruby><ruby>走<rt>zǒu</rt></ruby><ruby>着<rt>zhe</rt></ruby>。", trans: "Guangjun membawa barang bawaannya, berjalan perlahan di jalanan." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>衣服<rt>yīfu</rt></ruby><ruby>已经<rt>yǐjīng</rt></ruby><ruby>湿<rt>shī</rt></ruby><ruby>了<rt>le</rt></ruby>，<ruby>鞋子<rt>xiézi</rt></ruby><ruby>也<rt>yě</rt></ruby><ruby>湿<rt>shī</rt></ruby><ruby>了<rt>le</rt></ruby>。", trans: "Pakaiannya sudah basah, sepatunya juga basah." },
        { ruby: "“<ruby>这个<rt>zhè ge</rt></ruby><ruby>城市<rt>chéngshì</rt></ruby><ruby>真的<rt>zhēn de</rt></ruby><ruby>很大<rt>hěn dà</rt></ruby>……”", trans: "“Kota ini benar-benar sangat besar...”" },
        { ruby: "<ruby>广俊<rt>Guǎngjùn</rt></ruby><ruby>看<rt>kàn</rt></ruby><ruby>着<rt>zhe</rt></ruby><ruby>周围<rt>zhōuwéi</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>高楼<rt>gāolóu</rt></ruby><ruby>和<rt>hé</rt></ruby><ruby>陌生<rt>mòshēng</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>人<rt>rén</rt></ruby>。", trans: "Guangjun melihat gedung-gedung tinggi dan orang-orang yang asing di sekelilingnya." },
        { ruby: "<ruby>这里<rt>zhèlǐ</rt></ruby><ruby>和<rt>hé</rt></ruby><ruby>他<rt>tā</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>村子<rt>cūnzi</rt></ruby><ruby>完全<rt>wánquán</rt></ruby><ruby>不一样<rt>bù yíyàng</rt></ruby>。", trans: "Di sini benar-benar berbeda dengan desanya." },
        { ruby: "<ruby>在<rt>zài</rt></ruby><ruby>村子<rt>cūnzi</rt></ruby><ruby>里<rt>lǐ</rt></ruby>，<ruby>大家<rt>dàjiā</rt></ruby><ruby>都<rt>dōu</rt></ruby><ruby>认识<rt>rènshi</rt></ruby><ruby>他<rt>tā</rt></ruby>。", trans: "Di desa, semua orang mengenalnya." },
        { ruby: "<ruby>可是<rt>kěshì</rt></ruby><ruby>现在<rt>xiànzài</rt></ruby>，<ruby>在<rt>zài</rt></ruby><ruby>这个<rt>zhè ge</rt></ruby><ruby>城市<rt>chéngshì</rt></ruby><ruby>里<rt>lǐ</rt></ruby>，<ruby>没有<rt>méiyǒu</rt></ruby><ruby>人<rt>rén</rt></ruby><ruby>认识<rt>rènshi</rt></ruby><ruby>他<rt>tā</rt></ruby>。", trans: "Tapi sekarang, di kota ini, tidak ada satu orang pun yang mengenalnya." },
        { ruby: "<ruby>走<rt>zǒu</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一会儿<rt>yíhuìr</rt></ruby><ruby>以后<rt>yǐhòu</rt></ruby>，<ruby>广俊<rt>Guǎngjùn</rt></ruby><ruby>终于<rt>zhōngyú</rt></ruby><ruby>找到<rt>zhǎodào</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一家<rt>yì jiā</rt></ruby><ruby>小旅馆<rt>xiǎo lǚguǎn</rt></ruby>。", trans: "Setelah berjalan sebentar, Guangjun akhirnya menemukan sebuah penginapan kecil." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>走进去<rt>zǒu jìnqù</rt></ruby>，<ruby>看到<rt>kàndào</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一个<rt>yí gè</rt></ruby><ruby>老人<rt>lǎorén</rt></ruby>。", trans: "Dia berjalan masuk, lalu melihat seorang pria tua." },
        { ruby: "“<ruby>你好<rt>nǐ hǎo</rt></ruby>，<ruby>请问<rt>qǐngwèn</rt></ruby><ruby>这里<rt>zhèlǐ</rt></ruby><ruby>可以<rt>kěyǐ</rt></ruby><ruby>住<rt>zhù</rt></ruby><ruby>一晚<rt>yì wǎn</rt></ruby><ruby>吗<rt>ma</rt></ruby>？”", trans: "“Halo, permisi, apakah di sini bisa menginap satu malam?”" },
        { ruby: "<ruby>老人<rt>lǎorén</rt></ruby><ruby>看<rt>kàn</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>看<rt>kàn</rt></ruby><ruby>他<rt>tā</rt></ruby>，<ruby>然后<rt>ránhòu</rt></ruby><ruby>点<rt>diǎn</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>点<rt>diǎn</rt></ruby><ruby>头<rt>tóu</rt></ruby>。", trans: "Pria tua itu menatapnya sejenak, lalu mengangguk." },
        { ruby: "“<ruby>可以<rt>kěyǐ</rt></ruby>，<ruby>一个<rt>yí gè</rt></ruby><ruby>晚上<rt>wǎnshang</rt></ruby><ruby>三十<rt>sānshí</rt></ruby><ruby>块<rt>kuài</rt></ruby>。”", trans: "“Bisa, satu malam tiga puluh kuai (yuan).”" },
        { ruby: "<ruby>广俊<rt>Guǎngjùn</rt></ruby><ruby>打开<rt>dǎkāi</rt></ruby><ruby>自己<rt>zìjǐ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>钱包<rt>qiánbāo</rt></ruby>。", trans: "Guangjun membuka dompetnya." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>数<rt>shǔ</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>数<rt>shǔ</rt></ruby><ruby>里面<rt>lǐmiàn</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>钱<rt>qián</rt></ruby>。", trans: "Dia menghitung uang di dalamnya." },
        { ruby: "<ruby>钱<rt>qián</rt></ruby><ruby>已经<rt>yǐjīng</rt></ruby><ruby>不多<rt>bù duō</rt></ruby><ruby>了<rt>le</rt></ruby>。", trans: "Uangnya sudah tidak banyak lagi." },
        { ruby: "“<ruby>好吧<rt>hǎo ba</rt></ruby>，<ruby>我<rt>wǒ</rt></ruby><ruby>住<rt>zhù</rt></ruby><ruby>一晚<rt>yì wǎn</rt></ruby>。”", trans: "“Baiklah, saya menginap satu malam.”" },
        { ruby: "<ruby>拿到<rt>nádào</rt></ruby><ruby>房间<rt>fángjiān</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>钥匙<rt>yàoshi</rt></ruby><ruby>以后<rt>yǐhòu</rt></ruby>，<ruby>广俊<rt>Guǎngjùn</rt></ruby><ruby>走<rt>zǒu</rt></ruby><ruby>到<rt>dào</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>自己<rt>zìjǐ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>房间<rt>fángjiān</rt></ruby>。", trans: "Setelah mendapatkan kunci kamar, Guangjun berjalan menuju kamarnya." },
        { ruby: "<ruby>房间<rt>fángjiān</rt></ruby><ruby>很小<rt>hěn xiǎo</rt></ruby>，<ruby>但是<rt>dànshì</rt></ruby><ruby>很干净<rt>hěn gānjìng</rt></ruby>。", trans: "Kamarnya sangat kecil, tetapi sangat bersih." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>把<rt>bǎ</rt></ruby><ruby>行李<rt>xíngli</rt></ruby><ruby>放<rt>fàng</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>旁边<rt>pángbiān</rt></ruby>，<ruby>然后<rt>ránhòu</rt></ruby><ruby>坐<rt>zuò</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>床上<rt>chuángshang</rt></ruby>。", trans: "Dia meletakkan barang bawaannya di samping, lalu duduk di tempat tidur." },
        { ruby: "<ruby>窗外<rt>chuāngwài</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>雨<rt>yǔ</rt></ruby><ruby>还在<rt>hái zài</rt></ruby><ruby>继续<rt>jìxù</rt></ruby>。", trans: "Hujan di luar jendela masih terus berlanjut." },
        { ruby: "<ruby>广俊<rt>Guǎngjùn</rt></ruby><ruby>看<rt>kàn</rt></ruby><ruby>着<rt>zhe</rt></ruby><ruby>窗外<rt>chuāngwài</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>城市<rt>chéngshì</rt></ruby>，<ruby>想起<rt>xiǎngqǐ</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>自己<rt>zìjǐ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>家<rt>jiā</rt></ruby>。", trans: "Guangjun menatap kota di luar jendela, teringat pada rumahnya." },
        { ruby: "“<ruby>爸爸<rt>bàba</rt></ruby>，<ruby>妈妈<rt>māma</rt></ruby>，<ruby>我<rt>wǒ</rt></ruby><ruby>现在<rt>xiànzài</rt></ruby><ruby>已经<rt>yǐjīng</rt></ruby><ruby>来到<rt>láidào</rt></ruby><ruby>城市<rt>chéngshì</rt></ruby><ruby>了<rt>le</rt></ruby>。”", trans: "“Ayah, Ibu, sekarang aku sudah sampai di kota.”" },
        { ruby: "“<ruby>可是<rt>kěshì</rt></ruby>，<ruby>我<rt>wǒ</rt></ruby><ruby>不知道<rt>bù zhīdào</rt></ruby><ruby>未来<rt>wèilái</rt></ruby><ruby>会<rt>huì</rt></ruby><ruby>怎么样<rt>zěnmeyàng</rt></ruby>……”", trans: "“Tapi, aku tidak tahu bagaimana masa depanku nanti...”" },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>拿出<rt>ná chū</rt></ruby><ruby>手机<rt>shǒujī</rt></ruby>，<ruby>看<rt>kàn</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一眼<rt>yì yǎn</rt></ruby>。", trans: "Dia mengeluarkan ponselnya dan melihatnya sekilas." },
        { ruby: "<ruby>手机<rt>shǒujī</rt></ruby><ruby>里<rt>lǐ</rt></ruby><ruby>没有<rt>méiyǒu</rt></ruby><ruby>新<rt>xīn</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>消息<rt>xiāoxi</rt></ruby>。", trans: "Tidak ada pesan baru di ponselnya." },
        { ruby: "<ruby>广俊<rt>Guǎngjùn</rt></ruby><ruby>放下<rt>fàngxià</rt></ruby><ruby>手机<rt>shǒujī</rt></ruby>，<ruby>慢慢地<rt>mànmàn de</rt></ruby><ruby>躺下<rt>tǎngxià</rt></ruby>。", trans: "Guangjun meletakkan ponselnya, lalu perlahan-lahan berbaring." },
        { ruby: "<ruby>今天<rt>jīntiān</rt></ruby><ruby>发生<rt>fāshēng</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>很多<rt>hěn duō</rt></ruby><ruby>事情<rt>shìqing</rt></ruby>。", trans: "Hari ini terjadi banyak hal." },
        { ruby: "<ruby>坐船<rt>zuò chuán</rt></ruby><ruby>来到<rt>láidào</rt></ruby><ruby>陌生<rt>mòshēng</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>城市<rt>chéngshì</rt></ruby>。", trans: "Naik kapal menuju kota yang asing." },
        { ruby: "<ruby>一个人<rt>yí gè rén</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>大雨<rt>dà yǔ</rt></ruby><ruby>里<rt>lǐ</rt></ruby><ruby>走路<rt>zǒu lù</rt></ruby>。", trans: "Berjalan sendirian di tengah hujan lebat." },
        { ruby: "<ruby>还有<rt>háiyǒu</rt></ruby><ruby>一个人<rt>yí gè rén</rt></ruby><ruby>吃<rt>chī</rt></ruby><ruby>晚饭<rt>wǎnfàn</rt></ruby>。", trans: "Serta makan malam sendirian." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>觉得<rt>juéde</rt></ruby><ruby>很累<rt>hěn lèi</rt></ruby>。", trans: "Dia merasa sangat lelah." },
        { ruby: "“<ruby>明天<rt>míngtiān</rt></ruby><ruby>开始<rt>kāishǐ</rt></ruby>，<ruby>我<rt>wǒ</rt></ruby><ruby>一定<rt>yídìng</rt></ruby><ruby>要<rt>yào</rt></ruby><ruby>找到<rt>zhǎodào</rt></ruby><ruby>工作<rt>gōngzuò</rt></ruby>。”", trans: "“Mulai besok, aku harus bisa menemukan pekerjaan.”" },
        { ruby: "<ruby>说完<rt>shuō wán</rt></ruby><ruby>以后<rt>yǐhòu</rt></ruby>，<ruby>广俊<rt>Guǎngjùn</rt></ruby><ruby>闭上<rt>bì shang</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>眼睛<rt>yǎnjing</rt></ruby>。", trans: "Setelah selesai berbicara, Guangjun memejamkan matanya." },
        { ruby: "<ruby>但是<rt>dànshì</rt></ruby>，<ruby>他<rt>tā</rt></ruby><ruby>不知道<rt>bù zhīdào</rt></ruby>。", trans: "Tetapi, dia tidak tahu." },
        { ruby: "<ruby>在<rt>zài</rt></ruby><ruby>这个<rt>zhè ge</rt></ruby><ruby>下雨<rt>xià yǔ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>城市<rt>chéngshì</rt></ruby><ruby>里<rt>lǐ</rt></ruby>，<ruby>有一个<rt>yǒu yí gè</rt></ruby><ruby>女孩<rt>nǚhái</rt></ruby>，<ruby>也<rt>yě</rt></ruby><ruby>正在<rt>zhèngzài</rt></ruby><ruby>等待<rt>děngdài</rt></ruby><ruby>着<rt>zhe</rt></ruby><ruby>和<rt>hé</rt></ruby><ruby>他<rt>tā</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>相遇<rt>xiāngyù</rt></ruby>。", trans: "Di kota yang dilanda hujan ini, ada seorang gadis yang juga sedang menunggu pertemuan dengannya." }
    ]
};

// ==========================================
// 2. ENGINE PEMBACA & EVENT
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    var chapterId = document.body.getAttribute("data-chapter");
    var extraData = storyDatabase[chapterId];

    // 1. Buat Toolbar Kontrol Toggle
    var chapterHeader = document.querySelector(".chapter-header");
    if (chapterHeader && !document.querySelector(".reading-controls")) {
        var controlBox = document.createElement("div");
        controlBox.className = "reading-controls";
        controlBox.innerHTML = 
            '<button id="togglePinyin" class="btn-control active">拼 Pinyin: OFF</button>' +
            '<button id="toggleTrans" class="btn-control active">文 Arti: OFF</button>' +
            '<span class="audio-tip">💡 Klik kalimat untuk dengar suara</span>';
        chapterHeader.after(controlBox);
    }

    // 2. Format Paragraf Cerita & Pasang Event Suara
    if (extraData) {
        var paragraphs = document.querySelectorAll(".story-content p:not(.scene-break)");
        paragraphs.forEach(function (p, index) {
            if (extraData[index]) {
                p.classList.add("para-block");
                
                // Masukkan HTML Pinyin & Arti terlebih dahulu
                p.innerHTML = 
                    '<div class="hanzi-ruby zh-text">' + extraData[index].ruby + '</div>' +
                    '<div class="translation">' + extraData[index].trans + '</div>';

                // PERBAIKAN UTAMA: Ambil hanya elemen Mandarin (.zh-text) untuk dibaca oleh Audio
                p.onclick = function () {
                    var zhElem = p.querySelector(".zh-text");
                    if (zhElem) {
                        // Hilangkan tag Pinyin/rt dan ambil karakter Hanzi bersihnya saja
                        var cleanText = zhElem.innerText.replace(/[\r\n]/g, "").trim();
                        playAudio(cleanText);
                    }
                };
            }
        });
    }

    // 3. Logic Toggle Pinyin
    var btnPinyin = document.getElementById("togglePinyin");
    if (btnPinyin) {
        btnPinyin.onclick = function () {
            document.body.classList.toggle("hide-pinyin");
            var isActive = !document.body.classList.contains("hide-pinyin");
            btnPinyin.classList.toggle("active", isActive);
            btnPinyin.innerText = "拼 Pinyin: " + (isActive ? "ON" : "OFF");
        };
    }

    // 4. Logic Toggle Arti / Terjemahan
    var btnTrans = document.getElementById("toggleTrans");
    if (btnTrans) {
        btnTrans.onclick = function () {
            document.body.classList.toggle("hide-trans");
            var isActive = !document.body.classList.contains("hide-trans");
            btnTrans.classList.toggle("active", isActive);
            btnTrans.innerText = "文 Arti: " + (isActive ? "ON" : "OFF");
        };
    }

    // Sembunyikan Pinyin dan Arti secara default saat pertama kali dimuat
    document.body.classList.add("hide-pinyin");
    document.body.classList.add("hide-trans");
});

// Pemutar Suara Mandarin
function playAudio(text) {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel(); // Hentikan suara yang sedang jalan
        
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "zh-CN";
        utterance.rate = 0.85;

        // Cari suara Bahasa Mandarin yang tersedia di browser/HP
        var voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            var zhVoice = voices.find(function(v) {
                return v.lang && (v.lang.includes("zh") || v.lang.includes("Chinese"));
            });
            if (zhVoice) utterance.voice = zhVoice;
        }

        window.speechSynthesis.speak(utterance);
    } else {
        alert("Browser kamu belum mendukung fitur suara otomatis.");
    }
}