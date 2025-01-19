const quizdata = [{
  'question': "Elektr toki qanday o'lchanadi?",
  'answers': {
      'a': 'Amper',
      'b': 'Volt',
      'c': 'Om',
      'd': 'Gerts'
  },
  'correct': 'a'
}, {
  'question': 'Rezistorning asosiy vazifasi nima?',
  'answers': {
      'a': 'Tokni kuchaytirish',
      'b': "Kuchlanishni o'lchash",
      'c': "Qarshilik ko'rsatish",
      'd': 'D) Signallarni kuchaytirish'
  },
  'correct': 'c'
}, {
  'question': 'Elektron sxemada diodning asosiy vazifasi nima?',
  'answers': {
      'a': 'Tokni kuchaytirish',
      'b': "Tokni bir yo'nalishda o'tkazish",
      'c': "Kuchlanishni o'lchash",
      'd': 'Signallarni pasaytirish'
  },
  'correct': 'b'
}, {
  'question': 'Transistorlarning asosiy turlari qaysilar?',
  'answers': {
      'a': 'BJT va FET',
      'b': 'LED va LCD',
      'c': 'Diode va Triode',
      'd': 'Resistor va Kondensator'
  },
  'correct': 'a'
}, {
  'question': 'Kondensatorning asosiy funksiyasi nima?',
  'answers': {
      'a': "Tokni o'lchash",
      'b': 'Energiyani saqlash',
      'c': 'Tokni kuchaytirish',
      'd': "Qarshilik ko'rsatish"
  },
  'correct': 'b'
}, {
  'question': 'Elektr toki birligi qanday?',
  'answers': {
      'a': 'Om',
      'b': 'Volt',
      'c': 'Amper',
      'd': 'Vat'
  },
  'correct': 'c'
}, {
  'question': "Yarim o'tkazgich materialiga misol bo'la oladigan element qaysi?",
  'answers': {
      'a': 'Kumush',
      'b': 'Silikon',
      'c': 'Mis',
      'd': 'Qalay'
  },
  'correct': 'b'
}, {
  'question': 'Analog signal nima bilan farq qiladi?',
  'answers': {
      'a': 'Raqamli signaldan uzluksizligi bilan',
      'b': "Faqat 0 va 1 qiymatlari bo'lishi bilan",
      'c': 'Doimiy kuchlanish bilan',
      'd': "Tok yo'nalishi bilan"
  },
  'correct': 'a'
}, {
  'question': 'Diqqat sxema uchun mos keladigan tok manbai qaysi?',
  'answers': {
      'a': 'Doimiy tok (DC)',
      'b': "O'zgaruvchan tok (AC)",
      'c': 'Ikkalasi mos keladi',
      'd': 'Faqat yuqori kuchlanishli tok'
  },
  'correct': 'c'
}, {
  'question': 'Om qarshilikni qanday ifodalaydi?',
  'answers': {
      'a': "Kuchlanishni to'g'irlash",
      'b': "Elektr toki o'tkazuvchanligini pasaytirish",
      'c': 'Kuchlanishni oshirish',
      'd': "Signallarni o'zgartirish"
  },
  'correct': 'b'
}, {
  'question': 'LED qisqartmasi nimani anglatadi?',
  'answers': {
      'a': 'Light Emitting Diode',
      'b': 'Linear Energy Device',
      'c': 'Low Energy Device',
      'd': 'Light Energy Diode'
  },
  'correct': 'a'
}, {
  'question': 'Induktor qanday komponent?',
  'answers': {
      'a': 'Energiyani saqlaydi va elektromagnit maydon hosil qiladi',
      'b': 'Tokni kuchaytiradi',
      'c': "Signalni o'zgartiradi",
      'd': 'Elektrni saqlaydi'
  },
  'correct': 'a'
}, {
  'question': "Kuchlanish o'lchov birligi nima?",
  'answers': {
      'a': 'Om',
      'b': 'Volt',
      'c': 'Vat',
      'd': 'Gerts'
  },
  'correct': 'b'
}, {
  'question': "Elektron sxemada uzilish sodir bo'lganda, qanday komponent muammo bartaraf etishda yordam beradi?",
  'answers': {
      'a': 'Rezistor',
      'b': "Sug'urta",
      'c': 'Kondensator',
      'd': 'Transformator'
  },
  'correct': 'b'
}, {
  'question': 'Rezistorning rang kodlari nima uchun ishlatiladi?',
  'answers': {
      'a': "Kondensator sig'imini aniqlash uchun",
      'b': 'Qarshilik qiymatini belgilash uchun',
      'c': 'Kuchlanishni aniqlash uchun',
      'd': 'Faqat estetik maqsadda'
  },
  'correct': 'b'
}, {
  'question': 'Elektr sxemada diodlar qaysi rolni bajaradi?',
  'answers': {
      'a': 'Tokni qayta ishlash',
      'b': "Tokni bir tomonlama o'tkazish",
      'c': 'Signalni kuchaytirish',
      'd': 'Tokni kamaytirish'
  },
  'correct': 'b'
}, {
  'question': 'Bir fazali AC kuchlanish chastotasi Oâ€˜zbekistonda necha gerts?',
  'answers': {
      'a': '50 Gerts',
      'b': '60 Gerts',
      'c': '120 Gerts',
      'd': '75 Gerts'
  },
  'correct': 'a'
}, {
  'question': 'Elektron sxemada tranzistorning vazifasi nima?',
  'answers': {
      'a': "Tokni bir yo'nalishda o'tkazish",
      'b': 'Kuchlanishni kamaytirish',
      'c': 'Tokni boshqarish',
      'd': 'Signalni kuchaytirish'
  },
  'correct': 'c'
}, {
  'question': "O'zgaruvchan tok (AC) va doimiy tok (DC) orasidagi farq nima?",
  'answers': {
      'a': 'AC faqat elektr qurilmalari uchun ishlatiladi, DC esa faqat motorlar uchun',
      'b': "AC kuchlanishi o'zgarmaydi, DC esa o'zgaradi",
      'c': "AC kuchlanishi o'zgaradi, DC esa o'zgarmaydi",
      'd': 'Ikkalasi ham bir xil ishlatiladi'
  },
  'correct': 'c'
}, {
  'question': 'Kondensatorlarning qanday xususiyati mavjud?',
  'answers': {
      'a': "Ular energiyani to'playdi va zaryadni saqlaydi",
      'b': "Ular faqat tokni yo'naltiradi",
      'c': 'Ular faqat kuchlanishni oshiradi',
      'd': 'Ular signalni kuchaytiradi'
  },
  'correct': 'a'
}, {
  'question': 'Elektr sxemada induktor nima uchun ishlatiladi?',
  'answers': {
      'a': 'Tokni pasaytirish',
      'b': 'Kuchlanishni oshirish',
      'c': 'Elektr maydon hosil qilish',
      'd': 'Energiya saqlash'
  },
  'correct': 'c'
}, {
  'question': "Qaysi qurilma bir vaqtning o'zida signalni ham kuchaytiradi, ham yo'naltiradi?",
  'answers': {
      'a': 'Diod',
      'b': 'Tranzistor',
      'c': 'Kondensator',
      'd': 'Induktor'
  },
  'correct': 'b'
}, {
  'question': 'Elektr sxemada transformator qanday vazifani bajaradi?',
  'answers': {
      'a': 'Tokni kuchaytirish',
      'b': "Kuchlanishni o'zgartirish",
      'c': 'Signalni kuchaytirish',
      'd': 'Energiya saqlash'
  },
  'correct': 'b'
}, {
  'question': 'Diqqat sxemalarida rezistorning vazifasi nima?',
  'answers': {
      'a': 'Tokni oshirish',
      'b': 'Tokni cheklash',
      'c': 'Signalni kuchaytirish',
      'd': "Energiya to'plash"
  },
  'correct': 'b'
}, {
  'question': 'Diodning asosiy xususiyati nima?',
  'answers': {
      'a': "Tokni har ikki yo'nalishda o'tkazish",
      'b': "Tokni faqat bir yo'nalishda o'tkazish",
      'c': 'Signalni kuchaytirish',
      'd': "Kuchlanishni o'zgartirish"
  },
  'correct': 'b'
}, {
  'question': 'Elektron sxemalarda "GND" nima?',
  'answers': {
      'a': 'Tokni kuchaytiruvchi',
      'b': 'Elektron komponent',
      'c': "Yerdagi elektr o'lchov nuqtasi",
      'd': 'Elektron energiya manbai'
  },
  'correct': 'c'
}, {
  'question': 'Resistorlar qanday materiallardan tayyorlanadi?',
  'answers': {
      'a': 'Yengil plastik',
      'b': 'Metall va qarshilik materiallari',
      'c': 'Keramika',
      'd': 'Kam quvvatli materiallar'
  },
  'correct': 'b'
}, {
  'question': "Elektr sxemada kondensatorlar va rezistorlar o'zaro qanday ulanadi?",
  'answers': {
      'a': "To'g'ridan-to'g'ri parallel",
      'b': 'Faol parallel',
      'c': 'Seriya ulanishda',
      'd': "Hech qanday aloqasi yo'q"
  },
  'correct': 'c'
}, {
  'question': "Diqqat sxemalarida tranzistorlar ko'pincha qanday maqsadlar uchun ishlatiladi?",
  'answers': {
      'a': 'Tokni kuchaytirish',
      'b': "Signallarni to'xtatish",
      'c': "Kuchlanishni o'zgartirish",
      'd': 'Tokni filtrlash'
  },
  'correct': 'a'
}, {
  'question': 'LED-lar qanday xususiyatga ega?',
  'answers': {
      'a': 'Faqat qizil rangda ishlaydi',
      'b': 'Kam energiya sarflaydi',
      'c': 'Yaltiroq effekt yaratmaydi',
      'd': "Tokni faqat yuqori kuchlanishda o'tkazadi"
  },
  'correct': 'b'
}, {
  'question': "Elektron sxemada uzilish bo'lsa, qaysi qurilma tokni qayta tiklashga yordam beradi?",
  'answers': {
      'a': 'Diod',
      'b': "Sug'urta",
      'c': 'Rezistor',
      'd': 'Kondensator'
  },
  'correct': 'b'
}, {
  'question': "Bir fazali o'zgaruvchan tok (AC) qaysi xususiyatga ega?",
  'answers': {
      'a': "Tok bir tomonlama o'tadi",
      'b': "Kuchlanish doimiy bo'ladi",
      'c': "Tok va kuchlanish doimiy ravishda o'zgaradi",
      'd': 'Tok faqat past kuchlanishda ishlaydi'
  },
  'correct': 'c'
}, {
  'question': "Bir fazali o'zgaruvchan tokda faza bilan to'qnashuv nima?",
  'answers': {
      'a': "Kuchlanishning yo'qolishi",
      'b': "Tokning yo'qolishi",
      'c': "Tok va kuchlanishning to'g'ri moslashishi",
      'd': 'Kuchlanish va tokning orasidagi burchakli farq'
  },
  'correct': 'd'
}, {
  'question': "Elektron sxemada kondensatorlarning to'liq zaryadi qanday sodir bo'ladi?",
  'answers': {
      'a': "Tokni to'liq o'zgartirish orqali",
      'b': "Kuchlanishning o'zgarishi orqali",
      'c': "Zaryadning to'liq saqlanishi orqali",
      'd': 'Energiyaning yutilishi orqali'
  },
  'correct': 'c'
}, {
  'question': 'Elektron sxemalarda quvvatni qanday hisoblash mumkin?',
  'answers': {
      'a': "Tok va kuchlanishning ko'paytmasi orqali",
      'b': 'Tok va kuchlanishning ayirmasi orqali',
      'c': 'Signalning chastotasi orqali',
      'd': 'Energiya miqdori orqali'
  },
  'correct': 'a'
}, {
  'question': 'AC va DC toklarining farqi nima?',
  'answers': {
      'a': "AC faqat ikkita yo'nalishdan birida o'tadi, DC esa doimiy yo'nalishda o'tadi",
      'b': "AC kuchlanish doimiy, DC esa o'zgaruvchan",
      'c': "AC va DC orasida hech qanday farq yo'q",
      'd': "AC o'zgaruvchan kuchlanishga ega, DC esa doimiy kuchlanishga ega"
  },
  'correct': 'd'
}, {
  'question': "Elektr sxemalarda kondensatorning kuchlanishi qanday o'zgaradi?",
  'answers': {
      'a': "U doimiy ravishda o'zgaradi",
      'b': "U o'zgarishlarni o'z ichiga olmaydi",
      'c': "U boshlang'ich kuchlanishga to'g'ri keladi",
      'd': 'U zaryadni saqlab qoladi'
  },
  'correct': 'a'
}, {
  'question': 'Transistorning uchta asosiy terminali qaysilar?',
  'answers': {
      'a': 'Kollektyor, baza, emitor',
      'b': 'Anod, katod, baza',
      'c': 'Anod, emitor, kollektor',
      'd': 'Baza, tok, uzluksizlik'
  },
  'correct': 'a'
}, {
  'question': 'Induktorlarning asosiy funktsiyasi nima?',
  'answers': {
      'a': 'Tokni kuchaytirish',
      'b': 'Tokni cheklash',
      'c': 'Magnit maydon hosil qilish',
      'd': "Tokni o'lchash"
  },
  'correct': 'c'
}, {
  'question': "Diodning yonish kuchlanishiga nima ta'sir qiladi?",
  'answers': {
      'a': 'Diodning rangi',
      'b': "Diodning o'lchami",
      'c': 'Kuchlanish va tok',
      'd': "Qonuniy o'lchovlar"
  },
  'correct': 'c'
}, {
  'question': 'Elektron sxemalarda, kondensatorlarning turlari qaysilar?',
  'answers': {
      'a': 'Suyuqlik va gaz',
      'b': 'Keramika va elektrolit',
      'c': 'Alimniy va plastik',
      'd': 'Elektromagnit va gaz'
  },
  'correct': 'b'
}, {
  'question': "Yarim o'tkazgich qanday materiallardan tashkil topadi?",
  'answers': {
      'a': 'Mis va alÃ¼miniy',
      'b': 'Silikon va germanium',
      'c': 'Kumush va mis',
      'd': 'Temir va qotishmalar'
  },
  'correct': 'b'
}, {
  'question': 'Tranzistorning uchta terminalining vazifasi qanday?',
  'answers': {
      'a': 'Baza signalni qabul qiladi, kollektyor va emitor esa tokni boshqaradi',
      'b': 'Baza, kollektyor va emitor faqat signal uzatadi',
      'c': 'Kollektyor signalni qabul qiladi, emitor esa energiyani tarqatadi',
      'd': 'Baza faqat kuchlanishni boshqaradi'
  },
  'correct': 'a'
}, {
  'question': 'Elektr sxemalarida signal kuchaytirish uchun qaysi qurilma ishlatiladi?',
  'answers': {
      'a': 'Diod',
      'b': 'Tranzistor',
      'c': 'Induktor',
      'd': 'Kondensator'
  },
  'correct': 'b'
}, {
  'question': 'Kondensatorni qanday ishlatish mumkin?',
  'answers': {
      'a': 'Tokni kuchaytirish uchun',
      'b': "Energiyani saqlash va zarur bo'lganda chiqarish uchun",
      'c': 'Kuchlanishni pasaytirish uchun',
      'd': 'Tokni boshqarish uchun'
  },
  'correct': 'b'
}, {
  'question': 'Elektr sxemalarida "AC" va "DC" qisqartmalari nimani anglatadi?',
  'answers': {
      'a': 'Analog Control va Digital Control',
      'b': 'Alternating Current va Direct Current',
      'c': 'Automatic Control va Digital Control',
      'd': 'Alternating Circuit va Direct Circuit'
  },
  'correct': 'b'
}, {
  'question': 'Transformatorning asosiy vazifasi nima?',
  'answers': {
      'a': 'Kuchlanishni oshirish',
      'b': 'Tokni kuchaytirish',
      'c': "Kuchlanishni o'zgartirish",
      'd': 'okni cheklash'
  },
  'correct': 'c'
}, {
  'question': 'Transformatorning samaradorligini aniqlashda qanday omil eng muhimdir?',
  'answers': {
      'a': 'Diodning qarshiligi',
      'b': "Magnetik yo'qotishlar",
      'c': "Kondensatorning sig'imi",
      'd': 'Tranzistorning ishlash tezligi'
  },
  'correct': 'b'
}, {
  'question': 'Asinxron dvigatelning ishlash prinsipi nima?',
  'answers': {
      'a': 'Doimiy tezlikda ishlaydi',
      'b': "Rotor maydoni stator maydoniga qarama-qarshi yo'nalishda aylanadi",
      'c': "Rotor va stator maydonlari doimo bir xil yo'nalishda aylanishi kerak",
      'd': "Rotor va stator maydonlari doimiy ravishda bir-biriga parallel bo'ladi"
  },
  'correct': 'b'
}, {
  'question': 'Asinxron dvigatelda rotorning aylanish tezligi nima bilan belgilanadi?',
  'answers': {
      'a': 'Statordagi kuchlanishning qiymati',
      'b': 'Rotorning ishlash tezligi bilan',
      'c': 'Statorning aylanish tezligi bilan',
      'd': "Rotorning aylanish tezligi stator maydoniga nisbatan bo'ladi"
  },
  'correct': 'd'
}, {
  'question': 'Asinxron dvigatelning foydalari qaysilar?',
  'answers': {
      'a': 'Ular faqat yuqori kuchlanishli tizimlarda ishlaydi',
      'b': 'Ular yaxshi samaradorlikka ega va kam texnik xizmatni talab qiladi',
      'c': 'Ular faqat kichik qurilmalarda ishlaydi',
      'd': 'Ular doimiy tokda ishlaydi'
  },
  'correct': 'b'
}, {
  'question': "Yarimo'tkazgichli diod nima uchun ishlatiladi?",
  'answers': {
      'a': "Tokni faqat bir yo'nalishda o'tkazish",
      'b': 'Kuchlanishni oshirish',
      'c': 'Elektr energiyasini saqlash',
      'd': 'Signallarni kuchaytirish'
  },
  'correct': 'a'
}, {
  'question': "Yarimo'tkazgichli diodning asosiy xususiyati nima?",
  'answers': {
      'a': "U har qanday tokni o'zgartiradi",
      'b': 'U kuchlanishni doimiy ravishda oshiradi',
      'c': "U tokni faqat bir yo'nalishda o'tkazadi",
      'd': 'U kuchlanishni kamaytiradi'
  },
  'correct': 'c'
}, {
  'question': "Yarimo'tkazgichli diodning ishlash prinsipi qanday?",
  'answers': {
      'a': "Tokni har ikki yo'nalishda o'tkazish orqali ishlaydi",
      'b': "Faol yuzalari orqali bir yo'nalishdagi tokni o'tkazadi",
      'c': 'Energiyani saqlaydi',
      'd': "O'zgaruvchan tokni doimiy tokka aylantiradi"
  },
  'correct': 'b'
}, {
  'question': "Nima sababdan yarimo'tkazgichli diodlar tarmoqlarda ko'proq ishlatiladi?",
  'answers': {
      'a': 'Ular yuqori kuchlanishda ishlaydi',
      'b': 'Ular kichik hajmdagi komponentlar',
      'c': 'Ular faqat tarmoqlarda ishlaydi',
      'd': 'Ular doimiy tokni kuchaytiradi'
  },
  'correct': 'b'
}, {
  'question': 'Tranzistorning ishlash prinsipi nima?',
  'answers': {
      'a': 'Elektr energiyasini magnit energiyasiga aylantiradi',
      'b': "Tokni faqat bir yo'nalishda o'tkazadi",
      'c': 'Signallarni kuchaytiradi va boshqaradi',
      'd': 'Elektronlarni saqlaydi'
  },
  'correct': 'c'
}, {
  'question': 'Tranzistorlar nima uchun ishlatiladi?',
  'answers': {
      'a': "Tokni faqat bir yo'nalishda o'tkazish",
      'b': 'Signallarni kuchaytirish va boshqarish',
      'c': 'Kuchlanishni oshirish',
      'd': 'Tokni kuchaytirish'
  },
  'correct': 'b'
}, {
  'question': 'Tranzistorning asosiy turlari qaysilar?',
  'answers': {
      'a': 'PNP va NPN',
      'b': 'LED va LCD',
      'c': 'Diod va Induktor',
      'd': 'Kondenstor va Rezistor'
  },
  'correct': 'a'
}, {
  'question': "Tranzistorlar ko'pincha qanday rolda ishlatiladi?",
  'answers': {
      'a': 'Signalni kuchaytirish',
      'b': 'Tokni cheklash',
      'c': 'Kuchlanishni kamaytirish',
      'd': 'Elektr energiyasini saqlash'
  },
  'correct': 'a'
}, {
  'question': 'Tranzistorlar qanday ishlash rejimlariga ega?',
  'answers': {
      'a': 'Yuksaltirish va pastlatirish',
      'b': 'Aktiv va pasiv',
      'c': 'Ochiq va yopiq',
      'd': "Qaytish va to'xtash"
  },
  'correct': 'b'
}, {
  'question': 'Tranzistorning bazasi nima uchun ishlatiladi?',
  'answers': {
      'a': 'Tokni boshqaradi',
      'b': 'Signalni kuchaytiradi',
      'c': 'Kuchlanishni oshiradi',
      'd': 'Elektr energiyasini saqlaydi'
  },
  'correct': 'a'
}, {
  'question': "Yarimo'tkazgichli diodlar va tranzistorlar orasidagi farq nima?",
  'answers': {
      'a': 'Tranzistorlar faqat kuchlanishni boshqaradi',
      'b': "Diod faqat tokni bir yo'nalishda o'tkazadi, tranzistorlar esa signallarni kuchaytiradi",
      'c': "Tranzistorlar faqat o'zgaruvchan tokni ishlatadi",
      'd': 'Diodlar faqat signallarni kuchaytiradi'
  },
  'correct': 'b'
}, {
  'question': 'Transformatorning samaradorligini oshirish uchun qanday materiallar ishlatiladi?',
  'answers': {
      'a': 'Qalay va mis',
      'b': 'Metall va keramika',
      'c': "Yuqori o'tkazuvchanlikka ega materiallar, masalan, temir yadro",
      'd': 'Plastik va kremniy'
  },
  'correct': 'c'
}, {
  'question': "Yarimo'tkazgichli diodlar o'zgaruvchan tokni qanday o'zgartiradi?",
  'answers': {
      'a': "Ular o'zgaruvchan tokni to'liq tokka aylantiradi",
      'b': "Ular o'zgaruvchan tokni boshqaradi",
      'c': "Ular o'zgaruvchan tokni pasaytiradi",
      'd': "Ular o'zgaruvchan tokni"
  },
  'correct': 'a'
}, {
  'question': 'Asinxron dvigatelning rotorida nima mavjud?',
  'answers': {
      'a': "Faol yo'naltirilgan magnetlar",
      'b': "O'zgaruvchan magnit maydoni",
      'c': 'Doimiy magnit maydoni',
      'd': 'Tokni pasaytiruvchi komponentlar'
  },
  'correct': 'b'
}, {
  'question': 'Diodning asosiy vazifasi nima?',
  'answers': {
      'a': "Tokni faqat bir yo'nalishda o'tkazish",
      'b': 'Kuchlanishni oshirish',
      'c': 'Signalni kuchaytirish',
      'd': "Tokni har ikki yo'nalishda o'tkazish"
  },
  'correct': 'a'
}, {
  'question': "Yarimo'tkazgichli diod nima uchun ishlatiladi?",
  'answers': {
      'a': "Tokni faqat bir yo'nalishda o'tkazish",
      'b': "Tokni ikkita yo'nalishda o'tkazish",
      'c': 'Kuchlanishni oshirish',
      'd': 'Signalni kuchaytirish'
  },
  'correct': 'a'
}, {
  'question': 'Diodning asosiy turlari qaysilar?',
  'answers': {
      'a': 'PNP va NPN',
      'b': 'Anod va katod',
      'c': 'P-N va Zener diodlari',
      'd': 'Diod va tranzistor'
  },
  'correct': 'c'
}, {
  'question': 'P-N diod nima?',
  'answers': {
      'a': "Elektronlarni doimiy ravishda yo'naltiradi",
      'b': "Tokni faqat bir yo'nalishda o'tkazadigan yarimo'tkazgichli komponent",
      'c': 'Energiyani saqlaydi',
      'd': "Ikkita terminalga ega bo'lgan kondensator"
  },
  'correct': 'b'
}, {
  'question': 'Zener diodning asosiy xususiyati nima?',
  'answers': {
      'a': 'U faqat yuqori kuchlanishda ishlaydi',
      'b': "U o'zgaruvchan kuchlanishda ishlaydi",
      'c': "U kuchlanishning ko'payishiga qarshi ishlaydi va teskari kuchlanish ta'sirida ishlaydi",
      'd': 'U kuchlanishni pasaytiradi'
  },
  'correct': 'c'
}, {
  'question': "Yarimo'tkazgichli diodlar qanday materiallardan tayyorlanadi?",
  'answers': {
      'a': 'Plastik',
      'b': 'Keramika',
      'c': 'Kremniy yoki germaniy',
      'd': 'Temir yoki mis'
  },
  'correct': 'c'
}, {
  'question': 'Fotodiod qanday ishlaydi?',
  'answers': {
      'a': "Ikkita yonalishli tokni o'tkazadi",
      'b': 'faqat yuqori kuchlanishli tizimlarda ishlaydi',
      'c': "yorug'lik ta'sirida tokni o'tkazadi",
      'd': 'kuchlanishni oshiradi'
  },
  'correct': 'c'
}, {
  'question': 'Shotki diodning boshqa diodlardan farqi nima?',
  'answers': {
      'a': 'U yuqori kuchlanishda ishlaydi',
      'b': "U faqat pasaytiruvchi tokni o'tkazadi",
      'c': 'U past kuchlanishli tushishiga ega va tezroq ishlaydi',
      'd': "U faqat o'zgaruvchan tokni o'tkazadi"
  },
  'correct': 'c'
}, {
  'question': 'LED (Light Emitting Diode) diodning asosiy xususiyati nima?',
  'answers': {
      'a': 'U energiyani saqlaydi',
      'b': "U faqat qizil rangda yorug'lik chiqaradi",
      'c': "U yorug'lik chiqaradi, lekin energiya sarflaydi",
      'd': "U energiyani kam sarflaydi va yorug'lik hosil qiladi"
  },
  'correct': 'd'
}, {
  'question': "Diodlar nima uchun ko'proq ishlatiladi?",
  'answers': {
      'a': 'Ular kuchlanishni oshiradi',
      'b': 'Ular signallarni kuchaytiradi',
      'c': "Ular faqat bir yo'nalishdagi tokni o'tkazadi, bu esa tizimlarni himoya qiladi",
      'd': 'Ular faqat yuqori kuchlanishli tizimlarda ishlaydi'
  },
  'correct': 'c'
}, {
  'question': 'Tunnel diodning ishlash prinsipida nima bor?',
  'answers': {
      'a': 'U past kuchlanishda ishlaydi va yuqori tezlikda ishlaydi',
      'b': 'U kuchlanishni oshiradi',
      'c': "U faqat bir yo'nalishdagi tokni o'tkazadi",
      'd': 'U kuchlanishlarni kamaytiradi'
  },
  'correct': 'a'
}, {
  'question': "Diodning 'forward bias' rejimi qanday ishlaydi?",
  'answers': {
      'a': "Diod tokni faqat teskari yo'nalishda o'tkazadi",
      'b': "Diod tokni faqat oldinga yo'nalishda o'tkazadi",
      'c': "Diod tokni hech qanday yo'nalishda o'tkazmaydi",
      'd': "Diodning kuchlanishi o'zgarmaydi"
  },
  'correct': 'b'
}, {
  'question': 'Om qonuni nima?',
  'answers': {
      'a': 'Kuchlanishning qarshilikka nisbati toki beradi',
      'b': 'Tokning kuchlanishga nisbati qarshilikni beradi',
      'c': 'Qarshilikning kuchlanishga nisbati toki beradi',
      'd': 'Tokning qarshilikka nisbati kuchlanishni beradi'
  },
  'correct': 'a'
}, {
  'question': "Om qonuniga ko'ra, agar qarshilik 10 om va kuchlanish 20V bo'lsa, tokni qanday hisoblash mumkin?",
  'answers': {
      'a': '2 A',
      'b': '20 A',
      'c': '30 A',
      'd': '200 A'
  },
  'correct': 'a'
}, {
  'question': "Om qonuniga ko'ra, agar tok 5 A va qarshilik 4 ohm bo'lsa, kuchlanish qanday hisoblanadi?",
  'answers': {
      'a': '9 V',
      'b': '10 V',
      'c': '20 V',
      'd': '40 V'
  },
  'correct': 'd'
}, {
  'question': "Om qonuni bo'yicha, kuchlanish va tokni hisoblashda qarshilik qanday o'zgaradi?",
  'answers': {
      'a': 'Agar kuchlanish oshsa, tok kamayadi, qarshilik oshadi',
      'b': 'Agar kuchlanish oshsa, tok oshadi, qarshilik kamayadi',
      'c': "Agar kuchlanish oshsa, tok oshadi, qarshilik o'zgaradi",
      'd': "Agar kuchlanish oshsa, tok o'zgaradi, qarshilik o'zgaradi"
  },
  'correct': 'c'
}, {
  'question': 'Kirxgofning birinchi qonuni qanday ifodalanadi?',
  'answers': {
      'a': "Tugunga kiruvchi va chiquvchi toklarning algebraik yigâ€™indisi  0 ga teng bo'ladi",
      'b': "Oqimlarning yig'indisi 1 ga teng bo'ladi",
      'c': "Kuchlanishlarning yig'indisi 0 ga teng bo'ladi",
      'd': "Kuchlanishlarning yig'indisi 1 ga teng bo'ladi"
  },
  'correct': 'a'
}, {
  'question': 'Kirxgofning ikkinchi qonuni qanday ifodalanadi?',
  'answers': {
      'a': "Tugunga kiruvchi va chiquvchi kuchlanishlarning yig'indisi 0 ga teng bo'ladi",
      'b': "Tugunga kiruvchi va chiquvchi toklarning algebraik yigâ€™indisi  0 ga teng bo'ladi",
      'c': "Oqimlar 1 ga teng bo'ladi",
      'd': "Kuchlanishlar 1 ga teng bo'ladi"
  },
  'correct': 'a'
}, {
  'question': "Kirxgofning ikkinchi qonunini qanday qo'llash mumkin?",
  'answers': {
      'a': 'Oqimlarni hisoblash uchun',
      'b': 'Kuchlanishlarni tarmoqda joylashtirish uchun',
      'c': 'Tarmoqda oqimlarning tarqalishini hisoblash uchun',
      'd': "Kuchlanishning to'liq miqdorini hisoblash uchun"
  },
  'correct': 'b'
}, {
  'question': 'Tranzistorning uchta terminalining vazifasi qanday?',
  'answers': {
      'a': 'Baza signalni qabul qiladi, kollektyor va emitor esa tokni boshqaradi',
      'b': 'Baza, kollektyor va emitor faqat signal uzatadi',
      'c': 'Kollektyor signalni qabul qiladi, emitor esa energiyani tarqatadi',
      'd': 'Baza faqat kuchlanishni boshqaradi'
  },
  'correct': 'a'
}, {
  'question': 'Elektr sxemalarida signal kuchaytirish uchun qaysi qurilma ishlatiladi?',
  'answers': {
      'a': 'Diod',
      'b': 'Tranzistor',
      'c': 'Induktor',
      'd': 'Kondensator'
  },
  'correct': 'b'
}, {
  'question': 'Kondensatorni qanday ishlatish mumkin?',
  'answers': {
      'a': 'Tokni kuchaytirish uchun',
      'b': "Energiyani saqlash va zarur bo'lganda chiqarish uchun",
      'c': 'Kuchlanishni pasaytirish uchun',
      'd': 'Tokni boshqarish uchun'
  },
  'correct': 'b'
}, {
  'question': 'Elektr sxemalarida "AC" va "DC" qisqartmalari nimani anglatadi?',
  'answers': {
      'a': 'Analog Control va Digital Control',
      'b': 'Alternating Current va Direct Current',
      'c': 'Automatic Control va Digital Control',
      'd': 'Alternating Circuit va Direct Circuit'
  },
  'correct': 'b'
}, {
  'question': 'Transformatorning asosiy vazifasi nima?',
  'answers': {
      'a': 'Kuchlanishni oshirish',
      'b': 'Tokni kuchaytirish',
      'c': "Kuchlanishni o'zgartirish",
      'd': 'okni cheklash'
  },
  'correct': 'c'
}, {
  'question': 'Transformatorning samaradorligini aniqlashda qanday omil eng muhimdir?',
  'answers': {
      'a': 'Diodning qarshiligi',
      'b': "Magnetik yo'qotishlar",
      'c': "Kondensatorning sig'imi",
      'd': 'Tranzistorning ishlash tezligi'
  },
  'correct': 'b'
}, {
  'question': 'Asinxron dvigatelning ishlash prinsipi nima?',
  'answers': {
      'a': 'Doimiy tezlikda ishlaydi',
      'b': "Rotor maydoni stator maydoniga qarama-qarshi yo'nalishda aylanadi",
      'c': "Rotor va stator maydonlari doimo bir xil yo'nalishda aylanishi kerak",
      'd': "Rotor va stator maydonlari doimiy ravishda bir-biriga parallel bo'ladi"
  },
  'correct': 'b'
}, {
  'question': 'Asinxron dvigatelda rotorning aylanish tezligi nima bilan belgilanadi?',
  'answers': {
      'a': 'Statordagi kuchlanishning qiymati',
      'b': 'Rotorning ishlash tezligi bilan',
      'c': 'Statorning aylanish tezligi bilan',
      'd': "Rotorning aylanish tezligi stator maydoniga nisbatan bo'ladi"
  },
  'correct': 'd'
}, {
  'question': 'Asinxron dvigatelning foydalari qaysilar?',
  'answers': {
      'a': 'Ular faqat yuqori kuchlanishli tizimlarda ishlaydi',
      'b': 'Ular yaxshi samaradorlikka ega va kam texnik xizmatni talab qiladi',
      'c': 'Ular faqat kichik qurilmalarda ishlaydi',
      'd': 'Ular doimiy tokda ishlaydi'
  },
  'correct': 'b'
}, {
  'question': "Yarimo'tkazgichli diod nima uchun ishlatiladi?",
  'answers': {
      'a': "Tokni faqat bir yo'nalishda o'tkazish",
      'b': 'Kuchlanishni oshirish',
      'c': 'Elektr energiyasini saqlash',
      'd': 'Signallarni kuchaytirish'
  },
  'correct': 'a'
}, {
  'question': "Yarimo'tkazgichli diodning asosiy xususiyati nima?",
  'answers': {
      'a': "U har qanday tokni o'zgartiradi",
      'b': 'U kuchlanishni doimiy ravishda oshiradi',
      'c': "U tokni faqat bir yo'nalishda o'tkazadi",
      'd': 'U kuchlanishni kamaytiradi'
  },
  'correct': 'c'
}, {
  'question': "Yarimo'tkazgichli diodning ishlash prinsipi qanday?",
  'answers': {
      'a': "Tokni har ikki yo'nalishda o'tkazish orqali ishlaydi",
      'b': "Faol yuzalari orqali bir yo'nalishdagi tokni o'tkazadi",
      'c': 'Energiyani saqlaydi',
      'd': "O'zgaruvchan tokni doimiy tokka aylantiradi"
  },
  'correct': 'b'
}, {
  'question': "Nima sababdan yarimo'tkazgichli diodlar tarmoqlarda ko'proq ishlatiladi?",
  'answers': {
      'a': 'Ular yuqori kuchlanishda ishlaydi',
      'b': 'Ular kichik hajmdagi komponentlar',
      'c': 'Ular faqat tarmoqlarda ishlaydi',
      'd': 'Ular doimiy tokni kuchaytiradi'
  },
  'correct': 'b'
}, {
  'question': 'Tranzistorning ishlash prinsipi nima?',
  'answers': {
      'a': 'Elektr energiyasini magnit energiyasiga aylantiradi',
      'b': "Tokni faqat bir yo'nalishda o'tkazadi",
      'c': 'Signallarni kuchaytiradi va boshqaradi',
      'd': 'Elektronlarni saqlaydi'
  },
  'correct': 'c'
}, {
  'question': 'Tranzistorlar nima uchun ishlatiladi?',
  'answers': {
      'a': "Tokni faqat bir yo'nalishda o'tkazish",
      'b': 'Signallarni kuchaytirish va boshqarish',
      'c': 'Kuchlanishni oshirish',
      'd': 'Tokni kuchaytirish'
  },
  'correct': 'b'
}, {
  'question': 'Tranzistorning asosiy turlari qaysilar?',
  'answers': {
      'a': 'PNP va NPN',
      'b': 'LED va LCD',
      'c': 'Diod va Induktor',
      'd': 'Kondenstor va Rezistor'
  },
  'correct': 'a'
}, {
  'question': "Tranzistorlar ko'pincha qanday rolda ishlatiladi?",
  'answers': {
      'a': 'Signalni kuchaytirish',
      'b': 'Tokni cheklash',
      'c': 'Kuchlanishni kamaytirish',
      'd': 'Elektr energiyasini saqlash'
  },
  'correct': 'a'
}, {
  'question': 'Tranzistorlar qanday ishlash rejimlariga ega?',
  'answers': {
      'a': 'Yuksaltirish va pastlatirish',
      'b': 'Aktiv va pasiv',
      'c': 'Ochiq va yopiq',
      'd': "Qaytish va to'xtash"
  },
  'correct': 'b'
}, {
  'question': 'Tranzistorning bazasi nima uchun ishlatiladi?',
  'answers': {
      'a': 'Tokni boshqaradi',
      'b': 'Signalni kuchaytiradi',
      'c': 'Kuchlanishni oshiradi',
      'd': 'Elektr energiyasini saqlaydi'
  },
  'correct': 'a'
}, {
  'question': "Yarimo'tkazgichli diodlar va tranzistorlar orasidagi farq nima?",
  'answers': {
      'a': 'Tranzistorlar faqat kuchlanishni boshqaradi',
      'b': "Diod faqat tokni bir yo'nalishda o'tkazadi, tranzistorlar esa signallarni kuchaytiradi",
      'c': "Tranzistorlar faqat o'zgaruvchan tokni ishlatadi",
      'd': 'Diodlar faqat signallarni kuchaytiradi'
  },
  'correct': 'b'
}, {
  'question': 'Transformatorning samaradorligini oshirish uchun qanday materiallar ishlatiladi?',
  'answers': {
      'a': 'Qalay va mis',
      'b': 'Metall va keramika',
      'c': "Yuqori o'tkazuvchanlikka ega materiallar, masalan, temir yadro",
      'd': 'Plastik va kremniy'
  },
  'correct': 'c'
}, {
  'question': "Yarimo'tkazgichli diodlar o'zgaruvchan tokni qanday o'zgartiradi?",
  'answers': {
      'a': "Ular o'zgaruvchan tokni to'liq tokka aylantiradi",
      'b': "Ular o'zgaruvchan tokni boshqaradi",
      'c': "Ular o'zgaruvchan tokni pasaytiradi",
      'd': "Ular o'zgaruvchan tokni"
  },
  'correct': 'a'
}, {
  'question': 'Asinxron dvigatelning rotorida nima mavjud?',
  'answers': {
      'a': "Faol yo'naltirilgan magnetlar",
      'b': "O'zgaruvchan magnit maydoni",
      'c': 'Doimiy magnit maydoni',
      'd': 'Tokni pasaytiruvchi komponentlar'
  },
  'correct': 'b'
}, {
  'question': 'Diodning asosiy vazifasi nima?',
  'answers': {
      'a': "Tokni faqat bir yo'nalishda o'tkazish",
      'b': 'Kuchlanishni oshirish',
      'c': 'Signalni kuchaytirish',
      'd': "Tokni har ikki yo'nalishda o'tkazish"
  },
  'correct': 'a'
}, {
  'question': "Yarimo'tkazgichli diod nima uchun ishlatiladi?",
  'answers': {
      'a': "Tokni faqat bir yo'nalishda o'tkazish",
      'b': "Tokni ikkita yo'nalishda o'tkazish",
      'c': 'Kuchlanishni oshirish',
      'd': 'Signalni kuchaytirish'
  },
  'correct': 'a'
}, {
  'question': 'Diodning asosiy turlari qaysilar?',
  'answers': {
      'a': 'PNP va NPN',
      'b': 'Anod va katod',
      'c': 'P-N va Zener diodlari',
      'd': 'Diod va tranzistor'
  },
  'correct': 'c'
}, {
  'question': 'P-N diod nima?',
  'answers': {
      'a': "Elektronlarni doimiy ravishda yo'naltiradi",
      'b': "Tokni faqat bir yo'nalishda o'tkazadigan yarimo'tkazgichli komponent",
      'c': 'Energiyani saqlaydi',
      'd': "Ikkita terminalga ega bo'lgan kondensator"
  },
  'correct': 'b'
}, {
  'question': 'Zener diodning asosiy xususiyati nima?',
  'answers': {
      'a': 'U faqat yuqori kuchlanishda ishlaydi',
      'b': "U o'zgaruvchan kuchlanishda ishlaydi",
      'c': "U kuchlanishning ko'payishiga qarshi ishlaydi va teskari kuchlanish ta'sirida ishlaydi",
      'd': 'U kuchlanishni pasaytiradi'
  },
  'correct': 'c'
}, {
  'question': "Yarimo'tkazgichli diodlar qanday materiallardan tayyorlanadi?",
  'answers': {
      'a': 'Plastik',
      'b': 'Keramika',
      'c': 'Kremniy yoki germaniy',
      'd': 'Temir yoki mis'
  },
  'correct': 'c'
}, {
  'question': 'Fotodiod qanday ishlaydi?',
  'answers': {
      'a': "Ikkita yonalishli tokni o'tkazadi",
      'b': 'faqat yuqori kuchlanishli tizimlarda ishlaydi',
      'c': "yorug'lik ta'sirida tokni o'tkazadi",
      'd': 'kuchlanishni oshiradi'
  },
  'correct': 'c'
}, {
  'question': 'Shotki diodning boshqa diodlardan farqi nima?',
  'answers': {
      'a': 'U yuqori kuchlanishda ishlaydi',
      'b': "U faqat pasaytiruvchi tokni o'tkazadi",
      'c': 'U past kuchlanishli tushishiga ega va tezroq ishlaydi',
      'd': "U faqat o'zgaruvchan tokni o'tkazadi"
  },
  'correct': 'c'
}, {
  'question': 'LED (Light Emitting Diode) diodning asosiy xususiyati nima?',
  'answers': {
      'a': 'U energiyani saqlaydi',
      'b': "U faqat qizil rangda yorug'lik chiqaradi",
      'c': "U yorug'lik chiqaradi, lekin energiya sarflaydi",
      'd': "U energiyani kam sarflaydi va yorug'lik hosil qiladi"
  },
  'correct': 'd'
}, {
  'question': "Diodlar nima uchun ko'proq ishlatiladi?",
  'answers': {
      'a': 'Ular kuchlanishni oshiradi',
      'b': 'Ular signallarni kuchaytiradi',
      'c': "Ular faqat bir yo'nalishdagi tokni o'tkazadi, bu esa tizimlarni himoya qiladi",
      'd': 'Ular faqat yuqori kuchlanishli tizimlarda ishlaydi'
  },
  'correct': 'c'
}, {
  'question': 'Tunnel diodning ishlash prinsipida nima bor?',
  'answers': {
      'a': 'U past kuchlanishda ishlaydi va yuqori tezlikda ishlaydi',
      'b': 'U kuchlanishni oshiradi',
      'c': "U faqat bir yo'nalishdagi tokni o'tkazadi",
      'd': 'U kuchlanishlarni kamaytiradi'
  },
  'correct': 'a'
}, {
  'question': "Diodning 'forward bias' rejimi qanday ishlaydi?",
  'answers': {
      'a': "Diod tokni faqat teskari yo'nalishda o'tkazadi",
      'b': "Diod tokni faqat oldinga yo'nalishda o'tkazadi",
      'c': "Diod tokni hech qanday yo'nalishda o'tkazmaydi",
      'd': "Diodning kuchlanishi o'zgarmaydi"
  },
  'correct': 'b'
}, {
  'question': 'Om qonuni nima?',
  'answers': {
      'a': 'Kuchlanishning qarshilikka nisbati toki beradi',
      'b': 'Tokning kuchlanishga nisbati qarshilikni beradi',
      'c': 'Qarshilikning kuchlanishga nisbati toki beradi',
      'd': 'Tokning qarshilikka nisbati kuchlanishni beradi'
  },
  'correct': 'a'
}, {
  'question': "Om qonuniga ko'ra, agar qarshilik 10 om va kuchlanish 20V bo'lsa, tokni qanday hisoblash mumkin?",
  'answers': {
      'a': '2 A',
      'b': '20 A',
      'c': '30 A',
      'd': '200 A'
  },
  'correct': 'a'
}, {
  'question': "Om qonuniga ko'ra, agar tok 5 A va qarshilik 4 ohm bo'lsa, kuchlanish qanday hisoblanadi?",
  'answers': {
      'a': '9 V',
      'b': '10 V',
      'c': '20 V',
      'd': '40 V'
  },
  'correct': 'd'
}, {
  'question': "Om qonuni bo'yicha, kuchlanish va tokni hisoblashda qarshilik qanday o'zgaradi?",
  'answers': {
      'a': 'Agar kuchlanish oshsa, tok kamayadi, qarshilik oshadi',
      'b': 'Agar kuchlanish oshsa, tok oshadi, qarshilik kamayadi',
      'c': "Agar kuchlanish oshsa, tok oshadi, qarshilik o'zgaradi",
      'd': "Agar kuchlanish oshsa, tok o'zgaradi, qarshilik o'zgaradi"
  },
  'correct': 'c'
}, {
  'question': 'Kirxgofning birinchi qonuni qanday ifodalanadi?',
  'answers': {
      'a': "Tugunga kiruvchi va chiquvchi toklarning algebraik yigâ€™indisi  0 ga teng bo'ladi",
      'b': "Oqimlarning yig'indisi 1 ga teng bo'ladi",
      'c': "Kuchlanishlarning yig'indisi 0 ga teng bo'ladi",
      'd': "Kuchlanishlarning yig'indisi 1 ga teng bo'ladi"
  },
  'correct': 'a'
}, {
  'question': 'Kirxgofning ikkinchi qonuni qanday ifodalanadi?',
  'answers': {
      'a': "Tugunga kiruvchi va chiquvchi kuchlanishlarning yig'indisi 0 ga teng bo'ladi",
      'b': "Tugunga kiruvchi va chiquvchi toklarning algebraik yigâ€™indisi  0 ga teng bo'ladi ",
      'c': "Oqimlar 1 ga teng bo'ladi",
      'd': "Kuchlanishlar 1 ga teng bo'ladi"
  },
  'correct': 'a'
}, {
  'question': "Kirxgofning ikkinchi qonunini qanday qo'llash mumkin?",
  'answers': {
      'a': 'Oqimlarni hisoblash uchun',
      'b': 'Kuchlanishlarni tarmoqda joylashtirish uchun',
      'c': 'Tarmoqda oqimlarning tarqalishini hisoblash uchun',
      'd': "Kuchlanishning to'liq miqdorini hisoblash uchun"
  },
  'correct': 'b'
}, {
  'question': 'Seriyali ulanadigan qarshiliklar uchun umumiy qarshilik qanday hisoblanadi?',
  'answers': {
      'a': "Qarshiliklarning yig'indisi",
      'b': "Qarshiliklarning o'rtacha qiymati",
      'c': 'Qarshiliklarning eng katta qiymati',
      'd': 'Qarshiliklarning eng kichik qiymati'
  },
  'correct': 'a'
}, {
  'question': 'Paralel ulanishdagi qarshiliklar uchun umumiy qarshilik qanday hisoblanadi?',
  'answers': {
      'a': "Qarshiliklarning yig'indisi",
      'b': "Qarshiliklarning o'rtacha qiymati",
      'c': "Qarshiliklarning inversi yig'indisi",
      'd': 'Qarshiliklarning eng katta qiymati'
  },
  'correct': 'c'
}, {
  'question': "Seriyali ulashda qarshiliklar qanday ta'sir qiladi?",
  'answers': {
      'a': 'Qarshiliklarning qiymati kamayadi',
      'b': "Qarshiliklarning qiymati o'zgarmaydi",
      'c': 'Qarshiliklarning qiymati oshadi',
      'd': " Qarshiliklar bir-birini to'liq olib tashlaydi"
  },
  'correct': 'c'
}, {
  'question': "Paralel ulanishda qarshiliklar qanday ta'sir qiladi?",
  'answers': {
      'a': 'Qarshiliklarning qiymati oshadi',
      'b': "Qarshiliklarning qiymati o'zgarmaydi",
      'c': ' Qarshiliklarning qiymati kamayadi',
      'd': " Qarshiliklar bir-birini to'liq olib tashlaydi"
  },
  'correct': 'c'
},
{
  'question': "O'zgaruvchan tok (AC) nima?",
  'answers': {
      'a': " Tokning yo'nalishi va kuchlanishi vaqt o'tishi bilan o'zgaradi",
      'b': "Tokning yo'nalishi o'zgarmaydi",
      'c': " Tok faqat bir yo'nalishda oqadi",
      'd': 'Tok faqat kichik kuchlanishda ishlaydi'
  },
  'correct': 'a'
}, {
  'question': "O'zgarmas tok (DC) qanday ishlaydi?",
  'answers': {
      'a': "Tokning yo'nalishi va kuchlanishi o'zgaradi",
      'b': "Tokning yo'nalishi doimiy bo'lib, faqat bitta yo'nalishda oqadi",
      'c': 'Tok faqat katta kuchlanishda ishlaydi',
      'd': 'Tok faqat kichik kuchlanishda ishlaydi'
  },
  'correct': 'b'
}, {
  'question': "O'zgaruvchan tokning chastotasi qanday o'lchanadi?",
  'answers': {
      'a': "Vol'tlarda",
      'b': 'Amperda',
      'c': 'Hertzda',
      'd': 'Ohmlarda'
  },
  'correct': 'c'
}, {
  'question': "O'zgarmas tok va o'zgaruvchan tok orasidagi farq nima?",
  'answers': {
      'a': " O'zgarmas tok faqat kichik kuchlanishda ishlaydi, o'zgaruvchan tok esa katta kuchlanishda ishlaydi",
      'b': "O'zgarmas tokning yo'nalishi o'zgaradi, o'zgaruvchan tok esa bir xil yo'nalishda oqadi",
      'c': " O'zgarmas tok bir yo'nalishda oqadi, o'zgaruvchan tok esa yo'nalishini o'zgartiradi",
      'd': " O'zgarmas tok faqat yuqori kuchlanishda ishlaydi, o'zgaruvchan tok esa past kuchlanishda ishlaydi"
  },
  'correct': 'c'
}, {
  'question': "Induktiv g'altak nima?",
  'answers': {
      'a': " Tokni faqat bir yo'nalishda o'tkazadi",
      'b': ' Magnit maydonini yaratish uchun ishlatiladi',
      'c': ' Kuchlanishni oshiradi',
      'd': ' Yoritish uchun ishlatiladi'
  },
  'correct': 'b'
}, {
  'question': "Induktiv g'altakning asosiy xususiyati nima?",
  'answers': {
      'a': " U o'zgaruvchan tokni o'zgartiradi",
      'b': ' U kuchlanishni oshiradi',
      'c': ' U magnit maydoni hosil qiladi',
      'd': ' U tokni saqlaydi'
  },
  'correct': 'c'
}, {
  'question': "Induktiv g'altakda qanday energiya saqlanadi?",
  'answers': {
      'a': 'Harorat energiyasi',
      'b': ' Magnit energiyasi',
      'c': ' Elektr energiyasi',
      'd': ' Kinetik energiya'
  },
  'correct': 'b'
}, {
  'question': "Induktiv g'altakning qarshiligi qanday ta'sir qiladi?",
  'answers': {
      'a': 'Qarshilikni kamaytiradi',
      'b': ' Qarshilikni oshiradi',
      'c': "Qarshilikni hech qanday ta'sir qilmaydi",
      'd': " Qarshilikni yo'q qiladi"
  },
  'correct': 'b'
}, {
  'question': "Induktiv g'altakning o'lchov birligi qanday ataladi?",
  'answers': {
      'a': '  Ohm',
      'b': ' Volt',
      'c': ' Henry',
      'd': 'Fara'
  },
  'correct': 'c'
}, {
  'question': 'Kondensator nima?',
  'answers': {
      'a': 'Energiya saqlash uchun qurilma',
      'b': "Tokni faqat bir yo'nalishda o'tkazadigan qurilma",
      'c': "O'zgarmas tokni kuchaytiruvchi qurilma",
      'd': 'Kuchlanishni pasaytiradigan qurilma'
  },
  'correct': 'a'
}, {
  'question': 'Kondensatorning asosiy vazifasi nima?',
  'answers': {
      'a': "Tokni o'tkazish",
      'b': 'Elektr energiyasini saqlash',
      'c': 'Kuchlanishni oshirish',
      'd': ' Magnit maydonini yaratish'
  },
  'correct': 'b'
}, {
  'question': "Kondensatorning o'lchov birligi qanday ataladi?",
  'answers': {
      'a': ' Ohm',
      'b': 'Farad',
      'c': 'Henry',
      'd': ' Volt'
  },
  'correct': 'b'
}, {
  'question': "Kondensatorning zaryad yig'indisi qanday bog'lanadi?",
  'answers': {
      'a': "Zaryad yig'indisi kuchlanish va qobiliyatga nisbatan proporsional",
      'b': "Zaryad yig'indisi qarshilik va tokka nisbatan proporsional",
      'c': "Zaryad yig'indisi faqat tokka nisbatan proporsional",
      'd': "Zaryad yig'indisi faqat kuchlanishga nisbatan proporsional"
  },
  'correct': 'a'
}, {
  'question': 'Kondensator qanday holatda energiya saqlaydi?',
  'answers': {
      'a': "Faqat o'zgarmas tokda",
      'b': "Faqat o'zgaruvchan tokda",
      'c': "O'zgarmas yoki o'zgaruvchan tokda",
      'd': 'Faqat yuqori kuchlanishda'
  },
  'correct': 'c'
}, {
  'question': 'Kondensatorlar qanday usulda ulanadi?',
  'answers': {
      'a': 'Faqat paralel ulanishda',
      'b': 'Faqat seriyali ulanishda',
      'c': 'Paralel yoki seriyali ulanishda',
      'd': "O'zgaruvchan ulanishda"
  },
  'correct': 'c'
}, {
  'question': "Kondensatorning to'liq zaryadlanishi uchun qancha vaqt kerak?",
  'answers': {
      'a': 'Bir necha sekund',
      'b': 'Bir necha millisekund',
      'c': 'Bir necha daqiqa',
      'd': 'Uzoq vaqt davomida'
  },
  'correct': 'a'
}, {
  'question': "Kondensator va induktor o'rtasidagi farq nima?",
  'answers': {
      'a': 'Kondensator energiyani magnit maydonda saqlaydi, induktor esa elektr maydonida saqlaydi',
      'b': '  Kondensator energiyani saqlaydi, induktor esa tokni saqlaydi',
      'c': "Kondensator faqat o'zgarmas tokda ishlaydi, induktor esa faqat o'zgaruvchan tokda ishlaydi",
      'd': 'Kondensator faqat kichik kuchlanishda ishlaydi, induktor esa yuqori kuchlanishda ishlaydi'
  },
  'correct': 'b'
}, {
  'question': "O'zgaruvchan tok (AC) va doimiy tok (DC) orasidagi asosiy farq nima?",
  'answers': {
      'a': "O'zgaruvchan tokning yo'nalishi va kuchlanishi vaqt o'tishi bilan o'zgaradi, doimiy tokda esa bu o'zgarmaydi",
      'b': "O'zgaruvchan tok faqat bir yo'nalishda oqadi, doimiy tok esa ikki yo'nalishda oqadi",
      'c': "O'zgaruvchan tokning kuchlanishi doimiy bo'ladi, doimiy tokda esa bu o'zgarmaydi",
      'd': "O'zgaruvchan tok faqat yuqori kuchlanishlarda ishlaydi, doimiy tok esa past kuchlanishda ishlaydi"
  },
  'correct': 'a'
}, {
  'question': "O'zgaruvchan tokning chastotasi qanday belgilanadi?",
  'answers': {
      'a': ' Volt',
      'b': 'Amper',
      'c': 'Hertz',
      'd': 'Ohm'
  },
  'correct': 'c'
}, {
  'question': 'Doimiy tokda qanday energiya saqlanadi?',
  'answers': {
      'a': ' Magnit energiya',
      'b': 'Elektr energiya',
      'c': ' Kinetik energiya',
      'd': 'Issiqlik energiya'
  },
  'correct': 'b'
}
];


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
