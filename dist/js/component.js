
const app = Vue.createApp({
    data() {
        //_ USER_TEMP_DATA_

        

        return {
            mostVoted:[],
            selectedIndex: 0,
            recipes: [
                { id: 1, image: "./images/recipes/sushi.jpg", name: "Sushi", category: "Lunch", time: "20 mins", level: "Easy", likes: 18, ingredients: "300ml Sushi Rice, 100ml Rice wine, 2 tbs Caster Sugar, 3 tbs Mayonnaise, 1 tbs Rice wine, 1 tbs Soy Sauce1 Cucumber", instructions: "STEP 1 TO MAKE SUSHI ROLLS: Pat out some rice.Lay a nori sheet on the mat, shiny-side down.Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear. STEP 2 Spread over some Japanese mayonnaise.Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice. STEP 3 Add the filling.Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber. STEP 4 Roll it up.Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll. STEP 5 Stick down the sides like a stamp.When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll. STEP 6 Wrap in cling film.Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film. STEP 7 TO MAKE PRESSED SUSHI: Layer over some smoked salmon.Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film. STEP 8 Cover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one. STEP 9 Tip it out like a sandcastle.Turn block of sushi onto a chopping board.Get a grown-up to cut into fingers, then remove the cling film. STEP 10 TO MAKE SUSHI BALLS: Choose your topping.Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping. STEP 11 Make into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve." },
                { id: 3, image: "./images/recipes/chicken-enchilada-casserole.jpg", name: "Chicken Enchilada Casserole", category: "Lunch", time: "20 mins", level: "Easy", likes: 18, ingredients: "14 oz jar Enchilada sauce, 3 Cups shredded Monterey Jack cheese, 6 corn tortillas, 2 chicken breasts", instructions: "Cut each chicken breast in about 3 pieces, so that it cooks faster and put it in a small pot.Pour Enchilada sauce over it and cook covered on low to medium heat until chicken is cooked through, about 20 minutes.No water is needed, the chicken will cook in the Enchilada sauce.Make sure you stir occasionally so that it doesn't stick to the bottom.Remove chicken from the pot and shred with two forks.Preheat oven to 375 F degrees.Start layering the casserole.Start with about ¼ cup of the leftover Enchilada sauce over the bottom of a baking dish.I used a longer baking dish, so that I can put 2 corn tortillas across.Place 2 tortillas on the bottom, top with ⅓ of the chicken and ⅓ of the remaining sauce.Sprinkle with ⅓ of the cheese and repeat starting with 2 more tortillas, then chicken, sauce, cheese.Repeat with last layer with the remaining ingredients, tortillas, chicken, sauce and cheese.Bake for 20 to 30 minutes uncovered, until bubbly and cheese has melted and started to brown on top.Serve warm." },
                { id: 4, image: "./images/recipes/big-mac.jpg", name: "Big Mac", category: "Dinner", time: "20 mins", level: "Easy", likes: 18, ingredients: "400g Minced Beef, 2 tbs Olive Oil, 2 Sesame Seed Burger Buns, Chopped Onion, 1/4 Iceberg Lettuce, 2 sliced Cheese2 large Dill Pickles, 1 cup Mayonnaise, 2 tsp White Wine VinegarPinch Pepper2 tsp Mustard, 1 1/2 tsp Onion Salt1 1/2 tsp Garlic Powder, 1/2 tsp Paprika", instructions: "For the Big Mac sauce, combine all the ingredients in a bowl, season with salt and chill until ready to use.2.To make the patties, season the mince with salt and pepper and form into 4 balls using about 1/3 cup mince each.Place each onto a square of baking paper and flatten to form into four x 15cm circles.Heat oil in a large frypan over high heat.In 2 batches, cook beef patties for 1-2 minutes each side until lightly charred and cooked through.Remove from heat and keep warm.Repeat with remaining two patties.3.Carefully slice each burger bun into three acrossways, then lightly toast.4.To assemble the burgers, spread a little Big Mac sauce over the bottom base.Top with some chopped onion, shredded lettuce, slice of cheese, beef patty and some pickle slices.Top with the middle bun layer, and spread with more Big Mac sauce, onion, lettuce, pickles, beef patty and then finish with more sauce.Top with burger lid to serve.5.After waiting half an hour for your food to settle, go for a jog." },
                { id: 5, image: "./images/recipes/banana-pancakes.jpg", name: "Banana Pancakes", category: "Breakfast", time: "20 mins", level: "Easy", likes: 18, ingredients: "1 large Banana, 2 medium Eggspinch Baking Powder, spinkling Vanilla Extract1 tsp Oil, 25g Pecan Nuts, 125g Raspberries", instructions: "In a bowl, mash the banana with a fork until it resembles a thick purée.Stir in the eggs, baking powder and vanilla.Heat a large non-stick frying pan or pancake pan over a medium heat and brush with half the oil.Using half the batter, spoon two pancakes into the pan, cook for 1-2 mins each side, then tip onto a plate.Repeat the process with the remaining oil and batter.Top the pancakes with the pecans and raspberries." },
                { id: 6, image: "./images/recipes/chocolate-souffle.jpg", name: "Chocolate Souffle", category: "Desserts", time: "20 mins", level: "Easy", likes: 18, ingredients: "142ml Single Cream, 25g Caster Sugar, 100g Dark Chocolate, 25g Butterdrizzle Butter, 50g Caster Sugar, 175g Dark Chocolate, 2 tbs Double Cream, 4 Egg Yolks, 5 Egg White, 2 tbs Double Cream to serve Icing Sugar", instructions: "Heat oven to 220C/fan 200C/gas 7 and place a baking tray on the top shelf.For the sauce, heat the cream and sugar until boiling.Remove from the heat, stir in the chocolate and butter until melted, then keep warm.Brush 6 x 150ml ramekins with melted butter, sprinkle with the 2 tbsp caster sugar, then tip out any excess.Melt the chocolate and cream in a bowl over a pan of simmering water, cool, then mix in the egg yolks.Whisk the egg whites until they hold their shape, then add the sugar, 1 tbsp at a time, whisking back to the same consistency.Mix a spoonful into the chocolate, then gently fold in the rest.Working quickly, fill the ramekins, wipe the rims clean and run your thumb around the edges.Turn oven down to 200C/fan 180C/gas 6, place the ramekins onto the baking tray, then bake for 8-10 mins until risen with a slight wobble.Don’t open the oven door too early as this may make them collapse.Once the soufflés are ready, dust with icing sugar, scoop a small hole from their tops, then pour in some of the hot chocolate sauce.Replace the lids and serve straight away." },
                { id: 7, image: "./images/recipes/pina-colada.jpg", name: "Pina Colada", category: "Drinks", time: "20 mins", level: "Easy", likes: 18, ingredients: "3 tblsp Coconut milk, 3 tblsp Pineapple", instructions: "Mix with crushed ice in blender until smooth.Pour into chilled glass, garnish and serve. GlassServe: Collins glass" },
                { id: 8, image: "./images/recipes/strawberry-lemonade.jpg", name: "Strawberry Lemonade", category: "Drinks", time: "20 mins", level: "Easy", likes: 18, ingredients: "Juice of 1 Lemon, 1 tblsp Sugar, 8-10 ripe Strawberries, 1 cup Water", instructions: "Throw everything into a blender and mix until fairly smooth. Serve over ice. Glass Serve: Collins Glass" }

            ],
            topten:[

            ],
            savedrecipes:[

            ],
            categories: [

                { name: 'Desserts', id:1 },
                { name: 'Entrees', id:2 },
                { name: 'Lunch', id:3 },
                { name: 'Breakfast', id:4 },
                { name: 'Soups', id:5},
                { name: 'Drinks', id:6},
                { name: 'ALL', id:7},
            ],
            recipe: {},
            all_recipes: [],
            hasRecipes: true,

        }
    },

    mounted: function () {
        this.all_recipes = this.recipes;

        

//Llena el arreglo de recipes

axios({
    method: 'get',
    url: 'http://prueba01.test/api/recipes/all'
})
    .then(
        (response) => {

            let items = response.data;
            console.log(items);

            this.recipes = [];
            items.forEach(element => {
                this.recipes.push({
                    id: element.id,
                    image: element.image,
                    name: element.name,
                    description: element.description,
                    occasion: element.occasion,
                    level: element.level,
                    likes: element.likes,
                    total_time: element.total_time
                    
                })
            })
         //   console.log(this.recipes);
         //this.fillDataDetails();
        }
    )
    .catch(
        error => console.log(error)
    );
//_____________________________________-Axios para TOP 10-__________________________-
            axios({
                method: 'get',
                url: 'http://prueba01.test/api/recipes/top10'
            })
                .then(
                    (response) => {
    
                        let items = response.data;
                        console.log(items);
    
                        this.topten = [];
                        items.forEach(element => {
                            this.topten.push({
                                id: element.id,
                                image: element.image,
                                name: element.name,
                                description: element.description,
                                occasion: element.occasion,
                                level: element.level,
                                likes: element.likes,
                                total_time: element.total_time
                                
                            })
                        })
                     //   console.log(this.recipes);
                     //this.fillDataDetails();
                    }
                )
                .catch(
                    error => console.log(error)
                );
                //_____________________________________-Axios para guardados-__________________________-
    },
    methods: {

        
        fillDataDetails(){
            for(let i =0; i < this.recipes.length; i++){
                axios({
                    method: 'get',
                    url: 'http://prueba01.test/api/recipes/recipe/'+this.recipe[i].id
                })
                    .then(
                        (response) => {
        
                            let items = response.data;
                            console.log(items);

                          //  this.recipes[i].category= items.category,
                          
                            this.recipes[i].level= items.level,
                            this.recipes[i].likes= items.likes,
                            this.recipes[i].preparation_time= items.preparation_time,
                            this.recipes[i].description= items.description,
                            this.recipes[i].cooking_time= items.cooking_time,
                            this.recipes[i].cooking_time= items.cooking_time,
                            this.recipes[i].total_time= items.total_time,
                            this.recipes[i].preparation_instructions= items.preparation_instructions,
                            this.recipes[i].portions= items.portions,
                            this.recipes[i].category= items.category,
                            this.recipes[i].occasion= items.occasion,
                            this.recipes[i].ingredients= "NA"
                        }
                    )
                    .catch(
                        error => console.log(error)
                    );
            }
        },

        onClickRecipeLike(index) {
            this.recipes[index].likes += 1;
        },
        onClickRecipeUnlike(index) {
            if (this.recipes[index].likes > 0) this.recipes[index].likes -= 1;
        },
        onClickPrev() {
            if (this.currentRecipeIndex > 0) {
                this.currentRecipeIndex--; 
                this.currentRecipe = this.recipes[this.currentRecipeIndex]; 
            }
        },
        onClickNext() {
            this.recipes++;
            if (this.recipes >= this.recipes.length) {
                this.recipes = 0;
            }
        },
        onSaveRecipe(index) {
            this.selectedIndex = index;
            console.log("RECIPE ID -" + index);
            
            axios({
                method: 'get',
                url: 'http://prueba01.test/api/recipes/all'
            })
                .then(
                    (response) => {
            


                        axios({
    method: 'get',
    url: 'http://prueba01.test/api/recipes/all'
})
    .then(
        (response) => {

            let items = response.data;
            console.log(items);

            items.forEach(element => {
                if(this.recipe.id===index){
                this.savedrecipes.push({
                    id: element.id,
                    image: element.image,
                    name: element.name,
                    description: element.description,
                    occasion: element.occasion,
                    level: element.level,
                    likes: element.likes,
                    total_time: element.total_time
                    
                })}
            })
         //   console.log(this.recipes);
         //this.fillDataDetails();
        }
    )
    .catch(
        error => console.log(error)
    );
                        let items = response.data;
                        console.log(items);
            
                        this.recipes = [];
                        items.forEach(element => {
                            this.recipes.push({
                                id: element.id,
                                image: element.image,
                                name: element.name,
                                description: element.description,
                                occasion: element.occasion,
                                level: element.level,
                                likes: element.likes,
                                total_time: element.total_time
                                
                            })
                        })
                        console.log(this.savedrecipes);
                     //this.fillDataDetails();
                    }
                )
                .catch(
                    error => console.log(error)
                );

        },
        onClickRecipeDetails(index) {
            this.selectedIndex = index;
            console.log("RECIPE ID -" + index);

            //get recipe details
            axios({
                method: 'get',
                url: 'http://prueba01.test/api/recipes/recipe/'+index
            })
                .then(
                    (response) => {

                        //console.log(response.data.meals);

                        let item = response.data[0][0];
                        console.log(item);
                        
                                               
                        this.recipe.id = index;
                        this.recipe.image = item.image;
                        this.recipe.name = item.name;
                        this.recipe.category = item.category;
                        this.recipe.description = item.description;
                        this.recipe.cooking_time = item.cooking_time;
                        this.recipe.preparation_time = item.preparation_time;
                        this.recipe.level = item.level;
                        this.recipe.like = item.likes;
                        this.recipe.description = item.description;
                        this.recipe.preparation_instructions = item.preparation_instructions;
                        this.recipe.occasion = item.occasion;
                        this.recipe.portions = item.portions;
                        item.total_time;

                        console.log(item.total_time);


                        let tiempo_total = 0
                        tiempo_total = item.preparation_time + item.cooking_time;
                        this.recipe.total_time = tiempo_total;
                        

                        //get ingredients array
                        /*
                        let ingredientsList = "";
                        for(let i = 0; i < item.extendedIngredients.length; i++){
                            ingredientsList += item.extendedIngredients[i].original + "\n";
                        }
                        this.recipe.ingredients = ingredientsList;

                        let occasionsList = "";
                        for(let i = 0; i < item.occasions.length; i++){
                            occasion += item.occasions + "\n";
                        }
                        this.recipe.occasion = occasionsList;
*/
                        //this.fillDataDetails();
                    }
                )
                .catch(
                    error => console.log(error)
                );
        },
        onClickSelectedCategory(categorynum) {
      
            let urlstate1 ='http://prueba01.test/api/recipes/all'
            let urlstate2 ='http://prueba01.test/api/recipes/filterby/category/'+categorynum
            let url =''
            if(categorynum === 7){
                url = urlstate1;
            }else{
                url = urlstate2;
            }

            axios({
                method: 'get',
                url: url
                                    
            })
                    .then(
                        (response) => {
        
                            
                            let items = response.data;
                            console.log(items);
        
//defectuoso
                            this.recipes= [];

                            items.forEach(element => {
                                this.recipes.push({
                                    id: element.id,
                                    image: element.image,
                                    name: element.name,
                                    description: element.description,
                                    occasion: element.occasion,
                                    level: element.level,
                                    likes: element.likes,
                                    total_time: element.total_time
                                    
                                })
                            })
                         //   console.log(this.recipes);
                         //this.fillDataDetails();
                        }
                    )
                    .catch(
                        error => console.log(error)
                    );
            }



    }
})

//USER_REGISTER_METHODS





//init custom events for components
const emitter = new mitt();

//global property for custom events
app.config.globalProperties.$test = emitter;

/*

const app = Vue.createApp({


methods: {

//name,user_lastname,username,country,email,password

            onClickRegister(){

                
                const name = document.getElementById('name').value;
                const user_lastname = document.getElementById('lastname').value;
                const country = document.getElementById('country').value;
                const email = document.getElementById('email').value;
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;

                const data = {
                    name: name,
                    user_lastname: user_lastname,
                    country: country,
                    email: email,
                    username: username,
                    password: password
                };
                //prueba01.test/api/users/register/?name=username2&last_name=user_lastname&country=Costa Rica&email=pablo2@gmail.com&password=contra123

                axios({
                    method: 'post',
                    url: 'https://prueba01.test/api/users/register/'+this.register_url
                })
                    .then(
                    )this.username,
                    .catch(
                        error => console.log(error)
                    );
            
axios.post('http://localhost/primerprueba/public/api/users/register', data)
.then(response => {
    console.log(response.data);
    // Redirigir a ../../login
    window.location.href = '../../login.html';
})
.catch(error => {
    // Error en el registro
    console.error(error);
});
}



}
})

//USER_REGISTER_METHODS





//init custom events for components
const emitter = new mitt();

//global property for custom events
app.config.globalProperties.$test = emitter;
*/ 