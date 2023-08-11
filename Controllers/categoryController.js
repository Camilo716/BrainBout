class CategoryController {
    constructor() {
        this.categories = []
        this.loadCategories
    }

    async loadCategories() { 
        try {
            const response = await fetch('data/categories.json');
            const categoriesData = await response.json();
            this.categories = categoriesData;
        } catch (error) {
            console.error("Error loading categories:", error);
        } 
    }

    getCategoryById(categoryId) {
        if (categoryId) {
            return this.categories.find(cat => cat.id === categoryId);
        }
        throw new Error("A category with id " + categoryId + " doesn't exist")
    }
}