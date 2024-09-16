import { User } from "./User";

export class MentalProgram {
    idProgram!: number;
    category! : string;
    description!: string;
    duration!: number;
    urlImage!: string;
    customer!: User[];
    pourcentage!: number;
    
}