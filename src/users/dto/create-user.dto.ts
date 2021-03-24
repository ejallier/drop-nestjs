import { Drop } from "src/drop/entities/drop.entity";

export class CreateUserDto {
    firstName: string;
    lastName: string;
    isActive?: boolean;
    code: string;
    // drops?: Drop[]
}
