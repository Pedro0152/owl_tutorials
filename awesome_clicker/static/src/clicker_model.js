import { Reactive } from "@web/core/utils/reactive";
import { EventBus } from "@odoo/owl";

export class ClickerModel extends Reactive {
    constructor() {
        super();
        this.clicks = 0;
        this.level = 0;
        this.bus = new EventBus();
        this.bots = {
            clickbot: {
                price: 1000,
                level: 1,
                increment: 10,
                purchased: 0,
            },
            bigbot: {
                price: 5000,
                level: 2,
                increment: 100,
                purchased: 0,
            }
        }

        document.addEventListener("click", () => this.increment(1), true);
        setInterval(() => {
            for(const bot in this.bots) {
                this.clicks += this.bots[bot].purchased * this.bots[bot].increment;
            }
        }, 10000);
    }

    increment(inc) {
        this.clicks += inc;
        if (this.milestones[this.level] && this.clicks >= this.milestones[this.level].clicks){
            this.bus.trigger("MILESTONE", this.milestones[this.level]);
            this.level++;
        }
    }

    buyBot(name) {
        if(!this.bots[name]){
            throw new error("Bot not found");
        }
        if(this.clicks < this.bots[name].price){
        return false;
        }
        this.clicks -= this.bots[name].price;
        this.bots[name].purchased += 1;
    }

    get milestones(){
        return [
            { clicks: 1000, unlock: "clickBot" },
            { clicks: 5000, unlock: "bigBot" },
            ]
    }
}