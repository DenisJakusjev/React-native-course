class Meal {
    constructor(
        id, //ID of Meal
        categoryIds, //What categories they go to
        title, //Name of Meal
        affordability, //Pricing
        complexity, //How hard it is to
        imageUrl, //Image
        duration, //How long it takes
        ingredients, //What ingr is req
        steps, //What we need to do it
        isGlutenFree, //Filtering stuff BOOL
        isVegan, //BOOL
        isVegetarian, //BOOL
        isLactoseFree //BOOL
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;

    }
}

export default Meal