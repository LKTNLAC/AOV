// Danh sách tướng mẫu
    // Bạn có thể thêm hoặc sửa đổi các tướng trong danh sách này
        const heroes = [
        //A
        { 
            name: "Airi",  // Tên tướng
            role: ["Top","Jungle"], // Vai trò của tướng
            image: "Media/Airi.jpg", // Đường dẫn đến hình ảnh của tướng
            counter: ["Murad", "Ryoma", "Marja", "Dextra", "Yena", "Raz", "Omega"], // Tướng có thể khắc chế
            suitable:["",""], // Tướng hỗ trợ
            note: "Airi mạnh cuối trận."
        },
        { 
            name: "Aleister", 
            role: ["Mid"], 
            image: "Media/Aleister.jpg", 
            counter: ["Ilumia", "Chaugnar", "Điêu Thuyền"], 
            suitable:["Bijan","Arum","Mina"],
            note:"Aleister là một pháp sư mạnh với khả năng khống chế tốt, nhưng cần phải cẩn thận với những tướng có khả năng áp sát nhanh."  
        },
        { 
            name: "Alice", 
            role: ["Sp"], 
            image: "Media/Alice.png", 
            counter: ["Elandorr", "Raz", "Fennik"], 
            suitable:["Fennik","Telannas","Yorn"],
            note: "Alice là một hỗ trợ mạnh với khả năng bảo vệ đồng đội và khống chế kẻ địch, nhưng cần phải cẩn thận với những tướng có khả năng áp sát nhanh." 
        },
        { 
            name: "Allain", 
            role: ["Top"], 
            image: "Media/Allain.jpg", 
            counter: ["Kriknak", "Murad", "Keera","Ngộ Không","Bijan","Billow","Biron","Mina"], 
            suitable:["Butterfly","Paine","Krizzix","Lữ Bố","Richter","KiiGroth"],
            note:""
        },
        { 
            name: "Amily", 
            role: ["Top","Jungle"], 
            image: "Media/Amily.jpg", 
            counter: ["", "", ""], 
            suitable:["",""],
            note:"Tướng tù vcl" 
        },
        { 
            name: "Annette", 
            role: ["Mid","Sp"], 
            image: "Media/Annette.jpg", 
            counter: ["", "", ""], 
            suitable:["",""],
            note:"" 
        },
        { 
            name: "Aoi", 
            role: ["Jungle"], 
            image: "Media/Aoi.jpeg", 
            counter: ["Keera", "Rourke", "Zephys","Stuart","Omega"], 
            suitable:["Richter","Qi","Skud","Yena"],
            note:"" 
        },
        { 
            name: "Arduin", 
            role: ["Top","Sp"], 
            image: "Media/Arduin.jpg", 
            counter: ["Aleister", "Hayate", "Gildur","Tachi","Maloch"], 
            suitable:["Rouie",""],
            note:"" 
        },
        { 
            name: "Arthur", 
            role: ["Top","Sp"], 
            image: "Media/Arthur.jpg", 
            counter: ["Bijan", "Florentino", "Maloch","Tachi","Hayate","Triệu Vân","Điêu Thuyền","Aleister"], 
            suitable:["",""],
            note:"Nâng max chiêu 2" 
        },
        { 
            name: "Arum", 
            role: ["Sp"], 
            image: "Media/Arum.jpg", 
            counter: ["Slimz", "Zip", ""], 
            suitable:["",""],
            note:"Áp sát chủ lực hợp lý, tránh giao tranh tổng sớm" 
        },
        { 
            name: "Astrid", 
            role: ["Top"], 
            image: "Media/Astrid.jpg", 
            counter: ["Florentino", "", ""], 
            suitable:["",""],
            note:"Tướng late game, cần farm nhiều" 
        },
        { 
            name: "Ata", 
            role: ["Sp"], 
            image: "Media/Ata.jpg", 
            counter: ["", "", ""], 
            suitable:["",""],
            note:"Tướng đầu game, nâng max chiêu 1, chiêu cuối hợp lý tránh bóp team! Ngăn đc ulti Zip. Phù hợp khi team địch thiếu cơ động" },
        { 
            name: "Aya", 
            role: ["Sp"], 
            image: "Media/Aya.jpg", 
            counter: ["Mganga", "Maloch", "Hayate", "Tachi", "Airi", "Triệu Vân", "Florentino"], 
            suitable:["Maloch","Nakroth", "Athur", "Taara", "Tachi"],
            note:"" },
        { 
            name: "Azzenka", 
            role: ["Mid"], 
            image: "Media/Azzenka.jpg", 
            counter: ["", "", ""], 
            suitable:["",""],
            note:"" },
        //B
        { 
            name: "Baldum", 
            role: ["Sp"], 
            image: "Media/Baldum.jpg", 
            counter: ["Thane", "Lumburr", "Chaugnar"], 
            suitable:["",""],
            note:"" 
        },
        { 
            name: "Bijan", 
            role: ["Top","Jungle"], 
            image: "Media/Bijan.jpg", 
            counter: ["Florentino", "Omen", "Triệu Vân", "Billow", "Zip", "Ata", "Hayate"], 
            suitable:["Triệu Vân","Celica"],
            note:"Lái xe cẩn thận, tướng mạnh đầu game." 
        },
        { 
            name: "Billow", 
            role: ["Top","Jungle"], 
            image: "Media/Billow.jpg", 
            counter: ["Aoi", "Aleister", "Keera", "Stuart", "Arum", "Roxie"], 
            suitable:["Krizzix",""],
            note:"" 
        },
        { 
            name: "Biron", 
            role: ["Top"], 
            image: "Media/Biron.jpg", 
            counter: ["Florentino", "Marja", "Murad", "Skud", "Hayate", "Thane"], 
            suitable:["",""],
            note:"" 
        },
        { 
            name: "Bolt Baron", 
            role: ["Top","Jungle"], 
            image: "Media/Bolt Baron.jpg", 
            counter: ["Enzo", "Natalya", "FLorentino", "Marja", "Liliana", "Keera", "Tachi"], 
            suitable:["",""],
            note:"" 
        },
        { name: "Bonnie", role: ["Mid","Sp"], image: "Media/Bonnie.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Bright", role: ["Top","Jungle","Ad"], image: "Media/Bright.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Butterfly", role: ["Jungle"], image: "Media/Butterfly.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        //C
        { name: "Capheny", role: ["Ad"], image: "Media/Capheny.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Celica", role: ["Ad"], image: "Media/Celica.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Charlotte", role: ["Top"], image: "Media/Charlotte.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Chaugnar", role: ["Sp","Mid"], image: "Media/Chaugnar.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Cresht", role: ["Sp"], image: "Media/Cresht.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        //D
        { name: "Darcy", role: ["Mid","Jungle"], image: "Media/Darcy.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { 
            name: "Dextra", 
            role: ["Top","Jungle","Sp"], 
            image: "Media/Dextra.jpg", 
            counter: ["Marja", "Florentino", "Keera", "Murad", "Hayate", "Enzo"], 
            suitable:["Sinestrea",""],
            note:"Khi bật ulti hạn chế đánh vào nó." 
        },
        { 
            name: "Điêu Thuyền", 
            role: ["Mid","Sp"], 
            image: "Media/Điêu Thuyền.jpg", 
            counter: ["Yena", "Iggy", "Yue","Lorion","Florentino"], 
            suitable:["Krizzix","Grak","Enzo","Gildur"],
            note:"" 
        },
        { 
            name: "Dirak", 
            role: ["Mid","Jungle","Sp"], 
            image: "Media/Dirak.jpg", 
            counter: ["Liliana", "Tulen", "Zata", "Lorion", "Yena", "Yan", "Grakk"], 
            suitable:["Krizzik","Grak"],
            note:"" 
        },
        { 
            name: "Dolia", 
            role: ["Mid","Sp"], 
            image: "Media/Dolia.jpg", 
            counter: ["Raz", "Liliana", "Lorion"], 
            suitable:["Maloch","Ilumia","Kahlii","Tachi","Stuart","Wonder Woman","Volkath"],
            note:"" 
        },
        //E
        { name: "Elandorr", role: ["Jungle","Ad"], image: "Media/Elandorr.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Elsu", role: ["Ad"], image: "Media/Elsu.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { 
            name: "Enzo", 
            role: ["Jungle","Sp"], 
            image: "Media/Enzo.jpg", 
            counter: ["Thane", "Hayate", "Toro", "Ybneth","Keera","Florentino", "Grakk"], 
            suitable:["",""],
            note:"" 
        },
        { 
            name: "Errol", 
            role: ["Top","Jungle"], 
            image: "Media/Errol.jpg", 
            counter: ["Florentino", "Hayate", "Athur","Thane", "Marja", "Wonder Woman"], 
            suitable:["",""],
            note:"" 
        },
        { name: "Erin", role: ["Mid","Ad"], image: "Media/Erin.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        //{ name: "Errol", role: ["Top","Jungle"], image: "Media/Errol.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        //F
        { name: "Fennik", role: ["Jungle","Ad"], image: "Media/Fennik.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Florentino", role: ["Top"], image: "Media/Florentino.jpg", counter: ["Murad", "Tulen", "Fennik"], suitable:["",""],note:"" },
        //G
        { name: "Gildur", role: ["Mid","Sp"], image: "Media/Gildur.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Grakk", role: ["Sp"], image: "Media/Grakk.png", counter: ["Enzo", "Toro", "Chaugnar"], suitable:["Natalya","Valhein"],note:"" },
        //H
        { name: "Hayate", role: ["Ad"], image: "Media/Hayate.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Heino", role: ["Mid","Top","Ad"], image: "Media/Heino.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Helen", role: ["Sp"], image: "Media/Helen.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        //I
        { 
            name: "Iggy", 
            role: ["Mid"], 
            image: "Media/Iggy.jpeg", 
            counter: ["Tulen", "Krixi", "Liliana", "Raz", "Darcy", "Aoi", "Ishar", "Lorion"], 
            suitable:["",""],
            note:"" 
        },
        { 
            name: "Ignis", 
            role: ["Mid","Sp"], 
            image: "Media/Ignis.jpg", 
            counter: ["Yue", "Liliana", "Lauriel"], 
            suitable:["",""],
            note:"" 
        },
        { 
            name: "Ilumia", 
            role: ["Mid","Sp"], 
            image: "Media/Ilumia.jpg", 
            counter: ["Kahlii", "Yue", "Zata"], 
            suitable:["",""],
            note:"" 
        },
        { name: "Ishar", role: ["Mid","Sp"], image: "Media/Ishar.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        //J
        { name: "Jinna", role: ["Mid"], image: "Media/Jinna.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        //K
        { name: "Kahlii", role: ["Mid"], image: "Media/Kahlii.png", counter: ["Dirak", "", ""], suitable:["",""],note:"" },
        { 
            name: "Kaine", 
            role: ["Top","Jungle","Sp"], 
            image: "Media/Kaine.jpg", 
            counter: ["Krizzix", "Fennik", "Ilumia", "Omen","Skud","Richter"], 
            suitable:["Krizzix",""],
            note:"" 
        },
        { name: "Keera", role: ["Jungle"], image: "Media/Keera.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { 
            name: "KiiGroth", 
            role: ["Top","Jungle"], 
            image: "Media/KiiGroth.gif", 
            counter: ["Marja", "Mina", "Ryoma", "Elandorr", "Baldum","Hayate"], 
            suitable:["",""],
            note:"" 
        },
        { 
            name: "Kriknak", 
            role: ["Jungle"], 
            image: "Media/Kriknak.png", 
            counter: ["Ilumia", "", ""], 
            suitable:["Krixi","Krizzix"],
            note:"" 
        },
        { 
            name: "Krixi", 
            role: ["Mid","Sp"], 
            image: "Media/Krixi.png", 
            counter: ["Zata", "Liliana", "Aoi", "Ngộ Không", "Ignis", "Yue", "Lorion"], 
            suitable:["Krizzix","Kriknak","Grakk","Gildur"],
            note:"" 
        },
        { 
            name: "Krizzix", 
            role: ["Sp"], 
            image: "Media/Krizzix.png", 
            counter: ["", "", ""], 
            suitable:["Krixi","Kriknak"],
            note:"" 
        },
        //L
        { 
            name: "Lauriel", 
            role: ["Mid"], 
            image: "Media/Lauriel.jpg", 
            counter: ["Natalya", "Zata", "Liliana", "Aleister", "Arum", "Keera", "Violet", "Roxie"], 
            suitable:["",""],
            note:"" 
        },
        { name: "Laville", role: ["Ad"], image: "Media/Laville.jpg", counter: ["Mina", "", ""], suitable:["",""],note:"" },
        { 
            name: "Liliana", 
            role: ["Mid","Jungle"], 
            image: "Media/Liliana.jpg", 
            counter: ["Raz", "Heino", "Aleister", "Keera", "Yue", "Lorion", "Teemee"], 
            suitable:["",""],
            note:"" 
        },
        { name: "Lindis", role: ["Jungle","Ad"], image: "Media/Lindis.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { 
            name: "Lorion", 
            role: ["Mid"], 
            image: "Media/Lorion.jpg", 
            counter: ["Natalya", "Mganga", "Zata", "Lauriel", "Liliana", "Krixi", "Aoi", "Hayate", "Toro"], 
            suitable:["",""],
            note:"" },
        { name: "Lữ Bố", role: ["Top","Jungle"], image: "Media/Lữ Bố.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Lumburr", role: ["Sp"], image: "Media/Lumburr.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        //M
        { name: "Maloch", role: ["Top","Mid","Sp"], image: "Media/Maloch.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { 
            name: "Marja", 
            role: ["Top","Jungle"], 
            image: "Media/Marja.jpg", 
            counter: ["Ryoma", "Volkath", "Qi","Murad","Keera","Elandorr","Aleister"], 
            suitable:["Krizzix",""],note:"" 
        },
        { name: "Max", role: ["Top","Sp"], image: "Media/Max.jpg", counter: ["Arum", "", ""], suitable:["",""],note:"" },
        { 
            name: "Mganga", 
            role: ["Mid","Sp"], 
            image: "Media/Mganga.jpg", 
            counter: ["Ignis", "Enzo", "Natalya", "Fennik", "Florentino", "Zata", "Lauriel"], 
            suitable:["",""],
            note:"" 
        },
        { 
            name: "Mina", 
            role: ["Top","Sp"], 
            image: "Media/Mina.png", 
            counter: ["Florentino", "Krixi", "Natalya"], 
            suitable:["",""],
            note:"" 
        },
        { name: "Ming", role: ["Sp"], image: "Media/Ming.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Moren", role: ["Ad"], image: "Media/Moren.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { 
            name: "Murad", 
            role: ["Top","Jungle"], 
            image: "Media/Murad.jpg", 
            counter: ["Qi", "Omen", "Ryoma", "Raz", "Ybneth", "Gildur", "Mina", "Alice"], 
            suitable:["",""],
            note:"" 
        },
        //N
        { name: "Nakroth", role: ["Jungle"], image: "Media/Nakroth.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { 
            name: "Natalya", 
            role: ["Mid"], 
            image: "Media/Natalya.jpg", 
            counter: ["Ignis", "Liliana", "Florentino", "Baldum","Lauriel"], 
            suitable:["Grakk","Valhein"],
            note:"" 
        },
        { 
            name: "Ngộ Không", 
            role: ["Top","Jungle"], 
            image: "Media/Ngộ Không.jpg", 
            counter: ["Omen", "Skud", "Richter","Stuart","Enzo","Raz","Veera","Wonder Woman"], 
            suitable:["",""],
            note:"" 
        },
        //O
        { name: "Omega", role: ["Sp"], image: "Media/Omega.jpg", counter: ["Chaugnar", "", ""], suitable:["",""],note:"" },
        { 
            name: "Omen", 
            role: ["Top"], 
            image: "Media/Omen.jpg", 
            counter: ["Florentino", "Mina","Allan","Yena","Hayate","Zip"], 
            suitable:["",""],
            note:"" 
        },
        { name: "Ormarr", role: ["Top","Sp"], image: "Media/Ormarr.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        //P
        { name: "Paine", role: ["Jungle","Mid"], image: "Media/Paine.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Preyta", role: ["Mid"], image: "Media/Preyta.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        //Q
        { 
            name: "Qi", 
            role: ["Top","Jungle"], 
            image: "Media/Qi.jpg", 
            counter: ["Florentino", "Omen", "Roxie", "Airi", "KiiGroth", "Omega", "Hayate"], 
            suitable:["",""],
            note:"" 
        },
        { name: "Quillen", role: ["Jungle"], image: "Media/Quillen.jpg", counter: ["Krizzix", "Illumia", "Max"], suitable:["",""],note:"" },
        //R
        { 
            name: "Raz", 
            role: ["Mid","Jungle","Sp"], 
            image: "Media/Raz.jpg", 
            counter: ["Veera", "Krixi", "Tulen", "Natalya", "Wonder Woman", "Cresht", "Mganga", "Ignis"], 
            suitable:["",""],
            note:"" 
        },
        { 
            name: "Richter", 
            role: ["Top","Sp"], 
            image: "Media/Richter.jpg", 
            counter: ["Florentino", "Omen", "Skud", "Lữ Bố", "Biron", "Hayate"], 
            suitable:["",""],
            note:"" 
        },
        { 
            name: "Rouie", 
            role: ["Mid","Sp"], 
            image: "Media/Rouie.jpg", 
            counter: ["Raz", "Thane", "Krizzix","Ybneth", "Yue", "Zata", "Liliana", "Superman"], 
            suitable:["",""],
            note:"" 
        },
        { name: "Rourke", role: ["Jungle"], image: "Media/Rourke.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Roxie", role: ["Top","Sp"], image: "Media/Roxie.jpg", counter: ["Florentino", "", ""], suitable:["",""],note:"" },
        { 
            name: "Ryoma", 
            role: ["Top"], 
            image: "Media/Ryoma.jpg", 
            counter: ["Aoi", "Richter", "Teemee", "Omen", "Yena", "Qi"], 
            suitable:["",""],
            note:"" },
        //S
        { name: "Sephera", role: ["Jungle","Sp"], image: "Media/Sephera.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Sinestrea", role: ["Jungle","Top"], image: "Media/Sinestrea.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { 
            name: "Skud", 
            role: ["Top","Jungle"], 
            image: "Media/Skud.jpg", 
            counter: ["FLorentino", "Maloch", "Marja", "Hayate", "Wonder Woman", "Qi", "Veres"], 
            suitable:["",""],
            note:"" 
        },
        { name: "Slimz", role: ["Ad"], image: "Media/Slimz.png", counter: ["Elsu", "", ""], suitable:["",""],note:"" },
        { name: "Stuart", role: ["Ad"], image: "Media/Stuart.jpg", counter: ["Raz", "Erin", ""], suitable:["",""],note:"" },
        { name: "Superman", role: ["Top","Mid","Sp"], image: "Media/Superman.jpg", counter: ["Ignis", "", ""], suitable:["",""],note:"" },
        //T
        { 
            name: "Taara", 
            role: ["Top","Jungle","Sp"], 
            image: "Media/Taara.jpg", 
            counter: ["Florentino", "Veres", "Airi"], 
            suitable:["",""],
            note:"" 
        },
        { 
            name: "Tachi", 
            role: ["Top","Jungle","Sp"], 
            image: "Media/Tachi.jpg", 
            counter: ["Hayate", "Maloch", "Elandorr","Florentino", "Enzo"], 
            suitable:["",""],
            note:"" 
        },
        { name: "Teemee", role: ["Sp","Top"], image: "Media/Teemee.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Telannas", role: ["Ad"], image: "Media/Telannas.jpg", counter: ["Stuart", "", ""], suitable:["",""],note:"" },
        { name: "Terri", role: ["Ad"], image: "Media/Terri.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Thane", role: ["Sp"], image: "Media/Thane.png", counter: ["Florentino", "", ""], suitable:["",""],note:"" },
        { name: "The Flash", role: ["Mid","Jungle"], image: "Media/The Flash.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Thorne", role: ["Ad"], image: "Media/Thorne.jpg", counter: ["Stuart", "Valhein", ""], suitable:["",""],note:"" },
        { name: "Toro", role: ["Sp"], image: "Media/Toro.jpg", counter: ["FLorentino", "", ""], suitable:["",""],note:"" },
        { 
            name: "Triệu Vân", 
            role: ["Top","Jungle","Sp"], 
            image: "Media/Triệu Vân.jpg", 
            counter: ["Murad", "Florentino", "Ryoma","Dextra"], 
            suitable:["Bijan",""],
            note:"Lên tank! Làm ơn lên tank! Đừng lên sát thương, tướng mạnh đầu game, có thể đi rừng hoặc top. Nâng max chiêu 2 trước." 
        },
        { 
            name: "Tulen", 
            role: ["Mid","Jungle"], 
            image: "Media/Tulen.jpg", 
            counter: ["Mganga", "Krixi", "Liliana", "Raz", "Lorion", "Ignis", "Zata", "Natalya", "Aoi", "Billow", "Richter", "Thane"], 
            suitable:["",""],
            note:"" 
        },
        //V
        { name: "Valhein", role: ["Ad"], image: "Media/Valhein.jpg", counter: ["Fennik", "Mina", ""], suitable:["",""],note:"" },
        { 
            name: "Veera", 
            role: ["Mid"], 
            image: "Media/Veera.jpg", 
            counter: ["Raz", "Liliana", "Natalya", "Skud", "Toro", "Keera","Lauriel", "Ignis"], 
            suitable:["",""],
            note:"" 
        },
        { 
            name: "Veres", 
            role: ["Top","Jungle","Sp"], 
            image: "Media/Veres.jpg", 
            counter: ["Florentino", "Yena", "Airi", "Keera", "Thane", "Hayate"], 
            suitable:["",""],
            note:"" 
        },
        { name: "Violet", role: ["Ad"], image: "Media/Violet.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Volkath", role: ["Top","Jungle","Sp"], image: "Media/Volkath.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        //W
        { name: "Wiro", role: ["Top","Sp"], image: "Media/Wiro.jpg", counter: ["Florentino", "", ""], suitable:["",""],note:"" },
        { name: "Wisp", role: ["Ad"], image: "Media/Wisp.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Wonder Woman", role: ["Jungle"], image: "Media/Wonder Woman.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        //X
        { name: "Xeniel", role: ["Top","Jungle"], image: "Media/Xeniel.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        //Y
        { name: "Yan", role: ["Top","Jungle"], image: "Media/Yan.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Ybneth", role: ["Sp"], image: "Media/Ybneth.jpg", counter: ["FLorentino", "", ""], suitable:["",""],note:"" },
        { 
            name: "Yena", 
            role: ["Top"], 
            image: "Media/Yena.jpg", 
            counter: ["FLorentino", "Skud", "Ryoma", "Charlotte", "Qi", "Zuka"], 
            suitable:["",""],
            note:"" },
        { name: "Yorn", role: ["Ad"], image: "Media/Yorn.jpg", counter: ["Valhein", "Stuart", ""], suitable:["",""],note:"" },
        { 
            name: "Yue", 
            role: ["Mid"], 
            image: "Media/Yue.jpg", 
            counter: ["Iggy", "Raz", "Zata", "Tulen"], 
            suitable:["",""],
            note:"" 
        },
        //Z
        { 
            name: "Zata", 
            role: ["Mid"], 
            image: "Media/Zata.jpg", 
            counter: ["Yue", "Lorion", "Aleister", "Raz", "Liliana"], 
            suitable:["Richter",""],
            note:"" 
        },
        { name: "Zephys", role: ["Jungle"], image: "Media/Zephys.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Zill", role: ["Jungle"], image: "Media/Zill.jpg", counter: ["", "", ""], suitable:["",""],note:"" },
        { name: "Zip", role: ["Sp"], image: "Media/Zip.jpg", counter: ["Ata", "", ""], suitable:["",""],note:"" },
        { name: "Zuka", role: ["Top","Jungle"], image: "Media/Zuka.jpg", counter: ["Bijan", "Dextra", ""], suitable:["",""],note:"" }
        ];
    // Lấy phần tử chứa danh sách tướng
    // Bạn có thể thay đổi ID này nếu cần
        const heroGrid = document.getElementById("heroGrid");

        function renderHeroes(filteredList = heroes) {
            heroGrid.innerHTML = "";
            filteredList.forEach(hero => {
                const card = document.createElement("div");
                card.className = "hero-card";
                card.innerHTML = `
                    <img class="hero-img" src="${hero.image}" alt="${hero.name}">
                    <div class="hero-info">
                        <p>${hero.name}</p>
                    </div>
                `;
                card.onclick = () => openPopup(hero);
                heroGrid.appendChild(card);
            });
        }

        // Hàm lọc tướng theo vai trò
        // Bạn có thể thay đổi các vai trò theo ý muốn
        function filterByRole(role) {
            if (role === "Tất cả") renderHeroes();
            else renderHeroes(heroes.filter(h => Array.isArray(h.role) && h.role.includes(role)));
        }

        // Hàm mở popup khi click vào tướng
        // Hiển thị thông tin tướng, tướng counter và tướng hỗ trợ
        function openPopup(hero) {
            // Cập nhật thông tin tướng trong popup
            document.getElementById("heroName").textContent = hero.name;
            document.getElementById("heroRole").textContent = hero.role.join(", ");

            // Cập nhật danh sách tướng counter
            const counterList = document.getElementById("heroCounter");
            
            // Hình Ảnh tướng Counter
            const counterImages = document.getElementById("heroCounterImages");
            counterImages.innerHTML = "";
            hero.counter.forEach(name => {
                const matched = heroes.find(h => h.name === name);
                if (matched && matched.image) {
                    const img = document.createElement("img");
                    img.src = matched.image;
                    img.alt = name;
                    img.style.width = "50px";
                    img.style.height = "50px";
                    img.style.borderRadius = "8px";
                    counterImages.appendChild(img);
                }
            });
            // Cập nhật danh sách tướng counter
            //counterList.innerHTML = "";
            //hero.counter.forEach(c => {
            //    const li = document.createElement("li");
            //    li.textContent = c;
            //    counterList.appendChild(li);
            //});

//======================
            //Hình Ảnh tướng phù hợp đi cùng
            // Cập nhật danh sách tướng hỗ trợ
            const suitableImages = document.getElementById("heroSuitableImages");
            suitableImages.innerHTML = "";
            hero.suitable.forEach(name => {
                const matched = heroes.find(h => h.name === name);
                if (matched && matched.image) {
                    const img = document.createElement("img");
                    img.src = matched.image;
                    img.alt = name;
                    img.style.width = "50px";
                    img.style.height = "50px";
                    img.style.borderRadius = "8px";
                    suitableImages.appendChild(img);
                }
            });
            // Cập nhật danh sách tướng hỗ trợ
            // Danh sách tướng phù hợp đi cùng
            //const suitableList = document.getElementById("heroSuitable");
            //suitableList.innerHTML = "";
            //(hero.suitable || []).forEach(name => {
            //    const li = document.createElement("li");
            //    li.textContent = name;
            //    suitableList.appendChild(li);
            //});

            document.getElementById("heroNote").textContent = hero.note || "Chưa có ghi chú.";
            // Hiển thị popup
            document.getElementById("popup").style.display = "flex";
        }

        // Hàm đóng popup
        // Ẩn popup khi người dùng click vào nút đóng
        function closePopup() {
            document.getElementById("popup").style.display = "none";
        }
        // Hiển thị danh sách tướng ban đầu
        // Gọi hàm renderHeroes để hiển thị tất cả tướng khi trang được tải
        renderHeroes();