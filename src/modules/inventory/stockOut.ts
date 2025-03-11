export class StockOut {
    private stock: { [key: string]: number } = {};

    constructor(initialStock: { [key: string]: number }) {
        this.stock = initialStock;
    }

    public removeStock(item: string, quantity: number): boolean {
        if (this.stock[item] && this.stock[item] >= quantity) {
            this.stock[item] -= quantity;
            return true;
        }
        return false;
    }

    public getStock(): { [key: string]: number } {
        return this.stock;
    }
}