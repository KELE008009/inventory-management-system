export class StockIn {
    private stock: { [key: string]: number } = {};

    addStock(item: string, quantity: number): void {
        if (this.stock[item]) {
            this.stock[item] += quantity;
        } else {
            this.stock[item] = quantity;
        }
    }

    getStock(item: string): number {
        return this.stock[item] || 0;
    }
}