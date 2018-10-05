


var app = angular.module('menuApp', []);
app.controller('menuController', function($scope) {
    $scope.breakfast = [
        {
            "title": "Breakfast Burrito",
            "titlekr": "브렉퍼스트 부리토",
            "url": '../img/food/breakfast_burrito.jpg',
            "description": "Breakfast burrito filled with sausage, roasted peppers, onions, and sharp cheddar cheese."
        },
        {
            "title": "Breakfast Omelette",
            "titlekr": "오믈렛",
            "url": '../img/food/breakfast_omelette.jpg',
            "description": "Egg omelette filled with spinach, diced bell peppers, and mozzarella cheese."
        },
        {
            "title": "Short Rib Breakfast",
            "titlekr": "갈비 + 계란 프라이",
            "url": '../img/food/short_rib_breakfast.jpg',
            "description": "Slow roasted short rib, pan roasted onions, potatoes, and peppers served around a fried egg, perfect for winter."
        },
    ];

    $scope.evening = [
        {
            "title": "Chinese Bun",
            "titlekr": "바오즈",
            "url": '../img/food/baozi.jpg',
            "description": "Chinese style steamed pork buns."
        },
        {
            "title": "Burger and Fries",
            "titlekr": "햄버거 + 감자튀김",
            "url": '../img/food/burger_and_fries.jpg',
            "description": "Classic American beef patty burger served with fresh potato fries."
        },
        {
            "title": "Carbonara",
            "titlekr": "까르보나라",
            "url": '../img/food/carbonara.jpg',
            "description": "Creamy carbonara pasta."
        },
        {
            "title": "Chicken and Asparagus",
            "titlekr": "수비드 닭가슴살 + 아스파라거스",
            "url": '../img/food/chicken_asparagus.jpg',
            "description": "A juicy sous vide chicken breast served over grilled asparagus and a butternut squash puree, perfect for fall."
        },
        {
            "title": "Pork Cutlet",
            "titlekr": "돈까스",
            "url": '../img/food/donkatsu.jpg',
            "description": "Fried pork cutlet served with rice and fresh cabbage slaw."
        },
        {
            "title": "Pastry Dumpling",
            "titlekr": "페이스트리 만두",
            "url": '../img/food/flaky_dumplings.jpg',
            "description": "Buttery, flaky pastry dumplings filled with a variety of fillings."
        },
        {
            "title": "Fried Chicken",
            "titlekr": "치킨",
            "url": '../img/food/fried_chicken.jpg',
            "description": "Crispy fried chicken served plain, with a honey butter garlic sauce, or other sauces."
        },
        {
            "title": "Beef Bowl",
            "titlekr": "규동",
            "url": '../img/food/gyudon.jpg',
            "description": "Japanese style beef bowl served with caramelized onion and fried egg over rice."
        },
        {
            "title": "Unknown Dish",
            "titlekr": "???",
            "url": '../img/food/kimchi_potato_rib.jpg',
            "description": "Braised pork rib and fried potato squares served over kimchi yogurt."
        },
        {
            "title": "Mushroom and Cucumber Salad",
            "titlekr": "버섯 + 오이 샐러드",
            "url": '../img/food/mushroom_cucumber_salad.jpg',
            "description": "Fresh mushroom and cucumber salad, with tomatoes and seasonal greens."
        },
        {
            "title": "Omelette Over Kimchi Fried Rice",
            "titlekr": "오믈렛 + 김치볶음밥",
            "url": '../img/food/omelette.jpg',
            "description": "Omelette served over spicy Korean style kimchi fried rice."
        },
        {
            "title": "Potato Pancake",
            "titlekr": "감자전",
            "url": '../img/food/potatopancake.jpg',
            "description": "Korean style potato pancake."
        },
        {
            "title": "Potato Soup",
            "titlekr": "감자탕",
            "url": '../img/food/potatosoup.jpg',
            "description": "Korean style spicy potato and pork bone soup."
        },
        {
            "title": "Salmon and Brussels Sprouts",
            "titlekr": "연어 + 방울다다기양배추",
            "url": '../img/food/salmon_brussel.jpg',
            "description": "Grilled salmon served with brussels sprouts."
        },
        {
            "title": "Salmon Poke Bowl",
            "titlekr": "연어 횟밥",
            "url": '../img/food/salmon_poke.jpg',
            "description": "Fresh salmon poke bowl with edamame, cucumbers, carrots, seaweed tossed with sesame oil."
        },
        {
            "title": "Salmon and Tomato Salad",
            "titlekr": "연어 + 토마토 샐러드",
            "url": '../img/food/salmon_tomato_salad.jpg',
            "description": "Grilled salmon served with a summery tomato salad."
        },
        {
            "title": "Shellfish Pasta",
            "titlekr": "홍합 파스타",
            "url": '../img/food/shellfish_pasta.jpg',
            "description": "Creamy shellfish pasta with parmesan cheese."
        },
        {
            "title": "Steak and Potatoes",
            "titlekr": "스테이크 + 감자",
            "url": '../img/food/steak_potato.jpg',
            "description": "A rendition of a classic dish, juicy steak and crispy, fluffy potatoes."
        },
        {
            "title": "Crab Pasta",
            "titlekr": "꽃게 파스타",
            "url": '../img/food/summer_crab_pasta.jpg',
            "description": "Pasta with crab and olive oil sauteed peppers, perfect for summer."
        },
        {
            "title": "Twice Cooked Pork",
            "titlekr": "중국 돼지고기 요리",
            "url": '../img/food/twice_cooked_pork.jpg',
            "description": "Chinese style spicy pork and leeks."
        }
    ];

    $scope.dessert = [
        {
            "title": "Raspberry Souffle",
            "titlekr": "산딸기 수플레",
            "url": '../img/food/raspberry_souffle.jpg',
            "description": "Raspberry cake dessert served with warm runny center."
        },
        {
            "title": "Strawberry Cheesecake",
            "titlekr": "딸기 치즈케익",
            "url": '../img/food/strawberry_cheesecake.jpg',
            "description": "No-bake strawberry cheesecake served cold."
        },
        {
            "title": "Mystery dessert",
            "titlekr": "미스터리 디저트",
            "url": '../img/food/forseonhong.jpg',
            "description": "A special dessert made especially for the love of my life!"
        },
    ];

});
