
export interface Meal {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
    deletedAt: Date;
    name: string;
    price: number;
    portionWeight: number;
    number: number;
    cuisineId: number;
    cuisineName: string;
}