const quizdata = [{
  'question': "Ma'lumotlar bazasi (MB) nima?",
  'answers': {
      'a': "  Ma'lumotlarni tartiblashtirish va saqlash tizimi",
      'b': " Faqat matnli ma'lumotlarni saqlash vositasi",
      'c': " Faqat raqamli ma'lumotlarni saqlash vositasi",
      'd': ' Shaxsiy kompyuter dasturi'
  },
  'correct': 'a'
}, {
  'question': "MBBT (ma'lumotlar bazasini boshqarish tizimi) qaysi biriga misol boâ€-la oladi?",
  'answers': {
      'a': '  MySQL',
      'b': ' Microsoft Word',
      'c': ' Microsoft Excel',
      'd': ' Paint'
  },
  'correct': 'a'
},{
  'question': '"Primary Key" deganda nimani tushunasiz?',
  'answers': {
      'a': '  Jadvalda har bir satrni birlamchi kalit sifatida ishlatiladigan ustun',
      'b': " Takrorlanuvchi ma'lumotlarni saqlash",
      'c': ' Har bir ustunni boshqaruvchi kalit',
      'd': " Jadval ustunlarini o'chirish kaliti"
  },
  'correct': 'a'
}, {
  'question': '"Foreign Key" nima?',
  'answers': {
      'a': " Bir jadvalda boshqa jadvaldagi kalitga bog'lanish uchun ishlatiladigan kalit",
      'b': ' Jadvaldagi chet el valyutasi qiymati',
      'c': ' Jadvaldagi indeks qiymati',
      'd': " Qo'shimcha qiymatlar"
  },
  'correct': 'a'
}, {
  'question': "Relatsion ma'lumotlar bazasi nima?",
  'answers': {
      'a': "  Ma'lumotlar jadval koâ€-rinishida saqlanadigan bazalar",
      'b': " Ma'lumotlar to'plami orasida aloqa boâ€-lmagan bazalar",
      'c': ' Tasodifiy fayllar toâ€-plami',
      'd': ' Rasmlar bilan ishlovchi tizimlar'
  },
  'correct': 'a'
}, {
  'question': 'MBBTda qaysi tildan foydalaniladi?',
  'answers': {
      'a': '   SQL',
      'b': '  HTML',
      'c': ' Python',
      'd': ' C++'
  },
  'correct': 'a'
}, {
  'question': "SQLda qaysi buyruq jadvaldan ma'lumot olish uchun ishlatiladi?",
  'answers': {
      'a': '  SELECT',
      'b': ' DELETE',
      'c': ' INSERT',
      'd': ' UPDATE'
  },
  'correct': 'a'
},{
  'question': 'SQLda "NULL" qiymati nimani anglatadi?',
  'answers': {
      'a': "  Ma'lumot mavjud emasligini",
      'b': ' Nol qiymatni',
      'c': " Bo'sh qatorni",
      'd': ' 0 qiymatini'
  },
  'correct': 'a'
}, {
  'question': 'MBBTning asosiy turlari qaysilar?',
  'answers': {
      'a': "  Relatsion va ob'ektga yo'naltirilgan",
      'b': ' Grafik va audio',
      'c': ' Statik va dinamik',
      'd': ' Onlayn va oflayn'
  },
  'correct': 'a'
},
{
  'question': 'Indeks nima uchun ishlatiladi?',
  'answers': {
      'a': "  Ma'lumotlarga tezkor kirish uchun",
      'b': " Ma'lumotlarni takrorlash uchun",
      'c': " Ma'lumotlarni o'chirish uchun",
      'd': " Ma'lumotlarni eksport qilish uchun"
  },
  'correct': 'a'
}, {
  'question': 'SQLda jadval yaratish uchun qaysi buyruq ishlatiladi?',
  'answers': {
      'a': '  CREATE TABLE',
      'b': ' SELECT TABLE',
      'c': ' MAKE TABLE',
      'd': ' NEW TABLE'
  },
  'correct': 'a'
}, {
  'question': "Qaysi buyruq jadvalga yangi ustun qo'shadi?",
  'answers': {
      'a': '  ALTER TABLE',
      'b': ' MODIFY TABLE',
      'c': ' INSERT COLUMN',
      'd': ' CREATE COLUMN'
  },
  'correct': 'a'
}, {
  'question': "Qaysi SQL buyruq ma'lumotlarni yangilash uchun ishlatiladi?",
  'answers': {
      'a': '  UPDATE',
      'b': ' MODIFY',
      'c': ' CHANGE',
      'd': ' REFRESH'
  },
  'correct': 'a'
}, {
  'question': "Qaysi SQL buyruq jadvaldan ma'lumotlarni o'chirish uchun ishlatiladi?",
  'answers': {
      'a': '  DELETE',
      'b': ' REMOVE',
      'c': ' CLEAR',
      'd': ' TRIM'
  },
  'correct': 'a'
}, {
  'question': 'SQLda qaysi kalit soâ€-z saralashni oshuvchi tartibda amalga oshiradi?',
  'answers': {
      'a': '  ORDER BY ASC',
      'b': ' ORDER BY DESC',
      'c': ' SORT BY ASC',
      'd': ' ASCENDING'
  },
  'correct': 'a'
}, {
  'question': 'SQLda "GROUP BY" nima uchun ishlatiladi?',
  'answers': {
      'a': " Bir xil qiymatlar bo'yicha guruhlash uchun",
      'b': ' Jadval ustunlarini birlashtirish uchun',
      'c': ' Yangi ustun yaratish uchun',
      'd': " To'plamlarni birlashtirish uchun"
  },
  'correct': 'a'
}, {
  'question': 'SQLda "HAVING" nimaga xizmat qiladi?',
  'answers': {
      'a': ' Guruhlangan natijalarni filtrlash uchun',
      'b': ' Filtrlash uchun',
      'c': ' Jadval yaratish uchun',
      'd': " Indeksni o'chirish uchun"
  },
  'correct': 'a'
}, {
  'question': 'SQLda "DISTINCT" qaysi holatda ishlatiladi?',
  'answers': {
      'a': '  Takrorlanmaydigan qiymatlarni qaytarish uchun',
      'b': ' Takrorlanuvchi qiymatlarni qaytarish uchun',
      'c': " Faqat NULL qiymatlarni ko'rsatish uchun",
      'd': " Ustun nomlarini o'chirish uchun"
  },
  'correct': 'a'
}, {
  'question': "Qaysi SQL kalit so'z ma'lumotlar sonini hisoblash uchun ishlatiladi?",
  'answers': {
      'a': '  COUNT',
      'b': ' TOTAL',
      'c': ' SUM',
      'd': ' AVERAGE'
  },
  'correct': 'a'
}, {
  'question': '"JOIN" qaysi holatda ishlatiladi?',
  'answers': {
      'a': "  Ikki yoki undan ortiq jadvalni bog'lash uchun",
      'b': " Bir jadvalni boshqa jadvalga qo'shish uchun",
      'c': ' Jadval ustunlarini indekslash uchun',
      'd': " Jadval ma'lumotlarini filtrlash uchun"
  },
  'correct': 'a'
}, {
  'question': "Bir jadvaldagi ustunlar boshqa jadvaldagi ma'lumotlar bilan qanday bog'lanadi?",
  'answers': {
      'a': ' Foreign Key orqali',
      'b': ' Primary Key orqali',
      'c': ' Index orqali',
      'd': ' Unique Key orqali'
  },
  'correct': 'a'
},{
  'question': '"One-to-Many" bog\'lanish deganda nimani tushunasiz?',
  'answers': {
      'a': " Bir qator boshqa jadvalning bir nechta qatorlariga bog'langan",
      'b': " Bir qator bir nechta jadvalga bog'langan",
      'c': " Barcha satrlar bir ustunga bog'langan",
      'd': " Har bir satr bir ustunga bog'langan"
  },
  'correct': 'a'
}, {
  'question': '"Normalization" maqsadi nima?',
  'answers': {
      'a': "  Ma'lumotlarning takrorlanishini kamaytirish va tuzilmani optimallashtirish",
      'b': ' Foydalanuvchilarni himoya qilish',
      'c': ' Jadvalni formatlash',
      'd': " Ma'lumotlarni zaxiralash"
  },
  'correct': 'a'
}, {
  'question': '"Denormalization" nima uchun ishlatiladi?',
  'answers': {
      'a': "  Ma'lumotlar o'qilishini tezlashtirish uchun",
      'b': " Ma'lumotlarning takrorlanishini oshirish uchun",
      'c': " Ma'lumotlarni qayta tiklash uchun",
      'd': " Ma'lumotlarni eksport qilish uchun"
  },
  'correct': 'a'
}, {
  'question': "Birinchi normallashtirish qoidasi (1NF) nimani ta'minlaydi?",
  'answers': {
      'a': "  Har bir ustun atomik qiymatlarga ega bo'lishini",
      'b': " Bir xil ustunlar bo'lishini",
      'c': ' Takrorlanmas ustunlarni yaratishni',
      'd': ' Indekslarni avtomatik yaratishni'
  },
  'correct': 'a'
}, {
  'question': '"Composite Key" nima?',
  'answers': {
      'a': ' Bir nechta ustunlardan iborat asosiy kalit',
      'b': ' Yagona ustundan iborat kalit',
      'c': ' Indekslashgan ustun',
      'd': ' XOR orqali olingan kalit'
  },
  'correct': 'a'
}, {
  'question': 'Unique kalit nima uchun ishlatiladi?',
  'answers': {
      'a': '  Takrorlanuvchi qiymatlarni oldini olish uchun',
      'b': " Ma'lumotlarni tartiblashtirish uchun",
      'c': " Bir nechta jadvalni bog'lash uchun",
      'd': " Jadvalni o'chirish uchun"
  },
  'correct': 'a'
}, {
  'question': 'Primary Key qachon ishlatiladi?',
  'answers': {
      'a': '  Jadval satrlarini birlamchi kalit sifatida belgilash uchun',
      'b': ' Jadvalni indekslash uchun',
      'c': " Qo'shimcha ustun yaratish uchun",
      'd': ' Cheklovlar yaratish uchun'
  },
  'correct': 'a'
}, {
  'question': 'SQLda "DROP" buyrugâ€-i nima qiladi?',
  'answers': {
      'a': "  Jadval yoki ob'ektni butunlay o'chiradi",
      'b': " Ma'lumotlarni o'chiradi",
      'c': ' Indeksni tozalaydi',
      'd': " Faqat ustunni bo'shatadi"
  },
  'correct': 'a'
}, {
  'question': '"CHECK" cheklovi nima uchun ishlatiladi?',
  'answers': {
      'a': "  Ma'lumotlar o'zgarishini cheklash uchun",
      'b': ' Foydalanuvchilarni autentifikatsiya qilish uchun',
      'c': ' Indeksni tekshirish uchun',
      'd': " NULL qiymatlarni o'chirish uchun"
  },
  'correct': 'a'
}, {
  'question': 'SQLda "INNER JOIN" nima uchun ishlatiladi?',
  'answers': {
      'a': " Har ikkala jadvaldagi mos keladigan ma'lumotlarni birlashtirish uchun",
      'b': ' Jadvalni boshqa jadvalga qoâ€-shish uchun',
      'c': " Faqat bir jadvaldagi ma'lumotlarni birlashtirish uchun",
      'd': " Barcha ma'lumotlarni birlashtirish uchun"
  },
  'correct': 'a'
}, {
  'question': 'SQLda "LEFT JOIN" qanday ma\'lumotlarni qaytaradi?',
  'answers': {
      'a': " Chap jadvaldagi barcha ma'lumotlarni, mos kelmasa ham",
      'b': " Faqat ikkala jadvaldagi mos ma'lumotlarni",
      'c': " Faqat oâ€-ng jadvaldagi mos ma'lumotlarni",
      'd': ' Mos keladigan satrlarni chiqaradi'
  },
  'correct': 'a'
}, {
  'question': 'SQLda "RIGHT JOIN" nima qiladi?',
  'answers': {
      'a': "  Oâ€-ng jadvaldagi barcha ma'lumotlarni qaytaradi, mos kelmasa ham",
      'b': ' Faqat chap jadvalni koâ€-rsatadi',
      'c': ' Har ikkala jadvalni birlashtiradi',
      'd': " Mos kelmagan ma'lumotlarni chiqaradi"
  },
  'correct': 'a'
}, {
  'question': 'SQLda "FULL OUTER JOIN" qaysi holatda ishlatiladi?',
  'answers': {
      'a': " Ikkala jadvaldagi barcha ma'lumotlarni, mos boâ€-lgan va boâ€-lmaganlarni birlashtirish uchun",
      'b': " Faqat mos kelmagan ma'lumotlarni chiqarish uchun",
      'c': ' Faqat oâ€-ng jadvalni qaytarish uchun',
      'd': ' Jadvalni oâ€-chirish uchun'
  },
  'correct': 'a'
}, {
  'question': "Qaysi SQL buyruq jadvaldagi barcha ma'lumotlarni oâ€-chiradi?",
  'answers': {
      'a': '  TRUNCATE TABLE',
      'b': ' DELETE ALL',
      'c': ' REMOVE TABLE',
      'd': ' CLEAR DATA'
  },
  'correct': 'a'
}, {
  'question': 'SQLda "LIMIT" nima uchun ishlatiladi?',
  'answers': {
      'a': "  Qaytarilgan ma'lumotlar sonini cheklash uchun",
      'b': ' Jadvalni cheklash uchun',
      'c': ' Ustunlarni cheklash uchun',
      'd': " Faqat chap ma'lumotlarni koâ€-rsatish uchun"
  },
  'correct': 'a'
}, {
  'question': 'SQLda "ORDER BY" qanday ma\'lumot beradi?',
  'answers': {
      'a': "  Ma'lumotlarni alfavit tartibida yoki qiymatlar boâ€-yicha tartiblash uchun",
      'b': ' Jadval ustunlarini koâ€-rsatish uchun',
      'c': " Mos ma'lumotlarni guruhlash uchun",
      'd': " Faqat raqamli ma'lumotlarni koâ€-rsatish uchun"
  },
  'correct': 'a'
}, {
  'question': '"INSERT INTO" buyrugâ€-i qachon ishlatiladi?',
  'answers': {
      'a': "  Jadvalga yangi ma'lumotlar qoâ€-shish uchun",
      'b': ' Jadvalni yangilash uchun',
      'c': ' Ustunlarni oâ€-zgartirish uchun',
      'd': " Ma'lumotlarni oâ€-chirish uchun"
  },
  'correct': 'a'
}, {
  'question': 'SQLda "BETWEEN" qanday ishlatiladi?',
  'answers': {
      'a': '  Bir ustundagi qiymatlar orasidagi oraliqni aniqlash uchun',
      'b': ' Ikkita jadvalni bogâ€-lash uchun',
      'c': ' NULL qiymatlarni filtrlash uchun',
      'd': " Guruhlangan ma'lumotlarni chiqarish uchun"
  },
  'correct': 'a'
}, {
  'question': 'SQLda "LIKE" operatori nima qiladi?',
  'answers': {
      'a': '  Belgilangan shablonga mos keladigan qiymatlarni qidiradi',
      'b': ' Toâ€-liq mos keladigan qiymatlarni qidiradi',
      'c': ' Null qiymatlarni oâ€-chirish uchun ishlatiladi',
      'd': ' Ustunlarni tartiblash uchun ishlatiladi'
  },
  'correct': 'a'
}, {
  'question': "Indekslar ma'lumotlarga qanday ta'sir qiladi?",
  'answers': {
      'a': "  Ularni tezroq olishni ta'minlaydi",
      'b': ' Ularni sekinlashtiradi',
      'c': " Ma'lumotlarni oâ€-chiradi",
      'd': ' Ularni tahlil qiladi'
  },
  'correct': 'a'
}, {
  'question': '"Clustered Index" qaysi ma\'lumotlar ustida ishlaydi?',
  'answers': {
      'a': ' Jadvallarni toâ€-gâ€-ridan-toâ€-gâ€-ri tartiblash uchun',
      'b': ' Faqat raqamli ustunlar',
      'c': ' Null qiymatlarni filtrlash uchun',
      'd': ' Faqat asosiy kalitlar'
  },
  'correct': 'a'
}, {
  'question': '"Non-clustered Index" nima qiladi?',
  'answers': {
      'a': "  Ma'lumotlarni tashqi fayl orqali tezkor kirishni ta'minlaydi",
      'b': ' Jadvallarni tartiblaydi',
      'c': ' Asosiy kalitlarni saqlaydi',
      'd': " Ma'lumotlarni oâ€-chiradi"
  },
  'correct': 'a'
}, {
  'question': 'SQLda tranzaksiyalar nima uchun ishlatiladi?',
  'answers': {
      'a': " Ma'lumotlarni qayta tiklash va izchil oâ€-zgarishlarni amalga oshirish uchun",
      'b': " Ma'lumotlarni saqlash uchun",
      'c': ' Fayllarni yuklash uchun',
      'd': ' Ustunlarni birlashtirish uchun'
  },
  'correct': 'a'
}, {
  'question': '"COMMIT" buyruq tranzaksiyada nima qiladi?',
  'answers': {
      'a': '  Oâ€-zgarishlarni tasdiqlaydi va saqlaydi',
      'b': ' Oâ€-zgarishlarni bekor qiladi',
      'c': " Ma'lumotlarni oâ€-chiradi",
      'd': ' Indekslarni tozalaydi'
  },
  'correct': 'a'
}, {
  'question': '"ROLLBACK" buyruq qachon ishlatiladi?',
  'answers': {
      'a': ' Tranzaksiya oâ€-zgarishlarini bekor qilish uchun',
      'b': " Ma'lumotlarni saqlash uchun",
      'c': ' Tranzaksiyani tasdiqlash uchun',
      'd': ' Indekslarni yangilash uchun'
  },
  'correct': 'a'
}, {
  'question': 'SQLda "VIEW" deganda nima tushuniladi?',
  'answers': {
      'a': '  Jadval yoki soâ€-rov natijasida qaytarilgan virtual jadval',
      'b': ' Jadvallar uchun yangi ustun yaratish vositasi',
      'c': ' Faqatgina foydalanuvchi interfeysi',
      'd': ' Ustunlarni oâ€-zgartirish vositasi'
  },
  'correct': 'a'
}, {
  'question': 'SQLda "Stored Procedure" nima uchun ishlatiladi?',
  'answers': {
      'a': '  Oldindan yozilgan va serverda bajariladigan kodni saqlash uchun',
      'b': " Jadval ma'lumotlarini saqlash uchun",
      'c': ' Tranzaksiyalarni boshqarish uchun',
      'd': ' Indekslarni boshqarish uchun'
  },
  'correct': 'a'
}, {
  'question': 'SQLda "Trigger" nima?',
  'answers': {
      'a': " Jadvaldagi ma'lumotlar oâ€-zgarganda avtomatik ishga tushadigan dastur boâ€-lagi",
      'b': " Jadval ma'lumotlarini oâ€-chiradi",
      'c': ' Indekslarni yangilash uchun ishlatiladi',
      'd': ' Faqat foydalanuvchini roâ€-yxatdan oâ€-tkazadi'
  },
  'correct': 'a'
}, {
  'question': '"Foreign Key Constraint" nima uchun ishlatiladi?',
  'answers': {
      'a': "  Jadval orasidagi ma'lumotlarning izchilligini ta'minlash uchun",
      'b': ' Har bir ustun uchun indeks yaratish uchun',
      'c': " Jadval ma'lumotlarini avtomatik tozalash uchun",
      'd': ' Null qiymatlarni chiqarish uchun'
  },
  'correct': 'a'
}, {
  'question': 'Ma`lumotlar bazasida qanday ma`lumotlar saqlanadi?',
  'answers': {
      'a': '  Ob`ektlar, ularning xossalari va xarakteristikalari to`g`risidagi ma`lumotlar',
      'b': ' Grafik axborotlarning xossalari va xarakteristikalari to`g`risidagi ma`lumot',
      'c': ' Video ma`lumotlarning xossalari va xarakteristikalari to`g`risidagi ma`lumotlar',
      'd': ' Tezkor axborotlarning xossalari va xarakteristikalari to`g`risidagi ma`lumotlar'
  },
  'correct': 'a'
}, {
  'question': 'MBBT bu ...',
  'answers': {
      'a': '  Ma`lumotlarni boshqarish funktsiyasini amalga oshiruvchi dasturli ta`minot',
      'b': ' Elektron jadvallar bilan ishlovchi va ularni saqlovchi vosita',
      'c': ' Ma`lumotlarni boshqarish funktsiyasini amalga oshiruvchi texnik ta`minoti',
      'd': ' Grafik axborotlarni saqlovchi va qayta ishlovchi vosita'
  },
  'correct': 'a'
}, {
  'question': 'Norton Commander kataloglar strukturasi qaysi ko`rinishdagi MB ga misol bo`la oladi?',
  'answers': {
      'a': '  Ierarxik ko`rinishdagi',
      'b': ' Relyatsion (jadval) ko`rinishdagi',
      'c': ' Tarmoq ko`rinishdagi',
      'd': ' Ixtiyoriy ko`rinishdagi'
  },
  'correct': 'a'
}, {
  'question': 'Internet tarmog`i qaysi ko`rinishdagi MB ga misol bo`la oladi?',
  'answers': {
      'a': '  Tarmoq ko`rinishdagi',
      'b': ' Relyatsion (jadval) ko`rinishdagi',
      'c': ' Ierarxik (daraxtsimon) ko`rinishdagi',
      'd': ' Ixtiyoriy ko`rinishdagi'
  },
  'correct': 'a'
}, {
  'question': 'Maydon va yozuv tushunchasi qaysi ko`rinishdagi MB ga tegishli?',
  'answers': {
      'a': '  Relyatsion ko`rinishdagi',
      'b': ' Tarmoq ko`rinishdagi',
      'c': ' Ierarxik (daraxtsimon) ko`rinishdagi',
      'd': ' Ixtiyoriy ko`rinishdagi'
  },
  'correct': 'a'
}, {
  'question': 'MB si … uchun foydalaniladi.',
  'answers': {
      'a': '  katta xajimdagi ma`lumotlarni saqlovchi, tartiblangan ma`lumotlar modifikatsiyasini yaratish',
      'b': ' karporativ tarmoqni tashkillash',
      'c': ' MB dan mantiqiy yangi ma`lumotlarni olish uchun',
      'd': ' MB ga mantiqiy yangi ma`lumotlarni kiritish uchun'
  },
  'correct': 'a'
}, {
  'question': 'Mb da ustunlar  nima deyiladi?',
  'answers': {
      'a': ' Maydonlar',
      'b': ' Yozuvlar',
      'c': '  Atributlar',
      'd': ' Munosabatlar'
  },
  'correct': 'c'
}, {
  'question': 'Mb da satrlar nima deyiladi?',
  'answers': {
      'a': '  Yozuvlar',
      'b': ' Maydonlar',
      'c': ' Atribut',
      'd': ' Munosabatlar'
  },
  'correct': 'a'
}, {
  'question': 'SQL tili qanday til hisoblanadi?',
  'answers': {
      'a': '  Relyatsion',
      'b': ' Paskal',
      'c': ' SI++',
      'd': ' Fortran tili'
  },
  'correct': 'a'
}, {
  'question': ' “Relyatsion”so`zi qanday ma`noni anglatadi?',
  'answers': {
      'a': '  Munosabat',
      'b': ' Yozuv',
      'c': ' Domenlar',
      'd': ' Ob`yekt'
  },
  'correct': 'a'
}, {
  'question': 'MB ni biror ob`ektini yangilashda SQL tilining qaysi operatoridan foydalaniladi?',
  'answers': {
      'a': '  UPDATE',
      'b': ' DELETE',
      'c': ' SELECT',
      'd': ' INSERT'
  },
  'correct': 'a'
}, {
  'question': 'MB dan biror ob`ektni o`chirishda SQL tilining qaysi operatoridan foydalaniladi?',
  'answers': {
      'a': '  DELETE',
      'b': ' UPDATE',
      'c': ' SELECT',
      'd': ' INSERT'
  },
  'correct': 'a'
}, {
  'question': 'MB ga biror ob`ektni kiritish (qo`shish) uchun SQL tilining qaysi operatoridan foydalaniladi?',
  'answers': {
      'a': ' INSERT',
      'b': ' DELETE',
      'c': ' SELECT',
      'd': ' UPDATE'
  },
  'correct': 'a'
}, {
  'question': 'MB dagi biror ob`ektni tanlab olishda SQL tilining qaysi operatoridan foydalaniladi?',
  'answers': {
      'a': '  SELECT',
      'b': ' DELETE',
      'c': ' UPDATE',
      'd': ' INSERT'
  },
  'correct': 'a'
}, {
  'question': 'SQL relyatsion tilining operatorlarini ko`rsating',
  'answers': {
      'a': '  SELECT, INSERT, DELETE, UPDATE',
      'b': ' ACT, GET, INSERT, DELETE, REPLACE',
      'c': ' ACT, GET, REPLACE',
      'd': ' ACT, GET, CONTINUE'
  },
  'correct': 'a'
}, {
  'question': 'Ierarxik MB da amallar bajarishda qaysi operatorlardan foydalaniladi?',
  'answers': {
      'a': ' ACT, GET, INSERT, DELETE, REPLACE',
      'b': ' SELECT, INSERT, DELETE va UPDATE',
      'c': ' ACT, GET, REPLACE',
      'd': '  ACT, GET, CONTINUE'
  },
  'correct': 'd'
}, {
  'question': 'Tarmoq ko`rinishdagi mbda amallar bajarishda qaysi operatorlardan foydalaniladi?',
  'answers': {
      'a': ' ACT, GET, CONTINUE',
      'b': ' SELECT, INSERT, DELETE, UPDATE',
      'c': ' ACT, GET, REPLACE',
      'd': ' ACT, GET, INSERT, DELETE, REPLACE'
  },
  'correct': 'd'
}, {
  'question': 'Mbda obekt bu',
  'answers': {
      'a': ' Yozuv',
      'b': ' Atribut',
      'c': ' Aloqa',
      'd': ' Maydon'
  },
  'correct': 'c'
}, {
  'question': 'Maydon nomining uzunligi eng ko`pi bilan nechta belgidan tashkil topadi?',
  'answers': {
      'a': '  64ta belgidan',
      'b': ' 10ta belgidan',
      'c': ' 8ta belgidan',
      'd': ' 65ta belgidan'
  },
  'correct': 'a'
}, {
  'question': 'Kalit maydonlarning turini ko`rsating',
  'answers': {
      'a': ' Oddiy, tarkibli, schetchikli',
      'b': ' Oddiy, schetchikli, murakkab',
      'c': '  Oddiy, tarkibli, murakkab',
      'd': ' Oddiy, tarkibli, birlamchi'
  },
  'correct': 'c'
}, {
  'question': 'Birga bir qiymatli aloqalar asosan nima uchun ishlatiladi?',
  'answers': {
      'a': ' Juda katta jadvallarni qismlarga bo`lishda',
      'b': ' Ma`lumotli jadval bilan asosiy jadval o`rtasida aloqa o`rnatishda',
      'c': ' Asosiy jadval bilan yordamchi jadval o`rtasida aloqa o`rnatishda',
      'd': ' Yordamchi jadvalni yaratish uchun'
  },
  'correct': 'b'
}, {
  'question': 'Birga ko`p qiymatli aloqalar qaysi hollarda ishlatiladi?',
  'answers': {
      'a': ' Ma`lumotli jadval bilan asosiy jadval o`rtasida aloqa o`rnatishda',
      'b': ' Juda katta jadvallarni qismlarga bo`lishda',
      'c': '  Asosiy jadval bilan yordamchi jadval o`rtasida aloqa o`rnatishda',
      'd': ' Yordamchi jadval bilan ma`lumotli jadval o`rtasida aloqa o`rnatishda'
  },
  'correct': 'c'
}, {
  'question': 'Ko`pga ko`p qiymatli aloqalarni o`rnatish uchun qaysi jadvaldan foydalaniladi?',
  'answers': {
      'a': '  Yordamchi jadvaldan',
      'b': ' Ma`lumotli jadvaldan',
      'c': ' Asosiy jadvaldan',
      'd': ' Bo`sh jadvaldan'
  },
  'correct': 'a'
}, {
  'question': 'Forma hosil qilish qanday amalga oshiriladi?',
  'answers': {
      'a': '  Forma→ Sozdat tanlanadi',
      'b': ' Vid menyusidan Rejim formy tanlanadi',
      'c': ' Sozdat tugmasi bosiladi',
      'd': ' Vid menyusidan Svoystva bo`limi tanlanadi'
  },
  'correct': 'a'
}, {
  'question': 'Yozuvlari takrorlanmaydigan maydonni aniqlang.',
  'answers': {
      'a': '  Уникал',
      'b': ' OLE',
      'c': ' Дата/время',
      'd': ' Логический'
  },
  'correct': 'a'
}, {
  'question': 'So`rovni ishga tushirib saqlab qo`yish qanday amalga oshiriladi?',
  'answers': {
      'a': '  Файл → Сохранить как tanlanadi',
      'b': ' Запросы → Параметры  tanlanadi',
      'c': ' Файл→ Открыть tanlanadi',
      'd': ' Постройт  tugmasi bosiladi'
  },
  'correct': 'a'
}, {
  'question': 'Yo`qotuvchi so`rovlar qanday hosil qilinadi?',
  'answers': {
      'a': '  Запросы → Удаление  bo`limi tanlanadi',
      'b': ' Запросы  → Параметры tanlanadi',
      'c': ' So`rov blankasida Условия отбора satriga shart yoziladi',
      'd': ' Вид→ групповые операции tanlanadi'
  },
  'correct': 'a'
}, {
  'question': 'Ishga kirish jarayonida to`ldiriladigan shaxsiy varaqalar qanday ob`yekt hisoblanadi ?',
  'answers': {
      'a': ' Forma',
      'b': ' Jadval',
      'c': ' Hisobot',
      'd': ' So`rov'
  },
  'correct': 'a'
}, {
  'question': 'Hodisa nima?',
  'answers': {
      'a': '  Ob`ektda kechuvchi aniq harakat',
      'b': ' Makrokomandalar',
      'c': ' Bir necha makrokomandalarning birlashmasi',
      'd': ' Protseduralar'
  },
  'correct': 'a'
}, {
  'question': 'Shartli ifoda qaysi ko`rsatmalarda tekshiriladi?',
  'answers': {
      'a': '  If…then',
      'b': ' Private Sub',
      'c': ' End Sub',
      'd': ' Function'
  },
  'correct': 'a'
}, {
  'question': 'SQL tili nima maqsadda ishlatiladi?',
  'answers': {
      'a': '  So`rov  tashkil qilish uchun',
      'b': ' Jadval tuzish uchun',
      'c': ' Hisobot tashkil qilish uchun',
      'd': ' Forma tashkil qilish uchun'
  },
  'correct': 'a'
}, {
  'question': 'SQL tilida zapros tashkil qilish uchun qaysi buyruqlardan foydalaniladi?',
  'answers': {
      'a': ' LIKE',
      'b': ' UPDATE',
      'c': '  SELECT',
      'd': ' GET'
  },
  'correct': 'c'
}, {
  'question': 'So`rovda istalgan uzunlikdagi formulalarni kiritish uchun nimadan foydalaniladi?',
  'answers': {
      'a': '  Shift+F2 tugmasidan ',
      'b': ' Добавить tugmasidan',
      'c': ' Вид tugmasidan',
      'd': ' Создать tugmasidan'
  },
  'correct': 'a'
}, {
  'question': 'Bog`langan maydon qanday tashkil qilinadi?',
  'answers': {
      'a': '  Maydon elementi orqali',
      'b': ' Вид tugmasi orqali',
      'c': ' Создать запросы tugmasi orqali',
      'd': ' Добавить tugmasi orqali'
  },
  'correct': 'a'
}, {
  'question': 'Kalit maydon bu',
  'answers': {
      'a': '  Yagona qiymatga ega bo`lgan maydon',
      'b': ' Bo`sh qiymatga ega bo`lgan maydon',
      'c': ' Takrorlanuvchi qiymatga ega bo`lgan maydon',
      'd': ' Ko`p qiymatga ega bo`lgan maydon'
  },
  'correct': 'a'
}, {
  'question': 'Ma`lumotlarni saqlash va qayta ishlash uchun mo`ljallangan tashkiliy struktura',
  'answers': {
      'a': '  Ma`lumotlar bazasi',
      'b': ' Predmet soha',
      'c': ' Ma`lumotlar majmui',
      'd': ' Ma`lumotlar bazasini boshqarish tizimi'
  },
  'correct': 'a'
}, {
  'question': 'Jadval ko`rinishidagi ma`lumotlar bazasi bu',
  'answers': {
      'a': ' Relyatsion ma`lumotlar bazasi ',
      'b': ' Iyerarxik ma`lumotlar bazasi',
      'c': ' Tarmoq ko`rinishdagi ma`lumotlar bazasi',
      'd': ' Massiv ko`rinishdagi ma`lumotlar bazasi'
  },
  'correct': 'a'
}, {
  'question': 'Maydon va yozuvdan tashkil topgan ma`lumotlar bazasi bu',
  'answers': {
      'a': '  Relyatsion ma`lumotlar bazasi ',
      'b': ' Iyerarxik ma`lumotlar bazasi',
      'c': ' Tarmoq ko`rinishdagi ma`lumotlar bazasi',
      'd': ' Massiv ko`rinishdagi ma`lumotlar'
  },
  'correct': 'a'
},
{
  'question': 'Relyatsion MB ning asosiy belgisi',
  'answers': {
      'a': '  Ikki o`lchovli jadval, unda ma`lumotlar saqlanadi',
      'b': ' Pastki pog`onadagi elementlar yuqori pog`onadagi elementlarga bo`ysunadi',
      'c': ' Turli sathdagi elementlar orasida bog`lanish «erkin»',
      'd': ' Ko`p o`lchovli jadval'
  },
  'correct': 'a'
}, {
  'question': 'Ierarxik (daraxtsimon) MB ning asosiy belgisi',
  'answers': {
      'a': ' Pastki pog`onadagi elementlar yuqori pog`onadagi elementlarga bo`ysunadi',
      'b': ' Ikki o`lchovli jadval, unda ma`lumotlar saqlanadi',
      'c': ' Turli sathdagi elementlar orasida bog`lanish «erkin», ya`ni bir-biriga bo`ysunmaydi',
      'd': ' Ko`p o`lchovli jadval'
  },
  'correct': 'a'
}, {
  'question': 'MBBT ning asosiy belgisi',
  'answers': {
      'a': '  Ma`lumotlar bazasini hosil qilish, to`ldirish va qayta ishlovchi tizim',
      'b': ' Ma`lum bir predmet sohani o`z ichiga olgan ma`lumotlar majmuidir',
      'c': ' Kompyuterda tez amalga oshirish mumkin bo`lgan masalalar turkumu',
      'd': ' Yangi bazalar sistemasini yaratishga mo`ljallangan vositalar majmuidir'
  },
  'correct': 'a'
}, {
  'question': 'Faqat 1 ta jadval bilan ishlash imkonini beruvchi MBBT',
  'answers': {
      'a': '  Oddiy MBBT',
      'b': ' Mukammal',
      'c': ' Relyatsion',
      'd': ' Kliyent-server'
  },
  'correct': 'a'
}, {
  'question': 'Bir necha jadval bilan ishlash imkonini beruvchi MBBT',
  'answers': {
      'a': ' Mukammal',
      'b': ' Oddiy',
      'c': ' Mijoz-server',
      'd': ' Oddiy, mijoz-server'
  },
  'correct': 'c'
}, {
  'question': 'Oddiy MBBT larni ko`rsating',
  'answers': {
      'a': ' PC-File, Reflex',
      'b': ' Oracle, Lotus',
      'c': ' Oracle, Informix, MS SQL Server',
      'd': '  Dbase, Karat'
  },
  'correct': 'd'
}, {
  'question': 'Mijoz-server MBBT larni ko`rsating',
  'answers': {
      'a': '  Oracle, Informix, MS SQL Server',
      'b': ' PC-File, Reflex',
      'c': ' Oracle, Lotus',
      'd': ' Dbase, Karat, Access, FoxPro, Lotus'
  },
  'correct': 'a'
}, {
  'question': 'Nomga ega bo`lgan barcha narsalar -bu',
  'answers': {
      'a': ' Ob`ektlar',
      'b': ' Jadvallar',
      'c': ' So`rovlar',
      'd': ' Forma'
  },
  'correct': 'a'
}, {
  'question': 'Biror predmet sohaning informatsion modeli - bu',
  'answers': {
      'a': ' Ma`lumotlar bazasi',
      'b': ' Bilimlar bazasi va sun`iy intellect',
      'c': ' Algoritm',
      'd': ' Dasturlash tillari'
  },
  'correct': 'b'
}, {
  'question': 'Ob`ektlar, ularning xossalari va xarakteristikalari to`g`risidagi ma`lumotlar qaerda saqlanadi?',
  'answers': {
      'a': '  Ma`lumotlar bazasida',
      'b': ' Elektron jadvallarda',
      'c': ' Video ma`lumotlarda',
      'd': ' Tezkor axborotlarda'
  },
  'correct': 'a'
}, {
  'question': 'Ma`lumotlarni boshqarish funktsiyasini amalga oshiruvchi dasturli ta`minot - bu',
  'answers': {
      'a': ' Ma`lumotlar bazasini boshqarish tizimlari',
      'b': ' Elektron jadvallar bilan ishlash imkonini beruvchi vosita',
      'c': ' Axborot ta`minoti',
      'd': ' Grafik axborotlarni qayta ishlovchi vosita'
  },
  'correct': 'a'
}, {
  'question': 'Relyasion MB da axborotlar qanday ko`rinishda tashkil etiladi ?',
  'answers': {
      'a': ' To`g`ri to`rtburchak  ko`rinishdagi jadvalda',
      'b': ' Tarmog`da',
      'c': ' Faylda',
      'd': ' Ixtiyoriy ko`rinishdagi ma`lumotlar bazasida'
  },
  'correct': 'a'
}, {
  'question': 'MB da maktab o`uvchilari haqidagi ma`lumotlar quyidagi maydonlarda saqlanmoqda: familiyasi, sinf, test bali, amaliyot bali, umumiy ball. Umumiy ball maydonini tipi qanday bo`ladi.',
  'answers': {
      'a': '  Raqamili',
      'b': ' Mantiqiy',
      'c': ' Ixtiyoriy',
      'd': ' Belgili'
  },
  'correct': 'a'
}, {
  'question': 'Relyatsion (jadval) ko`rinishdagi MB ga tegishli tushuncha qaysi?',
  'answers': {
      'a': ' Maydon va yozuv',
      'b': ' Sath, tugun, bog`lanish',
      'c': ' Quyi sath',
      'd': ' Yuqori sath'
  },
  'correct': 'a'
}, {
  'question': 'Qaysi til relyatsion til hisoblanadi?',
  'answers': {
      'a': '  SQL tili',
      'b': ' Paskal',
      'c': ' C++',
      'd': ' Fortran tili'
  },
  'correct': 'a'
}, {
  'question': 'SQL tilining UPDATE operatoridan qachon foydalaniladi?',
  'answers': {
      'a': '  Mbning biror ob`ektini yangilashda',
      'b': ' Mbdan biror ob`ektni o`chirishda',
      'c': ' Mbga biror ob`ektni kiritish (qo`shish)da',
      'd': ' Mbdagi biror ob`ektni tanlab olishda'
  },
  'correct': 'a'
}, {
  'question': 'SQL tilining DELETE operatoridan qachon foydalaniladi?',
  'answers': {
      'a': ' Mbdan biror ob`ektni o`chirishda',
      'b': ' Mbning biror ob`ektini yangilashda',
      'c': ' Mbga biror ob`ektni kiritish (qo`shish)da',
      'd': ' Mbdagi biror ob`ektni tanlashda'
  },
  'correct': 'a'
}, {
  'question': 'SQL tilining INSERT operatoridan qachon foydalaniladi?',
  'answers': {
      'a': '  Mbga biror ob`ektni kiritishda',
      'b': ' Mbdagi biror ob`ektni tanlab olishda',
      'c': ' Mbdan ob`ektni o`chirishda',
      'd': ' Mbning biror ob`ektini yangilashda'
  },
  'correct': 'a'
}, {
  'question': 'SQL tilining SELECT operatoridan qachon foydalaniladi?',
  'answers': {
      'a': ' Mbdagi biror ob`ektni tanlab olishda',
      'b': ' Mbdan biror ob`ektni o`chirishda',
      'c': ' Mbning biror ob`ektini yangilashda',
      'd': ' Mbga biror ob`ektni kiritish (qo`shish)da'
  },
  'correct': 'a'
}, {
  'question': 'Mbda ustunlarni ifodalaydigan asosiy element -bu',
  'answers': {
      'a': ' Maydon',
      'b': ' Kalit maydon',
      'c': ' Kontseptual sxema',
      'd': ' Ob`ekt'
  },
  'correct': 'a'
}, {
  'question': 'MB ning mantiqiy ma`nodagi tuzilishini ifodalovchi element -bu',
  'answers': {
      'a': '  Kontseptual sxema',
      'b': ' Takorlanmaydigan maydon',
      'c': ' Kalit maydon',
      'd': ' Ob`ekt'
  },
  'correct': 'a'
}, {
  'question': 'A jadvalning har bir yozuviga B jadvalning bittadan ortiq bo`lmagan yozuvi mos kelgandagi aloqa -bu',
  'answers': {
      'a': ' Birga bir qiymatli aloqalar',
      'b': '  Birga ko`p qiymatli aloqalar',
      'c': ' Ko`pga ko`p aloqalar',
      'd': ' Ikkita birga ko`p qiymatli aloqalar'
  },
  'correct': 'b'
}, {
  'question': 'A jadvalning har bir yozuviga B jadvalning bir necha yozuvi mos kelgandagi aloqa -bu',
  'answers': {
      'a': ' Birga ko`p qiymatli aloqalar',
      'b': ' Birga bir qiymatli aloqalar',
      'c': ' Ko`pga ko`p qiymatli aloqalar',
      'd': ' Ikkita birga ko`p qiymatli aloqalar'
  },
  'correct': 'c'
}, {
  'question': 'A jadvalning har bir yozuviga B jadvalning bir necha yozuvi mos kelsa va aksincha aloqa-bu...',
  'answers': {
      'a': ' Ko`pga ko`p qiymatli aloqalar',
      'b': ' Birga ko`p qiymatli aloqalar',
      'c': ' Birga bir qiymatli aloqalar',
      'd': ' Ikkita birga ko`p qiymatli aloqalar'
  },
  'correct': 'a'
}, {
  'question': 'MB da eng kichik nomlangan element nima?',
  'answers': {
      'a': ' Maydon',
      'b': ' Qolip (шаблон)',
      'c': '  Katak',
      'd': ' Yozuv'
  },
  'correct': 'c'
}, {
  'question': 'MB da maydonlarni tipi qanday aniqlanadi?',
  'answers': {
      'a': '  Ma`lumotlarni turiga qarab',
      'b': ' Maydon nomiga qarab',
      'c': ' Maydon hajmiga qarab',
      'd': ' Yozuvlar soniga qarab'
  },
  'correct': 'a'
}, {
  'question': 'Juda katta jadvallarni qismlarga bo`lishda qanday aloqalar ishlatiladi?',
  'answers': {
      'a': '  Birga bir qiymatli aloqalar',
      'b': ' Birga ko`p qiymatli aloqalar',
      'c': ' Ko`pga ko`p qiymatli aloqalar',
      'd': ' Oddiy aloqalar'
  },
  'correct': 'a'
}, {
  'question': 'Ma`lumotli jadval bilan asosiy jadval o`rtasida aloqa o`rnatishda qanday aloqalar ishlatiladi?',
  'answers': {
      'a': ' Birga ko`p qiymatli aloqalar',
      'b': ' Ko`pga ko`p qiymatli aloqalar',
      'c': '   Oddiy aloqalar',
      'd': ' Ikkita birga ko`p qiymatli aloqalar'
  },
  'correct': 'c'
}, {
  'question': 'Qanday aloqalarni o`rnatishda yordamchi jadvaldan foydalaniladi?',
  'answers': {
      'a': '  Ko`pga ko`p qiymatli aloqalarni',
      'b': ' Birga ko`p qiymatli aloqalarni',
      'c': ' Oddiy aloqalarni',
      'd': ' Ikkita birga ko`p qiymatli aloqalarni'
  },
  'correct': 'a'
}, {
  'question': 'SQL tilida INTEGER ma`lumot turi nimani ifodalaydi?',
  'answers': {
      'a': '  Butun sonni',
      'b': ' Haqiqiy sonni',
      'c': ' O`nli sonni',
      'd': ' Simvolli qatorni'
  },
  'correct': 'a'
}, {
  'question': 'SQL tilida FLOAT ma`lumot turi nimani ifodalaydi?',
  'answers': {
      'a': '  Haqiqiy sonni',
      'b': ' Butun sonni',
      'c': ' O`nli sonni',
      'd': ' Simvolli qatorni'
  },
  'correct': 'a'
}, {
  'question': 'SQL tilida DECIMAL ma`lumot turi nimani ifodalaydi?',
  'answers': {
      'a': '  O`nli sonni',
      'b': ' Haqiqiy sonni',
      'c': ' Butun sonni',
      'd': ' Simvolli qatorni'
  },
  'correct': 'a'
}, {
  'question': 'SQL tilida CHAR ma`lumot turi nimani ifodalaydi?',
  'answers': {
      'a': '  Simvolli qatorni',
      'b': ' Haqiqiy sonni',
      'c': ' O`nli sonni',
      'd': ' maxsus komanda orqali aniqlanuvchi formatdagi pulni'
  },
  'correct': 'a'
}, {
  'question': 'SQL tilida maxsus komanda orqali aniqlanuvchi formatdagi pul',
  'answers': {
      'a': '  MONEY',
      'b': ' DATE',
      'c': ' TIME',
      'd': ' BOOLEAN'
  },
  'correct': 'a'
}, {
  'question': 'SQL tilida maxsus komanda orqali aniqlanuvchi formatdagi vaqt',
  'answers': {
      'a': '  TIME',
      'b': ' DATE',
      'c': ' MONEY',
      'd': ' CHAR'
  },
  'correct': 'a'
}, {
  'question': 'SQL tilida maxsus komanda orqali aniqlanuvchi formatdagi sana',
  'answers': {
      'a': '  DATE',
      'b': ' MONEY',
      'c': ' TIME',
      'd': ' CHAR'
  },
  'correct': 'a'
}, {
  'question': 'SQL tilida jadval yaratish operatori -bu',
  'answers': {
      'a': '  CREAT TABLE',
      'b': ' DROP TABLE',
      'c': ' ALTER TABLE',
      'd': ' INSERT'
  },
  'correct': 'a'
}, {
  'question': 'SQL tilida jadvalni o`zgartirish operatori -bu',
  'answers': {
      'a': '  ALTER TABLE',
      'b': ' CREAT TABLE',
      'c': ' DROP TABLE',
      'd': ' INSERT'
  },
  'correct': 'a'
}, {
  'question': 'SQL tilida jadvalni o`chirish operatori -bu',
  'answers': {
      'a': '  DROP TABLE',
      'b': ' ALTER TABLE',
      'c': ' CREAT TABLE',
      'd': ' INSERT'
  },
  'correct': 'a'
},
{
  'question': 'SQL tilida jadvalga 1 ta satrni kiritish operatori -bu',
  'answers': {
      'a': '  INSERT',
      'b': ' DROP',
      'c': ' ALTER TABLE',
      'd': ' CREAT TABLE'
  },
  'correct': 'a'
}, {
  'question': 'Oddiy kalit -bu',
  'answers': {
      'a': '  Maydon yagona qiymatga ega bo`lganda aniqlanadigan kalit',
      'b': ' Maydon yagona qiymatga ega bo`lmaganda bir necha maydonlardan iborat bo`lgan kalit',
      'c': ' Jadvalga har bir yozuvni kiritish bilan bu maydonga avtomatik ravishda tartib raqami kiritiladi',
      'd': ' Bir necha maydonlardan iborat bo`lgan kalit'
  },
  'correct': 'a'
}, {
  'question': 'Tarkibli kalit -bu',
  'answers': {
      'a': '  Maydon yagona qiymatga ega bo`lmaganda bir necha maydonlardan iborat bo`lgan kalit',
      'b': ' Jadvalga har bir yozuvni kiritish bilan bu maydonga avtomatik ravishda tartib raqami kiritiladi',
      'c': ' Maydon yagona qiymatga ega bo`lganda ( kod yoki inventar raqamlari kabi) aniqlanadigan kalit',
      'd': ' Bir necha maydonlardan iborat bo`lgan kalit'
  },
  'correct': 'a'
}, {
  'question': 'Schetchikli kalit -bu',
  'answers': {
      'a': '  Jadvalga har bir yozuvni kiritish bilan bu maydonga avtomatik ravishda tartib raqami kiritiladi',
      'b': ' Maydon yagona qiymatga ega bo`lganda ( kod yoki inventar raqamlari kabi) aniqlanadigan kalit',
      'c': ' Maydon yagona qiymatga ega bo`lmaganda bir necha maydonlardan iborat bo`lgan kalit',
      'd': ' Bir necha maydonlardan iborat bo`lgan kalit'
  },
  'correct': 'a'
}, {
  'question': 'MB da buyruq yoki buyruqlardan keying o`zgartirishlarni saqlash (bekor) qilish nima deb ataladi?',
  'answers': {
      'a': '  Tranzaktsiya',
      'b': ' Nusxalash',
      'c': ' Saqlash',
      'd': ' Cheklash'
  },
  'correct': 'a'
}, {
  'question': 'Agar maydonlarning ikkalasi ham schetchik turidagi kalit maydonlar bo`lsa, ularda qanday aloqalar o`rnatiladi?',
  'answers': {
      'a': ' Birga bir qiymatli aloqalar',
      'b': ' Birga ko`p qiymatli aloqalar',
      'c': '  Ko`pga ko`p qiymatli aloqalar',
      'd': ' Oddiy aloqalar'
  },
  'correct': 'c'
}, {
  'question': 'Yordamchi jadval orqali bog`langan aloqalar -bu',
  'answers': {
      'a': ' Ko`pga ko`p qiymatli aloqalar',
      'b': ' Birga bir qiymatli aloqalar',
      'c': ' Ikkita birga ko`p qiymatli aloqalar',
      'd': ' Oddiy aloqalar'
  },
  'correct': 'a'
}, {
  'question': 'Ma`lumotli jadval bilan asosiy jadval o`rtasida o`rnatilgan aloqalar -bu',
  'answers': {
      'a': '  Birga ko`p qiymatli aloqalar',
      'b': ' Ko`pga ko`p qiymatli aloqalar',
      'c': ' Oddiy aloqalar',
      'd': ' Birga bir qiymatli aloqalar'
  },
  'correct': 'a'
}, {
  'question': '2 ta birga ko`p qiymatli aloqalarga mos keladigan aloqalar',
  'answers': {
      'a': '  Ko`pga ko`p qiymatli aloqalar',
      'b': ' Ikkita birga bir qiymatli aloqalar',
      'c': ' Birga ko`p qiymatli aloqalar',
      'd': ' Oddiy aloqalar'
  },
  'correct': 'a'
}, {
  'question': 'Ko`pga ko`p qiymatli aloqalar o`rnatilganda tuzilgan kalit',
  'answers': {
      'a': '  Tarkibli kalit',
      'b': ' Oddiy kalit',
      'c': ' Schetchikli kalit',
      'd': ' Murakkab kalit'
  },
  'correct': 'a'
}, {
  'question': 'Kalit maydonlarni hosil qilishning eng sodda usuli',
  'answers': {
      'a': ' Schetchikli kalit',
      'b': ' Tarkibli kalit',
      'c': '  Oddiy kalit',
      'd': ' Murakkab kalit'
  },
  'correct': 'c'
}, {
  'question': 'Year([Sana]) funktsyasi nima vazifani beradi',
  'answers': {
      'a': ' «Sana» maydonidagi sananing hafta kuni nomeri',
      'b': " «Sana» maydonidagi sananing yilini ajratish (yil to`rt xonali son ko'rinishida akslanadi)",
      'c': ' «Sana» maydonidagi sananing kunini ajratish',
      'd': " Matnni sana formatiga o'tkazish"
  },
  'correct': 'd'
}, {
  'question': 'C++ Builderda MySQL bilan bog`lanish uchun qanday komponent ishlatiladi?',
  'answers': {
      'a': '  TSQLConnection',
      'b': ' TButton',
      'c': ' TEdit',
      'd': ' TLabel'
  },
  'correct': 'a'
}, {
  'question': 'MySQL serveriga ulanish uchun foydalanuvchi nomini qayerda kiritasiz?',
  'answers': {
      'a': '  SQLConnection.Params',
      'b': ' Database Editor',
      'c': ' Server Manager',
      'd': ' SQLQuery.CommandText'
  },
  'correct': 'a'
}, {
  'question': 'C++ Builderda MySQL server manzilini ko`rsatish uchun qaysi parametr ishlatiladi?',
  'answers': {
      'a': '  HostName',
      'b': ' DriverName',
      'c': ' UserName',
      'd': ' Database'
  },
  'correct': 'a'
}, {
  'question': 'MySQL bilan ulanishni amalga oshirish uchun qaysi komponentdan foydalaniladi?',
  'answers': {
      'a': ' TSQLConnection',
      'b': ' TSQLQuery',
      'c': ' TClientDataSet',
      'd': ' TDataSource'
  },
  'correct': 'a'
}, 
{'question': 'MySQL serverga ulanish uchun standart port raqami nima?', 'answers': {
  'a': '  3306',
  'b': ' 80',
  'c': ' 1433',
  'd': ' 5432'
}, 'correct': 'a'
}, {
  'question': 'SQLConnection uchun DriverName parametri qanday qiymatni qabul qiladi?',
  'answers': {
      'a': '  MySQL',
      'b': ' ODBC',
      'c': ' Oracle',
      'd': ' SQLite'
  },
  'correct': 'a'
}, {
  'question': 'MySQL bilan ishlashda qaysi komponent SQL buyruqlarini bajaradi?',
  'answers': {
      'a': '  TSQLQuery',
      'b': ' TSQLConnection',
      'c': ' TSQLDataSet',
      'd': ' TDBGrid'
  },
  'correct': 'a'
}, {
  'question': 'TSQLQuery komponentining asosiy vazifasi nima?',
  'answers': {
      'a': '  SQL buyruqlarini bajarish',
      'b': ' MySQL serverni boshqarish',
      'c': ' Foydalanuvchi interfeysini yaratish',
      'd': " Ma'lumotlarni vizual ko`rsatish"
  },
  'correct': 'a'
}, {
  'question': "C++ Builderda ma'lumotlar natijasini ko`rsatish uchun qaysi komponent ishlatiladi?",
  'answers': {
      'a': '  TDBGrid',
      'b': ' TDataSource',
      'c': ' TLabel',
      'd': ' TSQLConnection'
  },
  'correct': 'a'
}, {
  'question': 'TSQLConnection komponentini ulash uchun qaysi metoddan foydalaniladi?',
  'answers': {
      'a': '  Connect',
      'b': ' Open',
      'c': ' Close',
      'd': ' Execute'
  },
  'correct': 'a'
}, {
  'question': 'MySQL ulanish uchun login ma`lumotlarini qanday saqlash mumkin?',
  'answers': {
      'a': '  TSQLConnection.Params',
      'b': ' TDBGriColumns',
      'c': ' TEdit.Text',
      'd': ' TLabel.Caption'
  },
  'correct': 'a'
}, {
  'question': 'MySQL ulanishni uzish uchun qaysi metoddan foydalaniladi?',
  'answers': {
      'a': '  Disconnect',
      'b': ' Close',
      'c': ' Stop',
      'd': ' Terminate'
  },
  'correct': 'a'
}, {
  'question': "MySQL bilan ishlashda qaysi ma'lumotlar formati qo`llaniladi?",
  'answers': {
      'a': ' SQL',
      'b': ' JSON',
      'c': ' XML',
      'd': ' CSV'
  },
  'correct': 'a'
}, {
  'question': 'TSQLQuery uchun qaysi xususiyat SQL buyruqlarini saqlaydi?',
  'answers': {
      'a': ' SQL',
      'b': ' Params',
      'c': ' Text',
      'd': ' Query'
  },
  'correct': 'a'
}, {
  'question': "C++ Builderda ma'lumotlar o`zaro bog`lanish uchun qaysi komponentdan foydalaniladi?",
  'answers': {
      'a': ' TDataSource',
      'b': ' TLabel',
      'c': ' TButton',
      'd': ' TSQLQuery'
  },
  'correct': 'a'
}, {
  'question': 'TSQLQuery komponentining qaysi metodi SQL buyruqlarini bajaradi?',
  'answers': {
      'a': ' ExecuteSQL',
      'b': ' Open',
      'c': ' Refresh',
      'd': ' Connect'
  },
  'correct': 'a'
}, {
  'question': 'MySQLda SELECT buyruqlari natijasini olish uchun qaysi metod ishlatiladi?',
  'answers': {
      'a': 'Open',
      'b': ' ExecSQL',
      'c': ' Close',
      'd': ' Disconnect'
  },
  'correct': 'a'
}, {
  'question': 'TSQLConnection komponentida "Database" parametri nima uchun ishlatiladi?',
  'answers': {
      'a': " MySQL ma'lumotlar bazasini belgilash uchun",
      'b': ' Ulanuvchi loginini ko`rsatish uchun',
      'c': ' Server portini belgilash uchun',
      'd': ' SQL buyruqlarini bajarish uchun'
  },
  'correct': 'a'
}, {
  'question': 'MySQL ulanishida xatolikni tekshirish uchun qaysi xususiyatdan foydalaniladi?',
  'answers': {
      'a': ' Connected',
      'b': ' Params',
      'c': ' SQL',
      'd': ' Active'
  },
  'correct': 'a'
}, {
  'question': "C++ Builderda ma'lumotlarni vizual boshqarish uchun qaysi komponent ishlatiladi?",
  'answers': {
      'a': ' TDBGrid',
      'b': ' TEdit',
      'c': ' TLabel',
      'd': ' TButton'
  },
  'correct': 'a'
}, {
  'question': 'TSQLQuery komponentining Params xususiyati nima uchun ishlatiladi?',
  'answers': {
      'a': ' SQL buyruqlari parametrlarini o`rnatish uchun',
      'b': " Ma'lumotlar bazasi ulanishini o`rnatish uchun",
      'c': " Ma'lumotlarni saqlash uchun",
      'd': " Ma'lumotlarni ko`rsatish uchun"
  },
  'correct': 'a'
}, {
  'question': 'C++ Builderda MySQL bilan TLS ulanishini faollashtirish uchun qaysi parametr ishlatiladi?',
  'answers': {
      'a': ' SSLMode',
      'b': ' SecureMode',
      'c': ' EncryptionKey',
      'd': ' Security'
  },
  'correct': 'a'
}, {
  'question': "Ma'lumotlar bazasi ulanishini tekshirish uchun qanday metod ishlatiladi?",
  'answers': {
      'a': ' Ping',
      'b': ' TestConnection',
      'c': ' Connect',
      'd': ' Check'
  },
  'correct': 'b'
}, {
  'question': "C++ Builderda qaysi komponent foydalanuvchi interfeysi va ma'lumotlar bazasini bog`laydi?",
  'answers': {
      'a': ' TDataSource',
      'b': ' TSQLQuery',
      'c': ' TSQLConnection',
      'd': ' TButton'
  },
  'correct': 'a'
}, { // shetdan
  'question': "C++ Builderda ma'lumotlarni tahrirlash uchun qaysi komponent ishlatiladi?",
  'answers': {
      'a': ' TDBEdit',
      'b': ' TDBGrid',
      'c': ' TLabel',
      'd': ' TSQLQuery'
  },
  'correct': 'a'
}, {
  'question': 'TDBGridda qatorlar orasida yurish uchun qaysi tugma ishlatiladi?',
  'answers': {
      'a': ' Arrow keys (↑↓)',
      'b': ' Enter',
      'c': ' Tab',
      'd': ' Shift'
  },
  'correct': 'a'
}, {
  'question': "C++ Builderda ma'lumotlar bazasiga ulanishni avtomatik bajarish uchun qaysi xususiyatni ishlatasiz?",
  'answers': {
      'a': ' Connected',
      'b': ' AutoConnect',
      'c': ' Active',
      'd': ' OpenOnLoad'
  },
  'correct': 'a'
}, {
  'question': "TSQLQuery yordamida ma'lumotlarni kiritish uchun qaysi SQL buyruq ishlatiladi?",
  'answers': {
      'a': ' INSERT',
      'b': ' SELECT',
      'c': ' UPDATE',
      'd': ' DELETE'
  },
  'correct': 'a'
}, {
  'question': 'TSQLConnection komponentining LoginPrompt xususiyati nima qiladi?',
  'answers': {
      'a': ' Login oynasini ko`rsatadi',
      'b': " Ma'lumotlarni shifrlaydi",
      'c': ' Ulanishni avtomatlashtiradi',
      'd': ' SQL so`rovlarini boshqaradi'
  },
  'correct': 'a'
}, {
  'question': 'C++ Builderda SQL natijalarini yuklash uchun qaysi metod ishlatiladi?',
  'answers': {
      'a': ' Open',
      'b': ' Fetch',
      'c': ' LoadData',
      'd': ' Execute'
  },
  'correct': 'a'
}, {
  'question': 'MySQL ulanish uchun maxsus identifikatorni qanday tekshirasiz?',
  'answers': {
      'a': ' ConnectionName',
      'b': ' DatabaseID',
      'c': ' Identifier',
      'd': ' SessionID'
  },
  'correct': 'd'
}, {
  'question': "Ma'lumotlar bazasida ma'lumotlarni o`zgartirish uchun qaysi SQL buyruq ishlatiladi?",
  'answers': {
      'a': ' UPDATE',
      'b': ' SELECT',
      'c': ' DELETE',
      'd': ' INSERT'
  },
  'correct': 'a'
}, {
  'question': "Ma'lumotlar bazasidan ma'lumotlarni o`chirish uchun qaysi SQL buyruq ishlatiladi?",
  'answers': {
      'a': ' DELETE',
      'b': ' DROP',
      'c': ' TRUNCATE',
      'd': ' CLEAR'
  },
  'correct': 'a'
},{'question': 'Ma`lumotlar bazasi bu...', 
  'answers': {
    'a': ' Ma’lumotlarni saqlash uchun mo’ljallangan tashkiliy struktura', 
    'b': '  Ma’lum bir  predmet sohani o’z ichiga olgan ma’lumotlar majmuidir', 
    'c': ' Kompyuterda tez hal qilish mumkin bo’lgan masalalar turkumi', 
    'd': ' Yangi bazalar sistemasini yaratishga mo’ljallangan vositalar majmuidir'
  }, 
  'correct': 'b'
}];


const questionIndexMap = quizdata.reduce((acc, item, index) => {
  acc[item.question] = index;
  return acc;
}, {});



// Levenshtein Searching
function levenshteinDistance(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));

  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,       // Deletion
        matrix[i][j - 1] + 1,       // Insertion
        matrix[i - 1][j - 1] + cost // Substitution
      );
    }
  }

  return matrix[a.length][b.length];
}

function findClosestKey(query, data) {
  let closestKey = null;
  let smallestDistance = Infinity;

  for (const key of Object.keys(data)) {
    const distance = levenshteinDistance(query, key);
    if (distance < smallestDistance) {
      smallestDistance = distance;
      closestKey = key;
    }
  }

  return closestKey ? data[closestKey] : null;
}


let selectionButton, aswrtxt, selectionButtons;
let sss = ''
let ind = 0

// Matn tanlanganda voqeani kuzatish
document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString().trim();

  // Agar matn tanlanmagan bo'lsa, tugmani yashirish
  if (!selectedText) {
    ind = 0;
    if (document.getElementById("selection-ninetydev-button")) {
      document.getElementById("selection-ninetydev-button").remove();
      selectionButton = null;
    }
    if (document.getElementById("selection-ninetydev-buttons")) {
      document.getElementById("selection-ninetydev-buttons").remove();
      selectionButtons = null;
    }
    if (document.getElementById("selection-bandadev-txt")) {
      document.getElementById("selection-bandadev-txt").remove();
      answrtxt = null;
    }

    return;
  }

  // Tugma yaratilmagan bo'lsa, yangi tugma yaratish
  if (!selectionButton) {
    selectionButton = document.createElement("button");
    selectionButton.id = "selection-ninetydev-button";
    selectionButton.textContent = "Copy";
    selectionButton.style.position = "absolute";
    selectionButton.style.zIndex = "1000";
    selectionButton.style.background = "grey";
    selectionButton.style.color = "white";
    selectionButton.style.border = "none";
    selectionButton.style.borderRadius = "5px";
    selectionButton.style.padding = "5px";
    selectionButton.style.cursor = "pointer";
    // labelni yaratish

    // copy all tugmasini yaratish
    selectionButtons = document.createElement("button");
    selectionButtons.id = "selection-ninetydev-buttons";
    selectionButtons.textContent = "         Copy All";
    selectionButtons.style.position = "absolute";
    selectionButtons.style.zIndex = "1000";
    selectionButtons.style.background = "grey ";
    selectionButtons.style.color = "white";
    selectionButtons.style.border = "none";
    selectionButtons.style.borderRadius = "5px";
    selectionButtons.style.padding = "5px";
    selectionButtons.style.cursor = "pointer";
    document.body.appendChild(selectionButton);

    document.body.appendChild(selectionButtons);
  }


  // Tugma joylashuvini tanlangan matn joyiga moslashtirish
  const range = window.getSelection().getRangeAt(0);
  const rect = range.getBoundingClientRect();
  selectionButton.style.top = `${window.scrollY + rect.bottom}px`;
  selectionButton.style.left = `${window.scrollX + rect.right}px`;
  // copy all
  selectionButtons.style.top = `${window.scrollY + rect.bottom}px`;
  selectionButtons.style.left = `${window.scrollX + rect.right + 36}px`;

  // Tugmani bosganda biror amal bajarish
  selectionButton.onclick = () => {
    index = findClosestKey(selectedText, questionIndexMap);
    navigator.clipboard.writeText(selectedText)
    correct = quizdata[index]['correct'];
    sss = quizdata[index]['answers'][correct];
  };
  selectionButtons.onclick = () => {
    if (ind % 2 == 1) {
      document.getElementById('selection-bandadev-txt').textContent = '';
      document.getElementById('selection-bandadev-txt').style.display = 'none';
    }
    else if (ind == 0) {
      answrtxt = document.createElement("label");
      answrtxt.id = 'selection-bandadev-txt'
      answrtxt.style.position = "absolute";
      answrtxt.style.zIndex = "1000";
      answrtxt.style.background = "gray";
      answrtxt.style.color = "white";
      answrtxt.style.border = "none";
      answrtxt.style.borderRadius = "5px";
      answrtxt.style.padding = "5px";
      answrtxt.style.cursor = "pointer";
      answrtxt.style.top = `${window.scrollY + rect.bottom + 50}px`;
      answrtxt.style.left = `${window.scrollX + rect.right - 100}px`;
      answrtxt.textContent = sss;
      answrtxt.style.display = 'block';
      document.body.appendChild(answrtxt);
    }
    else if ((ind > 0) && (ind % 2 == 0)) {
      document.getElementById('selection-bandadev-txt').textContent = sss;
      document.getElementById('selection-bandadev-txt').style.display = 'block';
    }
    ind = ind + 1
  }

});
