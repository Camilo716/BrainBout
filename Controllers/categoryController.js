class CategoryController {

    constructor() {
        this.categories = []
        this.loadCategories
    }

    loadCategories() {  
    }

    getCategoryById(categoryId) {
        if (categoryId) {
            return this.categories.find(cat => cat.id === categoryId);
        }
        throw new Error("A category with id " + categoryId + " doesn't exist")
    }
}