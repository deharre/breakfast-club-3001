import { IMember, Member, MemberConverter } from "./Member";
import { IRawArrival } from "./RawViewModels";

export interface IArrival {
    id: string;
    memberId: string;
    memberName: string;
    arrivalTime: string;
    notes: string;
}

export class Arrival implements IArrival {
    constructor(
        public id: string = "",
        public memberId: string = "",
        public memberName: string = "",
        public arrivalTime: string = "",
        public notes: string = "") {
    }
}

export class ArrivalConverter {
    public static fromRawArrival(raw: IRawArrival) {
        const time = new Date(raw.arrivaltime).toLocaleString();
        return new Arrival(raw.id, raw.memberid, raw.membername, time, raw.notes);
    }
}