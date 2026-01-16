import { RepaymentTicketJson } from "./repayment_ticket";
export interface RepaymentListJson {
  repaymentDate: string;
  validityPeriod: string;
  startDate: string;
  buyDate: string;
  RepaymentTicket: RepaymentTicketJson[] | RepaymentTicketJson;
}
