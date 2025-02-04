class Calories {

    constructor(calories, proteins, fats, carbohydrates) {
        this.calories = calories ?? 0;
        this.proteins = proteins ?? 0;
        this.fats = fats ?? 0;
        this.carbohydrates = carbohydrates ?? 0;
    }

    add(calories) {
        this.calories += calories.calories;
        this.fats += calories.fats;
        this.proteins += calories.proteins;
        this.carbohydrates += calories.carbohydrates;
    }

    perWeight(weightInGramms) {
        return new Calories(this.calories / 100 * weightInGramms,
            this.proteins / 100 * weightInGramms,
            this.fats / 100 * weightInGramms,
            this.carbohydrates / 100 * weightInGramms)
    }
}

export default Calories;