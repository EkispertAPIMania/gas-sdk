import type { RepaymentTicketJson } from "../type/repayment_ticket";

export class RepaymentTicket {
  private feePriceValue: number | undefined;
  private repayPriceValue: number | undefined;
  private state: number | undefined;
  private usedPriceValue: number | undefined;
  private calculateTarget: boolean | undefined;
  private toTeikiRouteSectionIndex: number | undefined;
  private fromTeikiRouteSectionIndex: number | undefined;
  private validityPeriod: number | undefined;
  private payPriceValue: number | undefined;
  private changeableSection: boolean | undefined;

  constructor(data: RepaymentTicketJson) {
    this.sets(data);
  }

  sets(data: RepaymentTicketJson) {
    Object.entries(data).forEach(([key, value]) => {
      this.set(key, value);
    });
  }

  set(key: string, value: any) {
    switch (key.toLocaleLowerCase()) {
      case "feepricevalue":
        this.feePriceValue = Number(value);
        break;
      case "repaypricevalue":
        this.repayPriceValue = Number(value);
        break;
      case "state":
        this.state = Number(value);
        break;
      case "usedpricevalue":
        this.usedPriceValue = Number(value);
        break;
      case "calculatetarget":
        this.calculateTarget = value.toLocaleLowerCase() === 'true' ? true : false;
        break;
      case "toteikiroutesectionindex":
        this.toTeikiRouteSectionIndex = Number(value);
        break;
      case "fromteikiroutesectionindex":
        this.fromTeikiRouteSectionIndex = Number(value);
        break;
      case "validityperiod":
        this.validityPeriod = Number(value);
        break;
      case "paypricevalue":
        this.payPriceValue = Number(value);
        break;
      case "changeablesection":
        this.changeableSection = value.toLocaleLowerCase() === 'true' ? true : false;
        break;
      default:
        throw new Error(`Unknown key: ${key} in RepaymentTicket`);
    }
  }
}