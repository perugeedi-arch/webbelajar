// ==========================================
// 1. DATABASE CERITA (Novel )
// ==========================================
const storyDatabase = {
    // --------------------------------------
    // NOVEL 1 - Chapter 1 (sesi1)
    // --------------------------------------
    "sesi1": [
        { ruby: "<ruby>傍晚<rt>bàngwǎn</rt></ruby>。", trans: "Sore hari." },
        { ruby: "<ruby>天空<rt>tiānkōng</rt></ruby><ruby>变成<rt>biàn chéng</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>橙色<rt>chéngsè</rt></ruby>。", trans: "Langit berubah menjadi warna jingga." },
        { ruby: "<ruby>夏天<rt>xiàtiān</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>风<rt>fēng</rt></ruby><ruby>轻轻地<rt>qīngqīng de</rt></ruby><ruby>吹<rt>chuī</rt></ruby><ruby>着<rt>zhe</rt></ruby>。", trans: "Angin musim panas bertiup sepoi-sepoi." },
        { ruby: "<ruby>一个<rt>yí gè</rt></ruby><ruby>小男孩<rt>xiǎo nánhái</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>公园<rt>gōngyuán</rt></ruby><ruby>里<rt>lǐ</rt></ruby><ruby>开心<rt>kāixīn</rt></ruby><ruby>地<rt>de</rt></ruby><ruby>跑<rt>pǎo</rt></ruby><ruby>着<rt>zhe</rt></ruby>。", trans: "Anak laki-laki kecil berlari dengan gembira di taman." },
        { ruby: "<ruby>一个<rt>yí gè</rt></ruby><ruby>小女孩<rt>xiǎo nǚhái</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>他<rt>tā</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>后面<rt>hòumiàn</rt></ruby><ruby>追<rt>zhuī</rt></ruby>。", trans: "Anak perempuan kecil mengejar di belakangnya." },
        { ruby: "“<ruby>等<rt>děng</rt></ruby><ruby>等<rt>děng</rt></ruby><ruby>我<rt>wǒ</rt></ruby>！”", trans: "“Tunggu aku!”" },
        { ruby: "<ruby>他们<rt>tāmen</rt></ruby><ruby>一起<rt>yìqǐ</rt></ruby><ruby>笑<rt>xiào</rt></ruby>。", trans: "Mereka tertawa bersama." },
        { ruby: "<ruby>一起<rt>yìqǐ</rt></ruby><ruby>跑<rt>pǎo</rt></ruby>。", trans: "Berlari bersama." },
        { ruby: "<ruby>他们<rt>tāmen</rt></ruby><ruby>一起<rt>yìqǐ</rt></ruby><ruby>荡秋千<rt>dàng qiūqiān</rt></ruby>。", trans: "Mereka bermain ayunan bersama." },
        { ruby: "<ruby>一起<rt>yìqǐ</rt></ruby><ruby>吃<rt>chī</rt></ruby><ruby>冰淇淋<rt>bīngqílín</rt></ruby>。", trans: "Makan es krim bersama." },
        { ruby: "<ruby>玩<rt>wán</rt></ruby><ruby>累<rt>lèi</rt></ruby><ruby>以后<rt>yǐhòu</rt></ruby>。", trans: "Setelah lelah bermain." },
        { ruby: "<ruby>他们<rt>tāmen</rt></ruby><ruby>坐<rt>zuò</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>一棵<rt>yì kē</rt></ruby><ruby>大树<rt>dà shù</rt></ruby><ruby>下面<rt>xiàmiàn</rt></ruby>。", trans: "Mereka duduk di bawah pohon besar." },
        { ruby: "<ruby>看<rt>kàn</rt></ruby><ruby>着<rt>zhe</rt></ruby><ruby>太阳<rt>tàiyáng</rt></ruby><ruby>慢慢<rt>mànmàn</rt></ruby><ruby>落下<rt>luòxià</rt></ruby>。", trans: "Melihat matahari perlahan tenggelam." },
        { ruby: "<ruby>没有<rt>méiyǒu</rt></ruby><ruby>人<rt>rén</rt></ruby><ruby>说话<rt>shuōhuà</rt></ruby>。", trans: "Tidak ada yang berbicara." },
        { ruby: "<ruby>可是<rt>kěshì</rt></ruby>，<ruby>他们<rt>tāmen</rt></ruby><ruby>都<rt>dōu</rt></ruby><ruby>很<rt>hěn</rt></ruby><ruby>开心<rt>kāixīn</rt></ruby>。", trans: "Tapi, mereka semua sangat bahagia." },
        { ruby: "<ruby>过<rt>guò</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一会儿<rt>yíhuìr</rt></ruby>。", trans: "Setelah beberapa saat." },
        { ruby: "<ruby>远处<rt>yuǎnchù</rt></ruby><ruby>传来<rt>chuánlái</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一个<rt>yí gè</rt></ruby><ruby>男人<rt>nánrén</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>声音<rt>shēngyīn</rt></ruby>。", trans: "Terdengar suara seorang pria dari kejauhan." },
        { ruby: "“<ruby>文俊<rt>Wénjùn</rt></ruby>，<ruby>该<rt>gāi</rt></ruby><ruby>回家<rt>huí jiā</rt></ruby><ruby>了<rt>le</rt></ruby>！”", trans: "“Wenjun, waktunya pulang!”" },
        { ruby: "<ruby>小男孩<rt>xiǎo nánhái</rt></ruby><ruby>慢慢<rt>mànmàn</rt></ruby><ruby>站起来<rt>zhàn qǐlái</rt></ruby>。", trans: "Anak laki-laki kecil itu perlahan berdiri." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>看<rt>kàn</rt></ruby><ruby>着<rt>zhe</rt></ruby><ruby>小女孩<rt>xiǎo nǚhái</rt></ruby>。", trans: "Dia menatap anak perempuan kecil itu." },
        { ruby: "“<ruby>我<rt>wǒ</rt></ruby><ruby>要<rt>yào</rt></ruby><ruby>回家<rt>huí jiā</rt></ruby><ruby>了<rt>le</rt></ruby>。”", trans: "“Aku mau pulang dulu.”" },
        { ruby: "<ruby>小女孩<rt>xiǎo nǚhái</rt></ruby><ruby>点<rt>diǎn</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>点<rt>diǎn</rt></ruby><ruby>头<rt>tóu</rt></ruby>。", trans: "Anak perempuan kecil itu mengangguk." },
        { ruby: "<ruby>她<rt>tā</rt></ruby><ruby>笑<rt>xiào</rt></ruby><ruby>着<rt>zhe</rt></ruby><ruby>说<rt>shuō</rt></ruby>：", trans: "Dia tersenyum dan berkata:" },
        { ruby: "“<ruby>那<rt>nà</rt></ruby>……<ruby>下次<rt>xià cì</rt></ruby><ruby>再见<rt>zàijiàn</rt></ruby>。”", trans: "“Kalau begitu... sampai jumpa lagi.”" },
        { ruby: "<ruby>小男孩<rt>xiǎo nánhái</rt></ruby><ruby>也<rt>yě</rt></ruby><ruby>笑<rt>xiào</rt></ruby><ruby>了<rt>le</rt></ruby>。", trans: "Anak laki-laki kecil itu juga tersenyum." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>转身<rt>zhuǎn shēn</rt></ruby><ruby>准备<rt>zhǔnbèi</rt></ruby><ruby>离开<rt>líkāi</rt></ruby>。", trans: "Dia berbalik bersiap untuk pergi." },
        { ruby: "<ruby>可是<rt>kěshì</rt></ruby>，<ruby>走<rt>zǒu</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>几步<rt>jǐ bù</rt></ruby><ruby>以后<rt>yǐhòu</rt></ruby>。", trans: "Tapi, setelah berjalan beberapa langkah." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>突然<rt>tūrán</rt></ruby><ruby>停<rt>tíng</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>下来<rt>xiàlái</rt></ruby>。", trans: "Dia mendadak berhenti." },
        { ruby: "<ruby>好像<rt>hǎoxiàng</rt></ruby><ruby>想起<rt>xiǎngqǐ</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一件<rt>yí jiàn</rt></ruby><ruby>重要<rt>zhòngyào</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>事情<rt>shìqing</rt></ruby>。", trans: "Seolah teringat satu hal penting." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>马上<rt>mǎshàng</rt></ruby><ruby>回头<rt>huí tóu</rt></ruby>。", trans: "Dia segera menoleh." },
        { ruby: "“<ruby>对<rt>duì</rt></ruby><ruby>了<rt>le</rt></ruby>！”", trans: "“Oiya!”" },
        { ruby: "“<ruby>你<rt>nǐ</rt></ruby><ruby>叫<rt>jiào</rt></ruby><ruby>什么<rt>shénme</rt></ruby><ruby>名字<rt>míngzi</rt></ruby>？”", trans: "“Namamu siapa?”" },
        { ruby: "<ruby>小女孩<rt>xiǎo nǚhái</rt></ruby><ruby>看<rt>kàn</rt></ruby><ruby>着<rt>zhe</rt></ruby><ruby>他<rt>tā</rt></ruby>。", trans: "Anak perempuan kecil itu memandangnya." },
        { ruby: "<ruby>轻轻地<rt>qīngqīng de</rt></ruby><ruby>笑<rt>xiào</rt></ruby><ruby>了<rt>le</rt></ruby>。", trans: "Tersenyum lembut." },
        { ruby: "<ruby>一阵风<rt>yí zhèn fēng</rt></ruby><ruby>吹过<rt>chuī guò</rt></ruby>。", trans: "Hembusan angin bertiup lewat." },
        { ruby: "<ruby>她<rt>tā</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>头发<rt>tóufa</rt></ruby><ruby>轻轻地<rt>qīngqīng de</rt></ruby><ruby>飘起来<rt>piāo qǐlái</rt></ruby>。", trans: "Rambutnya berhembus perlahan." },
        { ruby: "<ruby>她<rt>tā</rt></ruby><ruby>慢慢<rt>mànmàn</rt></ruby><ruby>开口<rt>kāi kǒu</rt></ruby>：", trans: "Dia perlahan angkat bicara:" },
        { ruby: "“<ruby>我<rt>wǒ</rt></ruby><ruby>叫<rt>jiào</rt></ruby>……”", trans: "“Namaku...”" },
        { ruby: "……", trans: "..." },
        { ruby: "“<ruby>铃<rt>líng</rt></ruby>——<ruby>铃<rt>líng</rt></ruby>——<ruby>铃<rt>líng</rt></ruby>——”", trans: "“Kring——kring——kring——”" },
        { ruby: "<ruby>闹钟<rt>nàozhōng</rt></ruby><ruby>突然<rt>tūrán</rt></ruby><ruby>响<rt>xiǎng</rt></ruby><ruby>了<rt>le</rt></ruby>。", trans: "Jam weker mendadak berbunyi." },
        { ruby: "<ruby>一个<rt>yí gè</rt></ruby><ruby>少年<rt>shàonián</rt></ruby><ruby>慢慢<rt>mànmàn</rt></ruby><ruby>睁开<rt>zhēng kāi</rt></ruby><ruby>眼睛<rt>yǎnjing</rt></ruby>。", trans: "Seorang pemuda perlahan membuka matanya." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>看<rt>kàn</rt></ruby><ruby>着<rt>zhe</rt></ruby><ruby>天花板<rt>tiānhuābǎn</rt></ruby>。", trans: "Dia menatap langit-langit kamar." },
        { ruby: "<ruby>一句话<rt>yí jù huà</rt></ruby><ruby>也<rt>yě</rt></ruby><ruby>没有<rt>méiyǒu</rt></ruby><ruby>说<rt>shuō</rt></ruby>。", trans: "Sepatah kata pun tidak dia katakan." },
        { ruby: "<ruby>过<rt>guò</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一会儿<rt>yíhuìr</rt></ruby>。", trans: "Setelah beberapa saat." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>轻轻<rt>qīngqīng</rt></ruby><ruby>皱起<rt>zhòu qǐ</rt></ruby><ruby>眉头<rt>méitóu</rt></ruby>。", trans: "Dia sedikit mengerutkan dahi." },
        { ruby: "“<ruby>她<rt>tā</rt></ruby>……<ruby>刚才<rt>gāngcái</rt></ruby><ruby>说<rt>shuō</rt></ruby><ruby>什么<rt>shénme</rt></ruby><ruby>名字<rt>míngzi</rt></ruby>？”", trans: "“Dia... tadi bilang namanya siapa?”" },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>努力地<rt>nǔlì de</rt></ruby><ruby>想<rt>xiǎng</rt></ruby>。", trans: "Dia berusaha keras mengingatnya." },
        { ruby: "<ruby>可是<rt>kěshì</rt></ruby>，<ruby>他<rt>tā</rt></ruby><ruby>还是<rt>háishi</rt></ruby><ruby>想不起来<rt>xiǎng bù qǐlái</rt></ruby>。", trans: "Tapi, dia tetap tidak bisa mengingatnya." },
        { ruby: "<ruby>最后<rt>zuìhòu</rt></ruby>。", trans: "Pada akhirnya." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>苦笑<rt>kǔxiào</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一下<rt>yíxià</rt></ruby>。", trans: "Dia tersenyum kecut." },
        { ruby: "“<ruby>又<rt>yòu</rt></ruby><ruby>忘<rt>wàng</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>吗<rt>ma</rt></ruby>……”", trans: "“Lupa lagi ya...”" },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>慢慢<rt>mànmàn</rt></ruby><ruby>坐起来<rt>zuò qǐlái</rt></ruby>。", trans: "Dia perlahan duduk bangun." },
        { ruby: "<ruby>窗外<rt>chuāngwài</rt></ruby>。", trans: "Di luar jendela." },
        { ruby: "<ruby>新<rt>xīn</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>一天<rt>yì tiān</rt></ruby><ruby>开始<rt>kāishǐ</rt></ruby><ruby>了<rt>le</rt></ruby>。", trans: "Hari yang baru telah dimulai." }
    ],

    // --------------------------------------
    // NOVEL 1 - Chapter 2 (sesi2)
    // --------------------------------------
    "sesi2": [
        { ruby: "<ruby>第二章<rt>dì-èr zhāng</rt></ruby>——<ruby>她<rt>tā</rt></ruby><ruby>是<rt>shì</rt></ruby><ruby>谁<rt>shéi</rt></ruby>？", trans: "Bab 2 —— Siapa Dia?" },
        { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>坐<rt>zuò</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>床上<rt>chuángshang</rt></ruby>。", trans: "Wenjun duduk di tempat tidur." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>还在<rt>hái zài</rt></ruby><ruby>想<rt>xiǎng</rt></ruby><ruby>昨天<rt>zuótiān</rt></ruby><ruby>晚上<rt>wǎnfàn</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>梦<rt>mèng</rt></ruby>。", trans: "Dia masih memikirkan mimpi semalam." },
        { ruby: "<ruby>梦里<rt>mèng lǐ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>那个<rt>nà ge</rt></ruby><ruby>小女孩<rt>xiǎo nǚhái</rt></ruby>。", trans: "Anak perempuan kecil di dalam mimpi itu." },
        { ruby: "<ruby>她<rt>tā</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>笑<rt>xiào</rt></ruby>。", trans: "Senyumannya." },
        { ruby: "<ruby>她<rt>tā</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>声音<rt>shēngyīn</rt></ruby>。", trans: "Suaranya." },
        { ruby: "<ruby>还有<rt>háiyǒu</rt></ruby>……", trans: "Dan juga..." },
        { ruby: "<ruby>她<rt>tā</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>名字<rt>míngzi</rt></ruby>。", trans: "Namanya." },
        { ruby: "<ruby>可是<rt>kěshì</rt></ruby>，<ruby>他<rt>tā</rt></ruby><ruby>还是<rt>háishi</rt></ruby><ruby>想不起来<rt>xiǎng bù qǐlái</rt></ruby>。", trans: "Tapi, dia tetap tidak bisa mengingatnya." },
        { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>轻轻地<rt>qīngqīng de</rt></ruby><ruby>叹了口气<rt>tàn le kǒu qì</rt></ruby>。", trans: "Wenjun menghela napas perlahan." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>打开<rt>dǎkāi</rt></ruby><ruby>桌子<rt>zhuōzi</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>抽屉<rt>chōuti</rt></ruby>。", trans: "Dia membuka laci meja." },
        { ruby: "<ruby>里面<rt>lǐmiàn</rt></ruby><ruby>有<rt>yǒu</rt></ruby><ruby>一本<rt>yì běn</rt></ruby><ruby>画本<rt>huàběn</rt></ruby>。", trans: "Di dalamnya ada sebuah buku gambar." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>慢慢<rt>mànmàn</rt></ruby><ruby>打开<rt>dǎkāi</rt></ruby>。", trans: "Dia membukanya perlahan." },
        { ruby: "<ruby>第一页<rt>dì-yī yè</rt></ruby>。", trans: "Halaman pertama." },
        { ruby: "<ruby>第二页<rt>dì-èr yè</rt></ruby>。", trans: "Halaman kedua." },
        { ruby: "<ruby>第三页<rt>dì-sān yè</rt></ruby>。", trans: "Halaman ketiga." },
        { ruby: "……", trans: "..." },
        { ruby: "<ruby>每一页<rt>měi yí yè</rt></ruby><ruby>都<rt>dōu</rt></ruby><ruby>有<rt>yǒu</rt></ruby><ruby>一个<rt>yí gè</rt></ruby><ruby>小女孩<rt>xiǎo nǚhái</rt></ruby>。", trans: "Setiap halaman ada gambar seorang anak perempuan kecil." },
        { ruby: "<ruby>她<rt>tā</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>笑<rt>xiào</rt></ruby>。", trans: "Dia sedang tersenyum." },
        { ruby: "<ruby>她<rt>tā</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>公园<rt>gōngyuán</rt></ruby><ruby>里<rt>lǐ</rt></ruby><ruby>玩<rt>wán</rt></ruby>。", trans: "Dia sedang bermain di taman." },
        { ruby: "<ruby>她<rt>tā</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>荡秋千<rt>dàng qiūqiān</rt></ruby>。", trans: "Dia sedang bermain ayunan." },
        { ruby: "<ruby>她<rt>tā</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>吃<rt>chī</rt></ruby><ruby>冰淇淋<rt>bīngqílín</rt></ruby>。", trans: "Dia sedang makan es krim." },
        { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>安静地<rt>ānjìng de</rt></ruby><ruby>看着<rt>kànzhe</rt></ruby><ruby>那些<rt>nàxiē</rt></ruby><ruby>画<rt>huà</rt></ruby>。", trans: "Wenjun memperhatikan gambar-gambar itu dengan tenang." },
        { ruby: "<ruby>过了<rt>guò le</rt></ruby><ruby>一会儿<rt>yíhuìr</rt></ruby>。", trans: "Setelah beberapa saat." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>轻轻地<rt>qīngqīng de</rt></ruby><ruby>说<rt>shuō</rt></ruby>：", trans: "Dia berkata dengan perlahan:" },
        { ruby: "“<ruby>你<rt>nǐ</rt></ruby><ruby>到底<rt>dàodǐ</rt></ruby><ruby>是<rt>shì</rt></ruby><ruby>谁<rt>shéi</rt></ruby>……”", trans: "“Sebenarnya kamu siapa...”" },
        { ruby: "<ruby>就在<rt>jiù zài</rt></ruby><ruby>这时<rt>zhè shí</rt></ruby>。", trans: "Tepat pada saat itu." },
        { ruby: "<ruby>楼下<rt>lóuxià</rt></ruby><ruby>传来<rt>chuánlái</rt></ruby><ruby>妈妈<rt>māma</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>声音<rt>shēngyīn</rt></ruby>。", trans: "Terdengar suara ibu dari lantai bawah." },
        { ruby: "“<ruby>文俊<rt>Wénjùn</rt></ruby>！<ruby>快一点<rt>kuài yìdiǎn</rt></ruby>！<ruby>要迟到了<rt>yào chídào le</rt></ruby>！”", trans: "“Wenjun! Cepatan sikit! Nanti terlambat!”" },
        { ruby: "“<ruby>来了<rt>lái le</rt></ruby>！”", trans: "“Iya, datang!”" },
        { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>马上<rt>mǎshàng</rt></ruby><ruby>关上<rt>guān shang</rt></ruby><ruby>画本<rt>huàběn</rt></ruby>。", trans: "Wenjun segera menutup buku gambarnya." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>背起<rt>bēi qǐ</rt></ruby><ruby>书包<rt>shūbāo</rt></ruby>，<ruby>跑出<rt>pǎo chū</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>房间<rt>fángjiān</rt></ruby>。", trans: "Dia menggendong tas sekolahnya, lalu berlari keluar kamar." },
        { ruby: "……", trans: "..." },
        { ruby: "<ruby>学校<rt>xuéxiào</rt></ruby><ruby>还是<rt>háishi</rt></ruby><ruby>和<rt>hé</rt></ruby><ruby>平常<rt>píngcháng</rt></ruby><ruby>一样<rt>yíyàng</rt></ruby>。", trans: "Sekolah masih tetap sama seperti biasanya." },
        { ruby: "<ruby>老师<rt>lǎoshī</rt></ruby><ruby>上课<rt>shàng kè</rt></ruby>。", trans: "Guru mengajar di kelas." },
        { ruby: "<ruby>同学<rt>tóngxué</rt></ruby><ruby>聊天<rt>liáo tiān</rt></ruby>。", trans: "Teman-teman mengobrol." },
        { ruby: "<ruby>一切<rt>yíqiè</rt></ruby><ruby>都<rt>dōu</rt></ruby><ruby>没有<rt>méiyǒu</rt></ruby><ruby>变化<rt>biànhuà</rt></ruby>。", trans: "Semua tidak ada perubahan." },
        { ruby: "<ruby>下课<rt>xià kè</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>时候<rt>shíhou</rt></ruby>。", trans: "Saat jam istirahat / selesai kelas." },
        { ruby: "<ruby>一个<rt>yí gè</rt></ruby><ruby>男同学<rt>nán tóngxué</rt></ruby><ruby>走<rt>zǒu</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>过来<rt>guòlái</rt></ruby>。", trans: "Seorang teman sekelas laki-laki berjalan menghampirinya." },
        { ruby: "“<ruby>文俊<rt>Wénjùn</rt></ruby>，<ruby>这是<rt>zhè shì</rt></ruby><ruby>什么<rt>shénme</rt></ruby>？”", trans: "“Wenjun, ini apa?”" },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>拿起<rt>ná qǐ</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>桌面上<rt>zhuōzi shàng</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>画本<rt>huàběn</rt></ruby>。", trans: "Dia mengambil buku gambar yang ada di atas meja." },
        { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>吓了一跳<rt>xià le yí tiào</rt></ruby>。", trans: "Wenjun terkejut." },
        { ruby: "“<ruby>还给<rt>huán gěi</rt></ruby><ruby>我<rt>wǒ</rt></ruby>！”", trans: "“Kembalikan padaku!”" },
        { ruby: "<ruby>男同学<rt>nán tóngxué</rt></ruby><ruby>打开<rt>dǎkāi</rt></ruby><ruby>画本<rt>huàběn</rt></ruby>。", trans: "Teman laki-laki itu membuka buku gambar tersebut." },
        { ruby: "“<ruby>这个<rt>zhè ge</rt></ruby><ruby>女孩<rt>nǚhái</rt></ruby><ruby>是<rt>shì</rt></ruby><ruby>谁<rt>shéi</rt></ruby>？”", trans: "“Gadis ini siapa?”" },
        { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>安静<rt>ānjìng</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一会儿<rt>yíhuìr</rt></ruby>。", trans: "Wenjun terdiam sejenak." },
        { ruby: "<ruby>然后<rt>ránhòu</rt></ruby><ruby>笑<rt>xiào</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>一下<rt>yíxià</rt></ruby>。", trans: "Lalu dia tersenyum sedikit." },
        { ruby: "“<ruby>我<rt>wǒ</rt></ruby><ruby>不知道<rt>bù zhīdào</rt></ruby>。”", trans: "“Aku tidak tahu.”" },
        { ruby: "<ruby>男同学<rt>nán tóngxué</rt></ruby><ruby>愣住了<rt>lèng zhù le</rt></ruby>。", trans: "Teman laki-laki itu tertegun / bengong." },
        { ruby: "“<ruby>真的吗<rt>zhēn de ma</rt></ruby>？”", trans: "“Benaran?”" },
        { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>点点头<rt>diǎn diǎn tóu</rt></ruby>。", trans: "Wenjun menganggukkan kepala." },
        { ruby: "“<ruby>真的<rt>zhēn de</rt></ruby>。”", trans: "“Beneran.”" },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>真的<rt>zhēn de</rt></ruby><ruby>不知道<rt>bù zhīdào</rt></ruby>。", trans: "Dia benar-benar tidak tahu." },
        { ruby: "<ruby>可是<rt>kěshì</rt></ruby>……", trans: "Tapi..." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>还是<rt>háishi</rt></ruby><ruby>一直<rt>yìzhí</rt></ruby><ruby>画着<rt>huàzhe</rt></ruby><ruby>她<rt>tā</rt></ruby>。", trans: "Dia tetap terus menggambarnya." }
    ],

    // --------------------------------------
    // NOVEL 1 - Chapter 3 (sesi3)
    // --------------------------------------
    "sesi3": [
        { ruby: "<ruby>第三章<rt>dì-sān zhāng</rt></ruby>——<ruby>平常地<rt>píngcháng de</rt></ruby><ruby>一天<rt>yì tiān</rt></ruby>", trans: "Bab 3 —— Hari yang Biasa" },
        { ruby: "<ruby>早上<rt>zǎoshang</rt></ruby>。", trans: "Pagi hari." },
        { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>骑着<rt>qí zhe</rt></ruby><ruby>自行车<rt>zìxíngchē</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>学校<rt>xuéxiào</rt></ruby>。", trans: "Wenjun mengendarai sepeda pergi ke sekolah." },
        { ruby: "<ruby>今天<rt>jīntiān</rt></ruby><ruby>和<rt>hé</rt></ruby><ruby>昨天<rt>zuótiān</rt></ruby><ruby>一样<rt>yíyàng</rt></ruby>。", trans: "Hari ini sama seperti kemarin." },
        { ruby: "<ruby>路上<rt>lùshang</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>人<rt>rén</rt></ruby><ruby>很多<rt>hěn duō</rt></ruby>。", trans: "Orang di jalan sangat banyak." },
        { ruby: "<ruby>学生们<rt>xuéshēngmen</rt></ruby><ruby>都<rt>dōu</rt></ruby><ruby>去<rt>qù</rt></ruby><ruby>学校<rt>xuéxiào</rt></ruby>。", trans: "Murid-murid semuanya pergi ke sekolah." },
        { ruby: "<ruby>一切<rt>yíqiè</rt></ruby><ruby>看起来<rt>kàn qǐlái</rt></ruby><ruby>都<rt>dōu</rt></ruby><ruby>很<rt>hěn</rt></ruby><ruby>平常<rt>píngcháng</rt></ruby>。", trans: "Semua tampak sangat biasa." },
        { ruby: "<ruby>到了<rt>dào le</rt></ruby><ruby>学校<rt>xuéxiào</rt></ruby><ruby>以后<rt>yǐhòu</rt></ruby>。", trans: "Setelah sampai di sekolah." },
        { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>坐<rt>zuò</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>自己<rt>zìjǐ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>座位<rt>zuòwèi</rt></ruby><ruby>上<rt>shàng</rt></ruby>。", trans: "Wenjun duduk di tempat duduknya sendiri." },
        { ruby: "<ruby>老师<rt>lǎoshī</rt></ruby><ruby>开始<rt>kāishǐ</rt></ruby><ruby>上课<rt>shàng kè</rt></ruby>。", trans: "Guru mulai mengajar." },
        { ruby: "<ruby>同学们<rt>tóngxuémen</rt></ruby><ruby>认真<rt>rènzhēn</rt></ruby><ruby>听讲<rt>tīngjiǎng</rt></ruby>。", trans: "Teman-teman sekelas mendengarkan dengan sungguh-sungguh." },
        { ruby: "<ruby>可是<rt>kěshì</rt></ruby>，<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>还是<rt>háishi</rt></ruby><ruby>想起<rt>xiǎng qǐ</rt></ruby><ruby>昨天<rt>zuótiān</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>梦<rt>mèng</rt></ruby>。", trans: "Tapi, Wenjun masih teringat mimpi kemarin." },
        { ruby: "<ruby>那个<rt>nà ge</rt></ruby><ruby>小女孩<rt>xiǎo nǚhái</rt></ruby>。", trans: "Anak perempuan kecil itu." },
        { ruby: "<ruby>那个<rt>nà ge</rt></ruby><ruby>声音<rt>shēngyīn</rt></ruby>。", trans: "Suara itu." },
        { ruby: "<ruby>还有<rt>háiyǒu</rt></ruby><ruby>没有<rt>méiyǒu</rt></ruby><ruby>说完<rt>shuō wán</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>名字<rt>míngzi</rt></ruby>。", trans: "Dan nama yang belum selesai diucapkan." },
        { ruby: "<ruby>下课<rt>xià kè</rt></ruby><ruby>以后<rt>yǐhòu</rt></ruby>。", trans: "Setelah jam pelajaran usai / istirahat." },
        { ruby: "<ruby>一个<rt>yí gè</rt></ruby><ruby>朋友<rt>péngyou</rt></ruby><ruby>走到<rt>zǒu dào</rt></ruby><ruby>他<rt>tā</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>旁边<rt>pángbiān</rt></ruby>。", trans: "Seorang teman berjalan ke sampingnya." },
        { ruby: "“<ruby>文俊<rt>Wénjùn</rt></ruby>，<ruby>你<rt>nǐ</rt></ruby><ruby>今天<rt>jīntiān</rt></ruby><ruby>怎么了<rt>zěnme le</rt></ruby>？”", trans: "“Wenjun, kamu hari ini kenapa?”" },
        { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>看着<rt>kànzhe</rt></ruby><ruby>他<rt>tā</rt></ruby>。", trans: "Wenjun menatapnya." },
        { ruby: "“<ruby>没什么<rt>méi shénme</rt></ruby>。”", trans: "“Gak ada apa-apa.”" },
        { ruby: "<ruby>朋友<rt>péngyou</rt></ruby><ruby>笑了笑<rt>xiào le xiào</rt></ruby>。", trans: "Temannya tersenyum." },
        { ruby: "“<ruby>你<rt>nǐ</rt></ruby><ruby>最近<rt>zuìjìn</rt></ruby><ruby>总是<rt>zǒngshì</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>发呆<rt>fādāi</rt></ruby>。”", trans: "“Kamu akhir-akhir ini sering sekali melamun.”" },
        { ruby: "“<ruby>是不是<rt>shì bú shì</rt></ruby><ruby>昨天<rt>zuótiān</rt></ruby><ruby>晚上<rt>wǎnfàn</rt></ruby><ruby>又<rt>yòu</rt></ruby><ruby>做<rt>zuò</rt></ruby><ruby>那个<rt>nà ge</rt></ruby><ruby>梦<rt>mèng</rt></ruby><ruby>了<rt>le</rt></ruby>？”", trans: "“Apakah semalam kamu bermimpi mimpi itu lagi?”" },
        { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>愣了一下<rt>lèng le yíxià</rt></ruby>。", trans: "Wenjun tertegun sejenak." },
        { ruby: "“<ruby>你<rt>nǐ</rt></ruby><ruby>怎么<rt>zěnme</rt></ruby><ruby>知道<rt>zhīdào</rt></ruby>？”", trans: "“Kok kamu tahu?”" },
        { ruby: "<ruby>朋友<rt>péngyou</rt></ruby><ruby>开玩笑地<rt>kāi wánxiào de</rt></ruby><ruby>说<rt>shuō</rt></ruby>：", trans: "Temannya berkata sambil bercanda:" },
        { ruby: "“<ruby>因为<rt>yīnwèi</rt></ruby><ruby>你<rt>nǐ</rt></ruby><ruby>最近<rt>zuìjìn</rt></ruby><ruby>常常<rt>chángcháng</rt></ruby><ruby>看着<rt>kànzhe</rt></ruby><ruby>窗外<rt>chuāngwài</rt></ruby>。”", trans: "“Karena akhir-akhir ini kamu sering memandang ke luar jendela.”" },
        { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>没有<rt>méiyǒu</rt></ruby><ruby>回答<rt>huídá</rt></ruby>。", trans: "Wenjun tidak menjawab." },
        { ruby: "<ruby>只是<rt>zhǐshì</rt></ruby><ruby>看着<rt>kànzhe</rt></ruby><ruby>窗外<rt>chuāngwài</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>天空<rt>tiānkōng</rt></ruby>。", trans: "Hanya memandang langit di luar jendela." },
        { ruby: "……", trans: "..." },
        { ruby: "<ruby>放学<rt>fàng xué</rt></ruby><ruby>以后<rt>yǐhòu</rt></ruby>。", trans: "Setelah pulang sekolah." },
        { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>没有<rt>méiyǒu</rt></ruby><ruby>马上<rt>mǎshàng</rt></ruby><ruby>回家<rt>huí jiā</rt></ruby>。", trans: "Wenjun tidak langsung pulang ke rumah." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>骑着<rt>qí zhe</rt></ruby><ruby>自行车<rt>zìxíngchē</rt></ruby>，<ruby>经过<rt>jīngguò</rt></ruby><ruby>一个<rt>yí gè</rt></ruby><ruby>公园<rt>gōngyuán</rt></ruby>。", trans: "Dia mengendarai sepeda, melewati sebuah taman." },
        { ruby: "<ruby>突然<rt>tūrán</rt></ruby>。", trans: "Tiba-tiba." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>停了<rt>tíng le</rt></ruby><ruby>下来<rt>xiàlái</rt></ruby>。", trans: "Dia berhenti." },
        { ruby: "<ruby>这个<rt>zhè ge</rt></ruby><ruby>地方<rt>dìfang</rt></ruby>……", trans: "Tempat ini..." },
        { ruby: "<ruby>让<rt>ràng</rt></ruby><ruby>他<rt>tā</rt></ruby><ruby>感觉<rt>gǎnjué</rt></ruby><ruby>很<rt>hěn</rt></ruby><ruby>熟悉<rt>shúxī</rt></ruby>。", trans: "Membuatnya merasa sangat familiar / akrab." },
        { ruby: "<ruby>公园<rt>gōngyuán</rt></ruby><ruby>里<rt>lǐ</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>大树<rt>dà shù</rt></ruby>。", trans: "Pohon besar di dalam taman." },
        { ruby: "<ruby>旁边<rt>pángbiān</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>秋千<rt>qiūqiān</rt></ruby>。", trans: "Ayunan di sampingnya." },
        { ruby: "<ruby>还有<rt>háiyǒu</rt></ruby><ruby>孩子们<rt>háizimen</rt></ruby><ruby>的<rt>de</rt></ruby><ruby>笑声<rt>xiàoshēng</rt></ruby>。", trans: "Dan juga suara tawa anak-anak." },
        { ruby: "<ruby>一切<rt>yíqiè</rt></ruby><ruby>都<rt>dōu</rt></ruby><ruby>好像<rt>hǎoxiàng</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>哪里<rt>nǎlǐ</rt></ruby><ruby>见过<rt>jiàn guò</rt></ruby>。", trans: "Semuanya seolah-olah pernah dilihat di suatu tempat." },
        { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>慢慢<rt>mànmàn</rt></ruby><ruby>走<rt>zǒu</rt></ruby><ruby>进去<rt>jìnqù</rt></ruby>。", trans: "Wenjun berjalan masuk perlahan-lahan." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>看着<rt>kànzhe</rt></ruby><ruby>那棵<rt>nà kē</rt></ruby><ruby>大树<rt>dà shù</rt></ruby>。", trans: "Dia memandang pohon besar itu." },
        { ruby: "<ruby>可是<rt>kěshì</rt></ruby>……", trans: "Tapi..." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>怎么<rt>zěnme</rt></ruby><ruby>也<rt>yě</rt></ruby><ruby>想不起来<rt>xiǎng bù qǐlái</rt></ruby>。", trans: "Bagaimanapun dia tetap tidak bisa mengingatnya." },
        { ruby: "“<ruby>我<rt>wǒ</rt></ruby><ruby>以前<rt>yǐqián</rt></ruby><ruby>来过<rt>lái guò</rt></ruby><ruby>这里<rt>zhèlǐ</rt></ruby><ruby>吗<rt>ma</rt></ruby>？”", trans: "“Apakah aku pernah ke sini sebelumnya?”" },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>小声地<rt>xiǎo shēng de</rt></ruby><ruby>说<rt>shuō</rt></ruby>。", trans: "Dia berkata dengan suara pelan." },
        { ruby: "<ruby>过了<rt>guò le</rt></ruby><ruby>一会儿<rt>yíhuìr</rt></ruby>。", trans: "Setelah beberapa saat." },
        { ruby: "<ruby>他<rt>tā</rt></ruby><ruby>摇了摇头<rt>yáo le yáo tóu</rt></ruby>。", trans: "Dia menggelengkan kepala." },
        { ruby: "“<ruby>应该<rt>yīnggāi</rt></ruby><ruby>只是<rt>zhǐshì</rt></ruby><ruby>一个<rt>yí gè</rt></ruby><ruby>梦<rt>mèng</rt></ruby><ruby>吧<rt>ba</rt></ruby>……”", trans: "“Mungkin hanya sebuah mimpi ya...”" },
        { ruby: "<ruby>夕阳<rt>xīyáng</rt></ruby><ruby>慢慢<rt>mànmàn</rt></ruby><ruby>落下<rt>luòxià</rt></ruby>。", trans: "Matahari terbenam perlahan tenggelam." },
        { ruby: "<ruby>文俊<rt>Wénjùn</rt></ruby><ruby>骑上<rt>qí shàng</rt></ruby><ruby>自行车<rt>zìxíngchē</rt></ruby>。", trans: "Wenjun naik ke sepedanya." },
        { ruby: "<ruby>离开<rt>líkāi</rt></ruby><ruby>了<rt>le</rt></ruby><ruby>公园<rt>gōngyuán</rt></ruby>。", trans: "Meninggalkan taman." }
    ],

   
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
                
                // Masukkan HTML Pinyin & Arti
                p.innerHTML = 
                    '<div class="hanzi-ruby zh-text">' + extraData[index].ruby + '</div>' +
                    '<div class="translation">' + extraData[index].trans + '</div>';

                // Ambil elemen Mandarin (.zh-text) untuk dibaca oleh Audio
                p.onclick = function () {
                    var zhElem = p.querySelector(".zh-text");
                    if (zhElem) {
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

// Pemutar Suara Mandarin (Speech Synthesis)
function playAudio(text) {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        
        var utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "zh-CN";
        utterance.rate = 0.85;

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