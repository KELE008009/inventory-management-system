export class SalesManagement {
    private sales: Array<{ id: number; item: string; quantity: number; price: number }> = [];
    private nextId: number = 1;

    addSale(item: string, quantity: number, price: number): void {
        const sale = {
            id: this.nextId++,
            item,
            quantity,
            price
        };
        this.sales.push(sale);
    }

    getSales(): Array<{ id: number; item: string; quantity: number; price: number }> {
        return this.sales;
    }

    deleteSale(id: number): boolean {
        const index = this.sales.findIndex(sale => sale.id === id);
        if (index !== -1) {
            this.sales.splice(index, 1);
            return true;
        }
        return false;
    }
}