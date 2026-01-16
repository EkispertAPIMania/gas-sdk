import type { RepaymentListJson } from "../type/repayment_list";
import { RepaymentTicket } from "./repayment_ticket";

export class RepaymentList {
  private repaymentDate: Date | undefined;
  private validityPeriod: number | undefined;
  private startDate: Date | undefined;
  private buyDate: Date | undefined;
  private repaymentTickets: RepaymentTicket[] = [];

  constructor(data: RepaymentListJson) {
    this.sets(data);
  }

  sets(data: RepaymentListJson) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  set(key: string, value: any) {
    switch (key.toLocaleLowerCase()) {
      case "repaymentdate":
        this.repaymentDate = new Date(value);
        break;
      case "validityperiod":
        this.validityPeriod = Number(value);
        break;
      case "startdate":
        this.startDate = new Date(value);
        break;
      case "buydate":
        this.buyDate = new Date(value);
        break;
      case "repaymentticket":
        if (Array.isArray(value)) {
          this.repaymentTickets = value.map((item) => new RepaymentTicket(item));
        } else {
          this.repaymentTickets = [new RepaymentTicket(value)];
        }
        break;
      default:
        throw new Error(`Unknown key: ${key} in RepaymentList`);
    }
  }
}